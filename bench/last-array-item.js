const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Get the last item of an Array')

const arr100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
const arr10_000 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100))
const arr100_000_0 = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100))

suite
  .add('Length = 100 - Array.at', function () {
    arr100.at(-1)
  })
  .add('Length = 10_000 - Array.at', function () {
    arr10_000.at(-1)
  })
  .add('Length = 1_000_000 - Array.at', function () {
    arr100_000_0.at(-1)
  })
  .add('Length = 100 - Array[length - 1]', function () {
    arr100[arr100.length - 1]
  })
  .add('Length = 10_000 - Array[length - 1]', function () {
    arr10_000[arr10_000.length - 1]
  })
  .add('Length = 1_000_000 - Array[length - 1]', function () {
    arr100_000_0[arr100_000_0.length - 1]
  })
  .run({ async: false })
