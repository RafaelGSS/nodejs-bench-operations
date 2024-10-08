import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Adding property')

suite
  .add('Directly in the object', function () {
    const data = { test: 'Hello' }
    return data
  })
  .add('Using dot notation', function () {
    const data = {}

    data.test = 'Hello'
    return data
  })
  .add('Using define property (writable)', function () {
    const data = {}

    Object.defineProperty(data, 'test', {
      value: 'Hello',
      writable: true,
      enumerable: true,
      configurable: true,
    })
    return data
  })
  .add('Using define property initialized (writable)', function () {
    const data = { test: undefined }

    Object.defineProperty(data, 'test', {
      value: 'Hello',
      enumerable: true,
      configurable: true,
    })
    return data
  })
  .add('Using define property (getter)', function () {
    const data = {}

    Object.defineProperty(data, 'test', {
      get() {
        return 'Hello'
      },
      enumerable: true,
      configurable: true,
    })
    return data
  })

await suite.runAndPrintResults()
