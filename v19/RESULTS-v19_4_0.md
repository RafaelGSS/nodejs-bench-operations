# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Fri Feb 03 2023 16:31:24 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.048ms
new Array(length)|100|0.019ms
array.push|1,000|0.09ms
new Array(length)|1,000|0.048ms
array.push|10,000|0.626ms
new Array(length)|10,000|0.418ms
array.push|1,000,000|33.438ms
new Array(length)|1,000,000|6.55ms
array.push|100,000,000|2,290.528ms
new Array(length)|100,000,000|6,556.938ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.019ms
new Array(length)|100|0.011ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|22.742ms
new Array(length)|1,000,000|9.404ms
array.push|100,000,000|2,637.358ms
new Array(length)|100,000,000|6,649.647ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|294|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|187,081|51|
|[True conditional] Using constructor name|148,952|89|
|[True conditional] Check if property is valid then instanceof |149,903|91|
|[False conditional] Using instanceof only|777,560,088|96|
|[False conditional] Using constructor name|774,634,889|96|
|[False conditional] Check if property is valid then instanceof |778,167,809|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,028,390|93|
|fromUnixToISOString(new Date())|1,752,828|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,667|80|
|Intl.DateTimeFormat().format(new Date())|9,332|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,066|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,171|82|
|Reusing Intl.DateTimeFormat()|591,184|89|
|Date.toLocaleDateString()|607,902|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,391|72|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|663,976|90|
|Using brackets {}|671,174|91|
|Using '' + |673,633|92|
|Using date.toString()|730,497|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,409,723|92|
|Using undefined assignment|772,466,826|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|184,204|53|
|NodeError|150,506|94|
|NodeError Range|146,099|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,369,796|90|
|Function returning explicitly undefined|1,330,899|88|
|Function returning implicitly undefined|1,367,956|94|
|Function returning string|1,368,452|95|
|Function returning integer|1,367,710|92|
|Function returning float|1,344,821|88|
|Function returning functions|1,316,835|91|
|Function returning arrow functions|1,340,031|94|
|Function returning empty object|1,353,683|92|
|Function returning empty array|1,334,042|86|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|772,828,085|96|
|using Array.includes (first item)|775,439,733|95|
|Using raw comparison|777,560,208|94|
|Using raw comparison (first item)|777,182,761|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,148,881|90|
|Using Object.getOwnPropertyNames()|58,499,723|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|849,156,720|97|
|Length = 10_000 - Array.at|848,917,891|93|
|Length = 1_000_000 - Array.at|852,085,836|96|
|Length = 100 - Array[length - 1]|772,900,097|95|
|Length = 10_000 - Array[length - 1]|773,289,029|95|
|Length = 1_000_000 - Array[length - 1]|773,405,379|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,672,709|92|
|Object.create({})|1,566,081|80|
|Cached Empty.prototype|777,049,225|98|
|Empty.prototype|1,486,268|81|
|Empty class|1,072,594|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|778,184,506|96|
|Using optional chain (obj.field?.field2) (undefined)|774,917,723|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,195,665|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|774,379,681|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|228,651,864|97|
|Using parseInt(x, 10) - big number (10 len)|12,949,531|94|
|Using + - small number (2 len)|779,213,725|95|
|Using + - big number (10 len)|775,928,199|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|888,608|82|
|Using ? operator to avoid rejection|899,851|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|772,346,924|94|
|Raw usage underscore usage|773,725,250|95|
|Manipulating private properties using #|762,370,786|95|
|Manipulating private properties using underscore(_)|763,906,956|92|
|Manipulating private properties using Symbol|759,686,573|92|
|Manipulating private properties using PrivateSymbol|22,345,756|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,839,409|96|
|Adding property in the object creation - small object|2,847,412|93|
|Adding property after the function creation - small class|193,529|84|
|Adding property in the function creation - small class|197,249|86|
|Adding property after the class creation - small class|166,456|80|
|Adding property in the class creation - small class|166,983|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,735,059|91|
|Using replaceAll()|2,727,822|92|
|Using replaceAll(//g)|2,522,313|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,172|91|
|Sort using first char|910,633|94|
|Sort using localeCompare|865,294|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,482|89|
|{...smallObject} - Total keys: 2|58,591,844|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,505|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,341|92|
|{ ...bigObject, ...anotherBigObject }|919|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,090,474|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,930,408|95|
|{ ...smallObject, ...anotherSmallObject }|16,531,281|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,819 ops/sec ±1.02% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 475 ops/sec ±0.76% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,111 ops/sec ±0.61% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 939 ops/sec ±38.95% (45 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|775,197,185|97|
|Using backtick (`)|775,816,133|95|
|Using array.join|7,536,533|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,878,981|91|
|Using this|160,513,423|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,426,958|91|
|Date.now()|15,466,826|92|
