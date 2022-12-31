# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sat Dec 31 2022 20:19:40 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.065ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.548ms 
    new Array(length): 0.238ms (faster)

 1,000,000 numbers:
           array.push: 33.198ms 
    new Array(length): 10.593ms (faster)

 100,000,000 numbers:
           array.push: 1,983.798ms (faster)
    new Array(length): 4,677.423ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.101ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.075ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.642ms 
    new Array(length): 0.305ms (faster)

 1,000,000 strings:
           array.push: 336.529ms 
    new Array(length): 8.768ms (faster)

 100,000,000 strings:
           array.push: 2,658.545ms (faster)
    new Array(length): 5,341.841ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|375|83|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,069|57|
|[True conditional] Using constructor name|148,465|94|
|[True conditional] Check if property is valid then instanceof |149,699|92|
|[False conditional] Using instanceof only|711,373,658|95|
|[False conditional] Using constructor name|711,617,472|97|
|[False conditional] Check if property is valid then instanceof |711,050,144|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,006|86|
|Intl.DateTimeFormat().format(new Date())|8,467|77|
|Reusing Intl.DateTimeFormat()|420,610|83|
|Format using date.get*|3,107,836|98|
|new Date() (Baseline)|7,617,267|99|
|Date.now() (Baseline)|15,310,214|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|698,743|99|
|Using brackets {}|706,991|98|
|Using '' + |701,783|97|
|Using date.toString()|760,500|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,448,302|94|
|Using undefined assignment|708,608,212|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|183,742|58|
|NodeError|143,406|94|
|NodeError Range|145,483|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,421,585|97|
|Function returning explicitly undefined|1,413,733|93|
|Function returning implicitly undefined|1,449,347|92|
|Function returning string|1,404,685|95|
|Function returning integer|1,449,710|97|
|Function returning float|1,425,109|95|
|Function returning functions|1,398,705|94|
|Function returning arrow functions|1,405,286|98|
|Function returning empty object|1,413,991|97|
|Function returning empty array|1,370,929|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|708,828,045|99|
|using Array.includes (first item)|709,266,490|91|
|Using raw comparison|712,370,977|98|
|Using raw comparison (first item)|711,371,130|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,450,197|90|
|Using Object.getOwnPropertyNames()|53,970,933|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,757,282|95|
|Length = 10_000 - Array.at|16,742,318|92|
|Length = 1_000_000 - Array.at|16,761,494|92|
|Length = 100 - Array[length - 1]|709,624,643|98|
|Length = 10_000 - Array[length - 1]|708,502,180|96|
|Length = 1_000_000 - Array[length - 1]|708,639,759|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,009,606|92|
|Object.create({})|1,006,344|83|
|Cached Empty.prototype|709,438,943|96|
|Empty.prototype|1,112,999|85|
|Empty class|735,486|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,915,002|97|
|Using optional chain (obj.field?.field2) (undefined)|709,428,833|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,648,946|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|709,388,119|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,902,275|97|
|Using parseInt(x, 10) - big number (10 len)|14,711,701|98|
|Using + - small number (2 len)|711,583,132|95|
|Using + - big number (10 len)|710,963,891|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|595,979|77|
|Using ? operator to avoid rejection|643,248|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|247,593,836|96|
|Raw usage underscore usage|256,447,216|99|
|Manipulating private properties using #|172,052,585|93|
|Manipulating private properties using underscore(_)|156,686,400|93|
|Manipulating private properties using Symbol|156,390,273|95|
|Manipulating private properties using PrivateSymbol|30,042,441|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,021,383|97|
|Adding property in the object creation - small object|2,029,699|100|
|Adding property after the function creation - small class|146,123|86|
|Adding property in the function creation - small class|147,339|89|
|Adding property after the class creation - small class|122,261|81|
|Adding property in the class creation - small class|121,535|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,317,344|93|
|Using replaceAll()|2,102,922|97|
|Using replaceAll(//g)|2,052,016|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|178,069|91|
|Sort using first char|766,653|94|
|Sort using localeCompare|719,193|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,368|94|
|{...smallObject} - Total keys: 2|65,087,479|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,341|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,642|98|
|{ ...bigObject, ...anotherBigObject }|822|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,131,197|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,993,113|95|
|{ ...smallObject, ...anotherSmallObject }|11,124,860|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,636 ops/sec ±15.15% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 434 ops/sec ±0.23% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,527 ops/sec ±0.41% (97 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,035 ops/sec ±16.48% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|709,548,096|96|
|Using backtick (`)|709,446,759|91|
|Using array.join|6,733,533|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,992,579|92|
|Using this|131,455,012|94|
