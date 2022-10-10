# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Mon Oct 10 2022 11:37:33 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|80|
|Array.from|12|33|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|241,668|89|
|[True conditional] Using constructor name|240,891|84|
|[True conditional] Check if property is valid then instanceof |242,507|87|
|[False conditional] Using instanceof only|593,848,075|95|
|[False conditional] Using constructor name|593,114,405|96|
|[False conditional] Check if property is valid then instanceof |594,340,333|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,562|81|
|Intl.DateTimeFormat().format(new Date())|6,238|80|
|Reusing Intl.DateTimeFormat()|380,583|93|
|Format using date.get*|2,621,377|93|
|new Date() (Baseline)|5,981,898|93|
|Date.now() (Baseline)|11,983,502|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|597,610|94|
|Using brackets {}|605,496|95|
|Using '' + |596,867|95|
|Using date.toString()|647,269|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,969,591|94|
|Using undefined assignment|593,680,468|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|231,141|85|
|NodeError|235,492|86|
|NodeError Range|227,627|84|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,153,709|93|
|Function returning explicitly undefined|1,130,774|91|
|Function returning implicitly undefined|1,162,688|91|
|Function returning string|1,143,570|88|
|Function returning integer|1,173,587|94|
|Function returning float|1,112,703|94|
|Function returning functions|1,103,917|92|
|Function returning arrow functions|1,119,503|93|
|Function returning empty object|1,148,110|93|
|Function returning empty array|1,149,269|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|587,154,346|90|
|using Array.includes (first item)|592,976,339|92|
|Using raw comparison|594,745,962|94|
|Using raw comparison (first item)|592,329,490|91|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,895,284|91|
|Using Object.getOwnPropertyNames()|42,968,085|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|592,625,304|96|
|Length = 10_000 - Array[length - 1]|591,786,772|93|
|Length = 1_000_000 - Array[length - 1]|585,654,830|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,745,411|88|
|Object.create({})|1,084,535|75|
|Cached Empty.prototype|592,845,307|95|
|Empty.prototype|1,141,416|67|
|Empty class|733,906|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,552,648|94|
|Using optional chain (obj.field?.field2) (undefined)|592,447,499|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,299,923|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,438,413|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|145,491,274|91|
|Using parseInt(x, 10) - big number (10 len)|9,902,911|95|
|Using + - small number (2 len)|595,616,928|94|
|Using + - big number (10 len)|594,434,918|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|608,259|74|
|Using ? operator to avoid rejection|660,543|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,030,634|91|
|Raw usage underscore usage|5,896,001|93|
|Manipulating private properties using #|2,075,485|91|
|Manipulating private properties using underscore(_)|579,961,358|88|
|Manipulating private properties using Symbol|579,545,638|91|
|Manipulating private properties using PrivateSymbol|24,762,374|92|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|146,620|90|
|Sort using first char|654,674|93|
|Sort using localeCompare|373,163|92|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,833,709|89|
|Using backtick (`)|597,997,377|94|
|Using array.join|5,751,244|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,296,107|89|
|Using this|105,505,054|92|
