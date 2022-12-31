# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sat Dec 31 2022 19:42:23 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.072ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.101ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.06ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.464ms 
    new Array(length): 0.229ms (faster)

 1,000,000 numbers:
           array.push: 32.699ms 
    new Array(length): 23.192ms (faster)

 100,000,000 numbers:
           array.push: 1,953.997ms (faster)
    new Array(length): 4,787.076ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.071ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.622ms 
    new Array(length): 0.301ms (faster)

 1,000,000 strings:
           array.push: 328.531ms 
    new Array(length): 9.312ms (faster)

 100,000,000 strings:
           array.push: 2,676.191ms (faster)
    new Array(length): 5,335.914ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|369|88|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|199,061|59|
|[True conditional] Using constructor name|155,134|92|
|[True conditional] Check if property is valid then instanceof |158,380|91|
|[False conditional] Using instanceof only|712,717,693|98|
|[False conditional] Using constructor name|712,391,423|97|
|[False conditional] Check if property is valid then instanceof |713,645,895|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,329|80|
|Intl.DateTimeFormat().format(new Date())|8,319|82|
|Reusing Intl.DateTimeFormat()|425,272|88|
|Format using date.get*|3,054,884|96|
|new Date() (Baseline)|7,399,876|99|
|Date.now() (Baseline)|14,302,475|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|665,095|96|
|Using brackets {}|660,009|95|
|Using '' + |666,116|93|
|Using date.toString()|720,419|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,471,052|95|
|Using undefined assignment|712,181,228|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,287|54|
|NodeError|154,193|94|
|NodeError Range|155,343|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,316,784|96|
|Function returning explicitly undefined|1,317,970|94|
|Function returning implicitly undefined|1,354,588|92|
|Function returning string|1,336,993|95|
|Function returning integer|1,344,533|92|
|Function returning float|1,349,175|99|
|Function returning functions|1,269,164|92|
|Function returning arrow functions|1,332,161|96|
|Function returning empty object|1,356,963|96|
|Function returning empty array|1,358,712|99|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,286,372|99|
|using Array.includes (first item)|712,169,374|95|
|Using raw comparison|713,730,252|96|
|Using raw comparison (first item)|712,310,345|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,337,129|92|
|Using Object.getOwnPropertyNames()|54,697,007|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,030,856|94|
|Length = 10_000 - Array.at|16,007,016|94|
|Length = 1_000_000 - Array.at|15,918,779|95|
|Length = 100 - Array[length - 1]|711,180,998|94|
|Length = 10_000 - Array[length - 1]|711,238,503|98|
|Length = 1_000_000 - Array[length - 1]|709,166,388|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,417,353|91|
|Object.create({})|1,345,292|79|
|Cached Empty.prototype|711,587,405|93|
|Empty.prototype|1,445,350|78|
|Empty class|906,588|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,820,182|95|
|Using optional chain (obj.field?.field2) (undefined)|710,490,522|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,629,177|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,480,493|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,068,666|95|
|Using parseInt(x, 10) - big number (10 len)|12,498,514|94|
|Using + - small number (2 len)|713,261,128|98|
|Using + - big number (10 len)|713,066,810|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|769,532|75|
|Using ? operator to avoid rejection|846,597|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,627,979|94|
|Raw usage underscore usage|6,972,986|95|
|Manipulating private properties using #|2,572,742|93|
|Manipulating private properties using underscore(_)|704,834,424|95|
|Manipulating private properties using Symbol|703,292,605|97|
|Manipulating private properties using PrivateSymbol|27,514,855|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,982,608|99|
|Adding property in the object creation - small object|1,989,152|97|
|Adding property after the function creation - small class|172,941|84|
|Adding property in the function creation - small class|175,742|90|
|Adding property after the class creation - small class|143,595|82|
|Adding property in the class creation - small class|144,729|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,143,137|96|
|Using replaceAll()|2,031,045|99|
|Using replaceAll(//g)|1,920,483|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,565|94|
|Sort using first char|786,503|98|
|Sort using localeCompare|440,125|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,360|95|
|{...smallObject} - Total keys: 2|60,646,597|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,596|97|
|{ ...bigObject, ...anotherBigObject }|822|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,048,150|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,833,952|91|
|{ ...smallObject, ...anotherSmallObject }|13,813,696|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,630 ops/sec ±15.32% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 416 ops/sec ±0.45% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,880 ops/sec ±0.42% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 798 ops/sec ±17.69% (46 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,484,925|93|
|Using backtick (`)|713,090,781|99|
|Using array.join|6,934,070|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,789,806|88|
|Using this|136,343,236|97|
