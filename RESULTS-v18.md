# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.14.0`
* __Run:__ Wed Apr 12 2023 23:35:53 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,269,705,221|96|
|Using dot notation|1,267,115,091|99|
|Using define property (writable)|3,789,778|98|
|Using define property initialized (writable)|4,641,946|96|
|Using define property (getter)|2,186,533|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.026ms
new Array(length)|100|0.009ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.454ms
new Array(length)|10,000|0.19ms
array.push|1,000,000|23.847ms
new Array(length)|1,000,000|7.721ms
array.push|100,000,000|1,549.554ms
new Array(length)|100,000,000|4,239.916ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.014ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.32ms
new Array(length)|10,000|3.085ms
array.push|1,000,000|79.534ms
new Array(length)|1,000,000|3.734ms
array.push|100,000,000|2,256.128ms
new Array(length)|100,000,000|4,081.681ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|291|78|
|Array.from|18|48|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|240,925|59|
|[True conditional] Using constructor name|192,022|96|
|[True conditional] Check if property is valid then instanceof |195,781|96|
|[False conditional] Using instanceof only|1,261,628,634|97|
|[False conditional] Using constructor name|1,260,600,992|94|
|[False conditional] Check if property is valid then instanceof |1,272,049,250|99|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,659|92|
|crypto.verify('RSA-SHA256')|6,631|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,090,332|97|
|fromUnixToISOString(new Date())|1,807,431|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,153|87|
|Intl.DateTimeFormat().format(new Date())|12,522|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,505|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,652|94|
|Reusing Intl.DateTimeFormat()|404,831|74|
|Date.toLocaleDateString()|545,047|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,297|84|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|898,745|95|
|Using brackets {}|911,484|96|
|Using '' + |908,848|96|
|Using date.toString()|1,002,093|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,101,599|97|
|Using undefined assignment|1,267,702,412|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|234,636|60|
|NodeError|193,664|92|
|NodeError Range|194,765|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,315,775|96|
|Function returning explicitly undefined|1,309,541|97|
|Function returning implicitly undefined|1,324,674|93|
|Function returning string|1,323,792|95|
|Function returning integer|1,339,936|95|
|Function returning float|1,331,622|96|
|Function returning functions|1,311,831|95|
|Function returning arrow functions|1,318,370|96|
|Function returning empty object|1,333,318|93|
|Function returning empty array|1,330,963|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,260,304,896|98|
|using Array.includes (first item)|1,259,347,390|95|
|Using raw comparison|1,263,871,281|96|
|Using raw comparison (first item)|1,267,434,048|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|86,141,131|91|
|Using Object.getOwnPropertyNames()|70,519,566|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,428,121|94|
|Length = 10_000 - Array.at|18,934,565|97|
|Length = 1_000_000 - Array.at|18,876,455|95|
|Length = 100 - Array[length - 1]|1,227,580,540|98|
|Length = 10_000 - Array[length - 1]|1,264,987,395|94|
|Length = 1_000_000 - Array[length - 1]|1,265,523,205|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|70,628,197|91|
|Object.create({})|1,341,802|89|
|Cached Empty.prototype|1,269,175,859|96|
|Empty.prototype|1,495,778|83|
|Empty class|930,349|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,270,255,399|99|
|Using optional chain (obj.field?.field2) (undefined)|1,269,281,029|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,268,666,598|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,266,297,079|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|343,355,063|98|
|Using parseInt(x, 10) - big number (10 len)|17,935,387|93|
|Using + - small number (2 len)|1,266,035,807|90|
|Using + - big number (10 len)|1,265,181,310|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|701,628|88|
|Using ? operator to avoid rejection|725,785|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|315,679,353|94|
|Raw usage underscore usage|283,752,725|94|
|Manipulating private properties using #|197,559,501|85|
|Manipulating private properties using underscore(_)|163,706,317|95|
|Manipulating private properties using Symbol|165,734,338|96|
|Manipulating private properties using PrivateSymbol|50,178,284|98|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,955,615|95|
|Adding property in the object creation - small object|2,964,321|95|
|Adding property after the function creation - small class|172,012|89|
|Adding property in the function creation - small class|174,309|87|
|Adding property after the class creation - small class|148,775|87|
|Adding property in the class creation - small class|150,099|86|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,268,222,612|95|
|Getter|101,905,466|92|
|Method|1,259,711,577|97|
|DefineProperty (getter)|1,261,566,840|93|
|DefineProperty (getter & enumerable=false)|102,653,478|96|
|DefineProperty (getter & configurable=false)|1,266,329,358|95|
|DefineProperty (getter & enumerable=false & configurable=false)|102,460,525|95|
|DefineProperty (writable)|1,263,801,239|97|
|DefineProperty (writable & enumerable=false)|1,269,513,725|95|
|DefineProperty (writable & enumerable=false & configurable=false)|733,959,536|60|
|DefineProperties (getter)|58,641,448|88|
|DefineProperties (getter & enumerable=false)|57,751,764|87|
|DefineProperties (getter & enumerable=false & configurable=false)|95,219,722|90|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|952,276,071|99|
|Setter|8,396,282|96|
|Method|948,002,260|98|
|DefineProperty (setter)|939,733,865|93|
|DefineProperty (setter & enumerable=false)|8,399,756|95|
|DefineProperty (setter & configurable=false)|8,218,667|93|
|DefineProperty (setter & enumerable=false & configurable=false)|8,131,643|95|
|DefineProperty (writable)|1,264,131,066|98|
|DefineProperty (writable & enumerable=false)|820,330,893|64|
|DefineProperty (writable & enumerable=false & configurable=false)|152,807,476|81|
|DefineProperties (setter)|118,214,115|82|
|DefineProperties (setter & enumerable=false)|7,546,916|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,026,840|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,713,520|96|
|Using replaceAll()|2,301,051|98|
|Using replaceAll(//g)|2,391,785|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|230,287|93|
|Sort using first char|1,026,775|97|
|Sort using localeCompare|997,700|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,740|94|
|{...smallObject} - Total keys: 2|104,799,574|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,925|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,291|97|
|{ ...bigObject, ...anotherBigObject }|1,088|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,597,204|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,440,256|96|
|{ ...smallObject, ...anotherSmallObject }|20,452,479|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,341 ops/sec ±1.33% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 485 ops/sec ±0.68% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,164 ops/sec ±0.37% (97 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,575 ops/sec ±6.41% (74 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,270,011,766|99|
|Using backtick (`)|1,243,386,907|97|
|Using array.join|8,909,440|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|179,641,629|87|
|Using this|186,869,573|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,746,506|94|
|Date.now()|21,870,805|93|
