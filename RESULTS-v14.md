# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Fri Oct 28 2022 13:03:59 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|406|79|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|280,089|89|
|[True conditional] Using constructor name|280,286|88|
|[True conditional] Check if property is valid then instanceof |279,089|83|
|[False conditional] Using instanceof only|596,515,882|98|
|[False conditional] Using constructor name|595,979,245|98|
|[False conditional] Check if property is valid then instanceof |596,952,303|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,732|81|
|Intl.DateTimeFormat().format(new Date())|9,471|83|
|Reusing Intl.DateTimeFormat()|402,985|97|
|Format using date.get*|3,639,841|94|
|new Date() (Baseline)|7,308,537|94|
|Date.now() (Baseline)|14,830,407|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|699,205|95|
|Using brackets {}|694,925|94|
|Using '' + |720,146|94|
|Using date.toString()|774,864|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,343,756|97|
|Using undefined assignment|594,959,944|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|268,445|87|
|NodeError|272,159|88|
|NodeError Range|263,307|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,243,299|94|
|Function returning explicitly undefined|1,230,944|97|
|Function returning implicitly undefined|1,226,966|88|
|Function returning string|1,251,054|91|
|Function returning integer|1,271,620|94|
|Function returning float|1,211,400|94|
|Function returning functions|1,212,904|95|
|Function returning arrow functions|1,221,821|92|
|Function returning empty object|1,198,322|93|
|Function returning empty array|1,253,370|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,776,358|96|
|using Array.includes (first item)|594,828,147|93|
|Using raw comparison|596,066,150|95|
|Using raw comparison (first item)|595,725,662|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|61,811,587|88|
|Using Object.getOwnPropertyNames()|62,341,019|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|597,015,352|96|
|Length = 10_000 - Array[length - 1]|598,137,409|97|
|Length = 1_000_000 - Array[length - 1]|595,951,498|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,141,441|92|
|Object.create({})|1,409,481|85|
|Cached Empty.prototype|595,438,351|95|
|Empty.prototype|1,540,493|77|
|Empty class|900,591|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,594,545|97|
|Using optional chain (obj.field?.field2) (undefined)|594,972,789|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|595,413,828|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,779,759|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|233,740,809|91|
|Using parseInt(x, 10) - big number (10 len)|13,797,147|99|
|Using + - small number (2 len)|594,050,966|96|
|Using + - big number (10 len)|594,467,477|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|675,364|80|
|Using ? operator to avoid rejection|720,269|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,807,755|93|
|Raw usage underscore usage|7,219,556|97|
|Manipulating private properties using #|2,640,108|92|
|Manipulating private properties using underscore(_)|588,719,297|98|
|Manipulating private properties using Symbol|587,894,211|93|
|Manipulating private properties using PrivateSymbol|34,701,739|97|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|171,210|97|
|Sort using first char|765,112|94|
|Sort using localeCompare|430,721|97|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,827,931|95|
|Using backtick (`)|595,925,842|94|
|Using array.join|9,078,430|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,374,450|97|
|Using this|113,064,655|96|
