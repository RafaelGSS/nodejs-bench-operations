# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sat Dec 31 2022 20:19:46 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.101ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.471ms 
    new Array(length): 0.233ms (faster)

 1,000,000 numbers:
           array.push: 43.451ms 
    new Array(length): 8.686ms (faster)

 100,000,000 numbers:
           array.push: 1,950.423ms (faster)
    new Array(length): 4,769.702ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.6ms 
    new Array(length): 0.291ms (faster)

 1,000,000 strings:
           array.push: 326.234ms 
    new Array(length): 9.292ms (faster)

 100,000,000 strings:
           array.push: 2,673.589ms (faster)
    new Array(length): 5,323.407ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|356|82|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|199,209|58|
|[True conditional] Using constructor name|154,976|93|
|[True conditional] Check if property is valid then instanceof |156,246|92|
|[False conditional] Using instanceof only|713,060,785|99|
|[False conditional] Using constructor name|712,488,304|93|
|[False conditional] Check if property is valid then instanceof |713,836,903|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,432|82|
|Intl.DateTimeFormat().format(new Date())|8,379|81|
|Reusing Intl.DateTimeFormat()|429,767|87|
|Format using date.get*|3,076,750|96|
|new Date() (Baseline)|7,453,656|97|
|Date.now() (Baseline)|14,242,567|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,694|95|
|Using brackets {}|697,832|96|
|Using '' + |693,368|98|
|Using date.toString()|748,699|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,472,566|97|
|Using undefined assignment|711,831,380|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|196,640|55|
|NodeError|154,366|93|
|NodeError Range|153,404|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,315,599|97|
|Function returning explicitly undefined|1,324,227|92|
|Function returning implicitly undefined|1,344,644|93|
|Function returning string|1,314,452|98|
|Function returning integer|1,368,069|95|
|Function returning float|1,353,607|99|
|Function returning functions|1,318,201|98|
|Function returning arrow functions|1,323,072|97|
|Function returning empty object|1,351,961|99|
|Function returning empty array|1,338,090|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,469,904|98|
|using Array.includes (first item)|712,495,936|91|
|Using raw comparison|713,585,741|97|
|Using raw comparison (first item)|712,615,236|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,601,889|95|
|Using Object.getOwnPropertyNames()|51,053,781|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,083,743|95|
|Length = 10_000 - Array.at|16,110,906|97|
|Length = 1_000_000 - Array.at|15,982,361|97|
|Length = 100 - Array[length - 1]|710,700,141|96|
|Length = 10_000 - Array[length - 1]|709,988,752|98|
|Length = 1_000_000 - Array[length - 1]|709,124,221|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,365,320|95|
|Object.create({})|1,386,758|82|
|Cached Empty.prototype|713,271,693|96|
|Empty.prototype|1,318,706|72|
|Empty class|911,529|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,058,260|96|
|Using optional chain (obj.field?.field2) (undefined)|713,271,812|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,238,057|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,576,247|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,385,469|95|
|Using parseInt(x, 10) - big number (10 len)|12,373,188|94|
|Using + - small number (2 len)|713,075,118|97|
|Using + - big number (10 len)|712,175,095|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|765,513|77|
|Using ? operator to avoid rejection|828,512|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,483,397|97|
|Raw usage underscore usage|7,049,283|98|
|Manipulating private properties using #|2,555,239|95|
|Manipulating private properties using underscore(_)|701,958,449|95|
|Manipulating private properties using Symbol|701,492,520|95|
|Manipulating private properties using PrivateSymbol|26,671,029|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,970,576|99|
|Adding property in the object creation - small object|1,976,973|96|
|Adding property after the function creation - small class|173,043|86|
|Adding property in the function creation - small class|171,706|87|
|Adding property after the class creation - small class|138,854|78|
|Adding property in the class creation - small class|143,155|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,134,397|95|
|Using replaceAll()|2,017,365|99|
|Using replaceAll(//g)|1,910,518|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,507|97|
|Sort using first char|777,245|98|
|Sort using localeCompare|438,442|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,324|94|
|{...smallObject} - Total keys: 2|60,700,286|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,328|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,618|98|
|{ ...bigObject, ...anotherBigObject }|818|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,984,226|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,980,439|94|
|{ ...smallObject, ...anotherSmallObject }|13,743,214|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,608 ops/sec ±13.48% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 410 ops/sec ±0.44% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,745 ops/sec ±0.41% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 961 ops/sec ±17.10% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,977,857|96|
|Using backtick (`)|713,396,454|99|
|Using array.join|6,881,338|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,622,413|95|
|Using this|133,571,796|97|
