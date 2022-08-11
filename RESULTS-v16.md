# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.16.0`
* __Run:__ Thu Aug 11 2022 12:58:38 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.105ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.467ms 
    new Array(length): 0.242ms (faster)

 1,000,000 numbers:
           array.push: 40.337ms 
    new Array(length): 8.124ms (faster)

 100,000,000 numbers:
           array.push: 1,898.217ms (faster)
    new Array(length): 4,798.853ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.095ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.052ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.574ms 
    new Array(length): 0.311ms (faster)

 1,000,000 strings:
           array.push: 327.599ms 
    new Array(length): 9.3ms (faster)

 100,000,000 strings:
           array.push: 2,644.29ms (faster)
    new Array(length): 5,327.162ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|375|83|
|Array.from|15|41|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|191,147|59|
|[True conditional] Using constructor name|151,083|92|
|[True conditional] Check if property is valid then instanceof |154,560|92|
|[False conditional] Using instanceof only|712,966,209|96|
|[False conditional] Using constructor name|711,817,465|94|
|[False conditional] Check if property is valid then instanceof |713,826,823|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,763|84|
|Intl.DateTimeFormat().format(new Date())|9,320|87|
|Reusing Intl.DateTimeFormat()|431,408|86|
|Format using date.get*|3,652,106|97|
|new Date() (Baseline)|7,459,125|97|
|Date.now() (Baseline)|14,333,542|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|641,833|97|
|Using brackets {}|641,886|93|
|Using '' + |653,160|97|
|Using date.toString()|716,240|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,503,279|93|
|Using undefined assignment|711,320,679|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|194,613|59|
|NodeError|155,810|93|
|NodeError Range|156,843|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,369,064|98|
|Function returning explicitly undefined|1,342,345|99|
|Function returning implicitly undefined|1,392,921|86|
|Function returning string|1,358,332|94|
|Function returning integer|1,369,135|96|
|Function returning float|1,383,708|98|
|Function returning functions|1,338,806|97|
|Function returning arrow functions|1,334,523|98|
|Function returning empty object|1,380,513|94|
|Function returning empty array|1,337,452|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,038,354|95|
|using Array.includes (first item)|710,561,786|95|
|Using raw comparisson|711,960,572|99|
|Using raw comparisson (first item)|710,804,980|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,733,706|96|
|Length = 10_000 - Array.at|16,065,035|95|
|Length = 1_000_000 - Array.at|15,951,419|92|
|Length = 100 - Array[length - 1]|711,047,310|95|
|Length = 10_000 - Array[length - 1]|710,401,744|99|
|Length = 1_000_000 - Array[length - 1]|710,597,324|96|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,793,038|98|
|Using optional chain (obj.field?.field2) (undefined)|712,573,467|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,394,748|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,081,064|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|778,902|78|
|Using ? operator to avoid rejection|838,859|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,767,460|97|
|Raw usage underscore usage|7,036,495|94|
|Manipulating private properties using #|2,604,629|98|
|Manipulating private properties using underscore(_)|704,099,424|93|
|Manipulating private properties using Symbol|701,439,567|96|
|Manipulating private properties using PrivateSymbol|27,009,127|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|175,614|99|
|Sort using first char|772,909|97|
|Sort using localeCompare|415,468|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,781 ops/sec ±0.81% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 403 ops/sec ±4.19% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,788 ops/sec ±0.54% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 729 ops/sec ±16.18% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|134,838,641|95|
|Using this|134,880,370|91|
