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
  const nodeVersion = getBenchmarkNodeVersion(key).replace(/\./g, '_');

  const major = nodeVersion.split('_')[0];
  const result = Buffer.from(benchResult.result[key], 'base64').toString('utf8');
  const outputFolder = resolve(rootFolder, `./v${major}/${nodeVersion}`);

  const outputFolderExist = await existAsync(outputFolder);

  if (!outputFolderExist) {
    await mkdir(outputFolder, {
      recursive: true,
    });
  }

  await writeFile(`${outputFolder}/${benchFile}.md`, result, 'utf-8');
}
