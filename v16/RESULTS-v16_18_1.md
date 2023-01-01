# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sun Jan 01 2023 15:29:03 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.12ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.046ms 
    new Array(length): 0.023ms (faster)

 10,000 numbers:
           array.push: 0.407ms 
    new Array(length): 0.213ms (faster)

 1,000,000 numbers:
           array.push: 28.022ms 
    new Array(length): 9.749ms (faster)

 100,000,000 numbers:
           array.push: 1,582.507ms (faster)
    new Array(length): 4,293.287ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.578ms 
    new Array(length): 0.254ms (faster)

 1,000,000 strings:
           array.push: 300.709ms 
    new Array(length): 8.81ms (faster)

 100,000,000 strings:
           array.push: 2,119.262ms (faster)
    new Array(length): 4,674.392ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|408|84|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,900|55|
|[True conditional] Using constructor name|134,240|95|
|[True conditional] Check if property is valid then instanceof |135,093|92|
|[False conditional] Using instanceof only|594,719,445|96|
|[False conditional] Using constructor name|594,193,038|94|
|[False conditional] Check if property is valid then instanceof |595,396,512|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,969|82|
|Intl.DateTimeFormat().format(new Date())|9,943|86|
|Reusing Intl.DateTimeFormat()|408,931|97|
|Format using date.get*|3,870,012|92|
|new Date() (Baseline)|7,755,122|96|
|Date.now() (Baseline)|14,344,234|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|696,475|96|
|Using brackets {}|706,023|96|
|Using '' + |703,522|94|
|Using date.toString()|765,787|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,468,225|93|
|Using undefined assignment|592,903,950|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|166,961|51|
|NodeError|128,126|93|
|NodeError Range|129,335|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,154,314|94|
|Function returning explicitly undefined|1,194,132|98|
|Function returning implicitly undefined|1,211,585|87|
|Function returning string|1,198,435|94|
|Function returning integer|1,222,316|95|
|Function returning float|1,218,166|98|
|Function returning functions|1,180,493|94|
|Function returning arrow functions|1,188,417|98|
|Function returning empty object|1,205,644|96|
|Function returning empty array|1,183,394|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,906,666|99|
|using Array.includes (first item)|593,412,570|94|
|Using raw comparison|595,152,843|95|
|Using raw comparison (first item)|594,076,665|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,845,340|93|
|Using Object.getOwnPropertyNames()|64,583,439|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,883,546|95|
|Length = 10_000 - Array.at|18,893,927|98|
|Length = 1_000_000 - Array.at|18,851,164|96|
|Length = 100 - Array[length - 1]|592,975,541|97|
|Length = 10_000 - Array[length - 1]|592,489,485|98|
|Length = 1_000_000 - Array[length - 1]|592,655,595|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,796,152|92|
|Object.create({})|1,502,779|81|
|Cached Empty.prototype|593,741,863|97|
|Empty.prototype|1,539,187|80|
|Empty class|930,497|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,527,378|97|
|Using optional chain (obj.field?.field2) (undefined)|593,985,666|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,567,415|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,161,977|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|219,230,354|88|
|Using parseInt(x, 10) - big number (10 len)|15,228,260|98|
|Using + - small number (2 len)|595,163,762|99|
|Using + - big number (10 len)|594,068,588|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|797,779|78|
|Using ? operator to avoid rejection|859,062|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,378,650|92|
|Raw usage underscore usage|7,640,768|95|
|Manipulating private properties using #|2,783,905|95|
|Manipulating private properties using underscore(_)|590,380,822|95|
|Manipulating private properties using Symbol|588,329,493|96|
|Manipulating private properties using PrivateSymbol|33,668,943|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,624,425|99|
|Adding property in the object creation - small object|2,640,615|99|
|Adding property after the function creation - small class|169,365|88|
|Adding property in the function creation - small class|170,247|88|
|Adding property after the class creation - small class|143,178|85|
|Adding property in the class creation - small class|142,276|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,447,296|92|
|Using replaceAll()|2,244,165|98|
|Using replaceAll(//g)|2,184,953|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,828|97|
|Sort using first char|848,637|94|
|Sort using localeCompare|440,510|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,409|93|
|{...smallObject} - Total keys: 2|67,224,575|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,564|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,604|98|
|{ ...bigObject, ...anotherBigObject }|841|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,325,816|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,375,131|95|
|{ ...smallObject, ...anotherSmallObject }|16,111,029|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,636 ops/sec ±16.99% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 375 ops/sec ±0.51% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,962 ops/sec ±0.44% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,044 ops/sec ±17.75% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|594,584,802|97|
|Using backtick (`)|593,913,097|97|
|Using array.join|8,615,428|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,444,470|90|
|Using this|112,398,610|93|
