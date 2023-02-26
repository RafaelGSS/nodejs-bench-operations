const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('for', function () {
  const arr = new Array(1024 * 1024)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i
  }
})
  .add('for of', function () {
    const arr = new Array(1024 * 1024)
    for (const i of arr) {
      arr[i] = i
    }
  })
  .add('for in', function () {
    const arr = new Array(1024 * 1024)
    for (const i in arr) {
      arr[i] = i
    }
  })
  .add('forEach', function () {
    const arr = new Array(1024 * 1024)
    arr.forEach((i) => {
      arr[i] = i
    })
  })
  .add('while', function () {
    const arr = new Array(1024 * 1024)
    let i = 0
    while (i < arr.length) {
      arr[i] = i
      i++
    }
  })
  .add('do while', function () {
    const arr = new Array(1024 * 1024)
    let i = 0
    do {
      arr[i] = i
      i++
    } while (i < arr.length)
  })
  .on('cycle', function (event) {
    console.log(eventToMdTable(event))
  })
  .on('start', function () {
    console.log(H2('Loops'))
    console.log(tableHeader)
  })
  .run({ async: false })
