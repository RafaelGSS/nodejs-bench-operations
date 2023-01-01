# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.1.0`
* __Run:__ Sun Jan 01 2023 15:29:12 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.035ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.038ms (faster)

 10,000 numbers:
           array.push: 0.477ms 
    new Array(length): 0.397ms (faster)

 1,000,000 numbers:
           array.push: 38.867ms 
    new Array(length): 8.689ms (faster)

 100,000,000 numbers:
           array.push: 1,521.389ms (faster)
    new Array(length): 5,196.006ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.105ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.037ms 
    new Array(length): 0.018ms (faster)

 10,000 strings:
           array.push: 0.333ms 
    new Array(length): 0.21ms (faster)

 1,000,000 strings:
           array.push: 30.619ms 
    new Array(length): 4.184ms (faster)

 100,000,000 strings:
           array.push: 2,106.059ms (faster)
    new Array(length): 4,976.477ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|427|82|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|168,451|49|
|[True conditional] Using constructor name|128,611|95|
|[True conditional] Check if property is valid then instanceof |128,705|92|
|[False conditional] Using instanceof only|600,280,312|97|
|[False conditional] Using constructor name|600,222,365|97|
|[False conditional] Check if property is valid then instanceof |597,929,801|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,888|93|
|Intl.DateTimeFormat().format(new Date())|8,994|80|
|Reusing Intl.DateTimeFormat()|458,842|83|
|Format using date.get*|4,210,977|96|
|new Date() (Baseline)|8,671,257|97|
|Date.now() (Baseline)|15,957,612|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|741,249|97|
|Using brackets {}|751,540|98|
|Using '' + |719,337|99|
|Using date.toString()|803,007|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,802,162|98|
|Using undefined assignment|598,498,432|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|159,955|53|
|NodeError|122,803|95|
|NodeError Range|123,415|98|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,216,697|94|
|Function returning explicitly undefined|1,202,847|91|
|Function returning implicitly undefined|1,232,951|93|
|Function returning string|1,207,087|93|
|Function returning integer|1,220,412|90|
|Function returning float|1,225,933|94|
|Function returning functions|1,187,025|95|
|Function returning arrow functions|1,200,199|94|
|Function returning empty object|1,231,984|91|
|Function returning empty array|1,212,736|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,683,153|98|
|using Array.includes (first item)|598,514,593|97|
|Using raw comparison|599,432,945|95|
|Using raw comparison (first item)|599,494,045|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,089,598|97|
|Using Object.getOwnPropertyNames()|60,806,433|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,965,962|99|
|Length = 10_000 - Array.at|599,854,879|98|
|Length = 1_000_000 - Array.at|599,411,068|96|
|Length = 100 - Array[length - 1]|598,223,919|99|
|Length = 10_000 - Array[length - 1]|597,307,192|98|
|Length = 1_000_000 - Array[length - 1]|596,111,568|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,806,195|94|
|Object.create({})|1,609,427|81|
|Cached Empty.prototype|598,862,144|98|
|Empty.prototype|1,578,073|80|
|Empty class|1,004,037|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|598,103,399|97|
|Using optional chain (obj.field?.field2) (undefined)|599,451,265|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|599,938,334|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,178,553|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,154,446|91|
|Using parseInt(x, 10) - big number (10 len)|14,959,254|99|
|Using + - small number (2 len)|598,733,754|97|
|Using + - big number (10 len)|599,038,199|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|889,641|80|
|Using ? operator to avoid rejection|935,100|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|598,933,202|98|
|Raw usage underscore usage|600,327,209|93|
|Manipulating private properties using #|593,280,961|97|
|Manipulating private properties using underscore(_)|594,592,607|96|
|Manipulating private properties using Symbol|593,559,958|97|
|Manipulating private properties using PrivateSymbol|39,203,739|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,881,319|98|
|Adding property in the object creation - small object|1,881,484|100|
|Adding property after the function creation - small class|165,610|91|
|Adding property in the function creation - small class|167,025|93|
|Adding property after the class creation - small class|141,673|87|
|Adding property in the class creation - small class|141,899|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,605,150|95|
|Using replaceAll()|2,312,183|94|
|Using replaceAll(//g)|2,320,312|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,858|96|
|Sort using first char|849,439|97|
|Sort using localeCompare|805,145|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,370|97|
|{...smallObject} - Total keys: 2|68,312,112|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,580|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,587|97|
|{ ...bigObject, ...anotherBigObject }|830|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,598,109|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,121,426|96|
|{ ...smallObject, ...anotherSmallObject }|17,504,609|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,622 ops/sec ±16.98% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 338 ops/sec ±3.65% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,277 ops/sec ±0.54% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 925 ops/sec ±36.47% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,492,216|94|
|Using backtick (`)|594,692,220|95|
|Using array.join|9,125,718|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,825,021|92|
|Using this|120,636,663|92|
