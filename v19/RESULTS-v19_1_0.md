# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.1.0`
* __Run:__ Sat Dec 31 2022 20:04:38 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.033ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.064ms 
    new Array(length): 0.038ms (faster)

 10,000 numbers:
           array.push: 0.523ms 
    new Array(length): 0.423ms (faster)

 1,000,000 numbers:
           array.push: 42.053ms 
    new Array(length): 9.978ms (faster)

 100,000,000 numbers:
           array.push: 1,911.051ms (faster)
    new Array(length): 5,210.36ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.046ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.374ms 
    new Array(length): 0.255ms (faster)

 1,000,000 strings:
           array.push: 33.846ms 
    new Array(length): 5.307ms (faster)

 100,000,000 strings:
           array.push: 2,476.763ms (faster)
    new Array(length): 5,491.306ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|386|88|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,348|54|
|[True conditional] Using constructor name|147,024|93|
|[True conditional] Check if property is valid then instanceof |150,144|99|
|[False conditional] Using instanceof only|715,683,891|92|
|[False conditional] Using constructor name|714,726,391|99|
|[False conditional] Check if property is valid then instanceof |714,243,252|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,030|87|
|Intl.DateTimeFormat().format(new Date())|8,564|77|
|Reusing Intl.DateTimeFormat()|405,120|80|
|Format using date.get*|3,418,504|94|
|new Date() (Baseline)|8,675,760|96|
|Date.now() (Baseline)|15,669,485|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|708,618|94|
|Using brackets {}|714,937|96|
|Using '' + |696,070|93|
|Using date.toString()|775,087|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,660,137|95|
|Using undefined assignment|714,194,086|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,456|58|
|NodeError|146,016|93|
|NodeError Range|147,328|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,354,030|92|
|Function returning explicitly undefined|1,348,508|96|
|Function returning implicitly undefined|1,343,740|93|
|Function returning string|1,358,390|98|
|Function returning integer|1,378,018|97|
|Function returning float|1,368,559|97|
|Function returning functions|1,342,724|96|
|Function returning arrow functions|1,348,638|96|
|Function returning empty object|1,353,541|96|
|Function returning empty array|1,367,162|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,529,044|97|
|using Array.includes (first item)|712,960,692|98|
|Using raw comparison|714,904,297|95|
|Using raw comparison (first item)|713,374,294|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,390,382|94|
|Using Object.getOwnPropertyNames()|49,898,418|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|573,360,580|97|
|Length = 10_000 - Array.at|574,219,215|98|
|Length = 1_000_000 - Array.at|574,828,935|97|
|Length = 100 - Array[length - 1]|711,464,574|97|
|Length = 10_000 - Array[length - 1]|711,958,183|96|
|Length = 1_000_000 - Array[length - 1]|712,152,097|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,426,359|93|
|Object.create({})|1,387,565|75|
|Cached Empty.prototype|714,805,676|96|
|Empty.prototype|1,375,758|74|
|Empty class|981,583|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,235,666|99|
|Using optional chain (obj.field?.field2) (undefined)|713,633,360|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|715,046,737|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,647,008|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|180,290,305|96|
|Using parseInt(x, 10) - big number (10 len)|14,659,961|95|
|Using + - small number (2 len)|715,803,355|93|
|Using + - big number (10 len)|714,494,113|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|846,295|78|
|Using ? operator to avoid rejection|896,569|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|713,314,406|94|
|Raw usage underscore usage|713,795,049|97|
|Manipulating private properties using #|704,041,119|94|
|Manipulating private properties using underscore(_)|702,036,077|97|
|Manipulating private properties using Symbol|703,718,286|97|
|Manipulating private properties using PrivateSymbol|32,523,260|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,109,171|96|
|Adding property in the object creation - small object|2,106,747|94|
|Adding property after the function creation - small class|173,230|85|
|Adding property in the function creation - small class|176,939|90|
|Adding property after the class creation - small class|146,780|83|
|Adding property in the class creation - small class|145,630|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,378,166|92|
|Using replaceAll()|2,215,956|100|
|Using replaceAll(//g)|2,077,906|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,766|99|
|Sort using first char|778,714|98|
|Sort using localeCompare|737,659|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,321|96|
|{...smallObject} - Total keys: 2|69,178,459|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,321|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,624|99|
|{ ...bigObject, ...anotherBigObject }|805|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,618,494|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,144,644|98|
|{ ...smallObject, ...anotherSmallObject }|12,628,900|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,702 ops/sec ±0.60% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 388 ops/sec ±4.85% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,109 ops/sec ±0.49% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 962 ops/sec ±18.10% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|707,167,607|98|
|Using backtick (`)|709,981,633|98|
|Using array.join|7,172,711|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,346,609|92|
|Using this|144,981,436|95|
