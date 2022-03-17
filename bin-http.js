const { readdir } = require('fs/promises')
const autocannon = require('autocannon')
const { once } = require('events')
const path = require('path')
const os = require('os')
const { spawn } = require('child_process')

const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

// const writter = fs.createWriteStream(`RESULTS-${majorVersion}.md`)
const writter = process.stdout

writter.write('# Node.js Benchmark HTTP')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)

async function storeLoadResult (file, result) {
  writter.write('\n## ' + file)
  writter.write('\n```\n')
  const resultStr = autocannon.printResult(result)
  writter.write(resultStr)
  writter.write('```')
}

async function main () {
  let NODE_PATH = path.join(__dirname, 'injects')
  const customEnv = {
    NODE_OPTIONS: '-r detect-port.js',
    NODE_PATH
  }
  const stdio = ['inherit', 'inherit', 'inherit', 'pipe']
  const files = await readdir(path.join(__dirname, './http'))

  for (const file of files) {
    const proc = spawn(process.execPath, [path.join(__dirname, './http', file)], {
      stdio,
      env: Object.assign({}, process.env, customEnv)
    })
    proc.stdio[3].once('data', (data) => {
      const instance = autocannon({
        url: 'http://localhost:3000/',
        connections: 100,
        duration: 20
      }, (err, results) => {
        storeLoadResult(file, results)
        proc.kill('SIGTERM')
      })
    })

    await once(proc, 'close')
  }

  writter.end()
}

main()
