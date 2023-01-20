# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Fri Jan 20 2023 20:00:10 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.042ms
new Array(length)|100|0.013ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.601ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|31.998ms
new Array(length)|1,000,000|12.338ms
array.push|100,000,000|2,162.721ms
new Array(length)|100,000,000|4,925.216ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.018ms
array.push|100|0.102ms
new Array(length)|100|0.013ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.638ms
new Array(length)|10,000|4.3ms
array.push|1,000,000|344.956ms
new Array(length)|1,000,000|4.777ms
array.push|100,000,000|2,867.464ms
new Array(length)|100,000,000|5,721.539ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|347|87|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|182,246|55|
|[True conditional] Using constructor name|140,270|93|
|[True conditional] Check if property is valid then instanceof |145,097|96|
|[False conditional] Using instanceof only|709,777,861|98|
|[False conditional] Using constructor name|709,572,225|97|
|[False conditional] Check if property is valid then instanceof |710,143,961|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,713,813|95|
|fromUnixToISOString(new Date())|1,464,489|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,889|85|
|Intl.DateTimeFormat().format(new Date())|8,401|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,596|66|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,953|88|
|Reusing Intl.DateTimeFormat()|492,650|96|
|Date.toLocaleDateString()|504,904|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,799|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|710,703|97|
|Using brackets {}|728,833|88|
|Using '' + |712,107|96|
|Using date.toString()|793,742|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,387,095|96|
|Using undefined assignment|708,205,295|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|178,768|57|
|NodeError|140,855|92|
|NodeError Range|141,370|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,242,482|96|
|Function returning explicitly undefined|1,217,705|98|
|Function returning implicitly undefined|1,232,194|95|
|Function returning string|1,241,611|93|
|Function returning integer|1,249,061|93|
|Function returning float|1,251,341|96|
|Function returning functions|1,218,453|94|
|Function returning arrow functions|1,229,059|93|
|Function returning empty object|1,247,633|96|
|Function returning empty array|1,241,225|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,218,155|97|
|using Array.includes (first item)|708,395,524|97|
|Using raw comparison|710,081,130|97|
|Using raw comparison (first item)|708,542,364|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,337,510|95|
|Using Object.getOwnPropertyNames()|48,130,564|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,181,717|96|
|Length = 10_000 - Array.at|16,248,646|96|
|Length = 1_000_000 - Array.at|16,148,943|97|
|Length = 100 - Array[length - 1]|708,015,192|96|
|Length = 10_000 - Array[length - 1]|705,312,489|97|
|Length = 1_000_000 - Array[length - 1]|704,933,785|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,910,761|93|
|Object.create({})|925,796|74|
|Cached Empty.prototype|709,535,099|98|
|Empty.prototype|1,014,616|79|
|Empty class|718,672|79|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,746,650|96|
|Using optional chain (obj.field?.field2) (undefined)|709,649,759|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,899,681|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|707,290,345|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,309,448|98|
|Using parseInt(x, 10) - big number (10 len)|14,170,619|97|
|Using + - small number (2 len)|710,066,781|99|
|Using + - big number (10 len)|707,731,084|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|577,341|77|
|Using ? operator to avoid rejection|609,481|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|229,815,425|91|
|Raw usage underscore usage|208,262,811|85|
|Manipulating private properties using #|141,676,642|85|
|Manipulating private properties using underscore(_)|96,526,434|93|
|Manipulating private properties using Symbol|94,938,046|84|
|Manipulating private properties using PrivateSymbol|29,137,777|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,677,705|98|
|Adding property in the object creation - small object|2,712,060|98|
|Adding property after the function creation - small class|144,709|85|
|Adding property in the function creation - small class|145,314|85|
|Adding property after the class creation - small class|118,711|84|
|Adding property in the class creation - small class|117,745|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,268,951|96|
|Using replaceAll()|1,880,740|98|
|Using replaceAll(//g)|2,007,078|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,723|97|
|Sort using first char|707,937|98|
|Sort using localeCompare|680,018|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,174|96|
|{...smallObject} - Total keys: 2|59,018,983|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,620|98|
|{ ...bigObject, ...anotherBigObject }|745|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,977,594|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,220,721|93|
|{ ...smallObject, ...anotherSmallObject }|10,949,300|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,580 ops/sec ±0.51% (90 runs sampled)
streams.web.Readable reading 1e3 * some data x 425 ops/sec ±0.21% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,568 ops/sec ±0.46% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 776 ops/sec ±16.14% (66 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|709,932,791|96|
|Using backtick (`)|709,115,582|99|
|Using array.join|6,592,745|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|126,752,089|94|
|Using this|122,753,911|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,364,101|93|
|Date.now()|15,306,281|97|
