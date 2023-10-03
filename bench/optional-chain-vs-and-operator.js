const { createBenchmarkSuite } = require('../common')

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
    validObj.field?.field2
  })
  .add('Using optional chain (obj.field?.field2) (undefined)', function () {
    nullObj.field?.field2
  })
  .add('Using and operator (obj.field && obj.field.field2) (Valid)', function () {
    validObj.field && validObj.field.field2
  })
  .add('Using and operator (obj.field && obj.field.field2) (undefined)', function () {
    nullObj.field && nullObj.field.field2
  })
  .run({ async: false })
