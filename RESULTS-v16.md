# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Mon Jan 02 2023 17:43:53 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.109ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.498ms 
    new Array(length): 0.233ms (faster)

 1,000,000 numbers:
           array.push: 43.364ms 
    new Array(length): 8.256ms (faster)

 100,000,000 numbers:
           array.push: 1,800.166ms (faster)
    new Array(length): 4,556.411ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.016ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.592ms 
    new Array(length): 0.302ms (faster)

 1,000,000 strings:
           array.push: 300.928ms 
    new Array(length): 8.533ms (faster)

 100,000,000 strings:
           array.push: 2,654.367ms (faster)
    new Array(length): 5,263.752ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|393|82|
|Array.from|17|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|191,462|57|
|[True conditional] Using constructor name|148,603|98|
|[True conditional] Check if property is valid then instanceof |148,773|88|
|[False conditional] Using instanceof only|713,746,231|96|
|[False conditional] Using constructor name|769,588,730|89|
|[False conditional] Check if property is valid then instanceof |811,971,542|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,825|83|
|Intl.DateTimeFormat().format(new Date())|9,439|83|
|Reusing Intl.DateTimeFormat()|505,821|99|
|Format using date.get*|4,039,710|95|
|new Date() (Baseline)|8,404,505|98|
|Date.now() (Baseline)|16,103,770|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|770,813|96|
|Using brackets {}|766,845|99|
|Using '' + |777,798|97|
|Using date.toString()|826,947|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,762,163|93|
|Using undefined assignment|711,965,232|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|221,529|57|
|NodeError|176,710|92|
|NodeError Range|176,280|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,501,384|97|
|Function returning explicitly undefined|1,303,132|97|
|Function returning implicitly undefined|1,362,530|94|
|Function returning string|1,325,892|94|
|Function returning integer|1,362,675|96|
|Function returning float|1,351,806|99|
|Function returning functions|1,328,094|92|
|Function returning arrow functions|1,337,133|99|
|Function returning empty object|1,359,977|97|
|Function returning empty array|1,363,809|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,641,026|97|
|using Array.includes (first item)|711,544,960|94|
|Using raw comparison|713,101,854|96|
|Using raw comparison (first item)|712,815,298|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,181,560|94|
|Using Object.getOwnPropertyNames()|60,279,949|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|17,982,581|95|
|Length = 10_000 - Array.at|18,195,586|96|
|Length = 1_000_000 - Array.at|18,209,357|97|
|Length = 100 - Array[length - 1]|809,777,266|99|
|Length = 10_000 - Array[length - 1]|811,209,202|98|
|Length = 1_000_000 - Array[length - 1]|812,278,516|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,830,926|90|
|Object.create({})|1,480,366|80|
|Cached Empty.prototype|731,856,561|87|
|Empty.prototype|1,405,681|70|
|Empty class|923,112|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,763,631|98|
|Using optional chain (obj.field?.field2) (undefined)|712,664,506|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,803,812|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,637,462|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,161,738|93|
|Using parseInt(x, 10) - big number (10 len)|12,501,376|98|
|Using + - small number (2 len)|712,810,799|97|
|Using + - big number (10 len)|712,319,344|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|785,437|78|
|Using ? operator to avoid rejection|842,623|76|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,546,414|92|
|Raw usage underscore usage|7,976,304|98|
|Manipulating private properties using #|2,902,792|94|
|Manipulating private properties using underscore(_)|803,280,076|92|
|Manipulating private properties using Symbol|798,951,545|99|
|Manipulating private properties using PrivateSymbol|31,025,401|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,978,947|98|
|Adding property in the object creation - small object|2,028,782|94|
|Adding property after the function creation - small class|193,647|85|
|Adding property in the function creation - small class|176,776|82|
|Adding property after the class creation - small class|151,835|75|
|Adding property in the class creation - small class|159,796|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,406,057|95|
|Using replaceAll()|2,308,709|95|
|Using replaceAll(//g)|2,166,127|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|206,363|95|
|Sort using first char|850,819|92|
|Sort using localeCompare|434,802|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,329|94|
|{...smallObject} - Total keys: 2|60,589,380|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,324|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,602|98|
|{ ...bigObject, ...anotherBigObject }|815|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,178,932|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,790,111|94|
|{ ...smallObject, ...anotherSmallObject }|13,832,089|99|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,632 ops/sec ±14.33% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 439 ops/sec ±1.11% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,016 ops/sec ±1.51% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 971 ops/sec ±17.69% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|810,752,872|96|
|Using backtick (`)|810,881,335|96|
|Using array.join|7,838,485|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|151,825,306|95|
|Using this|153,832,971|98|
