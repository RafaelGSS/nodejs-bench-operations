# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.14.0`
* __Run:__ Fri Feb 03 2023 18:12:04 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.009ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.526ms
new Array(length)|10,000|0.224ms
array.push|1,000,000|26.867ms
new Array(length)|1,000,000|16.171ms
array.push|100,000,000|2,367.671ms
new Array(length)|100,000,000|5,816.548ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.663ms
new Array(length)|10,000|4.651ms
array.push|1,000,000|306.881ms
new Array(length)|1,000,000|4.816ms
array.push|100,000,000|2,786.897ms
new Array(length)|100,000,000|6,255.257ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|278|82|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|192,092|51|
|[True conditional] Using constructor name|145,326|88|
|[True conditional] Check if property is valid then instanceof |148,198|89|
|[False conditional] Using instanceof only|770,839,302|97|
|[False conditional] Using constructor name|772,099,724|94|
|[False conditional] Check if property is valid then instanceof |771,623,327|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,995,732|91|
|fromUnixToISOString(new Date())|1,569,623|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,990|79|
|Intl.DateTimeFormat().format(new Date())|9,424|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,506|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,983|70|
|Reusing Intl.DateTimeFormat()|419,540|91|
|Date.toLocaleDateString()|567,838|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,695|76|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|645,470|88|
|Using brackets {}|622,024|94|
|Using '' + |640,522|92|
|Using date.toString()|680,658|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,295,756|93|
|Using undefined assignment|770,794,657|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|185,336|53|
|NodeError|143,064|85|
|NodeError Range|144,404|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,342,564|92|
|Function returning explicitly undefined|1,346,857|91|
|Function returning implicitly undefined|1,384,894|90|
|Function returning string|1,348,858|93|
|Function returning integer|1,350,423|91|
|Function returning float|1,377,299|95|
|Function returning functions|1,354,015|93|
|Function returning arrow functions|1,325,636|95|
|Function returning empty object|1,372,758|95|
|Function returning empty array|1,369,979|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|769,806,314|96|
|using Array.includes (first item)|770,158,739|96|
|Using raw comparison|772,095,098|96|
|Using raw comparison (first item)|770,555,842|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,107,218|89|
|Using Object.getOwnPropertyNames()|58,040,935|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,553,926|96|
|Length = 10_000 - Array.at|18,513,244|98|
|Length = 1_000_000 - Array.at|18,498,087|97|
|Length = 100 - Array[length - 1]|770,504,225|95|
|Length = 10_000 - Array[length - 1]|769,584,745|97|
|Length = 1_000_000 - Array[length - 1]|767,207,518|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,845,916|91|
|Object.create({})|1,135,998|85|
|Cached Empty.prototype|769,859,359|96|
|Empty.prototype|1,149,284|84|
|Empty class|831,267|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,649,796|96|
|Using optional chain (obj.field?.field2) (undefined)|770,385,992|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|770,892,775|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|767,428,444|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,480,643|97|
|Using parseInt(x, 10) - big number (10 len)|12,800,844|96|
|Using + - small number (2 len)|772,824,647|96|
|Using + - big number (10 len)|771,772,291|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|648,438|80|
|Using ? operator to avoid rejection|681,472|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|226,052,573|90|
|Raw usage underscore usage|233,263,319|89|
|Manipulating private properties using #|180,335,460|88|
|Manipulating private properties using underscore(_)|174,057,911|93|
|Manipulating private properties using Symbol|166,071,387|93|
|Manipulating private properties using PrivateSymbol|22,202,193|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,075,454|96|
|Adding property in the object creation - small object|3,089,617|93|
|Adding property after the function creation - small class|169,847|85|
|Adding property in the function creation - small class|171,024|87|
|Adding property after the class creation - small class|140,068|81|
|Adding property in the class creation - small class|143,577|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,723,448|90|
|Using replaceAll()|2,182,361|93|
|Using replaceAll(//g)|2,428,623|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|197,757|92|
|Sort using first char|845,549|93|
|Sort using localeCompare|847,731|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,513|91|
|{...smallObject} - Total keys: 2|57,555,001|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,520|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,161|90|
|{ ...bigObject, ...anotherBigObject }|918|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,051,379|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,100,485|97|
|{ ...smallObject, ...anotherSmallObject }|15,940,402|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,756 ops/sec ±0.80% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 469 ops/sec ±0.57% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,959 ops/sec ±0.58% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,125 ops/sec ±24.81% (45 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,680,073|96|
|Using backtick (`)|772,414,706|95|
|Using array.join|7,790,828|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,142,898|88|
|Using this|151,213,547|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,219,180|92|
|Date.now()|14,856,265|94|
