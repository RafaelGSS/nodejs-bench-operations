const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('new Array', function () {
  new Array(1024 * 1024)
})
.add('Array.from', function () {
  Array.from({ length: 1024 * 1024 })
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Array Creation'))
  console.log(tableHeader)
})
.run({ 'async': false });
