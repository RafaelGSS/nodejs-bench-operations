const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('Using delete property', function () {
  const data = { x: 1, y: 2, z: 3 }
  delete data.y

  data.x
  data.y
  data.z
})
.add('Using undefined assignment', function () {
  const data = { x: 1, y: 2, z: 3 }
  data.y = undefined

  data.x
  data.y
  data.z
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Deleting properties'))
  console.log(tableHeader)
})
.run({ 'async': false });
