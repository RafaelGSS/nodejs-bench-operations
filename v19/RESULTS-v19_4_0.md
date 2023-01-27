# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Fri Jan 27 2023 18:46:19 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.037ms
new Array(length)|100|0.011ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.582ms
new Array(length)|10,000|0.314ms
array.push|1,000,000|36.624ms
new Array(length)|1,000,000|7.036ms
array.push|100,000,000|2,402.879ms
new Array(length)|100,000,000|5,645.654ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.016ms
array.push|100|0.018ms
new Array(length)|100|0.01ms
array.push|1,000|0.209ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.346ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|26.01ms
new Array(length)|1,000,000|10.166ms
array.push|100,000,000|2,499.078ms
new Array(length)|100,000,000|5,752.237ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|180,664|53|
|[True conditional] Using constructor name|144,758|92|
|[True conditional] Check if property is valid then instanceof |145,069|88|
|[False conditional] Using instanceof only|781,307,959|93|
|[False conditional] Using constructor name|780,404,533|95|
|[False conditional] Check if property is valid then instanceof |780,554,573|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,014,991|90|
|fromUnixToISOString(new Date())|1,690,892|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,577|79|
|Intl.DateTimeFormat().format(new Date())|8,154|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,963|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,454|74|
|Reusing Intl.DateTimeFormat()|571,613|89|
|Date.toLocaleDateString()|574,695|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,204|77|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|650,452|90|
|Using brackets {}|657,128|92|
|Using '' + |657,892|93|
|Using date.toString()|695,867|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,364,024|92|
|Using undefined assignment|778,656,898|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|178,978|48|
|NodeError|143,447|89|
|NodeError Range|142,260|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,312,603|89|
|Function returning explicitly undefined|1,281,454|87|
|Function returning implicitly undefined|1,328,941|89|
|Function returning string|1,294,826|88|
|Function returning integer|1,315,411|92|
|Function returning float|1,290,134|91|
|Function returning functions|1,282,714|89|
|Function returning arrow functions|1,296,153|91|
|Function returning empty object|1,342,692|90|
|Function returning empty array|1,282,380|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|777,960,138|97|
|using Array.includes (first item)|779,263,318|97|
|Using raw comparison|780,787,602|95|
|Using raw comparison (first item)|780,695,464|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,492,130|90|
|Using Object.getOwnPropertyNames()|57,946,763|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|855,386,539|95|
|Length = 10_000 - Array.at|854,608,993|98|
|Length = 1_000_000 - Array.at|855,393,318|95|
|Length = 100 - Array[length - 1]|779,050,874|97|
|Length = 10_000 - Array[length - 1]|778,506,771|98|
|Length = 1_000_000 - Array[length - 1]|779,041,450|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,988,088|91|
|Object.create({})|1,535,157|80|
|Cached Empty.prototype|778,887,795|97|
|Empty.prototype|1,426,721|75|
|Empty class|1,032,963|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|780,104,127|98|
|Using optional chain (obj.field?.field2) (undefined)|780,390,032|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|780,156,479|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|780,575,758|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|229,176,270|96|
|Using parseInt(x, 10) - big number (10 len)|12,325,247|92|
|Using + - small number (2 len)|780,588,262|96|
|Using + - big number (10 len)|782,732,439|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|852,066|80|
|Using ? operator to avoid rejection|890,453|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|774,938,379|97|
|Raw usage underscore usage|776,363,090|95|
|Manipulating private properties using #|765,724,363|95|
|Manipulating private properties using underscore(_)|765,706,231|95|
|Manipulating private properties using Symbol|764,321,420|94|
|Manipulating private properties using PrivateSymbol|20,999,218|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,130,514|93|
|Adding property in the object creation - small object|3,138,427|92|
|Adding property after the function creation - small class|185,514|81|
|Adding property in the function creation - small class|189,700|87|
|Adding property after the class creation - small class|162,431|79|
|Adding property in the class creation - small class|162,933|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,696,542|89|
|Using replaceAll()|2,634,940|91|
|Using replaceAll(//g)|2,450,042|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,302|93|
|Sort using first char|895,364|90|
|Sort using localeCompare|866,680|88|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,571|87|
|{...smallObject} - Total keys: 2|55,083,633|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,506|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,268|92|
|{ ...bigObject, ...anotherBigObject }|936|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,971,061|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|29,013,680|95|
|{ ...smallObject, ...anotherSmallObject }|15,695,861|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,687 ops/sec ±1.92% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 422 ops/sec ±5.02% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,141 ops/sec ±0.84% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,155 ops/sec ±34.78% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|778,077,530|97|
|Using backtick (`)|781,460,597|93|
|Using array.join|7,391,846|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|142,222,854|93|
|Using this|161,304,590|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,236,988|92|
|Date.now()|14,892,979|88|
