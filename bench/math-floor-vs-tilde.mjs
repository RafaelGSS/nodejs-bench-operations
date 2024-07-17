import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Math.floor vs ~')

suite
  .add('Math.floor (small)', function () {
    return Math.floor(15.95)
  })
  .add('~ (small)', function () {
    return ~15.95
  })
  .add('Math.floor (long)', function () {
    return Math.floor(15.95231232132132)
  })
  .add('~ (long)', function () {
    return ~15.95231232132132
  })

await suite.runAndPrintResults()
