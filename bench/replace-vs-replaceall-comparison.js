const Benchmark = require('benchmark')
const { versions } = require('process')
const semver = require('semver')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

if (semver.lt(versions.node, '15.0.0')) {
	console.log(H2('replace vs replaceAll comparison'))
	console.log('This feature is not supported in this Node.js version')
	process.exit(0)
  }

suite.add('Using replace(//g)', function () {
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
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('replace vs replaceAll comparison'))
  console.log(tableHeader)
})
.run({ 'async': false });
