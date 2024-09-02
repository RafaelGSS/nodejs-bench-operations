import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Date String coersion')

suite
  .add('Using String()', function () {
    const date = new Date()
    const value = String(date)
    return value
  })
  .add('Using brackets {}', function () {
    const date = new Date()
    const value = `${date}`
    return value
  })
  .add("Using '' + ", function () {
    const date = new Date()
    const value = '' + date
    return value
  })
  .add('Using date.toString()', function () {
    const date = new Date()
    const value = date.toString()
    return value
  })

await suite.runAndPrintResults()
