import Benchmark from 'benchmark'
import { createTableHeader, H2, eventToMdTable } from './markdown.mjs'
import { platform, arch, cpus, totalmem } from 'os'

export function installMarkdownEmitter(suite, name, tableHeaderColumns = ['name', 'ops/sec', 'samples']) {
  const tableHeader = createTableHeader(tableHeaderColumns)

  suite
    .on('start', function () {
      console.log(H2(name))
      console.log(tableHeader)
    })
    .on('cycle', function (event) {
      console.log(eventToMdTable(event))
    })
}

function getMachineInfo() {
  return {
    platform: platform(),
    arch: arch(),
    cpus: cpus().length,
    totalMemory: totalmem() / 1024 ** 3,
  }
}

export function installMarkdownMachineInfo(suite) {
  if (!process.env.CI) return

  const { platform, arch, cpus, totalMemory } = getMachineInfo()

  const machineInfo = `${platform} ${arch} | ${cpus} vCPUs | ${totalMemory.toFixed(1)}GB Mem`

  suite.on('complete', () => {
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
  })
}

export function installMarkdownHiddenDetailedInfo(suite) {
  if (!process.env.CI) return

  const cycleEvents = []

  suite
    .on('cycle', function (event) {
      cycleEvents.push({
        name: event.target.name,
        opsSec: event.target.hz,
        samples: event.target.cycles,
      })
    })
    .on('complete', function () {
      const writter = process.stdout

      writter.write('<!--\n')
      writter.write(
        JSON.stringify({
          environment: getMachineInfo(),
          benchmarks: cycleEvents,
        }),
      )
      writter.write('-->\n')
    })
}

export function createBenchmarkSuite(name, { tableHeaderColumns = ['name', 'ops/sec', 'samples'] } = {}) {
  const suite = new Benchmark.Suite()

  installMarkdownEmitter(suite, name, tableHeaderColumns)
  installMarkdownMachineInfo(suite)
  installMarkdownHiddenDetailedInfo(suite)

  return suite
}
