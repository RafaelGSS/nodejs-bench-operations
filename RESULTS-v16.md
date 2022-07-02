# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Sat Jul 02 2022 03:05:30 GMT+0000 (Coordinated Universal Time)

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.03ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.06ms 
    new Array(length): 0.03ms (faster)

 10,000 numbers:
           array.push: 0.512ms 
    new Array(length): 0.216ms (faster)

 1,000,000 numbers:
           array.push: 33.824ms 
    new Array(length): 18.96ms (faster)

 100,000,000 numbers:
           array.push: 2,009.258ms (faster)
    new Array(length): 4,574.565ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.096ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.082ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.631ms 
    new Array(length): 0.272ms (faster)

 1,000,000 strings:
           array.push: 398.886ms 
    new Array(length): 8.973ms (faster)

 100,000,000 strings:
           array.push: 2,643.691ms (faster)
    new Array(length): 5,486.19ms

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|390|80|
|Array.from|13|35|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|173,023|47|
|[True conditional] Using constructor name|139,639|82|
|[True conditional] Check if property is valid then instanceof |137,359|84|
|[False conditional] Using instanceof only|982,032,748|93|
|[False conditional] Using constructor name|987,368,599|93|
|[False conditional] Check if property is valid then instanceof |963,319,837|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,000|78|
|Intl.DateTimeFormat().format(new Date())|5,804|68|
|Format using date.get*|3,436,034|82|
|new Date() (Baseline)|7,570,632|78|
|Date.now() (Baseline)|14,174,512|76|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|660,470|88|
|Using brackets {}|624,914|80|
|Using '' + |612,176|78|
|Using date.toString()|689,579|83|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,458,857|82|
|Using undefined assignment|844,284,483|85|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|187,844|55|
|NodeError|145,501|87|
|NodeError Range|149,142|87|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,196,600|81|
|Function returning explicitly undefined|1,175,393|86|
|Function returning implicitly undefined|1,261,652|83|
|Function returning string|1,146,912|84|
|Function returning integer|1,204,236|84|
|Function returning float|1,330,102|84|
|Function returning functions|1,276,000|89|
|Function returning arrow functions|1,265,219|86|
|Function returning empty object|1,227,857|84|
|Function returning empty array|1,265,286|89|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|922,887,909|92|
|using Array.includes (first item)|931,955,320|83|
|Using raw comparisson|899,721,596|86|
|Using raw comparisson (first item)|896,931,938|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|747,034|72|
|Using ? operator to avoid rejection|840,897|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,305,093|90|
|Raw usage underscore usage|6,879,422|86|
|Manipulating private properties using #|2,547,442|88|
|Manipulating private properties using underscore(_)|784,549,983|92|
|Manipulating private properties using Symbol|774,274,758|90|
|Manipulating private properties using PrivateSymbol|31,509,428|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|191,363|90|
|Sort using first char|859,411|92|
|Sort using localeCompare|424,852|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,720 ops/sec ±1.67% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 372 ops/sec ±2.27% (80 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,497 ops/sec ±1.34% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 750 ops/sec ±18.15% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|180,484,836|82|
|Using this|200,486,544|90|
