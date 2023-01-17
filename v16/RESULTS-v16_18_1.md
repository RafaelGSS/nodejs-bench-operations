# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Tue Jan 17 2023 20:43:23 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.093ms
new Array(length)|100|0.008ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.234ms
array.push|1,000,000|29.635ms
new Array(length)|1,000,000|10.102ms
array.push|100,000,000|2,026.228ms
new Array(length)|100,000,000|4,767.956ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.571ms
new Array(length)|10,000|4.267ms
array.push|1,000,000|325.584ms
new Array(length)|1,000,000|4.992ms
array.push|100,000,000|2,603.005ms
new Array(length)|100,000,000|5,215.912ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|364|84|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|195,952|59|
|[True conditional] Using constructor name|153,167|92|
|[True conditional] Check if property is valid then instanceof |156,854|91|
|[False conditional] Using instanceof only|711,417,607|96|
|[False conditional] Using constructor name|713,158,328|93|
|[False conditional] Check if property is valid then instanceof |714,042,043|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,732,072|98|
|fromUnixToISOString(new Date())|1,473,454|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,286|83|
|Intl.DateTimeFormat().format(new Date())|8,133|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,889|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,252|86|
|Reusing Intl.DateTimeFormat()|482,394|72|
|Date.toLocaleDateString()|479,564|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,110|84|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|716,764|97|
|Using brackets {}|707,235|97|
|Using '' + |725,525|97|
|Using date.toString()|785,669|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,491,765|95|
|Using undefined assignment|711,446,913|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|194,418|55|
|NodeError|153,315|94|
|NodeError Range|154,167|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,251,789|98|
|Function returning explicitly undefined|1,233,013|97|
|Function returning implicitly undefined|1,265,421|93|
|Function returning string|1,272,820|95|
|Function returning integer|1,275,597|98|
|Function returning float|1,273,075|97|
|Function returning functions|1,248,024|98|
|Function returning arrow functions|1,262,361|98|
|Function returning empty object|1,278,688|99|
|Function returning empty array|1,272,680|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,198,601|98|
|using Array.includes (first item)|712,060,204|93|
|Using raw comparison|713,100,454|97|
|Using raw comparison (first item)|712,456,616|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,123,401|93|
|Using Object.getOwnPropertyNames()|55,108,342|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,268,760|98|
|Length = 10_000 - Array.at|16,245,024|93|
|Length = 1_000_000 - Array.at|16,152,677|94|
|Length = 100 - Array[length - 1]|711,289,908|98|
|Length = 10_000 - Array[length - 1]|711,039,786|99|
|Length = 1_000_000 - Array[length - 1]|711,272,324|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,270,335|94|
|Object.create({})|1,369,032|82|
|Cached Empty.prototype|711,067,028|99|
|Empty.prototype|1,285,787|75|
|Empty class|907,606|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,245,680|97|
|Using optional chain (obj.field?.field2) (undefined)|712,733,466|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,540,055|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,777,410|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|173,692,276|91|
|Using parseInt(x, 10) - big number (10 len)|13,283,897|96|
|Using + - small number (2 len)|713,884,471|96|
|Using + - big number (10 len)|711,965,353|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|794,170|73|
|Using ? operator to avoid rejection|867,216|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,307,784|95|
|Raw usage underscore usage|7,430,167|95|
|Manipulating private properties using #|2,741,812|98|
|Manipulating private properties using underscore(_)|703,448,649|94|
|Manipulating private properties using Symbol|702,692,386|97|
|Manipulating private properties using PrivateSymbol|27,547,202|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,622,209|95|
|Adding property in the object creation - small object|2,627,166|95|
|Adding property after the function creation - small class|179,272|87|
|Adding property in the function creation - small class|177,695|87|
|Adding property after the class creation - small class|147,110|83|
|Adding property in the class creation - small class|147,024|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,067,507|95|
|Using replaceAll()|1,945,429|94|
|Using replaceAll(//g)|1,870,374|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|178,225|98|
|Sort using first char|764,009|98|
|Sort using localeCompare|427,344|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,243|95|
|{...smallObject} - Total keys: 2|58,821,538|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,343|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,613|97|
|{ ...bigObject, ...anotherBigObject }|802|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,023,032|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,598,200|95|
|{ ...smallObject, ...anotherSmallObject }|13,781,480|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,715 ops/sec ±0.56% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 404 ops/sec ±0.78% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,880 ops/sec ±0.45% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 760 ops/sec ±16.13% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,991,039|97|
|Using backtick (`)|713,518,175|94|
|Using array.join|6,742,729|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|135,491,680|91|
|Using this|136,583,425|97|
