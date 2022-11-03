# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Thu Nov 03 2022 16:12:48 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|331|78|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,173|90|
|[True conditional] Using constructor name|282,780|90|
|[True conditional] Check if property is valid then instanceof |279,505|85|
|[False conditional] Using instanceof only|713,173,537|97|
|[False conditional] Using constructor name|712,878,741|95|
|[False conditional] Check if property is valid then instanceof |713,145,397|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,589|84|
|Intl.DateTimeFormat().format(new Date())|7,441|78|
|Reusing Intl.DateTimeFormat()|379,901|86|
|Format using date.get*|3,605,801|97|
|new Date() (Baseline)|7,129,264|96|
|Date.now() (Baseline)|14,282,618|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|690,590|91|
|Using brackets {}|719,990|97|
|Using '' + |721,478|95|
|Using date.toString()|770,439|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,384,229|94|
|Using undefined assignment|712,472,493|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|276,691|87|
|NodeError|279,528|89|
|NodeError Range|276,112|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,313,493|94|
|Function returning explicitly undefined|1,302,578|94|
|Function returning implicitly undefined|1,335,906|95|
|Function returning string|1,314,343|95|
|Function returning integer|1,320,946|93|
|Function returning float|1,310,993|98|
|Function returning functions|1,269,979|97|
|Function returning arrow functions|1,312,597|94|
|Function returning empty object|1,297,293|97|
|Function returning empty array|1,334,056|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,849,031|96|
|using Array.includes (first item)|712,472,849|97|
|Using raw comparison|713,303,648|95|
|Using raw comparison (first item)|712,093,544|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,228,907|90|
|Using Object.getOwnPropertyNames()|48,440,852|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|707,913,499|97|
|Length = 10_000 - Array[length - 1]|708,101,175|97|
|Length = 1_000_000 - Array[length - 1]|704,581,181|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,566,343|92|
|Object.create({})|1,245,715|79|
|Cached Empty.prototype|712,900,267|98|
|Empty.prototype|1,289,125|72|
|Empty class|821,137|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,676,560|97|
|Using optional chain (obj.field?.field2) (undefined)|713,762,651|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,484,598|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|712,520,023|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|173,846,845|92|
|Using parseInt(x, 10) - big number (10 len)|11,856,742|97|
|Using + - small number (2 len)|713,416,500|98|
|Using + - big number (10 len)|712,090,744|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|703,939|75|
|Using ? operator to avoid rejection|751,230|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,627,560|91|
|Raw usage underscore usage|7,131,514|95|
|Manipulating private properties using #|2,541,527|93|
|Manipulating private properties using underscore(_)|698,266,520|94|
|Manipulating private properties using Symbol|699,388,135|94|
|Manipulating private properties using PrivateSymbol|29,715,766|94|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,992|94|
|Sort using first char|778,724|92|
|Sort using localeCompare|415,068|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,141|91|
|{...smallObject} - Total keys: 2|53,730,638|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,389|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,719|97|
|{ ...bigObject, ...anotherBigObject }|733|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,898,267|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,597,258|96|
|{ ...smallObject, ...anotherSmallObject }|13,368,462|94|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,649,491|95|
|Using backtick (`)|713,109,821|98|
|Using array.join|6,849,621|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,164,225|98|
|Using this|123,753,479|93|
