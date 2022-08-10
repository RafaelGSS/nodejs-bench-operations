# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.7.0`
* __Run:__ Wed Aug 10 2022 13:08:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.123ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.052ms 
    new Array(length): 0.026ms (faster)

 10,000 numbers:
           array.push: 0.438ms 
    new Array(length): 0.224ms (faster)

 1,000,000 numbers:
           array.push: 31.936ms 
    new Array(length): 20.316ms (faster)

 100,000,000 numbers:
           array.push: 1,932.599ms (faster)
    new Array(length): 4,570.536ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.116ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.05ms 
    new Array(length): 0.028ms (faster)

 10,000 strings:
           array.push: 0.621ms 
    new Array(length): 0.304ms (faster)

 1,000,000 strings:
           array.push: 332.644ms 
    new Array(length): 8.77ms (faster)

 100,000,000 strings:
           array.push: 2,702.063ms (faster)
    new Array(length): 5,387.889ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|374|82|
|Array.from|15|42|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,828|55|
|[True conditional] Using constructor name|145,671|95|
|[True conditional] Check if property is valid then instanceof |146,705|93|
|[False conditional] Using instanceof only|711,739,319|96|
|[False conditional] Using constructor name|712,007,335|98|
|[False conditional] Check if property is valid then instanceof |712,230,825|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,158|92|
|Intl.DateTimeFormat().format(new Date())|8,434|79|
|Reusing Intl.DateTimeFormat()|492,385|82|
|Format using date.get*|3,698,084|94|
|new Date() (Baseline)|7,576,587|98|
|Date.now() (Baseline)|15,396,985|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|642,308|96|
|Using brackets {}|659,525|94|
|Using '' + |653,787|95|
|Using date.toString()|704,948|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,353,516|97|
|Using undefined assignment|709,410,201|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|176,562|59|
|NodeError|139,801|93|
|NodeError Range|140,892|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,404,952|98|
|Function returning explicitly undefined|1,397,177|99|
|Function returning implicitly undefined|1,413,698|98|
|Function returning string|1,399,117|99|
|Function returning integer|1,418,485|97|
|Function returning float|1,409,648|96|
|Function returning functions|1,327,948|99|
|Function returning arrow functions|1,352,734|98|
|Function returning empty object|1,420,381|98|
|Function returning empty array|1,413,344|98|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,997,895|98|
|using Array.includes (first item)|708,558,521|94|
|Using raw comparisson|710,347,961|96|
|Using raw comparisson (first item)|709,179,827|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,722,758|94|
|Length = 10_000 - Array.at|16,716,222|97|
|Length = 1_000_000 - Array.at|16,605,197|95|
|Length = 100 - Array[length - 1]|708,158,208|97|
|Length = 10_000 - Array[length - 1]|706,678,803|96|
|Length = 1_000_000 - Array[length - 1]|706,396,290|98|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,012,438|96|
|Using optional chain (obj.field?.field2) (undefined)|710,281,935|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|695,843,122|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,275,370|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|593,395|77|
|Using ? operator to avoid rejection|629,658|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|233,071,777|85|
|Raw usage underscore usage|221,471,732|89|
|Manipulating private properties using #|147,787,117|87|
|Manipulating private properties using underscore(_)|128,782,924|89|
|Manipulating private properties using Symbol|128,694,958|83|
|Manipulating private properties using PrivateSymbol|29,768,824|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,944|96|
|Sort using first char|718,264|95|
|Sort using localeCompare|685,325|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,776 ops/sec ±0.63% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 421 ops/sec ±0.62% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,975 ops/sec ±0.53% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,019 ops/sec ±17.22% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|127,720,705|92|
|Using this|127,447,225|95|
