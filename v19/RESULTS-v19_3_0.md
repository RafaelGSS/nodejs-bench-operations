# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Fri Jan 27 2023 19:06:23 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.038ms
new Array(length)|100|0.008ms
array.push|1,000|0.096ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.963ms
new Array(length)|10,000|0.515ms
array.push|1,000,000|26.556ms
new Array(length)|1,000,000|12.419ms
array.push|100,000,000|1,960.668ms
new Array(length)|100,000,000|4,990.109ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.089ms
new Array(length)|100|0.019ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.546ms
new Array(length)|10,000|0.189ms
array.push|1,000,000|349.461ms
new Array(length)|1,000,000|8.592ms
array.push|100,000,000|2,402.58ms
new Array(length)|100,000,000|5,768.551ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|302|85|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,419|52|
|[True conditional] Using constructor name|147,364|92|
|[True conditional] Check if property is valid then instanceof |147,283|91|
|[False conditional] Using instanceof only|781,764,908|95|
|[False conditional] Using constructor name|781,902,496|94|
|[False conditional] Check if property is valid then instanceof |779,408,589|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,022,405|91|
|fromUnixToISOString(new Date())|1,664,513|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,426|82|
|Intl.DateTimeFormat().format(new Date())|9,191|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,872|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,692|70|
|Reusing Intl.DateTimeFormat()|562,330|89|
|Date.toLocaleDateString()|585,499|90|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,298|74|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|645,554|91|
|Using brackets {}|647,932|91|
|Using '' + |653,240|93|
|Using date.toString()|688,984|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,382,960|92|
|Using undefined assignment|780,027,273|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,388|49|
|NodeError|145,518|88|
|NodeError Range|140,499|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,376,192|87|
|Function returning explicitly undefined|1,342,659|92|
|Function returning implicitly undefined|1,380,090|93|
|Function returning string|1,351,882|87|
|Function returning integer|1,316,758|92|
|Function returning float|1,358,939|91|
|Function returning functions|1,349,355|91|
|Function returning arrow functions|1,325,915|91|
|Function returning empty object|1,360,506|90|
|Function returning empty array|1,363,858|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|778,679,079|97|
|using Array.includes (first item)|778,533,525|97|
|Using raw comparison|781,594,750|94|
|Using raw comparison (first item)|780,869,376|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,989,168|92|
|Using Object.getOwnPropertyNames()|57,979,935|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|855,303,912|97|
|Length = 10_000 - Array.at|852,707,622|96|
|Length = 1_000_000 - Array.at|854,449,388|96|
|Length = 100 - Array[length - 1]|777,283,557|95|
|Length = 10_000 - Array[length - 1]|778,276,597|97|
|Length = 1_000_000 - Array[length - 1]|778,758,158|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,946,778|84|
|Object.create({})|1,553,372|81|
|Cached Empty.prototype|780,175,570|95|
|Empty.prototype|1,458,887|81|
|Empty class|1,044,748|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|782,122,604|94|
|Using optional chain (obj.field?.field2) (undefined)|781,898,122|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|782,613,627|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|781,334,718|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|229,339,703|97|
|Using parseInt(x, 10) - big number (10 len)|12,731,477|92|
|Using + - small number (2 len)|781,676,703|97|
|Using + - big number (10 len)|781,669,990|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|851,525|80|
|Using ? operator to avoid rejection|878,861|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|777,012,659|97|
|Raw usage underscore usage|777,991,962|91|
|Manipulating private properties using #|767,759,202|97|
|Manipulating private properties using underscore(_)|767,838,972|96|
|Manipulating private properties using Symbol|765,207,756|95|
|Manipulating private properties using PrivateSymbol|21,338,212|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,117,804|96|
|Adding property in the object creation - small object|3,144,570|92|
|Adding property after the function creation - small class|201,293|83|
|Adding property in the function creation - small class|200,123|84|
|Adding property after the class creation - small class|170,527|82|
|Adding property in the class creation - small class|170,008|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,715,098|89|
|Using replaceAll()|2,574,184|92|
|Using replaceAll(//g)|2,425,207|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,860|94|
|Sort using first char|895,892|86|
|Sort using localeCompare|851,298|84|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,521|92|
|{...smallObject} - Total keys: 2|54,706,768|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,525|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,271|90|
|{ ...bigObject, ...anotherBigObject }|935|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,745,935|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,922,397|95|
|{ ...smallObject, ...anotherSmallObject }|15,595,431|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,607 ops/sec ±16.46% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 435 ops/sec ±5.72% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,020 ops/sec ±0.68% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,041 ops/sec ±12.65% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|781,011,272|98|
|Using backtick (`)|780,928,059|94|
|Using array.join|7,593,714|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|142,044,052|90|
|Using this|161,619,539|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,406,869|90|
|Date.now()|14,845,152|93|
