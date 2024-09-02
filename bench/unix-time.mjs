import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Getting unix time')

suite
  .add('new Date().getTime()', function () {
    return new Date().getTime()
  })
  .add('Date.now()', function () {
    return Date.now()
  })

await suite.runAndPrintResults()
