const fs = require('node:fs');
const path = require('node:path');

const benchResult = JSON.parse(process.env.BENCH_RESULT);

for (const key of Object.keys(benchResult.result)) {
  const [benchmarkFilepath, nodeVersion] = key.split(':');
  const benchFile = path.basename(benchmarkFilepath, '.js');

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
