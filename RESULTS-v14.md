# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Wed Aug 10 2022 13:08:02 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|351|80|
|Array.from|16|43|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|324,705|93|
|[True conditional] Using constructor name|321,959|91|
|[True conditional] Check if property is valid then instanceof |170,344|48|
|[False conditional] Using instanceof only|222,234,891|88|
|[False conditional] Using constructor name|222,446,678|89|
|[False conditional] Check if property is valid then instanceof |223,672,784|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,414|77|
|Intl.DateTimeFormat().format(new Date())|9,552|79|
|Reusing Intl.DateTimeFormat()|435,304|96|
|Format using date.get*|3,674,206|87|
|new Date() (Baseline)|6,869,635|96|
|Date.now() (Baseline)|15,215,607|87|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|710,190|89|
|Using brackets {}|722,823|97|
|Using '' + |792,885|90|
|Using date.toString()|874,927|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,747,469|97|
|Using undefined assignment|810,089,974|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|299,395|84|
|NodeError|269,573|85|
|NodeError Range|237,057|76|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,497,977|95|
|Function returning explicitly undefined|1,499,670|95|
|Function returning implicitly undefined|1,530,341|95|
|Function returning string|1,442,507|92|
|Function returning integer|1,506,086|92|
|Function returning float|1,525,057|96|
|Function returning functions|1,431,196|97|
|Function returning arrow functions|1,324,225|89|
|Function returning empty object|1,327,585|96|
|Function returning empty array|1,440,536|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|731,372,210|89|
|using Array.includes (first item)|711,565,543|96|
|Using raw comparisson|721,197,529|92|
|Using raw comparisson (first item)|713,348,051|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|720,748,032|90|
|Length = 10_000 - Array[length - 1]|709,959,874|97|
|Length = 1_000_000 - Array[length - 1]|708,853,186|96|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|807,709,358|96|
|Using optional chain (obj.field?.field2) (undefined)|695,902,058|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|741,554,303|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|811,169,926|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|770,433|74|
|Using ? operator to avoid rejection|775,584|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,872,832|91|
|Raw usage underscore usage|6,129,221|74|
|Manipulating private properties using #|2,613,550|87|
|Manipulating private properties using underscore(_)|642,267,887|89|
|Manipulating private properties using Symbol|620,430,483|83|
|Manipulating private properties using PrivateSymbol|32,633,860|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|195,533|94|
|Sort using first char|873,810|94|
|Sort using localeCompare|459,068|94|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,935,382|80|
|Using this|125,635,115|89|
