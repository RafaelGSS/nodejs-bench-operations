# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Mon Jun 27 2022 02:12:21 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,515|57|
|[True conditional] Using constructor name|137,772|86|
|[True conditional] Check if property is valid then instanceof |137,051|86|
|[False conditional] Using instanceof only|645,794,969|93|
|[False conditional] Using constructor name|654,963,528|83|
|[False conditional] Check if property is valid then instanceof |626,493,886|90|

## date-string-coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|558,872|89|
|Using brackets {}|587,326|90|
|Using '' + |570,015|91|
|Using date.toString()|628,675|89|

## deleting-properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,051,112|89|
|Using undefined assignment|615,164,494|93|

## error

|name|ops/sec|samples|
|-|-|-|
|Error|169,463|57|
|NodeError|130,889|88|
|NodeError Range|127,449|92|

## function-return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,284,898|91|
|Function returning explicitly undefined|1,324,580|91|
|Function returning implicitly undefined|1,333,900|92|
|Function returning string|1,316,434|94|
|Function returning integer|1,322,822|89|
|Function returning float|1,321,962|89|
|Function returning functions|1,286,019|90|
|Function returning arrow functions|1,302,928|91|
|Function returning empty object|1,331,747|94|
|Function returning empty array|1,334,953|92|

## includes-vs-raw-comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|636,126,025|88|
|using Array.includes (first item)|627,249,515|89|
|Using raw comparisson|643,640,240|89|
|Using raw comparisson (first item)|643,672,099|86|

## possible-undefined-function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|530,488|77|
|Using ? operator to avoid rejection|576,770|79|

## private-property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|223,850,936|88|
|Raw usage underscore usage|229,105,886|91|
|Manipulating private properties using #|159,986,230|88|
|Manipulating private properties using underscore(_)|145,431,191|90|
|Manipulating private properties using Symbol|137,385,219|89|
|Manipulating private properties using PrivateSymbol|25,867,702|86|

## sort-map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|151,313|90|
|Sort using first char|665,286|89|
|Sort using localeCompare|639,124|86|

## stream-readable

|name|ops/sec|samples|
|-|-|-|
streams.Readable reading 1e3 * some data x 1,642 ops/sec ±1.39% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 427 ops/sec ±1.80% (80 runs sampled)
Fastest is streams.Readable reading 1e3 * some data

## stream-writable

|name|ops/sec|samples|
|-|-|-|
streams.Writable writing 1e3 * some data x 3,091 ops/sec ±1.17% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 786 ops/sec ±16.66% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data

## super-vs-this

|name|ops/sec|samples|
|-|-|-|
|Using super|140,232,371|89|
|Using this|142,922,517|92|
