# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Fri Aug 12 2022 19:23:51 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|349|84|
|Array.from|14|39|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|290,143|92|
|[True conditional] Using constructor name|286,765|86|
|[True conditional] Check if property is valid then instanceof |285,778|86|
|[False conditional] Using instanceof only|713,824,177|90|
|[False conditional] Using constructor name|714,360,551|98|
|[False conditional] Check if property is valid then instanceof |715,239,044|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,849|84|
|Intl.DateTimeFormat().format(new Date())|8,747|83|
|Reusing Intl.DateTimeFormat()|379,013|87|
|Format using date.get*|3,703,414|96|
|new Date() (Baseline)|7,187,447|98|
|Date.now() (Baseline)|14,282,720|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|714,678|89|
|Using brackets {}|728,300|94|
|Using '' + |726,253|98|
|Using date.toString()|777,144|88|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,392,633|92|
|Using undefined assignment|712,289,807|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|275,399|86|
|NodeError|277,899|89|
|NodeError Range|275,110|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,348,244|96|
|Function returning explicitly undefined|1,327,871|92|
|Function returning implicitly undefined|1,327,566|94|
|Function returning string|1,311,394|94|
|Function returning integer|1,372,729|94|
|Function returning float|1,323,950|99|
|Function returning functions|1,297,736|95|
|Function returning arrow functions|1,336,491|95|
|Function returning empty object|1,346,596|97|
|Function returning empty array|1,347,666|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,817,710|96|
|using Array.includes (first item)|712,365,336|99|
|Using raw comparisson|713,742,137|98|
|Using raw comparisson (first item)|713,308,957|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|708,862,398|95|
|Length = 10_000 - Array[length - 1]|709,253,010|94|
|Length = 1_000_000 - Array[length - 1]|707,595,679|98|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,901,781|96|
|Using optional chain (obj.field?.field2) (undefined)|712,818,786|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,751,517|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,387,504|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|721,071|73|
|Using ? operator to avoid rejection|780,398|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,671,212|93|
|Raw usage underscore usage|7,187,629|96|
|Manipulating private properties using #|2,551,565|97|
|Manipulating private properties using underscore(_)|700,762,362|95|
|Manipulating private properties using Symbol|701,444,650|95|
|Manipulating private properties using PrivateSymbol|30,276,946|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,621|95|
|Sort using first char|789,368|91|
|Sort using localeCompare|428,720|97|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,392,541|95|
|Using this|131,563,492|91|
