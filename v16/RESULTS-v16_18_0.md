# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Tue Jan 10 2023 02:06:34 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.092ms
new Array(length)|100|0.008ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.461ms
new Array(length)|10,000|0.234ms
array.push|1,000,000|28.637ms
new Array(length)|1,000,000|18.137ms
array.push|100,000,000|1,796.047ms
new Array(length)|100,000,000|4,630.482ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.603ms
new Array(length)|10,000|4.268ms
array.push|1,000,000|317.935ms
new Array(length)|1,000,000|4.959ms
array.push|100,000,000|2,647.395ms
new Array(length)|100,000,000|5,143.309ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|382|84|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|195,633|59|
|[True conditional] Using constructor name|153,987|94|
|[True conditional] Check if property is valid then instanceof |156,320|91|
|[False conditional] Using instanceof only|712,845,662|97|
|[False conditional] Using constructor name|710,855,235|95|
|[False conditional] Check if property is valid then instanceof |714,085,706|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,372|80|
|Intl.DateTimeFormat().format(new Date())|8,328|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,558|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,316|90|
|Reusing Intl.DateTimeFormat()|393,643|80|
|Reusing dfWithOptions.format(Date.now())|297,932|92|
|Reusing dfWithOptions.format(new Date())|264,563|95|
|Date.toLocaleDateString()|485,950|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,439|89|
|Format using date.get*|3,418,397|94|
|new Date() (Baseline)|7,479,534|95|
|Date.now() (Baseline)|14,485,234|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|676,321|99|
|Using brackets {}|682,437|95|
|Using '' + |677,969|97|
|Using date.toString()|737,589|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,499,730|97|
|Using undefined assignment|711,856,673|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,190|56|
|NodeError|155,302|96|
|NodeError Range|156,803|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,301,730|90|
|Function returning explicitly undefined|1,298,170|98|
|Function returning implicitly undefined|1,312,141|93|
|Function returning string|1,299,489|94|
|Function returning integer|1,322,654|96|
|Function returning float|1,315,705|98|
|Function returning functions|1,274,417|96|
|Function returning arrow functions|1,278,399|92|
|Function returning empty object|1,322,361|96|
|Function returning empty array|1,325,619|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,846,030|98|
|using Array.includes (first item)|711,615,112|97|
|Using raw comparison|714,262,073|97|
|Using raw comparison (first item)|713,442,042|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,434,234|91|
|Using Object.getOwnPropertyNames()|56,453,197|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,008,815|98|
|Length = 10_000 - Array.at|16,021,203|96|
|Length = 1_000_000 - Array.at|15,974,965|92|
|Length = 100 - Array[length - 1]|712,935,632|95|
|Length = 10_000 - Array[length - 1]|712,300,193|98|
|Length = 1_000_000 - Array[length - 1]|711,742,527|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,789,124|94|
|Object.create({})|1,402,665|82|
|Cached Empty.prototype|710,772,666|98|
|Empty.prototype|1,393,323|76|
|Empty class|939,082|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,242,507|95|
|Using optional chain (obj.field?.field2) (undefined)|712,789,107|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,566,092|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|712,937,656|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,465,130|94|
|Using parseInt(x, 10) - big number (10 len)|12,732,602|94|
|Using + - small number (2 len)|714,312,259|93|
|Using + - big number (10 len)|714,018,175|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|815,468|79|
|Using ? operator to avoid rejection|887,429|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,681,304|96|
|Raw usage underscore usage|7,104,569|98|
|Manipulating private properties using #|2,590,480|97|
|Manipulating private properties using underscore(_)|706,290,747|99|
|Manipulating private properties using Symbol|704,589,013|97|
|Manipulating private properties using PrivateSymbol|27,513,549|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,605,180|99|
|Adding property in the object creation - small object|2,631,785|96|
|Adding property after the function creation - small class|181,536|85|
|Adding property in the function creation - small class|181,496|88|
|Adding property after the class creation - small class|148,787|83|
|Adding property in the class creation - small class|148,896|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,143,879|91|
|Using replaceAll()|2,046,235|98|
|Using replaceAll(//g)|1,934,323|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,645|98|
|Sort using first char|795,719|94|
|Sort using localeCompare|432,997|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,405|95|
|{...smallObject} - Total keys: 2|61,984,037|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,349|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,637|99|
|{ ...bigObject, ...anotherBigObject }|851|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,119,187|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,626,379|94|
|{ ...smallObject, ...anotherSmallObject }|13,793,878|100|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,668 ops/sec ±14.31% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 416 ops/sec ±0.59% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,832 ops/sec ±0.54% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 960 ops/sec ±16.88% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|714,054,368|98|
|Using backtick (`)|713,531,349|92|
|Using array.join|6,940,699|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|134,656,959|93|
|Using this|137,563,092|97|
