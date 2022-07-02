# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Sat Jul 02 2022 16:43:07 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.009ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.104ms 
    new Array(length): 0.016ms (faster)

 1,000 numbers:
           array.push: 0.048ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.405ms 
    new Array(length): 0.234ms (faster)

 1,000,000 numbers:
           array.push: 38.648ms 
    new Array(length): 7.88ms (faster)

 100,000,000 numbers:
           array.push: 1,538.543ms (faster)
    new Array(length): 4,261.544ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.089ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.049ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.499ms 
    new Array(length): 0.264ms (faster)

 1,000,000 strings:
           array.push: 307.415ms 
    new Array(length): 8.785ms (faster)

 100,000,000 strings:
           array.push: 2,069.503ms (faster)
    new Array(length): 4,618.632ms

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|481|89|
|Array.from|16|44|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|176,518|55|
|[True conditional] Using constructor name|134,238|95|
|[True conditional] Check if property is valid then instanceof |136,549|93|
|[False conditional] Using instanceof only|594,130,934|95|
|[False conditional] Using constructor name|593,548,869|97|
|[False conditional] Check if property is valid then instanceof |594,321,104|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,975|85|
|Intl.DateTimeFormat().format(new Date())|9,047|82|
|Reusing Intl.DateTimeFormat()|461,184|90|
|Format using date.get*|3,778,678|97|
|new Date() (Baseline)|7,737,915|96|
|Date.now() (Baseline)|14,873,498|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|615,677|96|
|Using brackets {}|620,617|95|
|Using '' + |618,275|96|
|Using date.toString()|668,760|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,447,587|96|
|Using undefined assignment|591,966,412|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|173,012|52|
|NodeError|131,637|94|
|NodeError Range|132,636|98|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,275,317|97|
|Function returning explicitly undefined|1,268,758|99|
|Function returning implicitly undefined|1,268,963|89|
|Function returning string|1,280,698|97|
|Function returning integer|1,221,628|94|
|Function returning float|1,284,148|97|
|Function returning functions|1,255,176|99|
|Function returning arrow functions|1,270,201|98|
|Function returning empty object|1,295,636|99|
|Function returning empty array|1,292,176|98|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,359,432|94|
|using Array.includes (first item)|592,472,603|95|
|Using raw comparisson|593,430,891|96|
|Using raw comparisson (first item)|592,615,291|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|801,045|80|
|Using ? operator to avoid rejection|857,335|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,234,260|94|
|Raw usage underscore usage|7,720,309|98|
|Manipulating private properties using #|2,845,348|97|
|Manipulating private properties using underscore(_)|591,942,530|95|
|Manipulating private properties using Symbol|590,266,698|95|
|Manipulating private properties using PrivateSymbol|35,448,526|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,595|96|
|Sort using first char|869,603|97|
|Sort using localeCompare|438,275|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,720 ops/sec ±15.47% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 372 ops/sec ±0.46% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,989 ops/sec ±0.41% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,008 ops/sec ±22.94% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,526,759|91|
|Using this|113,293,158|91|
