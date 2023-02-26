# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sun Feb 26 2023 15:00:50 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|775,081,498|98|
|Using dot notation|772,700,628|96|
|Using define property (writable)|3,433,358|93|
|Using define property initialized (writable)|4,195,159|90|
|Using define property (getter)|1,736,085|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.084ms
new Array(length)|100|0.007ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.343ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|26.97ms
new Array(length)|1,000,000|17.999ms
array.push|100,000,000|2,062.106ms
new Array(length)|100,000,000|5,203.176ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.017ms
array.push|100|0.021ms
new Array(length)|100|0.01ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.523ms
new Array(length)|10,000|4.106ms
array.push|1,000,000|311.595ms
new Array(length)|1,000,000|4.952ms
array.push|100,000,000|2,875.491ms
new Array(length)|100,000,000|5,580.741ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|209,204|56|
|[True conditional] Using constructor name|158,345|94|
|[True conditional] Check if property is valid then instanceof |157,545|88|
|[False conditional] Using instanceof only|773,930,884|94|
|[False conditional] Using constructor name|774,599,227|92|
|[False conditional] Check if property is valid then instanceof |775,033,422|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,073,767|91|
|fromUnixToISOString(new Date())|1,569,382|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,142|83|
|Intl.DateTimeFormat().format(new Date())|7,737|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,979|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,860|42|
|Reusing Intl.DateTimeFormat()|418,160|70|
|Date.toLocaleDateString()|564,522|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,526|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|648,335|92|
|Using brackets {}|654,238|92|
|Using '' + |654,354|94|
|Using date.toString()|701,389|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,257,253|93|
|Using undefined assignment|772,925,655|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|201,571|53|
|NodeError|155,203|89|
|NodeError Range|155,806|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,181,192|88|
|Function returning explicitly undefined|1,147,000|92|
|Function returning implicitly undefined|1,192,967|93|
|Function returning string|1,175,020|92|
|Function returning integer|1,202,271|92|
|Function returning float|1,188,939|95|
|Function returning functions|1,171,561|89|
|Function returning arrow functions|1,186,634|94|
|Function returning empty object|1,192,102|94|
|Function returning empty array|1,201,622|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|772,346,720|95|
|using Array.includes (first item)|773,508,891|94|
|Using raw comparison|775,151,015|97|
|Using raw comparison (first item)|774,482,762|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,698,885|87|
|Using Object.getOwnPropertyNames()|59,161,410|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,153,806|96|
|Length = 10_000 - Array.at|18,187,968|96|
|Length = 1_000_000 - Array.at|18,242,733|96|
|Length = 100 - Array[length - 1]|773,325,271|97|
|Length = 10_000 - Array[length - 1]|770,886,145|97|
|Length = 1_000_000 - Array[length - 1]|770,105,097|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,379,354|89|
|Object.create({})|1,315,029|84|
|Cached Empty.prototype|772,737,544|96|
|Empty.prototype|1,365,808|78|
|Empty class|973,722|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|774,695,263|96|
|Using optional chain (obj.field?.field2) (undefined)|774,093,890|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,727,624|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|772,774,682|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|211,438,569|98|
|Using parseInt(x, 10) - big number (10 len)|13,882,923|94|
|Using + - small number (2 len)|774,051,338|98|
|Using + - big number (10 len)|774,745,589|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|764,740|82|
|Using ? operator to avoid rejection|799,086|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,314,842|92|
|Raw usage underscore usage|7,409,978|92|
|Manipulating private properties using #|2,622,410|93|
|Manipulating private properties using underscore(_)|761,319,712|94|
|Manipulating private properties using Symbol|759,227,120|97|
|Manipulating private properties using PrivateSymbol|21,426,769|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,993,376|95|
|Adding property in the object creation - small object|1,999,107|93|
|Adding property after the function creation - small class|186,969|87|
|Adding property in the function creation - small class|181,187|87|
|Adding property after the class creation - small class|156,455|83|
|Adding property in the class creation - small class|156,301|84|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|775,808,643|96|
|Getter|75,493,831|94|
|Method|774,101,638|97|
|DefineProperty (getter)|774,289,373|98|
|DefineProperty (getter & enumerable=false)|75,566,260|97|
|DefineProperty (getter & configurable=false)|774,302,947|96|
|DefineProperty (getter & enumerable=false & configurable=false)|75,503,876|96|
|DefineProperty (writable)|774,074,154|90|
|DefineProperty (writable & enumerable=false)|148,414,380|20|
|DefineProperty (writable & enumerable=false & configurable=false)|109,756,846|83|
|DefineProperties (getter)|46,517,000|91|
|DefineProperties (getter & enumerable=false)|75,707,047|97|
|DefineProperties (getter & enumerable=false & configurable=false)|75,494,903|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|738,564,783|95|
|Setter|8,338,533|95|
|Method|737,086,650|98|
|DefineProperty (setter)|734,427,361|97|
|DefineProperty (setter & enumerable=false)|8,332,048|97|
|DefineProperty (setter & configurable=false)|8,341,440|92|
|DefineProperty (setter & enumerable=false & configurable=false)|8,302,979|93|
|DefineProperty (writable)|771,143,585|95|
|DefineProperty (writable & enumerable=false)|773,820,151|98|
|DefineProperty (writable & enumerable=false & configurable=false)|123,597,024|19|
|DefineProperties (setter)|84,167,035|89|
|DefineProperties (setter & enumerable=false)|7,753,476|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,223,607|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,589,848|91|
|Using replaceAll()|2,487,081|95|
|Using replaceAll(//g)|2,347,278|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|185,834|91|
|Sort using first char|825,918|92|
|Sort using localeCompare|492,718|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,576|89|
|{...smallObject} - Total keys: 2|56,209,816|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,520|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,167|93|
|{ ...bigObject, ...anotherBigObject }|929|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,093,355|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,846,647|94|
|{ ...smallObject, ...anotherSmallObject }|14,903,984|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,779 ops/sec ±0.92% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 435 ops/sec ±0.74% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,668 ops/sec ±0.69% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 999 ops/sec ±23.30% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|774,781,104|96|
|Using backtick (`)|775,508,703|93|
|Using array.join|7,443,188|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,927,608|91|
|Using this|150,758,323|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,071,824|92|
|Date.now()|14,521,803|92|
