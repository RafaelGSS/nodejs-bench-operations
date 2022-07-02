# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 27 2022 02:51:57 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|269,720|89|
|[True conditional] Using constructor name|272,468|87|
|[True conditional] Check if property is valid then instanceof |268,525|85|
|[False conditional] Using instanceof only|594,935,521|97|
|[False conditional] Using constructor name|593,927,455|98|
|[False conditional] Check if property is valid then instanceof |594,515,516|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|662,658|94|
|Using brackets {}|697,015|98|
|Using '' + |694,695|95|
|Using date.toString()|746,151|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,285,261|93|
|Using undefined assignment|593,469,413|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|259,795|85|
|NodeError|263,509|83|
|NodeError Range|258,572|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,285,826|96|
|Function returning explicitly undefined|1,269,604|96|
|Function returning implicitly undefined|1,296,223|97|
|Function returning string|1,284,062|97|
|Function returning integer|1,302,991|97|
|Function returning float|1,284,338|92|
|Function returning functions|1,213,873|96|
|Function returning arrow functions|1,277,993|96|
|Function returning empty object|1,303,444|96|
|Function returning empty array|1,271,906|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,813,836|95|
|using Array.includes (first item)|593,216,645|97|
|Using raw comparisson|595,237,207|96|
|Using raw comparisson (first item)|593,833,943|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|671,072|80|
|Using ? operator to avoid rejection|700,489|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,051,804|96|
|Raw usage underscore usage|7,330,771|95|
|Manipulating private properties using #|2,696,083|97|
|Manipulating private properties using underscore(_)|588,706,962|96|
|Manipulating private properties using Symbol|587,830,031|99|
|Manipulating private properties using PrivateSymbol|34,391,571|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|169,123|96|
|Sort using first char|814,897|92|
|Sort using localeCompare|417,387|95|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,262,798|93|
|Using this|113,459,652|98|
