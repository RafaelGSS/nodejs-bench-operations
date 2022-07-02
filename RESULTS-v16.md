# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Sat Jul 02 2022 16:04:01 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.012ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.14ms 
    new Array(length): 0.02ms (faster)

 1,000 numbers:
           array.push: 0.055ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.458ms 
    new Array(length): 0.27ms (faster)

 1,000,000 numbers:
           array.push: 36.299ms 
    new Array(length): 10.39ms (faster)

 100,000,000 numbers:
           array.push: 2,234.848ms (faster)
    new Array(length): 5,331.354ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.035ms

 100 strings:
           array.push: 0.1ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.642ms 
    new Array(length): 0.321ms (faster)

 1,000,000 strings:
           array.push: 458.155ms 
    new Array(length): 10.175ms (faster)

 100,000,000 strings:
           array.push: 2,798.755ms (faster)
    new Array(length): 5,792.857ms

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|369|82|
|Array.from|12|34|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,899|55|
|[True conditional] Using constructor name|126,585|85|
|[True conditional] Check if property is valid then instanceof |135,121|88|
|[False conditional] Using instanceof only|802,888,793|89|
|[False conditional] Using constructor name|812,582,121|85|
|[False conditional] Check if property is valid then instanceof |821,587,933|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,106|77|
|Intl.DateTimeFormat().format(new Date())|5,529|71|
|Format using date.get*|3,286,525|85|
|new Date() (Baseline)|6,735,805|83|
|Date.now() (Baseline)|13,812,987|83|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|624,131|89|
|Using brackets {}|616,328|85|
|Using '' + |648,496|85|
|Using date.toString()|628,407|80|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,212,334|81|
|Using undefined assignment|827,861,072|87|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|177,484|53|
|NodeError|137,627|85|
|NodeError Range|136,227|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,101,531|87|
|Function returning explicitly undefined|1,100,192|82|
|Function returning implicitly undefined|966,164|87|
|Function returning string|1,115,944|83|
|Function returning integer|1,167,792|86|
|Function returning float|1,157,362|82|
|Function returning functions|1,093,434|83|
|Function returning arrow functions|1,121,061|85|
|Function returning empty object|1,130,419|87|
|Function returning empty array|1,177,894|86|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|853,508,058|85|
|using Array.includes (first item)|849,985,875|84|
|Using raw comparisson|853,127,953|87|
|Using raw comparisson (first item)|841,042,985|81|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|666,631|72|
|Using ? operator to avoid rejection|770,952|73|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,631,003|89|
|Raw usage underscore usage|6,156,821|84|
|Manipulating private properties using #|2,208,824|83|
|Manipulating private properties using underscore(_)|671,037,818|85|
|Manipulating private properties using Symbol|647,222,551|84|
|Manipulating private properties using PrivateSymbol|25,692,042|82|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|166,159|82|
|Sort using first char|759,973|87|
|Sort using localeCompare|380,827|82|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,473 ops/sec ±17.04% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±1.27% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,279 ops/sec ±1.26% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 655 ops/sec ±20.31% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|171,905,709|85|
|Using this|175,131,247|86|
