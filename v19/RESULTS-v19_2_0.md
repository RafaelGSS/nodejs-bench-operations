# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Tue Jan 10 2023 02:06:41 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.02ms
new Array(length)|10|0.008ms
array.push|100|0.055ms
new Array(length)|100|0.017ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.636ms
new Array(length)|10,000|0.515ms
array.push|1,000,000|50.646ms
new Array(length)|1,000,000|11.333ms
array.push|100,000,000|2,226.002ms
new Array(length)|100,000,000|6,678.881ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.021ms
array.push|100|0.153ms
new Array(length)|100|0.018ms
array.push|1,000|0.133ms
new Array(length)|1,000|0.027ms
array.push|10,000|7.418ms
new Array(length)|10,000|0.351ms
array.push|1,000,000|130.333ms
new Array(length)|1,000,000|11.08ms
array.push|100,000,000|3,115.865ms
new Array(length)|100,000,000|6,824.086ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|302|82|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|142,923|54|
|[True conditional] Using constructor name|110,955|83|
|[True conditional] Check if property is valid then instanceof |112,513|86|
|[False conditional] Using instanceof only|700,686,418|87|
|[False conditional] Using constructor name|705,313,783|91|
|[False conditional] Check if property is valid then instanceof |705,630,206|86|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,843|77|
|Intl.DateTimeFormat().format(new Date())|5,714|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|4,829|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|3,753|64|
|Reusing Intl.DateTimeFormat()|393,792|87|
|Reusing dfWithOptions.format(Date.now())|226,211|88|
|Reusing dfWithOptions.format(new Date())|178,928|81|
|Date.toLocaleDateString()|378,557|81|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,037|79|
|Format using date.get*|2,779,361|89|
|new Date() (Baseline)|6,644,841|87|
|Date.now() (Baseline)|13,592,783|87|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|541,964|85|
|Using brackets {}|525,291|85|
|Using '' + |533,758|84|
|Using date.toString()|588,689|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,932,608|81|
|Using undefined assignment|717,724,337|89|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|136,889|58|
|NodeError|108,392|87|
|NodeError Range|109,309|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,032,299|89|
|Function returning explicitly undefined|1,030,133|83|
|Function returning implicitly undefined|1,087,239|88|
|Function returning string|1,076,688|89|
|Function returning integer|1,050,163|92|
|Function returning float|1,005,180|87|
|Function returning functions|1,020,309|85|
|Function returning arrow functions|1,040,639|90|
|Function returning empty object|1,020,234|87|
|Function returning empty array|1,036,604|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|668,966,825|86|
|using Array.includes (first item)|714,977,297|90|
|Using raw comparison|711,064,617|90|
|Using raw comparison (first item)|717,146,179|90|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,544,962|85|
|Using Object.getOwnPropertyNames()|32,462,076|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|569,135,421|88|
|Length = 10_000 - Array.at|559,947,181|86|
|Length = 1_000_000 - Array.at|582,310,079|89|
|Length = 100 - Array[length - 1]|691,455,717|86|
|Length = 10_000 - Array[length - 1]|696,966,839|84|
|Length = 1_000_000 - Array[length - 1]|697,867,210|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|32,764,400|85|
|Object.create({})|1,035,825|69|
|Cached Empty.prototype|719,575,164|88|
|Empty.prototype|1,016,450|65|
|Empty class|797,395|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,809,531|85|
|Using optional chain (obj.field?.field2) (undefined)|809,522,380|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|812,276,804|81|
|Using and operator (obj.field && obj.field.field2) (undefined)|758,050,861|78|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|162,454,510|84|
|Using parseInt(x, 10) - big number (10 len)|10,951,184|78|
|Using + - small number (2 len)|790,676,370|83|
|Using + - big number (10 len)|698,813,297|75|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|640,041|70|
|Using ? operator to avoid rejection|801,004|71|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|697,576,982|83|
|Raw usage underscore usage|723,006,856|86|
|Manipulating private properties using #|693,061,734|85|
|Manipulating private properties using underscore(_)|618,263,166|80|
|Manipulating private properties using Symbol|610,714,068|84|
|Manipulating private properties using PrivateSymbol|28,424,169|82|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,407,670|83|
|Adding property in the object creation - small object|2,121,654|80|
|Adding property after the function creation - small class|137,236|73|
|Adding property in the function creation - small class|136,956|76|
|Adding property after the class creation - small class|114,460|74|
|Adding property in the class creation - small class|115,240|76|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,838,060|82|
|Using replaceAll()|1,695,770|84|
|Using replaceAll(//g)|1,714,343|85|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|154,181|85|
|Sort using first char|706,115|83|
|Sort using localeCompare|658,373|85|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,032|84|
|{...smallObject} - Total keys: 2|54,248,148|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,020|81|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,970|84|
|{ ...bigObject, ...anotherBigObject }|662|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,604,731|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,608,144|91|
|{ ...smallObject, ...anotherSmallObject }|12,987,276|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,128 ops/sec ±17.78% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 327 ops/sec ±5.89% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,534 ops/sec ±1.12% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 801 ops/sec ±19.51% (47 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|758,592,504|86|
|Using backtick (`)|762,644,802|91|
|Using array.join|5,625,395|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,367,262|82|
|Using this|161,400,131|89|
