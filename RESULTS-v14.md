# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Fri Oct 28 2022 14:45:47 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|280|76|
|Array.from|11|31|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|218,841|83|
|[True conditional] Using constructor name|223,347|88|
|[True conditional] Check if property is valid then instanceof |223,670|85|
|[False conditional] Using instanceof only|691,317,956|91|
|[False conditional] Using constructor name|686,032,578|88|
|[False conditional] Check if property is valid then instanceof |682,495,232|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,608|76|
|Intl.DateTimeFormat().format(new Date())|4,880|79|
|Reusing Intl.DateTimeFormat()|349,954|85|
|Format using date.get*|2,524,387|88|
|new Date() (Baseline)|4,862,108|87|
|Date.now() (Baseline)|11,888,580|82|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|514,604|90|
|Using brackets {}|520,723|88|
|Using '' + |503,827|89|
|Using date.toString()|554,023|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,714,426|89|
|Using undefined assignment|694,077,221|91|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|213,638|87|
|NodeError|214,559|84|
|NodeError Range|214,307|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,006,823|89|
|Function returning explicitly undefined|966,521|91|
|Function returning implicitly undefined|1,024,056|89|
|Function returning string|1,001,604|84|
|Function returning integer|990,267|86|
|Function returning float|1,047,479|87|
|Function returning functions|987,057|90|
|Function returning arrow functions|1,015,639|89|
|Function returning empty object|1,030,059|87|
|Function returning empty array|1,017,761|87|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|689,036,629|86|
|using Array.includes (first item)|680,650,730|89|
|Using raw comparison|694,787,995|91|
|Using raw comparison (first item)|682,089,264|89|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|38,559,979|82|
|Using Object.getOwnPropertyNames()|33,496,754|82|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|693,013,271|91|
|Length = 10_000 - Array[length - 1]|680,255,388|90|
|Length = 1_000_000 - Array[length - 1]|699,644,829|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,617,739|80|
|Object.create({})|978,222|75|
|Cached Empty.prototype|678,589,640|91|
|Empty.prototype|1,010,657|67|
|Empty class|663,850|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|690,217,735|88|
|Using optional chain (obj.field?.field2) (undefined)|689,806,773|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|679,486,530|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|680,822,781|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,839,907|88|
|Using parseInt(x, 10) - big number (10 len)|9,493,069|87|
|Using + - small number (2 len)|687,708,571|89|
|Using + - big number (10 len)|689,516,345|86|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|526,765|72|
|Using ? operator to avoid rejection|583,620|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|5,999,999|87|
|Raw usage underscore usage|4,914,442|89|
|Manipulating private properties using #|1,781,975|86|
|Manipulating private properties using underscore(_)|552,032,534|90|
|Manipulating private properties using Symbol|542,457,113|85|
|Manipulating private properties using PrivateSymbol|22,791,243|87|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|123,754|88|
|Sort using first char|552,790|90|
|Sort using localeCompare|331,486|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|828|86|
|{...smallObject} - Total keys: 2|44,431,153|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,031|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,693|84|
|{ ...bigObject, ...anotherBigObject }|548|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,608,409|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,880,633|88|
|{ ...smallObject, ...anotherSmallObject }|10,941,965|90|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|686,153,449|89|
|Using backtick (`)|684,373,660|90|
|Using array.join|5,053,129|86|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|12,450,560|88|
|Using this|112,661,765|84|
