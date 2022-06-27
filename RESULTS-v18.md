# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Mon Jun 27 2022 02:42:24 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|187,097|55|
|[True conditional] Using constructor name|145,324|92|
|[True conditional] Check if property is valid then instanceof |147,371|95|
|[False conditional] Using instanceof only|710,183,370|96|
|[False conditional] Using constructor name|710,847,962|98|
|[False conditional] Check if property is valid then instanceof |711,654,549|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|641,616|97|
|Using brackets {}|669,714|99|
|Using '' + |676,149|94|
|Using date.toString()|732,367|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,406,427|93|
|Using undefined assignment|709,994,714|99|

## Node.js Error

[Function: createTableHeader]
|Error|186,531|60|
|NodeError|145,336|91|
|NodeError Range|147,857|98|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,494,324|97|
|Function returning explicitly undefined|1,479,052|97|
|Function returning implicitly undefined|1,507,966|92|
|Function returning string|1,480,411|95|
|Function returning integer|1,452,086|90|
|Function returning float|1,493,972|97|
|Function returning functions|1,457,927|99|
|Function returning arrow functions|1,474,609|97|
|Function returning empty object|1,498,064|98|
|Function returning empty array|1,492,742|97|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|346,763,744|47|
|using Array.includes (first item)|218,304,938|90|
|Using raw comparisson|220,160,628|91|
|Using raw comparisson (first item)|219,839,078|89|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|185,857,513|74|
|Raw usage underscore usage|255,588,275|95|
|Manipulating private properties using #|173,877,717|92|
|Manipulating private properties using underscore(_)|143,492,450|89|
|Manipulating private properties using Symbol|144,702,528|91|
|Manipulating private properties using PrivateSymbol|30,251,302|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,753|97|
|Sort using first char|755,455|98|
|Sort using localeCompare|716,059|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,745 ops/sec ±0.62% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 424 ops/sec ±0.48% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,090 ops/sec ±0.39% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,063 ops/sec ±15.92% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,879,038|94|
|Using this|130,491,913|93|
