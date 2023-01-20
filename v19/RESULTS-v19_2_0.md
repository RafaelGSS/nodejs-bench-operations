# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Fri Jan 20 2023 20:00:11 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.004ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.486ms
new Array(length)|10,000|0.381ms
array.push|1,000,000|35.017ms
new Array(length)|1,000,000|7.863ms
array.push|100,000,000|1,862.838ms
new Array(length)|100,000,000|4,534.458ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.093ms
new Array(length)|100|0.01ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.367ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|85.186ms
new Array(length)|1,000,000|8.857ms
array.push|100,000,000|2,922.861ms
new Array(length)|100,000,000|4,272.869ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|449|88|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|166,510|51|
|[True conditional] Using constructor name|127,755|93|
|[True conditional] Check if property is valid then instanceof |128,852|95|
|[False conditional] Using instanceof only|597,548,290|95|
|[False conditional] Using constructor name|597,438,929|96|
|[False conditional] Check if property is valid then instanceof |595,707,083|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,024,705|91|
|fromUnixToISOString(new Date())|1,520,474|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,210|88|
|Intl.DateTimeFormat().format(new Date())|9,018|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,882|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,201|83|
|Reusing Intl.DateTimeFormat()|445,407|96|
|Date.toLocaleDateString()|462,119|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,040|86|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|673,147|90|
|Using brackets {}|678,962|93|
|Using '' + |679,432|93|
|Using date.toString()|794,018|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,708,581|96|
|Using undefined assignment|596,202,648|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,713|53|
|NodeError|126,975|92|
|NodeError Range|129,449|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,174,322|94|
|Function returning explicitly undefined|1,187,901|93|
|Function returning implicitly undefined|1,238,978|94|
|Function returning string|1,188,415|93|
|Function returning integer|1,214,370|94|
|Function returning float|1,236,837|91|
|Function returning functions|1,203,839|91|
|Function returning arrow functions|1,207,309|93|
|Function returning empty object|1,245,392|89|
|Function returning empty array|1,244,493|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,287,886|96|
|using Array.includes (first item)|595,866,898|94|
|Using raw comparison|597,950,210|95|
|Using raw comparison (first item)|597,455,137|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,579,466|87|
|Using Object.getOwnPropertyNames()|68,569,852|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,582,014|98|
|Length = 10_000 - Array.at|601,088,206|96|
|Length = 1_000_000 - Array.at|601,279,334|98|
|Length = 100 - Array[length - 1]|594,164,068|94|
|Length = 10_000 - Array[length - 1]|591,072,209|93|
|Length = 1_000_000 - Array[length - 1]|593,998,553|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,315,660|96|
|Object.create({})|1,594,738|77|
|Cached Empty.prototype|596,360,360|97|
|Empty.prototype|1,471,573|70|
|Empty class|1,058,137|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,407,694|93|
|Using optional chain (obj.field?.field2) (undefined)|596,531,827|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,588,207|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,466,029|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|205,736,896|92|
|Using parseInt(x, 10) - big number (10 len)|15,249,639|97|
|Using + - small number (2 len)|596,876,960|95|
|Using + - big number (10 len)|596,906,418|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|908,620|81|
|Using ? operator to avoid rejection|943,408|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|600,857,080|97|
|Raw usage underscore usage|602,115,553|94|
|Manipulating private properties using #|595,351,370|93|
|Manipulating private properties using underscore(_)|596,535,952|100|
|Manipulating private properties using Symbol|596,063,582|97|
|Manipulating private properties using PrivateSymbol|40,006,081|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,860,677|92|
|Adding property in the object creation - small object|2,857,428|94|
|Adding property after the function creation - small class|174,024|88|
|Adding property in the function creation - small class|174,787|90|
|Adding property after the class creation - small class|150,216|86|
|Adding property in the class creation - small class|150,901|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,627,390|98|
|Using replaceAll()|2,365,491|97|
|Using replaceAll(//g)|2,326,824|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,828|97|
|Sort using first char|922,332|96|
|Sort using localeCompare|853,468|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,447|95|
|{...smallObject} - Total keys: 2|71,478,455|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,451|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,120|96|
|{ ...bigObject, ...anotherBigObject }|839|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,759,671|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,183,035|97|
|{ ...smallObject, ...anotherSmallObject }|17,819,919|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,897 ops/sec ±0.65% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 375 ops/sec ±3.96% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,179 ops/sec ±0.59% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 901 ops/sec ±15.84% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|594,422,079|96|
|Using backtick (`)|596,353,845|98|
|Using array.join|8,967,765|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,555,362|94|
|Using this|120,472,061|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,827,018|96|
|Date.now()|16,175,845|87|
