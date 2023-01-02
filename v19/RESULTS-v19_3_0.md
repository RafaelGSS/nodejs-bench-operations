# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Mon Jan 02 2023 17:43:53 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.033ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.07ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 1.227ms 
    new Array(length): 0.428ms (faster)

 1,000,000 numbers:
           array.push: 35.352ms 
    new Array(length): 6.232ms (faster)

 100,000,000 numbers:
           array.push: 2,287.365ms (faster)
    new Array(length): 4,846.448ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.046ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.366ms 
    new Array(length): 0.251ms (faster)

 1,000,000 strings:
           array.push: 93.985ms 
    new Array(length): 4.523ms (faster)

 100,000,000 strings:
           array.push: 2,608.963ms (faster)
    new Array(length): 5,506.927ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|387|87|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,084|52|
|[True conditional] Using constructor name|147,666|94|
|[True conditional] Check if property is valid then instanceof |149,717|99|
|[False conditional] Using instanceof only|715,170,451|96|
|[False conditional] Using constructor name|713,919,376|98|
|[False conditional] Check if property is valid then instanceof |712,740,868|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,868|85|
|Intl.DateTimeFormat().format(new Date())|8,711|79|
|Reusing Intl.DateTimeFormat()|435,587|82|
|Format using date.get*|4,041,382|98|
|new Date() (Baseline)|8,698,389|99|
|Date.now() (Baseline)|15,662,560|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|716,738|96|
|Using brackets {}|724,690|95|
|Using '' + |723,297|99|
|Using date.toString()|789,544|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,634,143|94|
|Using undefined assignment|713,179,392|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,078|56|
|NodeError|145,675|93|
|NodeError Range|147,319|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,380,613|98|
|Function returning explicitly undefined|1,362,705|94|
|Function returning implicitly undefined|1,374,150|94|
|Function returning string|1,355,997|97|
|Function returning integer|1,352,075|96|
|Function returning float|1,373,640|95|
|Function returning functions|1,348,725|93|
|Function returning arrow functions|1,374,053|96|
|Function returning empty object|1,376,660|94|
|Function returning empty array|1,381,097|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,339,434|98|
|using Array.includes (first item)|712,738,375|95|
|Using raw comparison|715,158,442|98|
|Using raw comparison (first item)|712,692,760|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,914,010|94|
|Using Object.getOwnPropertyNames()|52,212,593|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|712,289,087|97|
|Length = 10_000 - Array.at|713,631,928|94|
|Length = 1_000_000 - Array.at|714,106,977|97|
|Length = 100 - Array[length - 1]|712,076,786|97|
|Length = 10_000 - Array[length - 1]|711,540,192|96|
|Length = 1_000_000 - Array[length - 1]|710,589,608|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,669,808|92|
|Object.create({})|1,492,049|77|
|Cached Empty.prototype|714,452,130|99|
|Empty.prototype|1,410,317|76|
|Empty class|952,338|79|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,581,926|96|
|Using optional chain (obj.field?.field2) (undefined)|714,379,761|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,721,024|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,139,097|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|180,049,567|98|
|Using parseInt(x, 10) - big number (10 len)|13,785,901|99|
|Using + - small number (2 len)|715,613,364|97|
|Using + - big number (10 len)|713,009,996|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|830,575|78|
|Using ? operator to avoid rejection|842,920|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|712,868,510|98|
|Raw usage underscore usage|713,267,763|96|
|Manipulating private properties using #|703,513,050|97|
|Manipulating private properties using underscore(_)|705,434,155|93|
|Manipulating private properties using Symbol|703,322,672|98|
|Manipulating private properties using PrivateSymbol|29,135,755|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,107,280|95|
|Adding property in the object creation - small object|2,103,874|97|
|Adding property after the function creation - small class|182,356|83|
|Adding property in the function creation - small class|182,552|84|
|Adding property after the class creation - small class|153,480|78|
|Adding property in the class creation - small class|152,679|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,367,875|92|
|Using replaceAll()|2,270,722|95|
|Using replaceAll(//g)|2,087,342|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|170,947|98|
|Sort using first char|768,990|96|
|Sort using localeCompare|730,138|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,295|93|
|{...smallObject} - Total keys: 2|67,192,304|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,338|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,639|97|
|{ ...bigObject, ...anotherBigObject }|802|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,540,046|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,919,297|96|
|{ ...smallObject, ...anotherSmallObject }|11,967,989|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,678 ops/sec ±0.70% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 413 ops/sec ±0.26% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,781 ops/sec ±0.51% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 759 ops/sec ±19.64% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|711,547,065|96|
|Using backtick (`)|713,578,691|99|
|Using array.join|7,271,392|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,670,546|95|
|Using this|145,099,260|96|
