import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Array Creation')

suite
  .add('new Array', function () {
    return new Array(1024 * 1024)
  })
  .add('Array.from', function () {
    return Array.from({ length: 1024 * 1024 })
  })

await suite.runAndPrintResults()
