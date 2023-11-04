import fs from 'node:fs/promises';
import { resolve } from 'node:path';

async function parseMD(path) {
  const content = await fs.readFile(path, 'utf-8');
  const strData = content.match(/<!--([\s\S]*?)-->/);
  if (!strData) {
    console.warn(`Returning empty results for ${path}`);
    return null;
  }
  return JSON.parse(strData[1].trim());
}

async function readResult (path) {
  const dir = await fs.opendir(path);
  const results = {};
  for await (const file of dir) {
    if (file.isFile()) {
      const filePath = resolve(file.path, file.name);
      results[file.name] = await parseMD(filePath);
    }
  }
  return results;
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
        // arbitrary threshold
        const threshold = aOpsSec - (aOpsSec * 0.20);
        if (bOpsSec < threshold) {
          console.warn(`📉 - ${bench}#${aBenchResult.name} | ${percent}%`);
        }
      } else {
        // arbitrary threshold
        const threshold = aOpsSec + (aOpsSec * 0.20);
        if (bOpsSec > threshold) {
          console.warn(`📈 - ${bench}#${aBenchResult.name} | ${percent}%`);
        }
      }
    }
  }
}

async function main (versions, majorOnly) {
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
        const content = await readResult(resolve(dirent.path, dirent.name));
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

let majorOnly = process.env.MAJOR_ONLY || false;
let versions = process.env.VERSIONS ? process.env.VERSIONS.split(',') : ['v18', 'v20', 'v21'];
main(versions, majorOnly);
