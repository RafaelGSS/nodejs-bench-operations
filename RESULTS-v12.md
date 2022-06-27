# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Mon Jun 27 2022 02:42:25 GMT+0000 (Coordinated Universal Time)


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|562,481|87|
|Using brackets {}|583,034|88|
|Using '' + |549,096|88|
|Using date.toString()|581,669|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,041,606|92|
|Using undefined assignment|592,560,840|92|

## Node.js Error

[Function: createTableHeader]
|Error|252,469|89|
|NodeError|262,793|89|
|NodeError Range|269,125|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,255,883|88|
|Function returning explicitly undefined|1,167,181|87|
|Function returning implicitly undefined|1,209,773|83|
|Function returning string|1,216,187|85|
|Function returning integer|1,222,057|88|
|Function returning float|1,150,849|90|
|Function returning functions|1,191,260|87|
|Function returning arrow functions|1,190,670|88|
|Function returning empty object|1,223,920|88|
|Function returning empty array|1,157,175|93|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,796,964|89|
|using Array.includes (first item)|590,871,302|90|
|Using raw comparisson|633,531,222|89|
|Using raw comparisson (first item)|625,945,116|89|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,555,273|86|
|Raw usage underscore usage|5,971,330|82|
|Manipulating private properties using #|2,296,417|86|
|Manipulating private properties using underscore(_)|630,813,671|88|
|Manipulating private properties using Symbol|2,502,790|5|
|Manipulating private properties using PrivateSymbol|23,449,044|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|150,643|85|
|Sort using first char|684,148|89|
|Sort using localeCompare|374,286|88|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,307,586|88|
|Using this|114,411,975|88|
