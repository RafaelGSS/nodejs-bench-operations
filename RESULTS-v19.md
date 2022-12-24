# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sat Dec 24 2022 18:48:54 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.016ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.041ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.079ms 
    new Array(length): 0.038ms (faster)

 10,000 numbers:
           array.push: 1.719ms (faster)
    new Array(length): 5.082ms

 1,000,000 numbers:
           array.push: 68.296ms 
    new Array(length): 9.438ms (faster)

 100,000,000 numbers:
           array.push: 2,221.027ms (faster)
    new Array(length): 6,722.994ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.021ms 
    new Array(length): 0.014ms (faster)

 1,000 strings:
           array.push: 0.056ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.39ms 
    new Array(length): 0.283ms (faster)

 1,000,000 strings:
           array.push: 40.706ms 
    new Array(length): 4.961ms (faster)

 100,000,000 strings:
           array.push: 2,767.875ms (faster)
    new Array(length): 6,838.149ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|331|81|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|142,290|56|
|[True conditional] Using constructor name|111,116|89|
|[True conditional] Check if property is valid then instanceof |111,006|88|
|[False conditional] Using instanceof only|634,512,678|91|
|[False conditional] Using constructor name|635,025,170|91|
|[False conditional] Check if property is valid then instanceof |629,216,152|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,128|86|
|Intl.DateTimeFormat().format(new Date())|5,774|79|
|Reusing Intl.DateTimeFormat()|377,311|89|
|Format using date.get*|2,555,190|91|
|new Date() (Baseline)|6,857,020|90|
|Date.now() (Baseline)|13,600,244|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|569,335|89|
|Using brackets {}|574,199|91|
|Using '' + |583,052|88|
|Using date.toString()|637,120|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,910,062|88|
|Using undefined assignment|640,544,415|91|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|138,580|57|
|NodeError|108,848|90|
|NodeError Range|109,503|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,151,293|90|
|Function returning explicitly undefined|1,133,239|90|
|Function returning implicitly undefined|1,158,233|90|
|Function returning string|1,146,311|90|
|Function returning integer|1,128,166|91|
|Function returning float|1,148,543|89|
|Function returning functions|1,066,710|91|
|Function returning arrow functions|1,145,211|91|
|Function returning empty object|1,161,411|93|
|Function returning empty array|1,171,807|89|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|611,297,600|89|
|using Array.includes (first item)|610,251,311|88|
|Using raw comparison|618,296,856|86|
|Using raw comparison (first item)|627,293,539|88|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,885,802|90|
|Using Object.getOwnPropertyNames()|41,672,352|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|570,546,699|88|
|Length = 10_000 - Array.at|591,257,412|87|
|Length = 1_000_000 - Array.at|575,702,305|87|
|Length = 100 - Array[length - 1]|616,308,005|86|
|Length = 10_000 - Array[length - 1]|622,530,242|90|
|Length = 1_000_000 - Array[length - 1]|618,971,137|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,173,658|87|
|Object.create({})|1,203,632|74|
|Cached Empty.prototype|628,476,228|91|
|Empty.prototype|1,079,533|75|
|Empty class|755,973|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|632,944,866|90|
|Using optional chain (obj.field?.field2) (undefined)|638,698,425|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|635,560,835|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|635,347,437|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|151,495,184|88|
|Using parseInt(x, 10) - big number (10 len)|12,279,555|90|
|Using + - small number (2 len)|642,490,744|92|
|Using + - big number (10 len)|640,741,731|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|673,843|72|
|Using ? operator to avoid rejection|703,851|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|604,794,515|92|
|Raw usage underscore usage|606,275,817|91|
|Manipulating private properties using #|595,150,136|92|
|Manipulating private properties using underscore(_)|597,913,894|91|
|Manipulating private properties using Symbol|596,610,201|90|
|Manipulating private properties using PrivateSymbol|27,439,542|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,073,781|90|
|Adding property in the object creation - small object|2,097,719|92|
|Adding property after the function creation - small class|136,958|79|
|Adding property in the function creation - small class|139,845|79|
|Adding property after the class creation - small class|115,723|74|
|Adding property in the class creation - small class|118,002|74|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,857,701|90|
|Using replaceAll()|1,712,727|92|
|Using replaceAll(//g)|1,669,678|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|145,140|91|
|Sort using first char|643,862|89|
|Sort using localeCompare|604,226|85|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,016|90|
|{...smallObject} - Total keys: 2|54,291,235|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,090|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,006|89|
|{ ...bigObject, ...anotherBigObject }|640|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,205,358|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,573,678|90|
|{ ...smallObject, ...anotherSmallObject }|12,458,270|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,140 ops/sec ±19.01% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 311 ops/sec ±4.08% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,074 ops/sec ±0.90% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 840 ops/sec ±17.16% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|634,833,440|90|
|Using backtick (`)|634,671,628|92|
|Using array.join|5,549,197|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|134,038,836|90|
|Using this|164,195,850|90|
