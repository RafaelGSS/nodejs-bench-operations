# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Fri Jan 20 2023 20:00:14 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.011ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.038ms
array.push|10,000|1.132ms
new Array(length)|10,000|0.4ms
array.push|1,000,000|46.03ms
new Array(length)|1,000,000|6.674ms
array.push|100,000,000|1,602.197ms
new Array(length)|100,000,000|4,939.582ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.097ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.357ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|25.981ms
new Array(length)|1,000,000|8.565ms
array.push|100,000,000|2,017.857ms
new Array(length)|100,000,000|4,706.46ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|432|86|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|168,539|49|
|[True conditional] Using constructor name|129,077|93|
|[True conditional] Check if property is valid then instanceof |130,020|92|
|[False conditional] Using instanceof only|599,315,247|96|
|[False conditional] Using constructor name|599,339,862|96|
|[False conditional] Check if property is valid then instanceof |598,933,999|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,021,312|94|
|fromUnixToISOString(new Date())|1,610,266|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,126|88|
|Intl.DateTimeFormat().format(new Date())|9,301|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,862|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,538|84|
|Reusing Intl.DateTimeFormat()|465,753|98|
|Date.toLocaleDateString()|429,050|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,327|86|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|718,704|96|
|Using brackets {}|736,590|96|
|Using '' + |728,067|96|
|Using date.toString()|799,705|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,668,578|97|
|Using undefined assignment|596,961,024|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,414|52|
|NodeError|125,518|93|
|NodeError Range|125,906|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,341,193|96|
|Function returning explicitly undefined|1,328,441|93|
|Function returning implicitly undefined|1,349,326|97|
|Function returning string|1,349,595|96|
|Function returning integer|1,366,954|93|
|Function returning float|1,361,587|94|
|Function returning functions|1,326,510|93|
|Function returning arrow functions|1,326,372|97|
|Function returning empty object|1,318,877|94|
|Function returning empty array|1,356,090|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,014,401|98|
|using Array.includes (first item)|596,660,849|98|
|Using raw comparison|599,256,239|96|
|Using raw comparison (first item)|598,750,020|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,095,371|93|
|Using Object.getOwnPropertyNames()|66,757,689|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,641,794|99|
|Length = 10_000 - Array.at|600,438,496|98|
|Length = 1_000_000 - Array.at|600,753,310|98|
|Length = 100 - Array[length - 1]|597,366,788|96|
|Length = 10_000 - Array[length - 1]|595,723,135|94|
|Length = 1_000_000 - Array[length - 1]|596,239,586|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,434,578|91|
|Object.create({})|1,697,015|82|
|Cached Empty.prototype|597,855,970|95|
|Empty.prototype|1,584,141|81|
|Empty class|1,041,939|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|596,750,092|95|
|Using optional chain (obj.field?.field2) (undefined)|598,660,448|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|598,641,885|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|598,317,663|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,658,239|92|
|Using parseInt(x, 10) - big number (10 len)|15,066,453|97|
|Using + - small number (2 len)|598,666,829|94|
|Using + - big number (10 len)|596,237,774|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|902,684|81|
|Using ? operator to avoid rejection|938,876|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,278,040|98|
|Raw usage underscore usage|600,823,044|96|
|Manipulating private properties using #|593,568,022|96|
|Manipulating private properties using underscore(_)|594,803,489|96|
|Manipulating private properties using Symbol|593,767,999|98|
|Manipulating private properties using PrivateSymbol|39,802,919|98|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,805,629|97|
|Adding property in the object creation - small object|2,800,229|98|
|Adding property after the function creation - small class|166,239|84|
|Adding property in the function creation - small class|171,855|89|
|Adding property after the class creation - small class|146,331|81|
|Adding property in the class creation - small class|147,249|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,642,433|95|
|Using replaceAll()|2,355,279|97|
|Using replaceAll(//g)|2,311,653|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,204|96|
|Sort using first char|858,505|91|
|Sort using localeCompare|819,103|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,353|97|
|{...smallObject} - Total keys: 2|70,269,949|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,472|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,070|98|
|{ ...bigObject, ...anotherBigObject }|812|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,060,730|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,138,255|98|
|{ ...smallObject, ...anotherSmallObject }|17,591,468|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,648 ops/sec ±15.53% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 381 ops/sec ±0.22% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,436 ops/sec ±0.45% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 931 ops/sec ±32.51% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|596,351,018|97|
|Using backtick (`)|596,927,182|95|
|Using array.join|9,228,947|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,663,816|93|
|Using this|120,106,382|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,248,884|96|
|Date.now()|16,100,758|93|
