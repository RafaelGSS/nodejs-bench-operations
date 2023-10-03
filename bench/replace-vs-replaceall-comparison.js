const { skipIfVersionWithMessage } = require('../utils')
skipIfVersionWithMessage('<15.0.0', 'replace vs replaceAll comparison')

const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('replace vs replaceAll comparison')

suite
  .add('Using replace(//g)', function () {
    const text = '1+2+3+4+5+6+7+8+9'
    const replaced = text.replace(/\+/g, ' ')
  })
  .add('Using replaceAll()', function () {
    const text = '1+2+3+4+5+6+7+8+9'
    const replaced = text.replaceAll('+', ' ')
  })
  .add('Using replaceAll(//g)', function () {
    const text = '1+2+3+4+5+6+7+8+9'
    const replaced = text.replaceAll(/\+/g, ' ')
  })
  .run({ async: false })
