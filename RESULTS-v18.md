# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.14.0`
* __Run:__ Sun Feb 26 2023 16:43:35 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|773,081,433|98|
|Using dot notation|770,588,328|96|
|Using define property (writable)|3,452,727|94|
|Using define property initialized (writable)|4,609,083|93|
|Using define property (getter)|1,696,892|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.645ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|28.898ms
new Array(length)|1,000,000|17.071ms
array.push|100,000,000|2,004.269ms
new Array(length)|100,000,000|5,073.492ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.019ms
new Array(length)|100|0.011ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.557ms
new Array(length)|10,000|4.084ms
array.push|1,000,000|286.61ms
new Array(length)|1,000,000|5.121ms
array.push|100,000,000|2,768.912ms
new Array(length)|100,000,000|5,566.91ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|278|75|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|192,986|54|
|[True conditional] Using constructor name|149,102|92|
|[True conditional] Check if property is valid then instanceof |152,622|92|
|[False conditional] Using instanceof only|772,725,545|95|
|[False conditional] Using constructor name|773,718,958|98|
|[False conditional] Check if property is valid then instanceof |772,608,355|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,993,849|95|
|fromUnixToISOString(new Date())|1,562,995|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,455|80|
|Intl.DateTimeFormat().format(new Date())|7,705|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,741|60|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,319|86|
|Reusing Intl.DateTimeFormat()|557,562|94|
|Date.toLocaleDateString()|575,411|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,303|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|637,343|94|
|Using brackets {}|644,474|92|
|Using '' + |644,772|88|
|Using date.toString()|693,752|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,290,318|92|
|Using undefined assignment|771,260,025|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|188,505|53|
|NodeError|147,786|93|
|NodeError Range|145,432|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,350,606|92|
|Function returning explicitly undefined|1,339,993|96|
|Function returning implicitly undefined|1,358,423|93|
|Function returning string|1,345,529|92|
|Function returning integer|1,366,052|93|
|Function returning float|1,344,896|93|
|Function returning functions|1,313,271|89|
|Function returning arrow functions|1,301,170|91|
|Function returning empty object|1,332,730|91|
|Function returning empty array|1,345,382|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,090,711|94|
|using Array.includes (first item)|770,947,203|93|
|Using raw comparison|772,547,948|95|
|Using raw comparison (first item)|772,439,007|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,529,255|93|
|Using Object.getOwnPropertyNames()|57,549,098|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,535,633|95|
|Length = 10_000 - Array.at|18,592,110|95|
|Length = 1_000_000 - Array.at|18,531,289|98|
|Length = 100 - Array[length - 1]|769,807,776|97|
|Length = 10_000 - Array[length - 1]|767,614,051|97|
|Length = 1_000_000 - Array[length - 1]|769,770,139|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,175,480|92|
|Object.create({})|1,121,956|83|
|Cached Empty.prototype|772,454,570|96|
|Empty.prototype|1,139,872|82|
|Empty class|849,326|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,808,576|97|
|Using optional chain (obj.field?.field2) (undefined)|773,306,284|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|772,651,506|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|771,391,541|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,599,830|98|
|Using parseInt(x, 10) - big number (10 len)|12,832,540|92|
|Using + - small number (2 len)|773,104,868|98|
|Using + - big number (10 len)|772,130,228|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|648,334|77|
|Using ? operator to avoid rejection|680,403|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|230,489,991|91|
|Raw usage underscore usage|234,372,749|94|
|Manipulating private properties using #|193,313,733|93|
|Manipulating private properties using underscore(_)|175,539,838|91|
|Manipulating private properties using Symbol|178,619,132|93|
|Manipulating private properties using PrivateSymbol|21,789,631|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,040,441|96|
|Adding property in the object creation - small object|3,053,477|92|
|Adding property after the function creation - small class|171,213|85|
|Adding property in the function creation - small class|170,167|87|
|Adding property after the class creation - small class|143,949|82|
|Adding property in the class creation - small class|141,513|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|773,364,757|97|
|Getter|83,460,106|95|
|Method|772,087,933|97|
|DefineProperty (getter)|770,378,154|92|
|DefineProperty (getter & enumerable=false)|83,246,317|93|
|DefineProperty (getter & configurable=false)|773,115,703|97|
|DefineProperty (getter & enumerable=false & configurable=false)|83,261,169|96|
|DefineProperty (writable)|733,608,779|91|
|DefineProperty (writable & enumerable=false)|132,973,073|80|
|DefineProperty (writable & enumerable=false & configurable=false)|123,823,669|77|
|DefineProperties (getter)|55,013,766|90|
|DefineProperties (getter & enumerable=false)|83,486,087|95|
|DefineProperties (getter & enumerable=false & configurable=false)|82,855,736|92|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|737,441,517|97|
|Setter|8,638,630|95|
|Method|736,101,143|87|
|DefineProperty (setter)|736,245,404|97|
|DefineProperty (setter & enumerable=false)|8,595,430|94|
|DefineProperty (setter & configurable=false)|8,592,384|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,603,756|95|
|DefineProperty (writable)|769,114,294|93|
|DefineProperty (writable & enumerable=false)|345,573,547|46|
|DefineProperty (writable & enumerable=false & configurable=false)|131,992,124|80|
|DefineProperties (setter)|103,773,561|84|
|DefineProperties (setter & enumerable=false)|7,993,378|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,488,880|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,683,260|92|
|Using replaceAll()|2,185,100|93|
|Using replaceAll(//g)|2,447,821|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,517|91|
|Sort using first char|824,660|91|
|Sort using localeCompare|818,111|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,575|88|
|{...smallObject} - Total keys: 2|56,030,348|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,555|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,189|93|
|{ ...bigObject, ...anotherBigObject }|954|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,084,956|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,537,578|96|
|{ ...smallObject, ...anotherSmallObject }|15,751,605|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,798 ops/sec ±0.72% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 459 ops/sec ±0.91% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,977 ops/sec ±0.55% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,028 ops/sec ±20.84% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|769,942,409|96|
|Using backtick (`)|771,015,872|96|
|Using array.join|7,697,161|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,286,782|92|
|Using this|148,805,334|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,514,931|93|
|Date.now()|15,372,303|90|
