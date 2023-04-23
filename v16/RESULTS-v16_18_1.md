# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sun Apr 23 2023 12:26:49 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|851,165,679|101|
|Using dot notation|849,904,305|100|
|Using define property (writable)|4,644,877|96|
|Using define property initialized (writable)|5,945,678|95|
|Using define property (getter)|2,295,996|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.069ms
new Array(length)|100|0.006ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.271ms
new Array(length)|10,000|0.148ms
array.push|1,000,000|22.392ms
new Array(length)|1,000,000|13.687ms
array.push|100,000,000|1,726.337ms
new Array(length)|100,000,000|3,814.271ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.015ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.377ms
new Array(length)|10,000|3.21ms
array.push|1,000,000|245.167ms
new Array(length)|1,000,000|4.323ms
array.push|100,000,000|2,120.989ms
new Array(length)|100,000,000|4,107.424ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|323|88|
|Array.from|22|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|245,345|54|
|[True conditional] Using constructor name|188,608|96|
|[True conditional] Check if property is valid then instanceof |191,743|98|
|[False conditional] Using instanceof only|850,959,353|95|
|[False conditional] Using constructor name|850,969,336|93|
|[False conditional] Check if property is valid then instanceof |851,625,451|101|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|29,975|98|
|crypto.verify('RSA-SHA256')|28,905|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,621,483|98|
|fromUnixToISOString(new Date())|2,095,351|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,003|84|
|Intl.DateTimeFormat().format(new Date())|13,051|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,552|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,954|76|
|Reusing Intl.DateTimeFormat()|632,492|98|
|Date.toLocaleDateString()|636,966|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,309|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,007,435|98|
|Using brackets {}|1,028,020|94|
|Using '' + |1,041,811|96|
|Using date.toString()|1,144,755|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,497,439|98|
|Using undefined assignment|849,808,943|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|237,358|52|
|NodeError|185,741|91|
|NodeError Range|186,217|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,716,309|95|
|Function returning explicitly undefined|1,708,779|98|
|Function returning implicitly undefined|1,736,999|94|
|Function returning string|1,720,568|98|
|Function returning integer|1,737,911|97|
|Function returning float|1,734,682|101|
|Function returning functions|1,666,566|94|
|Function returning arrow functions|1,692,871|96|
|Function returning empty object|1,738,173|97|
|Function returning empty array|1,733,533|99|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|849,776,316|101|
|using Array.includes (first item)|849,829,213|96|
|Using raw comparison|851,188,234|101|
|Using raw comparison (first item)|850,986,105|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|88,649,018|93|
|Using Object.getOwnPropertyNames()|91,505,121|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,744,555|94|
|Length = 10_000 - Array.at|26,744,081|98|
|Length = 1_000_000 - Array.at|26,791,325|97|
|Length = 100 - Array[length - 1]|849,505,314|97|
|Length = 10_000 - Array[length - 1]|849,235,977|99|
|Length = 1_000_000 - Array[length - 1]|849,103,085|101|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,072,936|95|
|Object.create({})|2,219,830|85|
|Cached Empty.prototype|851,122,615|97|
|Empty.prototype|2,274,878|97|
|Empty class|1,355,188|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,963,529|100|
|Using optional chain (obj.field?.field2) (undefined)|850,643,046|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,560,227|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|850,686,943|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|293,900,492|89|
|Using parseInt(x, 10) - big number (10 len)|22,049,690|99|
|Using + - small number (2 len)|851,409,491|98|
|Using + - big number (10 len)|851,011,252|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,148,295|82|
|Using ? operator to avoid rejection|1,224,132|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,273,951|97|
|Raw usage underscore usage|10,915,252|100|
|Manipulating private properties using #|3,991,539|96|
|Manipulating private properties using underscore(_)|840,803,348|94|
|Manipulating private properties using Symbol|839,993,276|98|
|Manipulating private properties using PrivateSymbol|48,840,780|98|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,768,023|100|
|Adding property in the object creation - small object|3,775,333|100|
|Adding property after the function creation - small class|236,701|89|
|Adding property in the function creation - small class|237,363|89|
|Adding property after the class creation - small class|201,110|88|
|Adding property in the class creation - small class|201,781|86|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,305,234|100|
|Getter|94,549,359|94|
|Method|850,616,181|98|
|DefineProperty (getter)|850,122,408|97|
|DefineProperty (getter & enumerable=false)|94,110,090|93|
|DefineProperty (getter & configurable=false)|850,914,534|99|
|DefineProperty (getter & enumerable=false & configurable=false)|94,383,818|94|
|DefineProperty (writable)|851,519,900|98|
|DefineProperty (writable & enumerable=false)|581,479,381|70|
|DefineProperty (writable & enumerable=false & configurable=false)|140,817,758|84|
|DefineProperties (getter)|57,901,072|92|
|DefineProperties (getter & enumerable=false)|94,884,252|95|
|DefineProperties (getter & enumerable=false & configurable=false)|94,470,579|95|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|841,933,687|99|
|Setter|10,954,247|99|
|Method|848,538,553|99|
|DefineProperty (setter)|842,988,219|98|
|DefineProperty (setter & enumerable=false)|10,823,876|98|
|DefineProperty (setter & configurable=false)|10,907,760|98|
|DefineProperty (setter & enumerable=false & configurable=false)|10,849,754|99|
|DefineProperty (writable)|849,454,194|93|
|DefineProperty (writable & enumerable=false)|212,229,468|26|
|DefineProperty (writable & enumerable=false & configurable=false)|141,105,305|82|
|DefineProperties (setter)|115,783,708|87|
|DefineProperties (setter & enumerable=false)|10,616,922|98|
|DefineProperties (setter & enumerable=false & configurable=false)|10,641,920|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,462,641|96|
|Using replaceAll()|3,196,435|96|
|Using replaceAll(//g)|3,110,903|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|263,034|98|
|Sort using first char|1,195,401|97|
|Sort using localeCompare|647,607|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,080|97|
|{...smallObject} - Total keys: 2|96,303,971|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,243|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,509|98|
|{ ...bigObject, ...anotherBigObject }|1,224|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,239,996|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,629,108|96|
|{ ...smallObject, ...anotherSmallObject }|23,092,129|100|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,578 ops/sec ±0.48% (90 runs sampled)
streams.web.Readable reading 1e3 * some data x 519 ops/sec ±0.37% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,823 ops/sec ±0.48% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,082 ops/sec ±23.33% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|850,491,653|100|
|Using backtick (`)|850,174,707|97|
|Using array.join|12,438,998|95|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,258,004|98|
|Using indexof|850,701,811|101|
|Using RegExp.test|16,432,042|98|
|Using RegExp.text with cached regex pattern|17,079,167|99|
|Using new RegExp.test|5,280,326|100|
|Using new RegExp.test with cached regex pattern|6,211,084|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|155,900,937|96|
|Using this|159,123,567|96|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,028,166|96|
|Date.now()|20,376,660|94|
