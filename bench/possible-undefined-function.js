const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable } = require('../markdown')

suite.add('Using if to check function existence', function () {
  const emptyObject = Object.create({})
  if (emptyObject.undefinedFunction) {
    emptyObject.undefinedFunction()
  }
})
.add('Using ? operator to avoid rejection', function () {
  const emptyObject = Object.create({})
  emptyObject.undefinedFunction?.()
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.run({ 'async': false });
