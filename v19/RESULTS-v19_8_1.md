# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.8.1`
* __Run:__ Thu Apr 13 2023 11:12:12 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,271,398,977|97|
|Using dot notation|1,260,806,631|95|
|Using define property (writable)|4,067,689|96|
|Using define property initialized (writable)|5,242,564|97|
|Using define property (getter)|2,188,633|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.013ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.451ms
new Array(length)|10,000|0.341ms
array.push|1,000,000|31.648ms
new Array(length)|1,000,000|6.136ms
array.push|100,000,000|1,691.289ms
new Array(length)|100,000,000|4,211.542ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.012ms
array.push|100|0.013ms
new Array(length)|100|0.008ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.369ms
new Array(length)|10,000|0.195ms
array.push|1,000,000|215.401ms
new Array(length)|1,000,000|8.606ms
array.push|100,000,000|1,895.224ms
new Array(length)|100,000,000|4,144.9ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|85|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|232,681|63|
|[True conditional] Using constructor name|194,313|97|
|[True conditional] Check if property is valid then instanceof |196,954|96|
|[False conditional] Using instanceof only|1,264,044,654|92|
|[False conditional] Using constructor name|1,273,262,177|96|
|[False conditional] Check if property is valid then instanceof |1,280,560,882|97|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,611|93|
|crypto.verify('RSA-SHA256')|6,682|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,219,963|95|
|fromUnixToISOString(new Date())|1,951,895|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,933|83|
|Intl.DateTimeFormat().format(new Date())|9,214|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,726|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,270|95|
|Reusing Intl.DateTimeFormat()|413,671|76|
|Date.toLocaleDateString()|549,625|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,248|79|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|903,952|95|
|Using brackets {}|931,034|99|
|Using '' + |931,772|98|
|Using date.toString()|1,004,713|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,292,846|97|
|Using undefined assignment|1,254,206,592|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|225,699|60|
|NodeError|189,829|92|
|NodeError Range|193,102|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,385,611|94|
|Function returning explicitly undefined|1,408,709|97|
|Function returning implicitly undefined|1,365,701|91|
|Function returning string|1,362,387|92|
|Function returning integer|1,413,763|96|
|Function returning float|1,403,363|93|
|Function returning functions|1,360,667|90|
|Function returning arrow functions|1,398,799|97|
|Function returning empty object|1,399,013|97|
|Function returning empty array|1,403,953|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,261,199,899|98|
|using Array.includes (first item)|1,270,631,128|93|
|Using raw comparison|1,284,606,892|98|
|Using raw comparison (first item)|1,281,744,319|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|81,362,921|90|
|Using Object.getOwnPropertyNames()|66,597,562|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,260,740,056|91|
|Length = 10_000 - Array.at|1,258,490,260|93|
|Length = 1_000_000 - Array.at|1,265,677,126|97|
|Length = 100 - Array[length - 1]|1,267,754,905|92|
|Length = 10_000 - Array[length - 1]|1,276,125,814|99|
|Length = 1_000_000 - Array[length - 1]|1,250,498,192|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|74,518,878|86|
|Object.create({})|2,199,430|87|
|Cached Empty.prototype|1,249,476,298|97|
|Empty.prototype|1,837,129|78|
|Empty class|1,202,573|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,263,415,816|92|
|Using optional chain (obj.field?.field2) (undefined)|1,268,608,914|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,263,428,703|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,274,683,760|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|346,281,598|96|
|Using parseInt(x, 10) - big number (10 len)|18,745,844|94|
|Using + - small number (2 len)|1,269,932,031|93|
|Using + - big number (10 len)|1,276,589,053|100|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,033,502|82|
|Using ? operator to avoid rejection|1,051,779|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,262,008,680|90|
|Raw usage underscore usage|1,252,188,606|93|
|Manipulating private properties using #|1,256,662,576|96|
|Manipulating private properties using underscore(_)|1,251,146,613|98|
|Manipulating private properties using Symbol|1,231,849,225|93|
|Manipulating private properties using PrivateSymbol|50,198,180|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,468,026|94|
|Adding property in the object creation - small object|2,480,727|96|
|Adding property after the function creation - small class|204,695|85|
|Adding property in the function creation - small class|208,772|88|
|Adding property after the class creation - small class|182,976|83|
|Adding property in the class creation - small class|181,677|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,263,251,668|97|
|Getter|97,415,758|95|
|Method|1,274,830,569|94|
|DefineProperty (getter)|1,278,718,156|92|
|DefineProperty (getter & enumerable=false)|98,630,457|96|
|DefineProperty (getter & configurable=false)|1,278,596,039|98|
|DefineProperty (getter & enumerable=false & configurable=false)|96,685,357|97|
|DefineProperty (writable)|1,277,905,477|100|
|DefineProperty (writable & enumerable=false)|1,270,666,419|99|
|DefineProperty (writable & enumerable=false & configurable=false)|161,194,043|17|
|DefineProperties (getter)|57,841,270|89|
|DefineProperties (getter & enumerable=false)|97,297,796|93|
|DefineProperties (getter & enumerable=false & configurable=false)|97,575,689|98|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|926,153,495|96|
|Setter|8,468,310|94|
|Method|949,119,349|95|
|DefineProperty (setter)|949,288,788|95|
|DefineProperty (setter & enumerable=false)|8,477,154|94|
|DefineProperty (setter & configurable=false)|8,535,825|94|
|DefineProperty (setter & enumerable=false & configurable=false)|8,553,934|96|
|DefineProperty (writable)|1,273,999,398|96|
|DefineProperty (writable & enumerable=false)|1,282,496,773|99|
|DefineProperty (writable & enumerable=false & configurable=false)|1,274,967,592|99|
|DefineProperties (setter)|566,480,122|49|
|DefineProperties (setter & enumerable=false)|8,086,263|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,004,845|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,121,266|91|
|Using replaceAll()|2,738,704|94|
|Using replaceAll(//g)|2,725,612|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|228,650|95|
|Sort using first char|1,049,902|96|
|Sort using localeCompare|1,020,561|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,692|91|
|{...smallObject} - Total keys: 2|96,901,026|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,882|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,285|97|
|{ ...bigObject, ...anotherBigObject }|1,075|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,070,545|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,927,185|96|
|{ ...smallObject, ...anotherSmallObject }|20,485,475|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,327 ops/sec ±0.75% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 478 ops/sec ±0.32% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,813 ops/sec ±0.45% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,370 ops/sec ±7.52% (69 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,272,139,663|91|
|Using backtick (`)|1,267,550,360|98|
|Using array.join|10,678,751|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,270,248,095|97|
|Using indexof|1,281,866,734|98|
|Using RegExp.test|18,236,410|98|
|Using RegExp.text with cached regex pattern|19,051,376|92|
|Using new RegExp.test|3,739,146|94|
|Using new RegExp.test with cached regex pattern|3,849,383|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|183,795,306|96|
|Using this|214,306,793|99|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,586,328|97|
|Date.now()|22,066,035|96|
