# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Fri Feb 03 2023 17:41:34 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.004ms
array.push|100|0.028ms
new Array(length)|100|0.011ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.375ms
new Array(length)|10,000|0.196ms
array.push|1,000,000|27.808ms
new Array(length)|1,000,000|17.969ms
array.push|100,000,000|2,331.973ms
new Array(length)|100,000,000|5,891.529ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.101ms
new Array(length)|100|0.013ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.587ms
new Array(length)|10,000|4.245ms
array.push|1,000,000|307.974ms
new Array(length)|1,000,000|5.016ms
array.push|100,000,000|2,872.618ms
new Array(length)|100,000,000|6,326.221ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|80|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|192,188|53|
|[True conditional] Using constructor name|147,617|89|
|[True conditional] Check if property is valid then instanceof |150,349|90|
|[False conditional] Using instanceof only|771,781,913|95|
|[False conditional] Using constructor name|771,585,574|95|
|[False conditional] Check if property is valid then instanceof |769,157,498|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,966,597|91|
|fromUnixToISOString(new Date())|1,548,561|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,339|80|
|Intl.DateTimeFormat().format(new Date())|9,353|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,903|58|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,077|89|
|Reusing Intl.DateTimeFormat()|357,984|59|
|Date.toLocaleDateString()|579,759|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,406|74|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|636,385|94|
|Using brackets {}|645,654|92|
|Using '' + |647,564|88|
|Using date.toString()|687,797|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,356,308|95|
|Using undefined assignment|770,977,428|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|189,364|53|
|NodeError|144,637|92|
|NodeError Range|145,656|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,379,610|89|
|Function returning explicitly undefined|1,399,356|89|
|Function returning implicitly undefined|1,448,801|95|
|Function returning string|1,392,006|89|
|Function returning integer|1,403,518|92|
|Function returning float|1,426,093|93|
|Function returning functions|1,395,079|93|
|Function returning arrow functions|1,414,465|89|
|Function returning empty object|1,394,071|89|
|Function returning empty array|1,412,391|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|98,105,059|94|
|using Array.includes (first item)|108,384,392|93|
|Using raw comparison|771,347,580|97|
|Using raw comparison (first item)|769,564,284|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,796,662|91|
|Using Object.getOwnPropertyNames()|56,823,506|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,434,750|96|
|Length = 10_000 - Array.at|18,400,767|90|
|Length = 1_000_000 - Array.at|18,267,928|96|
|Length = 100 - Array[length - 1]|769,477,617|96|
|Length = 10_000 - Array[length - 1]|768,583,528|93|
|Length = 1_000_000 - Array[length - 1]|769,129,712|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,771,148|90|
|Object.create({})|1,327,305|85|
|Cached Empty.prototype|770,367,340|94|
|Empty.prototype|1,336,569|81|
|Empty class|936,251|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|767,320,313|97|
|Using optional chain (obj.field?.field2) (undefined)|773,050,769|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|770,226,977|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|770,033,723|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|226,995,339|95|
|Using parseInt(x, 10) - big number (10 len)|12,667,700|94|
|Using + - small number (2 len)|772,436,911|94|
|Using + - big number (10 len)|771,533,404|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|749,047|80|
|Using ? operator to avoid rejection|798,470|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|220,932,835|91|
|Raw usage underscore usage|226,203,363|91|
|Manipulating private properties using #|185,097,234|89|
|Manipulating private properties using underscore(_)|170,773,701|92|
|Manipulating private properties using Symbol|166,813,698|92|
|Manipulating private properties using PrivateSymbol|21,750,067|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,956,692|94|
|Adding property in the object creation - small object|2,989,715|93|
|Adding property after the function creation - small class|184,581|87|
|Adding property in the function creation - small class|186,937|86|
|Adding property after the class creation - small class|159,024|81|
|Adding property in the class creation - small class|159,286|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,652,120|90|
|Using replaceAll()|2,667,477|94|
|Using replaceAll(//g)|2,446,011|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,528|88|
|Sort using first char|851,702|95|
|Sort using localeCompare|812,039|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,506|90|
|{...smallObject} - Total keys: 2|58,669,997|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,487|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,127|92|
|{ ...bigObject, ...anotherBigObject }|901|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,021,856|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,742,061|95|
|{ ...smallObject, ...anotherSmallObject }|16,081,660|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,686 ops/sec ±18.13% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 456 ops/sec ±0.87% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,590 ops/sec ±0.92% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,094 ops/sec ±30.59% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,044,542|96|
|Using backtick (`)|771,474,727|98|
|Using array.join|7,527,695|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,661,213|84|
|Using this|147,605,009|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,436,490|90|
|Date.now()|15,069,976|94|
