const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable } = require('../markdown')

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
.run({ 'async': false });
