const { H2, createTableHeader } = require('../markdown')

function compareToMdTable(name, amount, ms) {
  const numberFormat = new Intl.NumberFormat()
  return `${name}|${numberFormat.format(amount)}|${numberFormat.format(ms)}ms`
}

function compare(total) {
  const arrayPush = performance.now()
  var array = []
  for (var i = 0; i < total; i++) {
    array.push(i)
  }
  const arrayPushTotal = performance.now() - arrayPush

  const preAlloc = performance.now()
  var array2 = new Array(total)
  for (var i = 0; i < total; i++) {
    array2[i] = i
  }
  const preAllocToal = performance.now() - preAlloc

  console.log(compareToMdTable('array.push', total, arrayPushTotal))
  console.log(compareToMdTable('new Array(length)', total, preAllocToal))
}

function compareStrings(total) {
  const arrayPush = performance.now()
  var array = []
  for (var i = 0; i < total; i++) {
    array.push('test')
  }
  const arrayPushTotal = performance.now() - arrayPush

  const preAlloc = performance.now()
  var array2 = new Array(total)
  for (var i = 0; i < total; i++) {
    array2[i] = 'test'
  }
  const preAllocToal = performance.now() - preAlloc

  console.log(compareToMdTable('array.push', total, arrayPushTotal))
  console.log(compareToMdTable('new Array(length)', total, preAllocToal))
}

console.log(H2('Array.append (number)'))
const tableHeader = createTableHeader(['type', 'amount', 'time elapsed'])

console.log(tableHeader)
compare(10)
compare(100)
compare(1000)
compare(10000)
compare(1000000)
compare(100000000)

console.log(H2('Array.append (string)'))
console.log(tableHeader)
compareStrings(10)
compareStrings(100)
compareStrings(1000)
compareStrings(10000)
compareStrings(1000000)
compareStrings(100000000)
