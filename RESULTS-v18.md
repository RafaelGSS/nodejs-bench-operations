# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Sat Jul 02 2022 01:25:13 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,606|54|
|[True conditional] Using constructor name|130,893|93|
|[True conditional] Check if property is valid then instanceof |131,604|94|
|[False conditional] Using instanceof only|591,977,911|97|
|[False conditional] Using constructor name|591,752,534|97|
|[False conditional] Check if property is valid then instanceof |592,193,267|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,530|89|
|Intl.DateTimeFormat().format(new Date())|9,223|80|
|Format using date.get*|3,123,429|94|
|new Date() (Baseline)|8,022,970|96|
|Date.now() (Baseline)|15,808,554|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|708,705|98|
|Using brackets {}|711,007|99|
|Using '' + |709,015|99|
|Using date.toString()|779,025|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,500,129|97|
|Using undefined assignment|590,321,832|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,586|53|
|NodeError|127,523|93|
|NodeError Range|126,935|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,447,866|97|
|Function returning explicitly undefined|1,413,298|91|
|Function returning implicitly undefined|1,485,438|92|
|Function returning string|1,415,523|97|
|Function returning integer|1,426,978|97|
|Function returning float|1,473,119|97|
|Function returning functions|1,417,876|100|
|Function returning arrow functions|1,432,011|95|
|Function returning empty object|1,465,915|99|
|Function returning empty array|1,457,932|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,250,993|96|
|using Array.includes (first item)|590,974,081|95|
|Using raw comparisson|592,193,322|97|
|Using raw comparisson (first item)|591,380,704|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|567,042|82|
|Using ? operator to avoid rejection|592,591|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|253,206,376|88|
|Raw usage underscore usage|263,774,773|97|
|Manipulating private properties using #|196,418,259|96|
|Manipulating private properties using underscore(_)|196,090,306|92|
|Manipulating private properties using Symbol|195,063,423|97|
|Manipulating private properties using PrivateSymbol|37,074,769|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,827|94|
|Sort using first char|894,939|98|
|Sort using localeCompare|828,714|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,020 ops/sec ±0.63% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 396 ops/sec ±0.21% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,272 ops/sec ±0.35% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 970 ops/sec ±14.11% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,999,680|92|
|Using this|114,093,474|94|
