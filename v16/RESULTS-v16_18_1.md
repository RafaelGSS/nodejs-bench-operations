# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Thu Jan 26 2023 19:54:07 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.08ms
new Array(length)|100|0.007ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.051ms
array.push|10,000|0.348ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|35.466ms
new Array(length)|1,000,000|5.651ms
array.push|100,000,000|1,837.265ms
new Array(length)|100,000,000|5,541.472ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.07ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.53ms
new Array(length)|10,000|4ms
array.push|1,000,000|140.191ms
new Array(length)|1,000,000|10.425ms
array.push|100,000,000|2,832.463ms
new Array(length)|100,000,000|5,241.322ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|314|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|199,407|55|
|[True conditional] Using constructor name|154,385|94|
|[True conditional] Check if property is valid then instanceof |156,989|91|
|[False conditional] Using instanceof only|777,133,015|97|
|[False conditional] Using constructor name|776,817,474|95|
|[False conditional] Check if property is valid then instanceof |776,824,183|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,085,632|93|
|fromUnixToISOString(new Date())|1,591,666|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,136|79|
|Intl.DateTimeFormat().format(new Date())|9,103|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,608|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,348|76|
|Reusing Intl.DateTimeFormat()|140,001|78|
|Date.toLocaleDateString()|425,508|68|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|3,998|43|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|656,641|96|
|Using brackets {}|662,714|90|
|Using '' + |658,229|92|
|Using date.toString()|708,512|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,342,705|92|
|Using undefined assignment|777,320,864|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|198,525|53|
|NodeError|152,005|91|
|NodeError Range|153,408|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,184,284|93|
|Function returning explicitly undefined|1,171,695|93|
|Function returning implicitly undefined|1,168,299|91|
|Function returning string|1,180,467|95|
|Function returning integer|1,196,639|95|
|Function returning float|1,183,349|92|
|Function returning functions|1,150,775|95|
|Function returning arrow functions|1,171,494|94|
|Function returning empty object|1,177,851|93|
|Function returning empty array|1,151,411|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|777,414,758|97|
|using Array.includes (first item)|774,485,991|95|
|Using raw comparison|776,697,861|98|
|Using raw comparison (first item)|776,521,821|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,105,275|91|
|Using Object.getOwnPropertyNames()|60,181,530|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,119,731|97|
|Length = 10_000 - Array.at|18,126,487|98|
|Length = 1_000_000 - Array.at|18,134,751|98|
|Length = 100 - Array[length - 1]|776,899,726|95|
|Length = 10_000 - Array[length - 1]|776,141,855|97|
|Length = 1_000_000 - Array[length - 1]|775,910,240|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,494,167|85|
|Object.create({})|1,169,472|80|
|Cached Empty.prototype|777,501,497|96|
|Empty.prototype|1,257,215|79|
|Empty class|901,197|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|776,353,121|96|
|Using optional chain (obj.field?.field2) (undefined)|777,374,389|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,986,747|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|778,033,157|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|211,554,774|98|
|Using parseInt(x, 10) - big number (10 len)|14,170,267|95|
|Using + - small number (2 len)|778,899,362|94|
|Using + - big number (10 len)|777,232,194|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|763,468|82|
|Using ? operator to avoid rejection|793,236|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,616,862|89|
|Raw usage underscore usage|7,183,402|93|
|Manipulating private properties using #|2,595,191|95|
|Manipulating private properties using underscore(_)|764,649,112|96|
|Manipulating private properties using Symbol|762,709,180|96|
|Manipulating private properties using PrivateSymbol|21,505,163|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,901,380|96|
|Adding property in the object creation - small object|2,911,493|95|
|Adding property after the function creation - small class|184,870|82|
|Adding property in the function creation - small class|186,973|86|
|Adding property after the class creation - small class|151,902|79|
|Adding property in the class creation - small class|153,720|79|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,599,182|93|
|Using replaceAll()|2,531,656|95|
|Using replaceAll(//g)|2,344,930|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,296|93|
|Sort using first char|834,038|93|
|Sort using localeCompare|505,337|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,618|90|
|{...smallObject} - Total keys: 2|55,758,134|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,537|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,189|95|
|{ ...bigObject, ...anotherBigObject }|962|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,962,460|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,916,748|96|
|{ ...smallObject, ...anotherSmallObject }|14,847,098|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,613 ops/sec ±18.23% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 444 ops/sec ±0.99% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,712 ops/sec ±1.03% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 790 ops/sec ±20.49% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,693,102|96|
|Using backtick (`)|776,641,991|96|
|Using array.join|7,424,862|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,075,825|91|
|Using this|150,633,403|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,400,795|92|
|Date.now()|15,096,786|91|
