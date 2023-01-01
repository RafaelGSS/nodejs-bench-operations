# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sun Jan 01 2023 15:29:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.016ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.04ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.085ms 
    new Array(length): 0.043ms (faster)

 10,000 numbers:
           array.push: 1.471ms 
    new Array(length): 0.503ms (faster)

 1,000,000 numbers:
           array.push: 48.087ms 
    new Array(length): 9.875ms (faster)

 100,000,000 numbers:
           array.push: 2,132.995ms (faster)
    new Array(length): 6,143.761ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.02ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.43ms 
    new Array(length): 0.3ms (faster)

 1,000,000 strings:
           array.push: 30.568ms 
    new Array(length): 5.234ms (faster)

 100,000,000 strings:
           array.push: 2,784.419ms (faster)
    new Array(length): 6,443.698ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|84|
|Array.from|13|36|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,717|60|
|[True conditional] Using constructor name|124,652|94|
|[True conditional] Check if property is valid then instanceof |125,661|96|
|[False conditional] Using instanceof only|595,538,937|94|
|[False conditional] Using constructor name|595,301,343|95|
|[False conditional] Check if property is valid then instanceof |597,527,489|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,799|84|
|Intl.DateTimeFormat().format(new Date())|7,815|82|
|Reusing Intl.DateTimeFormat()|361,317|80|
|Format using date.get*|3,420,797|92|
|new Date() (Baseline)|7,271,949|96|
|Date.now() (Baseline)|13,075,640|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|600,756|92|
|Using brackets {}|602,030|91|
|Using '' + |607,402|92|
|Using date.toString()|659,098|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,193,196|95|
|Using undefined assignment|593,693,854|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|154,115|60|
|NodeError|123,446|94|
|NodeError Range|124,049|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,162,958|94|
|Function returning explicitly undefined|1,156,740|96|
|Function returning implicitly undefined|1,177,477|94|
|Function returning string|1,157,824|93|
|Function returning integer|1,163,702|93|
|Function returning float|1,168,247|93|
|Function returning functions|1,148,143|94|
|Function returning arrow functions|1,170,126|96|
|Function returning empty object|1,213,718|93|
|Function returning empty array|1,193,251|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|609,885,628|94|
|using Array.includes (first item)|606,689,086|90|
|Using raw comparison|606,114,873|92|
|Using raw comparison (first item)|607,196,766|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,517,704|90|
|Using Object.getOwnPropertyNames()|44,627,773|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|606,883,834|95|
|Length = 10_000 - Array.at|609,780,390|96|
|Length = 1_000_000 - Array.at|607,982,714|94|
|Length = 100 - Array[length - 1]|609,799,047|95|
|Length = 10_000 - Array[length - 1]|607,910,929|91|
|Length = 1_000_000 - Array[length - 1]|608,775,008|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,773,421|90|
|Object.create({})|1,262,523|76|
|Cached Empty.prototype|610,270,386|92|
|Empty.prototype|1,158,517|76|
|Empty class|847,545|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|604,797,472|92|
|Using optional chain (obj.field?.field2) (undefined)|612,559,668|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|603,461,278|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|608,760,824|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|153,878,204|94|
|Using parseInt(x, 10) - big number (10 len)|11,857,887|92|
|Using + - small number (2 len)|607,409,253|95|
|Using + - big number (10 len)|603,487,705|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|700,638|74|
|Using ? operator to avoid rejection|738,923|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|605,593,995|95|
|Raw usage underscore usage|605,598,311|91|
|Manipulating private properties using #|595,989,303|96|
|Manipulating private properties using underscore(_)|593,932,936|90|
|Manipulating private properties using Symbol|599,980,396|96|
|Manipulating private properties using PrivateSymbol|24,869,444|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,789,318|96|
|Adding property in the object creation - small object|1,787,382|94|
|Adding property after the function creation - small class|155,606|79|
|Adding property in the function creation - small class|156,131|81|
|Adding property after the class creation - small class|134,079|80|
|Adding property in the class creation - small class|129,790|75|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,031,708|91|
|Using replaceAll()|1,936,021|93|
|Using replaceAll(//g)|1,769,761|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|144,796|93|
|Sort using first char|647,402|93|
|Sort using localeCompare|620,819|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,123|91|
|{...smallObject} - Total keys: 2|57,372,327|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,144|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,112|94|
|{ ...bigObject, ...anotherBigObject }|689|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,983,050|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,994,396|96|
|{ ...smallObject, ...anotherSmallObject }|10,245,428|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,350 ops/sec ±16.92% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 370 ops/sec ±0.33% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,296 ops/sec ±0.54% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 720 ops/sec ±17.02% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|609,240,929|92|
|Using backtick (`)|613,435,628|96|
|Using array.join|6,184,556|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,525,706|91|
|Using this|124,112,000|94|
