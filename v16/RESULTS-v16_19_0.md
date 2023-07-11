# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Tue Jul 11 2023 21:47:19 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|772,624,269|94|
|Using dot notation|770,270,470|97|
|Using define property (writable)|3,137,732|87|
|Using define property initialized (writable)|3,896,854|94|
|Using define property (getter)|1,653,891|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.095ms
new Array(length)|100|0.008ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.426ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|32.535ms
new Array(length)|1,000,000|19.405ms
array.push|100,000,000|2,456.263ms
new Array(length)|100,000,000|5,247.976ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.718ms
new Array(length)|10,000|4.044ms
array.push|1,000,000|303.399ms
new Array(length)|1,000,000|6.291ms
array.push|100,000,000|3,125.293ms
new Array(length)|100,000,000|5,686.574ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|197|80|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|195,310|58|
|[True conditional] Using constructor name|150,021|91|
|[True conditional] Check if property is valid then instanceof |153,327|91|
|[False conditional] Using instanceof only|773,451,284|93|
|[False conditional] Using constructor name|772,270,263|94|
|[False conditional] Check if property is valid then instanceof |772,430,951|96|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,070|91|
|crypto.verify('RSA-SHA256')|17,495|91|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|900,288|95|
|fromUnixToISOString(new Date())|788,552|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,178|88|
|Intl.DateTimeFormat().format(new Date())|6,482|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,079|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,236|79|
|Reusing Intl.DateTimeFormat()|402,875|96|
|Date.toLocaleDateString()|357,479|85|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,896|85|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|526,469|94|
|Using brackets {}|530,348|90|
|Using '' + |525,158|94|
|Using date.toString()|550,821|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,430,937|93|
|Using undefined assignment|770,361,435|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|187,872|55|
|NodeError|146,699|92|
|NodeError Range|147,654|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,327,943|95|
|Function returning explicitly undefined|1,322,083|94|
|Function returning implicitly undefined|1,358,172|96|
|Function returning string|1,338,664|96|
|Function returning integer|1,360,262|92|
|Function returning float|1,349,902|91|
|Function returning functions|1,311,850|96|
|Function returning arrow functions|1,331,341|94|
|Function returning empty object|1,349,139|94|
|Function returning empty array|1,345,795|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,156,445|92|
|using Array.includes (first item)|771,305,211|94|
|Using raw comparison|773,062,066|93|
|Using raw comparison (first item)|772,276,824|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,435,622|89|
|Using Object.getOwnPropertyNames()|55,395,297|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,954,484|92|
|Length = 10_000 - Array.at|18,971,677|94|
|Length = 1_000_000 - Array.at|19,015,081|95|
|Length = 100 - Array[length - 1]|771,787,117|88|
|Length = 10_000 - Array[length - 1]|770,949,583|93|
|Length = 1_000_000 - Array[length - 1]|770,815,773|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,657,364|91|
|Object.create({})|1,552,054|78|
|Cached Empty.prototype|773,027,941|93|
|Empty.prototype|1,529,715|77|
|Empty class|980,126|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,279,994|91|
|Using optional chain (obj.field?.field2) (undefined)|771,357,862|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|772,052,141|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|771,688,979|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,591,124|95|
|Using parseInt(x, 10) - big number (10 len)|13,522,710|93|
|Using + - small number (2 len)|774,104,847|95|
|Using + - big number (10 len)|771,969,591|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|807,682|76|
|Using ? operator to avoid rejection|873,732|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,493,399|93|
|Raw usage underscore usage|6,926,245|94|
|Manipulating private properties using #|2,571,222|93|
|Manipulating private properties using underscore(_)|758,812,725|95|
|Manipulating private properties using Symbol|757,920,248|91|
|Manipulating private properties using PrivateSymbol|30,982,885|86|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,489,324|96|
|Adding property in the object creation - small object|2,489,844|97|
|Adding property after the function creation - small class|178,486|85|
|Adding property in the function creation - small class|178,902|86|
|Adding property after the class creation - small class|146,177|82|
|Adding property in the class creation - small class|147,508|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|772,164,255|92|
|Getter|62,865,363|87|
|Method|771,916,417|92|
|DefineProperty (getter)|772,237,713|93|
|DefineProperty (getter & enumerable=false)|64,655,845|92|
|DefineProperty (getter & configurable=false)|771,810,068|92|
|DefineProperty (getter & enumerable=false & configurable=false)|55,150,031|84|
|DefineProperty (writable)|772,741,050|94|
|DefineProperty (writable & enumerable=false)|773,421,082|93|
|DefineProperty (writable & enumerable=false & configurable=false)|344,504,581|44|
|DefineProperties (getter)|40,635,465|87|
|DefineProperties (getter & enumerable=false)|39,798,187|86|
|DefineProperties (getter & enumerable=false & configurable=false)|64,746,512|94|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|768,503,906|95|
|Setter|6,664,915|93|
|Method|769,257,961|96|
|DefineProperty (setter)|769,147,704|93|
|DefineProperty (setter & enumerable=false)|6,670,324|96|
|DefineProperty (setter & configurable=false)|6,641,104|96|
|DefineProperty (setter & enumerable=false & configurable=false)|6,706,385|97|
|DefineProperty (writable)|768,816,595|95|
|DefineProperty (writable & enumerable=false)|309,552,475|43|
|DefineProperty (writable & enumerable=false & configurable=false)|94,428,999|84|
|DefineProperties (setter)|77,724,257|85|
|DefineProperties (setter & enumerable=false)|6,111,193|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,566,635|92|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,407,565|88|
|Using replaceAll()|2,138,257|92|
|Using replaceAll(//g)|2,109,263|93|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,429,315|93|
|{ ...object, __proto__: null }|13,613,911|95|
|{ ...object, newProp: true }|546,374|86|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|146,844|95|
|loop + object.keys starting with {}|346,846|95|
|loop + object.keys starting with { __proto__: null }|471,576|95|
|loop + object.keys starting with { randomProp: true }|373,709|95|
|object.keys + reduce(FN, {})|350,270|93|
|object.keys + reduce(FN, { __proto__: null })|473,744|93|
|object.keys + reduce(FN, { newProp: true })|380,960|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,028|91|
|Sort using first char|875,998|94|
|Sort using localeCompare|433,637|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,359|93|
|{...smallObject} - Total keys: 2|67,243,590|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,394|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,842|96|
|{ ...bigObject, ...anotherBigObject }|859|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,921,632|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,557,033|93|
|{ ...smallObject, ...anotherSmallObject }|16,385,350|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,678 ops/sec ±0.97% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 392 ops/sec ±4.15% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,893 ops/sec ±0.75% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,039 ops/sec ±16.13% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,488,946|91|
|Using backtick (`)|771,971,309|95|
|Using array.join|6,915,172|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,797,226|95|
|Using indexof|772,527,491|89|
|Using RegExp.test|11,872,649|95|
|Using RegExp.text with cached regex pattern|13,236,072|96|
|Using new RegExp.test|3,484,226|94|
|Using new RegExp.test with cached regex pattern|4,115,551|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|181,836,537|94|
|Using this|175,187,027|84|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,567,732|95|
|Date.now()|1,807,271|93|
