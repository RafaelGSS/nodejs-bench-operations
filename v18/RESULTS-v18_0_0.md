# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Wed Apr 12 2023 22:56:03 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,272,824,714|96|
|Using dot notation|1,269,404,913|91|
|Using define property (writable)|4,047,395|98|
|Using define property initialized (writable)|4,892,618|95|
|Using define property (getter)|2,354,667|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.322ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|22.164ms
new Array(length)|1,000,000|15.531ms
array.push|100,000,000|1,565.123ms
new Array(length)|100,000,000|4,067.731ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.065ms
new Array(length)|100|0.007ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.313ms
new Array(length)|10,000|3.02ms
array.push|1,000,000|76.738ms
new Array(length)|1,000,000|4.092ms
array.push|100,000,000|2,284.459ms
new Array(length)|100,000,000|3,961.451ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|287|82|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|238,495|62|
|[True conditional] Using constructor name|196,020|96|
|[True conditional] Check if property is valid then instanceof |195,719|90|
|[False conditional] Using instanceof only|1,270,541,044|100|
|[False conditional] Using constructor name|1,271,776,672|97|
|[False conditional] Check if property is valid then instanceof |1,273,156,793|96|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,098|92|
|crypto.verify('RSA-SHA256')|2,061|88|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,076,268|96|
|fromUnixToISOString(new Date())|1,946,349|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,874|85|
|Intl.DateTimeFormat().format(new Date())|11,829|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,036|93|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,165|67|
|Reusing Intl.DateTimeFormat()|541,534|96|
|Date.toLocaleDateString()|455,353|80|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,960|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|917,514|97|
|Using brackets {}|942,369|97|
|Using '' + |925,398|98|
|Using date.toString()|1,030,564|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,156,708|97|
|Using undefined assignment|1,269,542,649|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|232,803|61|
|NodeError|194,859|93|
|NodeError Range|195,093|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,433,332|98|
|Function returning explicitly undefined|1,436,793|94|
|Function returning implicitly undefined|1,458,142|95|
|Function returning string|1,449,905|96|
|Function returning integer|1,441,571|95|
|Function returning float|1,447,945|97|
|Function returning functions|1,408,292|96|
|Function returning arrow functions|1,431,504|97|
|Function returning empty object|1,457,494|96|
|Function returning empty array|1,444,669|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|126,776,311|96|
|using Array.includes (first item)|145,615,561|97|
|Using raw comparison|1,270,782,006|95|
|Using raw comparison (first item)|1,266,182,065|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,683,071|92|
|Using Object.getOwnPropertyNames()|76,176,626|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,607,896|92|
|Length = 10_000 - Array.at|19,650,303|94|
|Length = 1_000_000 - Array.at|19,293,104|91|
|Length = 100 - Array[length - 1]|1,262,698,886|93|
|Length = 10_000 - Array[length - 1]|1,255,525,943|93|
|Length = 1_000_000 - Array[length - 1]|1,259,358,674|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|76,015,794|90|
|Object.create({})|1,801,587|82|
|Cached Empty.prototype|1,272,317,811|95|
|Empty.prototype|1,980,185|88|
|Empty class|1,163,573|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,270,597,290|99|
|Using optional chain (obj.field?.field2) (undefined)|1,271,239,997|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,268,653,369|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,270,676,333|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|317,818,971|97|
|Using parseInt(x, 10) - big number (10 len)|18,169,445|97|
|Using + - small number (2 len)|1,272,614,745|100|
|Using + - big number (10 len)|1,269,295,988|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|895,900|87|
|Using ? operator to avoid rejection|926,998|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|321,079,777|91|
|Raw usage underscore usage|290,859,849|93|
|Manipulating private properties using #|209,015,039|86|
|Manipulating private properties using underscore(_)|169,983,999|94|
|Manipulating private properties using Symbol|171,930,447|95|
|Manipulating private properties using PrivateSymbol|50,135,857|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,930,840|100|
|Adding property in the object creation - small object|2,914,661|94|
|Adding property after the function creation - small class|207,074|89|
|Adding property in the function creation - small class|208,675|91|
|Adding property after the class creation - small class|180,460|86|
|Adding property in the class creation - small class|183,806|90|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,259,938,874|96|
|Getter|104,660,368|95|
|Method|1,237,682,671|98|
|DefineProperty (getter)|1,261,860,526|95|
|DefineProperty (getter & enumerable=false)|104,145,379|98|
|DefineProperty (getter & configurable=false)|1,263,788,727|98|
|DefineProperty (getter & enumerable=false & configurable=false)|103,881,276|96|
|DefineProperty (writable)|550,324,871|44|
|DefineProperty (writable & enumerable=false)|1,264,367,051|99|
|DefineProperty (writable & enumerable=false & configurable=false)|1,259,042,714|95|
|DefineProperties (getter)|104,357,716|95|
|DefineProperties (getter & enumerable=false)|103,681,253|97|
|DefineProperties (getter & enumerable=false & configurable=false)|80,742,374|76|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|952,462,916|98|
|Setter|7,818,789|97|
|Method|951,694,823|91|
|DefineProperty (setter)|951,222,762|99|
|DefineProperty (setter & enumerable=false)|7,574,146|95|
|DefineProperty (setter & configurable=false)|7,670,916|96|
|DefineProperty (setter & enumerable=false & configurable=false)|7,701,271|93|
|DefineProperty (writable)|1,268,176,917|97|
|DefineProperty (writable & enumerable=false)|1,258,119,912|96|
|DefineProperty (writable & enumerable=false & configurable=false)|1,103,037,935|87|
|DefineProperties (setter)|116,715,282|82|
|DefineProperties (setter & enumerable=false)|7,763,920|97|
|DefineProperties (setter & enumerable=false & configurable=false)|7,627,950|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,837,526|99|
|Using replaceAll()|2,650,246|99|
|Using replaceAll(//g)|2,529,835|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|227,000|95|
|Sort using first char|1,058,928|93|
|Sort using localeCompare|1,027,839|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,788|94|
|{...smallObject} - Total keys: 2|105,568,362|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,947|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,099|98|
|{ ...bigObject, ...anotherBigObject }|1,107|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,049,115|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,601,966|92|
|{ ...smallObject, ...anotherSmallObject }|21,971,826|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,382 ops/sec ±0.89% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 500 ops/sec ±0.38% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,250 ops/sec ±0.29% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,705 ops/sec ±6.17% (81 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,271,771,177|97|
|Using backtick (`)|1,272,588,010|100|
|Using array.join|8,934,917|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|24,203,230|96|
|Using this|187,267,940|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,274,151|94|
|Date.now()|21,925,053|95|
