# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sat Oct 29 2022 18:14:28 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.059ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.49ms 
    new Array(length): 0.2ms (faster)

 1,000,000 numbers:
           array.push: 31.109ms 
    new Array(length): 17.189ms (faster)

 100,000,000 numbers:
           array.push: 1,551.929ms (faster)
    new Array(length): 4,117.776ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.62ms 
    new Array(length): 0.258ms (faster)

 1,000,000 strings:
           array.push: 180.154ms 
    new Array(length): 10.248ms (faster)

 100,000,000 strings:
           array.push: 1,939.511ms (faster)
    new Array(length): 4,582.074ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|434|87|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,133|54|
|[True conditional] Using constructor name|128,909|94|
|[True conditional] Check if property is valid then instanceof |130,133|94|
|[False conditional] Using instanceof only|590,993,085|96|
|[False conditional] Using constructor name|590,863,564|94|
|[False conditional] Check if property is valid then instanceof |591,376,230|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,474|89|
|Intl.DateTimeFormat().format(new Date())|9,038|80|
|Reusing Intl.DateTimeFormat()|384,299|84|
|Format using date.get*|3,240,540|98|
|new Date() (Baseline)|8,222,210|99|
|Date.now() (Baseline)|16,086,614|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|699,814|97|
|Using brackets {}|705,635|97|
|Using '' + |693,963|99|
|Using date.toString()|765,478|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,455,895|95|
|Using undefined assignment|590,297,906|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|166,312|54|
|NodeError|128,061|93|
|NodeError Range|128,310|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,284,302|95|
|Function returning explicitly undefined|1,263,517|97|
|Function returning implicitly undefined|1,293,849|94|
|Function returning string|1,266,183|88|
|Function returning integer|1,208,180|93|
|Function returning float|1,285,655|94|
|Function returning functions|1,239,908|94|
|Function returning arrow functions|1,264,490|99|
|Function returning empty object|1,273,698|94|
|Function returning empty array|1,285,400|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,534,538|97|
|using Array.includes (first item)|590,511,232|95|
|Using raw comparison|591,991,156|96|
|Using raw comparison (first item)|590,337,567|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,735,971|97|
|Using Object.getOwnPropertyNames()|65,696,185|100|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,397,241|97|
|Length = 10_000 - Array.at|19,384,761|98|
|Length = 1_000_000 - Array.at|19,362,827|97|
|Length = 100 - Array[length - 1]|589,986,917|95|
|Length = 10_000 - Array[length - 1]|590,030,963|96|
|Length = 1_000_000 - Array[length - 1]|589,916,487|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,313,762|96|
|Object.create({})|1,038,317|83|
|Cached Empty.prototype|590,549,538|97|
|Empty.prototype|1,156,448|84|
|Empty class|672,219|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|591,264,851|97|
|Using optional chain (obj.field?.field2) (undefined)|591,047,871|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,117,144|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|589,814,322|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,231,338|93|
|Using parseInt(x, 10) - big number (10 len)|15,188,191|98|
|Using + - small number (2 len)|592,071,017|97|
|Using + - big number (10 len)|591,603,605|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|549,666|80|
|Using ? operator to avoid rejection|576,772|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|255,968,986|92|
|Raw usage underscore usage|265,001,920|98|
|Manipulating private properties using #|195,197,412|98|
|Manipulating private properties using underscore(_)|190,404,304|92|
|Manipulating private properties using Symbol|190,704,842|97|
|Manipulating private properties using PrivateSymbol|36,878,657|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,448,488|95|
|Using replaceAll()|2,107,059|98|
|Using replaceAll(//g)|2,177,158|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,277|97|
|Sort using first char|884,381|97|
|Sort using localeCompare|811,361|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,512|97|
|{...smallObject} - Total keys: 2|79,577,113|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,581|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,415|97|
|{ ...bigObject, ...anotherBigObject }|865|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,278,340|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,712,848|97|
|{ ...smallObject, ...anotherSmallObject }|16,860,728|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,886 ops/sec ±0.64% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 382 ops/sec ±0.49% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,774 ops/sec ±0.39% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 937 ops/sec ±14.15% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,343,375|97|
|Using backtick (`)|591,300,525|95|
|Using array.join|8,652,927|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,148,373|94|
|Using this|113,703,934|93|
