# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sun Jan 01 2023 15:29:02 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.043ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.075ms 
    new Array(length): 0.037ms (faster)

 10,000 numbers:
           array.push: 0.665ms 
    new Array(length): 0.269ms (faster)

 1,000,000 numbers:
           array.push: 49.252ms 
    new Array(length): 7.66ms (faster)

 100,000,000 numbers:
           array.push: 2,192.394ms (faster)
    new Array(length): 4,962.53ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.056ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.661ms 
    new Array(length): 0.312ms (faster)

 1,000,000 strings:
           array.push: 373.035ms 
    new Array(length): 8.87ms (faster)

 100,000,000 strings:
           array.push: 2,748.858ms (faster)
    new Array(length): 5,632.441ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|366|84|
|Array.from|16|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,524|57|
|[True conditional] Using constructor name|144,202|95|
|[True conditional] Check if property is valid then instanceof |144,631|91|
|[False conditional] Using instanceof only|709,155,285|97|
|[False conditional] Using constructor name|708,887,089|96|
|[False conditional] Check if property is valid then instanceof |710,183,607|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,892|82|
|Intl.DateTimeFormat().format(new Date())|8,489|78|
|Reusing Intl.DateTimeFormat()|408,963|79|
|Format using date.get*|3,752,907|87|
|new Date() (Baseline)|7,443,225|98|
|Date.now() (Baseline)|15,116,796|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|687,714|98|
|Using brackets {}|693,497|95|
|Using '' + |692,199|95|
|Using date.toString()|752,419|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,375,593|96|
|Using undefined assignment|708,412,296|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|182,488|61|
|NodeError|143,928|91|
|NodeError Range|145,843|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,399,051|95|
|Function returning explicitly undefined|1,391,666|98|
|Function returning implicitly undefined|1,413,689|92|
|Function returning string|1,401,181|95|
|Function returning integer|1,406,432|94|
|Function returning float|1,415,925|97|
|Function returning functions|1,372,068|95|
|Function returning arrow functions|1,369,868|91|
|Function returning empty object|1,408,000|96|
|Function returning empty array|1,402,384|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|708,157,927|98|
|using Array.includes (first item)|708,061,898|98|
|Using raw comparison|709,379,245|98|
|Using raw comparison (first item)|707,397,566|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,102,304|93|
|Using Object.getOwnPropertyNames()|49,273,984|85|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,786,164|97|
|Length = 10_000 - Array.at|16,786,600|94|
|Length = 1_000_000 - Array.at|16,746,890|91|
|Length = 100 - Array[length - 1]|706,566,565|96|
|Length = 10_000 - Array[length - 1]|706,817,462|96|
|Length = 1_000_000 - Array[length - 1]|705,968,026|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,425,629|95|
|Object.create({})|963,431|77|
|Cached Empty.prototype|706,577,445|96|
|Empty.prototype|1,030,382|79|
|Empty class|704,710|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|709,324,540|96|
|Using optional chain (obj.field?.field2) (undefined)|709,564,546|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,320,103|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|707,459,125|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,665,720|97|
|Using parseInt(x, 10) - big number (10 len)|14,130,416|98|
|Using + - small number (2 len)|710,606,688|97|
|Using + - big number (10 len)|706,786,367|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|583,194|78|
|Using ? operator to avoid rejection|612,389|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|232,342,335|89|
|Raw usage underscore usage|222,440,151|88|
|Manipulating private properties using #|145,764,028|80|
|Manipulating private properties using underscore(_)|106,748,512|88|
|Manipulating private properties using Symbol|104,749,225|89|
|Manipulating private properties using PrivateSymbol|29,425,225|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,009,421|97|
|Adding property in the object creation - small object|2,020,041|99|
|Adding property after the function creation - small class|146,689|85|
|Adding property in the function creation - small class|146,104|83|
|Adding property after the class creation - small class|120,439|82|
|Adding property in the class creation - small class|121,586|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,284,631|96|
|Using replaceAll()|2,073,802|91|
|Using replaceAll(//g)|2,022,199|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|176,654|94|
|Sort using first char|727,923|94|
|Sort using localeCompare|686,678|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,210|95|
|{...smallObject} - Total keys: 2|60,762,192|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,328|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,592|97|
|{ ...bigObject, ...anotherBigObject }|762|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,094,794|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,056,786|96|
|{ ...smallObject, ...anotherSmallObject }|11,003,250|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,448 ops/sec ±17.54% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 418 ops/sec ±0.30% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,596 ops/sec ±0.50% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 980 ops/sec ±16.46% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|709,718,232|97|
|Using backtick (`)|709,534,062|99|
|Using array.join|6,643,003|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,657,041|92|
|Using this|127,634,314|91|
