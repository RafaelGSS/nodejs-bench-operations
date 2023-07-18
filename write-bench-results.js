const fs = require('node:fs');
const path = require('node:path');

const benchResult = JSON.parse(process.env.BENCH_RESULT);

function getBenchmarkFile(key) {
  const filepath = process.env.BENCH_FILE || key.split(':')[0];

  return path.basename(filepath, '.js');
}

function getBenchmarkNodeVersion(key) {
  return process.env.BENCH_FILE ? key : key.split(':')[1];
}

for (const key of Object.keys(benchResult.result)) {
  const benchFile = getBenchmarkFile(key);
  const nodeVersion = getBenchmarkNodeVersion(key);

  const major = nodeVersion.split('.')[0];
  const result = decodeURIComponent(benchResult.result[key]).replace(/\\#/g, '#');
  const outputFolder = `./v${major}/${nodeVersion.replace(/\./g, '_')}`;

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, {
      recursive: true,
    });
  }

  fs.writeFileSync(`${outputFolder}/${benchFile}.md`, result, 'utf-8');
}
