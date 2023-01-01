# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sun Jan 01 2023 15:29:06 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.036ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.511ms 
    new Array(length): 0.202ms (faster)

 1,000,000 numbers:
           array.push: 30.055ms 
    new Array(length): 18.42ms (faster)

 100,000,000 numbers:
           array.push: 1,694.769ms (faster)
    new Array(length): 4,345.083ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.588ms 
    new Array(length): 0.263ms (faster)

 1,000,000 strings:
           array.push: 317.976ms 
    new Array(length): 8.433ms (faster)

 100,000,000 strings:
           array.push: 2,203.101ms (faster)
    new Array(length): 5,596.932ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|363|83|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,139|53|
|[True conditional] Using constructor name|127,608|93|
|[True conditional] Check if property is valid then instanceof |129,062|93|
|[False conditional] Using instanceof only|593,878,281|97|
|[False conditional] Using constructor name|591,303,860|93|
|[False conditional] Check if property is valid then instanceof |593,936,797|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,018|86|
|Intl.DateTimeFormat().format(new Date())|8,980|78|
|Reusing Intl.DateTimeFormat()|454,240|97|
|Format using date.get*|3,875,288|97|
|new Date() (Baseline)|7,591,223|95|
|Date.now() (Baseline)|15,399,127|99|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|716,595|95|
|Using brackets {}|726,039|97|
|Using '' + |725,056|94|
|Using date.toString()|803,959|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,427,240|95|
|Using undefined assignment|592,706,730|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|161,881|54|
|NodeError|126,428|92|
|NodeError Range|126,569|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,254,845|94|
|Function returning explicitly undefined|1,245,232|97|
|Function returning implicitly undefined|1,276,691|92|
|Function returning string|1,260,240|92|
|Function returning integer|1,283,167|95|
|Function returning float|1,251,140|98|
|Function returning functions|1,231,375|96|
|Function returning arrow functions|1,240,028|95|
|Function returning empty object|1,270,836|94|
|Function returning empty array|1,228,830|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,486,648|97|
|using Array.includes (first item)|592,793,649|98|
|Using raw comparison|593,610,685|98|
|Using raw comparison (first item)|592,765,816|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,181,545|94|
|Using Object.getOwnPropertyNames()|55,436,743|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,313,834|97|
|Length = 10_000 - Array.at|19,248,765|96|
|Length = 1_000_000 - Array.at|19,234,326|97|
|Length = 100 - Array[length - 1]|591,018,872|97|
|Length = 10_000 - Array[length - 1]|590,819,144|98|
|Length = 1_000_000 - Array[length - 1]|590,478,143|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,563,619|94|
|Object.create({})|1,012,574|81|
|Cached Empty.prototype|593,038,406|94|
|Empty.prototype|1,106,274|83|
|Empty class|635,329|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,958,398|98|
|Using optional chain (obj.field?.field2) (undefined)|593,622,318|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,254,961|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,852,644|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|201,800,058|93|
|Using parseInt(x, 10) - big number (10 len)|14,664,455|98|
|Using + - small number (2 len)|593,573,814|93|
|Using + - big number (10 len)|593,488,768|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|542,192|80|
|Using ? operator to avoid rejection|569,104|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|234,272,099|94|
|Raw usage underscore usage|215,323,837|94|
|Manipulating private properties using #|158,482,025|88|
|Manipulating private properties using underscore(_)|139,295,071|93|
|Manipulating private properties using Symbol|137,797,526|95|
|Manipulating private properties using PrivateSymbol|35,298,507|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,794,201|98|
|Adding property in the object creation - small object|1,799,632|98|
|Adding property after the function creation - small class|135,088|88|
|Adding property in the function creation - small class|134,897|86|
|Adding property after the class creation - small class|112,583|86|
|Adding property in the class creation - small class|113,170|88|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,410,604|98|
|Using replaceAll()|2,113,880|96|
|Using replaceAll(//g)|2,139,271|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,872|99|
|Sort using first char|824,076|89|
|Sort using localeCompare|768,462|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,353|97|
|{...smallObject} - Total keys: 2|75,608,590|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,565|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,463|97|
|{ ...bigObject, ...anotherBigObject }|823|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,225,402|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,435,161|98|
|{ ...smallObject, ...anotherSmallObject }|16,360,427|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,756 ops/sec ±0.49% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 373 ops/sec ±0.24% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,782 ops/sec ±0.44% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 927 ops/sec ±33.85% (46 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,621,845|96|
|Using backtick (`)|593,547,226|98|
|Using array.join|8,479,499|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|113,128,767|94|
|Using this|111,624,957|95|
