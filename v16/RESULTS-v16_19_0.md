# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sat Dec 31 2022 20:04:36 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.127ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.068ms 
    new Array(length): 0.029ms (faster)

 10,000 numbers:
           array.push: 0.559ms 
    new Array(length): 0.276ms (faster)

 1,000,000 numbers:
           array.push: 39.1ms 
    new Array(length): 24.252ms (faster)

 100,000,000 numbers:
           array.push: 2,144.279ms (faster)
    new Array(length): 5,576.345ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.02ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.063ms 
    new Array(length): 0.032ms (faster)

 10,000 strings:
           array.push: 0.693ms 
    new Array(length): 0.336ms (faster)

 1,000,000 strings:
           array.push: 370.342ms 
    new Array(length): 10.982ms (faster)

 100,000,000 strings:
           array.push: 3,036.9ms (faster)
    new Array(length): 6,203.761ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|82|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,760|58|
|[True conditional] Using constructor name|131,758|93|
|[True conditional] Check if property is valid then instanceof |133,795|90|
|[False conditional] Using instanceof only|597,592,428|93|
|[False conditional] Using constructor name|597,640,217|94|
|[False conditional] Check if property is valid then instanceof |596,687,163|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,557|82|
|Intl.DateTimeFormat().format(new Date())|7,512|81|
|Reusing Intl.DateTimeFormat()|417,334|94|
|Format using date.get*|2,367,865|90|
|new Date() (Baseline)|6,283,391|94|
|Date.now() (Baseline)|11,989,586|92|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|552,301|90|
|Using brackets {}|562,503|93|
|Using '' + |561,479|90|
|Using date.toString()|596,922|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,065,541|93|
|Using undefined assignment|595,110,410|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,123|54|
|NodeError|131,104|90|
|NodeError Range|131,654|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,103,152|90|
|Function returning explicitly undefined|1,118,346|95|
|Function returning implicitly undefined|1,121,602|89|
|Function returning string|1,122,027|94|
|Function returning integer|1,118,111|93|
|Function returning float|1,135,675|93|
|Function returning functions|1,092,725|93|
|Function returning arrow functions|1,092,784|91|
|Function returning empty object|1,114,598|95|
|Function returning empty array|1,132,553|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|599,480,713|93|
|using Array.includes (first item)|596,155,700|93|
|Using raw comparison|597,874,655|91|
|Using raw comparison (first item)|596,527,979|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,904,252|93|
|Using Object.getOwnPropertyNames()|44,386,182|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,543,985|93|
|Length = 10_000 - Array.at|13,428,737|94|
|Length = 1_000_000 - Array.at|13,365,067|97|
|Length = 100 - Array[length - 1]|589,977,862|94|
|Length = 10_000 - Array[length - 1]|590,027,706|94|
|Length = 1_000_000 - Array[length - 1]|589,692,859|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,227,842|91|
|Object.create({})|1,137,645|79|
|Cached Empty.prototype|592,064,394|95|
|Empty.prototype|1,148,019|76|
|Empty class|782,225|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,502,121|91|
|Using optional chain (obj.field?.field2) (undefined)|594,766,341|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,621,099|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,368,569|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|145,554,684|89|
|Using parseInt(x, 10) - big number (10 len)|10,295,166|93|
|Using + - small number (2 len)|591,738,733|92|
|Using + - big number (10 len)|588,398,021|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|632,601|73|
|Using ? operator to avoid rejection|704,115|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,025,331|94|
|Raw usage underscore usage|5,816,825|90|
|Manipulating private properties using #|2,142,853|89|
|Manipulating private properties using underscore(_)|588,669,667|89|
|Manipulating private properties using Symbol|587,863,880|90|
|Manipulating private properties using PrivateSymbol|22,788,082|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,639,969|93|
|Adding property in the object creation - small object|1,659,118|91|
|Adding property after the function creation - small class|147,139|81|
|Adding property in the function creation - small class|146,817|87|
|Adding property after the class creation - small class|122,718|81|
|Adding property in the class creation - small class|122,191|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,766,732|93|
|Using replaceAll()|1,711,248|93|
|Using replaceAll(//g)|1,603,016|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|152,319|93|
|Sort using first char|650,995|90|
|Sort using localeCompare|372,754|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,142|91|
|{...smallObject} - Total keys: 2|50,925,949|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,123|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,038|92|
|{ ...bigObject, ...anotherBigObject }|700|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,577,600|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,380,964|95|
|{ ...smallObject, ...anotherSmallObject }|11,508,004|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,347 ops/sec ±16.34% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 330 ops/sec ±4.31% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,338 ops/sec ±0.58% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 650 ops/sec ±17.62% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|600,964,468|93|
|Using backtick (`)|596,929,499|92|
|Using array.join|5,755,119|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,458,707|91|
|Using this|111,086,833|93|
