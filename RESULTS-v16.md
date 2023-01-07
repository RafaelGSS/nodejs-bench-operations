# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sat Jan 07 2023 17:35:09 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.125ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.502ms 
    new Array(length): 0.227ms (faster)

 1,000,000 numbers:
           array.push: 35.962ms 
    new Array(length): 12.441ms (faster)

 100,000,000 numbers:
           array.push: 2,312.398ms (faster)
    new Array(length): 6,070.493ms


----


 10 strings:
           array.push: 0.013ms (faster)
    new Array(length): 0.022ms

 100 strings:
           array.push: 0.022ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.057ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.759ms 
    new Array(length): 0.311ms (faster)

 1,000,000 strings:
           array.push: 399.399ms 
    new Array(length): 11.438ms (faster)

 100,000,000 strings:
           array.push: 3,069.137ms (faster)
    new Array(length): 6,526.683ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|285|74|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|150,774|57|
|[True conditional] Using constructor name|121,839|85|
|[True conditional] Check if property is valid then instanceof |123,240|87|
|[False conditional] Using instanceof only|741,860,286|88|
|[False conditional] Using constructor name|728,988,270|85|
|[False conditional] Check if property is valid then instanceof |721,436,069|86|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,078|78|
|Intl.DateTimeFormat().format(new Date())|5,349|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,700|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,108|79|
|Reusing Intl.DateTimeFormat()|414,248|88|
|Reusing dfWithOptions.format(Date.now())|247,397|88|
|Reusing dfWithOptions.format(new Date())|211,011|87|
|Date.toLocaleDateString()|406,285|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,605|81|
|Format using date.get*|2,449,892|88|
|new Date() (Baseline)|5,685,785|84|
|Date.now() (Baseline)|12,455,932|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|534,846|89|
|Using brackets {}|548,928|89|
|Using '' + |553,533|86|
|Using date.toString()|578,478|85|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,951,255|86|
|Using undefined assignment|721,085,337|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|148,879|56|
|NodeError|119,861|86|
|NodeError Range|117,418|82|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,041,797|82|
|Function returning explicitly undefined|990,992|87|
|Function returning implicitly undefined|1,038,937|88|
|Function returning string|992,491|85|
|Function returning integer|1,031,145|90|
|Function returning float|996,958|86|
|Function returning functions|964,242|84|
|Function returning arrow functions|940,224|82|
|Function returning empty object|1,019,125|88|
|Function returning empty array|989,793|87|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|680,180,073|86|
|using Array.includes (first item)|696,193,533|87|
|Using raw comparison|694,160,560|89|
|Using raw comparison (first item)|690,777,289|87|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,063,094|85|
|Using Object.getOwnPropertyNames()|40,824,009|84|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,177,413|88|
|Length = 10_000 - Array.at|13,706,642|90|
|Length = 1_000_000 - Array.at|14,470,289|85|
|Length = 100 - Array[length - 1]|691,495,843|89|
|Length = 10_000 - Array[length - 1]|688,967,521|89|
|Length = 1_000_000 - Array[length - 1]|685,365,220|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,167,826|85|
|Object.create({})|1,005,553|74|
|Cached Empty.prototype|680,867,392|86|
|Empty.prototype|992,829|73|
|Empty class|683,506|74|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|687,627,380|88|
|Using optional chain (obj.field?.field2) (undefined)|677,291,229|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|688,764,216|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|692,075,244|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,353,030|90|
|Using parseInt(x, 10) - big number (10 len)|9,660,497|86|
|Using + - small number (2 len)|693,297,767|87|
|Using + - big number (10 len)|692,085,595|83|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|566,077|73|
|Using ? operator to avoid rejection|624,185|73|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,043,894|87|
|Raw usage underscore usage|4,946,083|86|
|Manipulating private properties using #|1,866,280|83|
|Manipulating private properties using underscore(_)|560,513,420|83|
|Manipulating private properties using Symbol|563,331,668|85|
|Manipulating private properties using PrivateSymbol|22,265,845|83|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,881,716|87|
|Adding property in the object creation - small object|1,895,860|86|
|Adding property after the function creation - small class|130,560|76|
|Adding property in the function creation - small class|131,670|80|
|Adding property after the class creation - small class|109,334|77|
|Adding property in the class creation - small class|102,967|72|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,782,411|89|
|Using replaceAll()|1,562,343|86|
|Using replaceAll(//g)|1,572,496|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|139,239|84|
|Sort using first char|596,352|84|
|Sort using localeCompare|323,102|84|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|985|84|
|{...smallObject} - Total keys: 2|49,645,497|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,072|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,916|88|
|{ ...bigObject, ...anotherBigObject }|620|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,198,885|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,337,966|87|
|{ ...smallObject, ...anotherSmallObject }|12,034,694|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,120 ops/sec ±18.26% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 301 ops/sec ±1.04% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,103 ops/sec ±1.37% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 786 ops/sec ±16.09% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|706,040,915|84|
|Using backtick (`)|703,381,792|88|
|Using array.join|5,389,514|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,657,299|87|
|Using this|143,276,875|85|
