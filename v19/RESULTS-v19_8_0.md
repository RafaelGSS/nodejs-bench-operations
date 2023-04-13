# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.8.0`
* __Run:__ Thu Apr 13 2023 10:58:26 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,277,376,864|100|
|Using dot notation|1,274,763,798|97|
|Using define property (writable)|3,876,566|96|
|Using define property initialized (writable)|5,086,223|95|
|Using define property (getter)|2,145,714|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.415ms
new Array(length)|10,000|0.369ms
array.push|1,000,000|27.706ms
new Array(length)|1,000,000|5.774ms
array.push|100,000,000|1,618.461ms
new Array(length)|100,000,000|4,056.577ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.013ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.358ms
new Array(length)|10,000|0.189ms
array.push|1,000,000|206.354ms
new Array(length)|1,000,000|8.713ms
array.push|100,000,000|1,804.879ms
new Array(length)|100,000,000|4,075.32ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|85|
|Array.from|19|52|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|229,856|63|
|[True conditional] Using constructor name|192,589|90|
|[True conditional] Check if property is valid then instanceof |196,867|95|
|[False conditional] Using instanceof only|1,274,294,556|95|
|[False conditional] Using constructor name|1,276,644,389|99|
|[False conditional] Check if property is valid then instanceof |1,259,335,356|96|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,472|96|
|crypto.verify('RSA-SHA256')|6,241|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,219,602|97|
|fromUnixToISOString(new Date())|1,866,066|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,992|84|
|Intl.DateTimeFormat().format(new Date())|11,965|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,433|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,260|97|
|Reusing Intl.DateTimeFormat()|526,053|96|
|Date.toLocaleDateString()|534,660|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,972|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|920,982|95|
|Using brackets {}|931,320|98|
|Using '' + |904,958|92|
|Using date.toString()|1,014,874|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,268,662|96|
|Using undefined assignment|1,270,235,488|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|218,629|55|
|NodeError|190,878|96|
|NodeError Range|191,722|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,414,065|95|
|Function returning explicitly undefined|1,413,842|95|
|Function returning implicitly undefined|1,426,793|97|
|Function returning string|1,373,218|95|
|Function returning integer|1,440,808|97|
|Function returning float|1,431,179|97|
|Function returning functions|1,391,260|96|
|Function returning arrow functions|1,402,929|96|
|Function returning empty object|1,413,209|97|
|Function returning empty array|1,422,004|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,267,394,466|94|
|using Array.includes (first item)|1,276,740,057|98|
|Using raw comparison|1,278,858,077|97|
|Using raw comparison (first item)|1,281,167,827|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|86,158,872|94|
|Using Object.getOwnPropertyNames()|74,109,522|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,279,515,005|99|
|Length = 10_000 - Array.at|1,274,418,922|100|
|Length = 1_000_000 - Array.at|1,230,729,673|95|
|Length = 100 - Array[length - 1]|1,260,309,030|88|
|Length = 10_000 - Array[length - 1]|1,277,531,115|97|
|Length = 1_000_000 - Array[length - 1]|1,274,179,120|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,639,752|92|
|Object.create({})|2,313,058|85|
|Cached Empty.prototype|1,265,388,598|92|
|Empty.prototype|2,018,715|82|
|Empty class|1,254,595|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,276,347,074|90|
|Using optional chain (obj.field?.field2) (undefined)|1,276,257,710|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,268,329,381|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,274,905,859|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|332,900,137|94|
|Using parseInt(x, 10) - big number (10 len)|19,480,055|99|
|Using + - small number (2 len)|1,275,246,421|93|
|Using + - big number (10 len)|1,270,681,237|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,024,277|86|
|Using ? operator to avoid rejection|1,046,139|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,268,202,246|99|
|Raw usage underscore usage|1,273,141,464|97|
|Manipulating private properties using #|1,261,314,607|98|
|Manipulating private properties using underscore(_)|1,256,969,173|97|
|Manipulating private properties using Symbol|1,261,329,815|94|
|Manipulating private properties using PrivateSymbol|52,094,241|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,494,690|97|
|Adding property in the object creation - small object|2,504,755|96|
|Adding property after the function creation - small class|208,094|92|
|Adding property in the function creation - small class|207,017|87|
|Adding property after the class creation - small class|182,655|87|
|Adding property in the class creation - small class|184,414|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,278,705,779|99|
|Getter|98,253,354|96|
|Method|1,270,969,388|89|
|DefineProperty (getter)|1,278,134,103|101|
|DefineProperty (getter & enumerable=false)|96,785,098|97|
|DefineProperty (getter & configurable=false)|1,270,130,608|94|
|DefineProperty (getter & enumerable=false & configurable=false)|90,542,289|95|
|DefineProperty (writable)|1,280,571,991|99|
|DefineProperty (writable & enumerable=false)|1,276,911,910|96|
|DefineProperty (writable & enumerable=false & configurable=false)|582,516,421|48|
|DefineProperties (getter)|57,667,762|87|
|DefineProperties (getter & enumerable=false)|98,295,444|99|
|DefineProperties (getter & enumerable=false & configurable=false)|98,501,851|95|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|955,614,829|93|
|Setter|8,542,562|92|
|Method|960,005,456|99|
|DefineProperty (setter)|959,055,530|98|
|DefineProperty (setter & enumerable=false)|8,625,411|97|
|DefineProperty (setter & configurable=false)|8,430,075|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,598,602|95|
|DefineProperty (writable)|1,275,420,577|95|
|DefineProperty (writable & enumerable=false)|986,171,659|78|
|DefineProperty (writable & enumerable=false & configurable=false)|158,143,872|91|
|DefineProperties (setter)|120,928,380|89|
|DefineProperties (setter & enumerable=false)|8,288,979|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,435,951|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,184,746|92|
|Using replaceAll()|2,841,624|97|
|Using replaceAll(//g)|2,750,121|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|240,655|93|
|Sort using first char|1,054,807|99|
|Sort using localeCompare|1,036,706|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,712|94|
|{...smallObject} - Total keys: 2|101,134,834|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,927|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,327|99|
|{ ...bigObject, ...anotherBigObject }|1,106|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,427,977|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,195,038|94|
|{ ...smallObject, ...anotherSmallObject }|21,068,394|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,380 ops/sec ±0.66% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 474 ops/sec ±0.22% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,300 ops/sec ±0.26% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,580 ops/sec ±7.33% (74 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,261,973,911|95|
|Using backtick (`)|1,274,015,438|100|
|Using array.join|10,132,765|92|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,277,071,567|99|
|Using indexof|1,274,809,091|96|
|Using RegExp.test|18,449,140|89|
|Using RegExp.text with cached regex pattern|19,047,223|95|
|Using new RegExp.test|3,822,967|95|
|Using new RegExp.test with cached regex pattern|4,040,302|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|185,832,888|94|
|Using this|208,955,332|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,069,889|89|
|Date.now()|21,889,820|97|
