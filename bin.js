const fs = require('node:fs')
const path = require('node:path')
const os = require('node:os')
const { spawnSync } = require('node:child_process')

const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

const writter = process.stdout

writter.write('# Node.js Benchmark Operations')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)

fs.readdir(path.join(__dirname, './bench'), (_err, files) => {
  for (const file of files) {
    const out = spawnSync(process.execPath, [path.join(__dirname, './bench', file)]).stdout
    writter.write('\n' + out.toString())
  }
  writter.end()
})
