const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const smallObject = {
  a: {
    c: 1
  },
  b: 2
}
const anotherSmallObject = {
  a: {
    d: 3
  },
  d: 1
}

const tableHeader = createTableHeader(['name', 'ops/sec', 'samples'])

suite
  .add('Object.assign({}, smallObject, anotherSmallObject) - creating new object', function () {
    Object.assign({}, smallObject, anotherSmallObject)
  })
  .add('Object.assign(smallObject, anotherSmallObject) - mutating smallObject', function () {
    Object.assign(smallObject, anotherSmallObject)
  })
  .add('{ ...smallObject, ...anotherSmallObject }', function () {
    const nextObject = { ...smallObject, ...anotherSmallObject }
  })
  .on('cycle', function (event) {
    console.log(eventToMdTable(event))
  })
  .on('start', function () {
    console.log(H2('Object.assign VS spread operator'))
    console.log(tableHeader)
  })
  .run({ async: false })
