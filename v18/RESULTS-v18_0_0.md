# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Sun Feb 26 2023 16:05:06 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|774,056,703|98|
|Using dot notation|770,557,344|95|
|Using define property (writable)|3,711,021|95|
|Using define property initialized (writable)|4,688,352|94|
|Using define property (getter)|1,745,184|88|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.004ms
array.push|100|0.032ms
new Array(length)|100|0.012ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.337ms
new Array(length)|10,000|0.183ms
array.push|1,000,000|29.453ms
new Array(length)|1,000,000|19.397ms
array.push|100,000,000|2,109.85ms
new Array(length)|100,000,000|5,144.701ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.017ms
array.push|100|0.115ms
new Array(length)|100|0.011ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.565ms
new Array(length)|10,000|4.475ms
array.push|1,000,000|288.375ms
new Array(length)|1,000,000|4.856ms
array.push|100,000,000|2,795.756ms
new Array(length)|100,000,000|5,471.55ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|293|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|190,749|55|
|[True conditional] Using constructor name|150,951|93|
|[True conditional] Check if property is valid then instanceof |153,286|92|
|[False conditional] Using instanceof only|773,839,849|91|
|[False conditional] Using constructor name|773,393,824|95|
|[False conditional] Check if property is valid then instanceof |773,588,545|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,003,990|92|
|fromUnixToISOString(new Date())|1,587,494|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,639|77|
|Intl.DateTimeFormat().format(new Date())|7,601|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,208|63|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,488|91|
|Reusing Intl.DateTimeFormat()|566,071|92|
|Date.toLocaleDateString()|579,169|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,485|76|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|638,382|93|
|Using brackets {}|642,575|90|
|Using '' + |642,099|94|
|Using date.toString()|691,136|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,334,129|93|
|Using undefined assignment|770,571,014|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|189,160|53|
|NodeError|149,558|94|
|NodeError Range|149,107|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,415,524|95|
|Function returning explicitly undefined|1,406,808|92|
|Function returning implicitly undefined|1,447,396|94|
|Function returning string|1,402,980|90|
|Function returning integer|1,428,914|95|
|Function returning float|1,419,341|95|
|Function returning functions|1,355,433|89|
|Function returning arrow functions|1,370,827|94|
|Function returning empty object|1,369,604|90|
|Function returning empty array|1,419,964|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|98,235,164|94|
|using Array.includes (first item)|108,184,992|91|
|Using raw comparison|771,945,666|96|
|Using raw comparison (first item)|770,942,668|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,314,822|93|
|Using Object.getOwnPropertyNames()|57,231,393|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,252,814|90|
|Length = 10_000 - Array.at|17,440,046|92|
|Length = 1_000_000 - Array.at|18,374,172|95|
|Length = 100 - Array[length - 1]|771,783,349|90|
|Length = 10_000 - Array[length - 1]|770,975,120|93|
|Length = 1_000_000 - Array[length - 1]|770,086,509|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,833,753|87|
|Object.create({})|1,325,887|87|
|Cached Empty.prototype|772,870,146|98|
|Empty.prototype|1,347,575|81|
|Empty class|959,579|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|773,598,672|96|
|Using optional chain (obj.field?.field2) (undefined)|772,560,352|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|771,148,476|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|770,318,294|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|226,811,893|96|
|Using parseInt(x, 10) - big number (10 len)|12,679,278|95|
|Using + - small number (2 len)|773,374,751|96|
|Using + - big number (10 len)|772,532,320|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|778,492|77|
|Using ? operator to avoid rejection|799,706|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|221,504,753|87|
|Raw usage underscore usage|237,080,346|92|
|Manipulating private properties using #|202,056,751|90|
|Manipulating private properties using underscore(_)|194,886,175|88|
|Manipulating private properties using Symbol|177,403,972|86|
|Manipulating private properties using PrivateSymbol|21,944,582|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,913,738|96|
|Adding property in the object creation - small object|2,918,197|94|
|Adding property after the function creation - small class|187,875|85|
|Adding property in the function creation - small class|192,272|86|
|Adding property after the class creation - small class|160,271|80|
|Adding property in the class creation - small class|162,015|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|774,609,265|97|
|Getter|84,701,834|94|
|Method|771,029,704|95|
|DefineProperty (getter)|772,357,692|96|
|DefineProperty (getter & enumerable=false)|84,432,310|97|
|DefineProperty (getter & configurable=false)|772,328,051|95|
|DefineProperty (getter & enumerable=false & configurable=false)|83,875,191|97|
|DefineProperty (writable)|772,653,930|92|
|DefineProperty (writable & enumerable=false)|772,616,073|95|
|DefineProperty (writable & enumerable=false & configurable=false)|218,498,382|30|
|DefineProperties (getter)|52,133,860|91|
|DefineProperties (getter & enumerable=false)|53,272,400|91|
|DefineProperties (getter & enumerable=false & configurable=false)|83,200,465|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|734,898,637|95|
|Setter|8,175,470|92|
|Method|736,241,639|92|
|DefineProperty (setter)|736,283,215|94|
|DefineProperty (setter & enumerable=false)|8,123,769|94|
|DefineProperty (setter & configurable=false)|8,123,793|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,058,254|96|
|DefineProperty (writable)|769,145,750|96|
|DefineProperty (writable & enumerable=false)|770,980,261|95|
|DefineProperty (writable & enumerable=false & configurable=false)|769,342,508|92|
|DefineProperties (setter)|188,735,734|26|
|DefineProperties (setter & enumerable=false)|7,672,142|93|
|DefineProperties (setter & enumerable=false & configurable=false)|8,075,467|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,681,752|89|
|Using replaceAll()|2,635,433|95|
|Using replaceAll(//g)|2,452,392|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,991|90|
|Sort using first char|844,027|93|
|Sort using localeCompare|816,759|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,576|90|
|{...smallObject} - Total keys: 2|57,009,388|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,517|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,185|93|
|{ ...bigObject, ...anotherBigObject }|939|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,250,311|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,784,701|95|
|{ ...smallObject, ...anotherSmallObject }|15,992,975|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,860 ops/sec ±0.97% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 466 ops/sec ±0.68% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,726 ops/sec ±0.48% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 962 ops/sec ±28.33% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|773,089,718|96|
|Using backtick (`)|771,092,210|97|
|Using array.join|7,592,494|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,358,202|86|
|Using this|149,143,714|90|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,614,101|94|
|Date.now()|15,527,807|92|
