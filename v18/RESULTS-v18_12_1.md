# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Wed Apr 12 2023 23:09:18 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,262,885,485|100|
|Using dot notation|1,264,879,100|97|
|Using define property (writable)|3,925,006|97|
|Using define property initialized (writable)|4,653,296|95|
|Using define property (getter)|2,112,872|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.001ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.765ms
new Array(length)|10,000|0.19ms
array.push|1,000,000|30.541ms
new Array(length)|1,000,000|5.11ms
array.push|100,000,000|1,565.068ms
new Array(length)|100,000,000|4,632.743ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.061ms
new Array(length)|100|0.008ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.37ms
new Array(length)|10,000|3.068ms
array.push|1,000,000|80.451ms
new Array(length)|1,000,000|4.077ms
array.push|100,000,000|2,401.584ms
new Array(length)|100,000,000|4,057.876ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|291|82|
|Array.from|18|48|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,711|61|
|[True conditional] Using constructor name|194,432|96|
|[True conditional] Check if property is valid then instanceof |195,344|96|
|[False conditional] Using instanceof only|1,263,914,951|93|
|[False conditional] Using constructor name|1,266,957,365|97|
|[False conditional] Check if property is valid then instanceof |1,268,938,101|99|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,679|93|
|crypto.verify('RSA-SHA256')|6,712|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,062,202|98|
|fromUnixToISOString(new Date())|1,761,007|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,096|79|
|Intl.DateTimeFormat().format(new Date())|9,502|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,980|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,318|95|
|Reusing Intl.DateTimeFormat()|404,694|76|
|Date.toLocaleDateString()|537,983|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,736|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|890,489|97|
|Using brackets {}|905,435|94|
|Using '' + |881,140|92|
|Using date.toString()|972,145|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,164,958|99|
|Using undefined assignment|1,267,207,792|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|234,009|61|
|NodeError|193,330|97|
|NodeError Range|193,355|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,298,892|98|
|Function returning explicitly undefined|1,295,020|98|
|Function returning implicitly undefined|1,305,008|94|
|Function returning string|1,306,109|92|
|Function returning integer|1,323,092|96|
|Function returning float|1,308,930|97|
|Function returning functions|1,295,453|99|
|Function returning arrow functions|1,292,642|97|
|Function returning empty object|1,311,279|99|
|Function returning empty array|1,311,475|88|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,268,133,621|96|
|using Array.includes (first item)|1,270,603,785|94|
|Using raw comparison|1,269,694,791|100|
|Using raw comparison (first item)|1,267,938,917|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,653,756|92|
|Using Object.getOwnPropertyNames()|77,436,376|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,130,688|95|
|Length = 10_000 - Array.at|21,258,721|97|
|Length = 1_000_000 - Array.at|21,195,899|96|
|Length = 100 - Array[length - 1]|1,263,334,430|99|
|Length = 10_000 - Array[length - 1]|1,259,734,345|96|
|Length = 1_000_000 - Array[length - 1]|1,256,118,064|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|75,192,045|88|
|Object.create({})|1,407,948|88|
|Cached Empty.prototype|1,274,532,683|94|
|Empty.prototype|1,572,929|86|
|Empty class|954,886|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,266,742,966|97|
|Using optional chain (obj.field?.field2) (undefined)|1,267,910,710|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,264,756,698|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,259,224,667|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|343,762,803|95|
|Using parseInt(x, 10) - big number (10 len)|19,229,245|98|
|Using + - small number (2 len)|1,276,173,443|99|
|Using + - big number (10 len)|1,271,941,002|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|723,076|82|
|Using ? operator to avoid rejection|749,775|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|308,503,883|91|
|Raw usage underscore usage|273,353,544|88|
|Manipulating private properties using #|211,796,407|85|
|Manipulating private properties using underscore(_)|169,846,640|90|
|Manipulating private properties using Symbol|164,049,851|95|
|Manipulating private properties using PrivateSymbol|49,707,726|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,461,288|98|
|Adding property in the object creation - small object|2,470,035|92|
|Adding property after the function creation - small class|175,366|90|
|Adding property in the function creation - small class|175,350|92|
|Adding property after the class creation - small class|150,004|87|
|Adding property in the class creation - small class|149,663|86|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,269,034,680|97|
|Getter|101,646,863|96|
|Method|1,261,052,328|95|
|DefineProperty (getter)|1,268,074,019|98|
|DefineProperty (getter & enumerable=false)|102,718,554|98|
|DefineProperty (getter & configurable=false)|1,270,972,577|99|
|DefineProperty (getter & enumerable=false & configurable=false)|102,642,660|99|
|DefineProperty (writable)|1,253,460,442|92|
|DefineProperty (writable & enumerable=false)|1,271,302,778|100|
|DefineProperty (writable & enumerable=false & configurable=false)|401,394,960|35|
|DefineProperties (getter)|52,382,917|77|
|DefineProperties (getter & enumerable=false)|100,764,669|98|
|DefineProperties (getter & enumerable=false & configurable=false)|101,742,705|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|924,959,338|98|
|Setter|7,688,285|86|
|Method|950,653,920|96|
|DefineProperty (setter)|940,169,851|91|
|DefineProperty (setter & enumerable=false)|7,825,105|92|
|DefineProperty (setter & configurable=false)|7,849,583|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,791,922|95|
|DefineProperty (writable)|1,060,840,153|88|
|DefineProperty (writable & enumerable=false)|144,639,562|78|
|DefineProperty (writable & enumerable=false & configurable=false)|145,068,481|77|
|DefineProperties (setter)|112,285,304|73|
|DefineProperties (setter & enumerable=false)|7,984,722|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,568,614|90|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,726,222|94|
|Using replaceAll()|2,318,036|98|
|Using replaceAll(//g)|2,403,660|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|232,337|97|
|Sort using first char|1,036,781|96|
|Sort using localeCompare|1,020,903|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,733|94|
|{...smallObject} - Total keys: 2|104,567,202|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,916|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,145|97|
|{ ...bigObject, ...anotherBigObject }|1,089|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,827,578|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,654,127|97|
|{ ...smallObject, ...anotherSmallObject }|20,600,938|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,419 ops/sec ±0.82% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 490 ops/sec ±0.48% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,410 ops/sec ±1.09% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,762 ops/sec ±9.64% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,261,708,212|98|
|Using backtick (`)|1,259,764,872|95|
|Using array.join|8,757,307|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|184,495,276|97|
|Using this|186,315,940|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,189,322|99|
|Date.now()|21,811,749|96|
