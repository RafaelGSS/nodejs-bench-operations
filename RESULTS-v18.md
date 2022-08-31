# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.8.0`
* __Run:__ Wed Aug 31 2022 11:58:16 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.008ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.137ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.06ms (faster)
    new Array(length): 0.079ms

 10,000 numbers:
           array.push: 0.791ms 
    new Array(length): 0.368ms (faster)

 1,000,000 numbers:
           array.push: 56.6ms 
    new Array(length): 9.95ms (faster)

 100,000,000 numbers:
           array.push: 2,500.585ms (faster)
    new Array(length): 6,029.227ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.118ms 
    new Array(length): 0.014ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 1.3ms 
    new Array(length): 0.377ms (faster)

 1,000,000 strings:
           array.push: 440.679ms 
    new Array(length): 10.99ms (faster)

 100,000,000 strings:
           array.push: 3,304.438ms (faster)
    new Array(length): 7,161.108ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|277|74|
|Array.from|11|33|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|146,570|55|
|[True conditional] Using constructor name|112,271|83|
|[True conditional] Check if property is valid then instanceof |111,947|81|
|[False conditional] Using instanceof only|708,355,061|86|
|[False conditional] Using constructor name|716,642,561|89|
|[False conditional] Check if property is valid then instanceof |714,210,389|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,987|79|
|Intl.DateTimeFormat().format(new Date())|5,919|80|
|Reusing Intl.DateTimeFormat()|409,453|83|
|Format using date.get*|2,159,512|74|
|new Date() (Baseline)|5,583,776|86|
|Date.now() (Baseline)|13,395,790|84|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|546,826|86|
|Using brackets {}|514,480|84|
|Using '' + |517,880|88|
|Using date.toString()|561,386|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,746,778|83|
|Using undefined assignment|673,976,596|80|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|140,172|56|
|NodeError|107,434|82|
|NodeError Range|109,364|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,051,267|87|
|Function returning explicitly undefined|952,635|78|
|Function returning implicitly undefined|978,511|84|
|Function returning string|973,586|83|
|Function returning integer|980,853|82|
|Function returning float|990,601|86|
|Function returning functions|954,387|84|
|Function returning arrow functions|962,433|85|
|Function returning empty object|952,491|84|
|Function returning empty array|994,999|81|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|663,602,496|82|
|using Array.includes (first item)|659,430,063|87|
|Using raw comparison|659,668,826|84|
|Using raw comparison (first item)|685,725,119|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,488,236|85|
|Length = 10_000 - Array.at|13,318,702|86|
|Length = 1_000_000 - Array.at|13,187,998|86|
|Length = 100 - Array[length - 1]|666,946,377|84|
|Length = 10_000 - Array[length - 1]|664,367,779|85|
|Length = 1_000_000 - Array[length - 1]|686,670,550|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|665,309,262|84|
|Using optional chain (obj.field?.field2) (undefined)|657,899,131|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|671,661,936|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|680,267,486|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|418,992|72|
|Using ? operator to avoid rejection|452,001|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|117,072,118|84|
|Raw usage underscore usage|110,351,615|79|
|Manipulating private properties using #|74,735,770|81|
|Manipulating private properties using underscore(_)|59,229,616|71|
|Manipulating private properties using Symbol|55,927,414|80|
|Manipulating private properties using PrivateSymbol|23,547,928|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,699,629|87|
|Using replaceAll()|2,933,951|84|
|Using replaceAll(//g)|2,868,548|87|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|128,693|83|
|Sort using first char|541,648|85|
|Sort using localeCompare|507,437|85|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,036 ops/sec ±18.87% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 302 ops/sec ±1.33% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,504 ops/sec ±1.59% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 665 ops/sec ±12.02% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|676,804,507|86|
|Using backtick (`)|671,000,002|85|
|Using array.join|4,662,825|82|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|120,072,512|83|
|Using this|119,970,582|81|
