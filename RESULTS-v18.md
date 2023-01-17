# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Tue Jan 17 2023 20:43:24 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.003ms
array.push|100|0.05ms
new Array(length)|100|0.014ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.691ms
new Array(length)|10,000|0.271ms
array.push|1,000,000|41.893ms
new Array(length)|1,000,000|6.943ms
array.push|100,000,000|2,229.638ms
new Array(length)|100,000,000|5,910.906ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.116ms
new Array(length)|100|0.014ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.819ms
new Array(length)|10,000|5.029ms
array.push|1,000,000|392.559ms
new Array(length)|1,000,000|4.954ms
array.push|100,000,000|2,937.928ms
new Array(length)|100,000,000|6,320.532ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|78|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|139,417|51|
|[True conditional] Using constructor name|106,500|87|
|[True conditional] Check if property is valid then instanceof |108,014|89|
|[False conditional] Using instanceof only|626,650,012|91|
|[False conditional] Using constructor name|623,072,665|91|
|[False conditional] Check if property is valid then instanceof |619,101,881|88|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,320,844|87|
|fromUnixToISOString(new Date())|1,138,419|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,204|79|
|Intl.DateTimeFormat().format(new Date())|5,621|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,378|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,153|68|
|Reusing Intl.DateTimeFormat()|400,993|91|
|Date.toLocaleDateString()|395,863|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,342|74|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|539,501|88|
|Using brackets {}|551,661|90|
|Using '' + |547,808|92|
|Using date.toString()|592,122|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,819,999|91|
|Using undefined assignment|628,946,072|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|140,334|53|
|NodeError|107,492|84|
|NodeError Range|108,017|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,058,624|86|
|Function returning explicitly undefined|1,064,119|86|
|Function returning implicitly undefined|1,076,730|89|
|Function returning string|1,064,921|86|
|Function returning integer|1,088,719|87|
|Function returning float|1,073,937|87|
|Function returning functions|1,007,614|89|
|Function returning arrow functions|1,043,178|86|
|Function returning empty object|1,080,068|88|
|Function returning empty array|1,069,699|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|622,054,488|89|
|using Array.includes (first item)|610,863,139|89|
|Using raw comparison|623,137,277|89|
|Using raw comparison (first item)|618,233,368|87|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,596,394|86|
|Using Object.getOwnPropertyNames()|37,464,390|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,361,995|90|
|Length = 10_000 - Array.at|14,302,536|88|
|Length = 1_000_000 - Array.at|14,205,715|88|
|Length = 100 - Array[length - 1]|614,653,576|89|
|Length = 10_000 - Array[length - 1]|616,669,762|90|
|Length = 1_000_000 - Array[length - 1]|615,044,240|90|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,375,719|87|
|Object.create({})|728,528|68|
|Cached Empty.prototype|607,960,565|88|
|Empty.prototype|840,943|75|
|Empty class|575,620|72|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|619,757,232|91|
|Using optional chain (obj.field?.field2) (undefined)|617,250,445|83|
|Using and operator (obj.field && obj.field.field2) (Valid)|619,677,227|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|622,493,449|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|146,525,737|86|
|Using parseInt(x, 10) - big number (10 len)|10,587,664|88|
|Using + - small number (2 len)|628,271,209|89|
|Using + - big number (10 len)|628,073,420|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|448,664|76|
|Using ? operator to avoid rejection|475,499|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|119,739,930|88|
|Raw usage underscore usage|107,570,693|83|
|Manipulating private properties using #|80,030,965|85|
|Manipulating private properties using underscore(_)|64,122,114|88|
|Manipulating private properties using Symbol|63,453,318|88|
|Manipulating private properties using PrivateSymbol|25,379,249|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,962,395|88|
|Adding property in the object creation - small object|1,969,727|89|
|Adding property after the function creation - small class|110,497|79|
|Adding property in the function creation - small class|113,717|82|
|Adding property after the class creation - small class|90,614|77|
|Adding property in the class creation - small class|93,392|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,666,227|87|
|Using replaceAll()|1,415,246|90|
|Using replaceAll(//g)|1,497,738|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,425|88|
|Sort using first char|599,665|89|
|Sort using localeCompare|577,034|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,027|85|
|{...smallObject} - Total keys: 2|50,508,087|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,099|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,943|89|
|{ ...bigObject, ...anotherBigObject }|649|88|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,953,462|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,430,594|90|
|{ ...smallObject, ...anotherSmallObject }|12,344,806|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,131 ops/sec ±19.51% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 315 ops/sec ±1.70% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,672 ops/sec ±1.40% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 809 ops/sec ±19.10% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|618,040,858|89|
|Using backtick (`)|620,154,961|86|
|Using array.join|5,357,505|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|124,220,827|89|
|Using this|124,992,980|87|
