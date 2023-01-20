# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Fri Jan 20 2023 20:00:14 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.115ms
new Array(length)|100|0.01ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.554ms
new Array(length)|10,000|0.28ms
array.push|1,000,000|33.211ms
new Array(length)|1,000,000|22.975ms
array.push|100,000,000|2,311.033ms
new Array(length)|100,000,000|5,859.443ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.018ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.66ms
new Array(length)|10,000|5.198ms
array.push|1,000,000|416.76ms
new Array(length)|1,000,000|6.457ms
array.push|100,000,000|3,198.789ms
new Array(length)|100,000,000|6,459.19ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|289|80|
|Array.from|12|33|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|155,650|55|
|[True conditional] Using constructor name|122,005|90|
|[True conditional] Check if property is valid then instanceof |123,152|86|
|[False conditional] Using instanceof only|566,016,320|93|
|[False conditional] Using constructor name|562,349,674|91|
|[False conditional] Check if property is valid then instanceof |566,986,631|88|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,340,323|90|
|fromUnixToISOString(new Date())|1,129,514|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,964|80|
|Intl.DateTimeFormat().format(new Date())|6,819|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,050|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,848|66|
|Reusing Intl.DateTimeFormat()|391,022|92|
|Date.toLocaleDateString()|380,873|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,875|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|532,317|93|
|Using brackets {}|531,784|91|
|Using '' + |527,840|90|
|Using date.toString()|574,888|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,970,308|91|
|Using undefined assignment|562,683,103|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|154,456|54|
|NodeError|122,584|87|
|NodeError Range|121,938|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|998,504|88|
|Function returning explicitly undefined|995,254|91|
|Function returning implicitly undefined|1,001,096|93|
|Function returning string|1,020,661|90|
|Function returning integer|982,051|91|
|Function returning float|1,012,260|90|
|Function returning functions|972,731|89|
|Function returning arrow functions|1,004,650|91|
|Function returning empty object|1,013,218|89|
|Function returning empty array|1,022,449|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|573,928,692|91|
|using Array.includes (first item)|570,049,494|94|
|Using raw comparison|575,843,971|89|
|Using raw comparison (first item)|576,013,938|92|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,711,372|89|
|Using Object.getOwnPropertyNames()|40,148,562|84|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|12,266,954|88|
|Length = 10_000 - Array.at|12,388,760|92|
|Length = 1_000_000 - Array.at|12,570,960|92|
|Length = 100 - Array[length - 1]|560,596,288|92|
|Length = 10_000 - Array[length - 1]|555,027,704|92|
|Length = 1_000_000 - Array[length - 1]|568,446,436|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,173,126|92|
|Object.create({})|1,095,918|78|
|Cached Empty.prototype|571,787,792|91|
|Empty.prototype|1,113,321|78|
|Empty class|746,716|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|573,375,906|91|
|Using optional chain (obj.field?.field2) (undefined)|568,467,662|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|563,201,844|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|577,473,584|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|145,438,727|91|
|Using parseInt(x, 10) - big number (10 len)|10,065,285|90|
|Using + - small number (2 len)|578,360,186|94|
|Using + - big number (10 len)|572,974,097|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|639,964|75|
|Using ? operator to avoid rejection|698,400|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,777,341|88|
|Raw usage underscore usage|5,381,676|90|
|Manipulating private properties using #|1,933,323|90|
|Manipulating private properties using underscore(_)|530,978,426|86|
|Manipulating private properties using Symbol|544,020,052|92|
|Manipulating private properties using PrivateSymbol|21,222,888|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,035,469|87|
|Adding property in the object creation - small object|2,070,525|90|
|Adding property after the function creation - small class|138,331|81|
|Adding property in the function creation - small class|144,127|84|
|Adding property after the class creation - small class|117,916|80|
|Adding property in the class creation - small class|119,963|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,655,196|90|
|Using replaceAll()|1,553,052|87|
|Using replaceAll(//g)|1,485,656|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|146,512|93|
|Sort using first char|610,303|91|
|Sort using localeCompare|346,929|87|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,057|92|
|{...smallObject} - Total keys: 2|47,811,895|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,037|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,825|91|
|{ ...bigObject, ...anotherBigObject }|657|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,094,224|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,653,170|92|
|{ ...smallObject, ...anotherSmallObject }|10,777,751|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,227 ops/sec ±20.48% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 320 ops/sec ±0.83% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,206 ops/sec ±1.01% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 576 ops/sec ±17.64% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|573,023,905|96|
|Using backtick (`)|575,442,507|92|
|Using array.join|5,273,714|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|105,180,427|90|
|Using this|109,516,647|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,524,963|91|
|Date.now()|11,276,816|91|
