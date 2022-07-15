# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.6.0`
* __Run:__ Fri Jul 15 2022 20:13:17 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.008ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.12ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.052ms 
    new Array(length): 0.024ms (faster)

 10,000 numbers:
           array.push: 0.446ms 
    new Array(length): 0.227ms (faster)

 1,000,000 numbers:
           array.push: 36.198ms 
    new Array(length): 20.339ms (faster)

 100,000,000 numbers:
           array.push: 1,983.737ms (faster)
    new Array(length): 4,681.239ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.097ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.594ms 
    new Array(length): 0.299ms (faster)

 1,000,000 strings:
           array.push: 221.567ms 
    new Array(length): 11.36ms (faster)

 100,000,000 strings:
           array.push: 2,533.22ms (faster)
    new Array(length): 5,457.8ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|410|85|
|Array.from|14|40|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,471|56|
|[True conditional] Using constructor name|145,988|95|
|[True conditional] Check if property is valid then instanceof |147,374|90|
|[False conditional] Using instanceof only|710,525,561|99|
|[False conditional] Using constructor name|711,131,767|97|
|[False conditional] Check if property is valid then instanceof |711,083,165|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,283|91|
|Intl.DateTimeFormat().format(new Date())|8,463|79|
|Reusing Intl.DateTimeFormat()|405,136|81|
|Format using date.get*|3,716,916|93|
|new Date() (Baseline)|7,533,814|94|
|Date.now() (Baseline)|15,338,016|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,655|97|
|Using brackets {}|701,114|97|
|Using '' + |694,784|96|
|Using date.toString()|753,980|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,384,411|97|
|Using undefined assignment|709,480,574|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,436|56|
|NodeError|142,123|91|
|NodeError Range|142,988|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,373,392|97|
|Function returning explicitly undefined|1,349,667|93|
|Function returning implicitly undefined|1,382,696|95|
|Function returning string|1,363,062|96|
|Function returning integer|1,383,428|96|
|Function returning float|1,374,911|97|
|Function returning functions|1,311,941|97|
|Function returning arrow functions|1,353,462|99|
|Function returning empty object|1,373,527|95|
|Function returning empty array|1,379,518|95|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,928,009|98|
|using Array.includes (first item)|709,695,375|93|
|Using raw comparisson|711,248,480|99|
|Using raw comparisson (first item)|709,489,499|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,477,563|96|
|Length = 10_000 - Array.at|16,466,253|97|
|Length = 1_000_000 - Array.at|16,435,729|98|
|Length = 100 - Array[length - 1]|707,966,771|95|
|Length = 10_000 - Array[length - 1]|707,912,538|99|
|Length = 1_000_000 - Array[length - 1]|706,183,940|98|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,613,589|97|
|Using optional chain (obj.field?.field2) (undefined)|709,545,607|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,737,383|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|709,053,668|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|603,999|77|
|Using ? operator to avoid rejection|645,268|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|245,534,915|95|
|Raw usage underscore usage|243,283,276|93|
|Manipulating private properties using #|160,200,917|88|
|Manipulating private properties using underscore(_)|136,337,469|91|
|Manipulating private properties using Symbol|134,415,363|90|
|Manipulating private properties using PrivateSymbol|29,708,953|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,879|96|
|Sort using first char|735,082|98|
|Sort using localeCompare|695,450|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,729 ops/sec ±0.66% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 408 ops/sec ±0.29% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,640 ops/sec ±0.51% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,027 ops/sec ±15.74% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,250,107|91|
|Using this|129,023,923|91|
