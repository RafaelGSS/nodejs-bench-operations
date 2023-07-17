const fs = require('node:fs');
const path = require('node:path');

const benchFile = path.basename(process.env.BENCH_FILE, '.js');
const benchResult = JSON.parse(process.env.BENCH_RESULT);

for (const nodeVersion of Object.keys(benchResult.result)) {
  const major = nodeVersion.split('.')[0];
  const result = decodeURIComponent(benchResult.result[nodeVersion]).replace(/\\#/g, '#');
  const outputFolder = `./v${major}/${nodeVersion.replace(/\./g, '_')}`;

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, {
      recursive: true,
    });
  }

  fs.writeFileSync(`${outputFolder}/${benchFile}.md`, result, 'utf-8');
}
