# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Wed Sep 07 2022 15:30:36 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.008ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.054ms 
    new Array(length): 0.018ms (faster)

 1,000 numbers:
           array.push: 0.076ms 
    new Array(length): 0.04ms (faster)

 10,000 numbers:
           array.push: 0.718ms 
    new Array(length): 0.275ms (faster)

 1,000,000 numbers:
           array.push: 51.257ms 
    new Array(length): 10.079ms (faster)

 100,000,000 numbers:
           array.push: 2,354.06ms (faster)
    new Array(length): 6,275.858ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.108ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.1ms 
    new Array(length): 0.028ms (faster)

 10,000 strings:
           array.push: 0.913ms 
    new Array(length): 0.401ms (faster)

 1,000,000 strings:
           array.push: 480.294ms 
    new Array(length): 11.59ms (faster)

 100,000,000 strings:
           array.push: 3,071.079ms (faster)
    new Array(length): 6,645.833ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|286|78|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|134,966|61|
|[True conditional] Using constructor name|110,008|89|
|[True conditional] Check if property is valid then instanceof |110,473|88|
|[False conditional] Using instanceof only|739,293,350|87|
|[False conditional] Using constructor name|749,293,744|88|
|[False conditional] Check if property is valid then instanceof |747,238,358|86|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,327|81|
|Intl.DateTimeFormat().format(new Date())|5,478|73|
|Reusing Intl.DateTimeFormat()|435,091|88|
|Format using date.get*|2,815,844|84|
|new Date() (Baseline)|5,667,265|86|
|Date.now() (Baseline)|12,418,480|85|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|561,844|88|
|Using brackets {}|577,406|88|
|Using '' + |572,727|91|
|Using date.toString()|621,463|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,057,243|88|
|Using undefined assignment|750,784,511|88|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|127,723|61|
|NodeError|107,167|85|
|NodeError Range|105,072|87|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,070,785|85|
|Function returning explicitly undefined|1,029,316|82|
|Function returning implicitly undefined|1,112,193|86|
|Function returning string|1,056,519|90|
|Function returning integer|1,051,481|86|
|Function returning float|1,031,150|92|
|Function returning functions|997,013|88|
|Function returning arrow functions|1,043,540|87|
|Function returning empty object|1,079,842|86|
|Function returning empty array|1,044,943|86|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|720,846,065|88|
|using Array.includes (first item)|726,399,173|87|
|Using raw comparison|735,618,706|86|
|Using raw comparison (first item)|748,611,204|88|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,763,152|86|
|Using Object.getOwnPropertyNames()|46,350,170|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,712,882|86|
|Length = 10_000 - Array.at|14,642,684|91|
|Length = 1_000_000 - Array.at|14,948,697|87|
|Length = 100 - Array[length - 1]|730,440,383|85|
|Length = 10_000 - Array[length - 1]|768,557,491|90|
|Length = 1_000_000 - Array[length - 1]|708,023,592|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|719,393,630|86|
|Using optional chain (obj.field?.field2) (undefined)|737,737,376|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|739,920,418|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|750,481,118|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|602,991|72|
|Using ? operator to avoid rejection|651,705|72|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,515,646|87|
|Raw usage underscore usage|5,343,303|83|
|Manipulating private properties using #|2,059,390|87|
|Manipulating private properties using underscore(_)|607,419,665|87|
|Manipulating private properties using Symbol|602,852,659|83|
|Manipulating private properties using PrivateSymbol|23,552,796|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,926,679|86|
|Using replaceAll()|1,640,991|86|
|Using replaceAll(//g)|1,609,172|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|147,710|86|
|Sort using first char|619,162|84|
|Sort using localeCompare|319,747|85|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,210 ops/sec ±14.87% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 345 ops/sec ±1.17% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,127 ops/sec ±0.97% (85 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 765 ops/sec ±17.72% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|778,059,237|88|
|Using backtick (`)|747,075,062|88|
|Using array.join|5,201,624|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|148,602,276|83|
|Using this|144,491,892|83|
