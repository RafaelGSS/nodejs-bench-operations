const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('using Array.includes', function () {
  const httpVersion = '1.1'
  const exists = ['2.0', '1.0', '1.1'].includes(httpVersion)
})
.add('using Array.includes (first item)', function () {
  const httpVersion = '2.0'
  const exists = ['2.0', '1.0', '1.1'].includes(httpVersion)
})
.add('Using raw comparisson', function () {
  const httpVersion = '1.1'
  const exists = httpVersion === '2.0' || httpVersion === '1.0' || httpVersion === '1.1'
})
.add('Using raw comparisson (first item)', function () {
  const httpVersion = '2.0'
  const exists = httpVersion === '2.0' || httpVersion === '1.0' || httpVersion === '1.1'
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Array.includes vs raw comparisson'))
  console.log(tableHeader)
})
.run({ 'async': false });
