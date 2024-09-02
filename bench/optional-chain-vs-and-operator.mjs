import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Optional Chain (?) vs && operator')

const validObj = {
  field: {
    field2: 'example data',
  },
}

const nullObj = {
  foo: {
    field2: 'example data',
  },
}

suite
  .add('Using optional chain (obj.field?.field2) (Valid)', function () {
    return validObj.field?.field2
  })
  .add('Using optional chain (obj.field?.field2) (undefined)', function () {
    return nullObj.field?.field2
  })
  .add('Using and operator (obj.field && obj.field.field2) (Valid)', function () {
    return validObj.field && validObj.field.field2
  })
  .add('Using and operator (obj.field && obj.field.field2) (undefined)', function () {
    return nullObj.field && nullObj.field.field2
  })

await suite.runAndPrintResults()
