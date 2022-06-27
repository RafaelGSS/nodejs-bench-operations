const Benchmark = require('benchmark')
const { eventToMdTable, H2, createTableHeader } = require('../markdown')
const suite = new Benchmark.Suite;

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const map = new Map()
map.set('aa', 1)
map.set('a', 1)
map.set('c', 1)
map.set('bb', 1)
map.set('bd', 1)
map.set('b', 1)

suite.add('Sort using default', function () {
  new Map([...map].sort())
})
.add('Sort using first char', function () {
  new Map([...map].sort((a, b) => {
    return a[0] > b[0] ? -1 : 1
  }))
})
.add('Sort using localeCompare', function () {
  new Map([...map].sort((a, b) => String(a[0]).localeCompare(b[0])))
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Sorting Map'))
  console.log(tableHeader)
})
.run({ 'async': false });
