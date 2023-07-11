# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Tue Jul 11 2023 21:04:38 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|771,162,185|94|
|Using dot notation|769,122,261|93|
|Using define property (writable)|3,155,608|96|
|Using define property initialized (writable)|3,879,606|89|
|Using define property (getter)|1,675,890|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.011ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.417ms
new Array(length)|10,000|0.223ms
array.push|1,000,000|32.941ms
new Array(length)|1,000,000|20.506ms
array.push|100,000,000|2,483.036ms
new Array(length)|100,000,000|5,160.867ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.108ms
new Array(length)|100|0.011ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.613ms
new Array(length)|10,000|4.048ms
array.push|1,000,000|303.961ms
new Array(length)|1,000,000|6.137ms
array.push|100,000,000|3,159.019ms
new Array(length)|100,000,000|5,712.504ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|198|82|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|190,029|53|
|[True conditional] Using constructor name|145,824|93|
|[True conditional] Check if property is valid then instanceof |146,947|90|
|[False conditional] Using instanceof only|771,342,965|93|
|[False conditional] Using constructor name|771,703,999|93|
|[False conditional] Check if property is valid then instanceof |770,256,704|94|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,625|93|
|crypto.verify('RSA-SHA256')|1,632|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|926,705|96|
|fromUnixToISOString(new Date())|796,941|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,983|87|
|Intl.DateTimeFormat().format(new Date())|7,520|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,277|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,410|94|
|Reusing Intl.DateTimeFormat()|334,729|82|
|Date.toLocaleDateString()|420,483|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,123|89|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|533,533|91|
|Using brackets {}|539,881|95|
|Using '' + |540,410|94|
|Using date.toString()|559,023|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,475,968|93|
|Using undefined assignment|770,085,843|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|185,710|53|
|NodeError|142,204|92|
|NodeError Range|142,360|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,499,241|93|
|Function returning explicitly undefined|1,480,304|91|
|Function returning implicitly undefined|1,512,596|88|
|Function returning string|1,483,032|95|
|Function returning integer|1,525,163|91|
|Function returning float|1,517,524|95|
|Function returning functions|1,454,436|94|
|Function returning arrow functions|1,491,457|93|
|Function returning empty object|1,508,172|95|
|Function returning empty array|1,507,453|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|76,278,554|95|
|using Array.includes (first item)|146,343,473|96|
|Using raw comparison|770,249,540|93|
|Using raw comparison (first item)|768,835,177|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,141,227|93|
|Using Object.getOwnPropertyNames()|51,930,480|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,733,180|96|
|Length = 10_000 - Array.at|18,711,030|96|
|Length = 1_000_000 - Array.at|18,698,700|94|
|Length = 100 - Array[length - 1]|769,576,093|91|
|Length = 10_000 - Array[length - 1]|768,190,398|91|
|Length = 1_000_000 - Array[length - 1]|768,618,809|90|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,867,843|92|
|Object.create({})|1,429,316|85|
|Cached Empty.prototype|768,481,799|94|
|Empty.prototype|1,499,086|79|
|Empty class|998,841|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,774,211|93|
|Using optional chain (obj.field?.field2) (undefined)|771,153,150|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|770,318,561|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|771,032,175|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,334,457|96|
|Using parseInt(x, 10) - big number (10 len)|14,832,142|95|
|Using + - small number (2 len)|770,375,405|93|
|Using + - big number (10 len)|768,183,794|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|805,985|77|
|Using ? operator to avoid rejection|867,773|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|165,299,206|92|
|Raw usage underscore usage|153,558,300|86|
|Manipulating private properties using #|107,456,561|88|
|Manipulating private properties using underscore(_)|83,477,911|95|
|Manipulating private properties using Symbol|83,394,182|92|
|Manipulating private properties using PrivateSymbol|35,124,940|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,554,083|96|
|Adding property in the object creation - small object|2,547,373|96|
|Adding property after the function creation - small class|186,639|85|
|Adding property in the function creation - small class|186,411|87|
|Adding property after the class creation - small class|150,126|82|
|Adding property in the class creation - small class|153,153|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|770,966,877|89|
|Getter|68,135,389|93|
|Method|771,014,634|92|
|DefineProperty (getter)|769,218,757|91|
|DefineProperty (getter & enumerable=false)|68,128,112|93|
|DefineProperty (getter & configurable=false)|770,423,926|94|
|DefineProperty (getter & enumerable=false & configurable=false)|68,000,585|91|
|DefineProperty (writable)|767,644,654|91|
|DefineProperty (writable & enumerable=false)|769,988,162|95|
|DefineProperty (writable & enumerable=false & configurable=false)|770,861,151|92|
|DefineProperties (getter)|48,722,459|71|
|DefineProperties (getter & enumerable=false)|68,247,017|95|
|DefineProperties (getter & enumerable=false & configurable=false)|68,115,042|92|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|767,862,807|94|
|Setter|7,488,629|94|
|Method|766,995,101|95|
|DefineProperty (setter)|765,942,804|95|
|DefineProperty (setter & enumerable=false)|7,339,430|97|
|DefineProperty (setter & configurable=false)|7,381,419|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,252,589|97|
|DefineProperty (writable)|767,839,581|95|
|DefineProperty (writable & enumerable=false)|711,027,800|93|
|DefineProperty (writable & enumerable=false & configurable=false)|99,456,720|83|
|DefineProperties (setter)|84,552,292|82|
|DefineProperties (setter & enumerable=false)|7,340,176|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,420,869|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,440,027|92|
|Using replaceAll()|2,173,218|93|
|Using replaceAll(//g)|2,138,956|94|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,353,009|91|
|{ ...object, __proto__: null }|18,748,450|94|
|{ ...object, newProp: true }|553,644|85|
|structuredClone|186,102|96|
|JSON.parse + JSON.stringify|148,421|93|
|loop + object.keys starting with {}|343,531|92|
|loop + object.keys starting with { __proto__: null }|477,204|97|
|loop + object.keys starting with { randomProp: true }|367,380|92|
|object.keys + reduce(FN, {})|352,216|97|
|object.keys + reduce(FN, { __proto__: null })|474,189|95|
|object.keys + reduce(FN, { newProp: true })|364,418|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,741|95|
|Sort using first char|850,901|94|
|Sort using localeCompare|762,616|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,388|94|
|{...smallObject} - Total keys: 2|69,297,631|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,436|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,905|95|
|{ ...bigObject, ...anotherBigObject }|868|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,855,962|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,218,763|95|
|{ ...smallObject, ...anotherSmallObject }|16,092,856|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,771 ops/sec ±1.05% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 429 ops/sec ±0.41% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,115 ops/sec ±0.50% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 878 ops/sec ±14.31% (64 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|770,379,269|92|
|Using backtick (`)|771,232,879|91|
|Using array.join|6,885,697|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,046,204|97|
|Using indexof|769,725,682|94|
|Using RegExp.test|11,690,608|96|
|Using RegExp.text with cached regex pattern|12,450,540|95|
|Using new RegExp.test|3,170,053|90|
|Using new RegExp.test with cached regex pattern|3,531,619|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,110,829|93|
|Using this|185,257,401|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,594,933|95|
|Date.now()|1,825,280|95|
