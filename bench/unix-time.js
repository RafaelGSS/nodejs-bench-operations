const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('new Date().getTime()', function () {
  new Date().getTime()
})
.add('Date.now()', function () {
  Date.now()
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Getting unix time'))
  console.log(tableHeader)
})
.run({ 'async': false });
