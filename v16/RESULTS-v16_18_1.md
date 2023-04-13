# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Thu Apr 13 2023 00:14:20 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,283,844,983|100|
|Using dot notation|1,282,025,670|96|
|Using define property (writable)|4,054,820|94|
|Using define property initialized (writable)|4,651,586|97|
|Using define property (getter)|2,237,279|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.058ms
new Array(length)|100|0.006ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.378ms
new Array(length)|10,000|0.188ms
array.push|1,000,000|20.957ms
new Array(length)|1,000,000|15.101ms
array.push|100,000,000|1,390.132ms
new Array(length)|100,000,000|3,870.85ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.014ms
new Array(length)|100|0.008ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.342ms
new Array(length)|10,000|3.069ms
array.push|1,000,000|61.561ms
new Array(length)|1,000,000|3.616ms
array.push|100,000,000|2,105.745ms
new Array(length)|100,000,000|3,754.627ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|334|85|
|Array.from|18|48|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|249,543|64|
|[True conditional] Using constructor name|202,574|94|
|[True conditional] Check if property is valid then instanceof |204,875|96|
|[False conditional] Using instanceof only|1,283,377,893|97|
|[False conditional] Using constructor name|1,282,901,046|97|
|[False conditional] Check if property is valid then instanceof |1,284,387,680|100|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|31,471|97|
|crypto.verify('RSA-SHA256')|30,232|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,061,714|98|
|fromUnixToISOString(new Date())|1,760,486|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,764|79|
|Intl.DateTimeFormat().format(new Date())|12,702|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,566|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,855|73|
|Reusing Intl.DateTimeFormat()|513,374|93|
|Date.toLocaleDateString()|515,086|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,263|85|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|896,776|98|
|Using brackets {}|912,344|95|
|Using '' + |891,758|98|
|Using date.toString()|979,104|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,237,116|98|
|Using undefined assignment|1,282,094,372|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|242,941|63|
|NodeError|200,833|92|
|NodeError Range|200,757|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,193,043|98|
|Function returning explicitly undefined|1,191,368|96|
|Function returning implicitly undefined|1,194,153|97|
|Function returning string|1,184,047|96|
|Function returning integer|1,198,079|95|
|Function returning float|1,188,885|98|
|Function returning functions|1,174,523|96|
|Function returning arrow functions|1,182,397|99|
|Function returning empty object|1,200,989|98|
|Function returning empty array|1,186,366|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,280,801,852|99|
|using Array.includes (first item)|1,281,742,368|98|
|Using raw comparison|1,283,538,739|98|
|Using raw comparison (first item)|1,282,795,035|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,518,965|97|
|Using Object.getOwnPropertyNames()|87,230,646|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,846,649|95|
|Length = 10_000 - Array.at|19,825,468|96|
|Length = 1_000_000 - Array.at|19,847,994|95|
|Length = 100 - Array[length - 1]|1,278,528,011|100|
|Length = 10_000 - Array[length - 1]|1,280,850,840|97|
|Length = 1_000_000 - Array[length - 1]|1,281,215,314|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|66,805,205|96|
|Object.create({})|1,885,258|87|
|Cached Empty.prototype|1,276,224,460|101|
|Empty.prototype|1,979,393|88|
|Empty class|1,159,239|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,283,423,789|101|
|Using optional chain (obj.field?.field2) (undefined)|1,283,421,121|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,283,049,522|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,282,572,683|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|315,864,818|96|
|Using parseInt(x, 10) - big number (10 len)|15,757,059|96|
|Using + - small number (2 len)|1,284,198,068|100|
|Using + - big number (10 len)|1,282,924,352|100|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|895,051|87|
|Using ? operator to avoid rejection|932,171|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|10,022,988|95|
|Raw usage underscore usage|7,806,867|95|
|Manipulating private properties using #|3,005,883|96|
|Manipulating private properties using underscore(_)|1,267,645,542|97|
|Manipulating private properties using Symbol|1,264,798,611|99|
|Manipulating private properties using PrivateSymbol|45,295,332|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,843,202|98|
|Adding property in the object creation - small object|2,867,750|96|
|Adding property after the function creation - small class|201,718|90|
|Adding property in the function creation - small class|200,664|89|
|Adding property after the class creation - small class|174,909|88|
|Adding property in the class creation - small class|175,925|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,282,597,154|100|
|Getter|97,074,014|98|
|Method|1,283,459,267|96|
|DefineProperty (getter)|1,282,597,302|98|
|DefineProperty (getter & enumerable=false)|97,133,831|97|
|DefineProperty (getter & configurable=false)|1,283,538,325|98|
|DefineProperty (getter & enumerable=false & configurable=false)|97,317,469|100|
|DefineProperty (writable)|1,283,585,164|98|
|DefineProperty (writable & enumerable=false)|433,388,624|37|
|DefineProperty (writable & enumerable=false & configurable=false)|135,701,866|81|
|DefineProperties (getter)|49,682,597|84|
|DefineProperties (getter & enumerable=false)|97,390,299|99|
|DefineProperties (getter & enumerable=false & configurable=false)|97,454,237|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|961,198,240|100|
|Setter|7,153,525|95|
|Method|961,335,749|97|
|DefineProperty (setter)|960,974,136|100|
|DefineProperty (setter & enumerable=false)|7,292,531|97|
|DefineProperty (setter & configurable=false)|7,291,335|94|
|DefineProperty (setter & enumerable=false & configurable=false)|7,113,648|92|
|DefineProperty (writable)|1,188,897,713|91|
|DefineProperty (writable & enumerable=false)|139,842,198|85|
|DefineProperty (writable & enumerable=false & configurable=false)|139,451,170|85|
|DefineProperties (setter)|122,091,161|85|
|DefineProperties (setter & enumerable=false)|7,115,715|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,231,709|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,914,709|98|
|Using replaceAll()|2,615,745|99|
|Using replaceAll(//g)|2,595,413|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|238,222|99|
|Sort using first char|1,099,165|100|
|Sort using localeCompare|556,367|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,819|93|
|{...smallObject} - Total keys: 2|100,145,070|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,931|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,271|98|
|{ ...bigObject, ...anotherBigObject }|1,115|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,706,132|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|32,234,420|95|
|{ ...smallObject, ...anotherSmallObject }|21,452,709|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,485 ops/sec ±0.53% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 488 ops/sec ±0.35% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,169 ops/sec ±0.38% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,763 ops/sec ±8.11% (76 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,283,159,449|98|
|Using backtick (`)|1,283,053,551|99|
|Using array.join|9,039,402|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|194,865,221|95|
|Using this|194,131,064|100|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,699,315|97|
|Date.now()|20,189,300|98|
