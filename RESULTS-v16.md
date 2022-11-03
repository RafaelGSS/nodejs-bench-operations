# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Thu Nov 03 2022 16:12:53 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.163ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.028ms (faster)

 10,000 numbers:
           array.push: 0.534ms 
    new Array(length): 0.268ms (faster)

 1,000,000 numbers:
           array.push: 33.688ms 
    new Array(length): 19.341ms (faster)

 100,000,000 numbers:
           array.push: 2,041.456ms (faster)
    new Array(length): 4,985.015ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.056ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.636ms 
    new Array(length): 0.291ms (faster)

 1,000,000 strings:
           array.push: 362.107ms 
    new Array(length): 9.586ms (faster)

 100,000,000 strings:
           array.push: 2,819.421ms (faster)
    new Array(length): 5,557.682ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|370|84|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|195,789|59|
|[True conditional] Using constructor name|154,582|95|
|[True conditional] Check if property is valid then instanceof |156,293|92|
|[False conditional] Using instanceof only|712,320,823|98|
|[False conditional] Using constructor name|712,297,878|98|
|[False conditional] Check if property is valid then instanceof |714,087,154|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,620|85|
|Intl.DateTimeFormat().format(new Date())|8,073|79|
|Reusing Intl.DateTimeFormat()|412,131|88|
|Format using date.get*|3,589,675|94|
|new Date() (Baseline)|7,337,133|95|
|Date.now() (Baseline)|14,416,632|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,185|95|
|Using brackets {}|678,421|97|
|Using '' + |671,800|99|
|Using date.toString()|729,693|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,460,238|96|
|Using undefined assignment|711,783,849|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|194,164|55|
|NodeError|153,730|94|
|NodeError Range|154,694|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,299,171|97|
|Function returning explicitly undefined|1,295,004|89|
|Function returning implicitly undefined|1,304,923|97|
|Function returning string|1,303,621|93|
|Function returning integer|1,290,331|95|
|Function returning float|1,250,343|97|
|Function returning functions|1,216,312|94|
|Function returning arrow functions|1,280,233|98|
|Function returning empty object|1,306,240|95|
|Function returning empty array|1,305,136|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,282,781|98|
|using Array.includes (first item)|710,676,776|93|
|Using raw comparison|711,816,968|95|
|Using raw comparison (first item)|710,735,985|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,378,655|93|
|Using Object.getOwnPropertyNames()|52,456,731|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,994,450|95|
|Length = 10_000 - Array.at|15,947,266|96|
|Length = 1_000_000 - Array.at|15,879,773|96|
|Length = 100 - Array[length - 1]|709,641,249|98|
|Length = 10_000 - Array[length - 1]|709,991,602|96|
|Length = 1_000_000 - Array[length - 1]|708,277,631|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,264,292|93|
|Object.create({})|1,319,158|81|
|Cached Empty.prototype|711,083,153|96|
|Empty.prototype|1,263,508|74|
|Empty class|880,449|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,290,020|95|
|Using optional chain (obj.field?.field2) (undefined)|712,279,596|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|710,709,431|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,010,867|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|180,313,377|94|
|Using parseInt(x, 10) - big number (10 len)|12,488,786|93|
|Using + - small number (2 len)|712,984,175|97|
|Using + - big number (10 len)|711,512,614|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|768,705|73|
|Using ? operator to avoid rejection|820,640|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,574,769|93|
|Raw usage underscore usage|7,011,010|97|
|Manipulating private properties using #|2,554,464|93|
|Manipulating private properties using underscore(_)|702,243,273|98|
|Manipulating private properties using Symbol|701,208,618|98|
|Manipulating private properties using PrivateSymbol|27,039,056|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,077,559|92|
|Using replaceAll()|1,997,442|93|
|Using replaceAll(//g)|1,873,923|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|178,872|94|
|Sort using first char|751,017|92|
|Sort using localeCompare|425,812|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,190|92|
|{...smallObject} - Total keys: 2|58,138,835|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,311|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,580|98|
|{ ...bigObject, ...anotherBigObject }|761|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,054,773|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,756,077|92|
|{ ...smallObject, ...anotherSmallObject }|13,643,171|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,507 ops/sec ±13.97% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 386 ops/sec ±4.11% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,784 ops/sec ±0.65% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 960 ops/sec ±16.60% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,664,241|98|
|Using backtick (`)|712,378,460|99|
|Using array.join|6,776,982|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,129,584|92|
|Using this|131,785,685|92|
