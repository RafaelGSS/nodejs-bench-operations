# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.16.0`
* __Run:__ Tue Aug 23 2022 14:30:29 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.146ms 
    new Array(length): 0.015ms (faster)

 1,000 numbers:
           array.push: 0.056ms 
    new Array(length): 0.029ms (faster)

 10,000 numbers:
           array.push: 0.476ms 
    new Array(length): 0.245ms (faster)

 1,000,000 numbers:
           array.push: 36.737ms 
    new Array(length): 24.772ms (faster)

 100,000,000 numbers:
           array.push: 2,122.89ms (faster)
    new Array(length): 4,852.967ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.089ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.614ms 
    new Array(length): 0.27ms (faster)

 1,000,000 strings:
           array.push: 347.711ms 
    new Array(length): 9.7ms (faster)

 100,000,000 strings:
           array.push: 2,662.82ms (faster)
    new Array(length): 5,734.935ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|78|
|Array.from|17|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|200,945|58|
|[True conditional] Using constructor name|156,996|94|
|[True conditional] Check if property is valid then instanceof |159,207|90|
|[False conditional] Using instanceof only|710,939,153|97|
|[False conditional] Using constructor name|711,734,468|98|
|[False conditional] Check if property is valid then instanceof |711,426,638|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,581|81|
|Intl.DateTimeFormat().format(new Date())|9,167|76|
|Reusing Intl.DateTimeFormat()|425,957|86|
|Format using date.get*|3,451,992|98|
|new Date() (Baseline)|7,308,073|95|
|Date.now() (Baseline)|14,261,517|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|762,447|92|
|Using brackets {}|780,418|93|
|Using '' + |775,810|98|
|Using date.toString()|837,006|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,423,967|98|
|Using undefined assignment|709,921,721|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|194,319|54|
|NodeError|151,654|94|
|NodeError Range|151,450|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,358,683|90|
|Function returning explicitly undefined|1,517,085|96|
|Function returning implicitly undefined|1,546,226|95|
|Function returning string|1,526,429|98|
|Function returning integer|1,522,253|97|
|Function returning float|1,549,246|96|
|Function returning functions|1,485,485|96|
|Function returning arrow functions|1,527,244|98|
|Function returning empty object|1,547,364|94|
|Function returning empty array|1,504,103|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,498,108|97|
|using Array.includes (first item)|710,245,520|92|
|Using raw comparison|710,714,942|97|
|Using raw comparison (first item)|709,565,465|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,216,011|97|
|Length = 10_000 - Array.at|18,228,606|92|
|Length = 1_000_000 - Array.at|18,178,256|95|
|Length = 100 - Array[length - 1]|806,046,101|97|
|Length = 10_000 - Array[length - 1]|804,544,472|94|
|Length = 1_000_000 - Array[length - 1]|805,057,037|96|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|809,988,317|98|
|Using optional chain (obj.field?.field2) (undefined)|809,724,982|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|809,056,509|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|807,303,651|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|788,910|76|
|Using ? operator to avoid rejection|878,517|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,819,484|95|
|Raw usage underscore usage|7,635,609|88|
|Manipulating private properties using #|2,918,050|95|
|Manipulating private properties using underscore(_)|745,321,185|89|
|Manipulating private properties using Symbol|791,200,803|95|
|Manipulating private properties using PrivateSymbol|29,391,972|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|6,142,702|95|
|Using replaceAll()|4,783,227|98|
|Using replaceAll(//g)|4,581,273|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,959|97|
|Sort using first char|816,855|95|
|Sort using localeCompare|445,026|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,636 ops/sec ±13.69% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 423 ops/sec ±3.99% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,753 ops/sec ±0.52% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,001 ops/sec ±17.16% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|127,249,586|89|
|Using this|123,026,698|94|
