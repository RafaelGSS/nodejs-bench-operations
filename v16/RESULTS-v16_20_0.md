# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v16.20.0`
* __Run:__ Tue Jul 11 2023 22:16:22 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|772,780,935|87|
|Using dot notation|769,635,949|94|
|Using define property (writable)|3,140,058|96|
|Using define property initialized (writable)|3,885,675|96|
|Using define property (getter)|1,650,635|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.547ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|32.058ms
new Array(length)|1,000,000|20.14ms
array.push|100,000,000|2,451.253ms
new Array(length)|100,000,000|6,020.122ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.018ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.57ms
new Array(length)|10,000|4.15ms
array.push|1,000,000|302.103ms
new Array(length)|1,000,000|6.414ms
array.push|100,000,000|3,125.005ms
new Array(length)|100,000,000|5,708.449ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|196|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|192,140|56|
|[True conditional] Using constructor name|148,900|92|
|[True conditional] Check if property is valid then instanceof |150,314|89|
|[False conditional] Using instanceof only|773,449,035|95|
|[False conditional] Using constructor name|773,142,423|93|
|[False conditional] Check if property is valid then instanceof |774,249,842|92|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,315|86|
|crypto.verify('RSA-SHA256')|17,590|91|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|893,166|90|
|fromUnixToISOString(new Date())|799,807|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,638|87|
|Intl.DateTimeFormat().format(new Date())|6,388|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,012|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,102|75|
|Reusing Intl.DateTimeFormat()|369,926|96|
|Date.toLocaleDateString()|370,118|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,262|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|526,694|91|
|Using brackets {}|524,622|96|
|Using '' + |526,086|94|
|Using date.toString()|556,978|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,470,044|92|
|Using undefined assignment|770,023,265|89|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|186,377|54|
|NodeError|145,656|95|
|NodeError Range|145,685|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,319,954|95|
|Function returning explicitly undefined|1,338,094|95|
|Function returning implicitly undefined|1,364,474|92|
|Function returning string|1,323,678|92|
|Function returning integer|1,321,942|95|
|Function returning float|1,311,956|93|
|Function returning functions|1,282,499|96|
|Function returning arrow functions|1,318,151|93|
|Function returning empty object|1,340,147|93|
|Function returning empty array|1,350,899|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,047,352|92|
|using Array.includes (first item)|771,378,269|92|
|Using raw comparison|773,786,801|93|
|Using raw comparison (first item)|772,406,816|90|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,061,956|92|
|Using Object.getOwnPropertyNames()|55,512,495|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,557,266|95|
|Length = 10_000 - Array.at|18,552,121|96|
|Length = 1_000_000 - Array.at|18,525,103|95|
|Length = 100 - Array[length - 1]|769,924,079|93|
|Length = 10_000 - Array[length - 1]|768,336,978|89|
|Length = 1_000_000 - Array[length - 1]|769,980,309|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,730,471|91|
|Object.create({})|1,525,535|76|
|Cached Empty.prototype|773,067,693|94|
|Empty.prototype|1,520,951|78|
|Empty class|990,649|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,390,647|92|
|Using optional chain (obj.field?.field2) (undefined)|771,189,910|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|771,996,973|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|772,167,996|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,782,156|97|
|Using parseInt(x, 10) - big number (10 len)|14,107,152|91|
|Using + - small number (2 len)|773,981,153|92|
|Using + - big number (10 len)|771,820,090|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|793,163|77|
|Using ? operator to avoid rejection|859,206|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,412,242|90|
|Raw usage underscore usage|6,876,765|93|
|Manipulating private properties using #|2,548,489|93|
|Manipulating private properties using underscore(_)|758,877,729|89|
|Manipulating private properties using Symbol|758,107,267|95|
|Manipulating private properties using PrivateSymbol|30,851,096|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,554,567|96|
|Adding property in the object creation - small object|2,559,362|97|
|Adding property after the function creation - small class|177,850|87|
|Adding property in the function creation - small class|177,174|87|
|Adding property after the class creation - small class|146,991|82|
|Adding property in the class creation - small class|144,515|81|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|772,848,939|91|
|Getter|64,634,591|91|
|Method|772,257,867|90|
|DefineProperty (getter)|771,687,691|93|
|DefineProperty (getter & enumerable=false)|60,044,408|90|
|DefineProperty (getter & configurable=false)|772,969,231|93|
|DefineProperty (getter & enumerable=false & configurable=false)|64,797,566|93|
|DefineProperty (writable)|771,802,384|93|
|DefineProperty (writable & enumerable=false)|490,697,997|62|
|DefineProperty (writable & enumerable=false & configurable=false)|87,940,284|79|
|DefineProperties (getter)|38,998,158|84|
|DefineProperties (getter & enumerable=false)|39,042,819|84|
|DefineProperties (getter & enumerable=false & configurable=false)|64,611,292|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|768,344,128|91|
|Setter|7,411,187|97|
|Method|768,961,413|94|
|DefineProperty (setter)|769,114,329|95|
|DefineProperty (setter & enumerable=false)|7,419,077|96|
|DefineProperty (setter & configurable=false)|7,472,074|93|
|DefineProperty (setter & enumerable=false & configurable=false)|7,522,179|95|
|DefineProperty (writable)|770,456,201|93|
|DefineProperty (writable & enumerable=false)|770,769,918|92|
|DefineProperty (writable & enumerable=false & configurable=false)|771,385,178|91|
|DefineProperties (setter)|768,991,164|94|
|DefineProperties (setter & enumerable=false)|7,114,777|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,825,097|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,401,346|93|
|Using replaceAll()|2,159,318|93|
|Using replaceAll(//g)|2,123,968|90|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,357,455|85|
|{ ...object, __proto__: null }|13,623,426|88|
|{ ...object, newProp: true }|545,130|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|147,034|94|
|loop + object.keys starting with {}|350,213|92|
|loop + object.keys starting with { __proto__: null }|462,308|95|
|loop + object.keys starting with { randomProp: true }|366,716|95|
|object.keys + reduce(FN, {})|348,514|94|
|object.keys + reduce(FN, { __proto__: null })|462,037|94|
|object.keys + reduce(FN, { newProp: true })|369,979|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,421|91|
|Sort using first char|872,956|96|
|Sort using localeCompare|436,822|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,357|95|
|{...smallObject} - Total keys: 2|67,321,178|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,405|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,828|96|
|{ ...bigObject, ...anotherBigObject }|858|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,804,808|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,785,487|97|
|{ ...smallObject, ...anotherSmallObject }|16,287,632|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,543 ops/sec ±12.67% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 410 ops/sec ±4.50% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,858 ops/sec ±0.63% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 903 ops/sec ±14.26% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|772,699,792|90|
|Using backtick (`)|771,682,965|96|
|Using array.join|7,028,709|95|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|12,840,008|96|
|Using indexof|771,744,888|92|
|Using RegExp.test|11,636,975|96|
|Using RegExp.text with cached regex pattern|12,357,452|95|
|Using new RegExp.test|3,458,776|93|
|Using new RegExp.test with cached regex pattern|4,115,211|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|180,550,746|93|
|Using this|173,248,697|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,570,037|93|
|Date.now()|1,809,721|95|
