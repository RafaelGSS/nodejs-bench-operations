# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Sat Jul 02 2022 16:43:10 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|473|88|
|Array.from|15|42|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|281,153|91|
|[True conditional] Using constructor name|277,951|87|
|[True conditional] Check if property is valid then instanceof |278,010|86|
|[False conditional] Using instanceof only|593,253,847|96|
|[False conditional] Using constructor name|595,047,240|94|
|[False conditional] Check if property is valid then instanceof |594,772,174|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,495|86|
|Intl.DateTimeFormat().format(new Date())|8,740|85|
|Reusing Intl.DateTimeFormat()|391,475|99|
|Format using date.get*|3,672,022|94|
|new Date() (Baseline)|7,302,601|94|
|Date.now() (Baseline)|14,962,554|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,130|93|
|Using brackets {}|667,923|96|
|Using '' + |647,635|95|
|Using date.toString()|756,301|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,358,903|89|
|Using undefined assignment|593,142,724|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|262,490|88|
|NodeError|267,088|83|
|NodeError Range|263,132|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,330,340|91|
|Function returning explicitly undefined|1,322,189|95|
|Function returning implicitly undefined|1,349,714|94|
|Function returning string|1,326,823|98|
|Function returning integer|1,361,437|94|
|Function returning float|1,335,373|99|
|Function returning functions|1,300,850|96|
|Function returning arrow functions|1,308,868|98|
|Function returning empty object|1,330,463|92|
|Function returning empty array|1,344,395|99|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,098,297|92|
|using Array.includes (first item)|593,094,854|97|
|Using raw comparisson|594,410,192|97|
|Using raw comparisson (first item)|594,801,091|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|682,592|79|
|Using ? operator to avoid rejection|718,251|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,039,260|91|
|Raw usage underscore usage|7,375,203|97|
|Manipulating private properties using #|2,688,267|92|
|Manipulating private properties using underscore(_)|589,575,604|96|
|Manipulating private properties using Symbol|588,579,442|94|
|Manipulating private properties using PrivateSymbol|34,431,094|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,446|98|
|Sort using first char|833,828|92|
|Sort using localeCompare|433,743|96|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,622,230|94|
|Using this|113,816,688|99|
