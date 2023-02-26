# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.5.0`
* __Run:__ Sun Feb 26 2023 15:39:26 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|777,230,700|95|
|Using dot notation|775,811,267|94|
|Using define property (writable)|3,522,724|89|
|Using define property initialized (writable)|4,669,748|93|
|Using define property (getter)|1,852,495|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.014ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.466ms
new Array(length)|10,000|0.493ms
array.push|1,000,000|29.087ms
new Array(length)|1,000,000|6.498ms
array.push|100,000,000|2,411.032ms
new Array(length)|100,000,000|5,850.777ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.018ms
array.push|100|0.019ms
new Array(length)|100|0.011ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.046ms
array.push|10,000|0.699ms
new Array(length)|10,000|0.327ms
array.push|1,000,000|29.747ms
new Array(length)|1,000,000|9.484ms
array.push|100,000,000|2,571.585ms
new Array(length)|100,000,000|5,679.555ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|189,944|49|
|[True conditional] Using constructor name|149,912|92|
|[True conditional] Check if property is valid then instanceof |153,312|94|
|[False conditional] Using instanceof only|778,774,053|95|
|[False conditional] Using constructor name|775,103,229|94|
|[False conditional] Check if property is valid then instanceof |778,619,195|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,066,118|95|
|fromUnixToISOString(new Date())|1,674,099|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,155|80|
|Intl.DateTimeFormat().format(new Date())|7,717|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,489|66|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,334|78|
|Reusing Intl.DateTimeFormat()|569,896|92|
|Date.toLocaleDateString()|596,141|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,803|73|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|681,591|95|
|Using brackets {}|679,585|91|
|Using '' + |686,634|93|
|Using date.toString()|722,182|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,410,676|93|
|Using undefined assignment|775,783,110|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|184,797|50|
|NodeError|149,711|95|
|NodeError Range|149,844|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,360,055|91|
|Function returning explicitly undefined|1,343,932|92|
|Function returning implicitly undefined|1,387,532|90|
|Function returning string|1,380,550|96|
|Function returning integer|1,344,711|92|
|Function returning float|1,357,914|93|
|Function returning functions|1,318,103|93|
|Function returning arrow functions|1,348,233|94|
|Function returning empty object|1,375,484|92|
|Function returning empty array|1,378,077|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|773,730,617|97|
|using Array.includes (first item)|774,395,312|93|
|Using raw comparison|778,507,427|96|
|Using raw comparison (first item)|778,069,670|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,186,458|90|
|Using Object.getOwnPropertyNames()|58,262,745|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|851,431,395|97|
|Length = 10_000 - Array.at|852,146,410|93|
|Length = 1_000_000 - Array.at|853,294,090|88|
|Length = 100 - Array[length - 1]|776,897,156|97|
|Length = 10_000 - Array[length - 1]|775,942,694|95|
|Length = 1_000_000 - Array[length - 1]|773,909,718|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,847,087|90|
|Object.create({})|1,485,387|79|
|Cached Empty.prototype|777,808,570|93|
|Empty.prototype|1,479,380|78|
|Empty class|1,069,954|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|777,719,074|97|
|Using optional chain (obj.field?.field2) (undefined)|777,295,266|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|777,761,056|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,847,176|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|228,630,429|93|
|Using parseInt(x, 10) - big number (10 len)|13,150,240|92|
|Using + - small number (2 len)|779,704,826|94|
|Using + - big number (10 len)|779,219,884|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|838,171|77|
|Using ? operator to avoid rejection|854,518|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|773,427,448|95|
|Raw usage underscore usage|771,809,099|96|
|Manipulating private properties using #|763,504,473|96|
|Manipulating private properties using underscore(_)|762,509,700|92|
|Manipulating private properties using Symbol|763,570,675|96|
|Manipulating private properties using PrivateSymbol|22,274,184|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,102,600|95|
|Adding property in the object creation - small object|3,109,872|93|
|Adding property after the function creation - small class|201,398|83|
|Adding property in the function creation - small class|204,749|86|
|Adding property after the class creation - small class|168,259|80|
|Adding property in the class creation - small class|167,801|80|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|777,490,198|95|
|Getter|79,987,851|96|
|Method|778,182,196|95|
|DefineProperty (getter)|777,902,235|96|
|DefineProperty (getter & enumerable=false)|80,055,526|89|
|DefineProperty (getter & configurable=false)|777,822,509|94|
|DefineProperty (getter & enumerable=false & configurable=false)|80,091,557|94|
|DefineProperty (writable)|777,110,912|94|
|DefineProperty (writable & enumerable=false)|544,491,255|73|
|DefineProperty (writable & enumerable=false & configurable=false)|111,740,052|78|
|DefineProperties (getter)|48,689,587|90|
|DefineProperties (getter & enumerable=false)|80,094,302|97|
|DefineProperties (getter & enumerable=false & configurable=false)|80,128,058|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|739,549,135|96|
|Setter|8,919,381|95|
|Method|740,616,088|96|
|DefineProperty (setter)|739,936,115|94|
|DefineProperty (setter & enumerable=false)|8,786,105|93|
|DefineProperty (setter & configurable=false)|8,906,237|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,861,950|94|
|DefineProperty (writable)|778,218,180|97|
|DefineProperty (writable & enumerable=false)|777,373,547|93|
|DefineProperty (writable & enumerable=false & configurable=false)|776,399,595|96|
|DefineProperties (setter)|775,319,403|97|
|DefineProperties (setter & enumerable=false)|8,872,074|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,609,945|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,705,595|92|
|Using replaceAll()|2,306,810|91|
|Using replaceAll(//g)|2,490,673|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,852|93|
|Sort using first char|921,593|91|
|Sort using localeCompare|872,813|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,517|89|
|{...smallObject} - Total keys: 2|58,156,532|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,574|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,381|94|
|{ ...bigObject, ...anotherBigObject }|953|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,389,043|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,955,428|93|
|{ ...smallObject, ...anotherSmallObject }|16,380,594|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,799 ops/sec ±0.96% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 465 ops/sec ±0.81% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,197 ops/sec ±0.50% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 929 ops/sec ±11.89% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|777,322,044|97|
|Using backtick (`)|778,019,028|97|
|Using array.join|7,821,937|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,797,091|93|
|Using this|160,770,567|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,555,538|89|
|Date.now()|15,737,550|94|
