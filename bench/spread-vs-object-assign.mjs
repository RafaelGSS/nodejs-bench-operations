import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Object.assign VS spread operator')

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

const smallObject = {
  a: {
    c: 1,
  },
  b: 2,
}
const anotherSmallObject = {
  a: {
    d: 3,
  },
  d: 1,
}

const bigObjectTotalKeys = Object.keys(bigObject).length
const smallObjectTotalKeys = Object.keys(smallObject).length

suite
  .add(`{...bigObject} - Total keys: ${bigObjectTotalKeys}`, function () {
    const nextObject = { ...bigObject }
    return nextObject
  })
  .add(`{...smallObject} - Total keys: ${smallObjectTotalKeys}`, function () {
    const nextObject = { ...smallObject }
    return nextObject
  })
  .add(
    `Object.assign({}, bigObject, anotherBigObject) - Total keys: ${bigObjectTotalKeys} - creating new object`,
    function () {
      return Object.assign({}, bigObject, anotherBigObject)
    },
  )
  .add('Object.assign(bigObject, anotherBigObject) - mutating bigObject', function () {
    return Object.assign(bigObject, anotherBigObject)
  })
  .add('{ ...bigObject, ...anotherBigObject }', function () {
    const nextObject = { ...bigObject, ...anotherBigObject }
    return nextObject
  })
  .add('Object.assign({}, smallObject, anotherSmallObject) - creating new object', function () {
    return Object.assign({}, smallObject, anotherSmallObject)
  })
  .add('Object.assign(smallObject, anotherSmallObject) - mutating smallObject', function () {
    return Object.assign(smallObject, anotherSmallObject)
  })
  .add('{ ...smallObject, ...anotherSmallObject }', function () {
    const nextObject = { ...smallObject, ...anotherSmallObject }
    return nextObject
  })

await suite.runAndPrintResults()
