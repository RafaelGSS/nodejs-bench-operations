import { createBenchmarkSuite } from '../common.mjs';

const suite = createBenchmarkSuite('async function vs function');

function noop() {
  return true;
}

async function noop2() {
  return true;
}

suite
  .add({
    name: 'function',
    fn: function () {
      noop();
    },
    defer: false,
  })
  .add({
    name: '[async] async function',
    fn: function (deferred) {
      noop2().then(() => deferred.resolve());
    },
    defer: true,
  })
  .add({
    name: '[async] function',
    fn: function (deferred) {
      noop();
      deferred.resolve();
    },
    defer: true,
  })
  .run({ async: false });
