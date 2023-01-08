# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sun Jan 08 2023 17:46:56 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.168ms 
    new Array(length): 0.015ms (faster)

 1,000 numbers:
           array.push: 0.064ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.618ms 
    new Array(length): 0.282ms (faster)

 1,000,000 numbers:
           array.push: 41.997ms 
    new Array(length): 24.768ms (faster)

 100,000,000 numbers:
           array.push: 2,346.375ms (faster)
    new Array(length): 6,255.739ms


----


 10 strings:
           array.push: 0.015ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.022ms 
    new Array(length): 0.015ms (faster)

 1,000 strings:
           array.push: 0.062ms 
    new Array(length): 0.031ms (faster)

 10,000 strings:
           array.push: 0.721ms 
    new Array(length): 0.333ms (faster)

 1,000,000 strings:
           array.push: 396.374ms 
    new Array(length): 11.542ms (faster)

 100,000,000 strings:
           array.push: 3,196.118ms (faster)
    new Array(length): 6,771.219ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|80|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|147,018|53|
|[True conditional] Using constructor name|111,859|81|
|[True conditional] Check if property is valid then instanceof |114,324|88|
|[False conditional] Using instanceof only|706,744,357|90|
|[False conditional] Using constructor name|713,156,268|88|
|[False conditional] Check if property is valid then instanceof |745,986,942|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,588|77|
|Intl.DateTimeFormat().format(new Date())|5,411|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,145|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,269|89|
|Reusing Intl.DateTimeFormat()|408,794|88|
|Reusing dfWithOptions.format(Date.now())|235,173|87|
|Reusing dfWithOptions.format(new Date())|211,237|87|
|Date.toLocaleDateString()|393,846|90|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,829|82|
|Format using date.get*|2,668,142|85|
|new Date() (Baseline)|5,999,121|89|
|Date.now() (Baseline)|12,385,404|85|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|522,425|86|
|Using brackets {}|516,781|83|
|Using '' + |530,829|90|
|Using date.toString()|574,702|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,917,632|86|
|Using undefined assignment|728,834,259|88|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|148,918|58|
|NodeError|118,881|89|
|NodeError Range|116,574|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,042,058|89|
|Function returning explicitly undefined|1,024,045|91|
|Function returning implicitly undefined|1,061,805|85|
|Function returning string|1,049,759|89|
|Function returning integer|1,092,010|91|
|Function returning float|1,076,838|86|
|Function returning functions|1,019,586|90|
|Function returning arrow functions|1,035,858|89|
|Function returning empty object|1,055,651|87|
|Function returning empty array|1,075,244|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|742,646,677|91|
|using Array.includes (first item)|739,776,326|86|
|Using raw comparison|732,478,448|91|
|Using raw comparison (first item)|723,290,333|89|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,917,910|81|
|Using Object.getOwnPropertyNames()|48,289,781|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,766,313|89|
|Length = 10_000 - Array.at|15,507,361|89|
|Length = 1_000_000 - Array.at|15,371,379|88|
|Length = 100 - Array[length - 1]|747,526,307|89|
|Length = 10_000 - Array[length - 1]|767,249,356|89|
|Length = 1_000_000 - Array[length - 1]|748,217,316|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,628,241|85|
|Object.create({})|1,113,068|74|
|Cached Empty.prototype|764,787,216|90|
|Empty.prototype|1,057,586|61|
|Empty class|744,559|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|764,306,519|88|
|Using optional chain (obj.field?.field2) (undefined)|760,773,323|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|749,663,524|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|733,594,811|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|155,473,521|86|
|Using parseInt(x, 10) - big number (10 len)|10,386,422|89|
|Using + - small number (2 len)|756,237,399|85|
|Using + - big number (10 len)|758,245,981|85|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|624,818|70|
|Using ? operator to avoid rejection|681,549|73|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,820,538|88|
|Raw usage underscore usage|5,599,234|88|
|Manipulating private properties using #|2,105,541|89|
|Manipulating private properties using underscore(_)|614,834,031|88|
|Manipulating private properties using Symbol|619,901,514|88|
|Manipulating private properties using PrivateSymbol|25,269,971|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,064,083|83|
|Adding property in the object creation - small object|2,085,977|87|
|Adding property after the function creation - small class|144,030|78|
|Adding property in the function creation - small class|144,350|82|
|Adding property after the class creation - small class|112,280|77|
|Adding property in the class creation - small class|111,168|75|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,817,859|88|
|Using replaceAll()|1,627,369|85|
|Using replaceAll(//g)|1,555,855|83|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|146,302|83|
|Sort using first char|612,070|85|
|Sort using localeCompare|341,666|84|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|990|84|
|{...smallObject} - Total keys: 2|51,085,732|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,098|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,978|86|
|{ ...bigObject, ...anotherBigObject }|664|82|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,742,655|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,024,043|85|
|{ ...smallObject, ...anotherSmallObject }|11,974,675|85|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,212 ops/sec ±21.24% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 315 ops/sec ±1.20% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,223 ops/sec ±1.42% (85 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 634 ops/sec ±13.17% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|731,724,935|89|
|Using backtick (`)|713,501,057|83|
|Using array.join|5,364,008|85|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|149,290,406|86|
|Using this|147,807,602|86|
