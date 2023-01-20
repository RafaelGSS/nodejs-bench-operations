# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Fri Jan 20 2023 20:00:13 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.04ms
new Array(length)|100|0.011ms
array.push|1,000|0.093ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.659ms
new Array(length)|10,000|0.276ms
array.push|1,000,000|36.387ms
new Array(length)|1,000,000|10.907ms
array.push|100,000,000|2,360.808ms
new Array(length)|100,000,000|5,363.091ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.018ms
array.push|100|0.116ms
new Array(length)|100|0.012ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.778ms
new Array(length)|10,000|5.001ms
array.push|1,000,000|383.726ms
new Array(length)|1,000,000|5.29ms
array.push|100,000,000|3,162.769ms
new Array(length)|100,000,000|6,374.794ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|331|75|
|Array.from|13|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|157,707|59|
|[True conditional] Using constructor name|123,959|89|
|[True conditional] Check if property is valid then instanceof |124,301|90|
|[False conditional] Using instanceof only|627,557,476|88|
|[False conditional] Using constructor name|616,707,797|88|
|[False conditional] Check if property is valid then instanceof |606,690,402|89|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,403,811|91|
|fromUnixToISOString(new Date())|1,185,599|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,971|83|
|Intl.DateTimeFormat().format(new Date())|7,851|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,034|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,430|94|
|Reusing Intl.DateTimeFormat()|372,444|91|
|Date.toLocaleDateString()|432,054|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,966|79|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|569,432|92|
|Using brackets {}|573,286|89|
|Using '' + |568,106|94|
|Using date.toString()|611,381|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,995,675|91|
|Using undefined assignment|590,167,899|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|152,901|59|
|NodeError|120,727|91|
|NodeError Range|122,158|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,143,536|95|
|Function returning explicitly undefined|1,147,722|94|
|Function returning implicitly undefined|1,197,387|90|
|Function returning string|1,173,126|93|
|Function returning integer|1,205,479|92|
|Function returning float|1,180,236|92|
|Function returning functions|1,168,171|94|
|Function returning arrow functions|1,148,517|92|
|Function returning empty object|1,172,618|92|
|Function returning empty array|1,162,928|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,572,384|94|
|using Array.includes (first item)|589,762,698|92|
|Using raw comparison|588,930,975|93|
|Using raw comparison (first item)|587,253,781|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,255,611|91|
|Using Object.getOwnPropertyNames()|41,759,924|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,883,256|96|
|Length = 10_000 - Array.at|13,958,194|96|
|Length = 1_000_000 - Array.at|13,879,935|95|
|Length = 100 - Array[length - 1]|586,454,613|97|
|Length = 10_000 - Array[length - 1]|586,245,026|94|
|Length = 1_000_000 - Array[length - 1]|585,704,015|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,560,815|91|
|Object.create({})|823,402|73|
|Cached Empty.prototype|583,080,125|96|
|Empty.prototype|857,388|76|
|Empty class|595,683|74|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|588,301,667|94|
|Using optional chain (obj.field?.field2) (undefined)|591,192,463|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,112,191|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|589,000,133|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|147,605,979|97|
|Using parseInt(x, 10) - big number (10 len)|12,040,981|89|
|Using + - small number (2 len)|590,071,282|93|
|Using + - big number (10 len)|589,447,665|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|489,828|75|
|Using ? operator to avoid rejection|537,215|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|197,130,515|93|
|Raw usage underscore usage|185,768,017|89|
|Manipulating private properties using #|129,094,598|87|
|Manipulating private properties using underscore(_)|113,872,273|95|
|Manipulating private properties using Symbol|119,745,494|85|
|Manipulating private properties using PrivateSymbol|24,926,066|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,666,952|95|
|Adding property in the object creation - small object|1,674,213|92|
|Adding property after the function creation - small class|128,735|81|
|Adding property in the function creation - small class|129,143|86|
|Adding property after the class creation - small class|105,909|85|
|Adding property in the class creation - small class|105,011|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,903,653|92|
|Using replaceAll()|1,753,699|92|
|Using replaceAll(//g)|1,684,752|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|147,244|95|
|Sort using first char|616,215|92|
|Sort using localeCompare|594,684|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,129|91|
|{...smallObject} - Total keys: 2|53,852,838|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,130|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,042|94|
|{ ...bigObject, ...anotherBigObject }|684|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,798,039|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|14,307,100|90|
|{ ...smallObject, ...anotherSmallObject }|9,260,099|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,318 ops/sec ±17.91% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 359 ops/sec ±0.80% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,973 ops/sec ±0.68% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 890 ops/sec ±17.57% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|587,272,543|98|
|Using backtick (`)|588,295,154|92|
|Using array.join|5,553,724|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|106,827,525|92|
|Using this|108,449,949|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,196,396|90|
|Date.now()|12,684,528|94|
