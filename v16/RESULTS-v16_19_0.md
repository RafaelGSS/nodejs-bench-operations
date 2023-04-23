# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sun Apr 23 2023 12:40:03 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,758,137|100|
|Using dot notation|850,031,700|101|
|Using define property (writable)|4,524,262|96|
|Using define property initialized (writable)|5,769,283|97|
|Using define property (getter)|2,270,881|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.066ms
new Array(length)|100|0.006ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.151ms
array.push|1,000,000|22.352ms
new Array(length)|1,000,000|14.486ms
array.push|100,000,000|1,744.158ms
new Array(length)|100,000,000|3,807.269ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.436ms
new Array(length)|10,000|3.204ms
array.push|1,000,000|250.128ms
new Array(length)|1,000,000|4.301ms
array.push|100,000,000|2,166.527ms
new Array(length)|100,000,000|4,135.098ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|320|90|
|Array.from|22|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|241,348|52|
|[True conditional] Using constructor name|184,845|97|
|[True conditional] Check if property is valid then instanceof |187,048|97|
|[False conditional] Using instanceof only|850,899,999|98|
|[False conditional] Using constructor name|850,811,090|101|
|[False conditional] Check if property is valid then instanceof |851,147,409|100|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|30,298|93|
|crypto.verify('RSA-SHA256')|29,331|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,602,798|92|
|fromUnixToISOString(new Date())|2,072,425|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,557|79|
|Intl.DateTimeFormat().format(new Date())|13,035|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,689|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,841|73|
|Reusing Intl.DateTimeFormat()|623,602|93|
|Date.toLocaleDateString()|622,660|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,893|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,012,939|97|
|Using brackets {}|1,028,677|98|
|Using '' + |1,019,730|100|
|Using date.toString()|1,114,375|100|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,424,684|95|
|Using undefined assignment|849,277,179|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|236,335|52|
|NodeError|183,451|91|
|NodeError Range|184,504|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,691,551|96|
|Function returning explicitly undefined|1,745,724|101|
|Function returning implicitly undefined|1,788,350|100|
|Function returning string|1,756,793|101|
|Function returning integer|1,784,194|100|
|Function returning float|1,728,367|101|
|Function returning functions|1,704,667|101|
|Function returning arrow functions|1,740,896|101|
|Function returning empty object|1,729,693|99|
|Function returning empty array|1,750,056|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|849,620,578|100|
|using Array.includes (first item)|849,344,908|96|
|Using raw comparison|851,450,988|98|
|Using raw comparison (first item)|850,614,997|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,258,646|89|
|Using Object.getOwnPropertyNames()|91,993,677|100|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,131,055|98|
|Length = 10_000 - Array.at|26,481,910|98|
|Length = 1_000_000 - Array.at|26,410,085|99|
|Length = 100 - Array[length - 1]|849,611,297|95|
|Length = 10_000 - Array[length - 1]|849,264,749|101|
|Length = 1_000_000 - Array[length - 1]|849,241,031|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,348,604|92|
|Object.create({})|2,205,986|95|
|Cached Empty.prototype|850,888,605|99|
|Empty.prototype|2,261,731|86|
|Empty class|1,306,191|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,155,440|101|
|Using optional chain (obj.field?.field2) (undefined)|850,633,823|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,469,841|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|849,758,400|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|298,998,613|92|
|Using parseInt(x, 10) - big number (10 len)|21,299,380|99|
|Using + - small number (2 len)|851,368,389|98|
|Using + - big number (10 len)|850,169,868|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,100,126|85|
|Using ? operator to avoid rejection|1,155,567|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,050,427|98|
|Raw usage underscore usage|10,687,307|98|
|Manipulating private properties using #|3,948,094|97|
|Manipulating private properties using underscore(_)|841,184,841|96|
|Manipulating private properties using Symbol|840,059,353|99|
|Manipulating private properties using PrivateSymbol|47,741,810|99|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,491,383|95|
|Adding property in the object creation - small object|2,497,414|97|
|Adding property after the function creation - small class|228,858|88|
|Adding property in the function creation - small class|228,378|90|
|Adding property after the class creation - small class|197,780|86|
|Adding property in the class creation - small class|197,042|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,583,845|100|
|Getter|93,492,317|97|
|Method|850,043,429|97|
|DefineProperty (getter)|850,119,927|101|
|DefineProperty (getter & enumerable=false)|93,335,608|94|
|DefineProperty (getter & configurable=false)|850,839,429|97|
|DefineProperty (getter & enumerable=false & configurable=false)|93,596,225|96|
|DefineProperty (writable)|618,715,698|75|
|DefineProperty (writable & enumerable=false)|139,189,386|82|
|DefineProperty (writable & enumerable=false & configurable=false)|144,924,231|83|
|DefineProperties (getter)|58,045,795|91|
|DefineProperties (getter & enumerable=false)|95,228,271|97|
|DefineProperties (getter & enumerable=false & configurable=false)|93,405,022|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|841,760,908|99|
|Setter|9,718,992|100|
|Method|844,087,315|97|
|DefineProperty (setter)|848,964,841|98|
|DefineProperty (setter & enumerable=false)|9,825,982|100|
|DefineProperty (setter & configurable=false)|9,935,537|98|
|DefineProperty (setter & enumerable=false & configurable=false)|9,803,885|98|
|DefineProperty (writable)|850,196,975|98|
|DefineProperty (writable & enumerable=false)|174,199,175|22|
|DefineProperty (writable & enumerable=false & configurable=false)|141,241,479|83|
|DefineProperties (setter)|114,473,167|87|
|DefineProperties (setter & enumerable=false)|9,962,634|99|
|DefineProperties (setter & enumerable=false & configurable=false)|9,937,005|100|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,473,226|97|
|Using replaceAll()|3,223,978|97|
|Using replaceAll(//g)|3,144,886|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|265,662|95|
|Sort using first char|1,223,762|99|
|Sort using localeCompare|630,732|100|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,060|98|
|{...smallObject} - Total keys: 2|97,979,036|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,183|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,200|99|
|{ ...bigObject, ...anotherBigObject }|1,219|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,173,854|100|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,690,253|98|
|{ ...smallObject, ...anotherSmallObject }|23,082,866|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,666 ops/sec ±0.87% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 521 ops/sec ±0.20% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,201 ops/sec ±0.63% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,044 ops/sec ±31.35% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|850,310,470|99|
|Using backtick (`)|850,219,130|100|
|Using array.join|12,511,929|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,791,557|99|
|Using indexof|850,494,494|101|
|Using RegExp.test|15,595,787|100|
|Using RegExp.text with cached regex pattern|16,298,687|96|
|Using new RegExp.test|5,011,216|99|
|Using new RegExp.test with cached regex pattern|5,915,372|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|157,201,474|94|
|Using this|159,884,970|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,251,009|95|
|Date.now()|20,473,309|97|
