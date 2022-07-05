# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Tue Jul 05 2022 18:38:36 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.009ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.135ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.062ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.462ms 
    new Array(length): 0.255ms (faster)

 1,000,000 numbers:
           array.push: 38.708ms 
    new Array(length): 31.405ms (faster)

 100,000,000 numbers:
           array.push: 2,223.797ms (faster)
    new Array(length): 5,439.772ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.113ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.066ms 
    new Array(length): 0.03ms (faster)

 10,000 strings:
           array.push: 0.744ms 
    new Array(length): 0.348ms (faster)

 1,000,000 strings:
           array.push: 396.275ms 
    new Array(length): 10.027ms (faster)

 100,000,000 strings:
           array.push: 2,852.033ms (faster)
    new Array(length): 6,075.686ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|379|80|
|Array.from|13|37|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|149,373|53|
|[True conditional] Using constructor name|113,806|90|
|[True conditional] Check if property is valid then instanceof |116,429|88|
|[False conditional] Using instanceof only|645,655,983|90|
|[False conditional] Using constructor name|645,583,469|93|
|[False conditional] Check if property is valid then instanceof |643,907,038|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,317|82|
|Intl.DateTimeFormat().format(new Date())|6,132|85|
|Reusing Intl.DateTimeFormat()|390,789|84|
|Format using date.get*|2,658,029|93|
|new Date() (Baseline)|6,347,037|90|
|Date.now() (Baseline)|13,622,588|92|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|559,646|90|
|Using brackets {}|565,863|93|
|Using '' + |564,183|93|
|Using date.toString()|608,428|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,895,165|92|
|Using undefined assignment|645,351,939|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|143,046|57|
|NodeError|112,311|88|
|NodeError Range|111,789|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,218,131|92|
|Function returning explicitly undefined|1,162,275|90|
|Function returning implicitly undefined|1,209,218|90|
|Function returning string|1,193,472|92|
|Function returning integer|1,194,325|90|
|Function returning float|1,196,229|90|
|Function returning functions|1,175,557|88|
|Function returning arrow functions|1,161,727|89|
|Function returning empty object|1,212,760|92|
|Function returning empty array|1,195,761|89|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|648,585,568|94|
|using Array.includes (first item)|648,543,317|91|
|Using raw comparisson|647,055,003|94|
|Using raw comparisson (first item)|646,055,553|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,312,879|93|
|Length = 10_000 - Array.at|15,269,686|91|
|Length = 1_000_000 - Array.at|15,320,643|90|
|Length = 100 - Array[length - 1]|644,762,540|91|
|Length = 10_000 - Array[length - 1]|638,065,097|88|
|Length = 1_000_000 - Array[length - 1]|642,836,579|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|450,458|75|
|Using ? operator to avoid rejection|442,165|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,679,645|91|
|Raw usage underscore usage|123,516,465|87|
|Manipulating private properties using #|87,265,334|84|
|Manipulating private properties using underscore(_)|65,183,103|89|
|Manipulating private properties using Symbol|64,635,052|88|
|Manipulating private properties using PrivateSymbol|27,418,685|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|143,930|92|
|Sort using first char|616,770|91|
|Sort using localeCompare|589,735|89|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,225 ops/sec ±20.60% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 337 ops/sec ±1.11% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,390 ops/sec ±0.87% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 839 ops/sec ±17.97% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|134,227,226|91|
|Using this|136,222,938|87|
