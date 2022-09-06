# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.8.0`
* __Run:__ Tue Sep 06 2022 20:16:21 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.009ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.171ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.062ms 
    new Array(length): 0.028ms (faster)

 10,000 numbers:
           array.push: 0.568ms 
    new Array(length): 0.285ms (faster)

 1,000,000 numbers:
           array.push: 53.442ms 
    new Array(length): 10.105ms (faster)

 100,000,000 numbers:
           array.push: 2,180.991ms (faster)
    new Array(length): 5,620.295ms


----


 10 strings:
           array.push: 0.013ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.227ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.059ms 
    new Array(length): 0.029ms (faster)

 10,000 strings:
           array.push: 0.706ms 
    new Array(length): 0.33ms (faster)

 1,000,000 strings:
           array.push: 357.449ms 
    new Array(length): 10.367ms (faster)

 100,000,000 strings:
           array.push: 2,969.022ms (faster)
    new Array(length): 6,161.841ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|78|
|Array.from|14|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|155,094|51|
|[True conditional] Using constructor name|118,361|88|
|[True conditional] Check if property is valid then instanceof |117,743|86|
|[False conditional] Using instanceof only|646,256,312|86|
|[False conditional] Using constructor name|643,924,411|88|
|[False conditional] Check if property is valid then instanceof |637,915,048|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,682|90|
|Intl.DateTimeFormat().format(new Date())|5,819|82|
|Reusing Intl.DateTimeFormat()|428,691|92|
|Format using date.get*|2,546,815|87|
|new Date() (Baseline)|6,588,157|91|
|Date.now() (Baseline)|13,898,070|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|558,691|86|
|Using brackets {}|558,687|89|
|Using '' + |556,369|91|
|Using date.toString()|618,778|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,878,539|90|
|Using undefined assignment|643,511,624|91|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|145,623|57|
|NodeError|115,235|90|
|NodeError Range|118,612|87|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,171,894|87|
|Function returning explicitly undefined|1,153,246|89|
|Function returning implicitly undefined|1,180,839|89|
|Function returning string|1,161,871|88|
|Function returning integer|1,167,890|86|
|Function returning float|1,180,293|84|
|Function returning functions|1,106,918|84|
|Function returning arrow functions|1,134,678|87|
|Function returning empty object|1,150,215|87|
|Function returning empty array|1,175,235|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|683,969,544|89|
|using Array.includes (first item)|681,456,994|90|
|Using raw comparison|661,977,450|88|
|Using raw comparison (first item)|643,589,259|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,778,476|90|
|Length = 10_000 - Array.at|14,858,733|90|
|Length = 1_000_000 - Array.at|14,765,679|89|
|Length = 100 - Array[length - 1]|642,228,343|84|
|Length = 10_000 - Array[length - 1]|643,785,900|90|
|Length = 1_000_000 - Array[length - 1]|664,772,189|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|675,135,219|90|
|Using optional chain (obj.field?.field2) (undefined)|665,733,046|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|674,190,371|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|667,451,750|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|463,376|73|
|Using ? operator to avoid rejection|510,072|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|129,274,809|87|
|Raw usage underscore usage|127,583,359|81|
|Manipulating private properties using #|89,709,532|83|
|Manipulating private properties using underscore(_)|66,855,654|85|
|Manipulating private properties using Symbol|66,517,860|88|
|Manipulating private properties using PrivateSymbol|27,701,257|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,827,899|83|
|Using replaceAll()|1,705,610|91|
|Using replaceAll(//g)|1,593,781|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|149,150|88|
|Sort using first char|606,161|85|
|Sort using localeCompare|596,305|85|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,217 ops/sec ±15.81% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 339 ops/sec ±0.52% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,794 ops/sec ±0.66% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 871 ops/sec ±16.94% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|665,571,253|88|
|Using backtick (`)|646,661,037|89|
|Using array.join|5,677,403|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,258,044|86|
|Using this|137,621,895|84|
