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
      detach-start-stop: true
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
        default: '["16.0.0", "16.18.1", "16.19.0", "16.20.2", "18.0.0", "18.16.1", "18.17.1", "18.18.0", "20.0.0", "20.7.0", "20.8.0", "20.9.0", "21.0.0", "21.1.0"]'
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
    steps:
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_KEY }}
          aws-region: \${{ secrets.AWS_REGION }}

      - name: Stop Runner
        uses: ./.github/workflows/runner-starter
        with:
          instance_id: 'i-065f0f848eb1615ae'
          action: 'stop'
          aws_default_region: 'us-west-2'
`;

await writeFile(join(rootFolder, '.github', 'workflows', 'run_all.yml'), template);
