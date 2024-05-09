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
  const suite = new Bench()
  // TODO: move it to runAndPrintResults
  printMdHeader(name, tableHeaderColumns)
  return suite
}
