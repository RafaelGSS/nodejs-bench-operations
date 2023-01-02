# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.11.0`
* __Run:__ Mon Jan 02 2023 17:44:00 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.015ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.039ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.076ms 
    new Array(length): 0.035ms (faster)

 10,000 numbers:
           array.push: 0.622ms 
    new Array(length): 0.256ms (faster)

 1,000,000 numbers:
           array.push: 62.129ms 
    new Array(length): 8.481ms (faster)

 100,000,000 numbers:
           array.push: 2,130.675ms (faster)
    new Array(length): 5,544.287ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.134ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.07ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.749ms 
    new Array(length): 0.42ms (faster)

 1,000,000 strings:
           array.push: 363.183ms 
    new Array(length): 9.901ms (faster)

 100,000,000 strings:
           array.push: 2,873.9ms (faster)
    new Array(length): 6,188.593ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|325|79|
|Array.from|13|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|147,463|49|
|[True conditional] Using constructor name|116,210|86|
|[True conditional] Check if property is valid then instanceof |115,159|89|
|[False conditional] Using instanceof only|655,830,184|90|
|[False conditional] Using constructor name|657,736,929|91|
|[False conditional] Check if property is valid then instanceof |653,540,114|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,575|85|
|Intl.DateTimeFormat().format(new Date())|5,718|80|
|Reusing Intl.DateTimeFormat()|412,963|88|
|Format using date.get*|2,542,647|77|
|new Date() (Baseline)|6,296,300|89|
|Date.now() (Baseline)|13,320,000|87|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|577,283|84|
|Using brackets {}|593,535|89|
|Using '' + |592,726|88|
|Using date.toString()|632,959|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,074,050|90|
|Using undefined assignment|695,318,184|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|144,634|52|
|NodeError|110,811|87|
|NodeError Range|115,755|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,144,434|88|
|Function returning explicitly undefined|1,079,891|89|
|Function returning implicitly undefined|1,101,035|88|
|Function returning string|1,125,805|80|
|Function returning integer|1,124,652|88|
|Function returning float|1,129,858|88|
|Function returning functions|1,076,089|86|
|Function returning arrow functions|1,148,341|81|
|Function returning empty object|1,180,170|89|
|Function returning empty array|1,209,807|88|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|685,068,010|91|
|using Array.includes (first item)|688,859,466|90|
|Using raw comparison|692,505,973|92|
|Using raw comparison (first item)|690,487,116|86|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,817,802|87|
|Using Object.getOwnPropertyNames()|49,580,580|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,116,296|89|
|Length = 10_000 - Array.at|16,122,386|87|
|Length = 1_000_000 - Array.at|16,175,269|89|
|Length = 100 - Array[length - 1]|689,995,542|88|
|Length = 10_000 - Array[length - 1]|691,169,339|91|
|Length = 1_000_000 - Array[length - 1]|685,564,388|88|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,571,992|89|
|Object.create({})|830,627|71|
|Cached Empty.prototype|689,493,998|93|
|Empty.prototype|870,220|74|
|Empty class|628,290|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|695,861,099|90|
|Using optional chain (obj.field?.field2) (undefined)|681,989,841|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|682,964,138|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|683,058,850|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|164,308,788|92|
|Using parseInt(x, 10) - big number (10 len)|12,533,561|87|
|Using + - small number (2 len)|697,200,581|88|
|Using + - big number (10 len)|690,041,402|91|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|473,245|71|
|Using ? operator to avoid rejection|514,726|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|140,308,183|88|
|Raw usage underscore usage|136,600,271|85|
|Manipulating private properties using #|91,127,538|82|
|Manipulating private properties using underscore(_)|74,045,016|87|
|Manipulating private properties using Symbol|72,614,970|86|
|Manipulating private properties using PrivateSymbol|28,970,453|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,179,602|91|
|Adding property in the object creation - small object|2,124,041|85|
|Adding property after the function creation - small class|120,472|77|
|Adding property in the function creation - small class|121,509|79|
|Adding property after the class creation - small class|98,682|77|
|Adding property in the class creation - small class|100,095|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,881,580|91|
|Using replaceAll()|1,772,394|89|
|Using replaceAll(//g)|1,643,031|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|155,228|86|
|Sort using first char|688,336|88|
|Sort using localeCompare|650,883|88|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,120|87|
|{...smallObject} - Total keys: 2|54,764,352|84|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,155|88|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,148|90|
|{ ...bigObject, ...anotherBigObject }|720|88|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,146,093|84|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,033,279|89|
|{ ...smallObject, ...anotherSmallObject }|12,823,044|86|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,231 ops/sec ±20.75% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 338 ops/sec ±1.78% (79 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,743 ops/sec ±1.54% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 839 ops/sec ±16.34% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|636,736,793|91|
|Using backtick (`)|687,690,653|92|
|Using array.join|6,113,079|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,050,666|85|
|Using this|152,697,498|87|
