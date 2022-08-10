# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.16.0`
* __Run:__ Wed Aug 10 2022 13:08:03 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.153ms 
    new Array(length): 0.018ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.029ms (faster)

 10,000 numbers:
           array.push: 0.5ms 
    new Array(length): 0.268ms (faster)

 1,000,000 numbers:
           array.push: 40.857ms 
    new Array(length): 11.407ms (faster)

 100,000,000 numbers:
           array.push: 2,087.214ms (faster)
    new Array(length): 5,535.542ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.116ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.062ms 
    new Array(length): 0.029ms (faster)

 10,000 strings:
           array.push: 0.62ms 
    new Array(length): 0.337ms (faster)

 1,000,000 strings:
           array.push: 356.097ms 
    new Array(length): 13.434ms (faster)

 100,000,000 strings:
           array.push: 3,009.976ms (faster)
    new Array(length): 6,207.106ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|327|76|
|Array.from|12|35|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,902|53|
|[True conditional] Using constructor name|116,490|84|
|[True conditional] Check if property is valid then instanceof |119,737|88|
|[False conditional] Using instanceof only|647,622,857|90|
|[False conditional] Using constructor name|641,004,229|88|
|[False conditional] Check if property is valid then instanceof |647,950,756|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,191|84|
|Intl.DateTimeFormat().format(new Date())|5,408|78|
|Reusing Intl.DateTimeFormat()|371,416|89|
|Format using date.get*|2,803,757|90|
|new Date() (Baseline)|5,897,417|88|
|Date.now() (Baseline)|12,588,964|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|549,333|84|
|Using brackets {}|555,471|88|
|Using '' + |564,972|89|
|Using date.toString()|608,418|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,974,345|89|
|Using undefined assignment|643,521,500|88|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|148,676|54|
|NodeError|117,949|87|
|NodeError Range|118,282|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|975,430|91|
|Function returning explicitly undefined|959,094|89|
|Function returning implicitly undefined|1,002,475|91|
|Function returning string|954,365|85|
|Function returning integer|980,743|90|
|Function returning float|982,395|89|
|Function returning functions|961,763|87|
|Function returning arrow functions|952,823|87|
|Function returning empty object|970,212|91|
|Function returning empty array|952,513|89|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|650,815,240|89|
|using Array.includes (first item)|642,879,057|90|
|Using raw comparisson|642,060,975|90|
|Using raw comparisson (first item)|643,963,746|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,406,593|91|
|Length = 10_000 - Array.at|14,497,626|93|
|Length = 1_000_000 - Array.at|14,523,201|91|
|Length = 100 - Array[length - 1]|639,762,744|89|
|Length = 10_000 - Array[length - 1]|644,224,650|91|
|Length = 1_000_000 - Array[length - 1]|640,475,440|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|586,491,631|83|
|Using optional chain (obj.field?.field2) (undefined)|611,010,245|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|638,614,136|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|639,770,269|89|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|577,415|71|
|Using ? operator to avoid rejection|653,954|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,805,443|86|
|Raw usage underscore usage|5,608,619|89|
|Manipulating private properties using #|2,080,679|90|
|Manipulating private properties using underscore(_)|605,440,083|89|
|Manipulating private properties using Symbol|608,334,379|92|
|Manipulating private properties using PrivateSymbol|24,329,571|85|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|143,202|86|
|Sort using first char|615,853|88|
|Sort using localeCompare|339,142|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,152 ops/sec ±17.42% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 313 ops/sec ±1.11% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,014 ops/sec ±0.79% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 682 ops/sec ±14.64% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|139,945,527|83|
|Using this|134,172,646|84|
