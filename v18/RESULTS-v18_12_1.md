# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Tue Jan 17 2023 20:43:30 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.012ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.662ms
new Array(length)|10,000|0.31ms
array.push|1,000,000|45.788ms
new Array(length)|1,000,000|7.821ms
array.push|100,000,000|2,613.34ms
new Array(length)|100,000,000|5,865.225ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.025ms
array.push|100|0.131ms
new Array(length)|100|0.013ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.042ms
array.push|10,000|1.016ms
new Array(length)|10,000|4.82ms
array.push|1,000,000|443.79ms
new Array(length)|1,000,000|5.305ms
array.push|100,000,000|3,159.378ms
new Array(length)|100,000,000|6,413.153ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|294|76|
|Array.from|13|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|138,715|57|
|[True conditional] Using constructor name|111,079|88|
|[True conditional] Check if property is valid then instanceof |112,623|81|
|[False conditional] Using instanceof only|727,363,555|90|
|[False conditional] Using constructor name|727,452,385|87|
|[False conditional] Check if property is valid then instanceof |741,108,092|85|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,393,875|88|
|fromUnixToISOString(new Date())|1,192,347|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,018|82|
|Intl.DateTimeFormat().format(new Date())|5,628|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,390|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,682|69|
|Reusing Intl.DateTimeFormat()|396,333|84|
|Date.toLocaleDateString()|382,519|75|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,300|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|571,927|85|
|Using brackets {}|576,299|86|
|Using '' + |579,864|86|
|Using date.toString()|616,017|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,927,388|87|
|Using undefined assignment|730,862,873|88|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|144,132|55|
|NodeError|113,875|88|
|NodeError Range|112,790|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,141,812|86|
|Function returning explicitly undefined|1,086,520|89|
|Function returning implicitly undefined|1,130,195|87|
|Function returning string|1,134,371|89|
|Function returning integer|1,157,568|88|
|Function returning float|1,127,660|85|
|Function returning functions|1,088,245|88|
|Function returning arrow functions|1,125,117|89|
|Function returning empty object|1,154,450|88|
|Function returning empty array|1,138,479|87|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|731,805,234|88|
|using Array.includes (first item)|720,759,095|87|
|Using raw comparison|733,399,957|85|
|Using raw comparison (first item)|738,931,154|87|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,484,633|87|
|Using Object.getOwnPropertyNames()|44,987,477|84|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,312,898|85|
|Length = 10_000 - Array.at|15,368,413|87|
|Length = 1_000_000 - Array.at|15,181,854|85|
|Length = 100 - Array[length - 1]|725,342,749|84|
|Length = 10_000 - Array[length - 1]|730,906,367|87|
|Length = 1_000_000 - Array[length - 1]|733,260,577|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,106,293|85|
|Object.create({})|757,373|68|
|Cached Empty.prototype|733,340,519|90|
|Empty.prototype|783,133|69|
|Empty class|567,422|69|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|744,199,817|88|
|Using optional chain (obj.field?.field2) (undefined)|740,181,743|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|730,252,109|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|749,369,470|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|152,852,783|86|
|Using parseInt(x, 10) - big number (10 len)|11,939,882|86|
|Using + - small number (2 len)|727,408,787|88|
|Using + - big number (10 len)|727,579,150|89|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|439,402|73|
|Using ? operator to avoid rejection|473,153|76|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,059,496|86|
|Raw usage underscore usage|131,028,576|84|
|Manipulating private properties using #|87,400,877|86|
|Manipulating private properties using underscore(_)|70,912,215|82|
|Manipulating private properties using Symbol|73,171,518|83|
|Manipulating private properties using PrivateSymbol|26,278,561|86|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,085,128|90|
|Adding property in the object creation - small object|2,035,347|89|
|Adding property after the function creation - small class|113,887|80|
|Adding property in the function creation - small class|112,904|77|
|Adding property after the class creation - small class|94,720|76|
|Adding property in the class creation - small class|90,286|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,733,456|88|
|Using replaceAll()|1,562,911|87|
|Using replaceAll(//g)|1,565,332|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|149,601|86|
|Sort using first char|643,841|87|
|Sort using localeCompare|615,416|86|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,031|84|
|{...smallObject} - Total keys: 2|53,335,612|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,123|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,099|86|
|{ ...bigObject, ...anotherBigObject }|658|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,007,619|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,363,102|88|
|{ ...smallObject, ...anotherSmallObject }|12,651,924|86|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,266 ops/sec ±14.97% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 343 ops/sec ±0.96% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,744 ops/sec ±1.22% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 691 ops/sec ±11.26% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|745,874,974|87|
|Using backtick (`)|741,293,127|89|
|Using array.join|5,518,995|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|134,848,050|86|
|Using this|143,338,202|87|
