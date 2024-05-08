import { createBenchmarkSuite } from '../common.mjs'
import { fromUnixToISOString } from '../utils/from-unix-to-iso-string'

const suite = createBenchmarkSuite('Date toISOString')

suite
  .add('new Date().toISOString()', function () {
    new Date().toISOString()
  })
  .add('fromUnixToISOString(new Date())', function () {
    fromUnixToISOString(new Date())
  })

await suite.runAndPrintResults()
