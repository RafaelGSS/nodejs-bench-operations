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
      node-versions: \${{ inputs.node-versions }}
`;
});

const template = `
# Auto Generated YAML please don't change
name: 'Run All'

on:
  workflow_dispatch:
    inputs:
      node-versions:
        required: true
        type: string
        default: '["16.0.0", "16.18.1", "16.19.0", "16.20.2", "18.0.0", "18.16.1", "18.17.1", "18.18.0", "20.0.0", "20.6.0", "20.7.0", "20.8.0", "21.0.0", "21.1.0"]'
        description: 'The Node.js Versions (should be a JSON array)'

permissions:
  contents: write
  issues: write

jobs:
  ${benchJobs.join('')}
`;

await writeFile(join(rootFolder, '.github', 'workflows', 'run_all.yml'), template);
