const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Possible undefined Function')

suite
  .add('Using if to check function existence', function () {
    const emptyObject = Object.create({})
    if (emptyObject.undefinedFunction) {
      emptyObject.undefinedFunction()
    }
  })
  .add('Using ? operator to avoid rejection', function () {
    const emptyObject = Object.create({})
    emptyObject.undefinedFunction?.()
  })
  .run({ async: false })
