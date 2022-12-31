# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sat Dec 31 2022 20:19:43 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.103ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.047ms 
    new Array(length): 0.023ms (faster)

 10,000 numbers:
           array.push: 0.43ms 
    new Array(length): 0.213ms (faster)

 1,000,000 numbers:
           array.push: 36.105ms 
    new Array(length): 7.884ms (faster)

 100,000,000 numbers:
           array.push: 1,467.183ms (faster)
    new Array(length): 4,150.048ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.561ms 
    new Array(length): 0.262ms (faster)

 1,000,000 strings:
           array.push: 300.263ms 
    new Array(length): 9.689ms (faster)

 100,000,000 strings:
           array.push: 2,052.599ms (faster)
    new Array(length): 4,506.679ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|429|85|
|Array.from|16|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|174,374|55|
|[True conditional] Using constructor name|135,645|95|
|[True conditional] Check if property is valid then instanceof |136,760|93|
|[False conditional] Using instanceof only|593,062,670|98|
|[False conditional] Using constructor name|592,631,651|96|
|[False conditional] Check if property is valid then instanceof |593,584,903|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,942|82|
|Intl.DateTimeFormat().format(new Date())|9,065|85|
|Reusing Intl.DateTimeFormat()|416,370|98|
|Format using date.get*|3,090,645|95|
|new Date() (Baseline)|7,966,128|96|
|Date.now() (Baseline)|14,314,843|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|651,146|94|
|Using brackets {}|657,462|90|
|Using '' + |693,255|95|
|Using date.toString()|752,342|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,499,581|94|
|Using undefined assignment|592,568,442|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|173,268|52|
|NodeError|132,431|94|
|NodeError Range|134,075|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,215,539|94|
|Function returning explicitly undefined|1,208,960|94|
|Function returning implicitly undefined|1,214,802|94|
|Function returning string|1,202,472|97|
|Function returning integer|1,208,750|97|
|Function returning float|1,186,357|94|
|Function returning functions|1,183,537|96|
|Function returning arrow functions|1,197,288|98|
|Function returning empty object|1,228,091|99|
|Function returning empty array|1,203,621|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|496,467,533|81|
|using Array.includes (first item)|592,028,868|98|
|Using raw comparison|593,559,759|97|
|Using raw comparison (first item)|593,076,375|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,911,802|94|
|Using Object.getOwnPropertyNames()|65,939,354|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,913,787|96|
|Length = 10_000 - Array.at|18,842,599|97|
|Length = 1_000_000 - Array.at|18,826,767|95|
|Length = 100 - Array[length - 1]|592,243,386|97|
|Length = 10_000 - Array[length - 1]|591,305,984|98|
|Length = 1_000_000 - Array[length - 1]|591,101,937|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,604,341|93|
|Object.create({})|1,528,320|81|
|Cached Empty.prototype|591,124,861|96|
|Empty.prototype|1,642,703|83|
|Empty class|932,483|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,990,830|95|
|Using optional chain (obj.field?.field2) (undefined)|593,328,072|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,908,522|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,738,779|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,187,440|93|
|Using parseInt(x, 10) - big number (10 len)|15,539,342|96|
|Using + - small number (2 len)|593,403,051|96|
|Using + - big number (10 len)|593,026,700|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|816,819|84|
|Using ? operator to avoid rejection|869,079|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,402,409|93|
|Raw usage underscore usage|7,697,103|96|
|Manipulating private properties using #|2,797,357|98|
|Manipulating private properties using underscore(_)|592,326,447|94|
|Manipulating private properties using Symbol|591,078,270|95|
|Manipulating private properties using PrivateSymbol|34,318,349|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,631,590|98|
|Adding property in the object creation - small object|2,619,573|97|
|Adding property after the function creation - small class|171,366|90|
|Adding property in the function creation - small class|173,584|92|
|Adding property after the class creation - small class|146,902|89|
|Adding property in the class creation - small class|146,563|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,473,067|92|
|Using replaceAll()|2,269,339|95|
|Using replaceAll(//g)|2,202,843|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|189,334|96|
|Sort using first char|845,865|97|
|Sort using localeCompare|445,898|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,461|93|
|{...smallObject} - Total keys: 2|68,436,992|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,642|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,660|98|
|{ ...bigObject, ...anotherBigObject }|871|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,636,704|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,138,647|98|
|{ ...smallObject, ...anotherSmallObject }|16,314,557|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,749 ops/sec ±14.46% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 365 ops/sec ±0.46% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,747 ops/sec ±0.37% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 859 ops/sec ±15.90% (58 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,109,594|98|
|Using backtick (`)|592,201,547|97|
|Using array.join|8,777,032|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,055,892|93|
|Using this|113,307,082|92|
