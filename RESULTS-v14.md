# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Wed Aug 31 2022 11:58:07 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|320|79|
|Array.from|13|36|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|258,009|87|
|[True conditional] Using constructor name|253,589|87|
|[True conditional] Check if property is valid then instanceof |246,534|80|
|[False conditional] Using instanceof only|610,881,021|87|
|[False conditional] Using constructor name|622,791,186|90|
|[False conditional] Check if property is valid then instanceof |621,568,929|86|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,290|78|
|Intl.DateTimeFormat().format(new Date())|7,326|78|
|Reusing Intl.DateTimeFormat()|344,541|84|
|Format using date.get*|2,696,090|87|
|new Date() (Baseline)|6,183,511|89|
|Date.now() (Baseline)|12,426,069|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|615,138|88|
|Using brackets {}|613,390|92|
|Using '' + |597,993|94|
|Using date.toString()|638,542|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,982,519|90|
|Using undefined assignment|597,807,608|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,635|87|
|NodeError|237,006|86|
|NodeError Range|234,275|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,122,293|93|
|Function returning explicitly undefined|1,113,163|90|
|Function returning implicitly undefined|1,134,120|93|
|Function returning string|1,124,716|93|
|Function returning integer|1,100,327|92|
|Function returning float|1,114,722|91|
|Function returning functions|1,095,222|94|
|Function returning arrow functions|1,115,341|93|
|Function returning empty object|1,127,756|91|
|Function returning empty array|1,106,050|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,170,937|95|
|using Array.includes (first item)|593,558,497|94|
|Using raw comparison|594,867,823|96|
|Using raw comparison (first item)|594,450,634|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|595,210,667|92|
|Length = 10_000 - Array[length - 1]|599,393,407|90|
|Length = 1_000_000 - Array[length - 1]|600,410,758|94|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|599,688,584|92|
|Using optional chain (obj.field?.field2) (undefined)|603,738,088|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|599,144,908|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,563,221|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|607,201|74|
|Using ? operator to avoid rejection|635,755|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,032,501|91|
|Raw usage underscore usage|5,984,113|92|
|Manipulating private properties using #|2,091,690|92|
|Manipulating private properties using underscore(_)|596,505,562|86|
|Manipulating private properties using Symbol|608,994,316|92|
|Manipulating private properties using PrivateSymbol|25,617,866|90|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|151,337|88|
|Sort using first char|649,811|92|
|Sort using localeCompare|375,081|86|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|596,627,273|93|
|Using backtick (`)|599,983,135|93|
|Using array.join|5,749,708|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,437,444|87|
|Using this|108,373,743|91|
