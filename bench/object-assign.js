const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const smallObj = { a: 1, b: '2' };

suite.add('Object.assign (small obj)', function () {
  const a = Object.assign({}, smallObj);
})
.add('Spread operator (small obj)', function () {
  const a = { ...smallObj }
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Object shallow close'))
  console.log(tableHeader)
})
.run({ 'async': false });
