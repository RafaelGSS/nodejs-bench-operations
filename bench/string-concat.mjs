import { createBenchmarkSuite } from "../common.mjs"

const suite = createBenchmarkSuite('String concat')

const k = 'abcdefghijklmnopqrstuvz'
const o = '1'
const l = '2'

suite
  .add('Using + sign', function () {
    return k + '-' + o + '-' + l
  })
  .add('Using backtick (`)', function () {
    return `${k}-${o}-${l}`
  })
  .add('Using array.join', function () {
    return [k, o, l].join('-')
  })

await suite.runAndPrintResults()
