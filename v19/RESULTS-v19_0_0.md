# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Thu Apr 13 2023 01:34:22 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,282,114,447|100|
|Using dot notation|1,261,370,342|96|
|Using define property (writable)|3,818,228|94|
|Using define property initialized (writable)|5,025,156|94|
|Using define property (getter)|2,240,031|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.302ms
array.push|1,000,000|26.822ms
new Array(length)|1,000,000|5.463ms
array.push|100,000,000|1,576.047ms
new Array(length)|100,000,000|3,935.688ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.058ms
new Array(length)|100|0.007ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|194.633ms
new Array(length)|1,000,000|8.275ms
array.push|100,000,000|1,775.45ms
new Array(length)|100,000,000|3,980.176ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|328|83|
|Array.from|19|50|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|234,409|63|
|[True conditional] Using constructor name|195,778|95|
|[True conditional] Check if property is valid then instanceof |197,639|95|
|[False conditional] Using instanceof only|1,290,790,649|98|
|[False conditional] Using constructor name|1,290,453,458|97|
|[False conditional] Check if property is valid then instanceof |1,291,651,053|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,664|97|
|crypto.verify('RSA-SHA256')|6,715|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,261,678|96|
|fromUnixToISOString(new Date())|1,976,709|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,207|86|
|Intl.DateTimeFormat().format(new Date())|10,110|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,726|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,039|80|
|Reusing Intl.DateTimeFormat()|557,435|96|
|Date.toLocaleDateString()|570,879|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,685|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|947,681|99|
|Using brackets {}|962,483|96|
|Using '' + |956,598|99|
|Using date.toString()|1,032,380|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,341,325|96|
|Using undefined assignment|1,289,417,051|101|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|228,053|62|
|NodeError|191,753|94|
|NodeError Range|190,332|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,433,151|94|
|Function returning explicitly undefined|1,431,812|92|
|Function returning implicitly undefined|1,438,154|96|
|Function returning string|1,428,166|99|
|Function returning integer|1,445,295|96|
|Function returning float|1,449,442|98|
|Function returning functions|1,420,603|100|
|Function returning arrow functions|1,425,627|95|
|Function returning empty object|1,447,236|95|
|Function returning empty array|1,447,467|99|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,288,710,508|99|
|using Array.includes (first item)|1,289,411,589|99|
|Using raw comparison|1,291,125,151|97|
|Using raw comparison (first item)|1,290,680,103|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,363,059|98|
|Using Object.getOwnPropertyNames()|89,796,882|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,284,595,474|96|
|Length = 10_000 - Array.at|1,283,362,885|97|
|Length = 1_000_000 - Array.at|1,278,566,756|99|
|Length = 100 - Array[length - 1]|1,281,841,185|98|
|Length = 10_000 - Array[length - 1]|1,281,977,088|97|
|Length = 1_000_000 - Array[length - 1]|1,280,832,953|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|69,002,715|96|
|Object.create({})|2,210,014|89|
|Cached Empty.prototype|1,290,505,111|99|
|Empty.prototype|2,122,278|90|
|Empty class|1,304,314|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,289,809,555|99|
|Using optional chain (obj.field?.field2) (undefined)|1,291,148,818|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,289,978,002|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,289,507,548|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|348,345,395|99|
|Using parseInt(x, 10) - big number (10 len)|20,259,955|98|
|Using + - small number (2 len)|1,291,237,166|100|
|Using + - big number (10 len)|1,290,185,163|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,041,047|85|
|Using ? operator to avoid rejection|1,077,046|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,282,166,972|100|
|Raw usage underscore usage|1,283,349,476|95|
|Manipulating private properties using #|1,270,996,855|98|
|Manipulating private properties using underscore(_)|1,269,115,154|98|
|Manipulating private properties using Symbol|1,267,070,071|97|
|Manipulating private properties using PrivateSymbol|54,172,891|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,505,399|96|
|Adding property in the object creation - small object|2,491,787|97|
|Adding property after the function creation - small class|206,593|89|
|Adding property in the function creation - small class|207,619|93|
|Adding property after the class creation - small class|182,324|89|
|Adding property in the class creation - small class|182,727|89|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,290,195,570|99|
|Getter|103,622,579|96|
|Method|1,289,900,332|99|
|DefineProperty (getter)|1,290,612,337|97|
|DefineProperty (getter & enumerable=false)|104,409,435|97|
|DefineProperty (getter & configurable=false)|1,290,562,452|99|
|DefineProperty (getter & enumerable=false & configurable=false)|95,813,998|90|
|DefineProperty (writable)|1,290,195,118|99|
|DefineProperty (writable & enumerable=false)|1,290,825,225|99|
|DefineProperty (writable & enumerable=false & configurable=false)|1,290,813,738|99|
|DefineProperties (getter)|101,100,126|93|
|DefineProperties (getter & enumerable=false)|74,921,347|69|
|DefineProperties (getter & enumerable=false & configurable=false)|61,170,049|87|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|966,590,059|100|
|Setter|7,943,010|95|
|Method|966,217,149|99|
|DefineProperty (setter)|966,527,489|101|
|DefineProperty (setter & enumerable=false)|7,918,232|96|
|DefineProperty (setter & configurable=false)|8,068,960|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,923,603|97|
|DefineProperty (writable)|1,288,232,228|96|
|DefineProperty (writable & enumerable=false)|1,289,213,808|101|
|DefineProperty (writable & enumerable=false & configurable=false)|1,078,275,043|85|
|DefineProperties (setter)|129,339,490|86|
|DefineProperties (setter & enumerable=false)|7,779,679|91|
|DefineProperties (setter & enumerable=false & configurable=false)|7,586,390|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,904,382|98|
|Using replaceAll()|2,797,856|94|
|Using replaceAll(//g)|2,541,424|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|236,265|98|
|Sort using first char|1,144,808|99|
|Sort using localeCompare|1,139,147|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,799|92|
|{...smallObject} - Total keys: 2|102,314,146|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,916|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,272|97|
|{ ...bigObject, ...anotherBigObject }|1,114|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,428,119|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,501,778|96|
|{ ...smallObject, ...anotherSmallObject }|21,606,378|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,498 ops/sec ±0.55% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 494 ops/sec ±0.13% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,127 ops/sec ±0.26% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,897 ops/sec ±8.49% (70 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,284,878,126|98|
|Using backtick (`)|1,284,936,947|100|
|Using array.join|9,990,516|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,289,798,650|99|
|Using indexof|1,287,495,469|100|
|Using RegExp.test|16,233,891|95|
|Using RegExp.text with cached regex pattern|16,325,973|90|
|Using new RegExp.test|3,891,332|93|
|Using new RegExp.test with cached regex pattern|4,101,072|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|188,486,080|96|
|Using this|213,880,884|96|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,795,233|97|
|Date.now()|22,372,268|98|
