import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Possible undefined Function')

suite
  .add('Using if to check function existence', function () {
    const emptyObject = Object.create({})
    if (emptyObject.undefinedFunction) {
      emptyObject.undefinedFunction()
    }
    return emptyObject
  })
  .add('Using ? operator to avoid rejection', function () {
    const emptyObject = Object.create({})
    emptyObject.undefinedFunction?.()
    return emptyObject
  })

await suite.runAndPrintResults()
