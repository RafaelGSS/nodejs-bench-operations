# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v18.15.0`
* __Run:__ Tue Jul 11 2023 20:50:00 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|767,244,253|95|
|Using dot notation|767,562,445|96|
|Using define property (writable)|3,010,295|96|
|Using define property initialized (writable)|3,841,929|93|
|Using define property (getter)|1,639,309|87|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.03ms
new Array(length)|100|0.011ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.517ms
new Array(length)|10,000|0.223ms
array.push|1,000,000|31.956ms
new Array(length)|1,000,000|19.012ms
array.push|100,000,000|2,479.997ms
new Array(length)|100,000,000|5,178.453ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.026ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.725ms
new Array(length)|10,000|4.403ms
array.push|1,000,000|331.77ms
new Array(length)|1,000,000|5.994ms
array.push|100,000,000|3,122.973ms
new Array(length)|100,000,000|5,740.884ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|207|81|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,603|54|
|[True conditional] Using constructor name|144,821|91|
|[True conditional] Check if property is valid then instanceof |146,121|91|
|[False conditional] Using instanceof only|769,495,837|94|
|[False conditional] Using constructor name|768,651,708|91|
|[False conditional] Check if property is valid then instanceof |771,709,456|94|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,049|89|
|crypto.verify('RSA-SHA256')|3,974|90|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|933,078|96|
|fromUnixToISOString(new Date())|805,526|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,902|89|
|Intl.DateTimeFormat().format(new Date())|7,528|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,091|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,357|91|
|Reusing Intl.DateTimeFormat()|342,692|84|
|Date.toLocaleDateString()|406,417|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,100|89|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|537,847|94|
|Using brackets {}|542,933|90|
|Using '' + |541,498|96|
|Using date.toString()|559,998|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,407,717|93|
|Using undefined assignment|768,589,117|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|184,504|55|
|NodeError|143,902|92|
|NodeError Range|142,615|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,455,109|94|
|Function returning explicitly undefined|1,439,696|94|
|Function returning implicitly undefined|1,489,007|90|
|Function returning string|1,465,403|96|
|Function returning integer|1,489,380|93|
|Function returning float|1,474,899|96|
|Function returning functions|1,420,973|94|
|Function returning arrow functions|1,440,335|96|
|Function returning empty object|1,467,517|93|
|Function returning empty array|1,435,784|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|769,162,064|93|
|using Array.includes (first item)|767,246,366|93|
|Using raw comparison|770,116,918|93|
|Using raw comparison (first item)|769,448,365|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,349,286|91|
|Using Object.getOwnPropertyNames()|55,040,747|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,435,675|93|
|Length = 10_000 - Array.at|19,452,697|97|
|Length = 1_000_000 - Array.at|19,320,621|95|
|Length = 100 - Array[length - 1]|767,188,185|93|
|Length = 10_000 - Array[length - 1]|765,427,360|90|
|Length = 1_000_000 - Array[length - 1]|766,577,844|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,815,377|91|
|Object.create({})|1,074,395|83|
|Cached Empty.prototype|770,314,711|94|
|Empty.prototype|1,154,553|79|
|Empty class|782,021|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|770,069,600|93|
|Using optional chain (obj.field?.field2) (undefined)|769,754,641|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|768,677,898|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|768,219,798|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|191,550,596|96|
|Using parseInt(x, 10) - big number (10 len)|15,226,829|90|
|Using + - small number (2 len)|772,777,674|89|
|Using + - big number (10 len)|769,355,688|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|610,094|78|
|Using ? operator to avoid rejection|645,023|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|162,659,621|93|
|Raw usage underscore usage|154,874,236|91|
|Manipulating private properties using #|107,613,081|78|
|Manipulating private properties using underscore(_)|86,493,172|90|
|Manipulating private properties using Symbol|86,013,155|91|
|Manipulating private properties using PrivateSymbol|34,642,840|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,616,040|95|
|Adding property in the object creation - small object|2,626,586|97|
|Adding property after the function creation - small class|155,871|86|
|Adding property in the function creation - small class|154,909|86|
|Adding property after the class creation - small class|126,451|83|
|Adding property in the class creation - small class|127,777|81|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|770,237,855|95|
|Getter|66,450,012|93|
|Method|769,616,004|95|
|DefineProperty (getter)|767,942,594|90|
|DefineProperty (getter & enumerable=false)|64,667,483|92|
|DefineProperty (getter & configurable=false)|770,997,313|94|
|DefineProperty (getter & enumerable=false & configurable=false)|66,653,933|96|
|DefineProperty (writable)|769,708,607|91|
|DefineProperty (writable & enumerable=false)|644,791,628|81|
|DefineProperty (writable & enumerable=false & configurable=false)|103,688,800|84|
|DefineProperties (getter)|43,069,122|89|
|DefineProperties (getter & enumerable=false)|66,634,623|94|
|DefineProperties (getter & enumerable=false & configurable=false)|66,170,022|94|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|764,973,801|93|
|Setter|7,749,415|95|
|Method|765,575,083|93|
|DefineProperty (setter)|766,462,821|96|
|DefineProperty (setter & enumerable=false)|7,854,274|94|
|DefineProperty (setter & configurable=false)|7,772,294|94|
|DefineProperty (setter & enumerable=false & configurable=false)|7,617,494|95|
|DefineProperty (writable)|767,023,847|88|
|DefineProperty (writable & enumerable=false)|769,759,213|93|
|DefineProperty (writable & enumerable=false & configurable=false)|169,357,672|23|
|DefineProperties (setter)|77,257,311|84|
|DefineProperties (setter & enumerable=false)|6,945,761|93|
|DefineProperties (setter & enumerable=false & configurable=false)|7,638,123|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,203,713|88|
|Using replaceAll()|2,088,115|92|
|Using replaceAll(//g)|1,995,499|93|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,186,436|89|
|{ ...object, __proto__: null }|18,803,495|94|
|{ ...object, newProp: true }|526,407|83|
|structuredClone|190,320|92|
|JSON.parse + JSON.stringify|146,354|95|
|loop + object.keys starting with {}|335,000|94|
|loop + object.keys starting with { __proto__: null }|465,390|90|
|loop + object.keys starting with { randomProp: true }|348,381|94|
|object.keys + reduce(FN, {})|333,032|93|
|object.keys + reduce(FN, { __proto__: null })|458,369|88|
|object.keys + reduce(FN, { newProp: true })|349,468|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,856|89|
|Sort using first char|861,841|94|
|Sort using localeCompare|781,678|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,358|95|
|{...smallObject} - Total keys: 2|68,007,328|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,399|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,837|95|
|{ ...bigObject, ...anotherBigObject }|850|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,903,632|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,709,514|96|
|{ ...smallObject, ...anotherSmallObject }|16,568,451|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,599 ops/sec ±16.18% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 440 ops/sec ±0.59% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,497 ops/sec ±0.64% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 923 ops/sec ±13.52% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|768,787,884|92|
|Using backtick (`)|768,647,217|95|
|Using array.join|7,151,563|93|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|771,066,644|91|
|Using indexof|771,326,178|93|
|Using RegExp.test|12,238,130|94|
|Using RegExp.text with cached regex pattern|13,044,190|97|
|Using new RegExp.test|3,261,374|94|
|Using new RegExp.test with cached regex pattern|3,712,732|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|165,971,832|93|
|Using this|174,333,791|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,575,904|94|
|Date.now()|1,816,468|98|
