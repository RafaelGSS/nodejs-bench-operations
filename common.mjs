import { Bench } from 'tinybench'
import { createTableHeader, H2, taskToMdTable } from './markdown.mjs'
import { platform, arch, cpus, totalmem } from 'os'

function printMdHeader(name, tableHeaderColumns = ['name', 'ops/sec', 'samples']) {
  const tableHeader = createTableHeader(tableHeaderColumns)
  console.log(H2(name))
  console.log(tableHeader)
}

function printMarkdownResults(tasks) {
  const cycleEvents = []
  for (const task of tasks) {
    if (process.env.CI) {
      cycleEvents.push({
        name: task.name,
        opsSec: task.result.hz,
        samples: task.result.samples.length,
      })
    }
    console.log(taskToMdTable(task))
  }
  printMarkdownMachineInfo(cycleEvents)
  printMarkdownHiddenDetailedInfo(cycleEvents)
}

function getMachineInfo() {
  return {
    platform: platform(),
    arch: arch(),
    cpus: cpus().length,
    totalMemory: totalmem() / 1024 ** 3,
  }
}

function printMarkdownMachineInfo() {
  if (!process.env.CI) return

  const { platform, arch, cpus, totalMemory } = getMachineInfo()

  const machineInfo = `${platform} ${arch} | ${cpus} vCPUs | ${totalMemory.toFixed(1)}GB Mem`

  const writter = process.stdout

  writter.write('\n\n')
  writter.write('<details>\n')
  writter.write('<summary>Environment</summary>')
  writter.write(`\n
* __Machine:__ ${machineInfo}
* __Run:__ ${new Date()}
`)
  writter.write('</details>')
  writter.write('\n\n')
}

function printMarkdownHiddenDetailedInfo(cycleEvents) {
  if (!process.env.CI) return

  const writter = process.stdout

  // We use it to check regressions.yml
  writter.write('<!--\n')
  writter.write(
    JSON.stringify({
      environment: getMachineInfo(),
      benchmarks: cycleEvents,
    }),
  )
  writter.write('-->\n')
}

Bench.prototype.runAndPrintResults = async function () {
  await this.warmup()
  await this.run()
  printMarkdownResults(this.tasks)
}

export function createBenchmarkSuite(name, { tableHeaderColumns = ['name', 'ops/sec', 'samples'] } = {}) {
  const suite = new Bench({ warmupTime: 1000 })
  // TODO: move it to runAndPrintResults
  printMdHeader(name, tableHeaderColumns)
  return suite
}

// ➜  nodejs-bench-operations (main) node bench/add-property.mjs
// ## Adding property

// |name|ops/sec|samples|
// |-|-|-|
// |Directly in the object|18,428,648|9214325|
// |Using dot notation|17,217,733|8608867|
// |Using define property (writable)|3,052,726|1526364|
// |Using define property initialized (writable)|3,651,585|1825856|
// |Using define property (getter)|1,765,147|882574|
// ➜  nodejs-bench-operations (main) nvm use v22
// Now using node v22.7.0 (npm v10.8.2)
// ➜  nodejs-bench-operations (main) node bench/add-property.mjs
// ## Adding property

// |name|ops/sec|samples|
// |-|-|-|
// |Directly in the object|15,205,217|7602609|
// |Using dot notation|15,432,921|7716461|
// |Using define property (writable)|3,243,836|1621919|
// |Using define property initialized (writable)|3,557,399|1778700|
// |Using define property (getter)|2,047,757|1023879|
