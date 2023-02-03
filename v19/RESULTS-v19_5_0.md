# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.5.0`
* __Run:__ Fri Feb 03 2023 16:41:36 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.002ms
array.push|100|0.041ms
new Array(length)|100|0.011ms
array.push|1,000|0.092ms
new Array(length)|1,000|0.046ms
array.push|10,000|0.617ms
new Array(length)|10,000|3.289ms
array.push|1,000,000|35.445ms
new Array(length)|1,000,000|7.572ms
array.push|100,000,000|2,274.717ms
new Array(length)|100,000,000|6,500.422ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.38ms
new Array(length)|10,000|0.295ms
array.push|1,000,000|23.479ms
new Array(length)|1,000,000|9.295ms
array.push|100,000,000|2,634.928ms
new Array(length)|100,000,000|6,626.491ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|296|82|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,142|50|
|[True conditional] Using constructor name|150,480|91|
|[True conditional] Check if property is valid then instanceof |150,367|91|
|[False conditional] Using instanceof only|776,214,114|97|
|[False conditional] Using constructor name|775,762,254|96|
|[False conditional] Check if property is valid then instanceof |775,522,175|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,045,105|92|
|fromUnixToISOString(new Date())|1,703,335|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,582|80|
|Intl.DateTimeFormat().format(new Date())|9,506|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,127|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,847|83|
|Reusing Intl.DateTimeFormat()|571,810|90|
|Date.toLocaleDateString()|593,228|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,884|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|625,099|89|
|Using brackets {}|633,254|95|
|Using '' + |629,235|92|
|Using date.toString()|662,538|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,409,253|88|
|Using undefined assignment|774,230,875|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,618|49|
|NodeError|146,474|91|
|NodeError Range|149,870|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,352,317|91|
|Function returning explicitly undefined|1,359,287|92|
|Function returning implicitly undefined|1,349,575|94|
|Function returning string|1,368,894|93|
|Function returning integer|1,386,765|94|
|Function returning float|1,394,224|94|
|Function returning functions|1,313,095|91|
|Function returning arrow functions|1,317,554|92|
|Function returning empty object|1,324,017|93|
|Function returning empty array|1,347,025|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|773,198,036|94|
|using Array.includes (first item)|775,661,659|95|
|Using raw comparison|775,211,039|93|
|Using raw comparison (first item)|774,779,662|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,946,167|87|
|Using Object.getOwnPropertyNames()|56,894,404|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|850,466,588|96|
|Length = 10_000 - Array.at|851,730,533|97|
|Length = 1_000_000 - Array.at|849,431,498|95|
|Length = 100 - Array[length - 1]|775,198,479|93|
|Length = 10_000 - Array[length - 1]|773,104,190|95|
|Length = 1_000_000 - Array[length - 1]|771,135,332|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,196,460|92|
|Object.create({})|1,510,036|83|
|Cached Empty.prototype|774,184,876|96|
|Empty.prototype|1,472,156|79|
|Empty class|1,076,047|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|775,356,639|95|
|Using optional chain (obj.field?.field2) (undefined)|776,487,844|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,867,040|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|773,624,365|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,468,851|94|
|Using parseInt(x, 10) - big number (10 len)|12,748,304|93|
|Using + - small number (2 len)|774,286,122|95|
|Using + - big number (10 len)|775,550,942|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|861,795|82|
|Using ? operator to avoid rejection|877,673|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|771,122,237|94|
|Raw usage underscore usage|772,357,699|95|
|Manipulating private properties using #|759,485,348|92|
|Manipulating private properties using underscore(_)|754,077,899|92|
|Manipulating private properties using Symbol|757,537,683|93|
|Manipulating private properties using PrivateSymbol|22,166,075|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,118,077|96|
|Adding property in the object creation - small object|3,100,429|94|
|Adding property after the function creation - small class|195,489|84|
|Adding property in the function creation - small class|198,914|83|
|Adding property after the class creation - small class|166,506|83|
|Adding property in the class creation - small class|168,731|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,735,815|91|
|Using replaceAll()|2,307,618|90|
|Using replaceAll(//g)|2,483,250|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,730|93|
|Sort using first char|916,109|88|
|Sort using localeCompare|887,572|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,439|92|
|{...smallObject} - Total keys: 2|58,712,842|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,519|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,322|94|
|{ ...bigObject, ...anotherBigObject }|907|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,070,808|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,551,944|92|
|{ ...smallObject, ...anotherSmallObject }|15,536,431|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,770 ops/sec ±0.89% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 455 ops/sec ±0.71% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,171 ops/sec ±0.72% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,008 ops/sec ±12.14% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|774,948,788|96|
|Using backtick (`)|776,474,604|92|
|Using array.join|7,730,683|88|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,608,184|90|
|Using this|160,272,513|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,410,278|92|
|Date.now()|15,272,145|92|
