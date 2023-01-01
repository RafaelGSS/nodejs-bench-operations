# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sun Jan 01 2023 15:29:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.106ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.056ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.464ms 
    new Array(length): 0.236ms (faster)

 1,000,000 numbers:
           array.push: 34.382ms 
    new Array(length): 24.271ms (faster)

 100,000,000 numbers:
           array.push: 2,074.207ms (faster)
    new Array(length): 4,808.933ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.58ms 
    new Array(length): 0.278ms (faster)

 1,000,000 strings:
           array.push: 330.902ms 
    new Array(length): 9.391ms (faster)

 100,000,000 strings:
           array.push: 2,681.603ms (faster)
    new Array(length): 5,412.166ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|344|86|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,473|59|
|[True conditional] Using constructor name|154,938|92|
|[True conditional] Check if property is valid then instanceof |157,666|91|
|[False conditional] Using instanceof only|712,941,023|95|
|[False conditional] Using constructor name|711,304,194|97|
|[False conditional] Check if property is valid then instanceof |713,939,402|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,865|81|
|Intl.DateTimeFormat().format(new Date())|8,295|79|
|Reusing Intl.DateTimeFormat()|439,799|84|
|Format using date.get*|3,577,490|97|
|new Date() (Baseline)|7,239,892|98|
|Date.now() (Baseline)|14,238,470|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|680,844|95|
|Using brackets {}|686,975|94|
|Using '' + |682,601|97|
|Using date.toString()|741,220|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,446,361|95|
|Using undefined assignment|711,719,668|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|190,571|54|
|NodeError|152,168|94|
|NodeError Range|153,522|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,269,503|95|
|Function returning explicitly undefined|1,241,117|95|
|Function returning implicitly undefined|1,290,730|89|
|Function returning string|1,283,900|95|
|Function returning integer|1,266,887|96|
|Function returning float|1,289,701|95|
|Function returning functions|1,266,954|98|
|Function returning arrow functions|1,269,134|98|
|Function returning empty object|1,303,422|98|
|Function returning empty array|1,282,209|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,038,452|97|
|using Array.includes (first item)|710,619,383|93|
|Using raw comparison|711,504,431|95|
|Using raw comparison (first item)|710,864,746|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,686,120|94|
|Using Object.getOwnPropertyNames()|50,217,420|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,123,374|97|
|Length = 10_000 - Array.at|16,085,808|96|
|Length = 1_000_000 - Array.at|16,071,081|94|
|Length = 100 - Array[length - 1]|709,577,199|98|
|Length = 10_000 - Array[length - 1]|708,311,283|98|
|Length = 1_000_000 - Array[length - 1]|708,536,385|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,650,050|93|
|Object.create({})|1,342,158|82|
|Cached Empty.prototype|711,604,282|99|
|Empty.prototype|1,347,941|78|
|Empty class|909,370|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,736,398|98|
|Using optional chain (obj.field?.field2) (undefined)|712,660,022|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,991,325|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,105,247|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,053,491|95|
|Using parseInt(x, 10) - big number (10 len)|12,473,870|95|
|Using + - small number (2 len)|712,749,218|97|
|Using + - big number (10 len)|712,146,403|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|793,815|77|
|Using ? operator to avoid rejection|857,246|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,502,512|97|
|Raw usage underscore usage|6,981,694|99|
|Manipulating private properties using #|2,547,679|97|
|Manipulating private properties using underscore(_)|701,493,220|94|
|Manipulating private properties using Symbol|699,431,825|98|
|Manipulating private properties using PrivateSymbol|26,854,938|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,586,370|97|
|Adding property in the object creation - small object|2,589,297|99|
|Adding property after the function creation - small class|175,056|82|
|Adding property in the function creation - small class|177,573|84|
|Adding property after the class creation - small class|143,797|81|
|Adding property in the class creation - small class|144,619|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,119,116|98|
|Using replaceAll()|2,021,015|97|
|Using replaceAll(//g)|1,905,371|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,111|97|
|Sort using first char|745,905|94|
|Sort using localeCompare|429,963|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,286|95|
|{...smallObject} - Total keys: 2|60,638,731|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,332|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,589|97|
|{ ...bigObject, ...anotherBigObject }|812|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,156,109|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,943,557|94|
|{ ...smallObject, ...anotherSmallObject }|13,643,086|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,586 ops/sec ±13.90% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 399 ops/sec ±0.55% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,780 ops/sec ±0.49% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 733 ops/sec ±18.32% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|713,445,941|98|
|Using backtick (`)|713,005,734|97|
|Using array.join|6,801,122|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,068,945|95|
|Using this|131,510,672|87|
