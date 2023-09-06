import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { rootFolder } from './utils.mjs';

const allBenches = await readdir(join(rootFolder, 'bench')).then(items => {
  return items.filter(item => item.endsWith('.js'));
});

const formatJobName = name => name
.replace('.js', '')
.replace(/[^a-zA-Z\-_]/g, '_')
.slice(0, 100)

const benchJobs = allBenches.map((benchFile, index, array) => {
  const jobName = formatJobName(benchFile);

  return `
  ${jobName}:
    ${ index > 0 ? `needs: ${formatJobName(array[index - 1])}` : '' }
    name: Running "${benchFile}"
    uses: ./.github/workflows/bench.yml
    with:
      bench-file: ${benchFile}
`;
});

const template = `
name: 'Run All'

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  ${benchJobs.join('')}
`;

await writeFile(join(rootFolder, '.github', 'workflows', 'run_all.yml'), template);
