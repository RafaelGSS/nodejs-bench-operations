# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.16.0`
* __Run:__ Thu Apr 13 2023 12:20:54 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,275,555,612|100|
|Using dot notation|1,273,315,416|96|
|Using define property (writable)|3,844,182|95|
|Using define property initialized (writable)|5,052,435|98|
|Using define property (getter)|2,107,257|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.017ms
new Array(length)|100|0.007ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.447ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|21.111ms
new Array(length)|1,000,000|12.897ms
array.push|100,000,000|1,427.863ms
new Array(length)|100,000,000|3,964.519ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.011ms
new Array(length)|100|0.008ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.374ms
new Array(length)|10,000|3.06ms
array.push|1,000,000|64.087ms
new Array(length)|1,000,000|3.273ms
array.push|100,000,000|2,193.329ms
new Array(length)|100,000,000|3,868.343ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|319|90|
|Array.from|20|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|247,339|60|
|[True conditional] Using constructor name|199,937|99|
|[True conditional] Check if property is valid then instanceof |199,129|95|
|[False conditional] Using instanceof only|1,275,486,962|91|
|[False conditional] Using constructor name|1,272,417,634|94|
|[False conditional] Check if property is valid then instanceof |1,271,500,301|97|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,520|94|
|crypto.verify('RSA-SHA256')|6,540|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,152,223|98|
|fromUnixToISOString(new Date())|1,851,850|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,356|85|
|Intl.DateTimeFormat().format(new Date())|12,061|65|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,291|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,598|95|
|Reusing Intl.DateTimeFormat()|398,568|77|
|Date.toLocaleDateString()|520,262|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,144|84|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|888,209|97|
|Using brackets {}|901,896|100|
|Using '' + |895,663|97|
|Using date.toString()|973,953|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,117,324|95|
|Using undefined assignment|1,273,247,884|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|236,662|60|
|NodeError|196,451|91|
|NodeError Range|196,614|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,309,125|96|
|Function returning explicitly undefined|1,298,518|95|
|Function returning implicitly undefined|1,314,376|94|
|Function returning string|1,303,578|97|
|Function returning integer|1,327,689|94|
|Function returning float|1,320,110|95|
|Function returning functions|1,299,286|96|
|Function returning arrow functions|1,306,752|98|
|Function returning empty object|1,318,896|98|
|Function returning empty array|1,302,745|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,273,863,654|99|
|using Array.includes (first item)|1,274,955,713|95|
|Using raw comparison|1,276,377,063|99|
|Using raw comparison (first item)|1,274,922,394|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,400,684|94|
|Using Object.getOwnPropertyNames()|87,253,258|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,200,451|98|
|Length = 10_000 - Array.at|21,198,717|96|
|Length = 1_000_000 - Array.at|21,141,414|99|
|Length = 100 - Array[length - 1]|1,276,631,032|95|
|Length = 10_000 - Array[length - 1]|1,276,567,247|101|
|Length = 1_000_000 - Array[length - 1]|1,276,137,778|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,197,941|92|
|Object.create({})|1,378,039|91|
|Cached Empty.prototype|1,270,477,790|100|
|Empty.prototype|1,610,375|86|
|Empty class|932,395|93|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,261,671,211|100|
|Using optional chain (obj.field?.field2) (undefined)|1,275,807,127|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,276,270,382|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,275,938,679|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|344,489,376|94|
|Using parseInt(x, 10) - big number (10 len)|19,429,088|99|
|Using + - small number (2 len)|1,266,586,378|94|
|Using + - big number (10 len)|1,276,520,717|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|701,491|85|
|Using ? operator to avoid rejection|722,455|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|337,361,725|98|
|Raw usage underscore usage|324,745,440|98|
|Manipulating private properties using #|236,421,045|86|
|Manipulating private properties using underscore(_)|189,093,023|91|
|Manipulating private properties using Symbol|190,199,230|94|
|Manipulating private properties using PrivateSymbol|50,429,349|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,894,301|98|
|Adding property in the object creation - small object|2,897,311|100|
|Adding property after the function creation - small class|175,913|90|
|Adding property in the function creation - small class|176,296|92|
|Adding property after the class creation - small class|152,926|89|
|Adding property in the class creation - small class|151,582|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,274,428,274|98|
|Getter|103,791,670|94|
|Method|1,276,339,355|96|
|DefineProperty (getter)|1,277,155,150|100|
|DefineProperty (getter & enumerable=false)|103,783,924|96|
|DefineProperty (getter & configurable=false)|1,275,831,981|98|
|DefineProperty (getter & enumerable=false & configurable=false)|103,829,005|97|
|DefineProperty (writable)|1,274,339,040|99|
|DefineProperty (writable & enumerable=false)|487,712,669|40|
|DefineProperty (writable & enumerable=false & configurable=false)|160,439,818|83|
|DefineProperties (getter)|61,819,819|90|
|DefineProperties (getter & enumerable=false)|103,734,687|99|
|DefineProperties (getter & enumerable=false & configurable=false)|103,760,444|98|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|952,182,388|99|
|Setter|7,520,157|92|
|Method|955,111,977|95|
|DefineProperty (setter)|955,340,015|99|
|DefineProperty (setter & enumerable=false)|7,673,489|93|
|DefineProperty (setter & configurable=false)|7,591,214|92|
|DefineProperty (setter & enumerable=false & configurable=false)|7,668,752|97|
|DefineProperty (writable)|1,272,984,411|98|
|DefineProperty (writable & enumerable=false)|563,852,754|50|
|DefineProperty (writable & enumerable=false & configurable=false)|159,319,579|85|
|DefineProperties (setter)|116,767,505|77|
|DefineProperties (setter & enumerable=false)|7,538,502|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,573,242|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,623,665|96|
|Using replaceAll()|2,294,650|95|
|Using replaceAll(//g)|2,340,469|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|234,953|99|
|Sort using first char|1,095,324|95|
|Sort using localeCompare|1,057,245|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,820|95|
|{...smallObject} - Total keys: 2|108,031,563|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,988|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,434|97|
|{ ...bigObject, ...anotherBigObject }|1,140|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,226,262|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,738,371|95|
|{ ...smallObject, ...anotherSmallObject }|20,979,451|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,504 ops/sec ±0.54% (91 runs sampled)
streams.web.Readable reading 1e3 * some data x 507 ops/sec ±0.31% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,487 ops/sec ±0.32% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,706 ops/sec ±7.24% (77 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,277,303,768|99|
|Using backtick (`)|1,277,974,925|97|
|Using array.join|9,423,541|93|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,277,095,104|100|
|Using indexof|1,276,854,661|100|
|Using RegExp.test|18,075,284|97|
|Using RegExp.text with cached regex pattern|18,845,231|98|
|Using new RegExp.test|3,668,250|97|
|Using new RegExp.test with cached regex pattern|4,095,203|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|186,143,425|92|
|Using this|193,721,744|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,314,579|98|
|Date.now()|21,272,734|99|
