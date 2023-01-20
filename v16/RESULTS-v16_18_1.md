# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Fri Jan 20 2023 20:00:21 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.092ms
new Array(length)|100|0.008ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.386ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|35.305ms
new Array(length)|1,000,000|6.442ms
array.push|100,000,000|1,493.614ms
new Array(length)|100,000,000|4,215.771ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.511ms
new Array(length)|10,000|4.485ms
array.push|1,000,000|296.501ms
new Array(length)|1,000,000|4.192ms
array.push|100,000,000|2,051.273ms
new Array(length)|100,000,000|4,538.056ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|423|85|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|174,313|55|
|[True conditional] Using constructor name|133,501|93|
|[True conditional] Check if property is valid then instanceof |134,307|93|
|[False conditional] Using instanceof only|593,500,882|97|
|[False conditional] Using constructor name|594,041,037|96|
|[False conditional] Check if property is valid then instanceof |593,024,162|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,808,293|91|
|fromUnixToISOString(new Date())|1,475,197|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,368|82|
|Intl.DateTimeFormat().format(new Date())|9,937|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,428|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,607|77|
|Reusing Intl.DateTimeFormat()|445,232|99|
|Date.toLocaleDateString()|453,189|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,822|90|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|645,413|95|
|Using brackets {}|650,460|97|
|Using '' + |700,438|96|
|Using date.toString()|754,437|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,425,705|98|
|Using undefined assignment|594,333,379|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|169,766|52|
|NodeError|130,806|92|
|NodeError Range|131,133|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,218,308|98|
|Function returning explicitly undefined|1,210,396|93|
|Function returning implicitly undefined|1,234,403|96|
|Function returning string|1,175,490|97|
|Function returning integer|1,212,150|97|
|Function returning float|1,225,936|98|
|Function returning functions|1,164,924|96|
|Function returning arrow functions|1,205,621|99|
|Function returning empty object|1,176,867|98|
|Function returning empty array|1,226,972|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,980,055|99|
|using Array.includes (first item)|591,891,449|96|
|Using raw comparison|594,528,903|98|
|Using raw comparison (first item)|592,264,330|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,188,467|94|
|Using Object.getOwnPropertyNames()|65,476,855|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,886,812|96|
|Length = 10_000 - Array.at|18,841,610|96|
|Length = 1_000_000 - Array.at|18,829,218|96|
|Length = 100 - Array[length - 1]|593,523,270|97|
|Length = 10_000 - Array[length - 1]|593,354,176|96|
|Length = 1_000_000 - Array[length - 1]|592,631,192|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,630,884|96|
|Object.create({})|1,508,759|82|
|Cached Empty.prototype|592,986,274|97|
|Empty.prototype|1,564,421|81|
|Empty class|920,166|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,948,331|97|
|Using optional chain (obj.field?.field2) (undefined)|593,030,236|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,713,507|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,065,641|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,534,672|89|
|Using parseInt(x, 10) - big number (10 len)|15,244,224|91|
|Using + - small number (2 len)|593,323,345|97|
|Using + - big number (10 len)|593,247,068|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|804,153|81|
|Using ? operator to avoid rejection|875,752|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,267,828|96|
|Raw usage underscore usage|7,655,472|97|
|Manipulating private properties using #|2,796,050|96|
|Manipulating private properties using underscore(_)|590,997,887|96|
|Manipulating private properties using Symbol|590,830,004|99|
|Manipulating private properties using PrivateSymbol|34,092,973|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,651,724|98|
|Adding property in the object creation - small object|2,662,001|97|
|Adding property after the function creation - small class|168,040|88|
|Adding property in the function creation - small class|167,811|90|
|Adding property after the class creation - small class|144,772|85|
|Adding property in the class creation - small class|144,521|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,463,682|96|
|Using replaceAll()|2,249,639|98|
|Using replaceAll(//g)|2,199,413|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|184,256|98|
|Sort using first char|861,343|93|
|Sort using localeCompare|450,158|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,419|92|
|{...smallObject} - Total keys: 2|67,483,127|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,582|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,630|96|
|{ ...bigObject, ...anotherBigObject }|840|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,840,655|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,432,812|97|
|{ ...smallObject, ...anotherSmallObject }|16,046,917|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,659 ops/sec ±15.25% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±0.73% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,976 ops/sec ±0.47% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 901 ops/sec ±14.67% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,576,453|97|
|Using backtick (`)|594,497,046|95|
|Using array.join|8,732,973|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,751,926|91|
|Using this|112,743,274|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,845,253|93|
|Date.now()|14,552,467|89|
