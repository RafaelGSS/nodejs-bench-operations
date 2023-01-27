# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.5.0`
* __Run:__ Fri Jan 27 2023 18:56:20 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.031ms
new Array(length)|100|0.008ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.418ms
new Array(length)|10,000|0.89ms
array.push|1,000,000|32.109ms
new Array(length)|1,000,000|7.394ms
array.push|100,000,000|2,283.969ms
new Array(length)|100,000,000|5,323.527ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.02ms
new Array(length)|100|0.011ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.352ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|68.766ms
new Array(length)|1,000,000|11.099ms
array.push|100,000,000|2,629.316ms
new Array(length)|100,000,000|5,766.201ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|310|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|182,630|54|
|[True conditional] Using constructor name|147,304|92|
|[True conditional] Check if property is valid then instanceof |146,365|89|
|[False conditional] Using instanceof only|781,686,250|96|
|[False conditional] Using constructor name|779,689,584|94|
|[False conditional] Check if property is valid then instanceof |781,137,543|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,046,385|93|
|fromUnixToISOString(new Date())|1,763,610|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,508|82|
|Intl.DateTimeFormat().format(new Date())|8,947|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,533|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,061|71|
|Reusing Intl.DateTimeFormat()|562,431|87|
|Date.toLocaleDateString()|575,785|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,369|74|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|650,394|90|
|Using brackets {}|650,927|91|
|Using '' + |659,089|93|
|Using date.toString()|696,850|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,428,506|92|
|Using undefined assignment|779,994,535|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,437|49|
|NodeError|138,222|87|
|NodeError Range|142,864|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,328,558|87|
|Function returning explicitly undefined|1,292,220|89|
|Function returning implicitly undefined|1,323,922|91|
|Function returning string|1,298,041|90|
|Function returning integer|1,301,024|92|
|Function returning float|1,341,848|90|
|Function returning functions|1,278,412|92|
|Function returning arrow functions|1,324,629|91|
|Function returning empty object|1,318,258|93|
|Function returning empty array|1,320,797|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|779,259,469|97|
|using Array.includes (first item)|778,686,434|94|
|Using raw comparison|781,479,650|97|
|Using raw comparison (first item)|780,349,456|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,488,799|94|
|Using Object.getOwnPropertyNames()|57,353,284|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|854,893,102|96|
|Length = 10_000 - Array.at|854,377,309|97|
|Length = 1_000_000 - Array.at|856,069,172|97|
|Length = 100 - Array[length - 1]|779,030,067|96|
|Length = 10_000 - Array[length - 1]|780,319,473|94|
|Length = 1_000_000 - Array[length - 1]|778,965,614|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,321,985|90|
|Object.create({})|1,466,326|82|
|Cached Empty.prototype|779,776,762|98|
|Empty.prototype|1,445,354|78|
|Empty class|1,044,879|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|781,007,530|95|
|Using optional chain (obj.field?.field2) (undefined)|779,703,514|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|780,796,880|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|780,952,249|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|229,400,757|97|
|Using parseInt(x, 10) - big number (10 len)|12,883,003|93|
|Using + - small number (2 len)|782,509,739|92|
|Using + - big number (10 len)|781,698,145|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|821,761|76|
|Using ? operator to avoid rejection|835,264|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|776,280,878|94|
|Raw usage underscore usage|777,754,965|97|
|Manipulating private properties using #|766,035,055|95|
|Manipulating private properties using underscore(_)|768,097,489|96|
|Manipulating private properties using Symbol|767,219,765|96|
|Manipulating private properties using PrivateSymbol|21,378,596|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,109,862|96|
|Adding property in the object creation - small object|3,100,648|96|
|Adding property after the function creation - small class|192,861|83|
|Adding property in the function creation - small class|194,226|85|
|Adding property after the class creation - small class|161,671|78|
|Adding property in the class creation - small class|167,215|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,691,417|91|
|Using replaceAll()|2,292,694|90|
|Using replaceAll(//g)|2,435,038|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|187,973|89|
|Sort using first char|889,888|88|
|Sort using localeCompare|862,038|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,511|89|
|{...smallObject} - Total keys: 2|54,613,302|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,552|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,235|89|
|{ ...bigObject, ...anotherBigObject }|927|88|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,053,138|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,986,679|92|
|{ ...smallObject, ...anotherSmallObject }|16,086,738|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,610 ops/sec ±17.82% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 458 ops/sec ±0.80% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,065 ops/sec ±0.53% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 934 ops/sec ±44.14% (43 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|779,342,148|97|
|Using backtick (`)|779,770,056|97|
|Using array.join|7,668,186|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,576,590|90|
|Using this|161,517,454|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,444,945|89|
|Date.now()|15,383,057|91|
