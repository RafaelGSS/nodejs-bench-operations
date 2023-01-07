# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sat Jan 07 2023 17:12:06 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.015ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.048ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.068ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.631ms 
    new Array(length): 0.288ms (faster)

 1,000,000 numbers:
           array.push: 37.063ms 
    new Array(length): 22.317ms (faster)

 100,000,000 numbers:
           array.push: 2,058.209ms (faster)
    new Array(length): 5,196.566ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.117ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.717ms 
    new Array(length): 0.307ms (faster)

 1,000,000 strings:
           array.push: 369.709ms 
    new Array(length): 9.155ms (faster)

 100,000,000 strings:
           array.push: 2,634.261ms (faster)
    new Array(length): 5,772.081ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|352|81|
|Array.from|13|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|160,667|52|
|[True conditional] Using constructor name|122,110|89|
|[True conditional] Check if property is valid then instanceof |121,266|89|
|[False conditional] Using instanceof only|690,465,520|90|
|[False conditional] Using constructor name|688,153,869|88|
|[False conditional] Check if property is valid then instanceof |684,915,784|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,763|78|
|Intl.DateTimeFormat().format(new Date())|6,168|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,302|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,157|69|
|Reusing Intl.DateTimeFormat()|448,623|91|
|Reusing dfWithOptions.format(Date.now())|243,409|86|
|Reusing dfWithOptions.format(new Date())|228,619|89|
|Date.toLocaleDateString()|464,916|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,828|82|
|Format using date.get*|3,034,400|87|
|new Date() (Baseline)|6,387,861|89|
|Date.now() (Baseline)|13,595,600|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|557,778|87|
|Using brackets {}|616,313|87|
|Using '' + |614,490|90|
|Using date.toString()|663,623|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,080,509|92|
|Using undefined assignment|687,484,764|91|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|156,198|55|
|NodeError|118,482|84|
|NodeError Range|124,101|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,243,677|92|
|Function returning explicitly undefined|1,209,369|92|
|Function returning implicitly undefined|1,246,163|91|
|Function returning string|1,174,224|86|
|Function returning integer|1,209,687|88|
|Function returning float|1,178,651|90|
|Function returning functions|1,177,040|85|
|Function returning arrow functions|1,200,963|91|
|Function returning empty object|1,247,104|91|
|Function returning empty array|1,244,595|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|690,283,192|91|
|using Array.includes (first item)|695,762,759|89|
|Using raw comparison|693,309,475|93|
|Using raw comparison (first item)|685,559,431|86|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,093,951|81|
|Using Object.getOwnPropertyNames()|47,920,920|85|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,508,681|92|
|Length = 10_000 - Array.at|16,872,435|91|
|Length = 1_000_000 - Array.at|16,519,778|91|
|Length = 100 - Array[length - 1]|696,077,505|89|
|Length = 10_000 - Array[length - 1]|684,584,011|86|
|Length = 1_000_000 - Array[length - 1]|688,563,819|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,685,465|85|
|Object.create({})|848,357|73|
|Cached Empty.prototype|687,177,649|90|
|Empty.prototype|924,953|78|
|Empty class|628,841|72|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|694,396,417|90|
|Using optional chain (obj.field?.field2) (undefined)|692,227,490|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|689,856,616|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|688,853,616|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|165,134,219|93|
|Using parseInt(x, 10) - big number (10 len)|13,218,300|92|
|Using + - small number (2 len)|702,150,756|92|
|Using + - big number (10 len)|681,094,386|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|492,908|73|
|Using ? operator to avoid rejection|541,193|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|136,948,997|87|
|Raw usage underscore usage|141,088,456|88|
|Manipulating private properties using #|107,596,214|84|
|Manipulating private properties using underscore(_)|73,714,131|88|
|Manipulating private properties using Symbol|76,535,414|87|
|Manipulating private properties using PrivateSymbol|28,573,105|84|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,234,428|90|
|Adding property in the object creation - small object|2,231,431|87|
|Adding property after the function creation - small class|125,394|81|
|Adding property in the function creation - small class|124,025|81|
|Adding property after the class creation - small class|101,292|78|
|Adding property in the class creation - small class|102,298|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,891,833|91|
|Using replaceAll()|1,793,852|91|
|Using replaceAll(//g)|1,663,771|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|152,242|87|
|Sort using first char|690,326|91|
|Sort using localeCompare|657,844|87|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,157|88|
|{...smallObject} - Total keys: 2|58,600,180|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,159|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,286|89|
|{ ...bigObject, ...anotherBigObject }|702|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,529,814|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,645,798|90|
|{ ...smallObject, ...anotherSmallObject }|14,315,016|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,338 ops/sec ±17.75% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 369 ops/sec ±1.52% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,989 ops/sec ±0.87% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 733 ops/sec ±14.66% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|680,002,033|86|
|Using backtick (`)|683,410,558|90|
|Using array.join|6,011,275|85|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,877,807|90|
|Using this|154,404,198|85|
