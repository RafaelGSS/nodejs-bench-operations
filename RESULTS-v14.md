# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.21.1`
* __Run:__ Sat Dec 24 2022 18:48:47 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|371|81|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|277,600|90|
|[True conditional] Using constructor name|271,095|84|
|[True conditional] Check if property is valid then instanceof |270,162|83|
|[False conditional] Using instanceof only|713,938,107|97|
|[False conditional] Using constructor name|713,506,393|97|
|[False conditional] Check if property is valid then instanceof |714,944,161|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,152|83|
|Intl.DateTimeFormat().format(new Date())|7,888|84|
|Reusing Intl.DateTimeFormat()|443,287|89|
|Format using date.get*|3,442,627|94|
|new Date() (Baseline)|6,556,651|95|
|Date.now() (Baseline)|14,221,860|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|718,264|99|
|Using brackets {}|740,069|97|
|Using '' + |739,295|95|
|Using date.toString()|796,822|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,446,834|94|
|Using undefined assignment|712,670,291|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|271,896|87|
|NodeError|271,825|89|
|NodeError Range|265,339|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,338,638|95|
|Function returning explicitly undefined|1,291,246|97|
|Function returning implicitly undefined|1,298,388|92|
|Function returning string|1,330,977|96|
|Function returning integer|1,350,171|95|
|Function returning float|1,333,732|97|
|Function returning functions|1,312,659|98|
|Function returning arrow functions|1,319,366|96|
|Function returning empty object|1,337,711|96|
|Function returning empty array|1,334,788|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|713,487,515|97|
|using Array.includes (first item)|712,578,294|96|
|Using raw comparison|713,615,882|96|
|Using raw comparison (first item)|714,003,273|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,225,704|92|
|Using Object.getOwnPropertyNames()|56,066,004|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|710,583,550|97|
|Length = 10_000 - Array[length - 1]|712,661,862|99|
|Length = 1_000_000 - Array[length - 1]|710,657,494|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,949,944|92|
|Object.create({})|1,326,644|79|
|Cached Empty.prototype|712,867,274|96|
|Empty.prototype|1,339,164|75|
|Empty class|907,997|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,327,992|97|
|Using optional chain (obj.field?.field2) (undefined)|714,266,180|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,035,311|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,328,110|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|175,065,905|94|
|Using parseInt(x, 10) - big number (10 len)|12,061,428|93|
|Using + - small number (2 len)|715,286,651|96|
|Using + - big number (10 len)|713,807,006|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|717,996|76|
|Using ? operator to avoid rejection|767,274|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,600,326|96|
|Raw usage underscore usage|7,144,947|96|
|Manipulating private properties using #|2,540,064|96|
|Manipulating private properties using underscore(_)|705,653,831|98|
|Manipulating private properties using Symbol|704,157,791|98|
|Manipulating private properties using PrivateSymbol|30,575,141|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,985,808|94|
|Adding property in the object creation - small object|1,991,913|97|
|Adding property after the function creation - small class|171,418|88|
|Adding property in the function creation - small class|171,249|85|
|Adding property after the class creation - small class|148,245|84|
|Adding property in the class creation - small class|147,127|84|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,087|97|
|Sort using first char|835,507|96|
|Sort using localeCompare|433,154|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,280|94|
|{...smallObject} - Total keys: 2|55,906,991|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,370|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,661|98|
|{ ...bigObject, ...anotherBigObject }|803|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,865,394|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,463,613|99|
|{ ...smallObject, ...anotherSmallObject }|13,824,905|94|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|713,663,429|94|
|Using backtick (`)|714,651,612|96|
|Using array.join|7,242,593|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,677,362|97|
|Using this|134,383,320|97|
