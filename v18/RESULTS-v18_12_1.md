# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Tue Jan 10 2023 02:06:33 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.484ms
new Array(length)|10,000|0.208ms
array.push|1,000,000|38.85ms
new Array(length)|1,000,000|5.996ms
array.push|100,000,000|1,650.581ms
new Array(length)|100,000,000|4,106.455ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.017ms
array.push|100|0.102ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.568ms
new Array(length)|10,000|4.289ms
array.push|1,000,000|292.4ms
new Array(length)|1,000,000|4.26ms
array.push|100,000,000|2,098.764ms
new Array(length)|100,000,000|4,564.427ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|429|90|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,448|53|
|[True conditional] Using constructor name|129,950|93|
|[True conditional] Check if property is valid then instanceof |131,136|94|
|[False conditional] Using instanceof only|591,865,861|96|
|[False conditional] Using constructor name|591,157,692|96|
|[False conditional] Check if property is valid then instanceof |591,068,541|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,367|89|
|Intl.DateTimeFormat().format(new Date())|9,080|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,472|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,944|84|
|Reusing Intl.DateTimeFormat()|463,694|98|
|Reusing dfWithOptions.format(Date.now())|283,873|95|
|Reusing dfWithOptions.format(new Date())|251,022|98|
|Date.toLocaleDateString()|472,862|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,307|86|
|Format using date.get*|3,682,251|94|
|new Date() (Baseline)|8,136,679|96|
|Date.now() (Baseline)|15,632,276|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|732,401|97|
|Using brackets {}|733,489|95|
|Using '' + |728,525|97|
|Using date.toString()|804,113|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,481,137|97|
|Using undefined assignment|591,530,069|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,094|54|
|NodeError|127,360|91|
|NodeError Range|127,709|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,274,169|94|
|Function returning explicitly undefined|1,245,255|95|
|Function returning implicitly undefined|1,259,921|91|
|Function returning string|1,264,202|94|
|Function returning integer|1,297,075|95|
|Function returning float|1,275,729|96|
|Function returning functions|1,244,167|96|
|Function returning arrow functions|1,262,357|97|
|Function returning empty object|1,286,484|93|
|Function returning empty array|1,270,511|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,228,920|96|
|using Array.includes (first item)|590,742,591|92|
|Using raw comparison|591,780,003|99|
|Using raw comparison (first item)|590,963,060|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,636,493|88|
|Using Object.getOwnPropertyNames()|58,967,115|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,011,250|97|
|Length = 10_000 - Array.at|19,001,485|98|
|Length = 1_000_000 - Array.at|18,228,156|95|
|Length = 100 - Array[length - 1]|590,055,645|95|
|Length = 10_000 - Array[length - 1]|589,278,443|94|
|Length = 1_000_000 - Array[length - 1]|589,380,596|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,646,159|94|
|Object.create({})|964,624|81|
|Cached Empty.prototype|591,430,142|98|
|Empty.prototype|1,113,166|80|
|Empty class|658,260|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,013,047|98|
|Using optional chain (obj.field?.field2) (undefined)|592,534,816|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,072,203|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,722,472|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,682,496|92|
|Using parseInt(x, 10) - big number (10 len)|14,946,893|95|
|Using + - small number (2 len)|593,440,076|95|
|Using + - big number (10 len)|592,586,240|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|545,775|81|
|Using ? operator to avoid rejection|570,414|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|253,173,470|92|
|Raw usage underscore usage|261,551,757|98|
|Manipulating private properties using #|190,174,794|89|
|Manipulating private properties using underscore(_)|182,898,779|91|
|Manipulating private properties using Symbol|182,801,740|92|
|Manipulating private properties using PrivateSymbol|36,415,352|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,811,350|98|
|Adding property in the object creation - small object|1,818,701|98|
|Adding property after the function creation - small class|134,580|87|
|Adding property in the function creation - small class|136,055|89|
|Adding property after the class creation - small class|111,607|84|
|Adding property in the class creation - small class|114,140|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,477,359|94|
|Using replaceAll()|2,150,626|97|
|Using replaceAll(//g)|2,187,267|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|199,764|93|
|Sort using first char|882,444|97|
|Sort using localeCompare|832,823|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,505|97|
|{...smallObject} - Total keys: 2|80,217,185|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,571|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,523|97|
|{ ...bigObject, ...anotherBigObject }|860|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,380,951|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,548,334|95|
|{ ...smallObject, ...anotherSmallObject }|16,937,693|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,839 ops/sec ±0.56% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 389 ops/sec ±0.51% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,909 ops/sec ±0.42% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,013 ops/sec ±30.73% (47 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,387,161|99|
|Using backtick (`)|590,406,483|94|
|Using array.join|8,628,425|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,289,013|93|
|Using this|114,023,025|98|
