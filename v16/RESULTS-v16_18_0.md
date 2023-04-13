# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Thu Apr 13 2023 00:01:05 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,284,016,365|100|
|Using dot notation|1,280,218,071|100|
|Using define property (writable)|3,849,831|96|
|Using define property initialized (writable)|4,598,559|98|
|Using define property (getter)|2,233,509|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.057ms
new Array(length)|100|0.005ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.391ms
new Array(length)|10,000|0.187ms
array.push|1,000,000|20.563ms
new Array(length)|1,000,000|14.067ms
array.push|100,000,000|1,389.301ms
new Array(length)|100,000,000|4,119.152ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.014ms
new Array(length)|100|0.008ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.338ms
new Array(length)|10,000|3.027ms
array.push|1,000,000|61.427ms
new Array(length)|1,000,000|3.577ms
array.push|100,000,000|2,151.809ms
new Array(length)|100,000,000|3,869.121ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|334|89|
|Array.from|19|52|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,422|62|
|[True conditional] Using constructor name|209,377|98|
|[True conditional] Check if property is valid then instanceof |211,042|96|
|[False conditional] Using instanceof only|1,283,030,051|99|
|[False conditional] Using constructor name|1,283,963,239|95|
|[False conditional] Check if property is valid then instanceof |1,284,864,986|101|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|31,370|96|
|crypto.verify('RSA-SHA256')|30,082|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,019,929|95|
|fromUnixToISOString(new Date())|1,766,604|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,883|81|
|Intl.DateTimeFormat().format(new Date())|12,208|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,328|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,360|91|
|Reusing Intl.DateTimeFormat()|419,599|95|
|Date.toLocaleDateString()|514,208|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,085|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|858,526|99|
|Using brackets {}|875,674|97|
|Using '' + |868,597|100|
|Using date.toString()|946,134|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,273,213|97|
|Using undefined assignment|1,282,586,767|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|248,173|64|
|NodeError|204,018|90|
|NodeError Range|204,650|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,247,467|98|
|Function returning explicitly undefined|1,232,058|97|
|Function returning implicitly undefined|1,242,603|97|
|Function returning string|1,228,205|97|
|Function returning integer|1,251,259|100|
|Function returning float|1,239,369|96|
|Function returning functions|1,215,022|98|
|Function returning arrow functions|1,220,467|98|
|Function returning empty object|1,241,022|99|
|Function returning empty array|1,239,155|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,281,851,265|99|
|using Array.includes (first item)|1,281,320,157|99|
|Using raw comparison|1,283,736,015|98|
|Using raw comparison (first item)|1,283,356,567|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,865,763|96|
|Using Object.getOwnPropertyNames()|86,235,443|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,777,381|94|
|Length = 10_000 - Array.at|18,902,808|96|
|Length = 1_000_000 - Array.at|18,908,804|96|
|Length = 100 - Array[length - 1]|1,281,895,487|98|
|Length = 10_000 - Array[length - 1]|1,281,860,162|101|
|Length = 1_000_000 - Array[length - 1]|1,282,333,743|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,783,873|97|
|Object.create({})|1,887,280|86|
|Cached Empty.prototype|1,283,835,383|96|
|Empty.prototype|1,996,835|90|
|Empty class|1,176,519|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,275,499,477|100|
|Using optional chain (obj.field?.field2) (undefined)|1,275,136,225|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,278,225,691|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,283,138,615|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|317,362,204|99|
|Using parseInt(x, 10) - big number (10 len)|15,033,029|96|
|Using + - small number (2 len)|1,283,688,336|97|
|Using + - big number (10 len)|1,277,388,244|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|893,695|87|
|Using ? operator to avoid rejection|934,130|90|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|10,443,963|99|
|Raw usage underscore usage|7,829,408|94|
|Manipulating private properties using #|3,075,003|93|
|Manipulating private properties using underscore(_)|1,268,441,968|98|
|Manipulating private properties using Symbol|1,265,865,893|95|
|Manipulating private properties using PrivateSymbol|45,375,051|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,888,135|95|
|Adding property in the object creation - small object|2,887,281|95|
|Adding property after the function creation - small class|200,835|91|
|Adding property in the function creation - small class|200,779|91|
|Adding property after the class creation - small class|177,666|90|
|Adding property in the class creation - small class|177,062|89|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,283,405,359|98|
|Getter|97,270,577|94|
|Method|1,283,278,194|98|
|DefineProperty (getter)|1,283,803,094|99|
|DefineProperty (getter & enumerable=false)|96,928,727|97|
|DefineProperty (getter & configurable=false)|1,283,777,392|100|
|DefineProperty (getter & enumerable=false & configurable=false)|96,647,879|98|
|DefineProperty (writable)|1,284,128,349|99|
|DefineProperty (writable & enumerable=false)|1,284,495,138|98|
|DefineProperty (writable & enumerable=false & configurable=false)|144,946,709|33|
|DefineProperties (getter)|52,943,514|89|
|DefineProperties (getter & enumerable=false)|97,361,412|96|
|DefineProperties (getter & enumerable=false & configurable=false)|97,530,310|100|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|961,220,986|101|
|Setter|7,103,394|96|
|Method|961,254,432|101|
|DefineProperty (setter)|960,627,486|98|
|DefineProperty (setter & enumerable=false)|7,228,963|96|
|DefineProperty (setter & configurable=false)|7,279,032|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,131,474|97|
|DefineProperty (writable)|1,281,374,361|100|
|DefineProperty (writable & enumerable=false)|1,281,627,421|97|
|DefineProperty (writable & enumerable=false & configurable=false)|884,044,260|72|
|DefineProperties (setter)|123,419,912|84|
|DefineProperties (setter & enumerable=false)|7,116,192|97|
|DefineProperties (setter & enumerable=false & configurable=false)|7,028,483|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,940,899|96|
|Using replaceAll()|2,648,081|98|
|Using replaceAll(//g)|2,602,315|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|243,687|97|
|Sort using first char|1,093,357|96|
|Sort using localeCompare|555,390|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|95|
|{...smallObject} - Total keys: 2|97,440,000|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,917|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,247|98|
|{ ...bigObject, ...anotherBigObject }|1,122|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,711,221|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|32,340,332|94|
|{ ...smallObject, ...anotherSmallObject }|21,223,562|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,499 ops/sec ±0.39% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 487 ops/sec ±0.27% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,861 ops/sec ±0.25% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,850 ops/sec ±7.51% (73 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,282,532,880|97|
|Using backtick (`)|1,282,643,807|96|
|Using array.join|9,331,473|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|195,059,484|94|
|Using this|194,584,867|98|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,852,803|99|
|Date.now()|19,609,860|97|
