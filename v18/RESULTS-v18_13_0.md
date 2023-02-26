# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Sun Feb 26 2023 16:30:47 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|772,747,342|97|
|Using dot notation|771,691,930|96|
|Using define property (writable)|3,548,798|95|
|Using define property initialized (writable)|4,635,067|93|
|Using define property (getter)|1,712,918|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.037ms
new Array(length)|100|0.012ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.514ms
new Array(length)|10,000|0.184ms
array.push|1,000,000|25.794ms
new Array(length)|1,000,000|18.356ms
array.push|100,000,000|2,189.742ms
new Array(length)|100,000,000|5,149.406ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.097ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.621ms
new Array(length)|10,000|4.349ms
array.push|1,000,000|320.784ms
new Array(length)|1,000,000|5.091ms
array.push|100,000,000|2,796.122ms
new Array(length)|100,000,000|5,588.176ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|293|80|
|Array.from|13|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,118|53|
|[True conditional] Using constructor name|150,941|91|
|[True conditional] Check if property is valid then instanceof |154,241|90|
|[False conditional] Using instanceof only|772,679,813|97|
|[False conditional] Using constructor name|773,929,936|92|
|[False conditional] Check if property is valid then instanceof |772,829,933|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,050,316|95|
|fromUnixToISOString(new Date())|1,654,729|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,087|82|
|Intl.DateTimeFormat().format(new Date())|7,677|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,783|63|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,418|84|
|Reusing Intl.DateTimeFormat()|562,517|92|
|Date.toLocaleDateString()|576,390|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,699|77|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|647,334|94|
|Using brackets {}|653,418|91|
|Using '' + |654,039|93|
|Using date.toString()|705,484|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,328,276|93|
|Using undefined assignment|771,381,652|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|193,141|53|
|NodeError|150,054|89|
|NodeError Range|148,137|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,358,089|91|
|Function returning explicitly undefined|1,331,698|93|
|Function returning implicitly undefined|1,361,009|91|
|Function returning string|1,360,285|90|
|Function returning integer|1,362,697|90|
|Function returning float|1,366,205|95|
|Function returning functions|1,332,973|93|
|Function returning arrow functions|1,323,484|90|
|Function returning empty object|1,376,596|93|
|Function returning empty array|1,367,987|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,462,408|95|
|using Array.includes (first item)|770,649,845|95|
|Using raw comparison|772,348,645|96|
|Using raw comparison (first item)|771,159,538|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,139,225|92|
|Using Object.getOwnPropertyNames()|57,988,035|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|17,796,378|93|
|Length = 10_000 - Array.at|17,767,067|94|
|Length = 1_000_000 - Array.at|17,782,045|94|
|Length = 100 - Array[length - 1]|770,788,552|94|
|Length = 10_000 - Array[length - 1]|770,589,586|97|
|Length = 1_000_000 - Array[length - 1]|770,022,085|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,279,093|91|
|Object.create({})|1,134,510|84|
|Cached Empty.prototype|772,424,101|95|
|Empty.prototype|1,157,398|81|
|Empty class|838,698|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|773,800,756|97|
|Using optional chain (obj.field?.field2) (undefined)|773,593,427|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|772,999,031|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|771,099,981|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|226,789,993|96|
|Using parseInt(x, 10) - big number (10 len)|12,793,227|93|
|Using + - small number (2 len)|774,757,293|97|
|Using + - big number (10 len)|773,201,119|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|663,477|81|
|Using ? operator to avoid rejection|696,625|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|230,855,771|90|
|Raw usage underscore usage|236,140,895|94|
|Manipulating private properties using #|197,654,670|92|
|Manipulating private properties using underscore(_)|187,586,624|87|
|Manipulating private properties using Symbol|172,268,423|87|
|Manipulating private properties using PrivateSymbol|22,073,397|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,043,162|95|
|Adding property in the object creation - small object|3,040,052|96|
|Adding property after the function creation - small class|169,766|84|
|Adding property in the function creation - small class|171,298|88|
|Adding property after the class creation - small class|143,116|81|
|Adding property in the class creation - small class|143,176|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|773,881,580|97|
|Getter|83,306,563|94|
|Method|770,929,457|95|
|DefineProperty (getter)|771,007,313|96|
|DefineProperty (getter & enumerable=false)|83,246,399|91|
|DefineProperty (getter & configurable=false)|772,327,385|98|
|DefineProperty (getter & enumerable=false & configurable=false)|83,480,738|95|
|DefineProperty (writable)|770,949,047|93|
|DefineProperty (writable & enumerable=false)|743,447,479|88|
|DefineProperty (writable & enumerable=false & configurable=false)|132,579,089|81|
|DefineProperties (getter)|55,501,430|89|
|DefineProperties (getter & enumerable=false)|83,427,582|92|
|DefineProperties (getter & enumerable=false & configurable=false)|83,493,625|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|737,722,686|96|
|Setter|8,611,267|91|
|Method|737,618,436|96|
|DefineProperty (setter)|736,234,136|94|
|DefineProperty (setter & enumerable=false)|8,506,363|91|
|DefineProperty (setter & configurable=false)|8,583,885|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,571,994|94|
|DefineProperty (writable)|770,398,032|96|
|DefineProperty (writable & enumerable=false)|772,215,395|95|
|DefineProperty (writable & enumerable=false & configurable=false)|361,752,612|48|
|DefineProperties (setter)|104,332,265|85|
|DefineProperties (setter & enumerable=false)|8,492,365|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,476,425|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,675,964|89|
|Using replaceAll()|1,982,691|91|
|Using replaceAll(//g)|2,426,163|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,175|90|
|Sort using first char|852,758|92|
|Sort using localeCompare|846,310|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,570|91|
|{...smallObject} - Total keys: 2|56,919,066|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,524|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,220|95|
|{ ...bigObject, ...anotherBigObject }|945|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,383,056|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,621,295|95|
|{ ...smallObject, ...anotherSmallObject }|15,592,802|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,786 ops/sec ±0.82% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 449 ops/sec ±0.78% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,948 ops/sec ±0.61% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,037 ops/sec ±20.91% (42 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|774,138,694|95|
|Using backtick (`)|773,962,429|98|
|Using array.join|7,734,363|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,082,392|90|
|Using this|148,890,622|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,566,243|93|
|Date.now()|15,344,834|91|
