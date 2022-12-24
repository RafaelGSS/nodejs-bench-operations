# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sat Dec 24 2022 18:48:46 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.029ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.06ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.515ms 
    new Array(length): 0.223ms (faster)

 1,000,000 numbers:
           array.push: 29.297ms 
    new Array(length): 17.914ms (faster)

 100,000,000 numbers:
           array.push: 1,519.332ms (faster)
    new Array(length): 4,116.831ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.101ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.604ms 
    new Array(length): 0.263ms (faster)

 1,000,000 strings:
           array.push: 180.401ms 
    new Array(length): 10.247ms (faster)

 100,000,000 strings:
           array.push: 1,951.163ms (faster)
    new Array(length): 4,607.179ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|427|85|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,708|54|
|[True conditional] Using constructor name|129,540|94|
|[True conditional] Check if property is valid then instanceof |131,299|94|
|[False conditional] Using instanceof only|591,930,364|96|
|[False conditional] Using constructor name|591,161,121|95|
|[False conditional] Check if property is valid then instanceof |592,169,579|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,400|89|
|Intl.DateTimeFormat().format(new Date())|9,015|79|
|Reusing Intl.DateTimeFormat()|459,456|86|
|Format using date.get*|3,827,234|96|
|new Date() (Baseline)|8,045,253|96|
|Date.now() (Baseline)|15,697,571|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|735,744|98|
|Using brackets {}|747,741|100|
|Using '' + |734,861|96|
|Using date.toString()|818,456|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,480,126|97|
|Using undefined assignment|591,263,324|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,018|55|
|NodeError|126,701|91|
|NodeError Range|126,355|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,285,290|95|
|Function returning explicitly undefined|1,273,632|93|
|Function returning implicitly undefined|1,305,255|94|
|Function returning string|1,284,052|93|
|Function returning integer|1,247,149|94|
|Function returning float|1,247,863|96|
|Function returning functions|1,247,595|96|
|Function returning arrow functions|1,272,965|96|
|Function returning empty object|1,278,711|95|
|Function returning empty array|1,171,112|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,204,546|97|
|using Array.includes (first item)|591,231,633|94|
|Using raw comparison|591,535,364|96|
|Using raw comparison (first item)|591,772,396|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|68,481,406|95|
|Using Object.getOwnPropertyNames()|69,571,654|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,475,543|97|
|Length = 10_000 - Array.at|19,404,456|97|
|Length = 1_000_000 - Array.at|18,572,065|96|
|Length = 100 - Array[length - 1]|590,453,196|96|
|Length = 10_000 - Array[length - 1]|590,149,590|94|
|Length = 1_000_000 - Array[length - 1]|590,127,045|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,326,992|95|
|Object.create({})|975,015|80|
|Cached Empty.prototype|591,150,134|95|
|Empty.prototype|1,121,427|84|
|Empty class|665,870|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,222,400|98|
|Using optional chain (obj.field?.field2) (undefined)|592,340,224|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,295,348|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,955,949|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,774,234|92|
|Using parseInt(x, 10) - big number (10 len)|15,001,403|96|
|Using + - small number (2 len)|591,663,454|96|
|Using + - big number (10 len)|591,112,518|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|556,345|81|
|Using ? operator to avoid rejection|581,778|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|255,939,623|93|
|Raw usage underscore usage|263,324,558|94|
|Manipulating private properties using #|196,354,744|98|
|Manipulating private properties using underscore(_)|194,333,356|97|
|Manipulating private properties using Symbol|191,435,777|94|
|Manipulating private properties using PrivateSymbol|36,811,256|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,814,590|97|
|Adding property in the object creation - small object|1,819,462|99|
|Adding property after the function creation - small class|135,709|89|
|Adding property in the function creation - small class|136,727|90|
|Adding property after the class creation - small class|114,793|86|
|Adding property in the class creation - small class|114,718|87|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,493,450|95|
|Using replaceAll()|2,158,341|97|
|Using replaceAll(//g)|2,198,532|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|198,341|94|
|Sort using first char|919,222|99|
|Sort using localeCompare|837,400|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,490|95|
|{...smallObject} - Total keys: 2|79,933,973|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,574|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,582|96|
|{ ...bigObject, ...anotherBigObject }|864|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,709,557|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,656,265|96|
|{ ...smallObject, ...anotherSmallObject }|16,897,074|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,701 ops/sec ±15.71% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 382 ops/sec ±0.31% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,749 ops/sec ±0.39% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 916 ops/sec ±15.58% (58 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,825,876|97|
|Using backtick (`)|591,456,573|95|
|Using array.join|8,626,148|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,726,425|94|
|Using this|114,073,001|93|
