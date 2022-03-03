const fs = require('fs')
const path = require('path')
const os = require('os')
const { spawnSync } = require('child_process')

const [majorVersion] = process.version.split('.')
const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

const writter = fs.createWriteStream(`RESULTS-${majorVersion}.md`)

writter.write('# Node.js Benchmark Operations')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)

fs.readdir(path.join(__dirname, './bench'), (err, files) => {
  for (const file of files) {
    const out = spawnSync(process.execPath, [path.join(__dirname, './bench', file)]).stdout
    writter.write('\n## ' + file)
    writter.write("\n```\n" + out.toString() + "```")
  }

  writter.end()
})
