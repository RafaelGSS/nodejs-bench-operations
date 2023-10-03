const { skipIfVersionWithMessage } = require('../utils')
skipIfVersionWithMessage('19.8.1||19.8.0', 'Blob')

const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Blob')

const { Blob } = require('buffer')

const source128 = Buffer.allocUnsafe(128)
const source1024 = Buffer.allocUnsafe(1024)
const blob128 = new Blob(source128)
const blob1024 = new Blob(source1024)

const options128 = { defer: true }
const options1024 = { defer: true }

suite
  .add('new Blob (128)', function () {
    const result = new Blob(source128)
  })
  .add('new Blob (1024)', function () {
    const result = new Blob(source1024)
  })
  .add(
    'text (128)',
    function (deferred) {
      blob128.text().then(deferred.resolve.bind(deferred))
    },
    options128,
  )
  .add(
    'text (1024)',
    function (deferred) {
      blob1024.text().then(deferred.resolve.bind(deferred))
    },
    options1024,
  )
  .add(
    'arrayBuffer (128)',
    function (deferred) {
      blob128.arrayBuffer().then(deferred.resolve.bind(deferred))
    },
    options128,
  )
  .add(
    'arrayBuffer (1024)',
    function (deferred) {
      blob1024.arrayBuffer().then(deferred.resolve.bind(deferred))
    },
    options1024,
  )
  .add('slice (0, 64)', function () {
    blob128.slice(0, 64)
  })
  .add('slice (0, 512)', function (deferred) {
    blob1024.slice(0, 512)
  })
  .run({ async: false })
