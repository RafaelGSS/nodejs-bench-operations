# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Wed Aug 10 2022 13:08:01 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|284|75|
|Array.from|6|19|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,385|85|
|Intl.DateTimeFormat().format(new Date())|7,354|79|
|Reusing Intl.DateTimeFormat()|424,106|87|
|Format using date.get*|3,364,192|95|
|new Date() (Baseline)|7,009,266|90|
|Date.now() (Baseline)|13,780,665|92|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|533,820|92|
|Using brackets {}|548,304|93|
|Using '' + |537,691|93|
|Using date.toString()|571,569|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,018,888|93|
|Using undefined assignment|590,860,288|83|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|255,964|89|
|NodeError|253,712|89|
|NodeError Range|256,319|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,173,529|87|
|Function returning explicitly undefined|1,155,845|88|
|Function returning implicitly undefined|1,217,155|87|
|Function returning string|1,182,418|88|
|Function returning integer|1,210,994|90|
|Function returning float|1,171,322|90|
|Function returning functions|1,131,460|87|
|Function returning arrow functions|1,129,107|94|
|Function returning empty object|1,064,600|91|
|Function returning empty array|1,133,268|87|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,717,550|95|
|using Array.includes (first item)|589,495,590|92|
|Using raw comparisson|605,868,096|91|
|Using raw comparisson (first item)|604,819,495|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|609,645,033|92|
|Length = 10_000 - Array[length - 1]|608,908,975|93|
|Length = 1_000_000 - Array[length - 1]|604,174,559|93|



## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,766,082|91|
|Raw usage underscore usage|6,054,100|93|
|Manipulating private properties using #|2,075,188|95|
|Manipulating private properties using underscore(_)|31,046,049|86|
|Manipulating private properties using Symbol|581,555,576|92|
|Manipulating private properties using PrivateSymbol|21,785,653|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,386|93|
|Sort using first char|593,917|91|
|Sort using localeCompare|336,360|91|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,091,379|95|
|Using this|107,489,248|94|
