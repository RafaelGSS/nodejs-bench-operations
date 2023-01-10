# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Tue Jan 10 2023 02:06:36 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.009ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.498ms
new Array(length)|10,000|0.211ms
array.push|1,000,000|27.395ms
new Array(length)|1,000,000|15.947ms
array.push|100,000,000|1,663.498ms
new Array(length)|100,000,000|4,140.847ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.106ms
new Array(length)|100|0.012ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.591ms
new Array(length)|10,000|4.31ms
array.push|1,000,000|329.885ms
new Array(length)|1,000,000|4.207ms
array.push|100,000,000|2,086.504ms
new Array(length)|100,000,000|4,595.828ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|419|74|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,060|54|
|[True conditional] Using constructor name|130,394|95|
|[True conditional] Check if property is valid then instanceof |130,984|94|
|[False conditional] Using instanceof only|591,263,835|94|
|[False conditional] Using constructor name|591,566,549|94|
|[False conditional] Check if property is valid then instanceof |591,811,731|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,244|91|
|Intl.DateTimeFormat().format(new Date())|9,037|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,082|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,875|85|
|Reusing Intl.DateTimeFormat()|464,290|96|
|Reusing dfWithOptions.format(Date.now())|281,934|96|
|Reusing dfWithOptions.format(new Date())|251,344|99|
|Date.toLocaleDateString()|441,880|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,621|86|
|Format using date.get*|3,680,209|96|
|new Date() (Baseline)|8,093,631|97|
|Date.now() (Baseline)|15,696,181|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|715,793|99|
|Using brackets {}|728,417|97|
|Using '' + |725,163|97|
|Using date.toString()|784,878|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,481,616|97|
|Using undefined assignment|590,254,002|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,938|55|
|NodeError|127,256|93|
|NodeError Range|127,585|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,318,431|95|
|Function returning explicitly undefined|1,243,929|93|
|Function returning implicitly undefined|1,204,610|94|
|Function returning string|1,259,555|91|
|Function returning integer|1,345,707|92|
|Function returning float|1,330,465|95|
|Function returning functions|1,242,691|96|
|Function returning arrow functions|1,270,460|94|
|Function returning empty object|1,317,829|91|
|Function returning empty array|1,324,026|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|589,844,610|95|
|using Array.includes (first item)|591,044,311|94|
|Using raw comparison|591,921,045|97|
|Using raw comparison (first item)|591,063,239|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,214,828|92|
|Using Object.getOwnPropertyNames()|68,941,609|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,801,579|97|
|Length = 10_000 - Array.at|18,718,078|97|
|Length = 1_000_000 - Array.at|18,761,560|97|
|Length = 100 - Array[length - 1]|589,247,465|98|
|Length = 10_000 - Array[length - 1]|589,980,081|95|
|Length = 1_000_000 - Array[length - 1]|589,423,887|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,163,149|93|
|Object.create({})|984,565|81|
|Cached Empty.prototype|589,307,924|96|
|Empty.prototype|1,169,235|81|
|Empty class|683,847|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,756,116|93|
|Using optional chain (obj.field?.field2) (undefined)|591,437,036|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,768,159|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,437,111|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|201,893,768|92|
|Using parseInt(x, 10) - big number (10 len)|15,168,131|94|
|Using + - small number (2 len)|591,990,079|94|
|Using + - big number (10 len)|591,499,452|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|537,219|81|
|Using ? operator to avoid rejection|556,647|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|251,124,919|96|
|Raw usage underscore usage|260,268,396|96|
|Manipulating private properties using #|193,257,182|96|
|Manipulating private properties using underscore(_)|186,476,122|93|
|Manipulating private properties using Symbol|184,187,023|94|
|Manipulating private properties using PrivateSymbol|36,837,653|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,706,928|98|
|Adding property in the object creation - small object|2,704,372|98|
|Adding property after the function creation - small class|135,470|88|
|Adding property in the function creation - small class|136,403|88|
|Adding property after the class creation - small class|113,249|84|
|Adding property in the class creation - small class|114,547|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,468,575|94|
|Using replaceAll()|1,919,181|94|
|Using replaceAll(//g)|2,189,254|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|197,713|95|
|Sort using first char|906,622|96|
|Sort using localeCompare|834,928|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,487|96|
|{...smallObject} - Total keys: 2|79,360,645|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,605|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,514|96|
|{ ...bigObject, ...anotherBigObject }|867|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,235,469|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,655,994|93|
|{ ...smallObject, ...anotherSmallObject }|16,697,505|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,951 ops/sec ±0.66% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 380 ops/sec ±0.20% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,870 ops/sec ±0.40% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 849 ops/sec ±14.74% (58 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,420,304|93|
|Using backtick (`)|590,770,912|96|
|Using array.join|8,883,262|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,382,207|90|
|Using this|113,532,250|93|
