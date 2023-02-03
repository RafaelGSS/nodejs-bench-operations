# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.6.0`
* __Run:__ Fri Feb 03 2023 16:51:46 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.013ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.472ms
new Array(length)|10,000|0.377ms
array.push|1,000,000|39.182ms
new Array(length)|1,000,000|8.063ms
array.push|100,000,000|2,232.301ms
new Array(length)|100,000,000|6,621.745ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.019ms
new Array(length)|100|0.011ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.366ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|25.739ms
new Array(length)|1,000,000|9.391ms
array.push|100,000,000|2,775.304ms
new Array(length)|100,000,000|6,643.413ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|291|83|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|182,682|53|
|[True conditional] Using constructor name|144,102|91|
|[True conditional] Check if property is valid then instanceof |144,788|93|
|[False conditional] Using instanceof only|776,821,707|97|
|[False conditional] Using constructor name|773,711,786|95|
|[False conditional] Check if property is valid then instanceof |777,203,896|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,023,953|91|
|fromUnixToISOString(new Date())|1,623,019|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,560|76|
|Intl.DateTimeFormat().format(new Date())|9,412|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,024|65|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,293|82|
|Reusing Intl.DateTimeFormat()|450,421|92|
|Date.toLocaleDateString()|606,990|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,982|71|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|650,472|94|
|Using brackets {}|666,296|89|
|Using '' + |656,654|92|
|Using date.toString()|699,584|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,430,959|89|
|Using undefined assignment|771,087,897|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|178,443|52|
|NodeError|142,239|93|
|NodeError Range|145,046|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,350,470|93|
|Function returning explicitly undefined|1,295,862|91|
|Function returning implicitly undefined|1,323,540|91|
|Function returning string|1,295,944|91|
|Function returning integer|1,315,327|92|
|Function returning float|1,328,221|89|
|Function returning functions|1,289,798|90|
|Function returning arrow functions|1,307,790|87|
|Function returning empty object|1,325,515|91|
|Function returning empty array|1,358,892|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,129,199|97|
|using Array.includes (first item)|772,477,402|92|
|Using raw comparison|776,477,819|97|
|Using raw comparison (first item)|775,942,447|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,217,569|91|
|Using Object.getOwnPropertyNames()|57,846,060|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|848,528,546|93|
|Length = 10_000 - Array.at|849,674,686|93|
|Length = 1_000_000 - Array.at|849,884,290|98|
|Length = 100 - Array[length - 1]|776,155,984|93|
|Length = 10_000 - Array[length - 1]|775,966,127|95|
|Length = 1_000_000 - Array[length - 1]|774,799,522|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,712,568|91|
|Object.create({})|1,593,804|80|
|Cached Empty.prototype|776,606,488|96|
|Empty.prototype|1,475,438|77|
|Empty class|1,061,953|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|773,816,965|96|
|Using optional chain (obj.field?.field2) (undefined)|773,288,148|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,067,181|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|774,759,914|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,731,103|94|
|Using parseInt(x, 10) - big number (10 len)|12,577,715|89|
|Using + - small number (2 len)|776,097,971|94|
|Using + - big number (10 len)|775,073,308|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|878,090|80|
|Using ? operator to avoid rejection|901,609|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|770,544,365|96|
|Raw usage underscore usage|764,798,945|96|
|Manipulating private properties using #|759,429,895|94|
|Manipulating private properties using underscore(_)|765,645,120|95|
|Manipulating private properties using Symbol|758,741,302|97|
|Manipulating private properties using PrivateSymbol|21,818,564|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,124,690|94|
|Adding property in the object creation - small object|3,108,828|97|
|Adding property after the function creation - small class|200,571|82|
|Adding property in the function creation - small class|203,627|83|
|Adding property after the class creation - small class|169,887|80|
|Adding property in the class creation - small class|171,956|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,798,541|90|
|Using replaceAll()|2,606,151|95|
|Using replaceAll(//g)|2,465,751|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,014|90|
|Sort using first char|930,612|97|
|Sort using localeCompare|906,487|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,490|91|
|{...smallObject} - Total keys: 2|58,152,271|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,519|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,261|92|
|{ ...bigObject, ...anotherBigObject }|910|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,061,420|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,708,006|95|
|{ ...smallObject, ...anotherSmallObject }|15,927,538|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,790 ops/sec ±1.19% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 458 ops/sec ±0.62% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,036 ops/sec ±0.59% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,089 ops/sec ±26.40% (43 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|771,509,245|96|
|Using backtick (`)|774,947,777|96|
|Using array.join|7,753,053|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,864,043|91|
|Using this|160,540,974|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,561,726|93|
|Date.now()|15,644,951|93|
