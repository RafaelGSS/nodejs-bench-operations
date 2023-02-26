# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sun Feb 26 2023 14:35:10 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|774,617,173|95|
|Using dot notation|772,110,261|91|
|Using define property (writable)|3,400,644|93|
|Using define property initialized (writable)|4,164,476|93|
|Using define property (getter)|1,711,604|87|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.097ms
new Array(length)|100|0.009ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.37ms
new Array(length)|10,000|0.203ms
array.push|1,000,000|26.612ms
new Array(length)|1,000,000|17.893ms
array.push|100,000,000|2,585.906ms
new Array(length)|100,000,000|5,241.057ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.61ms
new Array(length)|10,000|4.359ms
array.push|1,000,000|310.371ms
new Array(length)|1,000,000|5.095ms
array.push|100,000,000|2,812.774ms
new Array(length)|100,000,000|5,503.434ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|280|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|200,132|56|
|[True conditional] Using constructor name|152,601|88|
|[True conditional] Check if property is valid then instanceof |156,309|93|
|[False conditional] Using instanceof only|773,828,343|91|
|[False conditional] Using constructor name|773,912,714|98|
|[False conditional] Check if property is valid then instanceof |776,701,175|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,071,651|95|
|fromUnixToISOString(new Date())|1,589,754|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,492|76|
|Intl.DateTimeFormat().format(new Date())|7,216|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,345|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,738|65|
|Reusing Intl.DateTimeFormat()|433,685|72|
|Date.toLocaleDateString()|574,449|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,275|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|643,743|89|
|Using brackets {}|640,191|92|
|Using '' + |648,972|94|
|Using date.toString()|697,213|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,309,703|93|
|Using undefined assignment|771,588,992|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,890|55|
|NodeError|155,448|92|
|NodeError Range|155,840|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,178,296|96|
|Function returning explicitly undefined|1,173,023|95|
|Function returning implicitly undefined|1,175,733|94|
|Function returning string|1,170,508|94|
|Function returning integer|1,161,698|94|
|Function returning float|1,183,519|95|
|Function returning functions|1,153,629|93|
|Function returning arrow functions|1,160,867|92|
|Function returning empty object|1,142,418|92|
|Function returning empty array|1,137,178|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,222,381|97|
|using Array.includes (first item)|771,958,499|93|
|Using raw comparison|774,373,811|92|
|Using raw comparison (first item)|774,096,150|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,072,873|90|
|Using Object.getOwnPropertyNames()|59,452,901|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,239,142|97|
|Length = 10_000 - Array.at|18,171,715|95|
|Length = 1_000_000 - Array.at|18,160,357|98|
|Length = 100 - Array[length - 1]|771,145,308|96|
|Length = 10_000 - Array[length - 1]|770,001,886|95|
|Length = 1_000_000 - Array[length - 1]|771,240,130|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,538,449|92|
|Object.create({})|1,332,494|81|
|Cached Empty.prototype|774,772,410|95|
|Empty.prototype|1,328,138|79|
|Empty class|957,579|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|774,145,844|96|
|Using optional chain (obj.field?.field2) (undefined)|774,241,000|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|773,249,081|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|771,903,451|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,813,471|96|
|Using parseInt(x, 10) - big number (10 len)|13,767,677|91|
|Using + - small number (2 len)|774,057,293|94|
|Using + - big number (10 len)|772,879,722|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|752,712|82|
|Using ? operator to avoid rejection|802,503|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,303,104|92|
|Raw usage underscore usage|7,337,557|93|
|Manipulating private properties using #|2,586,389|90|
|Manipulating private properties using underscore(_)|760,013,968|97|
|Manipulating private properties using Symbol|760,679,473|98|
|Manipulating private properties using PrivateSymbol|21,343,852|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,964,219|97|
|Adding property in the object creation - small object|2,973,739|93|
|Adding property after the function creation - small class|191,191|87|
|Adding property in the function creation - small class|189,080|87|
|Adding property after the class creation - small class|156,757|82|
|Adding property in the class creation - small class|157,853|81|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|774,748,466|97|
|Getter|75,642,471|97|
|Method|773,420,123|97|
|DefineProperty (getter)|773,651,371|98|
|DefineProperty (getter & enumerable=false)|75,648,462|91|
|DefineProperty (getter & configurable=false)|773,783,851|95|
|DefineProperty (getter & enumerable=false & configurable=false)|75,524,460|95|
|DefineProperty (writable)|774,055,774|92|
|DefineProperty (writable & enumerable=false)|614,026,196|80|
|DefineProperty (writable & enumerable=false & configurable=false)|108,925,387|82|
|DefineProperties (getter)|46,451,067|93|
|DefineProperties (getter & enumerable=false)|75,610,487|95|
|DefineProperties (getter & enumerable=false & configurable=false)|75,549,986|94|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|737,827,367|96|
|Setter|8,329,417|94|
|Method|736,945,515|94|
|DefineProperty (setter)|738,427,428|93|
|DefineProperty (setter & enumerable=false)|8,339,738|97|
|DefineProperty (setter & configurable=false)|8,355,978|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,337,029|98|
|DefineProperty (writable)|772,040,512|92|
|DefineProperty (writable & enumerable=false)|639,111,624|79|
|DefineProperty (writable & enumerable=false & configurable=false)|112,786,740|85|
|DefineProperties (setter)|82,736,810|87|
|DefineProperties (setter & enumerable=false)|8,338,730|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,373,108|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,586,690|91|
|Using replaceAll()|2,468,179|92|
|Using replaceAll(//g)|2,320,774|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|189,079|92|
|Sort using first char|819,537|94|
|Sort using localeCompare|495,449|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,526|91|
|{...smallObject} - Total keys: 2|55,744,702|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,532|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,173|93|
|{ ...bigObject, ...anotherBigObject }|938|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,157,559|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,907,975|93|
|{ ...smallObject, ...anotherSmallObject }|14,888,839|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,622 ops/sec ±16.39% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 446 ops/sec ±0.55% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,819 ops/sec ±0.79% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 923 ops/sec ±11.12% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,226,515|98|
|Using backtick (`)|774,356,094|92|
|Using array.join|7,510,549|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,814,852|94|
|Using this|145,412,116|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,224,161|94|
|Date.now()|14,989,858|95|
