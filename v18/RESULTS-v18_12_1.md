# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Thu Jan 26 2023 20:28:45 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.009ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.469ms
new Array(length)|10,000|0.195ms
array.push|1,000,000|34.412ms
new Array(length)|1,000,000|5.294ms
array.push|100,000,000|1,860.83ms
new Array(length)|100,000,000|5,443.3ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.143ms
new Array(length)|100|0.009ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.305ms
new Array(length)|10,000|3.907ms
array.push|1,000,000|164.336ms
new Array(length)|1,000,000|10.46ms
array.push|100,000,000|2,813.3ms
new Array(length)|100,000,000|5,149.794ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|320|84|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|197,906|54|
|[True conditional] Using constructor name|153,969|92|
|[True conditional] Check if property is valid then instanceof |157,218|91|
|[False conditional] Using instanceof only|774,565,861|95|
|[False conditional] Using constructor name|775,200,354|95|
|[False conditional] Check if property is valid then instanceof |775,844,022|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,089,576|95|
|fromUnixToISOString(new Date())|1,636,692|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,952|84|
|Intl.DateTimeFormat().format(new Date())|9,543|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,577|72|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|623,521|92|
|Using brackets {}|661,271|94|
|Using '' + |664,762|95|
|Using date.toString()|709,909|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,341,020|92|
|Using undefined assignment|774,890,744|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,494|54|
|NodeError|151,912|92|
|NodeError Range|152,710|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,303,854|93|
|Function returning explicitly undefined|1,300,988|95|
|Function returning implicitly undefined|1,323,292|91|
|Function returning string|1,306,668|96|
|Function returning integer|1,330,801|91|
|Function returning float|1,313,859|93|
|Function returning functions|1,267,233|94|
|Function returning arrow functions|1,285,900|95|
|Function returning empty object|1,295,231|95|
|Function returning empty array|1,297,478|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,389,877|97|
|using Array.includes (first item)|774,257,077|95|
|Using raw comparison|776,748,877|96|
|Using raw comparison (first item)|776,570,398|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,155,330|85|
|Using Object.getOwnPropertyNames()|58,916,024|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,751,234|96|
|Length = 10_000 - Array.at|18,758,670|96|
|Length = 1_000_000 - Array.at|18,742,131|94|
|Length = 100 - Array[length - 1]|774,432,544|92|
|Length = 10_000 - Array[length - 1]|774,371,579|96|
|Length = 1_000_000 - Array[length - 1]|773,465,578|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|60,874,762|92|
|Object.create({})|1,027,482|79|
|Cached Empty.prototype|774,107,425|98|
|Empty.prototype|1,100,741|77|
|Empty class|787,207|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|775,828,149|97|
|Using optional chain (obj.field?.field2) (undefined)|775,718,259|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,857,047|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|775,791,765|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,867,415|96|
|Using parseInt(x, 10) - big number (10 len)|12,771,927|95|
|Using + - small number (2 len)|776,617,733|95|
|Using + - big number (10 len)|777,416,796|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|653,269|80|
|Using ? operator to avoid rejection|676,146|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|234,128,040|88|
|Raw usage underscore usage|241,805,201|93|
|Manipulating private properties using #|199,128,282|90|
|Manipulating private properties using underscore(_)|204,851,054|92|
|Manipulating private properties using Symbol|209,097,787|90|
|Manipulating private properties using PrivateSymbol|22,206,357|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,038,538|95|
|Adding property in the object creation - small object|2,041,743|96|
|Adding property after the function creation - small class|160,429|83|
|Adding property in the function creation - small class|163,134|85|
|Adding property after the class creation - small class|131,710|76|
|Adding property in the class creation - small class|132,349|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,577,584|90|
|Using replaceAll()|2,196,013|94|
|Using replaceAll(//g)|2,366,331|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,525|95|
|Sort using first char|868,605|92|
|Sort using localeCompare|844,007|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,624|91|
|{...smallObject} - Total keys: 2|56,893,356|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,545|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,119|91|
|{ ...bigObject, ...anotherBigObject }|970|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,109,629|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,724,719|96|
|{ ...smallObject, ...anotherSmallObject }|15,930,190|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,639 ops/sec ±23.25% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 413 ops/sec ±5.59% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,946 ops/sec ±1.00% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 789 ops/sec ±20.42% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|775,854,721|97|
|Using backtick (`)|774,868,085|95|
|Using array.join|7,770,960|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,909,552|92|
|Using this|151,253,071|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,571,304|92|
|Date.now()|15,600,197|95|
