# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Tue Jul 05 2022 18:38:30 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.02ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.157ms 
    new Array(length): 0.024ms (faster)

 1,000 numbers:
           array.push: 0.062ms 
    new Array(length): 0.028ms (faster)

 10,000 numbers:
           array.push: 0.507ms 
    new Array(length): 0.263ms (faster)

 1,000,000 numbers:
           array.push: 37.153ms 
    new Array(length): 23.565ms (faster)

 100,000,000 numbers:
           array.push: 2,132.2ms (faster)
    new Array(length): 5,620.039ms


----


 10 strings:
           array.push: 0.013ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.117ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.06ms 
    new Array(length): 0.029ms (faster)

 10,000 strings:
           array.push: 0.737ms 
    new Array(length): 0.324ms (faster)

 1,000,000 strings:
           array.push: 423.555ms 
    new Array(length): 11.267ms (faster)

 100,000,000 strings:
           array.push: 2,834.859ms (faster)
    new Array(length): 6,288.074ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|395|84|
|Array.from|12|33|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,281|55|
|[True conditional] Using constructor name|121,452|87|
|[True conditional] Check if property is valid then instanceof |124,236|90|
|[False conditional] Using instanceof only|646,236,101|92|
|[False conditional] Using constructor name|648,907,701|92|
|[False conditional] Check if property is valid then instanceof |649,945,352|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,424|82|
|Intl.DateTimeFormat().format(new Date())|5,517|81|
|Reusing Intl.DateTimeFormat()|421,262|92|
|Format using date.get*|2,899,148|92|
|new Date() (Baseline)|6,096,894|91|
|Date.now() (Baseline)|12,479,771|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|550,774|88|
|Using brackets {}|560,485|93|
|Using '' + |549,883|89|
|Using date.toString()|595,307|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,939,931|91|
|Using undefined assignment|654,322,510|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|151,714|56|
|NodeError|121,323|88|
|NodeError Range|121,315|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,019,135|91|
|Function returning explicitly undefined|998,068|91|
|Function returning implicitly undefined|1,008,792|94|
|Function returning string|1,001,404|91|
|Function returning integer|1,023,819|91|
|Function returning float|1,026,044|90|
|Function returning functions|992,733|93|
|Function returning arrow functions|993,508|90|
|Function returning empty object|996,975|92|
|Function returning empty array|1,014,319|90|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|648,848,847|93|
|using Array.includes (first item)|648,450,111|93|
|Using raw comparisson|651,870,368|94|
|Using raw comparisson (first item)|645,777,566|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,787,763|93|
|Length = 10_000 - Array.at|14,801,290|94|
|Length = 1_000_000 - Array.at|14,611,989|94|
|Length = 100 - Array[length - 1]|647,150,358|90|
|Length = 10_000 - Array[length - 1]|651,840,474|93|
|Length = 1_000_000 - Array[length - 1]|646,530,430|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|617,415|72|
|Using ? operator to avoid rejection|676,301|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,615,604|93|
|Raw usage underscore usage|5,394,168|91|
|Manipulating private properties using #|2,001,503|89|
|Manipulating private properties using underscore(_)|608,753,004|85|
|Manipulating private properties using Symbol|610,188,122|89|
|Manipulating private properties using PrivateSymbol|24,017,719|83|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|145,593|93|
|Sort using first char|635,166|89|
|Sort using localeCompare|352,385|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,300 ops/sec ±16.90% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 333 ops/sec ±0.56% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 1,984 ops/sec ±0.94% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 669 ops/sec ±17.85% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,950,676|89|
|Using this|138,651,622|87|
