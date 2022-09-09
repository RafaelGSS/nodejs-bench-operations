# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Fri Sep 09 2022 02:02:50 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|358|82|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,016|91|
|[True conditional] Using constructor name|324,957|87|
|[True conditional] Check if property is valid then instanceof |322,837|85|
|[False conditional] Using instanceof only|810,798,877|98|
|[False conditional] Using constructor name|815,349,676|97|
|[False conditional] Check if property is valid then instanceof |815,277,381|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,551|81|
|Intl.DateTimeFormat().format(new Date())|9,580|78|
|Reusing Intl.DateTimeFormat()|453,321|97|
|Format using date.get*|4,185,712|95|
|new Date() (Baseline)|8,103,440|94|
|Date.now() (Baseline)|16,257,314|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|781,242|94|
|Using brackets {}|805,928|89|
|Using '' + |773,731|98|
|Using date.toString()|849,315|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,716,309|94|
|Using undefined assignment|818,148,691|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|318,639|89|
|NodeError|324,038|88|
|NodeError Range|320,139|87|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,573,631|96|
|Function returning explicitly undefined|1,548,419|96|
|Function returning implicitly undefined|1,585,449|91|
|Function returning string|1,548,331|92|
|Function returning integer|1,556,259|96|
|Function returning float|1,577,898|94|
|Function returning functions|1,497,158|95|
|Function returning arrow functions|1,566,475|94|
|Function returning empty object|1,543,542|97|
|Function returning empty array|1,507,620|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|810,891,819|89|
|using Array.includes (first item)|815,510,689|98|
|Using raw comparison|812,798,997|98|
|Using raw comparison (first item)|812,187,574|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|62,663,988|92|
|Using Object.getOwnPropertyNames()|52,656,047|85|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|808,844,894|96|
|Length = 10_000 - Array[length - 1]|811,749,996|95|
|Length = 1_000_000 - Array[length - 1]|811,144,742|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,956,733|91|
|Object.create({})|1,426,075|81|
|Cached Empty.prototype|816,609,717|95|
|Empty.prototype|1,434,974|75|
|Empty class|964,472|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|813,066,981|96|
|Using optional chain (obj.field?.field2) (undefined)|817,293,689|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|813,138,070|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|812,196,460|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|806,534|75|
|Using ? operator to avoid rejection|863,517|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,889,223|95|
|Raw usage underscore usage|8,137,861|95|
|Manipulating private properties using #|2,944,560|95|
|Manipulating private properties using underscore(_)|802,851,261|95|
|Manipulating private properties using Symbol|800,583,107|97|
|Manipulating private properties using PrivateSymbol|33,986,455|93|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|201,396|96|
|Sort using first char|865,993|91|
|Sort using localeCompare|477,684|95|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|816,936,286|95|
|Using backtick (`)|812,795,604|97|
|Using array.join|7,854,660|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,872,235|93|
|Using this|146,436,693|91|
