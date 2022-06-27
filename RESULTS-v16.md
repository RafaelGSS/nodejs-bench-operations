# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Mon Jun 27 2022 02:12:20 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|176,313|54|
|[True conditional] Using constructor name|133,965|89|
|[True conditional] Check if property is valid then instanceof |140,023|91|
|[False conditional] Using instanceof only|748,472,711|92|
|[False conditional] Using constructor name|749,122,438|94|
|[False conditional] Check if property is valid then instanceof |749,532,059|91|

## date-string-coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|637,458|94|
|Using brackets {}|596,337|88|
|Using '' + |641,376|85|
|Using date.toString()|694,155|92|

## deleting-properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,217,650|89|
|Using undefined assignment|730,154,026|89|

## error

|name|ops/sec|samples|
|-|-|-|
|Error|176,198|52|
|NodeError|133,384|89|
|NodeError Range|136,210|89|

## function-return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,174,122|92|
|Function returning explicitly undefined|1,157,581|92|
|Function returning implicitly undefined|1,166,524|90|
|Function returning string|1,093,751|90|
|Function returning integer|1,160,906|89|
|Function returning float|1,143,396|93|
|Function returning functions|1,129,223|90|
|Function returning arrow functions|1,133,181|93|
|Function returning empty object|1,168,952|90|
|Function returning empty array|1,150,928|90|

## includes-vs-raw-comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|743,513,825|94|
|using Array.includes (first item)|749,126,725|95|
|Using raw comparisson|748,064,892|93|
|Using raw comparisson (first item)|731,316,495|90|

## possible-undefined-function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|637,137|74|
|Using ? operator to avoid rejection|764,633|78|

## private-property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,648,551|92|
|Raw usage underscore usage|6,229,854|94|
|Manipulating private properties using #|2,335,882|93|
|Manipulating private properties using underscore(_)|702,708,515|91|
|Manipulating private properties using Symbol|696,057,111|92|
|Manipulating private properties using PrivateSymbol|28,433,899|86|

## sort-map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|168,883|92|
|Sort using first char|749,058|91|
|Sort using localeCompare|389,911|87|

## stream-readable

|name|ops/sec|samples|
|-|-|-|
streams.Readable reading 1e3 * some data x 1,399 ops/sec ±17.93% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 377 ops/sec ±1.05% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data

## stream-writable

|name|ops/sec|samples|
|-|-|-|
streams.Writable writing 1e3 * some data x 2,277 ops/sec ±0.69% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 754 ops/sec ±14.85% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data

## super-vs-this

|name|ops/sec|samples|
|-|-|-|
|Using super|171,091,699|92|
|Using this|172,738,896|90|
