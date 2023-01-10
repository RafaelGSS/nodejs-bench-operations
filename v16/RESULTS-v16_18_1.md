# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Tue Jan 10 2023 02:06:31 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.127ms
new Array(length)|100|0.011ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|27.516ms
new Array(length)|1,000,000|16.997ms
array.push|100,000,000|1,544.222ms
new Array(length)|100,000,000|4,307.944ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.486ms
new Array(length)|10,000|4.377ms
array.push|1,000,000|299.065ms
new Array(length)|1,000,000|4.388ms
array.push|100,000,000|2,092.28ms
new Array(length)|100,000,000|4,690.723ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|396|80|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,269|55|
|[True conditional] Using constructor name|134,382|97|
|[True conditional] Check if property is valid then instanceof |135,233|92|
|[False conditional] Using instanceof only|594,839,316|96|
|[False conditional] Using constructor name|595,303,557|98|
|[False conditional] Check if property is valid then instanceof |595,188,950|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,327|87|
|Intl.DateTimeFormat().format(new Date())|10,045|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,766|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,200|80|
|Reusing Intl.DateTimeFormat()|375,459|97|
|Reusing dfWithOptions.format(Date.now())|277,981|94|
|Reusing dfWithOptions.format(new Date())|242,017|95|
|Date.toLocaleDateString()|448,050|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,561|89|
|Format using date.get*|3,527,230|98|
|new Date() (Baseline)|7,667,348|96|
|Date.now() (Baseline)|14,554,671|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|640,095|94|
|Using brackets {}|645,273|98|
|Using '' + |695,006|94|
|Using date.toString()|755,194|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,438,491|96|
|Using undefined assignment|594,008,458|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|170,461|52|
|NodeError|131,179|98|
|NodeError Range|131,403|98|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,207,949|98|
|Function returning explicitly undefined|1,201,671|96|
|Function returning implicitly undefined|1,217,140|90|
|Function returning string|1,186,006|94|
|Function returning integer|1,236,718|97|
|Function returning float|1,196,854|98|
|Function returning functions|1,182,866|97|
|Function returning arrow functions|1,202,974|96|
|Function returning empty object|1,171,402|97|
|Function returning empty array|1,213,217|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,419,338|95|
|using Array.includes (first item)|594,007,078|98|
|Using raw comparison|595,302,159|93|
|Using raw comparison (first item)|594,703,891|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,424,287|92|
|Using Object.getOwnPropertyNames()|64,540,046|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,848,378|96|
|Length = 10_000 - Array.at|18,829,995|95|
|Length = 1_000_000 - Array.at|18,831,580|94|
|Length = 100 - Array[length - 1]|593,469,541|96|
|Length = 10_000 - Array[length - 1]|592,761,271|98|
|Length = 1_000_000 - Array[length - 1]|592,522,724|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,795,212|91|
|Object.create({})|1,510,572|84|
|Cached Empty.prototype|594,627,803|98|
|Empty.prototype|1,510,229|78|
|Empty class|929,808|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,554,363|98|
|Using optional chain (obj.field?.field2) (undefined)|594,766,524|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,767,769|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,158,491|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|220,381,449|90|
|Using parseInt(x, 10) - big number (10 len)|15,269,400|97|
|Using + - small number (2 len)|595,245,113|98|
|Using + - big number (10 len)|594,485,860|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|792,012|76|
|Using ? operator to avoid rejection|868,708|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,352,062|96|
|Raw usage underscore usage|7,573,196|99|
|Manipulating private properties using #|2,777,763|95|
|Manipulating private properties using underscore(_)|589,926,145|96|
|Manipulating private properties using Symbol|588,530,249|99|
|Manipulating private properties using PrivateSymbol|33,602,800|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,647,670|98|
|Adding property in the object creation - small object|2,666,009|99|
|Adding property after the function creation - small class|168,975|87|
|Adding property in the function creation - small class|168,990|90|
|Adding property after the class creation - small class|142,452|86|
|Adding property in the class creation - small class|144,639|87|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,432,850|96|
|Using replaceAll()|2,240,141|95|
|Using replaceAll(//g)|2,173,755|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|185,993|97|
|Sort using first char|789,864|94|
|Sort using localeCompare|435,288|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,388|94|
|{...smallObject} - Total keys: 2|67,251,566|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,596|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,650|97|
|{ ...bigObject, ...anotherBigObject }|842|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,037,746|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,265,682|96|
|{ ...smallObject, ...anotherSmallObject }|16,052,126|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,630 ops/sec ±14.91% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 370 ops/sec ±0.73% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,974 ops/sec ±0.45% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 899 ops/sec ±14.41% (66 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|594,077,816|98|
|Using backtick (`)|594,684,598|95|
|Using array.join|8,646,384|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,160,941|93|
|Using this|112,166,438|94|
