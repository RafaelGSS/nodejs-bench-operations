# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Tue Jan 10 2023 02:06:43 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.01ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.592ms
new Array(length)|10,000|0.256ms
array.push|1,000,000|37.447ms
new Array(length)|1,000,000|21.217ms
array.push|100,000,000|2,300.776ms
new Array(length)|100,000,000|5,834.652ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.021ms
array.push|100|0.117ms
new Array(length)|100|0.013ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.772ms
new Array(length)|10,000|5.327ms
array.push|1,000,000|438.253ms
new Array(length)|1,000,000|5.731ms
array.push|100,000,000|3,157.504ms
new Array(length)|100,000,000|6,286.79ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|305|79|
|Array.from|13|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|142,433|52|
|[True conditional] Using constructor name|109,485|89|
|[True conditional] Check if property is valid then instanceof |111,854|89|
|[False conditional] Using instanceof only|722,594,296|86|
|[False conditional] Using constructor name|725,863,407|87|
|[False conditional] Check if property is valid then instanceof |729,336,135|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,422|78|
|Intl.DateTimeFormat().format(new Date())|5,966|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,035|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,225|66|
|Reusing Intl.DateTimeFormat()|401,684|87|
|Reusing dfWithOptions.format(Date.now())|217,547|78|
|Reusing dfWithOptions.format(new Date())|217,599|88|
|Date.toLocaleDateString()|400,101|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,598|84|
|Format using date.get*|2,759,147|87|
|new Date() (Baseline)|5,947,237|87|
|Date.now() (Baseline)|13,079,779|86|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|545,467|88|
|Using brackets {}|540,835|89|
|Using '' + |547,411|90|
|Using date.toString()|595,875|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,929,274|89|
|Using undefined assignment|714,910,066|86|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|142,059|56|
|NodeError|115,845|87|
|NodeError Range|115,349|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,149,720|86|
|Function returning explicitly undefined|1,074,308|86|
|Function returning implicitly undefined|1,051,889|86|
|Function returning string|1,057,702|87|
|Function returning integer|1,133,960|84|
|Function returning float|1,132,574|89|
|Function returning functions|1,069,914|89|
|Function returning arrow functions|1,093,320|87|
|Function returning empty object|1,119,088|85|
|Function returning empty array|1,107,057|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|703,922,240|87|
|using Array.includes (first item)|703,595,085|91|
|Using raw comparison|710,778,784|85|
|Using raw comparison (first item)|717,708,129|90|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,368,873|87|
|Using Object.getOwnPropertyNames()|44,004,728|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,269,545|88|
|Length = 10_000 - Array.at|15,220,948|92|
|Length = 1_000_000 - Array.at|15,123,400|90|
|Length = 100 - Array[length - 1]|723,341,463|87|
|Length = 10_000 - Array[length - 1]|719,915,674|89|
|Length = 1_000_000 - Array[length - 1]|720,508,050|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,614,827|85|
|Object.create({})|768,532|69|
|Cached Empty.prototype|711,370,523|90|
|Empty.prototype|837,078|74|
|Empty class|572,011|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,091,892|80|
|Using optional chain (obj.field?.field2) (undefined)|733,597,843|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|724,170,590|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|726,309,886|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|151,274,192|90|
|Using parseInt(x, 10) - big number (10 len)|11,868,762|91|
|Using + - small number (2 len)|714,039,034|89|
|Using + - big number (10 len)|715,386,190|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|453,493|72|
|Using ? operator to avoid rejection|483,103|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,378,131|88|
|Raw usage underscore usage|135,668,044|85|
|Manipulating private properties using #|88,823,592|87|
|Manipulating private properties using underscore(_)|71,418,911|78|
|Manipulating private properties using Symbol|72,689,235|82|
|Manipulating private properties using PrivateSymbol|26,322,364|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,049,585|82|
|Adding property in the object creation - small object|2,069,418|88|
|Adding property after the function creation - small class|118,281|80|
|Adding property in the function creation - small class|118,827|83|
|Adding property after the class creation - small class|97,531|77|
|Adding property in the class creation - small class|98,376|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,733,272|88|
|Using replaceAll()|1,590,079|85|
|Using replaceAll(//g)|1,566,165|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,465|87|
|Sort using first char|646,518|88|
|Sort using localeCompare|584,945|83|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,043|87|
|{...smallObject} - Total keys: 2|52,770,032|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,115|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,083|89|
|{ ...bigObject, ...anotherBigObject }|647|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,081,252|84|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,879,647|88|
|{ ...smallObject, ...anotherSmallObject }|12,768,382|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,006 ops/sec ±14.29% (78 runs sampled)
streams.web.Readable reading 1e3 * some data x 343 ops/sec ±1.06% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,725 ops/sec ±1.27% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 826 ops/sec ±16.77% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|751,704,279|92|
|Using backtick (`)|752,628,109|89|
|Using array.join|5,661,101|88|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|141,219,689|87|
|Using this|151,908,168|91|
