# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Mon Jun 27 2022 02:51:53 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|202,574|60|
|[True conditional] Using constructor name|158,448|97|
|[True conditional] Check if property is valid then instanceof |160,674|91|
|[False conditional] Using instanceof only|712,604,888|95|
|[False conditional] Using constructor name|713,909,838|95|
|[False conditional] Check if property is valid then instanceof |714,604,901|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|685,455|96|
|Using brackets {}|692,455|94|
|Using '' + |684,529|97|
|Using date.toString()|743,589|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,514,339|96|
|Using undefined assignment|711,875,451|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|197,487|55|
|NodeError|156,263|94|
|NodeError Range|156,672|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,372,940|99|
|Function returning explicitly undefined|1,356,098|99|
|Function returning implicitly undefined|1,391,706|99|
|Function returning string|1,378,502|98|
|Function returning integer|1,359,361|97|
|Function returning float|1,378,608|99|
|Function returning functions|1,354,671|99|
|Function returning arrow functions|1,368,655|97|
|Function returning empty object|1,380,879|98|
|Function returning empty array|1,361,181|98|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,624,852|97|
|using Array.includes (first item)|712,045,683|96|
|Using raw comparisson|713,664,341|98|
|Using raw comparisson (first item)|712,130,808|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|790,780|76|
|Using ? operator to avoid rejection|871,925|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,783,840|95|
|Raw usage underscore usage|7,314,555|99|
|Manipulating private properties using #|2,681,784|94|
|Manipulating private properties using underscore(_)|704,066,010|93|
|Manipulating private properties using Symbol|703,332,654|97|
|Manipulating private properties using PrivateSymbol|26,939,107|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|175,485|96|
|Sort using first char|784,241|91|
|Sort using localeCompare|436,450|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,654 ops/sec ±14.11% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 405 ops/sec ±0.41% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,929 ops/sec ±0.63% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 770 ops/sec ±18.77% (56 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|137,029,403|93|
|Using this|137,761,181|97|
