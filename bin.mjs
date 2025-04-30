import { readdir } from 'node:fs'
import { join } from 'node:path'
import { platform, arch, cpus, totalmem } from 'node:os'
import { spawnSync } from 'node:child_process'

const machineInfo = `${platform()} ${arch()} | ${cpus().length} vCPUs | ${(totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

const writter = process.stdout

writter.write('# Node.js Benchmark Operations')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)

readdir(join(import.meta.dirname, './bench'), (_err, files) => {
  for (const file of files) {
    const out = spawnSync(process.execPath, ['--allow-natives-syntax', join(import.meta.dirname, './bench', file)]).stdout
    writter.write('\n' + out.toString())
  }
  writter.end()
})
