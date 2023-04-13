# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Wed Apr 12 2023 23:22:36 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,271,370,255|99|
|Using dot notation|1,268,360,922|99|
|Using define property (writable)|3,854,307|98|
|Using define property initialized (writable)|4,894,921|95|
|Using define property (getter)|2,175,596|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.01ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.186ms
array.push|1,000,000|21.176ms
new Array(length)|1,000,000|14.427ms
array.push|100,000,000|1,566.986ms
new Array(length)|100,000,000|4,188.909ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.059ms
new Array(length)|100|0.008ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.372ms
new Array(length)|10,000|3.15ms
array.push|1,000,000|69.219ms
new Array(length)|1,000,000|3.718ms
array.push|100,000,000|2,252.272ms
new Array(length)|100,000,000|4,012.285ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|288|86|
|Array.from|19|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,161|61|
|[True conditional] Using constructor name|196,895|98|
|[True conditional] Check if property is valid then instanceof |197,611|95|
|[False conditional] Using instanceof only|1,268,940,537|97|
|[False conditional] Using constructor name|1,269,258,957|98|
|[False conditional] Check if property is valid then instanceof |1,269,642,211|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,527|92|
|crypto.verify('RSA-SHA256')|6,533|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,078,363|95|
|fromUnixToISOString(new Date())|1,800,873|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,718|84|
|Intl.DateTimeFormat().format(new Date())|12,440|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,375|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,684|96|
|Reusing Intl.DateTimeFormat()|400,566|73|
|Date.toLocaleDateString()|543,293|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,739|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|891,268|98|
|Using brackets {}|909,711|96|
|Using '' + |911,184|97|
|Using date.toString()|1,004,764|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,146,292|97|
|Using undefined assignment|1,258,039,880|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|232,744|61|
|NodeError|193,850|93|
|NodeError Range|192,279|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,324,717|97|
|Function returning explicitly undefined|1,297,217|97|
|Function returning implicitly undefined|1,329,443|98|
|Function returning string|1,308,276|91|
|Function returning integer|1,346,077|92|
|Function returning float|1,329,450|97|
|Function returning functions|1,305,327|99|
|Function returning arrow functions|1,316,035|95|
|Function returning empty object|1,314,508|97|
|Function returning empty array|1,316,726|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,268,585,162|100|
|using Array.includes (first item)|1,267,728,893|98|
|Using raw comparison|1,269,873,850|96|
|Using raw comparison (first item)|1,268,276,438|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|82,768,839|91|
|Using Object.getOwnPropertyNames()|73,269,030|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,055,923|94|
|Length = 10_000 - Array.at|19,971,977|94|
|Length = 1_000_000 - Array.at|19,989,079|96|
|Length = 100 - Array[length - 1]|1,263,845,702|99|
|Length = 10_000 - Array[length - 1]|1,265,193,560|97|
|Length = 1_000_000 - Array[length - 1]|1,263,693,890|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,952,706|90|
|Object.create({})|1,383,184|90|
|Cached Empty.prototype|1,258,433,068|97|
|Empty.prototype|1,472,571|83|
|Empty class|917,385|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,260,289,289|99|
|Using optional chain (obj.field?.field2) (undefined)|1,261,314,182|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,260,722,456|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,260,112,728|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|342,008,825|96|
|Using parseInt(x, 10) - big number (10 len)|19,323,170|97|
|Using + - small number (2 len)|1,267,746,939|96|
|Using + - big number (10 len)|1,270,112,711|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|703,103|83|
|Using ? operator to avoid rejection|730,546|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|313,138,312|93|
|Raw usage underscore usage|276,991,526|89|
|Manipulating private properties using #|202,178,052|85|
|Manipulating private properties using underscore(_)|169,218,791|94|
|Manipulating private properties using Symbol|168,047,901|95|
|Manipulating private properties using PrivateSymbol|49,493,743|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,965,553|96|
|Adding property in the object creation - small object|2,950,031|97|
|Adding property after the function creation - small class|175,403|89|
|Adding property in the function creation - small class|176,220|88|
|Adding property after the class creation - small class|153,015|90|
|Adding property in the class creation - small class|152,565|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,267,661,245|99|
|Getter|102,602,087|96|
|Method|1,260,796,674|94|
|DefineProperty (getter)|1,263,593,067|95|
|DefineProperty (getter & enumerable=false)|102,497,158|94|
|DefineProperty (getter & configurable=false)|1,268,224,529|100|
|DefineProperty (getter & enumerable=false & configurable=false)|102,362,331|96|
|DefineProperty (writable)|1,270,399,314|92|
|DefineProperty (writable & enumerable=false)|1,270,893,541|98|
|DefineProperty (writable & enumerable=false & configurable=false)|833,971,524|67|
|DefineProperties (getter)|60,475,665|87|
|DefineProperties (getter & enumerable=false)|102,906,595|98|
|DefineProperties (getter & enumerable=false & configurable=false)|102,156,619|95|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|948,223,034|96|
|Setter|8,378,561|91|
|Method|943,510,100|95|
|DefineProperty (setter)|946,620,443|97|
|DefineProperty (setter & enumerable=false)|8,354,412|98|
|DefineProperty (setter & configurable=false)|8,399,938|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,477,781|94|
|DefineProperty (writable)|1,264,774,622|94|
|DefineProperty (writable & enumerable=false)|157,070,882|83|
|DefineProperty (writable & enumerable=false & configurable=false)|163,520,875|87|
|DefineProperties (setter)|118,555,906|82|
|DefineProperties (setter & enumerable=false)|8,376,483|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,458,548|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,849,845|98|
|Using replaceAll()|2,189,387|97|
|Using replaceAll(//g)|2,481,005|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|229,734|98|
|Sort using first char|1,103,993|93|
|Sort using localeCompare|1,045,021|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,792|95|
|{...smallObject} - Total keys: 2|104,779,783|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,934|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,394|97|
|{ ...bigObject, ...anotherBigObject }|1,108|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,365,446|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,010,401|95|
|{ ...smallObject, ...anotherSmallObject }|20,638,474|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,401 ops/sec ±0.67% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 486 ops/sec ±0.27% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,411 ops/sec ±0.45% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,810 ops/sec ±8.56% (65 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,269,709,018|98|
|Using backtick (`)|1,269,182,814|99|
|Using array.join|9,355,207|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|185,230,393|95|
|Using this|189,438,485|98|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,158,878|94|
|Date.now()|21,314,750|91|
