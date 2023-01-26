# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Thu Jan 26 2023 20:43:13 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.008ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.465ms
new Array(length)|10,000|0.185ms
array.push|1,000,000|35.152ms
new Array(length)|1,000,000|5.983ms
array.push|100,000,000|1,888.27ms
new Array(length)|100,000,000|4,806.088ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.132ms
new Array(length)|100|0.009ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.364ms
new Array(length)|10,000|4.311ms
array.push|1,000,000|86.447ms
new Array(length)|1,000,000|8.332ms
array.push|100,000,000|2,716.697ms
new Array(length)|100,000,000|5,245.165ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|314|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|197,215|52|
|[True conditional] Using constructor name|153,506|93|
|[True conditional] Check if property is valid then instanceof |155,019|91|
|[False conditional] Using instanceof only|774,745,473|96|
|[False conditional] Using constructor name|775,912,887|97|
|[False conditional] Check if property is valid then instanceof |777,050,802|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,039,838|91|
|fromUnixToISOString(new Date())|1,649,271|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,129|84|
|Intl.DateTimeFormat().format(new Date())|9,588|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,545|74|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|655,846|94|
|Using brackets {}|646,752|94|
|Using '' + |660,779|95|
|Using date.toString()|703,525|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,310,652|94|
|Using undefined assignment|774,877,422|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|193,716|53|
|NodeError|147,250|94|
|NodeError Range|150,017|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,345,607|91|
|Function returning explicitly undefined|1,328,610|94|
|Function returning implicitly undefined|1,352,124|96|
|Function returning string|1,326,099|89|
|Function returning integer|1,362,867|91|
|Function returning float|1,350,482|95|
|Function returning functions|1,317,656|94|
|Function returning arrow functions|1,332,954|90|
|Function returning empty object|1,307,818|95|
|Function returning empty array|1,338,910|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,851,551|97|
|using Array.includes (first item)|775,012,376|96|
|Using raw comparison|775,843,483|96|
|Using raw comparison (first item)|776,606,007|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,354,029|91|
|Using Object.getOwnPropertyNames()|58,195,953|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,738,456|96|
|Length = 10_000 - Array.at|18,736,334|98|
|Length = 1_000_000 - Array.at|18,795,814|96|
|Length = 100 - Array[length - 1]|774,855,102|95|
|Length = 10_000 - Array[length - 1]|774,172,329|97|
|Length = 1_000_000 - Array[length - 1]|774,987,276|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|59,546,468|92|
|Object.create({})|1,039,600|79|
|Cached Empty.prototype|775,295,982|97|
|Empty.prototype|1,084,471|87|
|Empty class|785,887|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|775,908,238|96|
|Using optional chain (obj.field?.field2) (undefined)|775,292,926|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,652,760|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|775,800,003|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|226,819,458|98|
|Using parseInt(x, 10) - big number (10 len)|12,856,337|93|
|Using + - small number (2 len)|776,805,216|97|
|Using + - big number (10 len)|776,332,504|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|649,704|80|
|Using ? operator to avoid rejection|677,866|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|229,298,352|93|
|Raw usage underscore usage|242,004,279|94|
|Manipulating private properties using #|204,919,515|95|
|Manipulating private properties using underscore(_)|195,267,052|90|
|Manipulating private properties using Symbol|199,520,571|91|
|Manipulating private properties using PrivateSymbol|22,221,284|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,913,237|97|
|Adding property in the object creation - small object|2,926,156|96|
|Adding property after the function creation - small class|166,165|81|
|Adding property in the function creation - small class|167,867|83|
|Adding property after the class creation - small class|136,655|78|
|Adding property in the class creation - small class|136,697|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,668,750|95|
|Using replaceAll()|1,963,627|94|
|Using replaceAll(//g)|2,448,311|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|200,666|91|
|Sort using first char|868,295|93|
|Sort using localeCompare|850,026|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,601|91|
|{...smallObject} - Total keys: 2|56,877,034|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,549|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,259|94|
|{ ...bigObject, ...anotherBigObject }|968|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,062,839|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,720,597|99|
|{ ...smallObject, ...anotherSmallObject }|15,987,948|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,599 ops/sec ±19.82% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 454 ops/sec ±5.78% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,939 ops/sec ±0.93% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 800 ops/sec ±19.45% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|774,911,095|96|
|Using backtick (`)|775,158,370|98|
|Using array.join|7,746,502|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,799,186|93|
|Using this|149,792,991|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,631,438|92|
|Date.now()|15,551,250|93|
