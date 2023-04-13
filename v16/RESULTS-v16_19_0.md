# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Thu Apr 13 2023 00:27:34 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,283,269,521|100|
|Using dot notation|1,279,816,853|97|
|Using define property (writable)|3,915,308|99|
|Using define property initialized (writable)|4,655,355|97|
|Using define property (getter)|2,204,968|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.056ms
new Array(length)|100|0.005ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.382ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|21.71ms
new Array(length)|1,000,000|15.04ms
array.push|100,000,000|1,459.23ms
new Array(length)|100,000,000|4,086.87ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.013ms
array.push|100|0.011ms
new Array(length)|100|0.007ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.37ms
new Array(length)|10,000|3.24ms
array.push|1,000,000|66.431ms
new Array(length)|1,000,000|3.702ms
array.push|100,000,000|2,211.314ms
new Array(length)|100,000,000|3,896.174ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|312|87|
|Array.from|18|50|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,983|64|
|[True conditional] Using constructor name|200,703|98|
|[True conditional] Check if property is valid then instanceof |201,841|96|
|[False conditional] Using instanceof only|1,256,150,376|88|
|[False conditional] Using constructor name|1,246,939,467|96|
|[False conditional] Check if property is valid then instanceof |1,248,354,185|101|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|31,583|95|
|crypto.verify('RSA-SHA256')|30,127|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,066,199|94|
|fromUnixToISOString(new Date())|1,798,789|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,889|77|
|Intl.DateTimeFormat().format(new Date())|13,902|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,583|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,633|88|
|Reusing Intl.DateTimeFormat()|433,454|97|
|Date.toLocaleDateString()|522,286|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,563|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|888,462|98|
|Using brackets {}|903,107|99|
|Using '' + |899,596|98|
|Using date.toString()|995,551|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,294,188|98|
|Using undefined assignment|1,281,398,792|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|239,577|65|
|NodeError|200,767|91|
|NodeError Range|200,261|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,222,644|98|
|Function returning explicitly undefined|1,201,672|90|
|Function returning implicitly undefined|1,225,084|96|
|Function returning string|1,214,646|94|
|Function returning integer|1,183,511|97|
|Function returning float|1,221,452|97|
|Function returning functions|1,198,521|93|
|Function returning arrow functions|1,209,464|95|
|Function returning empty object|1,221,824|96|
|Function returning empty array|1,215,168|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,282,002,028|101|
|using Array.includes (first item)|1,281,616,481|97|
|Using raw comparison|1,283,704,506|93|
|Using raw comparison (first item)|1,277,780,106|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,727,449|95|
|Using Object.getOwnPropertyNames()|85,940,197|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,716,383|94|
|Length = 10_000 - Array.at|18,769,072|96|
|Length = 1_000_000 - Array.at|18,829,388|96|
|Length = 100 - Array[length - 1]|1,276,942,554|98|
|Length = 10_000 - Array[length - 1]|1,281,389,390|98|
|Length = 1_000_000 - Array[length - 1]|1,276,648,775|100|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,054,735|98|
|Object.create({})|1,925,712|88|
|Cached Empty.prototype|1,280,860,722|98|
|Empty.prototype|1,999,800|86|
|Empty class|1,171,180|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,281,914,234|101|
|Using optional chain (obj.field?.field2) (undefined)|1,282,740,863|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,282,475,532|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,280,408,323|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|316,741,512|97|
|Using parseInt(x, 10) - big number (10 len)|15,021,861|96|
|Using + - small number (2 len)|1,283,312,946|93|
|Using + - big number (10 len)|1,282,680,564|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|894,876|85|
|Using ? operator to avoid rejection|942,929|90|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|10,412,948|96|
|Raw usage underscore usage|8,505,063|96|
|Manipulating private properties using #|3,179,188|95|
|Manipulating private properties using underscore(_)|1,267,582,949|96|
|Manipulating private properties using Symbol|1,265,600,594|97|
|Manipulating private properties using PrivateSymbol|44,858,946|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,364,435|95|
|Adding property in the object creation - small object|2,350,027|98|
|Adding property after the function creation - small class|205,177|90|
|Adding property in the function creation - small class|201,440|88|
|Adding property after the class creation - small class|179,938|89|
|Adding property in the class creation - small class|179,934|91|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,282,917,759|99|
|Getter|90,685,880|95|
|Method|1,282,251,032|97|
|DefineProperty (getter)|1,281,847,669|98|
|DefineProperty (getter & enumerable=false)|97,002,340|99|
|DefineProperty (getter & configurable=false)|1,283,001,534|98|
|DefineProperty (getter & enumerable=false & configurable=false)|97,355,705|97|
|DefineProperty (writable)|1,283,270,575|98|
|DefineProperty (writable & enumerable=false)|514,476,786|42|
|DefineProperty (writable & enumerable=false & configurable=false)|151,031,460|88|
|DefineProperties (getter)|56,343,061|90|
|DefineProperties (getter & enumerable=false)|94,343,468|98|
|DefineProperties (getter & enumerable=false & configurable=false)|94,242,072|95|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|960,573,760|97|
|Setter|7,733,110|96|
|Method|960,827,761|96|
|DefineProperty (setter)|959,895,282|95|
|DefineProperty (setter & enumerable=false)|7,589,144|94|
|DefineProperty (setter & configurable=false)|7,193,032|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,195,495|96|
|DefineProperty (writable)|957,601,735|80|
|DefineProperty (writable & enumerable=false)|148,528,024|82|
|DefineProperty (writable & enumerable=false & configurable=false)|153,088,845|91|
|DefineProperties (setter)|128,971,315|91|
|DefineProperties (setter & enumerable=false)|7,517,311|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,579,062|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,670,173|97|
|Using replaceAll()|2,610,797|97|
|Using replaceAll(//g)|2,421,920|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|230,876|97|
|Sort using first char|1,019,671|89|
|Sort using localeCompare|544,667|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,812|94|
|{...smallObject} - Total keys: 2|101,106,590|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,901|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,035|99|
|{ ...bigObject, ...anotherBigObject }|1,124|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,371,997|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|30,144,999|91|
|{ ...smallObject, ...anotherSmallObject }|20,982,550|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,516 ops/sec ±0.49% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 492 ops/sec ±0.26% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,940 ops/sec ±0.30% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,657 ops/sec ±10.03% (71 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,246,837,431|97|
|Using backtick (`)|1,255,952,972|93|
|Using array.join|8,688,432|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|195,309,341|92|
|Using this|194,874,320|99|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,833,099|100|
|Date.now()|19,992,642|92|
