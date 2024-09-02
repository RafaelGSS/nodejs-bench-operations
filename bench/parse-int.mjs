import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Parsing Integer')

suite
  .add('Using parseInt(x, 10) - small number (2 len)', function () {
    return parseInt('5', 10)
  })
  .add('Using parseInt(x, 10) - big number (10 len)', function () {
    return parseInt('9999999999', 10)
  })
  .add('Using + - small number (2 len)', function () {
    return +'5'
  })
  .add('Using + - big number (10 len)', function () {
    return +'9999999999'
  })

await suite.runAndPrintResults()
