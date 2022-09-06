# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Tue Sep 06 2022 20:16:12 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.037ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.058ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.518ms 
    new Array(length): 0.218ms (faster)

 1,000,000 numbers:
           array.push: 38.125ms 
    new Array(length): 19.372ms (faster)

 100,000,000 numbers:
           array.push: 1,587.977ms (faster)
    new Array(length): 4,319.454ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.088ms 
    new Array(length): 0.009ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.518ms 
    new Array(length): 0.243ms (faster)

 1,000,000 strings:
           array.push: 347.816ms 
    new Array(length): 9.402ms (faster)

 100,000,000 strings:
           array.push: 2,095.667ms (faster)
    new Array(length): 4,693.493ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|411|84|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,625|53|
|[True conditional] Using constructor name|127,457|94|
|[True conditional] Check if property is valid then instanceof |128,212|90|
|[False conditional] Using instanceof only|594,366,176|98|
|[False conditional] Using constructor name|592,931,460|99|
|[False conditional] Check if property is valid then instanceof |594,497,463|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,936|83|
|Intl.DateTimeFormat().format(new Date())|9,103|79|
|Reusing Intl.DateTimeFormat()|414,704|90|
|Format using date.get*|3,829,113|97|
|new Date() (Baseline)|7,981,022|98|
|Date.now() (Baseline)|14,826,322|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|679,708|96|
|Using brackets {}|665,889|95|
|Using '' + |697,360|96|
|Using date.toString()|767,209|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,459,091|95|
|Using undefined assignment|592,617,219|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|169,087|53|
|NodeError|131,666|95|
|NodeError Range|132,986|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,202,027|97|
|Function returning explicitly undefined|1,195,125|96|
|Function returning implicitly undefined|1,220,923|95|
|Function returning string|1,201,517|96|
|Function returning integer|1,198,961|96|
|Function returning float|1,213,077|97|
|Function returning functions|1,175,341|98|
|Function returning arrow functions|1,192,011|95|
|Function returning empty object|1,179,348|98|
|Function returning empty array|1,213,832|99|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,391,482|98|
|using Array.includes (first item)|592,609,469|97|
|Using raw comparison|594,887,274|98|
|Using raw comparison (first item)|593,454,716|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,978,141|92|
|Length = 10_000 - Array.at|18,879,331|92|
|Length = 1_000_000 - Array.at|19,024,965|94|
|Length = 100 - Array[length - 1]|592,492,527|95|
|Length = 10_000 - Array[length - 1]|591,252,481|97|
|Length = 1_000_000 - Array[length - 1]|591,285,392|97|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,960,051|96|
|Using optional chain (obj.field?.field2) (undefined)|593,141,205|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,103,589|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,772,840|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|788,512|79|
|Using ? operator to avoid rejection|840,867|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,323,828|94|
|Raw usage underscore usage|7,639,689|97|
|Manipulating private properties using #|2,794,068|95|
|Manipulating private properties using underscore(_)|590,982,288|95|
|Manipulating private properties using Symbol|589,356,296|100|
|Manipulating private properties using PrivateSymbol|35,148,333|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,453,422|94|
|Using replaceAll()|2,172,853|93|
|Using replaceAll(//g)|2,218,320|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|189,094|98|
|Sort using first char|844,925|97|
|Sort using localeCompare|430,834|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,842 ops/sec ±0.51% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 369 ops/sec ±0.47% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,958 ops/sec ±0.39% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 935 ops/sec ±14.28% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|594,301,562|97|
|Using backtick (`)|593,820,157|97|
|Using array.join|8,536,973|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,490,628|93|
|Using this|112,913,486|92|
