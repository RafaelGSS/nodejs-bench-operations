import { Suite } from 'bench-node'
import { createTableHeader, H2, taskToMdTable } from './markdown.mjs'
import { platform, arch, cpus, totalmem } from 'os'

function printMdHeader(name, tableHeaderColumns = ['name', 'ops/sec', 'samples']) {
  const tableHeader = createTableHeader(tableHeaderColumns)
  console.log(H2(name))
  console.log(tableHeader)
}

function printMarkdownResults(results) {
  const cycleEvents = []
  for (const r of results) {
    if (process.env.CI) {
      const cycleEvent = {
        name: r.name,
        samples: r.iterations,
      }

      if (r.totalTime !== undefined) {
        cycleEvent.totalTime = r.totalTime
      } else {
        cycleEvent.opsSec = r.opsSec
      }

      cycleEvents.push(cycleEvent)
    }
    console.log(taskToMdTable(r))
  }
  printMarkdownMachineInfo()
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
* __Node:__ \`${process.version}\`
`)
  writter.write('</details>')
  writter.write('\n\n')
}

function printMarkdownHiddenDetailedInfo(results) {
  if (!process.env.CI) return

  const writter = process.stdout

  // We use it to check regressions.yml
  writter.write('<!--\n')
  writter.write(
    JSON.stringify({
      environment: getMachineInfo(),
      benchmarks: results,
    }),
  )
  writter.write('-->\n')
}

Suite.prototype.runAndPrintResults = async function () {
  const results = await this.run()
  printMarkdownResults(results)
}

export function createBenchmarkSuite(name, {
  tableHeaderColumns = ['name', 'ops/sec', 'samples'],
  mode = 'ops'
} = {}) {
  const suite = new Suite({ reporter: false, benchmarkMode: mode })
  // TODO: move it to runAndPrintResults
  printMdHeader(name, tableHeaderColumns)
  return suite
}
