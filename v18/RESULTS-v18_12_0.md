# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Tue Jan 17 2023 20:43:27 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.57ms
new Array(length)|10,000|0.231ms
array.push|1,000,000|42.656ms
new Array(length)|1,000,000|6.687ms
array.push|100,000,000|2,165.505ms
new Array(length)|100,000,000|4,791.908ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.108ms
new Array(length)|100|0.012ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.653ms
new Array(length)|10,000|4.344ms
array.push|1,000,000|345.415ms
new Array(length)|1,000,000|4.736ms
array.push|100,000,000|2,848.882ms
new Array(length)|100,000,000|5,578.802ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|362|78|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,164|56|
|[True conditional] Using constructor name|144,860|96|
|[True conditional] Check if property is valid then instanceof |146,035|92|
|[False conditional] Using instanceof only|709,616,969|96|
|[False conditional] Using constructor name|710,646,681|97|
|[False conditional] Check if property is valid then instanceof |711,290,777|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,770,086|96|
|fromUnixToISOString(new Date())|1,500,264|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,857|85|
|Intl.DateTimeFormat().format(new Date())|8,540|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,421|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,811|94|
|Reusing Intl.DateTimeFormat()|506,239|98|
|Date.toLocaleDateString()|500,710|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,559|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|695,343|96|
|Using brackets {}|701,736|96|
|Using '' + |698,369|96|
|Using date.toString()|754,288|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,389,015|96|
|Using undefined assignment|707,595,109|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,716|58|
|NodeError|143,480|95|
|NodeError Range|144,124|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,352,848|97|
|Function returning explicitly undefined|1,332,138|91|
|Function returning implicitly undefined|1,342,036|94|
|Function returning string|1,359,037|95|
|Function returning integer|1,374,678|96|
|Function returning float|1,356,709|97|
|Function returning functions|1,331,163|94|
|Function returning arrow functions|1,352,457|95|
|Function returning empty object|1,368,245|95|
|Function returning empty array|1,357,351|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|708,347,981|98|
|using Array.includes (first item)|707,978,413|96|
|Using raw comparison|709,139,173|97|
|Using raw comparison (first item)|708,049,033|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,089,157|93|
|Using Object.getOwnPropertyNames()|48,956,990|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,773,180|98|
|Length = 10_000 - Array.at|16,783,898|97|
|Length = 1_000_000 - Array.at|16,717,045|97|
|Length = 100 - Array[length - 1]|706,339,639|95|
|Length = 10_000 - Array[length - 1]|706,717,991|96|
|Length = 1_000_000 - Array[length - 1]|706,869,510|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,885,612|94|
|Object.create({})|997,579|81|
|Cached Empty.prototype|709,503,103|97|
|Empty.prototype|1,050,877|80|
|Empty class|719,826|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,261,785|99|
|Using optional chain (obj.field?.field2) (undefined)|709,110,278|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,263,302|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,281,505|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,262,187|97|
|Using parseInt(x, 10) - big number (10 len)|14,614,648|97|
|Using + - small number (2 len)|709,877,287|96|
|Using + - big number (10 len)|708,973,205|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|587,807|75|
|Using ? operator to avoid rejection|621,343|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|235,260,788|92|
|Raw usage underscore usage|224,141,164|91|
|Manipulating private properties using #|145,893,142|84|
|Manipulating private properties using underscore(_)|118,641,617|93|
|Manipulating private properties using Symbol|119,583,677|88|
|Manipulating private properties using PrivateSymbol|29,503,998|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,014,659|96|
|Adding property in the object creation - small object|2,025,335|95|
|Adding property after the function creation - small class|147,466|84|
|Adding property in the function creation - small class|146,528|88|
|Adding property after the class creation - small class|120,378|84|
|Adding property in the class creation - small class|119,746|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,298,255|96|
|Using replaceAll()|2,102,644|96|
|Using replaceAll(//g)|2,029,099|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|175,699|96|
|Sort using first char|726,188|87|
|Sort using localeCompare|693,178|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,243|92|
|{...smallObject} - Total keys: 2|61,531,889|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,335|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,623|98|
|{ ...bigObject, ...anotherBigObject }|776|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,092,184|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,937,307|96|
|{ ...smallObject, ...anotherSmallObject }|11,033,857|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,625 ops/sec ±0.66% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 419 ops/sec ±0.13% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,604 ops/sec ±0.45% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,017 ops/sec ±16.76% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,402,355|95|
|Using backtick (`)|709,231,658|97|
|Using array.join|6,698,933|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,796,958|94|
|Using this|128,903,096|95|
