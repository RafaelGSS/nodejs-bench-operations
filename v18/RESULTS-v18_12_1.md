# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Fri Feb 03 2023 17:51:41 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.806ms
new Array(length)|10,000|0.285ms
array.push|1,000,000|30.132ms
new Array(length)|1,000,000|18.844ms
array.push|100,000,000|2,273.101ms
new Array(length)|100,000,000|5,987.922ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.02ms
array.push|100|0.1ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.623ms
new Array(length)|10,000|4.291ms
array.push|1,000,000|308.485ms
new Array(length)|1,000,000|4.855ms
array.push|100,000,000|2,833.618ms
new Array(length)|100,000,000|6,321.959ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|279|78|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|194,084|54|
|[True conditional] Using constructor name|150,530|87|
|[True conditional] Check if property is valid then instanceof |151,833|90|
|[False conditional] Using instanceof only|774,252,848|93|
|[False conditional] Using constructor name|770,294,160|95|
|[False conditional] Check if property is valid then instanceof |768,500,713|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,796,129|89|
|fromUnixToISOString(new Date())|1,470,236|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,696|79|
|Intl.DateTimeFormat().format(new Date())|9,232|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,266|65|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,824|88|
|Reusing Intl.DateTimeFormat()|353,915|62|
|Date.toLocaleDateString()|562,260|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,813|75|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|629,008|90|
|Using brackets {}|630,350|93|
|Using '' + |642,448|92|
|Using date.toString()|676,703|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,265,179|90|
|Using undefined assignment|769,124,263|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|191,244|55|
|NodeError|149,300|90|
|NodeError Range|152,231|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,309,024|94|
|Function returning explicitly undefined|1,210,115|92|
|Function returning implicitly undefined|1,272,160|92|
|Function returning string|1,271,574|92|
|Function returning integer|1,231,434|90|
|Function returning float|1,253,179|92|
|Function returning functions|1,234,547|90|
|Function returning arrow functions|1,273,173|92|
|Function returning empty object|1,269,476|90|
|Function returning empty array|1,262,163|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|769,817,339|94|
|using Array.includes (first item)|770,099,029|97|
|Using raw comparison|770,724,248|94|
|Using raw comparison (first item)|768,878,712|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,407,694|88|
|Using Object.getOwnPropertyNames()|57,022,232|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,657,763|94|
|Length = 10_000 - Array.at|18,613,320|94|
|Length = 1_000_000 - Array.at|18,556,984|94|
|Length = 100 - Array[length - 1]|767,615,902|95|
|Length = 10_000 - Array[length - 1]|765,312,881|90|
|Length = 1_000_000 - Array[length - 1]|767,468,954|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,413,270|93|
|Object.create({})|1,105,953|82|
|Cached Empty.prototype|768,098,243|92|
|Empty.prototype|1,185,249|84|
|Empty class|829,875|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|769,801,569|96|
|Using optional chain (obj.field?.field2) (undefined)|769,946,543|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|771,177,877|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|767,708,242|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|225,653,572|95|
|Using parseInt(x, 10) - big number (10 len)|12,480,774|92|
|Using + - small number (2 len)|767,755,131|92|
|Using + - big number (10 len)|770,261,502|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|638,211|82|
|Using ? operator to avoid rejection|668,788|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|226,482,256|89|
|Raw usage underscore usage|232,334,807|93|
|Manipulating private properties using #|182,891,814|86|
|Manipulating private properties using underscore(_)|163,174,967|93|
|Manipulating private properties using Symbol|170,218,802|92|
|Manipulating private properties using PrivateSymbol|22,302,640|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,907,494|95|
|Adding property in the object creation - small object|1,904,751|96|
|Adding property after the function creation - small class|166,172|87|
|Adding property in the function creation - small class|159,468|85|
|Adding property after the class creation - small class|136,417|81|
|Adding property in the class creation - small class|135,041|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,534,332|89|
|Using replaceAll()|2,154,339|93|
|Using replaceAll(//g)|2,236,397|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,211|89|
|Sort using first char|823,313|92|
|Sort using localeCompare|823,660|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,505|91|
|{...smallObject} - Total keys: 2|57,544,251|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,477|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,077|92|
|{ ...bigObject, ...anotherBigObject }|907|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,823,337|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,497,445|92|
|{ ...smallObject, ...anotherSmallObject }|15,762,302|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,650 ops/sec ±1.07% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 415 ops/sec ±0.62% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,835 ops/sec ±0.80% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,003 ops/sec ±9.99% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|770,728,224|95|
|Using backtick (`)|770,971,536|93|
|Using array.join|7,449,915|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,990,457|87|
|Using this|151,717,495|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,594,360|95|
|Date.now()|15,344,415|93|
