const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('Error', function () {
  new Error('test');
})
.add('NodeError', function () {
  new TypeError('test');
})
.add('NodeError Range', function () {
  new RangeError('test');
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Node.js Error'))
  console.log(tableHeader)
})
.run({ 'async': false });
