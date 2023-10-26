// --max-heap-size=4000
const { createBenchmarkSuite } = require('../common')
const assert = require('assert')

const suite = createBenchmarkSuite('async function vs function');

function noop() {
  return true;
}

async function noop2() {
  return true;
}

suite
  .add('function', function () {
    const a = noop();
    assert.ok(a);
  })
  .add('[async] - function', async function () {
    const a = noop();
    assert.ok(a);
  })
  .add('[async] - await function', async function () {
    const a = await noop();
    assert.ok(a);
  })
  .add('[async] - await async function', async function () {
    const a = await noop2();
    assert.ok(a);
  })
  .run({ async: false })
