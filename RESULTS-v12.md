# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Fri Jul 15 2022 20:13:18 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|349|83|
|Array.from|7|21|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,706|81|
|Intl.DateTimeFormat().format(new Date())|5,377|75|
|Reusing Intl.DateTimeFormat()|509,664|86|
|Format using date.get*|3,563,809|84|
|new Date() (Baseline)|8,318,382|89|
|Date.now() (Baseline)|17,511,549|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|654,510|91|
|Using brackets {}|593,793|81|
|Using '' + |573,841|87|
|Using date.toString()|663,279|84|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,281,676|86|
|Using undefined assignment|881,380,496|85|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|268,941|84|
|NodeError|267,679|88|
|NodeError Range|256,498|81|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,349,009|85|
|Function returning explicitly undefined|1,306,843|82|
|Function returning implicitly undefined|1,403,244|84|
|Function returning string|1,320,501|86|
|Function returning integer|1,203,296|85|
|Function returning float|1,179,027|89|
|Function returning functions|1,093,803|88|
|Function returning arrow functions|1,114,249|88|
|Function returning empty object|1,166,612|81|
|Function returning empty array|1,099,000|85|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|734,690,473|90|
|using Array.includes (first item)|760,070,325|88|
|Using raw comparisson|766,916,566|87|
|Using raw comparisson (first item)|796,870,245|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|786,897,681|91|
|Length = 10_000 - Array[length - 1]|744,740,628|90|
|Length = 1_000_000 - Array[length - 1]|746,434,079|89|



## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,443,706|87|
|Raw usage underscore usage|5,593,962|83|
|Manipulating private properties using #|2,012,296|88|
|Manipulating private properties using underscore(_)|577,727,718|84|
|Manipulating private properties using Symbol|551,579,503|81|
|Manipulating private properties using PrivateSymbol|19,355,497|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|130,256|85|
|Sort using first char|586,544|83|
|Sort using localeCompare|336,617|86|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,383,581|88|
|Using this|143,189,755|87|
