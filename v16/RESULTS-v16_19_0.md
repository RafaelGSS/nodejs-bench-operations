# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Fri Jan 27 2023 19:56:16 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.004ms
array.push|100|0.09ms
new Array(length)|100|0.007ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.363ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|27.216ms
new Array(length)|1,000,000|17.124ms
array.push|100,000,000|1,954.463ms
new Array(length)|100,000,000|5,205.08ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.605ms
new Array(length)|10,000|4.022ms
array.push|1,000,000|299.867ms
new Array(length)|1,000,000|5.081ms
array.push|100,000,000|2,585.284ms
new Array(length)|100,000,000|5,515.391ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|84|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|197,978|56|
|[True conditional] Using constructor name|152,272|90|
|[True conditional] Check if property is valid then instanceof |151,464|89|
|[False conditional] Using instanceof only|775,875,156|94|
|[False conditional] Using constructor name|777,334,173|96|
|[False conditional] Check if property is valid then instanceof |778,943,691|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,032,040|90|
|fromUnixToISOString(new Date())|1,541,779|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,800|81|
|Intl.DateTimeFormat().format(new Date())|9,485|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,660|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,423|80|
|Reusing Intl.DateTimeFormat()|447,264|85|
|Date.toLocaleDateString()|549,410|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,910|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|630,203|88|
|Using brackets {}|646,694|93|
|Using '' + |635,552|92|
|Using date.toString()|672,530|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,167,298|83|
|Using undefined assignment|775,465,541|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|196,229|51|
|NodeError|152,811|90|
|NodeError Range|154,541|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,169,986|86|
|Function returning explicitly undefined|1,145,321|90|
|Function returning implicitly undefined|1,147,457|92|
|Function returning string|1,147,058|89|
|Function returning integer|1,160,098|91|
|Function returning float|1,179,783|92|
|Function returning functions|1,166,371|87|
|Function returning arrow functions|1,124,726|90|
|Function returning empty object|1,156,834|86|
|Function returning empty array|1,146,636|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|776,305,152|97|
|using Array.includes (first item)|776,254,024|96|
|Using raw comparison|777,684,295|91|
|Using raw comparison (first item)|778,149,728|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,153,328|93|
|Using Object.getOwnPropertyNames()|56,863,321|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,198,166|95|
|Length = 10_000 - Array.at|18,104,924|98|
|Length = 1_000_000 - Array.at|18,244,528|96|
|Length = 100 - Array[length - 1]|774,758,487|95|
|Length = 10_000 - Array[length - 1]|774,006,902|95|
|Length = 1_000_000 - Array[length - 1]|775,302,272|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,207,164|90|
|Object.create({})|1,305,899|84|
|Cached Empty.prototype|778,069,190|97|
|Empty.prototype|1,393,180|81|
|Empty class|953,092|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|776,997,076|96|
|Using optional chain (obj.field?.field2) (undefined)|777,612,946|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|777,293,678|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|777,744,758|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|212,257,778|97|
|Using parseInt(x, 10) - big number (10 len)|13,629,667|92|
|Using + - small number (2 len)|776,764,625|98|
|Using + - big number (10 len)|777,664,800|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|657,132|82|
|Using ? operator to avoid rejection|677,280|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,077,909|92|
|Raw usage underscore usage|7,219,117|87|
|Manipulating private properties using #|2,491,410|92|
|Manipulating private properties using underscore(_)|763,009,977|97|
|Manipulating private properties using Symbol|761,877,189|97|
|Manipulating private properties using PrivateSymbol|19,728,348|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,967,210|97|
|Adding property in the object creation - small object|1,971,288|96|
|Adding property after the function creation - small class|176,436|87|
|Adding property in the function creation - small class|179,975|86|
|Adding property after the class creation - small class|147,841|83|
|Adding property in the class creation - small class|152,487|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,490,468|88|
|Using replaceAll()|2,432,370|90|
|Using replaceAll(//g)|2,286,212|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|184,014|89|
|Sort using first char|803,000|88|
|Sort using localeCompare|483,383|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,545|88|
|{...smallObject} - Total keys: 2|53,077,583|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,507|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,068|91|
|{ ...bigObject, ...anotherBigObject }|927|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,509,966|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,864,152|95|
|{ ...smallObject, ...anotherSmallObject }|14,243,954|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,589 ops/sec ±15.04% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 407 ops/sec ±5.96% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,605 ops/sec ±0.89% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 960 ops/sec ±15.18% (56 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,824,657|96|
|Using backtick (`)|776,335,130|94|
|Using array.join|7,202,425|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|139,688,561|90|
|Using this|148,317,864|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,056,288|87|
|Date.now()|14,612,584|90|
