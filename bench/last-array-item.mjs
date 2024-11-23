import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Get the last item of an Array')

const arr100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
const arr10_000 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100))
const arr1_000_000 = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100))

suite
  .add('Length = 100 - Array.at', function () {
    return arr100.at(-1)
  })
  .add('Length = 10_000 - Array.at', function () {
    return arr10_000.at(-1)
  })
  .add('Length = 1_000_000 - Array.at', function () {
    return arr1_000_000.at(-1)
  })
  .add('Length = 100 - Array[length - 1]', function () {
    return arr100[arr100.length - 1]
  })
  .add('Length = 10_000 - Array[length - 1]', function () {
    return arr10_000[arr10_000.length - 1]
  })
  .add('Length = 1_000_000 - Array[length - 1]', function () {
    return arr1_000_000[arr1_000_000.length - 1]
  })

await suite.runAndPrintResults()
