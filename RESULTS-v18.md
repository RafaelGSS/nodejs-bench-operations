# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Sat Jul 02 2022 16:43:09 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.005ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.098ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.048ms 
    new Array(length): 0.021ms (faster)

 10,000 numbers:
           array.push: 0.396ms 
    new Array(length): 0.196ms (faster)

 1,000,000 numbers:
           array.push: 33.356ms 
    new Array(length): 17.805ms (faster)

 100,000,000 numbers:
           array.push: 1,890.147ms (faster)
    new Array(length): 4,328.726ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.082ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.048ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.544ms 
    new Array(length): 0.278ms (faster)

 1,000,000 strings:
           array.push: 316.117ms 
    new Array(length): 8.066ms (faster)

 100,000,000 strings:
           array.push: 2,524.191ms (faster)
    new Array(length): 5,084.354ms

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|433|86|
|Array.from|17|45|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|214,965|56|
|[True conditional] Using constructor name|167,496|94|
|[True conditional] Check if property is valid then instanceof |170,823|94|
|[False conditional] Using instanceof only|808,862,254|98|
|[False conditional] Using constructor name|808,898,646|96|
|[False conditional] Check if property is valid then instanceof |809,256,934|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,346|86|
|Intl.DateTimeFormat().format(new Date())|9,391|79|
|Reusing Intl.DateTimeFormat()|471,800|98|
|Format using date.get*|4,181,414|95|
|new Date() (Baseline)|8,407,643|95|
|Date.now() (Baseline)|17,447,080|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|731,394|99|
|Using brackets {}|787,097|97|
|Using '' + |783,117|93|
|Using date.toString()|829,601|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,720,967|95|
|Using undefined assignment|807,649,188|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|209,357|57|
|NodeError|164,022|94|
|NodeError Range|163,988|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,683,200|98|
|Function returning explicitly undefined|1,658,854|96|
|Function returning implicitly undefined|1,711,847|92|
|Function returning string|1,671,198|98|
|Function returning integer|1,692,989|95|
|Function returning float|1,692,640|100|
|Function returning functions|1,627,557|96|
|Function returning arrow functions|1,645,090|99|
|Function returning empty object|1,688,180|100|
|Function returning empty array|1,672,135|92|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|807,272,996|98|
|using Array.includes (first item)|807,935,138|98|
|Using raw comparisson|808,676,400|97|
|Using raw comparisson (first item)|806,757,935|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|657,463|77|
|Using ? operator to avoid rejection|704,043|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|255,698,274|92|
|Raw usage underscore usage|223,829,647|84|
|Manipulating private properties using #|162,009,754|88|
|Manipulating private properties using underscore(_)|130,077,396|94|
|Manipulating private properties using Symbol|132,168,390|91|
|Manipulating private properties using PrivateSymbol|33,898,705|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,676|96|
|Sort using first char|800,266|98|
|Sort using localeCompare|768,712|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,861 ops/sec ±1.26% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 480 ops/sec ±0.31% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,043 ops/sec ±0.84% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,040 ops/sec ±17.98% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,194,112|94|
|Using this|145,368,521|93|
