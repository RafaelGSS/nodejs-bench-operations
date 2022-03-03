const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const writter = fs.createWriteStream(`RESULTS-${process.version}.md`)

writter.write('# Node.js Benchmark Operations\n')

fs.readdir(path.join(__dirname, './bench'), (err, files) => {
  for (const file of files) {
    const out = spawnSync(process.execPath, [path.join(__dirname, './bench', file)]).stdout
    writter.write('\n## ' + file)
    writter.write("\n```\n" + out.toString() + "```")
  }

  writter.end()
})
