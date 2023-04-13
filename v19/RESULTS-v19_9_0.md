# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.9.0`
* __Run:__ Thu Apr 13 2023 11:25:53 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,261,887,559|99|
|Using dot notation|1,244,180,841|95|
|Using define property (writable)|3,697,207|94|
|Using define property initialized (writable)|4,837,263|94|
|Using define property (getter)|2,132,999|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.012ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.449ms
new Array(length)|10,000|2.484ms
array.push|1,000,000|40.535ms
new Array(length)|1,000,000|8.862ms
array.push|100,000,000|1,555.685ms
new Array(length)|100,000,000|4,155.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.368ms
new Array(length)|10,000|0.187ms
array.push|1,000,000|82.782ms
new Array(length)|1,000,000|7.385ms
array.push|100,000,000|1,732.95ms
new Array(length)|100,000,000|4,839.585ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|286|85|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|229,509|61|
|[True conditional] Using constructor name|192,339|93|
|[True conditional] Check if property is valid then instanceof |194,980|96|
|[False conditional] Using instanceof only|1,257,057,612|96|
|[False conditional] Using constructor name|1,265,614,168|97|
|[False conditional] Check if property is valid then instanceof |1,242,824,270|97|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,328|90|
|crypto.verify('RSA-SHA256')|6,304|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,277,822|95|
|fromUnixToISOString(new Date())|1,988,198|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,063|85|
|Intl.DateTimeFormat().format(new Date())|9,719|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,478|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,615|98|
|Reusing Intl.DateTimeFormat()|430,314|98|
|Date.toLocaleDateString()|530,458|100|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,893|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|940,082|99|
|Using brackets {}|951,764|99|
|Using '' + |945,911|97|
|Using date.toString()|1,038,386|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,253,538|96|
|Using undefined assignment|1,283,815,845|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|223,618|61|
|NodeError|188,987|98|
|NodeError Range|188,963|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,387,998|93|
|Function returning explicitly undefined|1,388,503|97|
|Function returning implicitly undefined|1,405,584|97|
|Function returning string|1,372,580|99|
|Function returning integer|1,374,713|99|
|Function returning float|1,389,846|95|
|Function returning functions|1,376,250|96|
|Function returning arrow functions|1,336,741|95|
|Function returning empty object|1,363,329|98|
|Function returning empty array|1,405,822|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,260,041,795|95|
|using Array.includes (first item)|1,278,102,605|96|
|Using raw comparison|1,279,461,391|97|
|Using raw comparison (first item)|1,278,807,672|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|88,759,915|96|
|Using Object.getOwnPropertyNames()|83,458,685|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,276,854,164|96|
|Length = 10_000 - Array.at|1,274,294,994|99|
|Length = 1_000_000 - Array.at|1,266,919,060|97|
|Length = 100 - Array[length - 1]|1,271,483,499|97|
|Length = 10_000 - Array[length - 1]|1,266,080,386|100|
|Length = 1_000_000 - Array[length - 1]|1,247,017,384|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,557,620|94|
|Object.create({})|2,356,941|88|
|Cached Empty.prototype|1,259,632,862|99|
|Empty.prototype|2,043,769|86|
|Empty class|1,279,089|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,261,967,089|95|
|Using optional chain (obj.field?.field2) (undefined)|1,271,719,636|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,273,754,355|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,279,385,901|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|343,449,749|98|
|Using parseInt(x, 10) - big number (10 len)|20,160,614|93|
|Using + - small number (2 len)|1,223,179,114|96|
|Using + - big number (10 len)|1,258,496,945|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,063,770|83|
|Using ? operator to avoid rejection|1,088,772|90|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,267,810,034|98|
|Raw usage underscore usage|1,269,584,057|96|
|Manipulating private properties using #|1,242,034,540|92|
|Manipulating private properties using underscore(_)|1,266,051,883|97|
|Manipulating private properties using Symbol|1,262,585,096|92|
|Manipulating private properties using PrivateSymbol|52,007,319|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,951,397|99|
|Adding property in the object creation - small object|2,917,413|98|
|Adding property after the function creation - small class|211,549|86|
|Adding property in the function creation - small class|211,289|90|
|Adding property after the class creation - small class|186,051|85|
|Adding property in the class creation - small class|186,660|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,250,844,032|91|
|Getter|94,110,307|98|
|Method|1,269,355,080|99|
|DefineProperty (getter)|1,264,233,836|94|
|DefineProperty (getter & enumerable=false)|98,534,313|95|
|DefineProperty (getter & configurable=false)|1,285,797,917|96|
|DefineProperty (getter & enumerable=false & configurable=false)|97,457,965|97|
|DefineProperty (writable)|1,274,454,561|100|
|DefineProperty (writable & enumerable=false)|1,258,909,063|95|
|DefineProperty (writable & enumerable=false & configurable=false)|1,280,568,361|100|
|DefineProperties (getter)|97,468,871|97|
|DefineProperties (getter & enumerable=false)|89,876,087|89|
|DefineProperties (getter & enumerable=false & configurable=false)|56,979,617|89|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|956,759,619|99|
|Setter|7,471,012|94|
|Method|953,024,104|93|
|DefineProperty (setter)|950,801,419|96|
|DefineProperty (setter & enumerable=false)|7,626,981|96|
|DefineProperty (setter & configurable=false)|7,530,121|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,425,594|94|
|DefineProperty (writable)|1,259,244,951|96|
|DefineProperty (writable & enumerable=false)|1,270,361,440|97|
|DefineProperty (writable & enumerable=false & configurable=false)|1,264,770,372|87|
|DefineProperties (setter)|1,280,049,807|100|
|DefineProperties (setter & enumerable=false)|6,968,032|90|
|DefineProperties (setter & enumerable=false & configurable=false)|7,012,512|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,172,412|95|
|Using replaceAll()|2,807,666|97|
|Using replaceAll(//g)|2,827,179|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|227,101|93|
|Sort using first char|1,031,657|95|
|Sort using localeCompare|997,394|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,669|94|
|{...smallObject} - Total keys: 2|99,037,279|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,878|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,112|97|
|{ ...bigObject, ...anotherBigObject }|1,067|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,743,209|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,097,278|92|
|{ ...smallObject, ...anotherSmallObject }|20,870,605|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,210 ops/sec ±1.52% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 467 ops/sec ±1.10% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,430 ops/sec ±0.49% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,753 ops/sec ±7.07% (66 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,266,443,566|95|
|Using backtick (`)|1,269,641,040|96|
|Using array.join|10,429,808|93|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,271,921,359|87|
|Using indexof|1,277,413,053|99|
|Using RegExp.test|14,561,520|95|
|Using RegExp.text with cached regex pattern|15,063,436|94|
|Using new RegExp.test|3,570,435|95|
|Using new RegExp.test with cached regex pattern|3,928,017|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|182,280,178|97|
|Using this|211,690,126|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,810,310|94|
|Date.now()|21,791,641|95|
