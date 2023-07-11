# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Tue Jul 11 2023 20:06:02 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|775,203,794|93|
|Using dot notation|773,256,613|90|
|Using define property (writable)|3,057,137|93|
|Using define property initialized (writable)|3,939,472|93|
|Using define property (getter)|1,722,653|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.013ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.521ms
new Array(length)|10,000|0.435ms
array.push|1,000,000|40.62ms
new Array(length)|1,000,000|10.137ms
array.push|100,000,000|2,495.826ms
new Array(length)|100,000,000|5,874.007ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.105ms
new Array(length)|100|0.011ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.421ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|27.839ms
new Array(length)|1,000,000|12.342ms
array.push|100,000,000|2,918.885ms
new Array(length)|100,000,000|5,871.814ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|201|82|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,692|53|
|[True conditional] Using constructor name|142,626|91|
|[True conditional] Check if property is valid then instanceof |145,316|95|
|[False conditional] Using instanceof only|776,312,528|93|
|[False conditional] Using constructor name|776,606,852|93|
|[False conditional] Check if property is valid then instanceof |777,755,194|93|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,919|89|
|crypto.verify('RSA-SHA256')|4,004|90|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|654,793|94|
|fromUnixToISOString(new Date())|874,382|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,924|89|
|Intl.DateTimeFormat().format(new Date())|7,636|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,168|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,630|92|
|Reusing Intl.DateTimeFormat()|344,097|79|
|Date.toLocaleDateString()|414,768|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,737|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|538,693|93|
|Using brackets {}|542,820|95|
|Using '' + |537,589|95|
|Using date.toString()|571,629|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,592,717|92|
|Using undefined assignment|773,530,523|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,689|53|
|NodeError|142,176|93|
|NodeError Range|141,875|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,396,381|92|
|Function returning explicitly undefined|1,378,820|93|
|Function returning implicitly undefined|1,421,104|91|
|Function returning string|1,404,370|96|
|Function returning integer|1,394,848|93|
|Function returning float|1,390,884|92|
|Function returning functions|1,363,799|93|
|Function returning arrow functions|1,377,713|95|
|Function returning empty object|1,415,513|92|
|Function returning empty array|1,388,655|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,298,806|93|
|using Array.includes (first item)|775,574,765|93|
|Using raw comparison|777,715,209|93|
|Using raw comparison (first item)|777,657,002|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,048,706|91|
|Using Object.getOwnPropertyNames()|58,366,565|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|771,213,304|92|
|Length = 10_000 - Array.at|772,543,523|97|
|Length = 1_000_000 - Array.at|769,265,139|93|
|Length = 100 - Array[length - 1]|772,996,256|93|
|Length = 10_000 - Array[length - 1]|773,366,751|90|
|Length = 1_000_000 - Array[length - 1]|773,673,527|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,747,838|90|
|Object.create({})|1,648,430|80|
|Cached Empty.prototype|776,618,584|94|
|Empty.prototype|1,548,146|77|
|Empty class|1,061,452|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|776,645,595|94|
|Using optional chain (obj.field?.field2) (undefined)|776,322,489|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,459,959|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,223,042|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|193,763,723|94|
|Using parseInt(x, 10) - big number (10 len)|15,855,630|96|
|Using + - small number (2 len)|778,299,756|92|
|Using + - big number (10 len)|776,463,996|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|790,889|79|
|Using ? operator to avoid rejection|834,151|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|772,078,214|95|
|Raw usage underscore usage|772,674,245|92|
|Manipulating private properties using #|760,881,950|95|
|Manipulating private properties using underscore(_)|761,895,527|94|
|Manipulating private properties using Symbol|759,017,435|94|
|Manipulating private properties using PrivateSymbol|31,356,674|86|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,705,199|92|
|Adding property in the object creation - small object|2,719,008|92|
|Adding property after the function creation - small class|179,564|86|
|Adding property in the function creation - small class|179,848|84|
|Adding property after the class creation - small class|149,118|82|
|Adding property in the class creation - small class|150,667|84|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|776,331,640|90|
|Getter|66,006,714|94|
|Method|774,836,000|95|
|DefineProperty (getter)|775,318,364|93|
|DefineProperty (getter & enumerable=false)|66,130,709|94|
|DefineProperty (getter & configurable=false)|777,839,280|92|
|DefineProperty (getter & enumerable=false & configurable=false)|66,204,391|93|
|DefineProperty (writable)|776,269,156|89|
|DefineProperty (writable & enumerable=false)|777,387,731|95|
|DefineProperty (writable & enumerable=false & configurable=false)|776,010,742|93|
|DefineProperties (getter)|66,051,361|95|
|DefineProperties (getter & enumerable=false)|66,182,256|95|
|DefineProperties (getter & enumerable=false & configurable=false)|61,065,547|89|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|771,309,533|93|
|Setter|7,878,823|97|
|Method|771,314,378|96|
|DefineProperty (setter)|770,797,040|93|
|DefineProperty (setter & enumerable=false)|7,718,644|95|
|DefineProperty (setter & configurable=false)|7,968,738|94|
|DefineProperty (setter & enumerable=false & configurable=false)|7,901,759|89|
|DefineProperty (writable)|776,758,681|92|
|DefineProperty (writable & enumerable=false)|777,651,855|93|
|DefineProperty (writable & enumerable=false & configurable=false)|110,332,900|19|
|DefineProperties (setter)|85,097,241|84|
|DefineProperties (setter & enumerable=false)|7,362,255|91|
|DefineProperties (setter & enumerable=false & configurable=false)|7,949,463|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,420,195|88|
|Using replaceAll()|2,049,379|90|
|Using replaceAll(//g)|2,174,608|91|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,397,750|92|
|{ ...object, __proto__: null }|13,667,381|95|
|{ ...object, newProp: true }|530,364|83|
|structuredClone|184,518|96|
|JSON.parse + JSON.stringify|146,173|95|
|loop + object.keys starting with {}|926,237|90|
|loop + object.keys starting with { __proto__: null }|470,816|93|
|loop + object.keys starting with { randomProp: true }|348,893|93|
|object.keys + reduce(FN, {})|345,535|94|
|object.keys + reduce(FN, { __proto__: null })|466,176|91|
|object.keys + reduce(FN, { newProp: true })|346,840|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|187,140|93|
|Sort using first char|915,844|94|
|Sort using localeCompare|818,540|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,352|95|
|{...smallObject} - Total keys: 2|71,123,219|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,372|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,841|95|
|{ ...bigObject, ...anotherBigObject }|848|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,662,685|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,656,582|95|
|{ ...smallObject, ...anotherSmallObject }|16,297,556|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,685 ops/sec ±0.96% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 415 ops/sec ±0.20% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,904 ops/sec ±0.51% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 905 ops/sec ±13.50% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|770,016,481|92|
|Using backtick (`)|771,328,847|93|
|Using array.join|7,205,854|88|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|776,605,516|91|
|Using indexof|775,764,077|88|
|Using RegExp.test|12,148,926|96|
|Using RegExp.text with cached regex pattern|12,845,817|97|
|Using new RegExp.test|3,314,410|93|
|Using new RegExp.test with cached regex pattern|3,757,330|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|167,542,107|92|
|Using this|208,655,750|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,642,640|92|
|Date.now()|1,862,773|92|
