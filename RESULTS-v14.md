# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Sun Oct 02 2022 21:25:49 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|369|82|
|Array.from|14|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|292,348|93|
|[True conditional] Using constructor name|287,518|86|
|[True conditional] Check if property is valid then instanceof |290,074|88|
|[False conditional] Using instanceof only|712,294,113|97|
|[False conditional] Using constructor name|713,372,431|96|
|[False conditional] Check if property is valid then instanceof |713,593,905|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,260|81|
|Intl.DateTimeFormat().format(new Date())|8,038|83|
|Reusing Intl.DateTimeFormat()|393,259|89|
|Format using date.get*|3,659,780|97|
|new Date() (Baseline)|7,220,274|96|
|Date.now() (Baseline)|14,382,945|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,407|92|
|Using brackets {}|734,024|95|
|Using '' + |732,483|93|
|Using date.toString()|783,566|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,418,263|93|
|Using undefined assignment|712,888,392|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|281,872|89|
|NodeError|285,826|88|
|NodeError Range|277,978|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,337,451|97|
|Function returning explicitly undefined|1,330,612|92|
|Function returning implicitly undefined|1,361,075|94|
|Function returning string|1,318,295|94|
|Function returning integer|1,337,148|93|
|Function returning float|1,325,034|96|
|Function returning functions|1,314,906|97|
|Function returning arrow functions|1,320,580|97|
|Function returning empty object|1,305,320|97|
|Function returning empty array|1,306,329|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,958,818|98|
|using Array.includes (first item)|711,721,121|95|
|Using raw comparison|713,689,863|95|
|Using raw comparison (first item)|712,382,708|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,025,648|93|
|Using Object.getOwnPropertyNames()|51,481,630|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|707,808,415|97|
|Length = 10_000 - Array[length - 1]|711,442,846|96|
|Length = 1_000_000 - Array[length - 1]|710,574,529|98|

## Object shallow close

|name|ops/sec|samples|
|-|-|-|
|Object.assign (small obj)|14,191,395|93|
|Spread operator (small obj)|58,699,414|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,493,558|92|
|Object.create({})|1,322,122|79|
|Cached Empty.prototype|711,724,565|98|
|Empty.prototype|1,384,483|75|
|Empty class|899,401|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,923,560|98|
|Using optional chain (obj.field?.field2) (undefined)|714,018,323|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|713,369,280|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,497,426|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|717,266|77|
|Using ? operator to avoid rejection|776,098|76|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,674,800|93|
|Raw usage underscore usage|7,162,511|97|
|Manipulating private properties using #|2,544,307|95|
|Manipulating private properties using underscore(_)|701,874,750|97|
|Manipulating private properties using Symbol|701,015,046|94|
|Manipulating private properties using PrivateSymbol|30,409,815|95|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|176,746|94|
|Sort using first char|796,159|93|
|Sort using localeCompare|434,079|96|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|713,556,813|96|
|Using backtick (`)|713,384,825|95|
|Using array.join|6,983,421|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,425,140|89|
|Using this|132,107,966|94|
