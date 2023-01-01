# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sun Jan 01 2023 15:29:04 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.1ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.056ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.471ms 
    new Array(length): 0.233ms (faster)

 1,000,000 numbers:
           array.push: 41.917ms 
    new Array(length): 9.306ms (faster)

 100,000,000 numbers:
           array.push: 1,992.656ms (faster)
    new Array(length): 4,992.915ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.016ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.058ms 
    new Array(length): 0.028ms (faster)

 10,000 strings:
           array.push: 0.638ms 
    new Array(length): 0.303ms (faster)

 1,000,000 strings:
           array.push: 360.415ms 
    new Array(length): 9.433ms (faster)

 100,000,000 strings:
           array.push: 2,765.264ms (faster)
    new Array(length): 5,512.78ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|368|84|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|198,808|58|
|[True conditional] Using constructor name|155,236|95|
|[True conditional] Check if property is valid then instanceof |156,718|91|
|[False conditional] Using instanceof only|711,947,184|97|
|[False conditional] Using constructor name|709,884,485|96|
|[False conditional] Check if property is valid then instanceof |712,329,274|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,322|84|
|Intl.DateTimeFormat().format(new Date())|8,101|80|
|Reusing Intl.DateTimeFormat()|432,737|86|
|Format using date.get*|3,509,532|98|
|new Date() (Baseline)|7,437,054|92|
|Date.now() (Baseline)|14,285,559|99|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|690,183|97|
|Using brackets {}|698,120|96|
|Using '' + |693,159|98|
|Using date.toString()|746,024|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,477,982|92|
|Using undefined assignment|710,942,896|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|193,095|53|
|NodeError|151,014|94|
|NodeError Range|151,289|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,315,327|97|
|Function returning explicitly undefined|1,318,210|94|
|Function returning implicitly undefined|1,355,514|94|
|Function returning string|1,333,342|95|
|Function returning integer|1,316,205|96|
|Function returning float|1,300,182|97|
|Function returning functions|1,317,938|96|
|Function returning arrow functions|1,325,717|96|
|Function returning empty object|1,273,268|96|
|Function returning empty array|1,348,792|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,072,842|97|
|using Array.includes (first item)|711,923,052|95|
|Using raw comparison|713,715,553|99|
|Using raw comparison (first item)|712,532,850|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,750,919|92|
|Using Object.getOwnPropertyNames()|53,640,017|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,976,917|98|
|Length = 10_000 - Array.at|15,967,144|95|
|Length = 1_000_000 - Array.at|16,022,529|94|
|Length = 100 - Array[length - 1]|709,695,439|96|
|Length = 10_000 - Array[length - 1]|708,273,785|98|
|Length = 1_000_000 - Array[length - 1]|704,824,769|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,426,602|93|
|Object.create({})|1,336,704|78|
|Cached Empty.prototype|710,109,695|96|
|Empty.prototype|1,314,781|73|
|Empty class|866,502|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,448,894|97|
|Using optional chain (obj.field?.field2) (undefined)|712,477,122|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,986,789|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,202,485|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,232,624|92|
|Using parseInt(x, 10) - big number (10 len)|12,434,497|96|
|Using + - small number (2 len)|711,265,077|95|
|Using + - big number (10 len)|711,644,810|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|730,954|73|
|Using ? operator to avoid rejection|806,786|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,557,060|97|
|Raw usage underscore usage|7,007,864|99|
|Manipulating private properties using #|2,561,354|95|
|Manipulating private properties using underscore(_)|703,428,420|96|
|Manipulating private properties using Symbol|701,119,519|93|
|Manipulating private properties using PrivateSymbol|27,083,859|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,976,943|96|
|Adding property in the object creation - small object|1,985,198|95|
|Adding property after the function creation - small class|171,843|83|
|Adding property in the function creation - small class|173,280|86|
|Adding property after the class creation - small class|141,596|81|
|Adding property in the class creation - small class|141,143|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,130,255|91|
|Using replaceAll()|2,026,050|98|
|Using replaceAll(//g)|1,909,116|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|180,138|97|
|Sort using first char|750,247|87|
|Sort using localeCompare|432,252|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,263|93|
|{...smallObject} - Total keys: 2|57,969,286|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,316|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,594|98|
|{ ...bigObject, ...anotherBigObject }|784|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,161,380|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,718,809|94|
|{ ...smallObject, ...anotherSmallObject }|13,740,768|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,567 ops/sec ±13.06% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 403 ops/sec ±0.53% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,846 ops/sec ±0.57% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 937 ops/sec ±16.99% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,963,679|96|
|Using backtick (`)|710,649,483|93|
|Using array.join|6,926,772|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,599,597|89|
|Using this|133,689,367|95|
