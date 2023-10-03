const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Sorting Map')

const map = new Map()
map.set('aa', 1)
map.set('a', 1)
map.set('c', 1)
map.set('bb', 1)
map.set('bd', 1)
map.set('b', 1)

suite
  .add('Sort using default', function () {
    new Map([...map].sort())
  })
  .add('Sort using first char', function () {
    new Map([...map].sort((a, b) => (a[0] > b[0] ? 1 : -1)))
  })
  .add('Sort using localeCompare', function () {
    new Map([...map].sort((a, b) => String(a[0]).localeCompare(b[0])))
  })
  .run({ async: false })
