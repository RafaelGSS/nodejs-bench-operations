import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { rootFolder } from './utils.mjs';

import nv from '@pkgjs/nv';

const allBenches = await readdir(join(rootFolder, 'bench')).then(items => {
  return items.filter(item => item.endsWith('.mjs'));
});

const formatJobName = name => name
.replace('.mjs', '')
.replace(/[^a-zA-Z\-_]/g, '_')
.slice(0, 100)

let lastJobName = ''

const benchJobs = allBenches.map((benchFile, index, array) => {
  const jobName = formatJobName(benchFile);
  lastJobName = jobName;
  return `
  ${jobName}:
    ${ index > 0 ? `needs: ${formatJobName(array[index - 1])}` : 'needs: runner-start' }
    name: Running "${benchFile}"
    uses: ./.github/workflows/bench.yml
    with:
      bench-file: ${benchFile}
      node-versions: \${{ inputs.node-versions }}
      run-start-stop: false
`;
});

const MAJORS = [18, 20, 21, 22];
const nodeVersions = []
const allVersions = await nv('all');
for (const m of MAJORS) {
  nodeVersions.push(`${m}.0.0`);
  nodeVersions.push(
    // 😨
    ...allVersions.filter((v) => v.major === m).slice(-2).map((v) => v.version),
  );
}

const template = `
# Auto Generated YAML please don't change
name: 'Run All'

on:
  workflow_dispatch:
    inputs:
      node-versions:
        required: true
        type: string
        default: '${JSON.stringify(nodeVersions)}'
        description: 'The Node.js Versions (should be a JSON array)'

permissions:
  contents: write
  issues: write
  id-token: write

jobs:
  runner-start:
    runs-on: ubuntu-latest
    steps:
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: us-west-2
          role-to-assume: arn:aws:iam::800406105498:role/RafaelGSS-nodejs-bench-operations
      - name: Checkout
        uses: actions/checkout@v4

      - name: Start Runner
        uses: ./.github/workflows/runner-starter
        with:
          instance_id: 'i-065f0f848eb1615ae'
          action: 'start'
          aws_default_region: 'us-west-2'
  ${benchJobs.join('')}
  ## Stop Runner
  runner-stop:
    runs-on: ubuntu-latest
    needs: [${lastJobName}]
    steps:
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: us-west-2
          role-to-assume: arn:aws:iam::800406105498:role/RafaelGSS-nodejs-bench-operations
      - name: Checkout
        uses: actions/checkout@v4

      - name: Stop Runner
        uses: ./.github/workflows/runner-starter
        with:
          instance_id: 'i-065f0f848eb1615ae'
          action: 'stop'
          aws_default_region: 'us-west-2'
`;

await writeFile(join(rootFolder, '.github', 'workflows', 'run_all.yml'), template);
