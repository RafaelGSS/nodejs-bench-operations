# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.7.0`
* __Run:__ Fri Aug 12 2022 19:23:52 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.113ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.045ms 
    new Array(length): 0.023ms (faster)

 10,000 numbers:
           array.push: 0.369ms 
    new Array(length): 0.202ms (faster)

 1,000,000 numbers:
           array.push: 39.013ms 
    new Array(length): 7.191ms (faster)

 100,000,000 numbers:
           array.push: 1,490.898ms (faster)
    new Array(length): 4,103.412ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.11ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.598ms 
    new Array(length): 0.285ms (faster)

 1,000,000 strings:
           array.push: 297.492ms 
    new Array(length): 8.039ms (faster)

 100,000,000 strings:
           array.push: 2,115.52ms (faster)
    new Array(length): 4,572.684ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|434|87|
|Array.from|16|45|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,354|54|
|[True conditional] Using constructor name|129,355|95|
|[True conditional] Check if property is valid then instanceof |130,388|95|
|[False conditional] Using instanceof only|591,246,788|99|
|[False conditional] Using constructor name|590,650,318|98|
|[False conditional] Check if property is valid then instanceof |591,717,323|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,415|89|
|Intl.DateTimeFormat().format(new Date())|9,068|80|
|Reusing Intl.DateTimeFormat()|394,703|84|
|Format using date.get*|3,810,938|94|
|new Date() (Baseline)|8,098,404|98|
|Date.now() (Baseline)|15,952,552|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|671,078|94|
|Using brackets {}|681,520|95|
|Using '' + |650,053|99|
|Using date.toString()|747,807|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,428,893|97|
|Using undefined assignment|590,549,936|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,753|55|
|NodeError|127,307|92|
|NodeError Range|127,430|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,357,697|98|
|Function returning explicitly undefined|1,293,892|95|
|Function returning implicitly undefined|1,317,508|88|
|Function returning string|1,354,536|97|
|Function returning integer|1,374,339|97|
|Function returning float|1,376,121|99|
|Function returning functions|1,326,555|98|
|Function returning arrow functions|1,354,203|97|
|Function returning empty object|1,372,397|97|
|Function returning empty array|1,351,840|93|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,009,464|98|
|using Array.includes (first item)|591,257,523|94|
|Using raw comparisson|592,628,607|96|
|Using raw comparisson (first item)|591,348,127|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,392,271|99|
|Length = 10_000 - Array.at|19,302,571|95|
|Length = 1_000_000 - Array.at|19,360,706|96|
|Length = 100 - Array[length - 1]|589,679,941|98|
|Length = 10_000 - Array[length - 1]|589,035,866|97|
|Length = 1_000_000 - Array[length - 1]|590,039,005|98|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,038,516|97|
|Using optional chain (obj.field?.field2) (undefined)|591,364,984|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,549,943|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,001,340|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|542,231|80|
|Using ? operator to avoid rejection|569,485|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|252,378,364|94|
|Raw usage underscore usage|258,511,167|96|
|Manipulating private properties using #|186,833,323|91|
|Manipulating private properties using underscore(_)|171,264,031|89|
|Manipulating private properties using Symbol|175,587,317|91|
|Manipulating private properties using PrivateSymbol|36,484,044|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,084|96|
|Sort using first char|837,201|94|
|Sort using localeCompare|778,960|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,843 ops/sec ±0.51% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 371 ops/sec ±0.16% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,201 ops/sec ±0.37% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 976 ops/sec ±27.02% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,493,321|93|
|Using this|113,097,762|94|
