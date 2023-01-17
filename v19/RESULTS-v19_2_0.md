# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Tue Jan 17 2023 20:43:29 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.005ms
array.push|100|0.031ms
new Array(length)|100|0.009ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.487ms
new Array(length)|10,000|0.397ms
array.push|1,000,000|37.125ms
new Array(length)|1,000,000|6.814ms
array.push|100,000,000|1,994.977ms
new Array(length)|100,000,000|4,998.92ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.017ms
array.push|100|0.095ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.396ms
new Array(length)|10,000|0.205ms
array.push|1,000,000|27.561ms
new Array(length)|1,000,000|9.095ms
array.push|100,000,000|2,400.463ms
new Array(length)|100,000,000|5,286.847ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|387|83|
|Array.from|16|46|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|200,436|57|
|[True conditional] Using constructor name|160,802|94|
|[True conditional] Check if property is valid then instanceof |157,965|90|
|[False conditional] Using instanceof only|738,144,949|87|
|[False conditional] Using constructor name|756,911,124|89|
|[False conditional] Check if property is valid then instanceof |759,861,325|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,150,749|91|
|fromUnixToISOString(new Date())|1,706,557|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,865|80|
|Intl.DateTimeFormat().format(new Date())|9,110|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,871|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,666|89|
|Reusing Intl.DateTimeFormat()|519,647|93|
|Date.toLocaleDateString()|490,736|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,953|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|795,563|92|
|Using brackets {}|822,868|92|
|Using '' + |805,626|91|
|Using date.toString()|899,435|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,820,757|92|
|Using undefined assignment|754,137,774|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|194,763|56|
|NodeError|151,791|84|
|NodeError Range|152,936|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,438,370|91|
|Function returning explicitly undefined|1,474,174|94|
|Function returning implicitly undefined|1,537,888|93|
|Function returning string|1,506,514|92|
|Function returning integer|1,519,739|92|
|Function returning float|1,475,747|92|
|Function returning functions|1,445,007|92|
|Function returning arrow functions|1,466,065|92|
|Function returning empty object|1,508,615|95|
|Function returning empty array|1,457,836|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|752,784,719|92|
|using Array.includes (first item)|743,484,614|92|
|Using raw comparison|744,452,484|91|
|Using raw comparison (first item)|748,965,395|90|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,195,342|90|
|Using Object.getOwnPropertyNames()|53,817,907|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|738,617,726|90|
|Length = 10_000 - Array.at|761,311,985|93|
|Length = 1_000_000 - Array.at|766,801,928|93|
|Length = 100 - Array[length - 1]|774,220,214|94|
|Length = 10_000 - Array[length - 1]|758,130,848|93|
|Length = 1_000_000 - Array[length - 1]|749,623,279|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,767,998|92|
|Object.create({})|1,471,064|74|
|Cached Empty.prototype|765,522,010|92|
|Empty.prototype|1,361,633|79|
|Empty class|1,050,645|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|760,149,290|92|
|Using optional chain (obj.field?.field2) (undefined)|769,041,899|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,206,336|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|769,824,050|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,217,543|93|
|Using parseInt(x, 10) - big number (10 len)|14,972,448|91|
|Using + - small number (2 len)|766,670,109|93|
|Using + - big number (10 len)|765,809,744|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|898,430|76|
|Using ? operator to avoid rejection|941,823|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|763,541,564|92|
|Raw usage underscore usage|761,018,581|90|
|Manipulating private properties using #|730,329,030|91|
|Manipulating private properties using underscore(_)|715,100,149|91|
|Manipulating private properties using Symbol|752,772,377|92|
|Manipulating private properties using PrivateSymbol|30,678,329|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,868,887|91|
|Adding property in the object creation - small object|2,947,245|90|
|Adding property after the function creation - small class|193,606|82|
|Adding property in the function creation - small class|196,060|83|
|Adding property after the class creation - small class|163,934|77|
|Adding property in the class creation - small class|167,142|76|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,559,356|92|
|Using replaceAll()|2,467,240|93|
|Using replaceAll(//g)|2,221,326|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,493|95|
|Sort using first char|827,096|88|
|Sort using localeCompare|768,317|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,382|90|
|{...smallObject} - Total keys: 2|72,703,619|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,437|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,882|95|
|{ ...bigObject, ...anotherBigObject }|842|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,066,386|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,261,530|91|
|{ ...smallObject, ...anotherSmallObject }|12,659,767|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,779 ops/sec ±1.40% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 443 ops/sec ±1.17% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,193 ops/sec ±1.32% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,036 ops/sec ±17.86% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|768,028,701|91|
|Using backtick (`)|756,625,572|94|
|Using array.join|7,797,609|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|137,559,081|90|
|Using this|157,295,840|94|
