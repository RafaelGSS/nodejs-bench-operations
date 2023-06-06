const { H2, createTableHeader } = require('../markdown')

function compareToMdTable (name, amount, ms) {
  const numberFormat = new Intl.NumberFormat()
  return `${name}|${numberFormat.format(amount)}|${numberFormat.format(ms)}ms`
}

const bench = (name, total, fn) => {
  const start = performance.now()
  fn()
  const diff = performance.now() - start
  console.log(compareToMdTable(name, total, diff))
}

function compare (total) {
  console.log(tableHeader)

  bench('new Array(length) + fill(a,b,c) DESC', total, () => {
    const array = new Array(total)
    for (let i = total; i-- > 0;) array.fill(i, i, i+1)
  })

  bench('array.push', total, () => {
    const array = []
    for (let i = 0; i < total; i++) array.push(i)
  })

  bench('new Array(length) + array[i] = i', total, () => {
    const array = new Array(total)
    for (let i = 0; i < total; i++) array[i] = i
  })

  bench('fixed size fill(a,b,c)', total, () => {
    const array = new Array(total)
    for (let i = 0; i < total; i++) array.fill(i, i, i+1)
  })

  bench('array[i] = i', total, () => {
    const array = []
    for (let i = 0; i < total; i++) array[i] = i
  })

  bench('fixedArray[i] = i DESC', total, () => {
    const array = new Array(total)
    for (let i = total; i-- > 0;) array[i] = i
  })

  bench('variableArray[i] = i DESC', total, () => {
    const array = []
    for (let i = total; i-- > 0;) array[i] = i
  })

}

function compareStrings (total) {
  console.log(tableHeader)

  bench('Array.fill(a,b,c)', total, () => {
    const array = Array.from(total)
    for (let i = 0; i < total; i++) array.fill('test', i, i + 1)
  })

  bench('array.push', total, () => {
    const array = []
    for (let i = 0; i < total; i++) array.push('test')
  })

  bench('array[i] = string', total, () => {
    const array = new Array(total)
    for (let i = 0; i < total; i++) array[i] = 'test'
  })

  bench('Array.from', total, () => {
    const array = Array.from({ length: total }, () => 'test')
  })

  bench('Array.fill', total, () => {
    const array = Array.from(total).fill('test')
  })

  console.log()
}

console.log(H2('Array.append (number)'))
const tableHeader = createTableHeader([
  'type',
  'amount',
  'time elapsed'
])

for (let i = 6; i <= 8; i++) {
  compare(10 ** i)
}

console.log(H2('Array.append (string)'))
// console.log(tableHeader)
for (let i = 6; i <= 8; i++) {
  compareStrings(10 ** i)
}
