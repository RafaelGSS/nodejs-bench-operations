# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Fri Jan 27 2023 20:06:15 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.082ms
new Array(length)|100|0.007ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.342ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|35.266ms
new Array(length)|1,000,000|6.494ms
array.push|100,000,000|1,871.444ms
new Array(length)|100,000,000|5,094.738ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.021ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.254ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.489ms
new Array(length)|10,000|4.859ms
array.push|1,000,000|323.944ms
new Array(length)|1,000,000|4.775ms
array.push|100,000,000|2,612.693ms
new Array(length)|100,000,000|5,454.4ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|302|84|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|201,786|54|
|[True conditional] Using constructor name|150,406|90|
|[True conditional] Check if property is valid then instanceof |155,927|90|
|[False conditional] Using instanceof only|777,174,325|95|
|[False conditional] Using constructor name|777,025,771|96|
|[False conditional] Check if property is valid then instanceof |778,116,931|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,027,231|88|
|fromUnixToISOString(new Date())|1,498,901|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,739|83|
|Intl.DateTimeFormat().format(new Date())|9,126|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,579|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,223|83|
|Reusing Intl.DateTimeFormat()|538,729|89|
|Date.toLocaleDateString()|556,540|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,865|76|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|628,214|89|
|Using brackets {}|636,217|91|
|Using '' + |621,798|95|
|Using date.toString()|671,700|85|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,231,700|92|
|Using undefined assignment|775,679,385|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|198,318|53|
|NodeError|151,612|86|
|NodeError Range|150,691|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,119,420|93|
|Function returning explicitly undefined|1,112,615|90|
|Function returning implicitly undefined|1,132,244|88|
|Function returning string|1,124,707|93|
|Function returning integer|1,141,463|90|
|Function returning float|1,119,973|90|
|Function returning functions|1,106,021|85|
|Function returning arrow functions|1,113,365|87|
|Function returning empty object|1,131,917|91|
|Function returning empty array|1,130,604|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|776,266,986|98|
|using Array.includes (first item)|776,674,662|97|
|Using raw comparison|777,392,222|95|
|Using raw comparison (first item)|776,784,879|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,555,636|87|
|Using Object.getOwnPropertyNames()|57,167,091|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,207,378|95|
|Length = 10_000 - Array.at|18,267,214|98|
|Length = 1_000_000 - Array.at|18,187,189|96|
|Length = 100 - Array[length - 1]|776,141,920|95|
|Length = 10_000 - Array[length - 1]|773,507,195|98|
|Length = 1_000_000 - Array[length - 1]|773,984,066|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,340,629|83|
|Object.create({})|1,290,201|83|
|Cached Empty.prototype|774,934,475|96|
|Empty.prototype|1,302,730|79|
|Empty class|939,552|89|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|776,075,290|96|
|Using optional chain (obj.field?.field2) (undefined)|777,467,005|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|778,011,466|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,761,302|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|211,375,333|96|
|Using parseInt(x, 10) - big number (10 len)|13,426,936|91|
|Using + - small number (2 len)|777,552,273|96|
|Using + - big number (10 len)|777,323,098|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|723,735|82|
|Using ? operator to avoid rejection|777,634|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,902,074|90|
|Raw usage underscore usage|7,086,402|88|
|Manipulating private properties using #|2,514,657|86|
|Manipulating private properties using underscore(_)|764,171,084|97|
|Manipulating private properties using Symbol|761,463,973|97|
|Manipulating private properties using PrivateSymbol|20,225,365|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,923,510|93|
|Adding property in the object creation - small object|2,934,682|96|
|Adding property after the function creation - small class|182,664|82|
|Adding property in the function creation - small class|186,180|86|
|Adding property after the class creation - small class|155,365|80|
|Adding property in the class creation - small class|155,110|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,451,979|92|
|Using replaceAll()|2,399,843|90|
|Using replaceAll(//g)|2,192,902|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|184,837|90|
|Sort using first char|784,836|90|
|Sort using localeCompare|472,930|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,559|85|
|{...smallObject} - Total keys: 2|51,191,937|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,484|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,053|90|
|{ ...bigObject, ...anotherBigObject }|910|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,930,827|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,066,802|95|
|{ ...smallObject, ...anotherSmallObject }|14,527,447|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,555 ops/sec ±15.47% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 408 ops/sec ±4.59% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,589 ops/sec ±0.99% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,003 ops/sec ±11.57% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,280,357|97|
|Using backtick (`)|777,489,439|95|
|Using array.join|7,250,131|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|137,817,694|86|
|Using this|143,039,456|89|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,040,877|91|
|Date.now()|14,560,691|87|
