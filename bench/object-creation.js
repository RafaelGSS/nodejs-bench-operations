const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

function Empty() {}
Empty.prototype = Object.create(null)

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('Object.create(null)', function () {
  Object.create(null)
})
.add('Object.create({})', function () {
  Object.create({})
})
.add('Cached Empty.prototype', function () {
  new Empty()
})
.add('Empty.prototype', function () {
  function NE() {}
  NE.prototype = Object.create(null)
  new NE()
})
.add('Empty class', function () {
  function C() {}
  new C()
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Object Creation'))
  console.log(tableHeader)
})
.run({ 'async': false });
