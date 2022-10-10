# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.10.0`
* __Run:__ Mon Oct 10 2022 11:37:29 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.034ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.567ms 
    new Array(length): 0.244ms (faster)

 1,000,000 numbers:
           array.push: 37.339ms 
    new Array(length): 19.641ms (faster)

 100,000,000 numbers:
           array.push: 2,088.637ms (faster)
    new Array(length): 4,703.209ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.103ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.651ms 
    new Array(length): 0.322ms (faster)

 1,000,000 strings:
           array.push: 336.382ms 
    new Array(length): 9.027ms (faster)

 100,000,000 strings:
           array.push: 2,671.509ms (faster)
    new Array(length): 5,473.236ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|358|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,169|57|
|[True conditional] Using constructor name|149,031|93|
|[True conditional] Check if property is valid then instanceof |150,257|91|
|[False conditional] Using instanceof only|710,119,797|95|
|[False conditional] Using constructor name|710,450,588|98|
|[False conditional] Check if property is valid then instanceof |710,111,757|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,064|90|
|Intl.DateTimeFormat().format(new Date())|8,481|78|
|Reusing Intl.DateTimeFormat()|393,565|74|
|Format using date.get*|3,753,541|95|
|new Date() (Baseline)|7,530,538|94|
|Date.now() (Baseline)|15,423,872|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|652,962|97|
|Using brackets {}|692,253|96|
|Using '' + |692,024|96|
|Using date.toString()|752,210|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,397,484|97|
|Using undefined assignment|709,144,432|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,738|56|
|NodeError|140,331|93|
|NodeError Range|141,355|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,338,841|97|
|Function returning explicitly undefined|1,324,461|96|
|Function returning implicitly undefined|1,351,116|91|
|Function returning string|1,336,358|97|
|Function returning integer|1,340,471|96|
|Function returning float|1,355,927|96|
|Function returning functions|1,321,364|95|
|Function returning arrow functions|1,329,445|96|
|Function returning empty object|1,315,745|94|
|Function returning empty array|1,321,074|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,845,186|97|
|using Array.includes (first item)|708,767,487|97|
|Using raw comparison|710,373,336|97|
|Using raw comparison (first item)|708,897,680|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,909,391|98|
|Using Object.getOwnPropertyNames()|50,629,915|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,768,321|96|
|Length = 10_000 - Array.at|16,723,292|93|
|Length = 1_000_000 - Array.at|16,802,510|98|
|Length = 100 - Array[length - 1]|708,188,867|97|
|Length = 10_000 - Array[length - 1]|707,025,123|97|
|Length = 1_000_000 - Array[length - 1]|705,946,959|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,070,466|94|
|Object.create({})|1,020,429|83|
|Cached Empty.prototype|708,812,965|96|
|Empty.prototype|1,057,902|78|
|Empty class|729,690|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,735,608|97|
|Using optional chain (obj.field?.field2) (undefined)|710,129,313|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,963,010|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,613,221|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,805,537|97|
|Using parseInt(x, 10) - big number (10 len)|14,176,610|99|
|Using + - small number (2 len)|710,797,174|95|
|Using + - big number (10 len)|709,774,345|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|605,525|80|
|Using ? operator to avoid rejection|639,992|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|233,432,973|95|
|Raw usage underscore usage|227,472,470|91|
|Manipulating private properties using #|154,820,344|84|
|Manipulating private properties using underscore(_)|128,327,022|95|
|Manipulating private properties using Symbol|129,249,418|92|
|Manipulating private properties using PrivateSymbol|29,651,553|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,256,641|94|
|Using replaceAll()|2,052,661|96|
|Using replaceAll(//g)|1,989,661|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|175,118|94|
|Sort using first char|729,175|95|
|Sort using localeCompare|701,195|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,607 ops/sec ±15.61% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 421 ops/sec ±0.46% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,570 ops/sec ±0.43% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 764 ops/sec ±19.99% (36 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,294,326|97|
|Using backtick (`)|710,778,042|98|
|Using array.join|6,601,223|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,299,701|92|
|Using this|129,407,072|95|
