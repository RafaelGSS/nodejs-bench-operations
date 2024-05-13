import { skipIfVersionWithMessage } from '../utils.mjs'
import { createBenchmarkSuite } from '../common.mjs'
import { Blob } from 'buffer'
import assert from 'node:assert'

skipIfVersionWithMessage('19.8.1||19.8.0', 'Blob')
skipIfVersionWithMessage('16.0.0', 'Blob')

const suite = createBenchmarkSuite('Blob')

const source128 = Buffer.allocUnsafe(128)
const source1024 = Buffer.allocUnsafe(1024)
const blob128 = new Blob(source128)
const blob1024 = new Blob(source1024)

suite
  .add('new Blob (128)', function () {
    const result = new Blob(source128)
    assert.ok(result)
  })
  .add('new Blob (1024)', function () {
    const result = new Blob(source1024)
    assert.ok(result)
  })
  .add(
    'text (128)',
    async function () {
      return blob128.text()
    },
  )
  .add(
    'text (1024)',
    async function () {
      return blob1024.text()
    },
  )
  .add(
    'arrayBuffer (128)',
    async function () {
      return blob128.arrayBuffer()
    },
  )
  .add(
    'arrayBuffer (1024)',
    async function (deferred) {
      return blob1024.arrayBuffer()
    },
  )
  .add('slice (0, 64)', function () {
    const blob = blob128.slice(0, 64)
    assert.ok(blob)
  })
  .add('slice (0, 512)', function (deferred) {
    const blob = blob1024.slice(0, 512)
    assert.ok(blob)
  })

await suite.runAndPrintResults()
