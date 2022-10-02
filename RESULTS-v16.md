# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Sun Oct 02 2022 21:25:51 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.005ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.031ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.059ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 0.501ms 
    new Array(length): 0.221ms (faster)

 1,000,000 numbers:
           array.push: 32.673ms 
    new Array(length): 19.226ms (faster)

 100,000,000 numbers:
           array.push: 1,553.455ms (faster)
    new Array(length): 4,294.012ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.087ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.052ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.536ms 
    new Array(length): 0.243ms (faster)

 1,000,000 strings:
           array.push: 342.344ms 
    new Array(length): 8.533ms (faster)

 100,000,000 strings:
           array.push: 2,075.474ms (faster)
    new Array(length): 4,657.424ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|434|87|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|174,481|55|
|[True conditional] Using constructor name|135,576|97|
|[True conditional] Check if property is valid then instanceof |136,208|94|
|[False conditional] Using instanceof only|593,394,858|94|
|[False conditional] Using constructor name|592,016,853|95|
|[False conditional] Check if property is valid then instanceof |594,068,598|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,955|81|
|Intl.DateTimeFormat().format(new Date())|9,068|82|
|Reusing Intl.DateTimeFormat()|414,135|90|
|Format using date.get*|3,821,472|97|
|new Date() (Baseline)|8,270,536|94|
|Date.now() (Baseline)|15,002,626|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|686,067|95|
|Using brackets {}|692,447|97|
|Using '' + |690,267|96|
|Using date.toString()|749,050|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,474,215|93|
|Using undefined assignment|591,730,943|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|172,036|53|
|NodeError|132,469|95|
|NodeError Range|132,407|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,201,870|98|
|Function returning explicitly undefined|1,192,716|95|
|Function returning implicitly undefined|1,190,579|91|
|Function returning string|1,206,108|97|
|Function returning integer|1,216,906|98|
|Function returning float|1,218,054|94|
|Function returning functions|1,169,630|97|
|Function returning arrow functions|1,197,976|97|
|Function returning empty object|1,217,415|99|
|Function returning empty array|1,192,760|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,472,728|98|
|using Array.includes (first item)|591,393,290|95|
|Using raw comparison|593,373,218|95|
|Using raw comparison (first item)|591,650,879|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,561,174|90|
|Using Object.getOwnPropertyNames()|65,966,623|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,131,653|95|
|Length = 10_000 - Array.at|19,017,369|97|
|Length = 1_000_000 - Array.at|19,036,056|98|
|Length = 100 - Array[length - 1]|590,882,106|98|
|Length = 10_000 - Array[length - 1]|591,337,746|96|
|Length = 1_000_000 - Array[length - 1]|591,023,194|97|

## Object shallow close

|name|ops/sec|samples|
|-|-|-|
|Object.assign (small obj)|16,010,191|92|
|Spread operator (small obj)|77,940,599|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,776,823|92|
|Object.create({})|1,520,257|83|
|Cached Empty.prototype|592,025,953|94|
|Empty.prototype|1,513,509|76|
|Empty class|940,256|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,846,959|96|
|Using optional chain (obj.field?.field2) (undefined)|592,269,884|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,134,630|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,055,290|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|795,299|81|
|Using ? operator to avoid rejection|846,443|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,377,744|94|
|Raw usage underscore usage|7,697,710|92|
|Manipulating private properties using #|2,817,397|96|
|Manipulating private properties using underscore(_)|591,414,802|98|
|Manipulating private properties using Symbol|590,598,921|95|
|Manipulating private properties using PrivateSymbol|35,173,802|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,483,076|93|
|Using replaceAll()|2,198,630|93|
|Using replaceAll(//g)|2,229,671|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,699|97|
|Sort using first char|880,831|96|
|Sort using localeCompare|444,875|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,864 ops/sec ±0.65% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 371 ops/sec ±0.48% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,950 ops/sec ±0.40% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 937 ops/sec ±14.73% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,557,608|95|
|Using backtick (`)|592,262,669|96|
|Using array.join|8,541,927|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,261,473|94|
|Using this|113,279,829|90|
