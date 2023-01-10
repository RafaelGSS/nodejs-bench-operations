# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Tue Jan 10 2023 02:06:40 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.012ms
array.push|1,000|0.094ms
new Array(length)|1,000|0.046ms
array.push|10,000|1.775ms
new Array(length)|10,000|3.676ms
array.push|1,000,000|54.198ms
new Array(length)|1,000,000|7.823ms
array.push|100,000,000|2,198.334ms
new Array(length)|100,000,000|6,426.135ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.119ms
new Array(length)|100|0.013ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.522ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|33.421ms
new Array(length)|1,000,000|11.885ms
array.push|100,000,000|2,852.535ms
new Array(length)|100,000,000|6,652.572ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|332|87|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,113|59|
|[True conditional] Using constructor name|119,399|94|
|[True conditional] Check if property is valid then instanceof |120,479|94|
|[False conditional] Using instanceof only|565,638,199|96|
|[False conditional] Using constructor name|562,409,455|95|
|[False conditional] Check if property is valid then instanceof |563,683,484|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,487|84|
|Intl.DateTimeFormat().format(new Date())|7,518|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,233|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,514|92|
|Reusing Intl.DateTimeFormat()|327,646|77|
|Reusing dfWithOptions.format(Date.now())|236,192|96|
|Reusing dfWithOptions.format(new Date())|204,816|96|
|Date.toLocaleDateString()|417,685|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,234|85|
|Format using date.get*|2,907,912|90|
|new Date() (Baseline)|6,890,832|95|
|Date.now() (Baseline)|12,454,848|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|563,317|92|
|Using brackets {}|567,699|94|
|Using '' + |560,538|93|
|Using date.toString()|621,409|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,080,441|91|
|Using undefined assignment|561,787,182|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|144,001|59|
|NodeError|111,988|91|
|NodeError Range|111,907|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,089,933|92|
|Function returning explicitly undefined|1,077,841|94|
|Function returning implicitly undefined|1,091,044|94|
|Function returning string|1,079,872|94|
|Function returning integer|1,091,518|93|
|Function returning float|1,082,670|89|
|Function returning functions|1,084,955|92|
|Function returning arrow functions|1,103,337|95|
|Function returning empty object|1,113,510|95|
|Function returning empty array|1,114,179|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|560,005,750|96|
|using Array.includes (first item)|560,426,655|95|
|Using raw comparison|564,728,392|93|
|Using raw comparison (first item)|564,015,076|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,461,261|95|
|Using Object.getOwnPropertyNames()|41,886,204|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|545,643,380|91|
|Length = 10_000 - Array.at|546,836,853|90|
|Length = 1_000_000 - Array.at|547,648,045|91|
|Length = 100 - Array[length - 1]|548,523,928|94|
|Length = 10_000 - Array[length - 1]|556,627,924|94|
|Length = 1_000_000 - Array[length - 1]|560,977,854|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,406,719|92|
|Object.create({})|1,148,583|75|
|Cached Empty.prototype|548,413,813|93|
|Empty.prototype|1,138,613|79|
|Empty class|806,880|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|561,818,551|94|
|Using optional chain (obj.field?.field2) (undefined)|563,200,782|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|564,747,718|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|563,753,456|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,981,893|92|
|Using parseInt(x, 10) - big number (10 len)|10,930,646|89|
|Using + - small number (2 len)|534,357,400|90|
|Using + - big number (10 len)|542,653,984|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|664,535|74|
|Using ? operator to avoid rejection|691,051|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|560,163,124|95|
|Raw usage underscore usage|560,681,374|92|
|Manipulating private properties using #|548,635,736|95|
|Manipulating private properties using underscore(_)|539,230,676|92|
|Manipulating private properties using Symbol|542,913,751|91|
|Manipulating private properties using PrivateSymbol|23,186,571|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,668,188|95|
|Adding property in the object creation - small object|1,666,657|97|
|Adding property after the function creation - small class|137,513|79|
|Adding property in the function creation - small class|142,173|83|
|Adding property after the class creation - small class|121,502|78|
|Adding property in the class creation - small class|122,406|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,823,858|90|
|Using replaceAll()|1,763,948|92|
|Using replaceAll(//g)|1,646,476|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|134,620|93|
|Sort using first char|610,322|97|
|Sort using localeCompare|584,931|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,059|95|
|{...smallObject} - Total keys: 2|53,788,192|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,065|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,888|97|
|{ ...bigObject, ...anotherBigObject }|652|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,519,546|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,760,067|93|
|{ ...smallObject, ...anotherSmallObject }|9,548,993|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,220 ops/sec ±15.70% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 327 ops/sec ±1.90% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,257 ops/sec ±0.84% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 844 ops/sec ±18.83% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|546,725,694|93|
|Using backtick (`)|548,194,502|94|
|Using array.join|5,538,119|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|101,837,790|86|
|Using this|114,571,939|95|
