# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Thu Aug 11 2022 12:58:44 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|353|78|
|Array.from|14|38|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|289,256|90|
|[True conditional] Using constructor name|287,198|87|
|[True conditional] Check if property is valid then instanceof |286,672|86|
|[False conditional] Using instanceof only|714,095,361|97|
|[False conditional] Using constructor name|713,361,490|98|
|[False conditional] Check if property is valid then instanceof |713,112,655|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,723|80|
|Intl.DateTimeFormat().format(new Date())|7,753|80|
|Reusing Intl.DateTimeFormat()|427,718|97|
|Format using date.get*|3,600,519|94|
|new Date() (Baseline)|7,156,393|96|
|Date.now() (Baseline)|14,290,314|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|697,266|94|
|Using brackets {}|700,144|96|
|Using '' + |704,334|96|
|Using date.toString()|760,143|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,357,589|95|
|Using undefined assignment|712,297,932|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|277,127|89|
|NodeError|277,365|85|
|NodeError Range|276,348|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,312,688|95|
|Function returning explicitly undefined|1,282,078|97|
|Function returning implicitly undefined|1,322,691|94|
|Function returning string|1,313,356|92|
|Function returning integer|1,345,748|93|
|Function returning float|1,330,465|97|
|Function returning functions|1,288,966|93|
|Function returning arrow functions|1,310,259|94|
|Function returning empty object|1,307,541|96|
|Function returning empty array|1,322,941|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,546,581|97|
|using Array.includes (first item)|710,517,945|96|
|Using raw comparisson|712,570,148|97|
|Using raw comparisson (first item)|710,699,054|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|706,356,656|93|
|Length = 10_000 - Array[length - 1]|707,272,327|98|
|Length = 1_000_000 - Array[length - 1]|706,808,826|96|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,450,008|96|
|Using optional chain (obj.field?.field2) (undefined)|712,651,358|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,122,191|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,830,001|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|703,818|75|
|Using ? operator to avoid rejection|745,414|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,560,126|91|
|Raw usage underscore usage|7,092,509|91|
|Manipulating private properties using #|2,533,429|94|
|Manipulating private properties using underscore(_)|699,253,819|97|
|Manipulating private properties using Symbol|695,818,953|96|
|Manipulating private properties using PrivateSymbol|29,248,975|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|170,354|92|
|Sort using first char|721,503|92|
|Sort using localeCompare|423,162|90|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,881,588|96|
|Using this|118,787,814|93|
