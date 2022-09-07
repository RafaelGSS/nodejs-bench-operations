# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Wed Sep 07 2022 15:30:31 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|405|85|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|282,677|90|
|[True conditional] Using constructor name|280,968|87|
|[True conditional] Check if property is valid then instanceof |279,535|84|
|[False conditional] Using instanceof only|594,015,725|97|
|[False conditional] Using constructor name|593,524,391|98|
|[False conditional] Check if property is valid then instanceof |594,303,216|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,486|84|
|Intl.DateTimeFormat().format(new Date())|9,397|85|
|Reusing Intl.DateTimeFormat()|374,776|92|
|Format using date.get*|3,557,269|97|
|new Date() (Baseline)|6,578,096|96|
|Date.now() (Baseline)|15,000,773|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|687,683|93|
|Using brackets {}|704,282|97|
|Using '' + |707,538|96|
|Using date.toString()|762,683|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,344,639|95|
|Using undefined assignment|592,208,353|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|269,717|86|
|NodeError|272,450|85|
|NodeError Range|267,624|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,253,878|90|
|Function returning explicitly undefined|1,256,957|94|
|Function returning implicitly undefined|1,113,748|92|
|Function returning string|1,188,497|93|
|Function returning integer|1,288,793|95|
|Function returning float|1,230,455|93|
|Function returning functions|1,178,440|91|
|Function returning arrow functions|1,264,464|92|
|Function returning empty object|1,232,470|91|
|Function returning empty array|1,258,706|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,498,912|95|
|using Array.includes (first item)|593,771,413|97|
|Using raw comparison|594,893,152|96|
|Using raw comparison (first item)|594,121,369|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|62,852,581|93|
|Using Object.getOwnPropertyNames()|64,552,108|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|598,096,433|97|
|Length = 10_000 - Array[length - 1]|596,342,411|96|
|Length = 1_000_000 - Array[length - 1]|596,018,413|98|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,087,827|97|
|Using optional chain (obj.field?.field2) (undefined)|593,385,441|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,917,187|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,571,358|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|685,366|80|
|Using ? operator to avoid rejection|722,235|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,780,506|95|
|Raw usage underscore usage|7,243,395|96|
|Manipulating private properties using #|2,648,607|94|
|Manipulating private properties using underscore(_)|589,854,379|97|
|Manipulating private properties using Symbol|588,786,621|95|
|Manipulating private properties using PrivateSymbol|35,925,429|91|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,359|90|
|Sort using first char|825,229|96|
|Sort using localeCompare|436,569|96|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,187,382|97|
|Using backtick (`)|593,521,787|94|
|Using array.join|9,159,666|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,478,001|94|
|Using this|113,340,570|93|
