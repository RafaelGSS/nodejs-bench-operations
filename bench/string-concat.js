const { createBenchmarkSuite } = require("../common")

const suite = createBenchmarkSuite('String concat')

const k = 'abcdefghijklmnopqrstuvz'
const o = '1'
const l = '2'

suite
  .add('Using + sign', function () {
    // biome-ignore lint/style/useTemplate: <explanation>
    k + '-' + o + '-' + l
  })
  .add('Using backtick (`)', function () {
    ;`${k}-${o}-${l}`
  })
  .add('Using array.join', function () {
    ;[k, o, l].join('-')
  })
  .run()
