# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Fri Jul 15 2022 20:13:14 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|242|71|
|Array.from|12|33|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|238,249|86|
|[True conditional] Using constructor name|241,793|88|
|[True conditional] Check if property is valid then instanceof |239,994|85|
|[False conditional] Using instanceof only|589,107,144|95|
|[False conditional] Using constructor name|591,097,527|95|
|[False conditional] Check if property is valid then instanceof |591,552,559|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,610|81|
|Intl.DateTimeFormat().format(new Date())|6,376|80|
|Reusing Intl.DateTimeFormat()|342,554|90|
|Format using date.get*|2,967,751|93|
|new Date() (Baseline)|5,837,733|93|
|Date.now() (Baseline)|11,836,297|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|582,835|94|
|Using brackets {}|600,792|96|
|Using '' + |599,834|96|
|Using date.toString()|644,284|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,942,012|94|
|Using undefined assignment|589,534,731|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|228,854|93|
|NodeError|235,029|87|
|NodeError Range|228,065|84|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,053,449|96|
|Function returning explicitly undefined|1,041,737|93|
|Function returning implicitly undefined|1,063,818|95|
|Function returning string|1,064,534|93|
|Function returning integer|1,085,842|98|
|Function returning float|1,077,335|94|
|Function returning functions|1,038,069|89|
|Function returning arrow functions|1,031,332|97|
|Function returning empty object|1,064,817|97|
|Function returning empty array|1,071,969|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,536,969|97|
|using Array.includes (first item)|589,537,501|93|
|Using raw comparisson|590,085,232|97|
|Using raw comparisson (first item)|590,336,387|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|588,748,775|97|
|Length = 10_000 - Array[length - 1]|586,865,151|98|
|Length = 1_000_000 - Array[length - 1]|586,491,565|97|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|589,896,299|95|
|Using optional chain (obj.field?.field2) (undefined)|590,147,774|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|589,927,241|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|586,117,252|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|597,728|73|
|Using ? operator to avoid rejection|618,333|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,028,286|93|
|Raw usage underscore usage|5,713,091|96|
|Manipulating private properties using #|2,038,516|91|
|Manipulating private properties using underscore(_)|576,632,238|93|
|Manipulating private properties using Symbol|574,739,225|91|
|Manipulating private properties using PrivateSymbol|24,459,050|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|144,915|92|
|Sort using first char|618,287|94|
|Sort using localeCompare|366,806|89|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,063,268|97|
|Using this|103,061,378|94|
