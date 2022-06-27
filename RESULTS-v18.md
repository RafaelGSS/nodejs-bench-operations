# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Mon Jun 27 2022 02:51:59 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,650|54|
|[True conditional] Using constructor name|131,282|93|
|[True conditional] Check if property is valid then instanceof |132,454|94|
|[False conditional] Using instanceof only|593,854,572|96|
|[False conditional] Using constructor name|593,320,405|96|
|[False conditional] Check if property is valid then instanceof |593,018,071|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|715,529|98|
|Using brackets {}|706,580|95|
|Using '' + |711,211|97|
|Using date.toString()|780,816|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,445,987|95|
|Using undefined assignment|592,919,187|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|161,450|53|
|NodeError|128,007|93|
|NodeError Range|128,214|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,441,433|95|
|Function returning explicitly undefined|1,424,446|95|
|Function returning implicitly undefined|1,440,823|90|
|Function returning string|1,429,180|96|
|Function returning integer|1,386,694|91|
|Function returning float|1,457,661|98|
|Function returning functions|1,407,242|97|
|Function returning arrow functions|1,407,472|93|
|Function returning empty object|1,438,980|97|
|Function returning empty array|1,424,463|92|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,236,293|99|
|using Array.includes (first item)|593,954,181|100|
|Using raw comparisson|594,818,075|97|
|Using raw comparisson (first item)|593,709,956|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|549,085|81|
|Using ? operator to avoid rejection|571,615|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|248,792,800|91|
|Raw usage underscore usage|251,556,393|96|
|Manipulating private properties using #|177,691,047|87|
|Manipulating private properties using underscore(_)|156,553,276|86|
|Manipulating private properties using Symbol|155,368,602|85|
|Manipulating private properties using PrivateSymbol|36,265,204|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,523|97|
|Sort using first char|840,440|93|
|Sort using localeCompare|790,748|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,822 ops/sec ±0.79% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 398 ops/sec ±0.49% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,204 ops/sec ±0.39% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 921 ops/sec ±14.81% (56 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,190,704|92|
|Using this|112,716,738|94|
