# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Tue Jul 05 2022 18:38:24 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|467|87|
|Array.from|15|41|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|278,420|89|
|[True conditional] Using constructor name|278,066|90|
|[True conditional] Check if property is valid then instanceof |275,582|85|
|[False conditional] Using instanceof only|592,912,169|98|
|[False conditional] Using constructor name|594,480,367|96|
|[False conditional] Check if property is valid then instanceof |594,711,012|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,448|85|
|Intl.DateTimeFormat().format(new Date())|9,396|81|
|Reusing Intl.DateTimeFormat()|368,584|99|
|Format using date.get*|3,679,678|95|
|new Date() (Baseline)|7,168,955|93|
|Date.now() (Baseline)|15,093,447|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|640,497|93|
|Using brackets {}|665,652|94|
|Using '' + |628,890|97|
|Using date.toString()|719,314|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,321,026|92|
|Using undefined assignment|593,162,741|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|267,059|85|
|NodeError|268,406|85|
|NodeError Range|261,862|82|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,324,642|96|
|Function returning explicitly undefined|1,314,772|90|
|Function returning implicitly undefined|1,335,475|92|
|Function returning string|1,320,984|94|
|Function returning integer|1,348,181|99|
|Function returning float|1,330,662|97|
|Function returning functions|1,265,339|92|
|Function returning arrow functions|1,310,360|95|
|Function returning empty object|1,325,077|97|
|Function returning empty array|1,334,130|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,104,395|96|
|using Array.includes (first item)|593,319,770|97|
|Using raw comparisson|594,585,420|97|
|Using raw comparisson (first item)|594,252,307|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|596,986,435|95|
|Length = 10_000 - Array[length - 1]|595,747,382|94|
|Length = 1_000_000 - Array[length - 1]|598,080,469|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|676,712|78|
|Using ? operator to avoid rejection|716,496|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,952,521|97|
|Raw usage underscore usage|7,372,350|96|
|Manipulating private properties using #|2,694,029|94|
|Manipulating private properties using underscore(_)|589,040,053|100|
|Manipulating private properties using Symbol|588,094,362|96|
|Manipulating private properties using PrivateSymbol|33,900,832|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,566|94|
|Sort using first char|831,289|96|
|Sort using localeCompare|427,137|95|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,785,165|93|
|Using this|113,257,160|98|
