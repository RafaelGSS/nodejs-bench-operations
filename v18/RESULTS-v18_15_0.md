# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.15.0`
* __Run:__ Thu Apr 13 2023 12:07:05 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,275,389,105|99|
|Using dot notation|1,276,336,483|97|
|Using define property (writable)|3,783,007|92|
|Using define property initialized (writable)|4,587,184|97|
|Using define property (getter)|2,123,079|96|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.017ms
new Array(length)|100|0.007ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.444ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|20.796ms
new Array(length)|1,000,000|12.973ms
array.push|100,000,000|1,460.773ms
new Array(length)|100,000,000|4,043.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.012ms
array.push|100|0.012ms
new Array(length)|100|0.008ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.322ms
new Array(length)|10,000|3.039ms
array.push|1,000,000|66.869ms
new Array(length)|1,000,000|3.181ms
array.push|100,000,000|2,297.959ms
new Array(length)|100,000,000|3,858.648ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|312|88|
|Array.from|20|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|245,451|62|
|[True conditional] Using constructor name|198,482|96|
|[True conditional] Check if property is valid then instanceof |199,361|95|
|[False conditional] Using instanceof only|1,276,937,595|98|
|[False conditional] Using constructor name|1,277,186,850|94|
|[False conditional] Check if property is valid then instanceof |1,278,496,615|99|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,652|93|
|crypto.verify('RSA-SHA256')|6,583|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,073,352|96|
|fromUnixToISOString(new Date())|1,840,921|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,294|81|
|Intl.DateTimeFormat().format(new Date())|12,554|92|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,922|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,624|99|
|Reusing Intl.DateTimeFormat()|396,883|75|
|Date.toLocaleDateString()|533,660|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,434|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|862,637|99|
|Using brackets {}|881,693|99|
|Using '' + |874,506|96|
|Using date.toString()|945,620|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,148,793|99|
|Using undefined assignment|1,275,835,316|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|238,790|61|
|NodeError|197,383|94|
|NodeError Range|197,425|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,335,856|99|
|Function returning explicitly undefined|1,326,409|93|
|Function returning implicitly undefined|1,346,074|97|
|Function returning string|1,310,784|97|
|Function returning integer|1,304,374|94|
|Function returning float|1,334,601|97|
|Function returning functions|1,314,779|96|
|Function returning arrow functions|1,312,951|97|
|Function returning empty object|1,341,224|98|
|Function returning empty array|1,285,384|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,273,584,952|97|
|using Array.includes (first item)|1,274,960,019|98|
|Using raw comparison|1,275,558,213|97|
|Using raw comparison (first item)|1,276,387,222|101|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,331,934|97|
|Using Object.getOwnPropertyNames()|88,511,568|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,265,417|98|
|Length = 10_000 - Array.at|21,472,795|100|
|Length = 1_000_000 - Array.at|21,448,695|99|
|Length = 100 - Array[length - 1]|1,270,754,323|94|
|Length = 10_000 - Array[length - 1]|1,275,692,484|100|
|Length = 1_000_000 - Array[length - 1]|1,275,260,770|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,076,329|91|
|Object.create({})|1,414,853|92|
|Cached Empty.prototype|1,275,947,760|97|
|Empty.prototype|1,531,516|84|
|Empty class|924,725|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,276,641,388|100|
|Using optional chain (obj.field?.field2) (undefined)|1,275,575,802|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,273,524,886|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,269,279,482|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|343,788,737|98|
|Using parseInt(x, 10) - big number (10 len)|19,879,555|98|
|Using + - small number (2 len)|1,273,043,630|101|
|Using + - big number (10 len)|1,241,184,526|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|712,895|84|
|Using ? operator to avoid rejection|735,539|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|329,908,773|95|
|Raw usage underscore usage|316,249,724|96|
|Manipulating private properties using #|213,869,531|79|
|Manipulating private properties using underscore(_)|193,238,422|89|
|Manipulating private properties using Symbol|193,924,277|100|
|Manipulating private properties using PrivateSymbol|50,867,972|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,022,428|98|
|Adding property in the object creation - small object|3,016,861|100|
|Adding property after the function creation - small class|176,158|92|
|Adding property in the function creation - small class|177,880|92|
|Adding property after the class creation - small class|153,844|88|
|Adding property in the class creation - small class|154,248|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,276,289,604|97|
|Getter|103,685,505|99|
|Method|1,276,424,199|93|
|DefineProperty (getter)|1,275,777,963|97|
|DefineProperty (getter & enumerable=false)|100,593,164|98|
|DefineProperty (getter & configurable=false)|1,275,963,679|100|
|DefineProperty (getter & enumerable=false & configurable=false)|103,602,982|99|
|DefineProperty (writable)|1,276,531,930|92|
|DefineProperty (writable & enumerable=false)|1,276,344,528|101|
|DefineProperty (writable & enumerable=false & configurable=false)|749,816,225|58|
|DefineProperties (getter)|56,658,371|81|
|DefineProperties (getter & enumerable=false)|103,865,929|99|
|DefineProperties (getter & enumerable=false & configurable=false)|103,540,995|94|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|956,933,768|100|
|Setter|8,131,882|93|
|Method|955,492,180|95|
|DefineProperty (setter)|954,430,875|99|
|DefineProperty (setter & enumerable=false)|8,074,978|95|
|DefineProperty (setter & configurable=false)|8,120,637|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,313,256|96|
|DefineProperty (writable)|1,267,043,817|100|
|DefineProperty (writable & enumerable=false)|388,792,422|31|
|DefineProperty (writable & enumerable=false & configurable=false)|159,471,592|83|
|DefineProperties (setter)|119,690,568|83|
|DefineProperties (setter & enumerable=false)|7,226,436|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,053,653|98|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,792,222|94|
|Using replaceAll()|2,339,945|98|
|Using replaceAll(//g)|2,477,237|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|233,692|98|
|Sort using first char|1,105,845|96|
|Sort using localeCompare|1,070,257|100|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,802|93|
|{...smallObject} - Total keys: 2|106,693,015|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,999|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,462|97|
|{ ...bigObject, ...anotherBigObject }|1,123|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,685,850|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,586,796|94|
|{ ...smallObject, ...anotherSmallObject }|20,812,973|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,547 ops/sec ±0.84% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 507 ops/sec ±0.19% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,399 ops/sec ±0.29% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,666 ops/sec ±6.87% (74 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,273,920,066|97|
|Using backtick (`)|1,277,528,604|97|
|Using array.join|10,285,297|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,275,976,398|95|
|Using indexof|1,278,067,493|98|
|Using RegExp.test|18,175,773|98|
|Using RegExp.text with cached regex pattern|18,649,120|95|
|Using new RegExp.test|3,732,399|94|
|Using new RegExp.test with cached regex pattern|4,153,057|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|187,384,661|91|
|Using this|193,714,376|100|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,042,198|95|
|Date.now()|22,038,273|98|
