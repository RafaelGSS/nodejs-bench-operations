# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.1`
* __Run:__ Fri Oct 28 2022 13:04:03 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.04ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.066ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.513ms 
    new Array(length): 0.222ms (faster)

 1,000,000 numbers:
           array.push: 40.972ms 
    new Array(length): 8.087ms (faster)

 100,000,000 numbers:
           array.push: 1,634.815ms (faster)
    new Array(length): 4,434.032ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.087ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.049ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.538ms 
    new Array(length): 0.253ms (faster)

 1,000,000 strings:
           array.push: 197.247ms 
    new Array(length): 10.108ms (faster)

 100,000,000 strings:
           array.push: 1,907.622ms (faster)
    new Array(length): 4,839.923ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|401|83|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|173,863|55|
|[True conditional] Using constructor name|135,329|95|
|[True conditional] Check if property is valid then instanceof |135,276|92|
|[False conditional] Using instanceof only|594,781,610|97|
|[False conditional] Using constructor name|594,495,809|94|
|[False conditional] Check if property is valid then instanceof |595,940,925|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,399|89|
|Intl.DateTimeFormat().format(new Date())|9,012|80|
|Reusing Intl.DateTimeFormat()|405,903|95|
|Format using date.get*|3,694,869|98|
|new Date() (Baseline)|7,708,582|98|
|Date.now() (Baseline)|14,910,579|92|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|677,772|98|
|Using brackets {}|691,968|96|
|Using '' + |692,918|94|
|Using date.toString()|763,719|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,403,558|95|
|Using undefined assignment|593,273,815|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|161,791|49|
|NodeError|123,244|93|
|NodeError Range|124,086|87|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,146,128|95|
|Function returning explicitly undefined|1,139,422|95|
|Function returning implicitly undefined|1,156,367|92|
|Function returning string|1,150,324|95|
|Function returning integer|1,166,472|95|
|Function returning float|1,157,680|98|
|Function returning functions|1,112,816|94|
|Function returning arrow functions|1,133,440|94|
|Function returning empty object|1,165,538|92|
|Function returning empty array|1,117,025|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,149,056|97|
|using Array.includes (first item)|593,811,386|94|
|Using raw comparison|595,669,634|98|
|Using raw comparison (first item)|595,294,049|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,168,285|94|
|Using Object.getOwnPropertyNames()|64,461,008|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|17,799,490|90|
|Length = 10_000 - Array.at|18,742,501|96|
|Length = 1_000_000 - Array.at|18,347,666|95|
|Length = 100 - Array[length - 1]|592,455,286|98|
|Length = 10_000 - Array[length - 1]|591,935,042|97|
|Length = 1_000_000 - Array[length - 1]|592,343,264|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,246,271|94|
|Object.create({})|1,438,892|81|
|Cached Empty.prototype|594,144,196|96|
|Empty.prototype|1,515,370|78|
|Empty class|918,363|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,480,228|98|
|Using optional chain (obj.field?.field2) (undefined)|594,202,327|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,228,785|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,491,726|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|229,059,039|95|
|Using parseInt(x, 10) - big number (10 len)|14,923,932|98|
|Using + - small number (2 len)|595,236,718|98|
|Using + - big number (10 len)|594,945,327|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|794,722|76|
|Using ? operator to avoid rejection|857,762|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,216,218|92|
|Raw usage underscore usage|7,614,459|95|
|Manipulating private properties using #|2,784,338|95|
|Manipulating private properties using underscore(_)|588,698,026|100|
|Manipulating private properties using Symbol|588,156,779|100|
|Manipulating private properties using PrivateSymbol|34,908,807|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,431,943|91|
|Using replaceAll()|2,165,297|96|
|Using replaceAll(//g)|2,188,998|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,803|98|
|Sort using first char|803,395|87|
|Sort using localeCompare|443,450|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,668 ops/sec ±15.60% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 364 ops/sec ±0.62% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,984 ops/sec ±0.57% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 967 ops/sec ±34.39% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|595,449,049|97|
|Using backtick (`)|595,013,926|94|
|Using array.join|8,529,751|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,772,515|92|
|Using this|110,903,981|91|
