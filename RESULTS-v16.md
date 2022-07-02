# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Sat Jul 02 2022 01:25:09 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|202,468|60|
|[True conditional] Using constructor name|157,049|96|
|[True conditional] Check if property is valid then instanceof |160,410|91|
|[False conditional] Using instanceof only|713,346,897|96|
|[False conditional] Using constructor name|711,590,170|96|
|[False conditional] Check if property is valid then instanceof |713,086,188|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,197|85|
|Intl.DateTimeFormat().format(new Date())|7,888|82|
|Format using date.get*|3,371,669|89|
|new Date() (Baseline)|7,819,939|96|
|Date.now() (Baseline)|14,544,934|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|701,258|98|
|Using brackets {}|702,819|96|
|Using '' + |696,405|96|
|Using date.toString()|763,485|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,517,383|93|
|Using undefined assignment|711,712,369|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|197,318|56|
|NodeError|157,313|96|
|NodeError Range|154,825|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,398,905|98|
|Function returning explicitly undefined|1,378,956|99|
|Function returning implicitly undefined|1,393,721|96|
|Function returning string|1,373,176|96|
|Function returning integer|1,363,586|98|
|Function returning float|1,392,468|97|
|Function returning functions|1,372,457|95|
|Function returning arrow functions|1,379,163|99|
|Function returning empty object|1,405,231|96|
|Function returning empty array|1,398,767|98|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,604,679|95|
|using Array.includes (first item)|712,604,305|96|
|Using raw comparisson|714,462,091|97|
|Using raw comparisson (first item)|713,599,934|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|787,112|76|
|Using ? operator to avoid rejection|847,101|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,823,029|98|
|Raw usage underscore usage|7,352,488|96|
|Manipulating private properties using #|2,684,254|99|
|Manipulating private properties using underscore(_)|705,262,867|96|
|Manipulating private properties using Symbol|704,413,091|97|
|Manipulating private properties using PrivateSymbol|26,946,592|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,936|95|
|Sort using first char|783,379|97|
|Sort using localeCompare|433,872|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,633 ops/sec ±13.55% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 403 ops/sec ±0.46% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,890 ops/sec ±0.46% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 971 ops/sec ±15.95% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|136,690,613|93|
|Using this|137,734,779|96|
