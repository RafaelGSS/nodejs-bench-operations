# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sat Dec 31 2022 20:04:38 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.158ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.078ms 
    new Array(length): 0.03ms (faster)

 10,000 numbers:
           array.push: 0.64ms 
    new Array(length): 0.309ms (faster)

 1,000,000 numbers:
           array.push: 47.786ms 
    new Array(length): 10.169ms (faster)

 100,000,000 numbers:
           array.push: 2,416.636ms (faster)
    new Array(length): 5,985.169ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.022ms 
    new Array(length): 0.014ms (faster)

 1,000 strings:
           array.push: 0.064ms 
    new Array(length): 0.03ms (faster)

 10,000 strings:
           array.push: 1.021ms 
    new Array(length): 0.415ms (faster)

 1,000,000 strings:
           array.push: 385.315ms 
    new Array(length): 11.288ms (faster)

 100,000,000 strings:
           array.push: 3,049.782ms (faster)
    new Array(length): 6,580.299ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|296|77|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,040|55|
|[True conditional] Using constructor name|127,597|86|
|[True conditional] Check if property is valid then instanceof |125,762|86|
|[False conditional] Using instanceof only|785,811,422|87|
|[False conditional] Using constructor name|726,277,520|83|
|[False conditional] Check if property is valid then instanceof |752,657,128|86|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,912|77|
|Intl.DateTimeFormat().format(new Date())|4,806|66|
|Reusing Intl.DateTimeFormat()|409,983|85|
|Format using date.get*|2,453,140|85|
|new Date() (Baseline)|5,459,638|77|
|Date.now() (Baseline)|12,432,136|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|557,896|84|
|Using brackets {}|555,159|89|
|Using '' + |567,376|89|
|Using date.toString()|592,982|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,953,534|83|
|Using undefined assignment|766,188,978|87|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|154,863|52|
|NodeError|122,748|82|
|NodeError Range|122,075|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,039,829|86|
|Function returning explicitly undefined|1,101,105|84|
|Function returning implicitly undefined|1,119,802|86|
|Function returning string|1,085,567|85|
|Function returning integer|1,124,904|88|
|Function returning float|1,116,467|84|
|Function returning functions|1,077,348|86|
|Function returning arrow functions|1,123,438|85|
|Function returning empty object|1,146,893|86|
|Function returning empty array|1,136,334|84|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|792,647,832|86|
|using Array.includes (first item)|778,468,438|85|
|Using raw comparison|774,911,938|87|
|Using raw comparison (first item)|759,741,849|85|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,462,678|85|
|Using Object.getOwnPropertyNames()|50,034,770|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,257,719|84|
|Length = 10_000 - Array.at|14,945,772|87|
|Length = 1_000_000 - Array.at|16,508,714|85|
|Length = 100 - Array[length - 1]|790,962,609|86|
|Length = 10_000 - Array[length - 1]|741,443,347|84|
|Length = 1_000_000 - Array[length - 1]|803,650,206|86|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,582,418|83|
|Object.create({})|1,162,543|73|
|Cached Empty.prototype|794,188,478|88|
|Empty.prototype|1,124,710|65|
|Empty class|800,606|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|750,736,637|90|
|Using optional chain (obj.field?.field2) (undefined)|795,356,839|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|793,823,026|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|740,184,782|86|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|158,718,697|87|
|Using parseInt(x, 10) - big number (10 len)|10,518,821|86|
|Using + - small number (2 len)|765,728,148|89|
|Using + - big number (10 len)|756,046,973|87|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|635,916|70|
|Using ? operator to avoid rejection|699,054|72|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,053,873|83|
|Raw usage underscore usage|5,555,757|83|
|Manipulating private properties using #|2,209,664|86|
|Manipulating private properties using underscore(_)|641,690,639|84|
|Manipulating private properties using Symbol|624,290,641|81|
|Manipulating private properties using PrivateSymbol|25,673,761|81|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,199,848|86|
|Adding property in the object creation - small object|2,222,733|88|
|Adding property after the function creation - small class|146,961|76|
|Adding property in the function creation - small class|148,435|77|
|Adding property after the class creation - small class|118,620|76|
|Adding property in the class creation - small class|118,654|75|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,972,511|84|
|Using replaceAll()|1,627,852|84|
|Using replaceAll(//g)|1,704,618|81|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|152,720|86|
|Sort using first char|705,432|86|
|Sort using localeCompare|364,845|85|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,149|85|
|{...smallObject} - Total keys: 2|56,994,095|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,226|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,348|87|
|{ ...bigObject, ...anotherBigObject }|703|82|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,454,498|84|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,371,214|89|
|{ ...smallObject, ...anotherSmallObject }|13,198,754|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,248 ops/sec ±17.13% (78 runs sampled)
streams.web.Readable reading 1e3 * some data x 343 ops/sec ±1.65% (80 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,340 ops/sec ±1.62% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 650 ops/sec ±17.33% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|804,413,156|86|
|Using backtick (`)|791,532,776|91|
|Using array.join|5,835,557|86|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|163,962,386|84|
|Using this|162,936,440|88|
