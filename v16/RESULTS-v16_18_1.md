# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sat Jan 07 2023 17:35:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.174ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.075ms 
    new Array(length): 0.03ms (faster)

 10,000 numbers:
           array.push: 0.543ms 
    new Array(length): 0.38ms (faster)

 1,000,000 numbers:
           array.push: 36.952ms 
    new Array(length): 25.402ms (faster)

 100,000,000 numbers:
           array.push: 2,348.482ms (faster)
    new Array(length): 5,938.364ms


----


 10 strings:
           array.push: 0.013ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.021ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.059ms 
    new Array(length): 0.033ms (faster)

 10,000 strings:
           array.push: 0.769ms 
    new Array(length): 0.31ms (faster)

 1,000,000 strings:
           array.push: 460.108ms 
    new Array(length): 11.732ms (faster)

 100,000,000 strings:
           array.push: 3,035.524ms (faster)
    new Array(length): 6,417.515ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|75|
|Array.from|13|36|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|150,804|55|
|[True conditional] Using constructor name|120,459|89|
|[True conditional] Check if property is valid then instanceof |117,951|84|
|[False conditional] Using instanceof only|737,995,837|86|
|[False conditional] Using constructor name|722,379,229|88|
|[False conditional] Check if property is valid then instanceof |708,337,067|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,928|80|
|Intl.DateTimeFormat().format(new Date())|5,236|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|4,995|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,220|81|
|Reusing Intl.DateTimeFormat()|349,810|88|
|Reusing dfWithOptions.format(Date.now())|253,182|90|
|Reusing dfWithOptions.format(new Date())|218,554|85|
|Date.toLocaleDateString()|410,902|85|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,684|83|
|Format using date.get*|2,733,780|83|
|new Date() (Baseline)|6,093,043|88|
|Date.now() (Baseline)|13,255,256|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|579,905|87|
|Using brackets {}|582,145|87|
|Using '' + |585,274|87|
|Using date.toString()|616,915|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,029,631|89|
|Using undefined assignment|735,960,261|86|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|149,571|50|
|NodeError|112,162|84|
|NodeError Range|114,288|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,006,667|87|
|Function returning explicitly undefined|968,696|84|
|Function returning implicitly undefined|1,008,487|85|
|Function returning string|1,005,555|88|
|Function returning integer|1,031,439|86|
|Function returning float|1,056,480|85|
|Function returning functions|1,034,193|86|
|Function returning arrow functions|1,071,521|88|
|Function returning empty object|1,066,505|86|
|Function returning empty array|1,050,831|87|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|748,283,495|85|
|using Array.includes (first item)|749,069,549|90|
|Using raw comparison|751,027,515|88|
|Using raw comparison (first item)|756,137,513|84|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,252,046|85|
|Using Object.getOwnPropertyNames()|47,093,899|84|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,220,687|84|
|Length = 10_000 - Array.at|15,267,868|88|
|Length = 1_000_000 - Array.at|15,282,633|88|
|Length = 100 - Array[length - 1]|752,589,718|86|
|Length = 10_000 - Array[length - 1]|739,186,002|86|
|Length = 1_000_000 - Array[length - 1]|717,810,166|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,651,638|86|
|Object.create({})|1,020,212|74|
|Cached Empty.prototype|718,768,793|85|
|Empty.prototype|995,275|58|
|Empty class|701,307|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|702,886,051|87|
|Using optional chain (obj.field?.field2) (undefined)|694,924,090|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,117,569|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|695,461,857|87|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|144,909,306|88|
|Using parseInt(x, 10) - big number (10 len)|11,010,451|82|
|Using + - small number (2 len)|748,067,903|87|
|Using + - big number (10 len)|748,152,912|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|633,043|71|
|Using ? operator to avoid rejection|690,007|72|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,799,502|85|
|Raw usage underscore usage|5,490,527|87|
|Manipulating private properties using #|2,046,557|86|
|Manipulating private properties using underscore(_)|616,253,014|86|
|Manipulating private properties using Symbol|603,550,594|87|
|Manipulating private properties using PrivateSymbol|23,898,305|81|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,067,586|87|
|Adding property in the object creation - small object|2,056,601|83|
|Adding property after the function creation - small class|137,789|77|
|Adding property in the function creation - small class|140,910|81|
|Adding property after the class creation - small class|116,877|74|
|Adding property in the class creation - small class|116,620|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,919,939|86|
|Using replaceAll()|1,696,778|88|
|Using replaceAll(//g)|1,685,274|87|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|150,351|88|
|Sort using first char|667,890|87|
|Sort using localeCompare|311,369|84|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,060|83|
|{...smallObject} - Total keys: 2|53,882,338|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,131|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,087|87|
|{ ...bigObject, ...anotherBigObject }|668|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,574,443|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,946,694|86|
|{ ...smallObject, ...anotherSmallObject }|13,198,500|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,215 ops/sec ±19.98% (77 runs sampled)
streams.web.Readable reading 1e3 * some data x 329 ops/sec ±1.33% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,154 ops/sec ±1.10% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 614 ops/sec ±16.78% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|726,179,010|90|
|Using backtick (`)|729,004,339|88|
|Using array.join|5,285,286|88|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,806,987|88|
|Using this|141,323,696|86|
