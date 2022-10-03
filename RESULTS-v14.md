# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Mon Oct 03 2022 12:56:32 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|302|79|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,445|85|
|[True conditional] Using constructor name|250,928|75|
|[True conditional] Check if property is valid then instanceof |242,988|81|
|[False conditional] Using instanceof only|743,173,152|85|
|[False conditional] Using constructor name|758,197,131|86|
|[False conditional] Check if property is valid then instanceof |718,172,010|82|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,030|79|
|Intl.DateTimeFormat().format(new Date())|5,226|71|
|Reusing Intl.DateTimeFormat()|385,375|85|
|Format using date.get*|2,828,092|86|
|new Date() (Baseline)|5,635,137|83|
|Date.now() (Baseline)|12,672,121|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|560,360|85|
|Using brackets {}|558,466|85|
|Using '' + |578,020|84|
|Using date.toString()|618,569|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,879,183|86|
|Using undefined assignment|733,188,222|78|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|222,860|84|
|NodeError|227,961|85|
|NodeError Range|229,244|84|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,076,701|86|
|Function returning explicitly undefined|1,104,568|87|
|Function returning implicitly undefined|1,115,673|86|
|Function returning string|1,013,760|83|
|Function returning integer|1,128,720|86|
|Function returning float|1,133,410|88|
|Function returning functions|1,069,089|86|
|Function returning arrow functions|1,092,772|89|
|Function returning empty object|1,141,201|88|
|Function returning empty array|1,118,280|85|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|691,941,257|84|
|using Array.includes (first item)|732,175,713|86|
|Using raw comparison|738,038,065|88|
|Using raw comparison (first item)|739,217,546|87|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,333,762|88|
|Using Object.getOwnPropertyNames()|41,142,331|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|712,892,974|89|
|Length = 10_000 - Array[length - 1]|733,229,065|86|
|Length = 1_000_000 - Array[length - 1]|733,431,764|84|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,435,119|87|
|Object.create({})|1,013,714|74|
|Cached Empty.prototype|737,818,469|86|
|Empty.prototype|1,057,380|80|
|Empty class|723,864|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|752,322,173|85|
|Using optional chain (obj.field?.field2) (undefined)|738,200,877|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|731,026,050|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|730,123,441|84|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|559,060|69|
|Using ? operator to avoid rejection|584,376|73|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,367,319|84|
|Raw usage underscore usage|5,147,888|84|
|Manipulating private properties using #|1,925,282|83|
|Manipulating private properties using underscore(_)|582,994,665|85|
|Manipulating private properties using Symbol|597,422,026|87|
|Manipulating private properties using PrivateSymbol|25,500,607|81|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|137,904|86|
|Sort using first char|625,171|87|
|Sort using localeCompare|360,962|84|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|734,620,699|87|
|Using backtick (`)|720,430,468|89|
|Using array.join|5,525,334|86|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|13,450,475|84|
|Using this|131,179,341|88|
