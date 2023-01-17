# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Tue Jan 17 2023 20:43:22 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.033ms
new Array(length)|10|0.003ms
array.push|100|0.032ms
new Array(length)|100|0.011ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|1.095ms
new Array(length)|10,000|0.396ms
array.push|1,000,000|40.027ms
new Array(length)|1,000,000|6.497ms
array.push|100,000,000|1,629.001ms
new Array(length)|100,000,000|4,872.946ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.096ms
new Array(length)|100|0.011ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.017ms
array.push|10,000|7.677ms
new Array(length)|10,000|0.171ms
array.push|1,000,000|22.957ms
new Array(length)|1,000,000|9.421ms
array.push|100,000,000|1,995.639ms
new Array(length)|100,000,000|4,920.462ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|441|88|
|Array.from|16|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|168,522|52|
|[True conditional] Using constructor name|129,205|91|
|[True conditional] Check if property is valid then instanceof |131,349|95|
|[False conditional] Using instanceof only|598,459,317|98|
|[False conditional] Using constructor name|596,750,789|97|
|[False conditional] Check if property is valid then instanceof |597,109,255|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,010,098|93|
|fromUnixToISOString(new Date())|1,632,088|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,213|91|
|Intl.DateTimeFormat().format(new Date())|9,276|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,202|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,489|84|
|Reusing Intl.DateTimeFormat()|414,523|89|
|Date.toLocaleDateString()|468,423|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,016|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|735,913|90|
|Using brackets {}|738,587|97|
|Using '' + |745,124|95|
|Using date.toString()|814,926|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,662,065|97|
|Using undefined assignment|595,169,961|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,900|51|
|NodeError|128,540|96|
|NodeError Range|128,355|98|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,345,884|97|
|Function returning explicitly undefined|1,319,072|95|
|Function returning implicitly undefined|1,341,245|92|
|Function returning string|1,222,784|90|
|Function returning integer|1,372,849|97|
|Function returning float|1,360,210|95|
|Function returning functions|1,322,640|97|
|Function returning arrow functions|1,246,734|96|
|Function returning empty object|1,330,412|97|
|Function returning empty array|1,214,888|89|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,555,048|97|
|using Array.includes (first item)|594,466,039|98|
|Using raw comparison|597,961,301|95|
|Using raw comparison (first item)|596,628,623|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,896,725|93|
|Using Object.getOwnPropertyNames()|67,740,183|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|599,187,348|96|
|Length = 10_000 - Array.at|600,426,286|97|
|Length = 1_000_000 - Array.at|601,239,184|95|
|Length = 100 - Array[length - 1]|596,276,193|98|
|Length = 10_000 - Array[length - 1]|596,616,394|94|
|Length = 1_000_000 - Array[length - 1]|594,959,570|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,359,429|92|
|Object.create({})|1,743,080|83|
|Cached Empty.prototype|596,451,398|96|
|Empty.prototype|1,616,382|81|
|Empty class|1,054,286|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|596,510,982|97|
|Using optional chain (obj.field?.field2) (undefined)|597,417,064|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,319,762|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,185,440|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,180,312|93|
|Using parseInt(x, 10) - big number (10 len)|14,313,601|95|
|Using + - small number (2 len)|597,903,486|95|
|Using + - big number (10 len)|597,357,989|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|880,610|76|
|Using ? operator to avoid rejection|936,887|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,008,310|98|
|Raw usage underscore usage|601,082,224|97|
|Manipulating private properties using #|594,540,425|99|
|Manipulating private properties using underscore(_)|595,475,914|97|
|Manipulating private properties using Symbol|594,442,718|95|
|Manipulating private properties using PrivateSymbol|39,977,617|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,819,129|95|
|Adding property in the object creation - small object|2,812,381|92|
|Adding property after the function creation - small class|167,621|86|
|Adding property in the function creation - small class|170,904|86|
|Adding property after the class creation - small class|148,512|83|
|Adding property in the class creation - small class|148,210|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,652,127|91|
|Using replaceAll()|2,359,306|99|
|Using replaceAll(//g)|2,327,519|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|192,785|98|
|Sort using first char|913,397|93|
|Sort using localeCompare|834,081|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,377|96|
|{...smallObject} - Total keys: 2|70,564,152|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,462|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,141|98|
|{ ...bigObject, ...anotherBigObject }|827|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,233,914|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,178,894|95|
|{ ...smallObject, ...anotherSmallObject }|17,688,522|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,654 ops/sec ±16.38% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 380 ops/sec ±0.25% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,479 ops/sec ±0.44% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 986 ops/sec ±28.13% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|596,494,252|94|
|Using backtick (`)|597,469,013|99|
|Using array.join|9,225,486|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,995,610|91|
|Using this|121,065,677|94|
