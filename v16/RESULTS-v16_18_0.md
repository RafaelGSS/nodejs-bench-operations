# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Thu Jan 26 2023 19:43:46 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.007ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.37ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|35.605ms
new Array(length)|1,000,000|5.923ms
array.push|100,000,000|2,452.257ms
new Array(length)|100,000,000|4,833.069ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.019ms
new Array(length)|100|0.01ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.809ms
new Array(length)|10,000|4.096ms
array.push|1,000,000|307.082ms
new Array(length)|1,000,000|4.656ms
array.push|100,000,000|2,408.463ms
new Array(length)|100,000,000|6,000.58ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|331|83|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|208,197|54|
|[True conditional] Using constructor name|158,100|93|
|[True conditional] Check if property is valid then instanceof |160,401|91|
|[False conditional] Using instanceof only|776,473,761|97|
|[False conditional] Using constructor name|777,016,116|92|
|[False conditional] Check if property is valid then instanceof |777,750,747|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,096,301|92|
|fromUnixToISOString(new Date())|1,571,698|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,974|83|
|Intl.DateTimeFormat().format(new Date())|8,152|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,512|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,507|77|
|Reusing Intl.DateTimeFormat()|100,109|88|
|Date.toLocaleDateString()|580,736|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|1,624|25|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|654,904|95|
|Using brackets {}|666,220|90|
|Using '' + |669,242|95|
|Using date.toString()|712,395|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,336,694|94|
|Using undefined assignment|776,342,834|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|203,605|54|
|NodeError|158,787|91|
|NodeError Range|156,817|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,190,340|94|
|Function returning explicitly undefined|1,179,599|96|
|Function returning implicitly undefined|1,187,236|90|
|Function returning string|1,201,368|92|
|Function returning integer|1,215,820|92|
|Function returning float|1,202,370|95|
|Function returning functions|1,166,869|94|
|Function returning arrow functions|1,176,974|95|
|Function returning empty object|1,193,285|91|
|Function returning empty array|1,171,559|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|775,452,442|97|
|using Array.includes (first item)|776,319,210|95|
|Using raw comparison|778,380,088|96|
|Using raw comparison (first item)|777,076,455|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,536,126|92|
|Using Object.getOwnPropertyNames()|59,893,351|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,201,400|98|
|Length = 10_000 - Array.at|18,176,168|95|
|Length = 1_000_000 - Array.at|18,168,720|97|
|Length = 100 - Array[length - 1]|775,473,839|97|
|Length = 10_000 - Array[length - 1]|776,397,140|99|
|Length = 1_000_000 - Array[length - 1]|776,333,677|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,892,518|90|
|Object.create({})|1,210,503|84|
|Cached Empty.prototype|777,445,310|98|
|Empty.prototype|1,272,136|81|
|Empty class|898,584|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|777,302,538|98|
|Using optional chain (obj.field?.field2) (undefined)|730,049,022|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|772,619,828|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,318,098|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,331,153|93|
|Using parseInt(x, 10) - big number (10 len)|13,850,785|95|
|Using + - small number (2 len)|778,657,581|99|
|Using + - big number (10 len)|776,707,742|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|770,173|83|
|Using ? operator to avoid rejection|799,506|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,230,005|91|
|Raw usage underscore usage|7,327,448|93|
|Manipulating private properties using #|2,610,152|93|
|Manipulating private properties using underscore(_)|763,614,364|97|
|Manipulating private properties using Symbol|763,077,629|93|
|Manipulating private properties using PrivateSymbol|19,860,026|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,965,392|91|
|Adding property in the object creation - small object|2,977,420|94|
|Adding property after the function creation - small class|184,962|84|
|Adding property in the function creation - small class|186,956|84|
|Adding property after the class creation - small class|152,488|80|
|Adding property in the class creation - small class|152,276|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,563,383|93|
|Using replaceAll()|2,504,570|93|
|Using replaceAll(//g)|2,333,534|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|187,282|92|
|Sort using first char|815,357|90|
|Sort using localeCompare|493,550|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,622|93|
|{...smallObject} - Total keys: 2|55,662,829|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,538|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,182|94|
|{ ...bigObject, ...anotherBigObject }|959|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,192,314|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,627,658|95|
|{ ...smallObject, ...anotherSmallObject }|14,806,385|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,575 ops/sec ±18.53% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 441 ops/sec ±1.18% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,617 ops/sec ±1.20% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 787 ops/sec ±20.05% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|777,410,289|97|
|Using backtick (`)|775,980,174|93|
|Using array.join|7,407,037|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,115,954|91|
|Using this|151,492,026|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,322,867|93|
|Date.now()|14,942,280|94|
