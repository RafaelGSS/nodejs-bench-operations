# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Thu Apr 13 2023 10:44:42 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,284,541,866|99|
|Using dot notation|1,282,531,293|98|
|Using define property (writable)|3,857,198|95|
|Using define property initialized (writable)|5,001,915|95|
|Using define property (getter)|2,240,370|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.008ms
array.push|1,000|0.052ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.306ms
array.push|1,000,000|28.082ms
new Array(length)|1,000,000|5.646ms
array.push|100,000,000|1,647.702ms
new Array(length)|100,000,000|4,100.732ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.059ms
new Array(length)|100|0.007ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.395ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|216.946ms
new Array(length)|1,000,000|8.952ms
array.push|100,000,000|1,833.275ms
new Array(length)|100,000,000|4,119.654ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|286|85|
|Array.from|19|50|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,660|64|
|[True conditional] Using constructor name|191,894|90|
|[True conditional] Check if property is valid then instanceof |196,690|98|
|[False conditional] Using instanceof only|1,275,361,807|97|
|[False conditional] Using constructor name|1,272,973,270|99|
|[False conditional] Check if property is valid then instanceof |1,275,222,420|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,626|98|
|crypto.verify('RSA-SHA256')|6,694|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,280,874|94|
|fromUnixToISOString(new Date())|2,025,610|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,955|81|
|Intl.DateTimeFormat().format(new Date())|12,317|92|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,714|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,476|82|
|Reusing Intl.DateTimeFormat()|554,376|97|
|Date.toLocaleDateString()|571,226|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,211|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|942,966|92|
|Using brackets {}|969,334|95|
|Using '' + |966,201|96|
|Using date.toString()|1,064,361|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,251,365|98|
|Using undefined assignment|1,280,486,241|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|224,202|62|
|NodeError|191,280|95|
|NodeError Range|192,187|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,415,914|97|
|Function returning explicitly undefined|1,428,632|97|
|Function returning implicitly undefined|1,442,240|97|
|Function returning string|1,425,872|96|
|Function returning integer|1,446,271|96|
|Function returning float|1,446,903|97|
|Function returning functions|1,408,386|93|
|Function returning arrow functions|1,413,864|92|
|Function returning empty object|1,422,971|95|
|Function returning empty array|1,424,410|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,281,420,495|100|
|using Array.includes (first item)|1,283,015,580|95|
|Using raw comparison|1,277,433,050|100|
|Using raw comparison (first item)|1,257,024,092|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,773,015|91|
|Using Object.getOwnPropertyNames()|78,098,807|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,280,278,225|99|
|Length = 10_000 - Array.at|1,279,389,793|100|
|Length = 1_000_000 - Array.at|1,277,060,842|97|
|Length = 100 - Array[length - 1]|1,279,437,268|100|
|Length = 10_000 - Array[length - 1]|1,271,202,983|97|
|Length = 1_000_000 - Array[length - 1]|1,266,908,894|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|61,957,397|86|
|Object.create({})|2,175,847|89|
|Cached Empty.prototype|1,271,848,933|96|
|Empty.prototype|2,052,272|85|
|Empty class|1,257,313|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,281,870,404|95|
|Using optional chain (obj.field?.field2) (undefined)|1,279,128,252|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,276,921,932|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,280,721,729|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|346,453,237|97|
|Using parseInt(x, 10) - big number (10 len)|19,968,150|98|
|Using + - small number (2 len)|1,271,499,280|96|
|Using + - big number (10 len)|1,280,648,345|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,028,950|83|
|Using ? operator to avoid rejection|1,077,170|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,271,875,588|96|
|Raw usage underscore usage|1,273,832,539|96|
|Manipulating private properties using #|1,263,305,640|98|
|Manipulating private properties using underscore(_)|1,263,456,769|94|
|Manipulating private properties using Symbol|1,242,606,519|91|
|Manipulating private properties using PrivateSymbol|53,061,671|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,497,813|92|
|Adding property in the object creation - small object|2,483,458|95|
|Adding property after the function creation - small class|200,144|90|
|Adding property in the function creation - small class|186,067|83|
|Adding property after the class creation - small class|174,983|86|
|Adding property in the class creation - small class|179,640|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,277,502,418|98|
|Getter|102,556,393|92|
|Method|1,280,846,029|95|
|DefineProperty (getter)|1,280,391,654|94|
|DefineProperty (getter & enumerable=false)|102,620,285|94|
|DefineProperty (getter & configurable=false)|1,282,641,838|99|
|DefineProperty (getter & enumerable=false & configurable=false)|102,616,715|97|
|DefineProperty (writable)|1,279,937,757|96|
|DefineProperty (writable & enumerable=false)|1,279,967,033|100|
|DefineProperty (writable & enumerable=false & configurable=false)|1,282,535,299|92|
|DefineProperties (getter)|102,236,136|90|
|DefineProperties (getter & enumerable=false)|103,269,037|98|
|DefineProperties (getter & enumerable=false & configurable=false)|64,655,056|63|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|962,259,465|97|
|Setter|7,943,261|94|
|Method|953,637,272|99|
|DefineProperty (setter)|936,813,421|96|
|DefineProperty (setter & enumerable=false)|7,958,103|92|
|DefineProperty (setter & configurable=false)|7,922,017|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,931,708|95|
|DefineProperty (writable)|1,278,467,437|98|
|DefineProperty (writable & enumerable=false)|1,270,399,446|99|
|DefineProperty (writable & enumerable=false & configurable=false)|1,276,828,102|96|
|DefineProperties (setter)|1,269,487,372|96|
|DefineProperties (setter & enumerable=false)|7,719,913|93|
|DefineProperties (setter & enumerable=false & configurable=false)|7,477,137|92|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,843,951|98|
|Using replaceAll()|2,654,160|91|
|Using replaceAll(//g)|2,481,063|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|231,761|97|
|Sort using first char|1,115,021|95|
|Sort using localeCompare|1,105,940|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,702|93|
|{...smallObject} - Total keys: 2|98,201,392|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,884|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,199|98|
|{ ...bigObject, ...anotherBigObject }|1,099|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,294,586|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,066,188|93|
|{ ...smallObject, ...anotherSmallObject }|21,115,868|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,392 ops/sec ±1.31% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 488 ops/sec ±0.39% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,771 ops/sec ±2.92% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,591 ops/sec ±9.42% (67 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,276,225,991|92|
|Using backtick (`)|1,282,541,999|95|
|Using array.join|9,879,096|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,269,495,944|98|
|Using indexof|1,269,285,394|95|
|Using RegExp.test|16,077,924|98|
|Using RegExp.text with cached regex pattern|16,480,267|93|
|Using new RegExp.test|3,840,879|92|
|Using new RegExp.test with cached regex pattern|4,069,565|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|186,338,102|86|
|Using this|214,508,573|99|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,680,433|96|
|Date.now()|22,020,866|92|
