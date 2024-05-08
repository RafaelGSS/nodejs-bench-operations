import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Date String coersion')

suite
  .add('Using String()', function () {
    const date = new Date()
    const value = String(date)
  })
  .add('Using brackets {}', function () {
    const date = new Date()
    const value = `${date}`
  })
  .add("Using '' + ", function () {
    const date = new Date()
    const value = '' + date
  })
  .add('Using date.toString()', function () {
    const date = new Date()
    const value = date.toString()
  })

await suite.runAndPrintResults()
