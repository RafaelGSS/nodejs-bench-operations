# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v19.8.0`
* __Run:__ Tue Jul 11 2023 19:36:48 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|777,278,714|94|
|Using dot notation|774,305,919|96|
|Using define property (writable)|3,110,953|92|
|Using define property initialized (writable)|3,914,478|94|
|Using define property (getter)|1,716,905|88|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.046ms
new Array(length)|100|0.016ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.535ms
new Array(length)|10,000|0.451ms
array.push|1,000,000|40.282ms
new Array(length)|1,000,000|8.563ms
array.push|100,000,000|2,507.926ms
new Array(length)|100,000,000|5,818.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.03ms
new Array(length)|100|0.013ms
array.push|1,000|0.07ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.388ms
new Array(length)|10,000|0.304ms
array.push|1,000,000|29.727ms
new Array(length)|1,000,000|10.387ms
array.push|100,000,000|2,949.588ms
new Array(length)|100,000,000|5,870.554ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|202|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,129|53|
|[True conditional] Using constructor name|144,253|92|
|[True conditional] Check if property is valid then instanceof |145,663|93|
|[False conditional] Using instanceof only|775,106,106|95|
|[False conditional] Using constructor name|775,479,708|95|
|[False conditional] Check if property is valid then instanceof |777,744,022|92|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,000|86|
|crypto.verify('RSA-SHA256')|4,082|89|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|680,443|92|
|fromUnixToISOString(new Date())|879,871|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,570|88|
|Intl.DateTimeFormat().format(new Date())|7,707|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,297|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,496|94|
|Reusing Intl.DateTimeFormat()|330,802|81|
|Date.toLocaleDateString()|404,711|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,118|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|546,722|95|
|Using brackets {}|552,438|94|
|Using '' + |547,589|94|
|Using date.toString()|585,840|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,453,694|93|
|Using undefined assignment|775,479,478|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,852|53|
|NodeError|144,318|97|
|NodeError Range|144,393|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,488,633|90|
|Function returning explicitly undefined|1,470,526|93|
|Function returning implicitly undefined|1,512,436|95|
|Function returning string|1,483,067|95|
|Function returning integer|1,517,378|94|
|Function returning float|1,493,156|93|
|Function returning functions|1,425,804|93|
|Function returning arrow functions|1,461,085|93|
|Function returning empty object|1,498,246|91|
|Function returning empty array|1,509,621|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|773,997,552|91|
|using Array.includes (first item)|773,644,075|95|
|Using raw comparison|776,361,821|94|
|Using raw comparison (first item)|775,119,583|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,875,726|93|
|Using Object.getOwnPropertyNames()|54,099,408|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|772,898,978|94|
|Length = 10_000 - Array.at|773,042,046|97|
|Length = 1_000_000 - Array.at|773,394,791|95|
|Length = 100 - Array[length - 1]|774,918,482|94|
|Length = 10_000 - Array[length - 1]|774,598,585|92|
|Length = 1_000_000 - Array[length - 1]|770,706,396|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,635,667|94|
|Object.create({})|1,658,771|84|
|Cached Empty.prototype|775,034,325|95|
|Empty.prototype|1,592,600|81|
|Empty class|1,083,540|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|777,724,291|93|
|Using optional chain (obj.field?.field2) (undefined)|776,987,938|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,921,714|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|775,288,551|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|193,983,597|95|
|Using parseInt(x, 10) - big number (10 len)|15,492,350|88|
|Using + - small number (2 len)|776,875,793|93|
|Using + - big number (10 len)|777,077,654|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|890,178|82|
|Using ? operator to avoid rejection|924,067|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|770,991,366|91|
|Raw usage underscore usage|772,557,173|94|
|Manipulating private properties using #|760,869,207|95|
|Manipulating private properties using underscore(_)|762,161,726|96|
|Manipulating private properties using Symbol|762,343,933|95|
|Manipulating private properties using PrivateSymbol|35,620,197|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,695,639|97|
|Adding property in the object creation - small object|2,689,873|90|
|Adding property after the function creation - small class|188,067|84|
|Adding property in the function creation - small class|191,752|85|
|Adding property after the class creation - small class|160,957|82|
|Adding property in the class creation - small class|160,738|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|776,791,253|93|
|Getter|64,782,172|94|
|Method|775,840,115|93|
|DefineProperty (getter)|776,659,685|90|
|DefineProperty (getter & enumerable=false)|64,647,622|97|
|DefineProperty (getter & configurable=false)|776,077,274|93|
|DefineProperty (getter & enumerable=false & configurable=false)|64,729,426|96|
|DefineProperty (writable)|777,211,204|91|
|DefineProperty (writable & enumerable=false)|777,818,149|94|
|DefineProperty (writable & enumerable=false & configurable=false)|677,683,350|86|
|DefineProperties (getter)|40,731,267|89|
|DefineProperties (getter & enumerable=false)|64,792,306|96|
|DefineProperties (getter & enumerable=false & configurable=false)|64,042,879|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|774,264,211|96|
|Setter|8,173,427|94|
|Method|771,659,355|97|
|DefineProperty (setter)|772,072,772|92|
|DefineProperty (setter & enumerable=false)|8,166,365|92|
|DefineProperty (setter & configurable=false)|8,248,832|93|
|DefineProperty (setter & enumerable=false & configurable=false)|8,271,842|97|
|DefineProperty (writable)|776,954,041|94|
|DefineProperty (writable & enumerable=false)|777,248,589|92|
|DefineProperty (writable & enumerable=false & configurable=false)|776,419,887|94|
|DefineProperties (setter)|776,356,168|93|
|DefineProperties (setter & enumerable=false)|7,994,762|95|
|DefineProperties (setter & enumerable=false & configurable=false)|7,936,458|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,309,318|92|
|Using replaceAll()|2,150,690|94|
|Using replaceAll(//g)|2,069,984|95|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,363,663|92|
|{ ...object, __proto__: null }|15,493,035|90|
|{ ...object, newProp: true }|558,809|81|
|structuredClone|181,814|93|
|JSON.parse + JSON.stringify|146,185|94|
|loop + object.keys starting with {}|346,514|91|
|loop + object.keys starting with { __proto__: null }|493,652|90|
|loop + object.keys starting with { randomProp: true }|357,631|91|
|object.keys + reduce(FN, {})|343,650|94|
|object.keys + reduce(FN, { __proto__: null })|489,832|95|
|object.keys + reduce(FN, { newProp: true })|352,038|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,445|96|
|Sort using first char|869,752|90|
|Sort using localeCompare|792,446|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,331|94|
|{...smallObject} - Total keys: 2|70,574,396|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,394|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,854|95|
|{ ...bigObject, ...anotherBigObject }|837|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,368,939|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,416,849|97|
|{ ...smallObject, ...anotherSmallObject }|16,184,794|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,723 ops/sec ±0.92% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 412 ops/sec ±5.52% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,413 ops/sec ±0.61% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 974 ops/sec ±28.32% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,152,328|94|
|Using backtick (`)|774,100,805|95|
|Using array.join|7,492,663|92|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|773,658,756|93|
|Using indexof|776,487,825|91|
|Using RegExp.test|12,600,822|93|
|Using RegExp.text with cached regex pattern|13,452,483|94|
|Using new RegExp.test|3,347,086|95|
|Using new RegExp.test with cached regex pattern|3,567,737|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|170,550,203|93|
|Using this|209,670,777|90|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,659,949|95|
|Date.now()|1,859,804|97|
