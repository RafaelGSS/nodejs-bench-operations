# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Sat Jul 02 2022 03:05:33 GMT+0000 (Coordinated Universal Time)

```
 10 numbers:
           array.push: 0.005ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.029ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.117ms 
    new Array(length): 0.022ms (faster)

 10,000 numbers:
           array.push: 0.382ms 
    new Array(length): 0.209ms (faster)

 1,000,000 numbers:
           array.push: 31.491ms 
    new Array(length): 17.437ms (faster)

 100,000,000 numbers:
           array.push: 1,588.123ms (faster)
    new Array(length): 4,259.484ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.061ms 
    new Array(length): 0.036ms (faster)

 10,000 strings:
           array.push: 0.597ms 
    new Array(length): 0.262ms (faster)

 1,000,000 strings:
           array.push: 305.73ms 
    new Array(length): 8.614ms (faster)

 100,000,000 strings:
           array.push: 2,183.873ms (faster)
    new Array(length): 4,719.008ms

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|471|88|
|Array.from|16|43|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,617|53|
|[True conditional] Using constructor name|130,433|95|
|[True conditional] Check if property is valid then instanceof |131,497|92|
|[False conditional] Using instanceof only|591,316,704|94|
|[False conditional] Using constructor name|591,465,152|95|
|[False conditional] Check if property is valid then instanceof |591,465,590|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,359|88|
|Intl.DateTimeFormat().format(new Date())|9,201|80|
|Format using date.get*|3,122,267|97|
|new Date() (Baseline)|7,874,681|92|
|Date.now() (Baseline)|15,749,407|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|686,494|98|
|Using brackets {}|698,970|92|
|Using '' + |705,059|97|
|Using date.toString()|774,291|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,489,989|98|
|Using undefined assignment|590,492,203|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|166,971|56|
|NodeError|129,163|93|
|NodeError Range|129,062|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,426,366|96|
|Function returning explicitly undefined|1,372,546|96|
|Function returning implicitly undefined|1,461,623|95|
|Function returning string|1,431,246|95|
|Function returning integer|1,462,957|97|
|Function returning float|1,342,056|93|
|Function returning functions|1,320,254|95|
|Function returning arrow functions|1,410,722|97|
|Function returning empty object|1,417,833|97|
|Function returning empty array|1,374,752|92|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,915,250|96|
|using Array.includes (first item)|590,751,912|96|
|Using raw comparisson|591,736,389|99|
|Using raw comparisson (first item)|591,126,989|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|559,002|83|
|Using ? operator to avoid rejection|575,923|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|251,921,603|91|
|Raw usage underscore usage|261,094,868|92|
|Manipulating private properties using #|190,966,738|97|
|Manipulating private properties using underscore(_)|184,638,488|95|
|Manipulating private properties using Symbol|188,174,858|93|
|Manipulating private properties using PrivateSymbol|37,000,296|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,074|96|
|Sort using first char|872,815|95|
|Sort using localeCompare|799,566|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,891 ops/sec ±0.58% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 394 ops/sec ±0.38% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,217 ops/sec ±0.35% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 983 ops/sec ±31.73% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,215,616|94|
|Using this|113,314,557|95|
