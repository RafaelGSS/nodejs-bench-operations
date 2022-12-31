# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sat Dec 31 2022 20:19:43 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.032ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.054ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.496ms 
    new Array(length): 0.199ms (faster)

 1,000,000 numbers:
           array.push: 30.863ms 
    new Array(length): 17.044ms (faster)

 100,000,000 numbers:
           array.push: 1,710.907ms (faster)
    new Array(length): 4,316.489ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.105ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.623ms 
    new Array(length): 0.279ms (faster)

 1,000,000 strings:
           array.push: 184.006ms 
    new Array(length): 10.272ms (faster)

 100,000,000 strings:
           array.push: 1,962.351ms (faster)
    new Array(length): 4,748.704ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|408|82|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,693|54|
|[True conditional] Using constructor name|128,144|94|
|[True conditional] Check if property is valid then instanceof |128,380|92|
|[False conditional] Using instanceof only|593,687,757|98|
|[False conditional] Using constructor name|593,220,725|97|
|[False conditional] Check if property is valid then instanceof |593,575,061|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,293|91|
|Intl.DateTimeFormat().format(new Date())|9,177|81|
|Reusing Intl.DateTimeFormat()|372,902|82|
|Format using date.get*|3,164,349|97|
|new Date() (Baseline)|7,798,829|96|
|Date.now() (Baseline)|15,493,639|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|698,395|97|
|Using brackets {}|706,044|96|
|Using '' + |701,434|98|
|Using date.toString()|781,638|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,382,790|97|
|Using undefined assignment|592,460,736|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,535|54|
|NodeError|126,045|92|
|NodeError Range|126,186|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,260,057|94|
|Function returning explicitly undefined|1,239,854|97|
|Function returning implicitly undefined|1,271,804|98|
|Function returning string|1,237,560|94|
|Function returning integer|1,268,901|93|
|Function returning float|1,235,146|95|
|Function returning functions|1,226,369|96|
|Function returning arrow functions|1,240,556|96|
|Function returning empty object|1,268,765|94|
|Function returning empty array|1,242,678|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,894,357|96|
|using Array.includes (first item)|592,120,439|97|
|Using raw comparison|594,198,811|98|
|Using raw comparison (first item)|592,898,013|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,441,725|95|
|Using Object.getOwnPropertyNames()|67,452,394|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,069,585|95|
|Length = 10_000 - Array.at|19,006,365|94|
|Length = 1_000_000 - Array.at|19,040,130|95|
|Length = 100 - Array[length - 1]|590,970,809|98|
|Length = 10_000 - Array[length - 1]|590,842,471|96|
|Length = 1_000_000 - Array[length - 1]|591,263,053|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,157,949|92|
|Object.create({})|1,019,282|79|
|Cached Empty.prototype|593,562,344|99|
|Empty.prototype|1,148,794|84|
|Empty class|655,448|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,498,796|97|
|Using optional chain (obj.field?.field2) (undefined)|593,128,762|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,059,784|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,464,121|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|201,750,074|94|
|Using parseInt(x, 10) - big number (10 len)|14,412,355|95|
|Using + - small number (2 len)|594,201,030|99|
|Using + - big number (10 len)|592,724,946|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|535,765|83|
|Using ? operator to avoid rejection|554,514|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|250,235,239|92|
|Raw usage underscore usage|250,500,994|94|
|Manipulating private properties using #|180,928,920|90|
|Manipulating private properties using underscore(_)|157,326,123|91|
|Manipulating private properties using Symbol|153,023,552|86|
|Manipulating private properties using PrivateSymbol|35,642,163|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,792,641|98|
|Adding property in the object creation - small object|1,796,026|95|
|Adding property after the function creation - small class|132,274|88|
|Adding property in the function creation - small class|132,647|89|
|Adding property after the class creation - small class|112,196|89|
|Adding property in the class creation - small class|112,039|88|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,455,080|93|
|Using replaceAll()|2,112,876|95|
|Using replaceAll(//g)|2,173,341|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,409|92|
|Sort using first char|851,945|93|
|Sort using localeCompare|802,338|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,385|96|
|{...smallObject} - Total keys: 2|76,814,187|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,574|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,424|96|
|{ ...bigObject, ...anotherBigObject }|827|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,719,915|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,185,204|98|
|{ ...smallObject, ...anotherSmallObject }|16,499,122|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,774 ops/sec ±0.63% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±0.19% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,694 ops/sec ±0.37% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 995 ops/sec ±28.72% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,717,872|97|
|Using backtick (`)|592,776,894|97|
|Using array.join|8,629,582|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,709,602|92|
|Using this|112,858,208|95|
