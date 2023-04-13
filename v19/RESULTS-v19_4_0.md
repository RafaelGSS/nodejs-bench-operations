# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Thu Apr 13 2023 01:48:08 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,289,799,862|97|
|Using dot notation|1,289,010,672|97|
|Using define property (writable)|4,006,702|96|
|Using define property initialized (writable)|5,202,234|98|
|Using define property (getter)|2,199,534|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.437ms
new Array(length)|10,000|0.351ms
array.push|1,000,000|26.505ms
new Array(length)|1,000,000|5.569ms
array.push|100,000,000|1,549.736ms
new Array(length)|100,000,000|3,886.786ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.013ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|186.632ms
new Array(length)|1,000,000|8.51ms
array.push|100,000,000|1,731.331ms
new Array(length)|100,000,000|3,930.564ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|348|87|
|Array.from|20|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,751|63|
|[True conditional] Using constructor name|196,608|98|
|[True conditional] Check if property is valid then instanceof |196,836|97|
|[False conditional] Using instanceof only|1,291,022,288|101|
|[False conditional] Using constructor name|1,291,159,644|96|
|[False conditional] Check if property is valid then instanceof |1,291,742,701|100|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,772|95|
|crypto.verify('RSA-SHA256')|6,779|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,263,413|96|
|fromUnixToISOString(new Date())|1,938,687|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,377|86|
|Intl.DateTimeFormat().format(new Date())|10,301|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,575|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,319|85|
|Reusing Intl.DateTimeFormat()|538,267|98|
|Date.toLocaleDateString()|552,505|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,965|86|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|943,605|99|
|Using brackets {}|956,440|99|
|Using '' + |948,767|96|
|Using date.toString()|1,039,228|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,311,072|96|
|Using undefined assignment|1,289,636,599|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|226,365|62|
|NodeError|189,965|92|
|NodeError Range|190,304|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,403,285|100|
|Function returning explicitly undefined|1,405,134|96|
|Function returning implicitly undefined|1,413,219|94|
|Function returning string|1,399,502|94|
|Function returning integer|1,417,257|96|
|Function returning float|1,411,719|96|
|Function returning functions|1,397,040|96|
|Function returning arrow functions|1,398,838|97|
|Function returning empty object|1,417,414|97|
|Function returning empty array|1,415,222|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,289,545,358|101|
|using Array.includes (first item)|1,285,959,725|98|
|Using raw comparison|1,284,275,159|96|
|Using raw comparison (first item)|1,284,339,486|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,845,528|94|
|Using Object.getOwnPropertyNames()|88,125,708|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,287,778,202|98|
|Length = 10_000 - Array.at|1,287,578,130|99|
|Length = 1_000_000 - Array.at|1,287,488,717|99|
|Length = 100 - Array[length - 1]|1,289,751,099|99|
|Length = 10_000 - Array[length - 1]|1,289,481,622|94|
|Length = 1_000_000 - Array[length - 1]|1,289,387,227|101|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,085,233|94|
|Object.create({})|2,302,265|84|
|Cached Empty.prototype|1,289,888,547|98|
|Empty.prototype|2,157,265|87|
|Empty class|1,296,598|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,291,026,499|100|
|Using optional chain (obj.field?.field2) (undefined)|1,291,267,901|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,290,971,548|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,290,270,243|101|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|348,184,102|97|
|Using parseInt(x, 10) - big number (10 len)|19,353,851|96|
|Using + - small number (2 len)|1,291,826,070|100|
|Using + - big number (10 len)|1,291,226,325|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,044,572|88|
|Using ? operator to avoid rejection|1,062,968|89|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,283,949,006|97|
|Raw usage underscore usage|1,286,669,138|98|
|Manipulating private properties using #|1,269,662,357|97|
|Manipulating private properties using underscore(_)|1,269,883,698|98|
|Manipulating private properties using Symbol|1,275,069,811|97|
|Manipulating private properties using PrivateSymbol|52,974,645|100|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,099,990|96|
|Adding property in the object creation - small object|3,095,327|96|
|Adding property after the function creation - small class|213,239|90|
|Adding property in the function creation - small class|216,788|93|
|Adding property after the class creation - small class|193,105|88|
|Adding property in the class creation - small class|192,973|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,290,625,083|93|
|Getter|99,450,458|97|
|Method|1,290,746,823|96|
|DefineProperty (getter)|1,290,647,526|99|
|DefineProperty (getter & enumerable=false)|99,151,434|98|
|DefineProperty (getter & configurable=false)|1,290,480,351|101|
|DefineProperty (getter & enumerable=false & configurable=false)|99,383,079|98|
|DefineProperty (writable)|1,291,346,667|100|
|DefineProperty (writable & enumerable=false)|1,291,148,002|98|
|DefineProperty (writable & enumerable=false & configurable=false)|575,568,499|46|
|DefineProperties (getter)|56,435,056|88|
|DefineProperties (getter & enumerable=false)|99,196,252|97|
|DefineProperties (getter & enumerable=false & configurable=false)|99,291,977|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|966,942,568|100|
|Setter|8,360,413|94|
|Method|961,652,926|98|
|DefineProperty (setter)|961,950,190|99|
|DefineProperty (setter & enumerable=false)|8,487,517|98|
|DefineProperty (setter & configurable=false)|8,500,561|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,258,171|96|
|DefineProperty (writable)|1,289,519,865|98|
|DefineProperty (writable & enumerable=false)|1,289,570,500|99|
|DefineProperty (writable & enumerable=false & configurable=false)|1,288,765,479|99|
|DefineProperties (setter)|1,288,547,865|100|
|DefineProperties (setter & enumerable=false)|7,563,285|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,591,207|92|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,222,716|97|
|Using replaceAll()|2,773,395|95|
|Using replaceAll(//g)|2,837,475|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|237,476|97|
|Sort using first char|1,064,020|99|
|Sort using localeCompare|1,026,100|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,819|98|
|{...smallObject} - Total keys: 2|104,883,361|100|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,930|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,443|100|
|{ ...bigObject, ...anotherBigObject }|1,132|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,933,098|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,362,062|95|
|{ ...smallObject, ...anotherSmallObject }|22,217,229|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,449 ops/sec ±0.51% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 501 ops/sec ±0.15% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,036 ops/sec ±0.30% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,685 ops/sec ±6.10% (74 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,290,074,269|98|
|Using backtick (`)|1,290,359,217|98|
|Using array.join|10,463,856|93|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,291,362,094|96|
|Using indexof|1,290,637,029|99|
|Using RegExp.test|17,922,684|96|
|Using RegExp.text with cached regex pattern|18,109,737|87|
|Using new RegExp.test|3,856,425|96|
|Using new RegExp.test with cached regex pattern|3,986,422|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|188,518,322|94|
|Using this|214,992,225|100|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,181,379|95|
|Date.now()|22,396,058|96|
