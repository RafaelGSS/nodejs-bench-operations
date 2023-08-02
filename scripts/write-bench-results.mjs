import { mkdir, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { existAsync, rootFolder } from './utils.mjs';

const benchResult = JSON.parse(process.env.BENCH_RESULT);

function getBenchmarkFile(key) {
  const filepath = process.env.BENCH_FILE || key.split(':')[0];

  return basename(filepath, '.js');
}

function getBenchmarkNodeVersion(key) {
  return process.env.BENCH_FILE ? key : key.split(':')[1];
}

for (const key of Object.keys(benchResult.result)) {
  const benchFile = getBenchmarkFile(key);
  const nodeVersion = getBenchmarkNodeVersion(key);

  const major = nodeVersion.split('.')[0].replace(/\./g, '_');
  const result = decodeURIComponent(benchResult.result[key]).replace(/\\#/g, '#');
  const outputFolder = resolve(rootFolder, `./v${major}/${nodeVersion}`);

  const outputFolderExist = await existAsync(outputFolder);

  if (!outputFolderExist) {
    await mkdir(outputFolder, {
      recursive: true,
    });
  }

  // TODO: Add machine details for every file

  await writeFile(`${outputFolder}/${benchFile}.md`, result, 'utf-8');
}
