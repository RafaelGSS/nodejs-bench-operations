import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const ARBITRARY_THRESHOLD = 0.20;
const ARBITRARY_THRESHOLD_POOP = 0.10;

async function parseMD(path) {
  const content = await fs.readFile(path, 'utf-8');
  const strData = content.match(/<!--([\s\S]*?)-->/);
  if (!strData) {
    console.warn(`Returning empty results for ${path}`);
    return null;
  }
  return JSON.parse(strData[1].trim());
}

async function readResult(path) {
  const dir = await fs.opendir(path);
  const results = {};
  for await (const file of dir) {
    if (file.isFile()) {
      const filePath = resolve(file.parentPath || file.path, file.name);
      results[file.name] = await parseMD(filePath);
    }
  }
  return results;
}

function parseMetricValue(value) {
  /**
   * Convert poop metric values to numbers for comparison
   * Examples: "2.64ms" → 0.00264, "17.0MB" → 17825792, "4.24M" → 4240000
   */
  const units = {
    'ns': 1e-9, 'us': 1e-6, 'ms': 1e-3, 's': 1,
    'B': 1, 'KB': 1024, 'MB': 1024 ** 2, 'GB': 1024 ** 3,
    'K': 1e3, 'M': 1e6, 'G': 1e9
  };

  const match = value.match(/^([\d.]+)\s*(\w*)$/);
  if (!match) return parseFloat(value);

  const [, num, unit] = match;
  const multiplier = units[unit] || 1;
  return parseFloat(num) * multiplier;
}

/**
 * Check for regressions in poop metrics (wall_time, peak_rss, cpu_cycles, etc.)
 * For poop metrics, lower values are better (unlike opsSec where higher is better)
 */
async function checkPoopRegression(aResult, bResult, bench) {
  const aBench = aResult[bench].benchmarks;
  const bBench = bResult[bench].benchmarks;

  for (let i = 0; i < aBench.length; ++i) {
    const aBenchResult = aBench[i];
    const bBenchResult = bBench[i];

    if (aBenchResult.command !== bBenchResult.command) {
      console.warn(`Wrong benchmark comparison - ${aBenchResult.command} !== ${bBenchResult.command}. Skipping...`);
      continue;
    }

    const metricNames = Object.keys(aBenchResult.metrics);
    for (const metricName of metricNames) {
      const aMetric = aBenchResult.metrics[metricName];
      const bMetric = bBenchResult.metrics[metricName];

      if (!aMetric || !bMetric) continue;

      const aMean = parseMetricValue(aMetric.mean);
      const bMean = parseMetricValue(bMetric.mean);

      if (aMean === bMean) {
        console.info(`${bench} - ${aBenchResult.command}#${metricName} are equals`);
        continue;
      }

      const percent = ((bMean - aMean) / aMean * 100).toFixed(2);

      // For poop metrics, lower is better (regression if value increases)
      if (bMean > aMean) {
        const threshold = aMean + (aMean * ARBITRARY_THRESHOLD_POOP);
        if (bMean > threshold) {
          console.warn(`😱 - ${bench}#${aBenchResult.command}#${metricName} | +${percent}% (${aMetric.mean} → ${bMetric.mean})`);
        }
      } else {
        const threshold = aMean - (aMean * ARBITRARY_THRESHOLD_POOP);
        if (bMean < threshold) {
          console.warn(`😁 - ${bench}#${aBenchResult.command}#${metricName} | ${percent}% (${aMetric.mean} → ${bMetric.mean})`);
        }
      }
    }
  }
}

async function checkRegression(aResult, bResult) {
  const benchmarks = Object.keys(aResult);
  for (const bench of benchmarks) {
    // if (aBench.environment !== bBench.environment) {
    //   console.warn(`${bench} does have the same environment in ${a.name} and ${b.name}`);
    //   continue;
    // }
    if (aResult[bench] == null || bResult[bench] == null) {
      console.warn(`Skipping ${bench} - no benchmark data`)
      continue;
    }

    if (!aResult[bench].benchmarks || !bResult[bench].benchmarks) {
      console.warn(`No benchmarks field for ${bench}`);
      throw new Error('Unexpected behavior');
    }

    // Check if this is a poop metrics benchmark
    if (aResult[bench].type === 'poop-metrics') {
      await checkPoopRegression(aResult, bResult, bench);
      continue;
    }

    const aBench = aResult[bench].benchmarks;
    const bBench = bResult[bench].benchmarks;
    for (let i = 0; i < aBench.length; ++i) {
      const aBenchResult = aBench[i];
      const bBenchResult = bBench[i];
      if (aBenchResult.name !== bBenchResult.name) {
        console.warn(`Wrong benchmark comparisson - ${aBenchResult.name} !== ${bBenchResult.name}. Skipping...`);
        continue;
      }

      const aOpsSec = aBenchResult.opsSec;
      const bOpsSec = bBenchResult.opsSec;
      if (aOpsSec === bOpsSec) {
        console.info(`${bench} - ${aBenchResult.name} and ${bBenchResult.name} are equals`);
        continue;
      }

      const percent = ((bOpsSec - aOpsSec) / aOpsSec * 100).toFixed(2);
      // regression
      if (aOpsSec - bOpsSec > 0) {
        const threshold = aOpsSec - (aOpsSec * ARBITRARY_THRESHOLD);
        if (bOpsSec < threshold) {
          console.warn(`😱 - ${bench}#${aBenchResult.name} | ${percent}%`);
        }
      } else {
        const threshold = aOpsSec + (aOpsSec * ARBITRARY_THRESHOLD);
        if (bOpsSec > threshold) {
          console.warn(`😁 - ${bench}#${aBenchResult.name} | ${percent}%`);
        }
      }
    }
  }
}

async function main(versions, majorOnly) {
  let previous;
  let previousName;

  for (const version of versions) {
    let dir = (await fs.readdir(version, { withFileTypes: true })).sort();
    if (majorOnly) {
      dir = [dir.at(-1)];
    } else {
      // do not compare vN with vN+1
      previous = undefined;
      previousName = undefined;
    }
    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        const content = await readResult(resolve(dirent.parentPath || dirent.path, dirent.name));
        if (!previous) {
          previous = content;
          previousName = dirent.name;
          continue;
        }
        console.log(`Checking regression between ${previousName} and ${dirent.name}`);
        await checkRegression(previous, content);
        console.log(`${'-'.repeat(process.stdout.columns)}`);
        previous = content;
        previousName = dirent.name;
      }
    }
  }
}

let majorOnly = process.env.MAJOR_ONLY ? process.env.MAJOR_ONLY !== 'false' : false;
let versions = process.env.VERSIONS ? process.env.VERSIONS.split(',') : ['v18', 'v20', 'v21'];
main(versions, majorOnly);
