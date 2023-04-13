# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Thu Apr 13 2023 11:39:35 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,258,127,598|96|
|Using dot notation|1,256,144,681|92|
|Using define property (writable)|3,992,518|96|
|Using define property initialized (writable)|4,773,261|87|
|Using define property (getter)|2,267,002|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.337ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|25.86ms
new Array(length)|1,000,000|15.906ms
array.push|100,000,000|1,538.414ms
new Array(length)|100,000,000|4,105.159ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.014ms
array.push|100|0.062ms
new Array(length)|100|0.007ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.313ms
new Array(length)|10,000|3.093ms
array.push|1,000,000|78.331ms
new Array(length)|1,000,000|3.618ms
array.push|100,000,000|2,300.861ms
new Array(length)|100,000,000|3,953.308ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|287|86|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|234,446|63|
|[True conditional] Using constructor name|194,035|94|
|[True conditional] Check if property is valid then instanceof |197,784|99|
|[False conditional] Using instanceof only|1,253,598,144|94|
|[False conditional] Using constructor name|1,254,424,180|94|
|[False conditional] Check if property is valid then instanceof |1,254,001,108|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,050|90|
|crypto.verify('RSA-SHA256')|2,021|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,070,309|94|
|fromUnixToISOString(new Date())|1,904,670|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,772|81|
|Intl.DateTimeFormat().format(new Date())|11,463|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,879|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,395|70|
|Reusing Intl.DateTimeFormat()|536,157|96|
|Date.toLocaleDateString()|440,047|77|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,732|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|897,834|98|
|Using brackets {}|915,163|96|
|Using '' + |916,009|96|
|Using date.toString()|1,023,924|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,072,931|93|
|Using undefined assignment|1,267,178,729|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|231,065|61|
|NodeError|192,939|92|
|NodeError Range|192,570|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,414,235|97|
|Function returning explicitly undefined|1,395,070|97|
|Function returning implicitly undefined|1,418,169|92|
|Function returning string|1,431,268|97|
|Function returning integer|1,460,392|96|
|Function returning float|1,437,525|96|
|Function returning functions|1,425,122|97|
|Function returning arrow functions|1,406,324|93|
|Function returning empty object|1,430,616|97|
|Function returning empty array|1,431,888|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|126,221,481|94|
|using Array.includes (first item)|145,296,545|94|
|Using raw comparison|1,267,323,939|97|
|Using raw comparison (first item)|1,224,000,442|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|84,329,107|88|
|Using Object.getOwnPropertyNames()|72,603,873|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,098,198|93|
|Length = 10_000 - Array.at|18,921,087|95|
|Length = 1_000_000 - Array.at|18,886,663|93|
|Length = 100 - Array[length - 1]|1,255,831,174|97|
|Length = 10_000 - Array[length - 1]|1,254,804,174|98|
|Length = 1_000_000 - Array[length - 1]|1,263,202,454|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|69,566,322|87|
|Object.create({})|1,715,388|82|
|Cached Empty.prototype|1,262,174,639|100|
|Empty.prototype|1,881,589|86|
|Empty class|1,108,562|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,265,256,351|96|
|Using optional chain (obj.field?.field2) (undefined)|1,268,274,348|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,266,267,426|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,264,809,866|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|313,865,974|97|
|Using parseInt(x, 10) - big number (10 len)|18,061,187|95|
|Using + - small number (2 len)|1,242,973,856|93|
|Using + - big number (10 len)|1,269,798,683|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|869,283|86|
|Using ? operator to avoid rejection|886,180|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|313,585,228|93|
|Raw usage underscore usage|274,161,321|91|
|Manipulating private properties using #|198,117,133|86|
|Manipulating private properties using underscore(_)|159,723,801|89|
|Manipulating private properties using Symbol|157,733,981|88|
|Manipulating private properties using PrivateSymbol|49,216,401|98|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,822,479|94|
|Adding property in the object creation - small object|2,859,990|98|
|Adding property after the function creation - small class|201,994|89|
|Adding property in the function creation - small class|202,601|89|
|Adding property after the class creation - small class|172,381|84|
|Adding property in the class creation - small class|177,671|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,219,966,595|96|
|Getter|102,989,704|91|
|Method|1,256,835,580|99|
|DefineProperty (getter)|1,260,949,703|93|
|DefineProperty (getter & enumerable=false)|103,386,727|99|
|DefineProperty (getter & configurable=false)|1,261,856,731|96|
|DefineProperty (getter & enumerable=false & configurable=false)|103,891,080|99|
|DefineProperty (writable)|1,262,016,213|96|
|DefineProperty (writable & enumerable=false)|409,191,246|34|
|DefineProperty (writable & enumerable=false & configurable=false)|139,272,315|76|
|DefineProperties (getter)|57,228,295|86|
|DefineProperties (getter & enumerable=false)|57,295,321|85|
|DefineProperties (getter & enumerable=false & configurable=false)|103,389,044|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|942,937,732|92|
|Setter|7,072,558|94|
|Method|945,694,593|95|
|DefineProperty (setter)|944,445,128|97|
|DefineProperty (setter & enumerable=false)|7,086,118|95|
|DefineProperty (setter & configurable=false)|7,089,657|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,014,453|97|
|DefineProperty (writable)|940,809,391|81|
|DefineProperty (writable & enumerable=false)|143,026,888|75|
|DefineProperty (writable & enumerable=false & configurable=false)|145,429,067|78|
|DefineProperties (setter)|122,344,025|87|
|DefineProperties (setter & enumerable=false)|6,903,013|97|
|DefineProperties (setter & enumerable=false & configurable=false)|7,068,956|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,779,768|96|
|Using replaceAll()|2,643,858|98|
|Using replaceAll(//g)|2,497,504|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|231,263|99|
|Sort using first char|1,072,407|98|
|Sort using localeCompare|1,007,186|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,749|95|
|{...smallObject} - Total keys: 2|104,157,000|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,908|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,083|99|
|{ ...bigObject, ...anotherBigObject }|1,094|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,829,139|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,882,058|94|
|{ ...smallObject, ...anotherSmallObject }|21,756,499|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,475 ops/sec ±0.80% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 497 ops/sec ±0.43% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,003 ops/sec ±0.44% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,581 ops/sec ±7.80% (71 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,254,102,846|93|
|Using backtick (`)|1,269,936,197|99|
|Using array.join|8,841,863|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,530,200|100|
|Using indexof|1,267,158,884|96|
|Using RegExp.test|17,370,111|96|
|Using RegExp.text with cached regex pattern|17,746,550|96|
|Using new RegExp.test|3,734,916|93|
|Using new RegExp.test with cached regex pattern|3,974,525|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|23,906,560|96|
|Using this|184,661,645|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,046,182|95|
|Date.now()|21,579,860|96|
