# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Fri Feb 03 2023 17:31:27 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.004ms
array.push|100|0.149ms
new Array(length)|100|0.015ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.569ms
new Array(length)|10,000|0.233ms
array.push|1,000,000|26.57ms
new Array(length)|1,000,000|18.455ms
array.push|100,000,000|2,253.134ms
new Array(length)|100,000,000|5,872.116ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.021ms
array.push|100|0.023ms
new Array(length)|100|0.014ms
array.push|1,000|0.086ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.607ms
new Array(length)|10,000|4.258ms
array.push|1,000,000|316.186ms
new Array(length)|1,000,000|5.268ms
array.push|100,000,000|2,833.178ms
new Array(length)|100,000,000|6,268.956ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|208,618|56|
|[True conditional] Using constructor name|160,364|92|
|[True conditional] Check if property is valid then instanceof |161,642|91|
|[False conditional] Using instanceof only|768,358,802|96|
|[False conditional] Using constructor name|772,909,217|95|
|[False conditional] Check if property is valid then instanceof |774,673,519|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,101,389|93|
|fromUnixToISOString(new Date())|1,580,733|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,800|77|
|Intl.DateTimeFormat().format(new Date())|8,121|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,520|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,323|86|
|Reusing Intl.DateTimeFormat()|372,194|63|
|Date.toLocaleDateString()|559,791|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,954|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|624,462|92|
|Using brackets {}|621,383|90|
|Using '' + |625,163|91|
|Using date.toString()|682,876|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,200,002|89|
|Using undefined assignment|770,721,726|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|200,395|54|
|NodeError|153,519|88|
|NodeError Range|156,338|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,152,424|89|
|Function returning explicitly undefined|1,155,761|92|
|Function returning implicitly undefined|1,179,601|93|
|Function returning string|1,171,804|91|
|Function returning integer|1,187,318|89|
|Function returning float|1,162,502|93|
|Function returning functions|1,167,364|90|
|Function returning arrow functions|1,113,291|90|
|Function returning empty object|1,195,419|93|
|Function returning empty array|1,193,385|85|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|770,846,541|96|
|using Array.includes (first item)|769,436,288|95|
|Using raw comparison|770,285,536|91|
|Using raw comparison (first item)|771,430,240|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,303,077|88|
|Using Object.getOwnPropertyNames()|59,183,760|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|17,999,159|94|
|Length = 10_000 - Array.at|18,154,070|94|
|Length = 1_000_000 - Array.at|18,128,944|98|
|Length = 100 - Array[length - 1]|769,637,130|92|
|Length = 10_000 - Array[length - 1]|768,685,976|89|
|Length = 1_000_000 - Array[length - 1]|768,739,123|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,335,709|85|
|Object.create({})|1,334,045|81|
|Cached Empty.prototype|772,965,627|94|
|Empty.prototype|1,366,816|80|
|Empty class|971,574|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|772,618,329|94|
|Using optional chain (obj.field?.field2) (undefined)|772,140,654|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|773,577,144|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|773,518,240|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,848,495|95|
|Using parseInt(x, 10) - big number (10 len)|13,466,859|92|
|Using + - small number (2 len)|772,008,590|93|
|Using + - big number (10 len)|766,758,852|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|762,916|82|
|Using ? operator to avoid rejection|785,603|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,017,414|91|
|Raw usage underscore usage|7,177,928|92|
|Manipulating private properties using #|2,511,388|89|
|Manipulating private properties using underscore(_)|758,677,480|94|
|Manipulating private properties using Symbol|755,986,145|91|
|Manipulating private properties using PrivateSymbol|21,695,366|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,970,409|94|
|Adding property in the object creation - small object|1,967,223|95|
|Adding property after the function creation - small class|184,254|84|
|Adding property in the function creation - small class|183,344|84|
|Adding property after the class creation - small class|155,112|82|
|Adding property in the class creation - small class|155,865|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,562,520|90|
|Using replaceAll()|2,465,354|90|
|Using replaceAll(//g)|2,318,536|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|187,953|93|
|Sort using first char|805,193|94|
|Sort using localeCompare|481,107|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,493|87|
|{...smallObject} - Total keys: 2|56,967,772|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,525|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,112|93|
|{ ...bigObject, ...anotherBigObject }|908|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,079,479|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,855,392|96|
|{ ...smallObject, ...anotherSmallObject }|14,988,130|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,584 ops/sec ±18.32% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 431 ops/sec ±0.73% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,729 ops/sec ±0.90% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,003 ops/sec ±11.40% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|772,929,595|95|
|Using backtick (`)|770,373,073|92|
|Using array.join|7,307,636|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|141,456,411|89|
|Using this|149,903,709|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,252,597|93|
|Date.now()|14,633,425|91|
