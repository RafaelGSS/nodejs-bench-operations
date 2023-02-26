# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sun Feb 26 2023 16:17:56 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|773,375,181|96|
|Using dot notation|771,060,817|97|
|Using define property (writable)|3,519,181|94|
|Using define property initialized (writable)|4,602,041|90|
|Using define property (getter)|1,724,492|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.002ms
array.push|100|0.042ms
new Array(length)|100|0.016ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.52ms
new Array(length)|10,000|0.195ms
array.push|1,000,000|25.775ms
new Array(length)|1,000,000|15.333ms
array.push|100,000,000|2,239.809ms
new Array(length)|100,000,000|5,168.259ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.103ms
new Array(length)|100|0.012ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.615ms
new Array(length)|10,000|4.3ms
array.push|1,000,000|284.341ms
new Array(length)|1,000,000|4.644ms
array.push|100,000,000|2,724.77ms
new Array(length)|100,000,000|5,510.403ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|200,578|52|
|[True conditional] Using constructor name|150,893|87|
|[True conditional] Check if property is valid then instanceof |155,802|91|
|[False conditional] Using instanceof only|772,796,441|92|
|[False conditional] Using constructor name|771,437,415|96|
|[False conditional] Check if property is valid then instanceof |773,875,840|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,062,010|92|
|fromUnixToISOString(new Date())|1,647,193|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,840|77|
|Intl.DateTimeFormat().format(new Date())|7,744|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,084|62|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,284|74|
|Reusing Intl.DateTimeFormat()|537,796|94|
|Date.toLocaleDateString()|570,594|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,288|77|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|652,744|93|
|Using brackets {}|658,680|93|
|Using '' + |654,254|93|
|Using date.toString()|699,706|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,320,914|94|
|Using undefined assignment|771,870,483|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|194,760|53|
|NodeError|149,532|91|
|NodeError Range|149,250|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,297,259|93|
|Function returning explicitly undefined|1,279,090|92|
|Function returning implicitly undefined|1,278,962|92|
|Function returning string|1,273,245|89|
|Function returning integer|1,293,654|93|
|Function returning float|1,310,265|95|
|Function returning functions|1,282,054|93|
|Function returning arrow functions|1,272,720|96|
|Function returning empty object|1,320,991|94|
|Function returning empty array|1,313,659|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,912,996|95|
|using Array.includes (first item)|772,504,262|96|
|Using raw comparison|771,482,666|92|
|Using raw comparison (first item)|771,492,601|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,660,532|93|
|Using Object.getOwnPropertyNames()|57,537,639|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,770,551|96|
|Length = 10_000 - Array.at|18,691,756|94|
|Length = 1_000_000 - Array.at|18,700,533|94|
|Length = 100 - Array[length - 1]|770,101,066|95|
|Length = 10_000 - Array[length - 1]|769,383,072|94|
|Length = 1_000_000 - Array[length - 1]|769,032,211|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,612,567|87|
|Object.create({})|1,138,041|83|
|Cached Empty.prototype|771,489,104|97|
|Empty.prototype|1,150,947|84|
|Empty class|826,783|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|773,730,297|95|
|Using optional chain (obj.field?.field2) (undefined)|772,631,333|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|773,378,207|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|772,227,528|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,184,051|96|
|Using parseInt(x, 10) - big number (10 len)|12,772,606|95|
|Using + - small number (2 len)|773,025,705|95|
|Using + - big number (10 len)|771,687,736|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|654,418|79|
|Using ? operator to avoid rejection|677,262|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|232,271,908|92|
|Raw usage underscore usage|238,993,899|92|
|Manipulating private properties using #|189,240,748|92|
|Manipulating private properties using underscore(_)|188,617,690|88|
|Manipulating private properties using Symbol|187,722,228|92|
|Manipulating private properties using PrivateSymbol|21,874,697|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,020,447|96|
|Adding property in the object creation - small object|2,025,842|95|
|Adding property after the function creation - small class|165,724|86|
|Adding property in the function creation - small class|164,948|85|
|Adding property after the class creation - small class|139,247|82|
|Adding property in the class creation - small class|137,741|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|773,750,721|97|
|Getter|83,343,640|96|
|Method|772,974,350|94|
|DefineProperty (getter)|771,901,337|96|
|DefineProperty (getter & enumerable=false)|83,431,913|97|
|DefineProperty (getter & configurable=false)|772,321,902|93|
|DefineProperty (getter & enumerable=false & configurable=false)|83,473,877|99|
|DefineProperty (writable)|771,360,325|95|
|DefineProperty (writable & enumerable=false)|572,231,433|71|
|DefineProperty (writable & enumerable=false & configurable=false)|135,522,330|82|
|DefineProperties (getter)|54,502,904|87|
|DefineProperties (getter & enumerable=false)|83,445,643|96|
|DefineProperties (getter & enumerable=false & configurable=false)|83,402,256|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|735,865,890|96|
|Setter|8,670,503|92|
|Method|735,272,590|98|
|DefineProperty (setter)|736,043,972|97|
|DefineProperty (setter & enumerable=false)|8,670,357|96|
|DefineProperty (setter & configurable=false)|8,659,005|94|
|DefineProperty (setter & enumerable=false & configurable=false)|8,626,471|95|
|DefineProperty (writable)|768,868,242|91|
|DefineProperty (writable & enumerable=false)|139,501,646|21|
|DefineProperty (writable & enumerable=false & configurable=false)|133,423,768|80|
|DefineProperties (setter)|107,459,767|87|
|DefineProperties (setter & enumerable=false)|7,969,456|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,532,777|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,555,132|91|
|Using replaceAll()|2,212,281|95|
|Using replaceAll(//g)|2,349,701|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|197,603|88|
|Sort using first char|854,588|94|
|Sort using localeCompare|840,891|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,583|92|
|{...smallObject} - Total keys: 2|56,956,881|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,521|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,189|94|
|{ ...bigObject, ...anotherBigObject }|941|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,145,285|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,514,667|95|
|{ ...smallObject, ...anotherSmallObject }|15,870,770|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,798 ops/sec ±2.08% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 426 ops/sec ±0.88% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,017 ops/sec ±0.59% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,164 ops/sec ±10.63% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,815,935|95|
|Using backtick (`)|773,099,709|96|
|Using array.join|7,770,106|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,662,939|93|
|Using this|150,857,646|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,576,996|90|
|Date.now()|15,505,630|93|
