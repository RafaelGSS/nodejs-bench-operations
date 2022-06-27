# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Mon Jun 27 2022 02:42:24 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|162,126|61|
|[True conditional] Using constructor name|126,221|85|
|[True conditional] Check if property is valid then instanceof |133,846|88|
|[False conditional] Using instanceof only|815,854,000|90|
|[False conditional] Using constructor name|807,339,106|87|
|[False conditional] Check if property is valid then instanceof |758,247,757|82|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|568,305|87|
|Using brackets {}|577,555|86|
|Using '' + |543,769|83|
|Using date.toString()|622,936|84|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,086,296|86|
|Using undefined assignment|729,656,943|86|

## Node.js Error

[Function: createTableHeader]
|Error|165,214|51|
|NodeError|130,548|88|
|NodeError Range|131,558|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,113,045|87|
|Function returning explicitly undefined|1,090,419|89|
|Function returning implicitly undefined|1,076,464|86|
|Function returning string|1,071,275|80|
|Function returning integer|1,053,003|87|
|Function returning float|1,017,513|85|
|Function returning functions|1,050,580|85|
|Function returning arrow functions|1,004,339|82|
|Function returning empty object|1,047,082|82|
|Function returning empty array|1,089,351|88|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|819,946,999|87|
|using Array.includes (first item)|794,298,358|89|
|Using raw comparisson|796,759,334|87|
|Using raw comparisson (first item)|803,145,212|88|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,277,382|88|
|Raw usage underscore usage|5,796,464|82|
|Manipulating private properties using #|2,082,106|85|
|Manipulating private properties using underscore(_)|632,705,373|83|
|Manipulating private properties using Symbol|601,678,762|82|
|Manipulating private properties using PrivateSymbol|23,291,155|83|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,781|88|
|Sort using first char|728,942|88|
|Sort using localeCompare|350,279|83|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,265 ops/sec ±18.20% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 340 ops/sec ±1.03% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,044 ops/sec ±1.19% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 634 ops/sec ±20.35% (37 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|158,788,199|88|
|Using this|146,677,245|84|
