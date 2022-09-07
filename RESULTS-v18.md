# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.8.0`
* __Run:__ Wed Sep 07 2022 15:30:38 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.008ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.159ms 
    new Array(length): 0.028ms (faster)

 1,000 numbers:
           array.push: 0.066ms 
    new Array(length): 0.028ms (faster)

 10,000 numbers:
           array.push: 0.463ms 
    new Array(length): 0.293ms (faster)

 1,000,000 numbers:
           array.push: 43.29ms 
    new Array(length): 23.346ms (faster)

 100,000,000 numbers:
           array.push: 2,520.628ms (faster)
    new Array(length): 5,964.637ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.124ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.06ms 
    new Array(length): 0.03ms (faster)

 10,000 strings:
           array.push: 1.609ms 
    new Array(length): 0.389ms (faster)

 1,000,000 strings:
           array.push: 258.356ms 
    new Array(length): 12.796ms (faster)

 100,000,000 strings:
           array.push: 2,949.928ms (faster)
    new Array(length): 6,578.473ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|279|76|
|Array.from|13|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|142,761|53|
|[True conditional] Using constructor name|112,030|88|
|[True conditional] Check if property is valid then instanceof |112,807|87|
|[False conditional] Using instanceof only|689,249,810|85|
|[False conditional] Using constructor name|703,475,009|88|
|[False conditional] Check if property is valid then instanceof |697,001,001|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,512|79|
|Intl.DateTimeFormat().format(new Date())|5,823|84|
|Reusing Intl.DateTimeFormat()|422,671|87|
|Format using date.get*|2,367,382|75|
|new Date() (Baseline)|5,785,285|83|
|Date.now() (Baseline)|13,192,883|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|534,095|86|
|Using brackets {}|537,673|92|
|Using '' + |537,049|90|
|Using date.toString()|592,289|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,839,514|88|
|Using undefined assignment|705,250,324|88|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|142,226|58|
|NodeError|110,089|86|
|NodeError Range|112,702|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,086,759|88|
|Function returning explicitly undefined|1,042,739|90|
|Function returning implicitly undefined|1,061,296|87|
|Function returning string|1,065,392|86|
|Function returning integer|1,060,574|89|
|Function returning float|1,074,581|83|
|Function returning functions|1,018,646|90|
|Function returning arrow functions|1,040,520|89|
|Function returning empty object|1,070,398|88|
|Function returning empty array|1,085,709|89|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,212,693|87|
|using Array.includes (first item)|696,435,765|88|
|Using raw comparison|695,166,796|88|
|Using raw comparison (first item)|693,447,176|91|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,795,308|87|
|Using Object.getOwnPropertyNames()|43,765,319|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,251,628|89|
|Length = 10_000 - Array.at|14,046,929|91|
|Length = 1_000_000 - Array.at|14,064,318|89|
|Length = 100 - Array[length - 1]|710,838,608|89|
|Length = 10_000 - Array[length - 1]|703,454,519|89|
|Length = 1_000_000 - Array[length - 1]|702,795,911|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|699,605,909|88|
|Using optional chain (obj.field?.field2) (undefined)|699,536,059|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|704,008,432|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|691,061,429|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|444,451|75|
|Using ? operator to avoid rejection|473,686|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|126,189,593|84|
|Raw usage underscore usage|125,276,656|85|
|Manipulating private properties using #|85,768,552|86|
|Manipulating private properties using underscore(_)|65,034,645|83|
|Manipulating private properties using Symbol|65,089,187|85|
|Manipulating private properties using PrivateSymbol|25,225,185|89|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,679,200|87|
|Using replaceAll()|1,666,768|88|
|Using replaceAll(//g)|1,561,249|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,100|86|
|Sort using first char|643,228|87|
|Sort using localeCompare|587,566|83|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,217 ops/sec ±19.33% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 334 ops/sec ±1.47% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,712 ops/sec ±1.08% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 725 ops/sec ±11.40% (66 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|729,300,842|88|
|Using backtick (`)|718,643,291|91|
|Using array.join|5,359,367|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,329,986|85|
|Using this|137,239,423|85|
