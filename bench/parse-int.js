const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite
.add('Using parseInt(x, 10) - small number (2 len)', function () {
  parseInt('5', 10)
})
.add('Using parseInt(x, 10) - big number (10 len)', function () {
  parseInt('9999999999', 10)
})
.add('Using + - small number (2 len)', function () {
  +'5'
})
.add('Using + - big number (10 len)', function () {
  +'9999999999'
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Parsing Integer'))
  console.log(tableHeader)
})
.run({ 'async': false });
