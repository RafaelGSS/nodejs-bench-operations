# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v18.16.0`
* __Run:__ Sun Apr 23 2023 14:53:04 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,152,372|100|
|Using dot notation|848,218,768|100|
|Using define property (writable)|4,376,442|98|
|Using define property initialized (writable)|5,883,184|97|
|Using define property (getter)|2,263,215|91|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.008ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.356ms
new Array(length)|10,000|0.137ms
array.push|1,000,000|25.167ms
new Array(length)|1,000,000|13.408ms
array.push|100,000,000|1,751.815ms
new Array(length)|100,000,000|3,795.491ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.017ms
new Array(length)|100|0.009ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.422ms
new Array(length)|10,000|3.21ms
array.push|1,000,000|276.697ms
new Array(length)|1,000,000|4.328ms
array.push|100,000,000|2,151.938ms
new Array(length)|100,000,000|4,124.333ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|315|88|
|Array.from|23|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,537|53|
|[True conditional] Using constructor name|181,293|95|
|[True conditional] Check if property is valid then instanceof |182,603|94|
|[False conditional] Using instanceof only|849,126,150|97|
|[False conditional] Using constructor name|849,712,734|99|
|[False conditional] Check if property is valid then instanceof |850,625,769|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,845|94|
|crypto.verify('RSA-SHA256')|6,906|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,651,364|93|
|fromUnixToISOString(new Date())|2,172,444|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,634|88|
|Intl.DateTimeFormat().format(new Date())|10,589|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,031|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,895|95|
|Reusing Intl.DateTimeFormat()|588,285|82|
|Date.toLocaleDateString()|596,305|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,122|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|957,011|96|
|Using brackets {}|962,200|97|
|Using '' + |954,462|98|
|Using date.toString()|1,111,998|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,424,544|93|
|Using undefined assignment|848,349,707|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,590|53|
|NodeError|180,851|96|
|NodeError Range|181,170|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,851,621|98|
|Function returning explicitly undefined|1,841,686|94|
|Function returning implicitly undefined|1,869,912|90|
|Function returning string|1,858,643|96|
|Function returning integer|1,903,348|97|
|Function returning float|1,876,159|95|
|Function returning functions|1,802,414|96|
|Function returning arrow functions|1,837,388|100|
|Function returning empty object|1,817,867|97|
|Function returning empty array|1,838,134|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,992,499|100|
|using Array.includes (first item)|848,035,347|98|
|Using raw comparison|849,327,138|89|
|Using raw comparison (first item)|848,475,760|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|95,055,075|98|
|Using Object.getOwnPropertyNames()|96,940,243|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,652,680|99|
|Length = 10_000 - Array.at|26,317,564|97|
|Length = 1_000_000 - Array.at|27,187,821|98|
|Length = 100 - Array[length - 1]|848,118,011|98|
|Length = 10_000 - Array[length - 1]|847,958,319|100|
|Length = 1_000_000 - Array[length - 1]|847,796,498|101|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,502,979|95|
|Object.create({})|1,524,839|89|
|Cached Empty.prototype|848,990,185|99|
|Empty.prototype|1,672,538|88|
|Empty class|959,416|93|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,373,780|99|
|Using optional chain (obj.field?.field2) (undefined)|849,195,579|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,619,209|101|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,038,151|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,768,532|91|
|Using parseInt(x, 10) - big number (10 len)|21,307,115|100|
|Using + - small number (2 len)|849,906,952|100|
|Using + - big number (10 len)|849,173,336|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|772,313|81|
|Using ? operator to avoid rejection|805,646|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|353,665,511|94|
|Raw usage underscore usage|367,715,711|98|
|Manipulating private properties using #|267,965,707|95|
|Manipulating private properties using underscore(_)|264,032,384|99|
|Manipulating private properties using Symbol|262,305,579|92|
|Manipulating private properties using PrivateSymbol|51,496,998|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,875,125|99|
|Adding property in the object creation - small object|3,847,808|98|
|Adding property after the function creation - small class|197,537|89|
|Adding property in the function creation - small class|197,537|88|
|Adding property after the class creation - small class|163,572|87|
|Adding property in the class creation - small class|164,130|86|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,192,818|100|
|Getter|98,380,129|96|
|Method|848,778,866|97|
|DefineProperty (getter)|848,574,465|98|
|DefineProperty (getter & enumerable=false)|98,346,579|97|
|DefineProperty (getter & configurable=false)|849,383,033|99|
|DefineProperty (getter & enumerable=false & configurable=false)|98,221,477|95|
|DefineProperty (writable)|848,963,062|97|
|DefineProperty (writable & enumerable=false)|199,824,762|25|
|DefineProperty (writable & enumerable=false & configurable=false)|166,422,265|82|
|DefineProperties (getter)|66,239,144|90|
|DefineProperties (getter & enumerable=false)|98,490,599|98|
|DefineProperties (getter & enumerable=false & configurable=false)|98,840,298|93|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|837,338,549|95|
|Setter|11,755,616|99|
|Method|838,964,610|98|
|DefineProperty (setter)|841,703,045|98|
|DefineProperty (setter & enumerable=false)|11,433,855|98|
|DefineProperty (setter & configurable=false)|11,702,244|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,676,865|98|
|DefineProperty (writable)|782,009,673|95|
|DefineProperty (writable & enumerable=false)|157,417,688|77|
|DefineProperty (writable & enumerable=false & configurable=false)|157,922,154|78|
|DefineProperties (setter)|121,409,765|83|
|DefineProperties (setter & enumerable=false)|12,140,731|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,955,194|91|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,512,994|96|
|Using replaceAll()|3,109,824|101|
|Using replaceAll(//g)|3,112,574|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|273,744|96|
|Sort using first char|1,279,484|100|
|Sort using localeCompare|1,181,229|100|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,092|99|
|{...smallObject} - Total keys: 2|112,430,689|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,168|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,634|97|
|{ ...bigObject, ...anotherBigObject }|1,238|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,907,842|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,210,722|97|
|{ ...smallObject, ...anotherSmallObject }|24,043,931|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,623 ops/sec ±0.90% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 539 ops/sec ±0.37% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,345 ops/sec ±0.54% (97 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,136 ops/sec ±43.20% (40 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,218,347|100|
|Using backtick (`)|849,256,346|100|
|Using array.join|12,645,416|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|849,411,895|100|
|Using indexof|849,046,123|101|
|Using RegExp.test|16,281,992|100|
|Using RegExp.text with cached regex pattern|16,957,030|101|
|Using new RegExp.test|4,382,077|100|
|Using new RegExp.test with cached regex pattern|5,005,026|100|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,426,608|96|
|Using this|160,092,440|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,109,724|96|
|Date.now()|21,757,141|101|
