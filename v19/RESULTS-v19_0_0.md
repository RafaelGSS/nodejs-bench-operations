# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Fri Feb 03 2023 16:21:15 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.012ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.476ms
new Array(length)|10,000|0.478ms
array.push|1,000,000|35.807ms
new Array(length)|1,000,000|6.991ms
array.push|100,000,000|2,812.774ms
new Array(length)|100,000,000|6,520.85ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.092ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.357ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|20.53ms
new Array(length)|1,000,000|9.263ms
array.push|100,000,000|2,840.89ms
new Array(length)|100,000,000|6,594.104ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,735|53|
|[True conditional] Using constructor name|148,235|91|
|[True conditional] Check if property is valid then instanceof |148,161|89|
|[False conditional] Using instanceof only|777,345,559|98|
|[False conditional] Using constructor name|774,717,540|95|
|[False conditional] Check if property is valid then instanceof |773,590,416|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,049,243|87|
|fromUnixToISOString(new Date())|1,728,855|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,760|85|
|Intl.DateTimeFormat().format(new Date())|7,903|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,478|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,948|65|
|Reusing Intl.DateTimeFormat()|584,686|94|
|Date.toLocaleDateString()|598,742|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,171|76|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|673,911|93|
|Using brackets {}|669,612|89|
|Using '' + |672,469|89|
|Using date.toString()|692,247|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,522,846|94|
|Using undefined assignment|773,698,324|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|183,178|50|
|NodeError|145,112|91|
|NodeError Range|145,266|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,403,693|92|
|Function returning explicitly undefined|1,356,929|93|
|Function returning implicitly undefined|1,387,252|92|
|Function returning string|1,379,057|92|
|Function returning integer|1,406,987|92|
|Function returning float|1,393,808|91|
|Function returning functions|1,378,002|92|
|Function returning arrow functions|1,372,245|94|
|Function returning empty object|1,387,861|90|
|Function returning empty array|1,384,482|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|770,309,475|96|
|using Array.includes (first item)|775,256,297|91|
|Using raw comparison|776,130,230|93|
|Using raw comparison (first item)|774,606,612|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,325,655|91|
|Using Object.getOwnPropertyNames()|58,280,436|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|737,728,194|96|
|Length = 10_000 - Array.at|739,142,488|96|
|Length = 1_000_000 - Array.at|739,005,040|94|
|Length = 100 - Array[length - 1]|774,625,286|95|
|Length = 10_000 - Array[length - 1]|774,293,397|92|
|Length = 1_000_000 - Array[length - 1]|771,103,341|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,495,910|92|
|Object.create({})|1,543,130|80|
|Cached Empty.prototype|773,131,593|96|
|Empty.prototype|1,498,884|79|
|Empty class|1,084,413|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|774,941,028|92|
|Using optional chain (obj.field?.field2) (undefined)|776,636,376|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,137,080|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|774,064,765|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,515,385|95|
|Using parseInt(x, 10) - big number (10 len)|12,745,147|88|
|Using + - small number (2 len)|776,015,214|94|
|Using + - big number (10 len)|774,194,012|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|857,056|84|
|Using ? operator to avoid rejection|910,187|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|771,009,707|96|
|Raw usage underscore usage|772,373,846|93|
|Manipulating private properties using #|762,369,081|95|
|Manipulating private properties using underscore(_)|762,143,413|98|
|Manipulating private properties using Symbol|758,477,216|96|
|Manipulating private properties using PrivateSymbol|22,137,986|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,087,088|94|
|Adding property in the object creation - small object|2,094,797|92|
|Adding property after the function creation - small class|187,242|84|
|Adding property in the function creation - small class|184,291|86|
|Adding property after the class creation - small class|154,693|82|
|Adding property in the class creation - small class|156,419|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,823,059|89|
|Using replaceAll()|2,677,894|95|
|Using replaceAll(//g)|2,530,173|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|189,731|88|
|Sort using first char|916,013|91|
|Sort using localeCompare|882,612|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,509|91|
|{...smallObject} - Total keys: 2|59,542,837|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,578|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,375|93|
|{ ...bigObject, ...anotherBigObject }|936|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,950,737|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,405,139|98|
|{ ...smallObject, ...anotherSmallObject }|17,067,650|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,810 ops/sec ±0.75% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 464 ops/sec ±0.72% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,087 ops/sec ±1.06% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,034 ops/sec ±11.36% (64 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|769,532,839|95|
|Using backtick (`)|772,495,828|95|
|Using array.join|7,823,765|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,831,463|86|
|Using this|160,036,894|96|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,651,407|95|
|Date.now()|15,524,952|94|
