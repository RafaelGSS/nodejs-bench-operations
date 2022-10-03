# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Mon Oct 03 2022 12:56:31 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.008ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.046ms 
    new Array(length): 0.015ms (faster)

 1,000 numbers:
           array.push: 0.09ms 
    new Array(length): 0.037ms (faster)

 10,000 numbers:
           array.push: 0.674ms 
    new Array(length): 0.298ms (faster)

 1,000,000 numbers:
           array.push: 45.356ms 
    new Array(length): 9.384ms (faster)

 100,000,000 numbers:
           array.push: 2,086.416ms (faster)
    new Array(length): 5,548.422ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.116ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.061ms 
    new Array(length): 0.031ms (faster)

 10,000 strings:
           array.push: 0.732ms 
    new Array(length): 0.351ms (faster)

 1,000,000 strings:
           array.push: 409.17ms 
    new Array(length): 10.713ms (faster)

 100,000,000 strings:
           array.push: 2,908.836ms (faster)
    new Array(length): 6,164.026ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|332|80|
|Array.from|12|33|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|127,146|58|
|[True conditional] Using constructor name|101,299|90|
|[True conditional] Check if property is valid then instanceof |102,389|90|
|[False conditional] Using instanceof only|632,175,859|91|
|[False conditional] Using constructor name|615,616,774|88|
|[False conditional] Check if property is valid then instanceof |639,312,218|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,323|81|
|Intl.DateTimeFormat().format(new Date())|5,048|78|
|Reusing Intl.DateTimeFormat()|354,279|88|
|Format using date.get*|2,704,099|88|
|new Date() (Baseline)|5,816,042|89|
|Date.now() (Baseline)|12,055,945|87|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|520,165|85|
|Using brackets {}|526,163|93|
|Using '' + |541,105|86|
|Using date.toString()|573,070|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,901,855|90|
|Using undefined assignment|612,107,402|88|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|123,560|54|
|NodeError|100,518|89|
|NodeError Range|101,124|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,014,141|87|
|Function returning explicitly undefined|1,023,590|90|
|Function returning implicitly undefined|1,037,955|90|
|Function returning string|1,018,695|87|
|Function returning integer|1,032,102|89|
|Function returning float|1,031,729|90|
|Function returning functions|996,764|90|
|Function returning arrow functions|1,012,443|90|
|Function returning empty object|999,131|89|
|Function returning empty array|1,007,967|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|613,042,739|91|
|using Array.includes (first item)|620,675,376|88|
|Using raw comparison|618,774,174|90|
|Using raw comparison (first item)|626,831,932|89|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,183,194|89|
|Using Object.getOwnPropertyNames()|42,628,100|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,386,846|88|
|Length = 10_000 - Array.at|14,340,422|90|
|Length = 1_000_000 - Array.at|14,324,539|90|
|Length = 100 - Array[length - 1]|633,665,059|92|
|Length = 10_000 - Array[length - 1]|621,143,171|90|
|Length = 1_000_000 - Array[length - 1]|621,882,621|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,869,931|88|
|Object.create({})|1,064,512|79|
|Cached Empty.prototype|621,620,424|89|
|Empty.prototype|1,056,166|77|
|Empty class|728,831|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|623,384,574|89|
|Using optional chain (obj.field?.field2) (undefined)|626,222,806|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|631,671,613|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|627,588,766|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|564,648|75|
|Using ? operator to avoid rejection|621,030|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,407,066|89|
|Raw usage underscore usage|5,019,620|84|
|Manipulating private properties using #|1,836,114|83|
|Manipulating private properties using underscore(_)|556,099,004|88|
|Manipulating private properties using Symbol|576,503,138|89|
|Manipulating private properties using PrivateSymbol|22,898,703|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,839,124|90|
|Using replaceAll()|1,645,708|89|
|Using replaceAll(//g)|1,630,864|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,139|86|
|Sort using first char|631,358|89|
|Sort using localeCompare|317,664|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,212 ops/sec ±20.52% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 322 ops/sec ±1.37% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,249 ops/sec ±1.31% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 827 ops/sec ±16.53% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|627,953,818|90|
|Using backtick (`)|633,850,883|89|
|Using array.join|5,287,095|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,002,801|89|
|Using this|138,701,140|87|
