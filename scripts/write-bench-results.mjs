import { mkdir, rename } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { existAsync, rootFolder } from './utils.mjs';

/**
 * The object result with the artifacts names
 * The result will be a record with the possible states:
 * 
 * ```js
 * // when is called by bench.yml
 * { '18.18.0': 'result-1-18.18.0-add-property.js.md' }
 * // when is called by watch_bench.yml
 * { 'add-property.js:18.18.0': 'result-1-18.18.0-add-property.js.md' }
 * ```
 * 
 * @type {{ result: { [nodeVersion: string]: string } }}
 */
const benchResult = JSON.parse(process.env.BENCH_ARTIFACTS);

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
  const reportFilepath = benchResult.result[key];

  const outputFolder = resolve(rootFolder, `./v${major}/v${nodeVersion}`);

  const outputFolderExist = await existAsync(outputFolder);

  if (!outputFolderExist) {
    await mkdir(outputFolder, {
      recursive: true,
    });
  }

  await rename(`./${reportFilepath}`, `${outputFolder}/${benchFile}.md`, 'utf-8');
}
