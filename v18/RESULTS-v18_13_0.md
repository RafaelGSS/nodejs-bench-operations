# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Fri Feb 03 2023 18:01:49 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.05ms
new Array(length)|100|0.016ms
array.push|1,000|0.085ms
new Array(length)|1,000|0.051ms
array.push|10,000|0.75ms
new Array(length)|10,000|0.228ms
array.push|1,000,000|28.26ms
new Array(length)|1,000,000|17.37ms
array.push|100,000,000|2,303.399ms
new Array(length)|100,000,000|5,864.376ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.021ms
array.push|100|0.114ms
new Array(length)|100|0.011ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.625ms
new Array(length)|10,000|4.323ms
array.push|1,000,000|337.556ms
new Array(length)|1,000,000|4.926ms
array.push|100,000,000|2,848.286ms
new Array(length)|100,000,000|6,385.524ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|277|79|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|194,821|49|
|[True conditional] Using constructor name|148,212|89|
|[True conditional] Check if property is valid then instanceof |150,092|90|
|[False conditional] Using instanceof only|770,256,781|95|
|[False conditional] Using constructor name|771,713,139|92|
|[False conditional] Check if property is valid then instanceof |769,594,839|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,968,384|91|
|fromUnixToISOString(new Date())|1,531,000|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,562|78|
|Intl.DateTimeFormat().format(new Date())|9,635|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,268|57|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,491|85|
|Reusing Intl.DateTimeFormat()|543,706|92|
|Date.toLocaleDateString()|557,714|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,042|73|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|623,969|91|
|Using brackets {}|624,009|90|
|Using '' + |637,338|91|
|Using date.toString()|674,299|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,344,944|93|
|Using undefined assignment|760,253,931|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|189,155|55|
|NodeError|145,671|86|
|NodeError Range|145,966|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,353,584|96|
|Function returning explicitly undefined|1,315,397|91|
|Function returning implicitly undefined|1,343,114|89|
|Function returning string|1,343,729|93|
|Function returning integer|1,360,135|92|
|Function returning float|1,368,914|90|
|Function returning functions|1,336,595|93|
|Function returning arrow functions|1,357,044|96|
|Function returning empty object|1,388,094|96|
|Function returning empty array|1,388,767|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|769,666,804|95|
|using Array.includes (first item)|769,618,757|94|
|Using raw comparison|772,057,543|94|
|Using raw comparison (first item)|770,823,090|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,520,094|92|
|Using Object.getOwnPropertyNames()|57,402,579|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,727,596|94|
|Length = 10_000 - Array.at|18,685,090|94|
|Length = 1_000_000 - Array.at|18,710,804|96|
|Length = 100 - Array[length - 1]|771,571,733|98|
|Length = 10_000 - Array[length - 1]|768,864,290|97|
|Length = 1_000_000 - Array[length - 1]|763,134,023|85|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,006,524|92|
|Object.create({})|1,148,049|86|
|Cached Empty.prototype|769,306,183|95|
|Empty.prototype|1,182,806|85|
|Empty class|843,853|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,741,092|96|
|Using optional chain (obj.field?.field2) (undefined)|771,112,600|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,169,437|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|772,308,623|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|226,522,897|96|
|Using parseInt(x, 10) - big number (10 len)|12,663,146|92|
|Using + - small number (2 len)|772,055,128|93|
|Using + - big number (10 len)|772,688,844|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|647,146|77|
|Using ? operator to avoid rejection|672,157|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|219,069,827|87|
|Raw usage underscore usage|227,843,981|92|
|Manipulating private properties using #|191,753,428|90|
|Manipulating private properties using underscore(_)|177,997,383|92|
|Manipulating private properties using Symbol|179,689,359|90|
|Manipulating private properties using PrivateSymbol|22,086,391|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,972,564|93|
|Adding property in the object creation - small object|3,012,984|96|
|Adding property after the function creation - small class|167,742|84|
|Adding property in the function creation - small class|170,319|86|
|Adding property after the class creation - small class|140,424|83|
|Adding property in the class creation - small class|140,606|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,675,172|94|
|Using replaceAll()|1,927,636|92|
|Using replaceAll(//g)|2,451,663|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|195,905|94|
|Sort using first char|871,243|93|
|Sort using localeCompare|840,103|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,501|89|
|{...smallObject} - Total keys: 2|57,206,285|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,494|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,123|92|
|{ ...bigObject, ...anotherBigObject }|909|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,991,428|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,609,674|98|
|{ ...smallObject, ...anotherSmallObject }|15,865,106|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,776 ops/sec ±0.78% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 445 ops/sec ±0.72% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,836 ops/sec ±0.62% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 977 ops/sec ±39.26% (43 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|771,866,732|94|
|Using backtick (`)|769,889,455|93|
|Using array.join|7,756,613|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,072,377|93|
|Using this|150,584,572|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,664,746|92|
|Date.now()|15,511,291|94|
