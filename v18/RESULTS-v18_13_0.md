# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Fri Jan 27 2023 19:36:18 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.037ms
new Array(length)|100|0.008ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.62ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|26.915ms
new Array(length)|1,000,000|16.972ms
array.push|100,000,000|2,063.56ms
new Array(length)|100,000,000|5,030.808ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.022ms
array.push|100|0.093ms
new Array(length)|100|0.01ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.597ms
new Array(length)|10,000|4.062ms
array.push|1,000,000|313.791ms
new Array(length)|1,000,000|4.721ms
array.push|100,000,000|2,528.267ms
new Array(length)|100,000,000|5,392.79ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|315|82|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,407|54|
|[True conditional] Using constructor name|144,272|90|
|[True conditional] Check if property is valid then instanceof |145,039|87|
|[False conditional] Using instanceof only|775,236,616|94|
|[False conditional] Using constructor name|775,467,667|96|
|[False conditional] Check if property is valid then instanceof |775,105,067|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,000,483|88|
|fromUnixToISOString(new Date())|1,563,735|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,562|79|
|Intl.DateTimeFormat().format(new Date())|9,002|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,012|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,230|75|
|Reusing Intl.DateTimeFormat()|534,481|92|
|Date.toLocaleDateString()|559,814|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,661|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|637,726|93|
|Using brackets {}|653,695|93|
|Using '' + |650,103|93|
|Using date.toString()|697,648|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,241,221|86|
|Using undefined assignment|772,554,703|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|189,662|54|
|NodeError|147,462|89|
|NodeError Range|148,960|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,346,282|93|
|Function returning explicitly undefined|1,331,461|92|
|Function returning implicitly undefined|1,332,246|90|
|Function returning string|1,300,341|87|
|Function returning integer|1,339,555|89|
|Function returning float|1,327,380|92|
|Function returning functions|1,297,873|93|
|Function returning arrow functions|1,304,958|87|
|Function returning empty object|1,321,700|88|
|Function returning empty array|1,325,582|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|775,570,812|97|
|using Array.includes (first item)|774,588,772|99|
|Using raw comparison|775,962,757|96|
|Using raw comparison (first item)|776,736,798|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,196,348|88|
|Using Object.getOwnPropertyNames()|56,151,950|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,705,581|96|
|Length = 10_000 - Array.at|18,708,180|94|
|Length = 1_000_000 - Array.at|18,744,279|98|
|Length = 100 - Array[length - 1]|774,129,774|95|
|Length = 10_000 - Array[length - 1]|774,123,777|96|
|Length = 1_000_000 - Array[length - 1]|774,258,618|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,505,921|86|
|Object.create({})|1,129,602|82|
|Cached Empty.prototype|775,997,042|97|
|Empty.prototype|1,145,830|82|
|Empty class|826,767|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|775,288,903|97|
|Using optional chain (obj.field?.field2) (undefined)|773,407,647|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,393,029|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|774,619,070|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,596,451|95|
|Using parseInt(x, 10) - big number (10 len)|12,543,905|91|
|Using + - small number (2 len)|776,702,976|97|
|Using + - big number (10 len)|777,009,312|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|661,708|81|
|Using ? operator to avoid rejection|674,504|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|222,224,371|90|
|Raw usage underscore usage|233,500,112|92|
|Manipulating private properties using #|191,457,398|92|
|Manipulating private properties using underscore(_)|193,605,945|85|
|Manipulating private properties using Symbol|204,345,915|91|
|Manipulating private properties using PrivateSymbol|21,165,559|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,961,171|96|
|Adding property in the object creation - small object|2,968,647|93|
|Adding property after the function creation - small class|166,429|82|
|Adding property in the function creation - small class|164,717|85|
|Adding property after the class creation - small class|139,589|84|
|Adding property in the class creation - small class|141,041|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,601,251|92|
|Using replaceAll()|1,922,555|89|
|Using replaceAll(//g)|2,347,001|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,610|93|
|Sort using first char|826,296|90|
|Sort using localeCompare|792,853|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,549|83|
|{...smallObject} - Total keys: 2|52,399,157|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,476|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,098|89|
|{ ...bigObject, ...anotherBigObject }|919|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,584,587|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,774,254|96|
|{ ...smallObject, ...anotherSmallObject }|15,134,208|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,673 ops/sec ±1.73% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 431 ops/sec ±0.86% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,730 ops/sec ±0.79% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,033 ops/sec ±12.27% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,444,863|97|
|Using backtick (`)|773,331,125|96|
|Using array.join|7,401,072|85|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|140,296,768|93|
|Using this|145,260,972|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,331,516|93|
|Date.now()|14,753,134|89|
