# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Fri Oct 28 2022 14:45:53 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.016ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.045ms 
    new Array(length): 0.015ms (faster)

 1,000 numbers:
           array.push: 0.075ms 
    new Array(length): 0.039ms (faster)

 10,000 numbers:
           array.push: 0.593ms 
    new Array(length): 0.495ms (faster)

 1,000,000 numbers:
           array.push: 48.879ms 
    new Array(length): 18.205ms (faster)

 100,000,000 numbers:
           array.push: 2,096.318ms (faster)
    new Array(length): 6,592.989ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.133ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.052ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.425ms 
    new Array(length): 0.298ms (faster)

 1,000,000 strings:
           array.push: 34.636ms 
    new Array(length): 5.479ms (faster)

 100,000,000 strings:
           array.push: 2,658.39ms (faster)
    new Array(length): 6,666.669ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|336|82|
|Array.from|13|36|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|149,536|54|
|[True conditional] Using constructor name|114,386|87|
|[True conditional] Check if property is valid then instanceof |115,599|88|
|[False conditional] Using instanceof only|660,522,475|92|
|[False conditional] Using constructor name|655,231,746|91|
|[False conditional] Check if property is valid then instanceof |658,353,454|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,298|83|
|Intl.DateTimeFormat().format(new Date())|5,915|82|
|Reusing Intl.DateTimeFormat()|430,100|91|
|Format using date.get*|2,789,705|82|
|new Date() (Baseline)|6,902,565|91|
|Date.now() (Baseline)|14,095,904|92|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|604,504|89|
|Using brackets {}|607,455|90|
|Using '' + |607,697|94|
|Using date.toString()|659,581|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,121,859|93|
|Using undefined assignment|656,591,028|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|145,725|57|
|NodeError|115,436|91|
|NodeError Range|115,400|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,111,415|92|
|Function returning explicitly undefined|1,097,098|82|
|Function returning implicitly undefined|1,124,956|87|
|Function returning string|1,105,903|93|
|Function returning integer|1,128,905|91|
|Function returning float|1,135,972|94|
|Function returning functions|1,096,499|93|
|Function returning arrow functions|1,087,988|88|
|Function returning empty object|1,109,162|92|
|Function returning empty array|1,129,648|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|656,628,075|92|
|using Array.includes (first item)|652,939,381|93|
|Using raw comparison|656,340,496|89|
|Using raw comparison (first item)|659,383,611|91|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,480,619|89|
|Using Object.getOwnPropertyNames()|42,885,834|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|619,975,247|93|
|Length = 10_000 - Array.at|621,443,367|88|
|Length = 1_000_000 - Array.at|623,717,271|93|
|Length = 100 - Array[length - 1]|656,159,011|92|
|Length = 10_000 - Array[length - 1]|655,288,184|93|
|Length = 1_000_000 - Array[length - 1]|649,739,189|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,649,300|90|
|Object.create({})|1,172,811|74|
|Cached Empty.prototype|659,905,658|95|
|Empty.prototype|1,115,802|77|
|Empty class|801,139|70|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|659,396,535|89|
|Using optional chain (obj.field?.field2) (undefined)|660,001,784|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|657,671,213|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|648,984,975|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|156,627,542|92|
|Using parseInt(x, 10) - big number (10 len)|12,542,297|93|
|Using + - small number (2 len)|656,038,893|91|
|Using + - big number (10 len)|655,057,342|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|618,842|74|
|Using ? operator to avoid rejection|632,583|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|627,363,560|92|
|Raw usage underscore usage|629,929,336|92|
|Manipulating private properties using #|615,341,176|95|
|Manipulating private properties using underscore(_)|621,520,356|92|
|Manipulating private properties using Symbol|618,469,606|94|
|Manipulating private properties using PrivateSymbol|26,571,764|88|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,959,892|91|
|Using replaceAll()|1,676,488|92|
|Using replaceAll(//g)|1,726,361|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|146,157|92|
|Sort using first char|658,050|88|
|Sort using localeCompare|619,824|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|983|90|
|{...smallObject} - Total keys: 2|56,227,384|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,134|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,108|91|
|{ ...bigObject, ...anotherBigObject }|640|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,602,893|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,847,592|95|
|{ ...smallObject, ...anotherSmallObject }|13,111,617|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,183 ops/sec ±16.81% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 312 ops/sec ±0.66% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,007 ops/sec ±0.51% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 843 ops/sec ±17.50% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|651,734,232|91|
|Using backtick (`)|653,660,581|93|
|Using array.join|5,786,037|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|135,871,754|89|
|Using this|168,672,001|91|
