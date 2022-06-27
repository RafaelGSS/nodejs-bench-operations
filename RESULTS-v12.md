# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Mon Jun 27 2022 02:51:54 GMT+0000 (Coordinated Universal Time)


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|527,817|94|
|Using brackets {}|531,097|97|
|Using '' + |531,688|91|
|Using date.toString()|584,595|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,023,406|97|
|Using undefined assignment|587,129,815|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|254,567|92|
|NodeError|254,354|93|
|NodeError Range|254,667|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,129,932|90|
|Function returning explicitly undefined|1,113,713|92|
|Function returning implicitly undefined|1,140,432|90|
|Function returning string|1,138,106|97|
|Function returning integer|1,140,365|94|
|Function returning float|1,127,269|93|
|Function returning functions|1,087,480|95|
|Function returning arrow functions|1,066,104|90|
|Function returning empty object|1,074,199|95|
|Function returning empty array|1,114,481|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|581,080,816|95|
|using Array.includes (first item)|588,081,586|96|
|Using raw comparisson|589,170,203|95|
|Using raw comparisson (first item)|589,800,960|93|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,761,869|91|
|Raw usage underscore usage|6,073,004|94|
|Manipulating private properties using #|2,054,509|91|
|Manipulating private properties using underscore(_)|31,018,003|81|
|Manipulating private properties using Symbol|570,525,298|92|
|Manipulating private properties using PrivateSymbol|21,520,902|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|138,051|93|
|Sort using first char|619,163|95|
|Sort using localeCompare|348,288|93|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,905,762|89|
|Using this|105,022,132|92|
