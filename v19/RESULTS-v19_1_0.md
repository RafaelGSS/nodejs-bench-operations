# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.1.0`
* __Run:__ Mon Jan 02 2023 17:43:56 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.012ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.034ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.068ms 
    new Array(length): 0.038ms (faster)

 10,000 numbers:
           array.push: 0.531ms 
    new Array(length): 0.448ms (faster)

 1,000,000 numbers:
           array.push: 42.994ms 
    new Array(length): 10.577ms (faster)

 100,000,000 numbers:
           array.push: 2,011.511ms (faster)
    new Array(length): 5,446.49ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.113ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.046ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.385ms 
    new Array(length): 0.263ms (faster)

 1,000,000 strings:
           array.push: 31.13ms 
    new Array(length): 4.548ms (faster)

 100,000,000 strings:
           array.push: 2,603.647ms (faster)
    new Array(length): 5,750.935ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|381|87|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,405|56|
|[True conditional] Using constructor name|141,908|93|
|[True conditional] Check if property is valid then instanceof |147,705|90|
|[False conditional] Using instanceof only|714,203,081|98|
|[False conditional] Using constructor name|713,530,902|97|
|[False conditional] Check if property is valid then instanceof |711,946,921|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,780|86|
|Intl.DateTimeFormat().format(new Date())|8,493|78|
|Reusing Intl.DateTimeFormat()|404,122|79|
|Format using date.get*|4,151,170|94|
|new Date() (Baseline)|8,769,583|96|
|Date.now() (Baseline)|15,663,048|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|730,748|95|
|Using brackets {}|733,492|98|
|Using '' + |726,324|97|
|Using date.toString()|798,394|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,667,557|95|
|Using undefined assignment|712,933,931|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,795|57|
|NodeError|146,539|96|
|NodeError Range|145,946|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,367,057|96|
|Function returning explicitly undefined|1,356,167|97|
|Function returning implicitly undefined|1,379,370|95|
|Function returning string|1,369,909|94|
|Function returning integer|1,383,966|93|
|Function returning float|1,382,788|98|
|Function returning functions|1,341,060|96|
|Function returning arrow functions|1,361,072|97|
|Function returning empty object|1,388,411|93|
|Function returning empty array|1,352,151|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,590,790|94|
|using Array.includes (first item)|713,464,523|98|
|Using raw comparison|716,127,937|97|
|Using raw comparison (first item)|714,071,394|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,097,915|96|
|Using Object.getOwnPropertyNames()|50,095,766|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|574,422,824|97|
|Length = 10_000 - Array.at|574,270,452|98|
|Length = 1_000_000 - Array.at|574,093,534|99|
|Length = 100 - Array[length - 1]|712,267,465|94|
|Length = 10_000 - Array[length - 1]|709,048,010|95|
|Length = 1_000_000 - Array[length - 1]|709,737,014|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,813,219|94|
|Object.create({})|1,358,421|72|
|Cached Empty.prototype|713,176,873|96|
|Empty.prototype|1,304,042|74|
|Empty class|964,304|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,552,778|97|
|Using optional chain (obj.field?.field2) (undefined)|713,784,317|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,057,339|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,187,678|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,521,023|96|
|Using parseInt(x, 10) - big number (10 len)|14,551,022|98|
|Using + - small number (2 len)|715,532,280|96|
|Using + - big number (10 len)|714,324,760|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|805,983|77|
|Using ? operator to avoid rejection|873,024|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|713,738,460|96|
|Raw usage underscore usage|713,424,008|93|
|Manipulating private properties using #|704,386,728|98|
|Manipulating private properties using underscore(_)|704,095,574|97|
|Manipulating private properties using Symbol|704,368,004|89|
|Manipulating private properties using PrivateSymbol|32,255,501|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,114,332|97|
|Adding property in the object creation - small object|2,113,319|93|
|Adding property after the function creation - small class|174,018|86|
|Adding property in the function creation - small class|176,143|88|
|Adding property after the class creation - small class|146,332|82|
|Adding property in the class creation - small class|145,999|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,449,389|93|
|Using replaceAll()|2,210,679|98|
|Using replaceAll(//g)|2,123,466|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|175,944|98|
|Sort using first char|784,863|95|
|Sort using localeCompare|735,262|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,236|95|
|{...smallObject} - Total keys: 2|65,375,850|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,336|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,647|97|
|{ ...bigObject, ...anotherBigObject }|781|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,662,426|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,065,204|96|
|{ ...smallObject, ...anotherSmallObject }|12,673,066|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,606 ops/sec ±1.76% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 382 ops/sec ±0.11% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,932 ops/sec ±0.44% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 977 ops/sec ±16.71% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|706,127,530|95|
|Using backtick (`)|709,339,394|97|
|Using array.join|7,172,831|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,076,410|92|
|Using this|145,108,347|95|
