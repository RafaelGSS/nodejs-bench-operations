const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const bigObject = {}
const anotherBigObject = {}
function* keyGenerator() {
  let index = 1
  while (true) {
    index++

    yield `prop-${index}`
  }
}

const gen = keyGenerator()

for (let i = 0; i < 1000; i++) {
  bigObject[`prop-${i}`] = {
    [gen.next()]: {
      [gen.next()]: {
        [gen.next()]: {
          [gen.next()]: [
            {
              [gen.next()]: 3,
              [gen.next()]: [1, 2, 3, 4],
            },
          ],
        },
      },
    },
    [gen.next()]: 'test',
    [gen.next()]: ['a', 'b', 'c'],
  }

  anotherBigObject[`prop-${i}`] = {
    [gen.next()]: {
      [gen.next()]: {
        [gen.next()]: {
          [gen.next()]: [
            {
              [gen.next()]: 3,
              [gen.next()]: [1, 2, 3, 4],
            },
          ],
        },
      },
    },
    [gen.next()]: 'test',
    [gen.next()]: ['a', 'b', 'c'],
  }
}

const tableHeader = createTableHeader(['name', 'ops/sec', 'samples'])

suite
  .add(`Object.assign(bigObject, anotherBigObject) - Total keys: ${Object.keys(bigObject).length} - creating new object`, function () {
    Object.assign({}, bigObject, anotherBigObject)
  })
  .add('Object.assign(bigObject, anotherBigObject) - mutating bigObject', function () {
    Object.assign(bigObject, anotherBigObject)
  })
  .add('{ ...bigObject, ...anotherBigObject }', function () {
    const nextObject = { ...bigObject, ...anotherBigObject }
  })
  .on('cycle', function (event) {
    console.log(eventToMdTable(event))
  })
  .on('start', function () {
    console.log(H2('Object.assign VS spread operator'))
    console.log(tableHeader)
  })
  .run({ async: false })
