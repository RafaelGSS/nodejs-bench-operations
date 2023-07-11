# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v18.14.2`
* __Run:__ Tue Jul 11 2023 20:35:20 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|769,270,616|91|
|Using dot notation|768,285,780|95|
|Using define property (writable)|3,050,112|94|
|Using define property initialized (writable)|3,904,785|92|
|Using define property (getter)|1,674,226|86|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.009ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.543ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|40.867ms
new Array(length)|1,000,000|7.579ms
array.push|100,000,000|2,541.529ms
new Array(length)|100,000,000|5,179.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.052ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.663ms
new Array(length)|10,000|4.075ms
array.push|1,000,000|303.068ms
new Array(length)|1,000,000|5.939ms
array.push|100,000,000|3,177.387ms
new Array(length)|100,000,000|5,706.636ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|197|82|
|Array.from|16|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,306|54|
|[True conditional] Using constructor name|141,318|94|
|[True conditional] Check if property is valid then instanceof |143,053|94|
|[False conditional] Using instanceof only|769,053,753|91|
|[False conditional] Using constructor name|769,447,889|96|
|[False conditional] Check if property is valid then instanceof |769,343,763|94|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,064|87|
|crypto.verify('RSA-SHA256')|4,115|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|912,032|93|
|fromUnixToISOString(new Date())|792,549|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,018|88|
|Intl.DateTimeFormat().format(new Date())|7,600|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,144|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,426|91|
|Reusing Intl.DateTimeFormat()|349,898|82|
|Date.toLocaleDateString()|390,913|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,157|92|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|543,762|94|
|Using brackets {}|543,161|94|
|Using '' + |539,574|97|
|Using date.toString()|562,160|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,409,509|94|
|Using undefined assignment|770,009,596|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,959|54|
|NodeError|139,591|89|
|NodeError Range|139,085|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,454,569|94|
|Function returning explicitly undefined|1,426,944|95|
|Function returning implicitly undefined|1,464,950|93|
|Function returning string|1,446,876|95|
|Function returning integer|1,471,955|94|
|Function returning float|1,454,608|92|
|Function returning functions|1,391,738|93|
|Function returning arrow functions|1,415,137|93|
|Function returning empty object|1,441,997|89|
|Function returning empty array|1,404,119|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|769,262,214|92|
|using Array.includes (first item)|768,729,472|92|
|Using raw comparison|772,089,667|94|
|Using raw comparison (first item)|771,727,321|91|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,122,009|93|
|Using Object.getOwnPropertyNames()|54,763,049|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,677,115|95|
|Length = 10_000 - Array.at|18,329,223|96|
|Length = 1_000_000 - Array.at|18,710,104|96|
|Length = 100 - Array[length - 1]|769,177,920|96|
|Length = 10_000 - Array[length - 1]|770,008,054|90|
|Length = 1_000_000 - Array[length - 1]|768,320,508|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,098,198|90|
|Object.create({})|1,084,127|81|
|Cached Empty.prototype|771,226,326|95|
|Empty.prototype|1,155,646|81|
|Empty class|805,116|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|769,497,404|94|
|Using optional chain (obj.field?.field2) (undefined)|769,020,518|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|769,632,210|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|770,997,489|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,072,411|94|
|Using parseInt(x, 10) - big number (10 len)|15,404,363|92|
|Using + - small number (2 len)|770,907,207|92|
|Using + - big number (10 len)|770,670,765|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|618,546|75|
|Using ? operator to avoid rejection|652,581|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|162,857,763|93|
|Raw usage underscore usage|156,095,630|91|
|Manipulating private properties using #|106,943,457|85|
|Manipulating private properties using underscore(_)|86,725,324|88|
|Manipulating private properties using Symbol|88,093,363|91|
|Manipulating private properties using PrivateSymbol|34,764,423|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,614,514|96|
|Adding property in the object creation - small object|2,613,394|96|
|Adding property after the function creation - small class|155,565|86|
|Adding property in the function creation - small class|155,109|85|
|Adding property after the class creation - small class|126,081|84|
|Adding property in the class creation - small class|125,886|80|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|769,458,290|91|
|Getter|66,144,217|93|
|Method|769,803,044|93|
|DefineProperty (getter)|771,020,841|96|
|DefineProperty (getter & enumerable=false)|66,500,299|96|
|DefineProperty (getter & configurable=false)|771,512,459|91|
|DefineProperty (getter & enumerable=false & configurable=false)|66,605,970|96|
|DefineProperty (writable)|770,190,058|91|
|DefineProperty (writable & enumerable=false)|769,944,857|95|
|DefineProperty (writable & enumerable=false & configurable=false)|679,019,731|87|
|DefineProperties (getter)|43,368,164|91|
|DefineProperties (getter & enumerable=false)|65,314,600|96|
|DefineProperties (getter & enumerable=false & configurable=false)|66,414,173|93|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|766,116,942|96|
|Setter|8,011,497|97|
|Method|765,559,309|95|
|DefineProperty (setter)|766,490,048|94|
|DefineProperty (setter & enumerable=false)|8,033,600|96|
|DefineProperty (setter & configurable=false)|7,956,688|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,127,409|97|
|DefineProperty (writable)|764,946,485|95|
|DefineProperty (writable & enumerable=false)|766,577,481|93|
|DefineProperty (writable & enumerable=false & configurable=false)|591,147,775|71|
|DefineProperties (setter)|80,076,374|82|
|DefineProperties (setter & enumerable=false)|8,174,514|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,143,664|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,198,881|91|
|Using replaceAll()|2,076,351|94|
|Using replaceAll(//g)|1,980,162|93|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|17,694,355|85|
|{ ...object, __proto__: null }|18,583,925|93|
|{ ...object, newProp: true }|520,524|82|
|structuredClone|188,652|93|
|JSON.parse + JSON.stringify|149,284|94|
|loop + object.keys starting with {}|876,126|95|
|loop + object.keys starting with { __proto__: null }|458,813|94|
|loop + object.keys starting with { randomProp: true }|343,740|92|
|object.keys + reduce(FN, {})|331,565|91|
|object.keys + reduce(FN, { __proto__: null })|463,740|93|
|object.keys + reduce(FN, { newProp: true })|350,744|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|187,860|92|
|Sort using first char|869,352|93|
|Sort using localeCompare|776,716|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,353|94|
|{...smallObject} - Total keys: 2|68,224,475|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,408|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,868|96|
|{ ...bigObject, ...anotherBigObject }|859|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,011,947|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,294,522|97|
|{ ...smallObject, ...anotherSmallObject }|16,695,166|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,649 ops/sec ±0.90% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 396 ops/sec ±1.99% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,493 ops/sec ±0.66% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,036 ops/sec ±28.17% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|768,102,947|96|
|Using backtick (`)|770,429,747|94|
|Using array.join|7,218,183|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|770,960,533|91|
|Using indexof|769,741,044|93|
|Using RegExp.test|12,118,423|93|
|Using RegExp.text with cached regex pattern|13,230,747|94|
|Using new RegExp.test|3,294,249|93|
|Using new RegExp.test with cached regex pattern|3,714,887|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|167,766,554|90|
|Using this|181,611,299|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,594,243|95|
|Date.now()|1,822,992|96|
