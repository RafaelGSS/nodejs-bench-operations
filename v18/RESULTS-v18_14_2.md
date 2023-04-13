# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.14.2`
* __Run:__ Thu Apr 13 2023 11:53:22 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,260,664,361|95|
|Using dot notation|1,263,700,913|94|
|Using define property (writable)|3,843,929|98|
|Using define property initialized (writable)|4,635,372|96|
|Using define property (getter)|2,083,763|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.009ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.479ms
new Array(length)|10,000|0.219ms
array.push|1,000,000|22.927ms
new Array(length)|1,000,000|7.943ms
array.push|100,000,000|1,532.718ms
new Array(length)|100,000,000|4,186.695ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.015ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.37ms
new Array(length)|10,000|3.19ms
array.push|1,000,000|72.396ms
new Array(length)|1,000,000|3.619ms
array.push|100,000,000|2,257.281ms
new Array(length)|100,000,000|4,046.165ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|294|83|
|Array.from|19|51|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|233,756|64|
|[True conditional] Using constructor name|189,382|91|
|[True conditional] Check if property is valid then instanceof |191,840|95|
|[False conditional] Using instanceof only|1,268,570,866|96|
|[False conditional] Using constructor name|1,261,212,115|95|
|[False conditional] Check if property is valid then instanceof |1,259,715,504|95|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,413|89|
|crypto.verify('RSA-SHA256')|6,398|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,072,300|96|
|fromUnixToISOString(new Date())|1,762,777|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,779|81|
|Intl.DateTimeFormat().format(new Date())|8,974|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,710|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,906|94|
|Reusing Intl.DateTimeFormat()|390,863|72|
|Date.toLocaleDateString()|523,879|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,144|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|893,143|96|
|Using brackets {}|933,732|96|
|Using '' + |910,913|97|
|Using date.toString()|987,531|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,104,133|95|
|Using undefined assignment|1,253,711,893|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|226,448|61|
|NodeError|189,174|92|
|NodeError Range|190,176|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,317,807|97|
|Function returning explicitly undefined|1,288,320|95|
|Function returning implicitly undefined|1,307,495|93|
|Function returning string|1,317,493|94|
|Function returning integer|1,325,724|95|
|Function returning float|1,328,910|96|
|Function returning functions|1,293,540|97|
|Function returning arrow functions|1,304,638|93|
|Function returning empty object|1,316,273|93|
|Function returning empty array|1,265,050|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,249,223,623|98|
|using Array.includes (first item)|1,269,569,119|98|
|Using raw comparison|1,259,674,071|99|
|Using raw comparison (first item)|1,256,125,002|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|83,126,785|88|
|Using Object.getOwnPropertyNames()|68,700,220|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,426,986|93|
|Length = 10_000 - Array.at|18,556,495|93|
|Length = 1_000_000 - Array.at|18,534,396|92|
|Length = 100 - Array[length - 1]|1,237,458,666|94|
|Length = 10_000 - Array[length - 1]|1,235,464,502|95|
|Length = 1_000_000 - Array[length - 1]|1,258,629,590|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|69,131,935|86|
|Object.create({})|1,291,698|85|
|Cached Empty.prototype|1,247,998,549|97|
|Empty.prototype|1,390,934|79|
|Empty class|872,554|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,253,860,736|97|
|Using optional chain (obj.field?.field2) (undefined)|1,240,307,776|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,259,255,861|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,256,183,578|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|343,470,205|96|
|Using parseInt(x, 10) - big number (10 len)|19,221,622|94|
|Using + - small number (2 len)|1,256,919,938|99|
|Using + - big number (10 len)|1,256,114,507|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|671,295|81|
|Using ? operator to avoid rejection|689,520|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|304,922,779|91|
|Raw usage underscore usage|279,367,198|88|
|Manipulating private properties using #|193,952,463|84|
|Manipulating private properties using underscore(_)|153,965,797|88|
|Manipulating private properties using Symbol|158,249,235|90|
|Manipulating private properties using PrivateSymbol|48,750,519|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,895,731|97|
|Adding property in the object creation - small object|2,901,107|94|
|Adding property after the function creation - small class|175,780|90|
|Adding property in the function creation - small class|175,217|92|
|Adding property after the class creation - small class|152,851|88|
|Adding property in the class creation - small class|151,857|89|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,274,776,394|96|
|Getter|100,943,620|98|
|Method|1,270,423,240|97|
|DefineProperty (getter)|1,274,106,042|97|
|DefineProperty (getter & enumerable=false)|102,592,466|98|
|DefineProperty (getter & configurable=false)|1,273,168,915|96|
|DefineProperty (getter & enumerable=false & configurable=false)|102,488,166|100|
|DefineProperty (writable)|1,270,934,980|91|
|DefineProperty (writable & enumerable=false)|1,273,159,323|99|
|DefineProperty (writable & enumerable=false & configurable=false)|405,217,652|34|
|DefineProperties (getter)|59,335,995|87|
|DefineProperties (getter & enumerable=false)|59,073,674|85|
|DefineProperties (getter & enumerable=false & configurable=false)|102,496,089|100|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|938,989,043|97|
|Setter|8,334,089|95|
|Method|950,033,646|95|
|DefineProperty (setter)|953,859,678|96|
|DefineProperty (setter & enumerable=false)|8,129,365|92|
|DefineProperty (setter & configurable=false)|8,268,146|94|
|DefineProperty (setter & enumerable=false & configurable=false)|8,419,713|95|
|DefineProperty (writable)|1,272,396,133|97|
|DefineProperty (writable & enumerable=false)|666,266,164|52|
|DefineProperty (writable & enumerable=false & configurable=false)|154,479,592|82|
|DefineProperties (setter)|118,417,467|79|
|DefineProperties (setter & enumerable=false)|8,033,452|92|
|DefineProperties (setter & enumerable=false & configurable=false)|8,270,581|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,657,185|96|
|Using replaceAll()|2,279,367|99|
|Using replaceAll(//g)|2,320,594|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|236,246|100|
|Sort using first char|1,101,558|97|
|Sort using localeCompare|1,045,813|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,824|96|
|{...smallObject} - Total keys: 2|107,656,306|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,957|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,386|95|
|{ ...bigObject, ...anotherBigObject }|1,122|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,415,656|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,390,674|93|
|{ ...smallObject, ...anotherSmallObject }|20,836,030|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,445 ops/sec ±0.97% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 511 ops/sec ±0.34% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,061 ops/sec ±0.33% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,633 ops/sec ±5.89% (76 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,277,293,241|99|
|Using backtick (`)|1,275,411,482|97|
|Using array.join|9,720,657|93|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,274,371,951|98|
|Using indexof|1,275,298,956|99|
|Using RegExp.test|17,869,055|94|
|Using RegExp.text with cached regex pattern|18,071,513|95|
|Using new RegExp.test|3,563,071|94|
|Using new RegExp.test with cached regex pattern|4,074,237|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|186,150,507|96|
|Using this|191,691,368|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,646,912|92|
|Date.now()|21,845,587|99|
