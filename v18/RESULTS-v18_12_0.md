# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Mon Jan 02 2023 17:43:57 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.037ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.062ms 
    new Array(length): 0.029ms (faster)

 10,000 numbers:
           array.push: 0.74ms 
    new Array(length): 0.214ms (faster)

 1,000,000 numbers:
           array.push: 40.95ms 
    new Array(length): 23.75ms (faster)

 100,000,000 numbers:
           array.push: 2,132.847ms (faster)
    new Array(length): 5,372.173ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.107ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.052ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.708ms 
    new Array(length): 0.314ms (faster)

 1,000,000 strings:
           array.push: 219.989ms 
    new Array(length): 12.318ms (faster)

 100,000,000 strings:
           array.push: 2,622.391ms (faster)
    new Array(length): 6,086.251ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|79|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|160,121|57|
|[True conditional] Using constructor name|131,700|87|
|[True conditional] Check if property is valid then instanceof |130,549|84|
|[False conditional] Using instanceof only|817,701,083|89|
|[False conditional] Using constructor name|798,736,681|84|
|[False conditional] Check if property is valid then instanceof |832,790,045|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,857|79|
|Intl.DateTimeFormat().format(new Date())|6,435|84|
|Reusing Intl.DateTimeFormat()|431,542|88|
|Format using date.get*|2,817,023|74|
|new Date() (Baseline)|6,914,309|89|
|Date.now() (Baseline)|15,730,958|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|659,626|89|
|Using brackets {}|665,672|90|
|Using '' + |654,215|88|
|Using date.toString()|688,991|83|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,122,417|87|
|Using undefined assignment|799,486,320|86|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|161,826|57|
|NodeError|126,113|87|
|NodeError Range|127,525|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,240,122|88|
|Function returning explicitly undefined|1,230,612|86|
|Function returning implicitly undefined|1,290,677|88|
|Function returning string|1,155,756|85|
|Function returning integer|1,262,982|87|
|Function returning float|1,285,760|86|
|Function returning functions|1,184,846|88|
|Function returning arrow functions|1,208,886|84|
|Function returning empty object|1,279,815|85|
|Function returning empty array|1,271,746|86|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|846,042,173|88|
|using Array.includes (first item)|824,017,050|89|
|Using raw comparison|810,229,412|87|
|Using raw comparison (first item)|789,015,762|87|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,030,296|86|
|Using Object.getOwnPropertyNames()|40,320,001|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,363,273|89|
|Length = 10_000 - Array.at|16,900,755|87|
|Length = 1_000_000 - Array.at|16,824,741|88|
|Length = 100 - Array[length - 1]|809,003,509|84|
|Length = 10_000 - Array[length - 1]|809,950,230|88|
|Length = 1_000_000 - Array[length - 1]|819,916,942|82|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,784,765|85|
|Object.create({})|871,875|74|
|Cached Empty.prototype|857,187,358|88|
|Empty.prototype|893,789|66|
|Empty class|578,171|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|803,255,085|86|
|Using optional chain (obj.field?.field2) (undefined)|810,919,051|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|801,802,833|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|782,821,871|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|165,349,558|86|
|Using parseInt(x, 10) - big number (10 len)|12,540,549|85|
|Using + - small number (2 len)|803,262,716|86|
|Using + - big number (10 len)|804,152,710|86|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|503,250|72|
|Using ? operator to avoid rejection|518,325|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|132,093,046|82|
|Raw usage underscore usage|103,554,911|77|
|Manipulating private properties using #|73,346,426|72|
|Manipulating private properties using underscore(_)|64,910,887|76|
|Manipulating private properties using Symbol|61,489,129|87|
|Manipulating private properties using PrivateSymbol|29,886,711|85|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,315,565|86|
|Adding property in the object creation - small object|2,321,594|87|
|Adding property after the function creation - small class|128,314|79|
|Adding property in the function creation - small class|131,453|78|
|Adding property after the class creation - small class|108,432|77|
|Adding property in the class creation - small class|111,199|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,040,922|86|
|Using replaceAll()|1,766,115|84|
|Using replaceAll(//g)|1,596,814|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|153,431|81|
|Sort using first char|678,634|86|
|Sort using localeCompare|631,515|86|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,092|84|
|{...smallObject} - Total keys: 2|56,723,666|84|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,248|88|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,352|87|
|{ ...bigObject, ...anotherBigObject }|708|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,925,764|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,554,085|86|
|{ ...smallObject, ...anotherSmallObject }|13,965,337|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,390 ops/sec ±2.30% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 365 ops/sec ±1.46% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,926 ops/sec ±1.32% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 913 ops/sec ±16.51% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|827,060,140|87|
|Using backtick (`)|820,092,819|85|
|Using array.join|6,071,368|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|142,862,900|84|
|Using this|131,593,324|83|
