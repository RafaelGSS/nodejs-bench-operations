# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Tue Jan 17 2023 20:43:24 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.112ms
new Array(length)|100|0.009ms
array.push|1,000|0.072ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.55ms
new Array(length)|10,000|0.292ms
array.push|1,000,000|35.791ms
new Array(length)|1,000,000|10.196ms
array.push|100,000,000|2,036.696ms
new Array(length)|100,000,000|5,216.596ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.013ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.735ms
new Array(length)|10,000|5.098ms
array.push|1,000,000|209.105ms
new Array(length)|1,000,000|7.535ms
array.push|100,000,000|2,712.405ms
new Array(length)|100,000,000|5,907.951ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|84|
|Array.from|13|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|175,260|57|
|[True conditional] Using constructor name|144,388|93|
|[True conditional] Check if property is valid then instanceof |145,444|87|
|[False conditional] Using instanceof only|653,247,310|90|
|[False conditional] Using constructor name|656,865,462|90|
|[False conditional] Check if property is valid then instanceof |661,762,381|88|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,555,068|87|
|fromUnixToISOString(new Date())|1,380,339|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,905|74|
|Intl.DateTimeFormat().format(new Date())|7,797|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,733|65|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,459|85|
|Reusing Intl.DateTimeFormat()|397,180|74|
|Date.toLocaleDateString()|470,119|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,801|79|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|664,516|88|
|Using brackets {}|670,522|85|
|Using '' + |674,908|88|
|Using date.toString()|710,189|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,331,282|83|
|Using undefined assignment|689,440,487|87|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|174,454|53|
|NodeError|135,643|81|
|NodeError Range|131,469|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,162,660|82|
|Function returning explicitly undefined|1,086,937|85|
|Function returning implicitly undefined|1,145,458|88|
|Function returning string|1,192,134|83|
|Function returning integer|1,259,492|85|
|Function returning float|1,141,941|85|
|Function returning functions|1,146,267|83|
|Function returning arrow functions|1,227,583|83|
|Function returning empty object|1,250,495|85|
|Function returning empty array|1,242,121|85|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|679,775,073|86|
|using Array.includes (first item)|671,614,578|85|
|Using raw comparison|678,273,900|89|
|Using raw comparison (first item)|656,887,685|84|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,146,711|84|
|Using Object.getOwnPropertyNames()|51,443,384|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,870,077|85|
|Length = 10_000 - Array.at|15,726,970|89|
|Length = 1_000_000 - Array.at|14,534,138|84|
|Length = 100 - Array[length - 1]|719,552,956|91|
|Length = 10_000 - Array[length - 1]|685,600,352|86|
|Length = 1_000_000 - Array[length - 1]|678,018,529|83|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,564,175|84|
|Object.create({})|1,214,388|75|
|Cached Empty.prototype|662,096,210|82|
|Empty.prototype|1,229,718|69|
|Empty class|897,437|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|674,059,547|86|
|Using optional chain (obj.field?.field2) (undefined)|693,095,050|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|705,406,262|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|654,585,414|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|166,668,829|83|
|Using parseInt(x, 10) - big number (10 len)|11,614,634|83|
|Using + - small number (2 len)|680,651,864|86|
|Using + - big number (10 len)|674,709,733|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|699,813|71|
|Using ? operator to avoid rejection|822,472|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,453,445|84|
|Raw usage underscore usage|7,171,462|91|
|Manipulating private properties using #|2,573,811|88|
|Manipulating private properties using underscore(_)|688,019,505|87|
|Manipulating private properties using Symbol|674,169,845|87|
|Manipulating private properties using PrivateSymbol|26,074,672|81|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,539,157|86|
|Adding property in the object creation - small object|2,656,947|89|
|Adding property after the function creation - small class|170,515|77|
|Adding property in the function creation - small class|157,799|79|
|Adding property after the class creation - small class|134,168|73|
|Adding property in the class creation - small class|129,822|74|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,086,309|81|
|Using replaceAll()|1,939,448|86|
|Using replaceAll(//g)|1,829,299|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,236|88|
|Sort using first char|735,593|84|
|Sort using localeCompare|366,468|78|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,256|85|
|{...smallObject} - Total keys: 2|54,485,471|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,219|84|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,383|83|
|{ ...bigObject, ...anotherBigObject }|723|79|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,390,113|83|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,998,462|87|
|{ ...smallObject, ...anotherSmallObject }|13,358,197|89|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,501 ops/sec ±14.41% (78 runs sampled)
streams.web.Readable reading 1e3 * some data x 363 ops/sec ±2.15% (75 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,655 ops/sec ±1.65% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 717 ops/sec ±18.27% (56 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|615,096,773|83|
|Using backtick (`)|664,371,046|86|
|Using array.join|6,337,038|85|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|124,640,318|86|
|Using this|129,623,902|85|
