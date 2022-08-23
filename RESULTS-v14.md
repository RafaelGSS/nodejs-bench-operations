# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Tue Aug 23 2022 14:30:30 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|384|80|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,018|89|
|[True conditional] Using constructor name|278,229|85|
|[True conditional] Check if property is valid then instanceof |274,690|87|
|[False conditional] Using instanceof only|595,509,693|99|
|[False conditional] Using constructor name|596,564,888|95|
|[False conditional] Check if property is valid then instanceof |596,726,951|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,511|84|
|Intl.DateTimeFormat().format(new Date())|8,712|84|
|Reusing Intl.DateTimeFormat()|373,988|97|
|Format using date.get*|3,678,259|98|
|new Date() (Baseline)|7,463,855|93|
|Date.now() (Baseline)|14,813,016|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|689,154|94|
|Using brackets {}|692,299|95|
|Using '' + |709,431|94|
|Using date.toString()|760,243|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,345,263|96|
|Using undefined assignment|593,494,901|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|268,062|86|
|NodeError|271,839|84|
|NodeError Range|264,517|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,241,670|93|
|Function returning explicitly undefined|1,231,345|93|
|Function returning implicitly undefined|1,264,074|94|
|Function returning string|1,237,413|91|
|Function returning integer|1,206,124|93|
|Function returning float|1,242,911|92|
|Function returning functions|1,224,099|94|
|Function returning arrow functions|1,231,501|92|
|Function returning empty object|1,195,601|93|
|Function returning empty array|1,125,168|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,696,420|94|
|using Array.includes (first item)|593,800,963|92|
|Using raw comparison|594,895,076|95|
|Using raw comparison (first item)|594,296,290|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|597,837,337|98|
|Length = 10_000 - Array[length - 1]|597,589,631|97|
|Length = 1_000_000 - Array[length - 1]|596,046,559|95|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,322,792|94|
|Using optional chain (obj.field?.field2) (undefined)|595,166,783|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,351,218|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,061,416|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|683,210|79|
|Using ? operator to avoid rejection|722,296|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,746,535|92|
|Raw usage underscore usage|7,179,807|97|
|Manipulating private properties using #|2,636,691|96|
|Manipulating private properties using underscore(_)|589,336,031|95|
|Manipulating private properties using Symbol|587,931,067|98|
|Manipulating private properties using PrivateSymbol|35,583,801|96|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,302|94|
|Sort using first char|811,206|93|
|Sort using localeCompare|431,285|93|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,193,930|95|
|Using this|112,785,913|97|
