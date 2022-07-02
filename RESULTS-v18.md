# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Sat Jul 02 2022 02:33:58 GMT+0000 (Coordinated Universal Time)

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|480|89|
|Array.from|17|46|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|166,713|52|
|[True conditional] Using constructor name|126,019|96|
|[True conditional] Check if property is valid then instanceof |126,742|94|
|[False conditional] Using instanceof only|591,235,817|97|
|[False conditional] Using constructor name|591,212,220|94|
|[False conditional] Check if property is valid then instanceof |592,928,458|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,213|90|
|Intl.DateTimeFormat().format(new Date())|9,505|82|
|Format using date.get*|3,413,067|98|
|new Date() (Baseline)|7,467,984|90|
|Date.now() (Baseline)|13,490,149|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|664,974|96|
|Using brackets {}|675,196|96|
|Using '' + |666,842|96|
|Using date.toString()|737,722|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,500,737|97|
|Using undefined assignment|590,490,289|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,862|53|
|NodeError|129,148|93|
|NodeError Range|128,983|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,452,089|99|
|Function returning explicitly undefined|1,438,530|99|
|Function returning implicitly undefined|1,476,284|97|
|Function returning string|1,415,716|96|
|Function returning integer|1,455,027|95|
|Function returning float|1,450,539|96|
|Function returning functions|1,412,645|98|
|Function returning arrow functions|1,435,530|96|
|Function returning empty object|1,471,418|99|
|Function returning empty array|1,441,911|98|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,543,825|98|
|using Array.includes (first item)|590,905,409|97|
|Using raw comparisson|592,793,109|99|
|Using raw comparisson (first item)|592,360,289|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|560,387|82|
|Using ? operator to avoid rejection|590,906|89|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|253,435,774|95|
|Raw usage underscore usage|263,433,753|97|
|Manipulating private properties using #|196,246,181|97|
|Manipulating private properties using underscore(_)|196,236,420|90|
|Manipulating private properties using Symbol|194,512,640|98|
|Manipulating private properties using PrivateSymbol|37,198,807|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,969|98|
|Sort using first char|907,362|96|
|Sort using localeCompare|837,425|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,968 ops/sec ±0.67% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 407 ops/sec ±0.49% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,189 ops/sec ±0.33% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 943 ops/sec ±14.53% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,983,480|96|
|Using this|113,793,926|95|
