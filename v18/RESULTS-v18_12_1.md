# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sun Jan 08 2023 17:45:46 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.029ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.492ms 
    new Array(length): 0.217ms (faster)

 1,000,000 numbers:
           array.push: 29.937ms 
    new Array(length): 17.042ms (faster)

 100,000,000 numbers:
           array.push: 1,514.978ms (faster)
    new Array(length): 4,164.36ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.628ms 
    new Array(length): 0.261ms (faster)

 1,000,000 strings:
           array.push: 302.03ms 
    new Array(length): 8.419ms (faster)

 100,000,000 strings:
           array.push: 2,128.096ms (faster)
    new Array(length): 4,636.506ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|411|83|
|Array.from|17|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|166,481|53|
|[True conditional] Using constructor name|127,442|94|
|[True conditional] Check if property is valid then instanceof |129,079|94|
|[False conditional] Using instanceof only|592,271,497|97|
|[False conditional] Using constructor name|591,994,351|92|
|[False conditional] Check if property is valid then instanceof |591,944,562|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,271|91|
|Intl.DateTimeFormat().format(new Date())|9,305|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,422|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,951|84|
|Reusing Intl.DateTimeFormat()|454,770|98|
|Reusing dfWithOptions.format(Date.now())|274,510|98|
|Reusing dfWithOptions.format(new Date())|246,926|95|
|Date.toLocaleDateString()|440,215|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,058|86|
|Format using date.get*|3,239,070|95|
|new Date() (Baseline)|5,939,221|95|
|Date.now() (Baseline)|12,345,778|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|659,999|98|
|Using brackets {}|720,836|96|
|Using '' + |724,771|99|
|Using date.toString()|800,574|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,458,133|94|
|Using undefined assignment|591,145,161|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,946|54|
|NodeError|127,939|92|
|NodeError Range|128,441|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,293,872|95|
|Function returning explicitly undefined|1,276,708|95|
|Function returning implicitly undefined|1,300,037|96|
|Function returning string|1,269,375|95|
|Function returning integer|1,285,747|95|
|Function returning float|1,282,081|94|
|Function returning functions|1,250,500|94|
|Function returning arrow functions|1,248,780|95|
|Function returning empty object|1,294,357|94|
|Function returning empty array|1,289,785|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,544,237|99|
|using Array.includes (first item)|590,840,856|99|
|Using raw comparison|592,342,087|98|
|Using raw comparison (first item)|585,286,123|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|69,418,730|91|
|Using Object.getOwnPropertyNames()|69,859,596|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,118,678|95|
|Length = 10_000 - Array.at|19,322,566|94|
|Length = 1_000_000 - Array.at|19,326,398|96|
|Length = 100 - Array[length - 1]|591,463,035|97|
|Length = 10_000 - Array[length - 1]|590,832,806|96|
|Length = 1_000_000 - Array[length - 1]|589,638,654|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,805,884|96|
|Object.create({})|953,227|82|
|Cached Empty.prototype|590,560,336|97|
|Empty.prototype|1,140,529|81|
|Empty class|656,393|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,299,453|97|
|Using optional chain (obj.field?.field2) (undefined)|593,163,348|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,255,994|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,429,544|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,233,383|94|
|Using parseInt(x, 10) - big number (10 len)|14,801,506|92|
|Using + - small number (2 len)|592,736,616|98|
|Using + - big number (10 len)|590,717,829|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|558,733|84|
|Using ? operator to avoid rejection|581,080|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|252,636,509|96|
|Raw usage underscore usage|256,340,544|97|
|Manipulating private properties using #|187,904,945|94|
|Manipulating private properties using underscore(_)|169,753,847|86|
|Manipulating private properties using Symbol|173,053,930|88|
|Manipulating private properties using PrivateSymbol|36,482,097|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,818,486|97|
|Adding property in the object creation - small object|1,819,901|96|
|Adding property after the function creation - small class|135,434|88|
|Adding property in the function creation - small class|135,019|89|
|Adding property after the class creation - small class|114,747|87|
|Adding property in the class creation - small class|112,766|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,475,857|95|
|Using replaceAll()|2,136,832|93|
|Using replaceAll(//g)|2,175,458|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|195,568|96|
|Sort using first char|857,599|93|
|Sort using localeCompare|807,021|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,431|93|
|{...smallObject} - Total keys: 2|79,273,852|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,594|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,522|94|
|{ ...bigObject, ...anotherBigObject }|838|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,283,898|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,440,041|96|
|{ ...smallObject, ...anotherSmallObject }|16,822,819|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,632 ops/sec ±18.21% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±0.09% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,839 ops/sec ±0.48% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,031 ops/sec ±22.86% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,140,673|95|
|Using backtick (`)|592,978,367|96|
|Using array.join|8,569,655|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,842,302|92|
|Using this|112,403,302|93|
