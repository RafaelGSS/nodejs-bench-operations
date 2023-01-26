# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Thu Jan 26 2023 20:04:19 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.081ms
new Array(length)|100|0.007ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.398ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|34.937ms
new Array(length)|1,000,000|5.783ms
array.push|100,000,000|1,808.028ms
new Array(length)|100,000,000|5,508.143ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.557ms
new Array(length)|10,000|3.995ms
array.push|1,000,000|141.592ms
new Array(length)|1,000,000|10.938ms
array.push|100,000,000|2,800.51ms
new Array(length)|100,000,000|5,209.342ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|318|83|
|Array.from|16|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|205,597|57|
|[True conditional] Using constructor name|157,657|93|
|[True conditional] Check if property is valid then instanceof |159,257|90|
|[False conditional] Using instanceof only|776,719,607|95|
|[False conditional] Using constructor name|776,419,726|94|
|[False conditional] Check if property is valid then instanceof |776,960,487|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,067,850|94|
|fromUnixToISOString(new Date())|1,588,099|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,968|80|
|Intl.DateTimeFormat().format(new Date())|9,209|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,433|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,509|75|
|Reusing Intl.DateTimeFormat()|141,252|74|
|Date.toLocaleDateString()|418,643|67|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|4,529|52|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|655,627|95|
|Using brackets {}|660,147|96|
|Using '' + |656,197|93|
|Using date.toString()|700,229|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,250,089|93|
|Using undefined assignment|775,867,112|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|203,024|54|
|NodeError|155,951|91|
|NodeError Range|156,573|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,198,408|94|
|Function returning explicitly undefined|1,186,999|91|
|Function returning implicitly undefined|1,213,701|96|
|Function returning string|1,190,012|96|
|Function returning integer|1,207,203|91|
|Function returning float|1,182,571|93|
|Function returning functions|1,185,324|93|
|Function returning arrow functions|1,189,372|96|
|Function returning empty object|1,198,811|95|
|Function returning empty array|1,192,772|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|775,312,797|97|
|using Array.includes (first item)|775,639,032|96|
|Using raw comparison|777,879,254|96|
|Using raw comparison (first item)|778,943,082|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,108,515|92|
|Using Object.getOwnPropertyNames()|60,954,059|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,240,340|98|
|Length = 10_000 - Array.at|18,283,199|95|
|Length = 1_000_000 - Array.at|18,285,301|94|
|Length = 100 - Array[length - 1]|775,921,993|96|
|Length = 10_000 - Array[length - 1]|777,023,397|97|
|Length = 1_000_000 - Array[length - 1]|777,170,273|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,788,090|94|
|Object.create({})|1,197,205|81|
|Cached Empty.prototype|775,770,826|95|
|Empty.prototype|1,289,345|81|
|Empty class|922,554|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|777,700,232|97|
|Using optional chain (obj.field?.field2) (undefined)|777,710,299|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|777,181,026|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|777,610,677|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,795,553|96|
|Using parseInt(x, 10) - big number (10 len)|14,085,619|94|
|Using + - small number (2 len)|779,328,696|94|
|Using + - big number (10 len)|778,872,738|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|771,945|80|
|Using ? operator to avoid rejection|802,178|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,357,878|92|
|Raw usage underscore usage|7,420,433|91|
|Manipulating private properties using #|2,647,313|95|
|Manipulating private properties using underscore(_)|764,554,500|95|
|Manipulating private properties using Symbol|762,795,123|94|
|Manipulating private properties using PrivateSymbol|21,694,828|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,992,415|93|
|Adding property in the object creation - small object|1,998,377|96|
|Adding property after the function creation - small class|183,422|84|
|Adding property in the function creation - small class|183,797|86|
|Adding property after the class creation - small class|149,317|79|
|Adding property in the class creation - small class|148,198|79|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,618,528|93|
|Using replaceAll()|2,576,003|93|
|Using replaceAll(//g)|2,392,339|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,970|93|
|Sort using first char|835,185|94|
|Sort using localeCompare|495,564|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,635|93|
|{...smallObject} - Total keys: 2|56,070,114|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,545|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,159|92|
|{ ...bigObject, ...anotherBigObject }|965|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,301,844|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,966,299|95|
|{ ...smallObject, ...anotherSmallObject }|14,940,009|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,619 ops/sec ±18.02% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 438 ops/sec ±6.39% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,628 ops/sec ±0.92% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 800 ops/sec ±21.50% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,905,119|98|
|Using backtick (`)|777,116,898|96|
|Using array.join|7,533,762|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,228,680|92|
|Using this|151,560,366|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,194,321|95|
|Date.now()|15,149,556|95|
