# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 27 2022 02:42:20 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|285,368|91|
|[True conditional] Using constructor name|286,031|86|
|[True conditional] Check if property is valid then instanceof |281,608|85|
|[False conditional] Using instanceof only|714,527,375|98|
|[False conditional] Using constructor name|714,490,767|96|
|[False conditional] Check if property is valid then instanceof |714,168,279|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|693,879|97|
|Using brackets {}|704,025|97|
|Using '' + |701,679|97|
|Using date.toString()|761,152|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,346,883|96|
|Using undefined assignment|713,659,151|96|

## Node.js Error

[Function: createTableHeader]
|Error|277,007|87|
|NodeError|277,531|85|
|NodeError Range|272,305|84|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,390,015|97|
|Function returning explicitly undefined|1,384,201|94|
|Function returning implicitly undefined|1,380,259|91|
|Function returning string|1,389,065|95|
|Function returning integer|1,375,315|93|
|Function returning float|1,401,091|95|
|Function returning functions|1,368,987|96|
|Function returning arrow functions|1,356,384|96|
|Function returning empty object|1,405,761|96|
|Function returning empty array|1,383,998|93|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,420,265|96|
|using Array.includes (first item)|713,147,482|97|
|Using raw comparisson|714,377,534|97|
|Using raw comparisson (first item)|712,244,395|96|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,541,125|92|
|Raw usage underscore usage|7,082,096|96|
|Manipulating private properties using #|2,526,008|96|
|Manipulating private properties using underscore(_)|701,316,753|97|
|Manipulating private properties using Symbol|700,581,084|94|
|Manipulating private properties using PrivateSymbol|30,223,714|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,490|92|
|Sort using first char|773,914|95|
|Sort using localeCompare|427,809|97|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,161,084|93|
|Using this|129,881,822|94|
