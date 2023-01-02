# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Mon Jan 02 2023 17:43:52 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.015ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.046ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.072ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.589ms 
    new Array(length): 0.251ms (faster)

 1,000,000 numbers:
           array.push: 43.341ms 
    new Array(length): 8.279ms (faster)

 100,000,000 numbers:
           array.push: 1,978.344ms (faster)
    new Array(length): 4,793.214ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.036ms

 100 strings:
           array.push: 0.128ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.054ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.677ms 
    new Array(length): 0.298ms (faster)

 1,000,000 strings:
           array.push: 360.938ms 
    new Array(length): 9.591ms (faster)

 100,000,000 strings:
           array.push: 2,690.953ms (faster)
    new Array(length): 5,551.39ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|369|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,925|53|
|[True conditional] Using constructor name|126,417|86|
|[True conditional] Check if property is valid then instanceof |128,308|85|
|[False conditional] Using instanceof only|727,266,282|90|
|[False conditional] Using constructor name|720,982,644|89|
|[False conditional] Check if property is valid then instanceof |729,333,087|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,198|83|
|Intl.DateTimeFormat().format(new Date())|6,419|83|
|Reusing Intl.DateTimeFormat()|463,825|89|
|Format using date.get*|2,774,441|91|
|new Date() (Baseline)|6,829,390|90|
|Date.now() (Baseline)|14,783,566|87|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|651,345|91|
|Using brackets {}|652,148|88|
|Using '' + |667,302|92|
|Using date.toString()|716,147|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,132,720|89|
|Using undefined assignment|732,395,241|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,013|56|
|NodeError|128,617|90|
|NodeError Range|126,332|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,296,445|92|
|Function returning explicitly undefined|1,287,066|93|
|Function returning implicitly undefined|1,253,918|89|
|Function returning string|1,240,278|89|
|Function returning integer|1,269,352|89|
|Function returning float|1,260,386|88|
|Function returning functions|1,210,134|87|
|Function returning arrow functions|1,254,863|91|
|Function returning empty object|1,293,520|90|
|Function returning empty array|1,275,480|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|730,305,432|92|
|using Array.includes (first item)|730,124,944|91|
|Using raw comparison|728,947,195|91|
|Using raw comparison (first item)|726,124,353|91|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,232,418|86|
|Using Object.getOwnPropertyNames()|48,455,797|79|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,013,899|87|
|Length = 10_000 - Array.at|16,746,792|87|
|Length = 1_000_000 - Array.at|17,487,926|90|
|Length = 100 - Array[length - 1]|724,368,078|89|
|Length = 10_000 - Array[length - 1]|725,200,299|88|
|Length = 1_000_000 - Array[length - 1]|722,528,817|90|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,956,322|88|
|Object.create({})|899,369|73|
|Cached Empty.prototype|718,019,856|90|
|Empty.prototype|987,350|78|
|Empty class|674,164|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|730,567,084|94|
|Using optional chain (obj.field?.field2) (undefined)|730,695,001|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|731,576,417|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|727,519,639|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|169,710,415|91|
|Using parseInt(x, 10) - big number (10 len)|13,690,574|87|
|Using + - small number (2 len)|732,434,042|92|
|Using + - big number (10 len)|724,312,367|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|531,608|74|
|Using ? operator to avoid rejection|558,625|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|155,240,515|91|
|Raw usage underscore usage|156,034,611|92|
|Manipulating private properties using #|112,074,192|87|
|Manipulating private properties using underscore(_)|80,022,178|89|
|Manipulating private properties using Symbol|79,369,638|87|
|Manipulating private properties using PrivateSymbol|30,056,446|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,378,429|88|
|Adding property in the object creation - small object|2,360,136|91|
|Adding property after the function creation - small class|128,664|81|
|Adding property in the function creation - small class|130,498|82|
|Adding property after the class creation - small class|107,182|81|
|Adding property in the class creation - small class|108,815|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,998,678|88|
|Using replaceAll()|1,879,803|91|
|Using replaceAll(//g)|1,779,491|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|168,567|91|
|Sort using first char|742,031|86|
|Sort using localeCompare|701,261|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,224|90|
|{...smallObject} - Total keys: 2|62,035,065|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,265|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,423|92|
|{ ...bigObject, ...anotherBigObject }|761|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,935,804|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,621,769|88|
|{ ...smallObject, ...anotherSmallObject }|14,923,380|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,390 ops/sec ±16.81% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 369 ops/sec ±4.55% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,155 ops/sec ±0.86% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 760 ops/sec ±13.23% (69 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|726,731,109|93|
|Using backtick (`)|737,150,983|92|
|Using array.join|6,452,262|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|156,852,421|90|
|Using this|168,794,579|88|
