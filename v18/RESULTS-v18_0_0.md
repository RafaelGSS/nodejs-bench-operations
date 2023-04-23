# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Sun Apr 23 2023 14:26:19 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,040,018|100|
|Using dot notation|848,865,330|99|
|Using define property (writable)|4,774,361|99|
|Using define property initialized (writable)|5,987,831|99|
|Using define property (getter)|2,359,840|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.007ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.3ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|23.951ms
new Array(length)|1,000,000|13.914ms
array.push|100,000,000|1,746.639ms
new Array(length)|100,000,000|3,765.412ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.077ms
new Array(length)|100|0.008ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.444ms
new Array(length)|10,000|3.208ms
array.push|1,000,000|247.147ms
new Array(length)|1,000,000|4.344ms
array.push|100,000,000|2,188.514ms
new Array(length)|100,000,000|4,090.601ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|313|89|
|Array.from|20|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,987|51|
|[True conditional] Using constructor name|181,504|96|
|[True conditional] Check if property is valid then instanceof |184,767|95|
|[False conditional] Using instanceof only|849,389,242|94|
|[False conditional] Using constructor name|849,776,247|99|
|[False conditional] Check if property is valid then instanceof |850,231,337|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,160|97|
|crypto.verify('RSA-SHA256')|2,126|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,648,036|99|
|fromUnixToISOString(new Date())|2,114,703|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,763|88|
|Intl.DateTimeFormat().format(new Date())|11,165|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,884|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,561|91|
|Reusing Intl.DateTimeFormat()|528,814|97|
|Date.toLocaleDateString()|654,884|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,394|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,028,964|100|
|Using brackets {}|1,047,981|99|
|Using '' + |1,041,567|100|
|Using date.toString()|1,144,632|101|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,523,873|97|
|Using undefined assignment|848,506,877|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|238,476|52|
|NodeError|182,478|95|
|NodeError Range|182,870|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,924,042|96|
|Function returning explicitly undefined|1,921,426|97|
|Function returning implicitly undefined|1,818,899|96|
|Function returning string|1,930,647|98|
|Function returning integer|1,910,482|94|
|Function returning float|1,967,405|99|
|Function returning functions|1,886,876|96|
|Function returning arrow functions|1,924,933|100|
|Function returning empty object|1,954,188|97|
|Function returning empty array|1,945,221|100|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|120,754,196|97|
|using Array.includes (first item)|131,948,273|97|
|Using raw comparison|849,824,232|96|
|Using raw comparison (first item)|849,561,768|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,400,516|91|
|Using Object.getOwnPropertyNames()|93,959,299|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,383,178|99|
|Length = 10_000 - Array.at|26,350,830|94|
|Length = 1_000_000 - Array.at|26,410,268|98|
|Length = 100 - Array[length - 1]|848,565,230|98|
|Length = 10_000 - Array[length - 1]|848,004,661|97|
|Length = 1_000_000 - Array[length - 1]|848,044,978|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|76,530,914|97|
|Object.create({})|2,095,862|85|
|Cached Empty.prototype|849,071,991|99|
|Empty.prototype|2,205,581|87|
|Empty class|1,327,195|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|849,319,037|99|
|Using optional chain (obj.field?.field2) (undefined)|849,473,112|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,410,381|101|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,552,814|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|309,857,641|93|
|Using parseInt(x, 10) - big number (10 len)|21,498,987|100|
|Using + - small number (2 len)|849,666,374|94|
|Using + - big number (10 len)|848,720,755|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,114,580|87|
|Using ? operator to avoid rejection|1,178,180|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|348,774,574|95|
|Raw usage underscore usage|362,565,860|100|
|Manipulating private properties using #|271,852,578|93|
|Manipulating private properties using underscore(_)|269,325,590|101|
|Manipulating private properties using Symbol|267,466,015|100|
|Manipulating private properties using PrivateSymbol|55,067,755|99|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,839,382|99|
|Adding property in the object creation - small object|3,842,198|97|
|Adding property after the function creation - small class|244,316|88|
|Adding property in the function creation - small class|243,778|92|
|Adding property after the class creation - small class|204,531|89|
|Adding property in the class creation - small class|204,034|86|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,499,639|100|
|Getter|98,586,745|97|
|Method|849,426,614|97|
|DefineProperty (getter)|848,538,260|97|
|DefineProperty (getter & enumerable=false)|98,826,159|95|
|DefineProperty (getter & configurable=false)|849,743,030|99|
|DefineProperty (getter & enumerable=false & configurable=false)|98,629,740|95|
|DefineProperty (writable)|849,677,831|96|
|DefineProperty (writable & enumerable=false)|849,749,491|100|
|DefineProperty (writable & enumerable=false & configurable=false)|850,075,016|96|
|DefineProperties (getter)|84,129,814|85|
|DefineProperties (getter & enumerable=false)|63,105,288|93|
|DefineProperties (getter & enumerable=false & configurable=false)|61,253,251|90|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|841,436,283|100|
|Setter|11,417,526|96|
|Method|842,292,793|99|
|DefineProperty (setter)|840,566,420|99|
|DefineProperty (setter & enumerable=false)|10,917,904|98|
|DefineProperty (setter & configurable=false)|11,390,906|99|
|DefineProperty (setter & enumerable=false & configurable=false)|11,447,381|98|
|DefineProperty (writable)|848,144,610|95|
|DefineProperty (writable & enumerable=false)|849,057,168|100|
|DefineProperty (writable & enumerable=false & configurable=false)|848,563,697|97|
|DefineProperties (setter)|353,886,362|44|
|DefineProperties (setter & enumerable=false)|10,319,876|96|
|DefineProperties (setter & enumerable=false & configurable=false)|10,144,486|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,655,765|94|
|Using replaceAll()|3,312,507|100|
|Using replaceAll(//g)|3,301,495|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|272,518|93|
|Sort using first char|1,272,598|99|
|Sort using localeCompare|1,172,964|100|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,054|97|
|{...smallObject} - Total keys: 2|109,094,885|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,246|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,437|99|
|{ ...bigObject, ...anotherBigObject }|1,214|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,568,192|101|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,137,377|99|
|{ ...smallObject, ...anotherSmallObject }|24,344,189|99|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,726 ops/sec ±0.85% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 530 ops/sec ±0.40% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,612 ops/sec ±0.53% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,048 ops/sec ±48.31% (37 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,244,795|100|
|Using backtick (`)|849,482,668|100|
|Using array.join|12,162,626|101|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,635,853|101|
|Using indexof|849,183,755|94|
|Using RegExp.test|15,505,400|100|
|Using RegExp.text with cached regex pattern|16,143,141|101|
|Using new RegExp.test|4,466,653|98|
|Using new RegExp.test with cached regex pattern|5,085,249|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|28,965,625|98|
|Using this|159,900,437|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,045,851|95|
|Date.now()|21,736,487|98|
