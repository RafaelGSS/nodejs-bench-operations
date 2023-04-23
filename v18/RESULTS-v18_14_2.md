# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v18.14.2`
* __Run:__ Sun Apr 23 2023 14:39:41 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,892,883|99|
|Using dot notation|848,521,468|99|
|Using define property (writable)|4,361,476|96|
|Using define property initialized (writable)|5,935,269|97|
|Using define property (getter)|2,298,737|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.007ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.348ms
new Array(length)|10,000|0.141ms
array.push|1,000,000|23.015ms
new Array(length)|1,000,000|13.442ms
array.push|100,000,000|1,718.513ms
new Array(length)|100,000,000|3,769.979ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.014ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.446ms
new Array(length)|10,000|3.199ms
array.push|1,000,000|242.64ms
new Array(length)|1,000,000|4.233ms
array.push|100,000,000|2,168.828ms
new Array(length)|100,000,000|4,100.927ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|89|
|Array.from|22|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,574|53|
|[True conditional] Using constructor name|179,600|97|
|[True conditional] Check if property is valid then instanceof |182,246|96|
|[False conditional] Using instanceof only|849,190,369|99|
|[False conditional] Using constructor name|849,544,024|96|
|[False conditional] Check if property is valid then instanceof |849,888,618|97|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,870|95|
|crypto.verify('RSA-SHA256')|6,849|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,628,122|97|
|fromUnixToISOString(new Date())|2,111,398|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,923|90|
|Intl.DateTimeFormat().format(new Date())|10,589|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,101|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,632|93|
|Reusing Intl.DateTimeFormat()|529,741|98|
|Date.toLocaleDateString()|640,416|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,575|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,027,730|92|
|Using brackets {}|1,044,537|98|
|Using '' + |1,032,109|99|
|Using date.toString()|1,137,537|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,462,182|95|
|Using undefined assignment|848,448,188|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|231,421|52|
|NodeError|177,675|94|
|NodeError Range|178,332|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,833,249|97|
|Function returning explicitly undefined|1,814,138|95|
|Function returning implicitly undefined|1,831,327|90|
|Function returning string|1,831,827|96|
|Function returning integer|1,829,282|96|
|Function returning float|1,832,441|97|
|Function returning functions|1,761,162|99|
|Function returning arrow functions|1,781,299|97|
|Function returning empty object|1,854,663|97|
|Function returning empty array|1,821,129|99|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,889,190|100|
|using Array.includes (first item)|848,545,965|101|
|Using raw comparison|849,691,357|95|
|Using raw comparison (first item)|849,187,753|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,664,140|95|
|Using Object.getOwnPropertyNames()|94,997,616|101|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,336,671|97|
|Length = 10_000 - Array.at|27,254,669|92|
|Length = 1_000_000 - Array.at|27,262,157|97|
|Length = 100 - Array[length - 1]|848,138,981|98|
|Length = 10_000 - Array[length - 1]|847,584,137|99|
|Length = 1_000_000 - Array[length - 1]|847,579,021|101|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|75,525,146|94|
|Object.create({})|1,519,061|90|
|Cached Empty.prototype|849,074,246|101|
|Empty.prototype|1,659,261|87|
|Empty class|1,049,318|93|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|849,152,788|99|
|Using optional chain (obj.field?.field2) (undefined)|849,400,338|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,010,972|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|849,235,277|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,478,392|95|
|Using parseInt(x, 10) - big number (10 len)|21,241,651|101|
|Using + - small number (2 len)|850,094,893|98|
|Using + - big number (10 len)|849,048,718|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|775,237|83|
|Using ? operator to avoid rejection|810,969|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|345,197,795|94|
|Raw usage underscore usage|360,381,297|97|
|Manipulating private properties using #|265,822,869|97|
|Manipulating private properties using underscore(_)|261,022,425|95|
|Manipulating private properties using Symbol|260,676,693|96|
|Manipulating private properties using PrivateSymbol|52,667,370|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,886,942|96|
|Adding property in the object creation - small object|3,914,535|97|
|Adding property after the function creation - small class|197,859|90|
|Adding property in the function creation - small class|199,328|91|
|Adding property after the class creation - small class|165,502|86|
|Adding property in the class creation - small class|165,641|86|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,183,536|101|
|Getter|98,555,488|98|
|Method|849,384,056|99|
|DefineProperty (getter)|848,192,587|101|
|DefineProperty (getter & enumerable=false)|98,215,885|97|
|DefineProperty (getter & configurable=false)|849,567,128|101|
|DefineProperty (getter & enumerable=false & configurable=false)|98,673,092|97|
|DefineProperty (writable)|849,314,369|96|
|DefineProperty (writable & enumerable=false)|849,287,430|98|
|DefineProperty (writable & enumerable=false & configurable=false)|425,255,901|51|
|DefineProperties (getter)|64,565,477|88|
|DefineProperties (getter & enumerable=false)|98,501,106|95|
|DefineProperties (getter & enumerable=false & configurable=false)|98,375,879|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|817,040,058|97|
|Setter|12,074,077|93|
|Method|838,224,758|100|
|DefineProperty (setter)|837,564,774|96|
|DefineProperty (setter & enumerable=false)|11,764,309|98|
|DefineProperty (setter & configurable=false)|12,033,292|99|
|DefineProperty (setter & enumerable=false & configurable=false)|11,819,566|96|
|DefineProperty (writable)|848,019,566|95|
|DefineProperty (writable & enumerable=false)|848,346,405|99|
|DefineProperty (writable & enumerable=false & configurable=false)|848,309,607|96|
|DefineProperties (setter)|342,351,978|42|
|DefineProperties (setter & enumerable=false)|10,964,972|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,009,442|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,501,605|92|
|Using replaceAll()|3,136,245|95|
|Using replaceAll(//g)|3,100,014|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|278,894|95|
|Sort using first char|1,276,783|97|
|Sort using localeCompare|1,196,002|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,069|97|
|{...smallObject} - Total keys: 2|110,352,293|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,236|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,603|99|
|{ ...bigObject, ...anotherBigObject }|1,221|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,867,015|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,173,329|96|
|{ ...smallObject, ...anotherSmallObject }|23,478,893|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,615 ops/sec ±0.83% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 551 ops/sec ±0.61% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,300 ops/sec ±0.51% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 969 ops/sec ±50.42% (38 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,252,691|100|
|Using backtick (`)|849,149,397|99|
|Using array.join|12,455,307|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|849,145,581|100|
|Using indexof|849,312,392|101|
|Using RegExp.test|16,196,126|99|
|Using RegExp.text with cached regex pattern|17,166,832|99|
|Using new RegExp.test|4,449,482|93|
|Using new RegExp.test with cached regex pattern|5,232,206|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,283,744|92|
|Using this|158,939,765|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,122,783|96|
|Date.now()|21,761,200|99|
