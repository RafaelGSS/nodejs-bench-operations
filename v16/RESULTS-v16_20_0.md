# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v16.20.0`
* __Run:__ Sun Apr 23 2023 12:53:20 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,590,356|99|
|Using dot notation|849,653,273|97|
|Using define property (writable)|4,505,293|99|
|Using define property initialized (writable)|5,780,138|99|
|Using define property (getter)|2,269,722|95|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.355ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|22.674ms
new Array(length)|1,000,000|14.366ms
array.push|100,000,000|1,749.271ms
new Array(length)|100,000,000|3,812.251ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.014ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.388ms
new Array(length)|10,000|3.213ms
array.push|1,000,000|250.777ms
new Array(length)|1,000,000|4.429ms
array.push|100,000,000|2,136.154ms
new Array(length)|100,000,000|4,122.243ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|89|
|Array.from|21|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|241,346|54|
|[True conditional] Using constructor name|185,903|99|
|[True conditional] Check if property is valid then instanceof |186,061|94|
|[False conditional] Using instanceof only|850,696,463|97|
|[False conditional] Using constructor name|851,206,494|98|
|[False conditional] Check if property is valid then instanceof |851,784,479|97|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|30,057|94|
|crypto.verify('RSA-SHA256')|29,022|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,594,237|96|
|fromUnixToISOString(new Date())|2,048,545|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,788|83|
|Intl.DateTimeFormat().format(new Date())|13,045|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,616|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,919|75|
|Reusing Intl.DateTimeFormat()|607,738|96|
|Date.toLocaleDateString()|609,333|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,789|85|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|926,501|91|
|Using brackets {}|937,513|94|
|Using '' + |943,224|95|
|Using date.toString()|1,025,569|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,407,883|97|
|Using undefined assignment|849,872,617|101|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,605|53|
|NodeError|183,388|93|
|NodeError Range|184,398|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,702,721|97|
|Function returning explicitly undefined|1,751,058|100|
|Function returning implicitly undefined|1,757,338|92|
|Function returning string|1,761,052|100|
|Function returning integer|1,796,417|101|
|Function returning float|1,756,358|100|
|Function returning functions|1,737,945|99|
|Function returning arrow functions|1,762,677|99|
|Function returning empty object|1,770,347|100|
|Function returning empty array|1,751,179|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|849,566,561|99|
|using Array.includes (first item)|849,456,912|99|
|Using raw comparison|850,952,009|98|
|Using raw comparison (first item)|850,899,054|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,014,875|94|
|Using Object.getOwnPropertyNames()|92,189,396|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,658,753|99|
|Length = 10_000 - Array.at|26,651,443|100|
|Length = 1_000_000 - Array.at|26,571,007|100|
|Length = 100 - Array[length - 1]|849,013,211|98|
|Length = 10_000 - Array[length - 1]|849,147,582|101|
|Length = 1_000_000 - Array[length - 1]|848,934,628|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,495,452|93|
|Object.create({})|2,224,080|89|
|Cached Empty.prototype|850,379,751|101|
|Empty.prototype|2,258,889|93|
|Empty class|1,298,874|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,865,832|100|
|Using optional chain (obj.field?.field2) (undefined)|850,942,596|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,683,982|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|849,932,208|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|291,991,398|89|
|Using parseInt(x, 10) - big number (10 len)|21,997,325|98|
|Using + - small number (2 len)|851,596,047|100|
|Using + - big number (10 len)|850,999,814|101|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,096,802|84|
|Using ? operator to avoid rejection|1,166,410|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,147,868|100|
|Raw usage underscore usage|10,573,517|97|
|Manipulating private properties using #|3,947,254|95|
|Manipulating private properties using underscore(_)|840,796,949|100|
|Manipulating private properties using Symbol|839,778,264|99|
|Manipulating private properties using PrivateSymbol|48,364,164|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,582,112|100|
|Adding property in the object creation - small object|3,590,145|99|
|Adding property after the function creation - small class|233,076|89|
|Adding property in the function creation - small class|237,472|93|
|Adding property after the class creation - small class|199,495|88|
|Adding property in the class creation - small class|198,476|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,535,051|100|
|Getter|93,541,597|95|
|Method|850,493,174|96|
|DefineProperty (getter)|850,271,766|100|
|DefineProperty (getter & enumerable=false)|93,793,773|94|
|DefineProperty (getter & configurable=false)|850,949,203|94|
|DefineProperty (getter & enumerable=false & configurable=false)|94,835,846|96|
|DefineProperty (writable)|850,488,370|92|
|DefineProperty (writable & enumerable=false)|850,913,134|101|
|DefineProperty (writable & enumerable=false & configurable=false)|390,000,477|46|
|DefineProperties (getter)|57,697,685|91|
|DefineProperties (getter & enumerable=false)|93,899,731|95|
|DefineProperties (getter & enumerable=false & configurable=false)|94,350,764|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|845,547,456|99|
|Setter|11,212,851|99|
|Method|848,470,909|98|
|DefineProperty (setter)|848,540,907|101|
|DefineProperty (setter & enumerable=false)|11,277,027|97|
|DefineProperty (setter & configurable=false)|11,353,802|99|
|DefineProperty (setter & enumerable=false & configurable=false)|11,281,778|99|
|DefineProperty (writable)|849,718,539|94|
|DefineProperty (writable & enumerable=false)|850,366,722|100|
|DefineProperty (writable & enumerable=false & configurable=false)|848,847,448|96|
|DefineProperties (setter)|848,861,294|99|
|DefineProperties (setter & enumerable=false)|10,610,184|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,359,599|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,406,858|97|
|Using replaceAll()|3,215,501|101|
|Using replaceAll(//g)|3,074,966|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|258,979|98|
|Sort using first char|1,207,928|98|
|Sort using localeCompare|647,721|101|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,036|99|
|{...smallObject} - Total keys: 2|98,191,663|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,163|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,194|100|
|{ ...bigObject, ...anotherBigObject }|1,220|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,400,315|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,464,328|96|
|{ ...smallObject, ...anotherSmallObject }|23,182,790|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,640 ops/sec ±0.75% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 517 ops/sec ±0.45% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,231 ops/sec ±0.52% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,087 ops/sec ±26.57% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|850,877,581|100|
|Using backtick (`)|849,840,100|100|
|Using array.join|12,400,974|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,056,204|97|
|Using indexof|850,710,330|100|
|Using RegExp.test|15,227,370|98|
|Using RegExp.text with cached regex pattern|15,808,350|97|
|Using new RegExp.test|4,945,475|98|
|Using new RegExp.test with cached regex pattern|5,944,679|100|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|154,982,885|95|
|Using this|160,153,363|96|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,150,604|91|
|Date.now()|20,604,826|100|
