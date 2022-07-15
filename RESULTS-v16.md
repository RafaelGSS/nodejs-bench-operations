# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.16.0`
* __Run:__ Fri Jul 15 2022 20:13:16 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.012ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.152ms 
    new Array(length): 0.018ms (faster)

 1,000 numbers:
           array.push: 0.091ms 
    new Array(length): 0.028ms (faster)

 10,000 numbers:
           array.push: 0.487ms 
    new Array(length): 0.252ms (faster)

 1,000,000 numbers:
           array.push: 40.19ms 
    new Array(length): 27.332ms (faster)

 100,000,000 numbers:
           array.push: 2,217.903ms (faster)
    new Array(length): 5,807.892ms


----


 10 strings:
           array.push: 0.032ms (faster)
    new Array(length): 0.164ms

 100 strings:
           array.push: 0.12ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.057ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.608ms 
    new Array(length): 0.283ms (faster)

 1,000,000 strings:
           array.push: 364.935ms 
    new Array(length): 10.807ms (faster)

 100,000,000 strings:
           array.push: 3,032.057ms (faster)
    new Array(length): 6,337.503ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|366|83|
|Array.from|13|36|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|154,029|57|
|[True conditional] Using constructor name|127,203|87|
|[True conditional] Check if property is valid then instanceof |123,044|85|
|[False conditional] Using instanceof only|721,451,056|89|
|[False conditional] Using constructor name|723,884,143|87|
|[False conditional] Check if property is valid then instanceof |713,124,007|81|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,322|83|
|Intl.DateTimeFormat().format(new Date())|5,452|77|
|Reusing Intl.DateTimeFormat()|407,447|88|
|Format using date.get*|2,845,418|90|
|new Date() (Baseline)|5,730,403|90|
|Date.now() (Baseline)|11,900,466|82|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|549,480|91|
|Using brackets {}|553,537|88|
|Using '' + |562,005|86|
|Using date.toString()|613,721|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,963,139|87|
|Using undefined assignment|767,130,843|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,739|50|
|NodeError|129,118|85|
|NodeError Range|127,891|82|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|987,078|87|
|Function returning explicitly undefined|938,451|87|
|Function returning implicitly undefined|990,387|86|
|Function returning string|972,715|87|
|Function returning integer|1,005,892|86|
|Function returning float|982,792|83|
|Function returning functions|985,278|87|
|Function returning arrow functions|961,114|84|
|Function returning empty object|974,173|85|
|Function returning empty array|922,118|85|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|734,905,942|82|
|using Array.includes (first item)|711,298,605|85|
|Using raw comparisson|712,523,974|83|
|Using raw comparisson (first item)|727,571,096|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,878,260|90|
|Length = 10_000 - Array.at|15,380,608|86|
|Length = 1_000_000 - Array.at|16,197,361|88|
|Length = 100 - Array[length - 1]|774,313,334|88|
|Length = 10_000 - Array[length - 1]|780,136,700|89|
|Length = 1_000_000 - Array[length - 1]|774,092,160|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|781,475,048|88|
|Using optional chain (obj.field?.field2) (undefined)|771,086,719|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|732,363,533|80|
|Using and operator (obj.field && obj.field.field2) (undefined)|760,327,997|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|613,105|71|
|Using ? operator to avoid rejection|681,918|73|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,806,248|85|
|Raw usage underscore usage|5,726,276|90|
|Manipulating private properties using #|2,109,188|88|
|Manipulating private properties using underscore(_)|635,282,974|88|
|Manipulating private properties using Symbol|642,701,505|89|
|Manipulating private properties using PrivateSymbol|25,622,098|84|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|154,661|85|
|Sort using first char|665,240|88|
|Sort using localeCompare|352,826|86|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,215 ops/sec ±13.89% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 356 ops/sec ±1.02% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,038 ops/sec ±1.31% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 704 ops/sec ±14.65% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|151,973,793|87|
|Using this|145,761,043|86|
