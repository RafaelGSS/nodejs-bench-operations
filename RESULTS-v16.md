# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Sat Jul 02 2022 02:34:00 GMT+0000 (Coordinated Universal Time)

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|340|82|
|Array.from|11|32|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|152,836|54|
|[True conditional] Using constructor name|120,165|89|
|[True conditional] Check if property is valid then instanceof |119,034|86|
|[False conditional] Using instanceof only|711,735,895|86|
|[False conditional] Using constructor name|706,040,199|88|
|[False conditional] Check if property is valid then instanceof |705,481,293|85|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,209|84|
|Intl.DateTimeFormat().format(new Date())|5,425|78|
|Format using date.get*|2,421,954|87|
|new Date() (Baseline)|5,840,238|85|
|Date.now() (Baseline)|12,190,033|86|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|545,962|87|
|Using brackets {}|555,294|84|
|Using '' + |550,170|85|
|Using date.toString()|569,135|85|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,838,052|82|
|Using undefined assignment|720,364,027|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|149,578|51|
|NodeError|117,259|88|
|NodeError Range|117,519|87|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|990,679|87|
|Function returning explicitly undefined|968,943|88|
|Function returning implicitly undefined|988,940|84|
|Function returning string|964,381|87|
|Function returning integer|983,979|89|
|Function returning float|996,423|87|
|Function returning functions|964,652|86|
|Function returning arrow functions|975,274|87|
|Function returning empty object|980,501|86|
|Function returning empty array|978,559|86|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,119,864|86|
|using Array.includes (first item)|706,572,408|89|
|Using raw comparisson|702,714,252|87|
|Using raw comparisson (first item)|696,971,608|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|585,768|69|
|Using ? operator to avoid rejection|642,406|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,203,320|84|
|Raw usage underscore usage|5,233,609|87|
|Manipulating private properties using #|1,861,104|85|
|Manipulating private properties using underscore(_)|583,477,455|88|
|Manipulating private properties using Symbol|582,896,262|87|
|Manipulating private properties using PrivateSymbol|23,279,450|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|137,908|87|
|Sort using first char|595,816|86|
|Sort using localeCompare|327,330|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,060 ops/sec ±22.21% (77 runs sampled)
streams.web.Readable reading 1e3 * some data x 315 ops/sec ±1.06% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 1,826 ops/sec ±1.06% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 821 ops/sec ±14.66% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|135,252,272|86|
|Using this|135,258,350|83|
