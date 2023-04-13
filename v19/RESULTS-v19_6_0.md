# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.6.0`
* __Run:__ Thu Apr 13 2023 02:15:34 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,279,987,870|99|
|Using dot notation|1,253,078,753|99|
|Using define property (writable)|3,906,457|95|
|Using define property initialized (writable)|4,996,815|96|
|Using define property (getter)|2,296,542|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.403ms
new Array(length)|10,000|0.336ms
array.push|1,000,000|26.602ms
new Array(length)|1,000,000|5.54ms
array.push|100,000,000|1,544.876ms
new Array(length)|100,000,000|3,894.649ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.013ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.358ms
new Array(length)|10,000|0.19ms
array.push|1,000,000|186.34ms
new Array(length)|1,000,000|8.282ms
array.push|100,000,000|1,692.055ms
new Array(length)|100,000,000|3,957.576ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|348|88|
|Array.from|20|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|235,727|61|
|[True conditional] Using constructor name|197,315|98|
|[True conditional] Check if property is valid then instanceof |199,774|98|
|[False conditional] Using instanceof only|1,286,443,596|98|
|[False conditional] Using constructor name|1,289,492,466|98|
|[False conditional] Check if property is valid then instanceof |1,290,652,310|100|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,834|95|
|crypto.verify('RSA-SHA256')|6,790|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,234,399|94|
|fromUnixToISOString(new Date())|1,972,400|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,299|83|
|Intl.DateTimeFormat().format(new Date())|10,329|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,966|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,774|85|
|Reusing Intl.DateTimeFormat()|528,682|98|
|Date.toLocaleDateString()|544,334|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,788|84|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|911,738|96|
|Using brackets {}|919,699|96|
|Using '' + |920,276|97|
|Using date.toString()|1,005,677|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,377,550|95|
|Using undefined assignment|1,288,484,489|101|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|228,822|60|
|NodeError|194,750|97|
|NodeError Range|194,896|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,447,614|95|
|Function returning explicitly undefined|1,455,056|95|
|Function returning implicitly undefined|1,450,030|96|
|Function returning string|1,436,548|95|
|Function returning integer|1,465,641|95|
|Function returning float|1,458,804|97|
|Function returning functions|1,445,425|96|
|Function returning arrow functions|1,437,976|89|
|Function returning empty object|1,459,223|99|
|Function returning empty array|1,437,394|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,287,244,306|99|
|using Array.includes (first item)|1,253,335,115|100|
|Using raw comparison|1,287,504,129|92|
|Using raw comparison (first item)|1,289,607,882|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,304,321|97|
|Using Object.getOwnPropertyNames()|88,541,177|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,286,386,442|98|
|Length = 10_000 - Array.at|1,268,738,222|100|
|Length = 1_000_000 - Array.at|1,251,606,227|98|
|Length = 100 - Array[length - 1]|1,253,647,130|97|
|Length = 10_000 - Array[length - 1]|1,253,870,580|92|
|Length = 1_000_000 - Array[length - 1]|1,287,826,124|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,757,644|91|
|Object.create({})|2,420,548|89|
|Cached Empty.prototype|1,288,896,145|101|
|Empty.prototype|2,181,341|88|
|Empty class|1,331,838|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,289,455,270|101|
|Using optional chain (obj.field?.field2) (undefined)|1,289,330,510|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,289,287,909|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,289,412,257|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|346,713,521|99|
|Using parseInt(x, 10) - big number (10 len)|19,747,592|99|
|Using + - small number (2 len)|1,290,491,805|98|
|Using + - big number (10 len)|1,289,465,378|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,076,734|85|
|Using ? operator to avoid rejection|1,107,957|89|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,284,903,213|97|
|Raw usage underscore usage|1,285,123,753|101|
|Manipulating private properties using #|1,273,550,401|98|
|Manipulating private properties using underscore(_)|1,273,414,210|98|
|Manipulating private properties using Symbol|1,273,676,399|97|
|Manipulating private properties using PrivateSymbol|53,405,760|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,031,537|95|
|Adding property in the object creation - small object|2,989,840|98|
|Adding property after the function creation - small class|217,930|89|
|Adding property in the function creation - small class|220,648|91|
|Adding property after the class creation - small class|194,306|89|
|Adding property in the class creation - small class|193,342|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,290,030,596|93|
|Getter|98,726,747|97|
|Method|1,290,026,303|99|
|DefineProperty (getter)|1,289,635,639|99|
|DefineProperty (getter & enumerable=false)|99,285,023|98|
|DefineProperty (getter & configurable=false)|1,289,790,559|101|
|DefineProperty (getter & enumerable=false & configurable=false)|92,337,238|96|
|DefineProperty (writable)|1,260,176,902|93|
|DefineProperty (writable & enumerable=false)|1,267,423,627|90|
|DefineProperty (writable & enumerable=false & configurable=false)|590,170,184|48|
|DefineProperties (getter)|58,558,914|92|
|DefineProperties (getter & enumerable=false)|98,208,192|95|
|DefineProperties (getter & enumerable=false & configurable=false)|99,226,258|99|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|962,631,870|93|
|Setter|8,462,046|95|
|Method|960,445,032|95|
|DefineProperty (setter)|965,769,336|98|
|DefineProperty (setter & enumerable=false)|8,487,770|97|
|DefineProperty (setter & configurable=false)|8,417,923|94|
|DefineProperty (setter & enumerable=false & configurable=false)|8,431,283|93|
|DefineProperty (writable)|1,287,170,535|97|
|DefineProperty (writable & enumerable=false)|963,694,899|76|
|DefineProperty (writable & enumerable=false & configurable=false)|158,539,279|90|
|DefineProperties (setter)|122,105,922|92|
|DefineProperties (setter & enumerable=false)|8,510,196|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,386,693|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,110,969|96|
|Using replaceAll()|2,780,902|94|
|Using replaceAll(//g)|2,837,294|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|242,132|98|
|Sort using first char|1,063,177|97|
|Sort using localeCompare|1,039,684|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,779|92|
|{...smallObject} - Total keys: 2|104,197,836|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,939|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,350|96|
|{ ...bigObject, ...anotherBigObject }|1,110|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,705,782|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,572,856|91|
|{ ...smallObject, ...anotherSmallObject }|21,754,395|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,441 ops/sec ±0.62% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 497 ops/sec ±0.14% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,954 ops/sec ±0.30% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,857 ops/sec ±7.93% (72 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,289,266,738|98|
|Using backtick (`)|1,289,381,735|100|
|Using array.join|11,169,484|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,289,366,694|99|
|Using indexof|1,286,049,205|100|
|Using RegExp.test|15,639,231|93|
|Using RegExp.text with cached regex pattern|16,198,809|93|
|Using new RegExp.test|3,743,491|94|
|Using new RegExp.test with cached regex pattern|3,985,885|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|187,109,828|87|
|Using this|214,903,393|99|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,671,909|97|
|Date.now()|22,043,911|99|
