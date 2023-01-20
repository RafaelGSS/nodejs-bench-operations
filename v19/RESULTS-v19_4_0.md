# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Fri Jan 20 2023 20:00:15 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.053ms
new Array(length)|100|0.014ms
array.push|1,000|0.088ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.658ms
new Array(length)|10,000|0.489ms
array.push|1,000,000|45.48ms
new Array(length)|1,000,000|11.633ms
array.push|100,000,000|2,715.427ms
new Array(length)|100,000,000|6,132.422ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.022ms
new Array(length)|100|0.013ms
array.push|1,000|0.07ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.557ms
new Array(length)|10,000|0.278ms
array.push|1,000,000|115.107ms
new Array(length)|1,000,000|14.45ms
array.push|100,000,000|3,085.008ms
new Array(length)|100,000,000|6,555.739ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|322|80|
|Array.from|13|36|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|153,176|59|
|[True conditional] Using constructor name|122,891|94|
|[True conditional] Check if property is valid then instanceof |123,971|94|
|[False conditional] Using instanceof only|591,322,429|93|
|[False conditional] Using constructor name|588,251,528|96|
|[False conditional] Check if property is valid then instanceof |589,033,726|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|830,448|89|
|fromUnixToISOString(new Date())|1,278,828|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,328|78|
|Intl.DateTimeFormat().format(new Date())|7,644|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,855|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,310|93|
|Reusing Intl.DateTimeFormat()|424,766|77|
|Date.toLocaleDateString()|427,680|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,287|79|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|624,148|95|
|Using brackets {}|629,337|96|
|Using '' + |624,600|96|
|Using date.toString()|687,845|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,115,524|90|
|Using undefined assignment|586,059,100|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|148,107|57|
|NodeError|121,044|96|
|NodeError Range|123,344|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,137,302|97|
|Function returning explicitly undefined|1,131,971|93|
|Function returning implicitly undefined|1,152,384|96|
|Function returning string|1,138,613|96|
|Function returning integer|1,127,407|95|
|Function returning float|1,148,221|97|
|Function returning functions|1,119,654|92|
|Function returning arrow functions|1,141,072|96|
|Function returning empty object|1,128,185|95|
|Function returning empty array|1,134,715|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|583,672,000|89|
|using Array.includes (first item)|586,022,203|96|
|Using raw comparison|592,664,866|93|
|Using raw comparison (first item)|588,963,037|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,204,380|89|
|Using Object.getOwnPropertyNames()|40,301,475|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|584,117,884|91|
|Length = 10_000 - Array.at|587,338,600|95|
|Length = 1_000_000 - Array.at|584,587,396|95|
|Length = 100 - Array[length - 1]|587,528,779|95|
|Length = 10_000 - Array[length - 1]|584,495,872|93|
|Length = 1_000_000 - Array[length - 1]|584,453,846|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,133,603|92|
|Object.create({})|1,169,412|78|
|Cached Empty.prototype|566,684,924|90|
|Empty.prototype|1,118,092|77|
|Empty class|790,806|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|574,617,766|90|
|Using optional chain (obj.field?.field2) (undefined)|588,080,450|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,466,150|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|586,623,680|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|146,264,254|94|
|Using parseInt(x, 10) - big number (10 len)|11,800,383|96|
|Using + - small number (2 len)|574,162,756|92|
|Using + - big number (10 len)|584,510,304|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|670,407|72|
|Using ? operator to avoid rejection|711,984|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|564,374,296|89|
|Raw usage underscore usage|574,178,478|93|
|Manipulating private properties using #|567,705,226|92|
|Manipulating private properties using underscore(_)|564,470,856|93|
|Manipulating private properties using Symbol|555,516,809|92|
|Manipulating private properties using PrivateSymbol|23,451,819|85|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,216,877|90|
|Adding property in the object creation - small object|2,276,923|93|
|Adding property after the function creation - small class|143,604|78|
|Adding property in the function creation - small class|151,099|83|
|Adding property after the class creation - small class|117,677|77|
|Adding property in the class creation - small class|118,801|76|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,934,604|92|
|Using replaceAll()|1,861,064|96|
|Using replaceAll(//g)|1,701,730|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|142,295|96|
|Sort using first char|615,047|92|
|Sort using localeCompare|585,361|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,059|93|
|{...smallObject} - Total keys: 2|54,735,574|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,106|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,998|97|
|{ ...bigObject, ...anotherBigObject }|661|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,528,235|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,889,151|93|
|{ ...smallObject, ...anotherSmallObject }|9,409,189|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,221 ops/sec ±16.41% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 327 ops/sec ±4.82% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,357 ops/sec ±0.90% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 824 ops/sec ±19.38% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|581,405,961|94|
|Using backtick (`)|585,999,404|94|
|Using array.join|5,912,907|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|105,046,659|92|
|Using this|119,168,104|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,892,704|94|
|Date.now()|12,922,344|92|
