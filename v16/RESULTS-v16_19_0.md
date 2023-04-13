# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Thu Apr 13 2023 10:31:00 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,278,194,584|96|
|Using dot notation|1,274,540,145|93|
|Using define property (writable)|3,946,788|97|
|Using define property initialized (writable)|4,827,844|96|
|Using define property (getter)|2,248,561|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.056ms
new Array(length)|100|0.005ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.378ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|19.766ms
new Array(length)|1,000,000|13.339ms
array.push|100,000,000|1,441.586ms
new Array(length)|100,000,000|4,023.454ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.011ms
new Array(length)|100|0.007ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.37ms
new Array(length)|10,000|3.047ms
array.push|1,000,000|63.235ms
new Array(length)|1,000,000|3.617ms
array.push|100,000,000|1,920.244ms
new Array(length)|100,000,000|4,320.909ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|301|90|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|244,492|64|
|[True conditional] Using constructor name|201,856|95|
|[True conditional] Check if property is valid then instanceof |203,049|92|
|[False conditional] Using instanceof only|1,280,983,242|94|
|[False conditional] Using constructor name|1,280,755,816|100|
|[False conditional] Check if property is valid then instanceof |1,283,799,824|101|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|31,558|93|
|crypto.verify('RSA-SHA256')|30,096|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,098,338|95|
|fromUnixToISOString(new Date())|1,827,649|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,791|79|
|Intl.DateTimeFormat().format(new Date())|12,503|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,468|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,594|84|
|Reusing Intl.DateTimeFormat()|522,182|90|
|Date.toLocaleDateString()|522,703|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,408|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|916,202|99|
|Using brackets {}|927,723|94|
|Using '' + |923,915|98|
|Using date.toString()|1,028,070|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,303,903|99|
|Using undefined assignment|1,280,808,906|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|240,283|66|
|NodeError|200,001|91|
|NodeError Range|199,546|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,218,567|98|
|Function returning explicitly undefined|1,209,047|97|
|Function returning implicitly undefined|1,225,753|96|
|Function returning string|1,216,006|98|
|Function returning integer|1,234,961|98|
|Function returning float|1,226,817|98|
|Function returning functions|1,195,163|97|
|Function returning arrow functions|1,206,562|92|
|Function returning empty object|1,216,480|97|
|Function returning empty array|1,180,267|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,267,067,801|92|
|using Array.includes (first item)|1,279,376,623|99|
|Using raw comparison|1,283,617,969|95|
|Using raw comparison (first item)|1,282,419,992|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,258,260|95|
|Using Object.getOwnPropertyNames()|84,323,008|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,381,123|92|
|Length = 10_000 - Array.at|19,371,217|94|
|Length = 1_000_000 - Array.at|19,228,403|92|
|Length = 100 - Array[length - 1]|1,275,546,619|97|
|Length = 10_000 - Array[length - 1]|1,267,264,362|98|
|Length = 1_000_000 - Array[length - 1]|1,265,472,451|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|66,794,103|93|
|Object.create({})|1,951,546|88|
|Cached Empty.prototype|1,282,077,805|99|
|Empty.prototype|1,983,901|89|
|Empty class|1,163,101|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,262,087,348|96|
|Using optional chain (obj.field?.field2) (undefined)|1,265,381,249|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,261,992,788|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,271,486,187|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|313,188,167|98|
|Using parseInt(x, 10) - big number (10 len)|15,067,742|94|
|Using + - small number (2 len)|1,276,969,531|98|
|Using + - big number (10 len)|1,270,026,015|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|873,951|84|
|Using ? operator to avoid rejection|924,330|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|10,351,045|94|
|Raw usage underscore usage|8,552,309|94|
|Manipulating private properties using #|3,143,013|92|
|Manipulating private properties using underscore(_)|1,249,392,322|99|
|Manipulating private properties using Symbol|1,249,842,930|97|
|Manipulating private properties using PrivateSymbol|45,053,986|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,410,452|98|
|Adding property in the object creation - small object|2,409,078|96|
|Adding property after the function creation - small class|200,882|90|
|Adding property in the function creation - small class|202,913|93|
|Adding property after the class creation - small class|177,035|87|
|Adding property in the class creation - small class|176,468|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,268,788,098|99|
|Getter|95,890,552|97|
|Method|1,256,255,885|95|
|DefineProperty (getter)|1,274,573,611|98|
|DefineProperty (getter & enumerable=false)|95,374,618|96|
|DefineProperty (getter & configurable=false)|1,267,584,898|100|
|DefineProperty (getter & enumerable=false & configurable=false)|96,076,396|98|
|DefineProperty (writable)|1,266,023,805|93|
|DefineProperty (writable & enumerable=false)|1,273,611,958|98|
|DefineProperty (writable & enumerable=false & configurable=false)|279,109,157|24|
|DefineProperties (getter)|54,674,744|85|
|DefineProperties (getter & enumerable=false)|95,918,689|98|
|DefineProperties (getter & enumerable=false & configurable=false)|96,041,684|100|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|955,661,761|96|
|Setter|7,671,579|95|
|Method|954,570,601|95|
|DefineProperty (setter)|955,273,635|95|
|DefineProperty (setter & enumerable=false)|7,693,807|97|
|DefineProperty (setter & configurable=false)|7,702,313|96|
|DefineProperty (setter & enumerable=false & configurable=false)|7,749,365|93|
|DefineProperty (writable)|1,267,155,228|100|
|DefineProperty (writable & enumerable=false)|1,264,458,082|99|
|DefineProperty (writable & enumerable=false & configurable=false)|605,845,624|49|
|DefineProperties (setter)|123,930,495|83|
|DefineProperties (setter & enumerable=false)|7,492,680|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,561,184|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,627,990|96|
|Using replaceAll()|2,574,971|96|
|Using replaceAll(//g)|2,384,777|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|234,883|98|
|Sort using first char|1,020,663|98|
|Sort using localeCompare|558,050|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,782|94|
|{...smallObject} - Total keys: 2|99,208,616|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,893|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,125|97|
|{ ...bigObject, ...anotherBigObject }|1,108|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,084,759|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|30,371,954|95|
|{ ...smallObject, ...anotherSmallObject }|21,396,931|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,488 ops/sec ±0.72% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 502 ops/sec ±0.26% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,036 ops/sec ±0.32% (98 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,585 ops/sec ±7.23% (73 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,266,509,776|95|
|Using backtick (`)|1,267,171,286|99|
|Using array.join|8,653,794|97|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,060,000|98|
|Using indexof|1,277,220,123|97|
|Using RegExp.test|13,512,733|95|
|Using RegExp.text with cached regex pattern|13,983,936|97|
|Using new RegExp.test|4,164,609|91|
|Using new RegExp.test with cached regex pattern|4,807,601|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|192,471,368|96|
|Using this|190,217,660|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,782,671|98|
|Date.now()|19,928,657|97|
