# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Fri Jan 27 2023 19:46:19 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.082ms
new Array(length)|100|0.007ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.346ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|28.13ms
new Array(length)|1,000,000|17.648ms
array.push|100,000,000|1,926.249ms
new Array(length)|100,000,000|5,168.084ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.544ms
new Array(length)|10,000|4.936ms
array.push|1,000,000|307.524ms
new Array(length)|1,000,000|5.072ms
array.push|100,000,000|2,609.631ms
new Array(length)|100,000,000|5,520.173ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,432|57|
|[True conditional] Using constructor name|147,166|90|
|[True conditional] Check if property is valid then instanceof |147,662|90|
|[False conditional] Using instanceof only|778,525,316|93|
|[False conditional] Using constructor name|777,894,592|94|
|[False conditional] Check if property is valid then instanceof |777,439,894|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,016,786|93|
|fromUnixToISOString(new Date())|1,498,814|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,106|79|
|Intl.DateTimeFormat().format(new Date())|8,394|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,583|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,375|78|
|Reusing Intl.DateTimeFormat()|445,403|91|
|Date.toLocaleDateString()|551,070|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,046|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|626,180|90|
|Using brackets {}|634,883|87|
|Using '' + |638,815|90|
|Using date.toString()|690,156|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,252,379|90|
|Using undefined assignment|777,118,964|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|193,771|53|
|NodeError|147,979|85|
|NodeError Range|149,739|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,136,507|89|
|Function returning explicitly undefined|1,179,737|95|
|Function returning implicitly undefined|1,160,810|93|
|Function returning string|1,118,078|90|
|Function returning integer|1,154,895|90|
|Function returning float|1,127,464|89|
|Function returning functions|1,111,517|90|
|Function returning arrow functions|1,132,740|92|
|Function returning empty object|1,143,553|92|
|Function returning empty array|1,160,286|84|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|777,293,492|98|
|using Array.includes (first item)|774,981,567|96|
|Using raw comparison|776,988,483|90|
|Using raw comparison (first item)|776,583,534|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,686,115|91|
|Using Object.getOwnPropertyNames()|58,543,422|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,226,521|94|
|Length = 10_000 - Array.at|18,122,585|95|
|Length = 1_000_000 - Array.at|18,144,902|97|
|Length = 100 - Array[length - 1]|772,526,977|91|
|Length = 10_000 - Array[length - 1]|772,281,576|96|
|Length = 1_000_000 - Array[length - 1]|773,249,190|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,350,636|90|
|Object.create({})|1,306,274|85|
|Cached Empty.prototype|775,991,998|92|
|Empty.prototype|1,332,369|80|
|Empty class|961,199|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|778,394,829|98|
|Using optional chain (obj.field?.field2) (undefined)|776,993,930|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,771,692|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|774,859,529|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,759,304|94|
|Using parseInt(x, 10) - big number (10 len)|13,612,385|91|
|Using + - small number (2 len)|778,180,403|98|
|Using + - big number (10 len)|777,680,951|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|729,567|79|
|Using ? operator to avoid rejection|785,541|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,300,653|89|
|Raw usage underscore usage|6,945,825|91|
|Manipulating private properties using #|2,527,438|89|
|Manipulating private properties using underscore(_)|763,345,077|93|
|Manipulating private properties using Symbol|761,592,747|95|
|Manipulating private properties using PrivateSymbol|20,785,067|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,887,070|95|
|Adding property in the object creation - small object|2,901,629|95|
|Adding property after the function creation - small class|187,059|82|
|Adding property in the function creation - small class|185,056|85|
|Adding property after the class creation - small class|157,612|80|
|Adding property in the class creation - small class|156,380|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,575,790|94|
|Using replaceAll()|2,471,146|86|
|Using replaceAll(//g)|2,234,426|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,907|90|
|Sort using first char|812,151|87|
|Sort using localeCompare|473,160|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,569|85|
|{...smallObject} - Total keys: 2|52,792,230|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,510|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,078|93|
|{ ...bigObject, ...anotherBigObject }|915|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,141,776|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,915,596|94|
|{ ...smallObject, ...anotherSmallObject }|14,322,277|89|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,574 ops/sec ±15.38% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 420 ops/sec ±0.68% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,579 ops/sec ±0.97% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 965 ops/sec ±13.03% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|775,886,632|98|
|Using backtick (`)|774,087,249|92|
|Using array.join|7,043,699|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|138,817,227|88|
|Using this|144,776,685|89|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,989,569|91|
|Date.now()|14,578,519|90|
