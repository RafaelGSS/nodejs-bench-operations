# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Fri Jan 20 2023 20:00:09 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.108ms
new Array(length)|100|0.01ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.393ms
new Array(length)|10,000|0.216ms
array.push|1,000,000|26.835ms
new Array(length)|1,000,000|17.139ms
array.push|100,000,000|1,541.732ms
new Array(length)|100,000,000|4,299.065ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.559ms
new Array(length)|10,000|4.417ms
array.push|1,000,000|319.675ms
new Array(length)|1,000,000|4.295ms
array.push|100,000,000|2,082.67ms
new Array(length)|100,000,000|4,847.3ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|395|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|173,042|55|
|[True conditional] Using constructor name|134,129|95|
|[True conditional] Check if property is valid then instanceof |135,420|91|
|[False conditional] Using instanceof only|594,863,191|96|
|[False conditional] Using constructor name|593,361,338|99|
|[False conditional] Check if property is valid then instanceof |595,971,463|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,721,445|86|
|fromUnixToISOString(new Date())|1,436,017|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,000|84|
|Intl.DateTimeFormat().format(new Date())|9,070|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,430|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,705|80|
|Reusing Intl.DateTimeFormat()|445,725|98|
|Date.toLocaleDateString()|440,825|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,818|86|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|678,398|97|
|Using brackets {}|644,991|97|
|Using '' + |699,866|95|
|Using date.toString()|763,842|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,426,153|96|
|Using undefined assignment|593,266,542|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|171,105|51|
|NodeError|131,223|97|
|NodeError Range|131,720|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,222,276|97|
|Function returning explicitly undefined|1,235,426|95|
|Function returning implicitly undefined|1,263,838|94|
|Function returning string|1,241,432|97|
|Function returning integer|1,266,334|97|
|Function returning float|1,252,951|97|
|Function returning functions|1,213,801|92|
|Function returning arrow functions|1,234,397|96|
|Function returning empty object|1,250,390|96|
|Function returning empty array|1,238,848|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,284,682|97|
|using Array.includes (first item)|591,843,245|95|
|Using raw comparison|593,926,229|93|
|Using raw comparison (first item)|593,788,531|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,487,480|95|
|Using Object.getOwnPropertyNames()|61,845,572|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,969,629|96|
|Length = 10_000 - Array.at|18,902,154|95|
|Length = 1_000_000 - Array.at|18,341,607|97|
|Length = 100 - Array[length - 1]|592,105,881|97|
|Length = 10_000 - Array[length - 1]|592,450,595|95|
|Length = 1_000_000 - Array[length - 1]|590,998,012|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,816,469|93|
|Object.create({})|1,513,121|83|
|Cached Empty.prototype|592,332,007|96|
|Empty.prototype|1,642,467|83|
|Empty class|904,674|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,127,945|97|
|Using optional chain (obj.field?.field2) (undefined)|592,686,860|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,693,411|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,504,542|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,084,773|88|
|Using parseInt(x, 10) - big number (10 len)|14,815,838|96|
|Using + - small number (2 len)|593,266,135|96|
|Using + - big number (10 len)|592,161,457|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|727,578|79|
|Using ? operator to avoid rejection|784,214|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,397,623|90|
|Raw usage underscore usage|7,535,906|97|
|Manipulating private properties using #|2,783,310|97|
|Manipulating private properties using underscore(_)|591,357,192|93|
|Manipulating private properties using Symbol|589,747,367|99|
|Manipulating private properties using PrivateSymbol|33,971,761|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,743,267|99|
|Adding property in the object creation - small object|1,755,922|95|
|Adding property after the function creation - small class|163,512|89|
|Adding property in the function creation - small class|163,101|87|
|Adding property after the class creation - small class|140,752|83|
|Adding property in the class creation - small class|140,966|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,415,835|95|
|Using replaceAll()|2,264,453|96|
|Using replaceAll(//g)|2,151,021|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,491|95|
|Sort using first char|857,964|97|
|Sort using localeCompare|446,856|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,434|93|
|{...smallObject} - Total keys: 2|68,937,629|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,525|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,299|97|
|{ ...bigObject, ...anotherBigObject }|845|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,311,309|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,108,769|96|
|{ ...smallObject, ...anotherSmallObject }|16,130,415|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,712 ops/sec ±14.16% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 375 ops/sec ±0.42% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,032 ops/sec ±0.51% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 924 ops/sec ±14.00% (65 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,155,669|98|
|Using backtick (`)|593,117,584|97|
|Using array.join|8,697,587|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,574,662|91|
|Using this|112,900,721|90|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,889,204|97|
|Date.now()|14,428,175|98|
