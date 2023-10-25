import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const versions = ['v18', 'v20', 'v21'];

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
    if (aResult[bench] === null || bResult[bench] === null) {
      console.warn(`Skipping ${bench} - no benchmark data`)
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

      // regression
      if (aOpsSec - bOpsSec > 0) {
        const threshold = aOpsSec - (aOpsSec * 0.15);
        if (bOpsSec < threshold) {
          console.warn(`[REGRESSION DETECTED] - ${bench}#${aBenchResult.name} | ${aOpsSec} x ${bOpsSec}`);
        }
      } else {
        const threshold = aOpsSec + (aOpsSec * 0.15);
        if (bOpsSec > threshold) {
          console.warn(`[IMPROVEMENT DETECTED] - ${bench}#${aBenchResult.name} | ${aOpsSec} x ${bOpsSec}`);
        }
      }
    }
  }
}

async function main (versions) {
  for (const version of versions) {
    const dir = (await fs.readdir(version, { withFileTypes: true })).sort();
    let previous;
    let previousName;
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

main(versions)
