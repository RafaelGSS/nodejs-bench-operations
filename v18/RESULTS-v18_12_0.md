# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Thu Jan 26 2023 20:14:31 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.459ms
new Array(length)|10,000|0.182ms
array.push|1,000,000|29.699ms
new Array(length)|1,000,000|16.91ms
array.push|100,000,000|1,908.194ms
new Array(length)|100,000,000|5,443.615ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.123ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.306ms
new Array(length)|10,000|4.076ms
array.push|1,000,000|168.263ms
new Array(length)|1,000,000|10.149ms
array.push|100,000,000|2,527.572ms
new Array(length)|100,000,000|5,540.753ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|85|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|191,272|54|
|[True conditional] Using constructor name|149,242|92|
|[True conditional] Check if property is valid then instanceof |151,753|94|
|[False conditional] Using instanceof only|775,813,868|95|
|[False conditional] Using constructor name|776,453,005|97|
|[False conditional] Check if property is valid then instanceof |776,681,806|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,053,090|95|
|fromUnixToISOString(new Date())|1,614,972|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,974|85|
|Intl.DateTimeFormat().format(new Date())|8,308|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|195|73|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|641,886|93|
|Using brackets {}|650,231|95|
|Using '' + |645,185|94|
|Using date.toString()|693,187|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,312,590|94|
|Using undefined assignment|773,436,579|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|186,190|55|
|NodeError|145,076|89|
|NodeError Range|147,500|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,364,346|95|
|Function returning explicitly undefined|1,320,251|93|
|Function returning implicitly undefined|1,373,729|94|
|Function returning string|1,338,680|95|
|Function returning integer|1,392,155|93|
|Function returning float|1,365,280|92|
|Function returning functions|1,346,998|94|
|Function returning arrow functions|1,340,003|95|
|Function returning empty object|1,366,986|91|
|Function returning empty array|1,366,381|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,259,108|96|
|using Array.includes (first item)|773,817,367|97|
|Using raw comparison|776,000,115|98|
|Using raw comparison (first item)|776,010,747|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,232,514|95|
|Using Object.getOwnPropertyNames()|59,374,763|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,763,311|94|
|Length = 10_000 - Array.at|18,794,054|97|
|Length = 1_000_000 - Array.at|18,678,780|94|
|Length = 100 - Array[length - 1]|772,127,340|97|
|Length = 10_000 - Array[length - 1]|772,952,325|98|
|Length = 1_000_000 - Array[length - 1]|773,807,688|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,333,613|90|
|Object.create({})|1,042,394|79|
|Cached Empty.prototype|773,484,650|96|
|Empty.prototype|1,121,816|79|
|Empty class|793,458|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|775,952,247|97|
|Using optional chain (obj.field?.field2) (undefined)|775,344,491|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,573,400|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,459,970|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,390,988|95|
|Using parseInt(x, 10) - big number (10 len)|12,925,364|92|
|Using + - small number (2 len)|776,548,213|97|
|Using + - big number (10 len)|776,877,681|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|654,618|82|
|Using ? operator to avoid rejection|682,841|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|238,035,130|91|
|Raw usage underscore usage|244,404,164|93|
|Manipulating private properties using #|200,839,983|94|
|Manipulating private properties using underscore(_)|200,043,548|90|
|Manipulating private properties using Symbol|207,890,988|91|
|Manipulating private properties using PrivateSymbol|22,520,320|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,030,772|96|
|Adding property in the object creation - small object|2,038,569|96|
|Adding property after the function creation - small class|162,454|84|
|Adding property in the function creation - small class|162,179|83|
|Adding property after the class creation - small class|132,645|78|
|Adding property in the class creation - small class|132,922|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,693,049|92|
|Using replaceAll()|2,211,128|93|
|Using replaceAll(//g)|2,468,766|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|198,542|93|
|Sort using first char|866,006|93|
|Sort using localeCompare|851,155|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,623|93|
|{...smallObject} - Total keys: 2|58,479,836|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,569|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,139|94|
|{ ...bigObject, ...anotherBigObject }|963|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,333,885|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,724,532|94|
|{ ...smallObject, ...anotherSmallObject }|16,163,965|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,596 ops/sec ±21.61% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 428 ops/sec ±5.65% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,627 ops/sec ±0.94% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 831 ops/sec ±17.86% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,187,864|97|
|Using backtick (`)|775,413,694|93|
|Using array.join|7,806,912|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,926,041|95|
|Using this|151,495,980|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,644,563|93|
|Date.now()|15,568,221|93|
