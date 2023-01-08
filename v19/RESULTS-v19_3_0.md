# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sun Jan 08 2023 17:45:49 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.032ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.072ms 
    new Array(length): 0.037ms (faster)

 10,000 numbers:
           array.push: 1.225ms 
    new Array(length): 0.424ms (faster)

 1,000,000 numbers:
           array.push: 46.685ms 
    new Array(length): 8.265ms (faster)

 100,000,000 numbers:
           array.push: 1,959.546ms (faster)
    new Array(length): 5,522.627ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.024ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.368ms 
    new Array(length): 0.257ms (faster)

 1,000,000 strings:
           array.push: 32.395ms 
    new Array(length): 4.504ms (faster)

 100,000,000 strings:
           array.push: 2,600.347ms (faster)
    new Array(length): 5,661.37ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|373|85|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,133|54|
|[True conditional] Using constructor name|147,093|93|
|[True conditional] Check if property is valid then instanceof |149,037|93|
|[False conditional] Using instanceof only|714,063,580|94|
|[False conditional] Using constructor name|713,725,396|96|
|[False conditional] Check if property is valid then instanceof |714,874,844|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,171|86|
|Intl.DateTimeFormat().format(new Date())|8,674|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,850|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,540|88|
|Reusing Intl.DateTimeFormat()|520,733|96|
|Reusing dfWithOptions.format(Date.now())|296,222|98|
|Reusing dfWithOptions.format(new Date())|256,298|96|
|Date.toLocaleDateString()|515,250|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,027|84|
|Format using date.get*|3,823,184|96|
|new Date() (Baseline)|8,477,569|97|
|Date.now() (Baseline)|15,613,898|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|701,837|96|
|Using brackets {}|701,950|97|
|Using '' + |707,849|94|
|Using date.toString()|788,527|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,601,105|95|
|Using undefined assignment|713,238,224|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,499|56|
|NodeError|144,560|94|
|NodeError Range|146,251|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,378,349|95|
|Function returning explicitly undefined|1,357,325|90|
|Function returning implicitly undefined|1,372,318|95|
|Function returning string|1,366,307|96|
|Function returning integer|1,319,756|94|
|Function returning float|1,359,362|95|
|Function returning functions|1,330,505|97|
|Function returning arrow functions|1,350,619|94|
|Function returning empty object|1,361,670|96|
|Function returning empty array|1,364,377|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,841,189|96|
|using Array.includes (first item)|713,494,856|95|
|Using raw comparison|715,516,825|97|
|Using raw comparison (first item)|713,285,881|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,725,779|91|
|Using Object.getOwnPropertyNames()|51,914,922|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|713,555,819|98|
|Length = 10_000 - Array.at|714,581,458|95|
|Length = 1_000_000 - Array.at|714,358,036|96|
|Length = 100 - Array[length - 1]|711,160,576|99|
|Length = 10_000 - Array[length - 1]|711,621,633|93|
|Length = 1_000_000 - Array[length - 1]|710,718,779|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,748,906|93|
|Object.create({})|1,430,711|79|
|Cached Empty.prototype|713,801,931|94|
|Empty.prototype|1,355,163|75|
|Empty class|966,146|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,512,759|98|
|Using optional chain (obj.field?.field2) (undefined)|714,938,413|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|713,970,521|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,704,571|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,860,299|97|
|Using parseInt(x, 10) - big number (10 len)|13,877,278|97|
|Using + - small number (2 len)|715,677,530|99|
|Using + - big number (10 len)|712,828,023|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|792,496|75|
|Using ? operator to avoid rejection|859,480|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|712,540,936|97|
|Raw usage underscore usage|713,905,201|98|
|Manipulating private properties using #|703,016,075|99|
|Manipulating private properties using underscore(_)|703,120,731|97|
|Manipulating private properties using Symbol|701,553,477|97|
|Manipulating private properties using PrivateSymbol|29,198,122|99|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,102,076|96|
|Adding property in the object creation - small object|2,101,861|97|
|Adding property after the function creation - small class|179,570|81|
|Adding property in the function creation - small class|176,236|79|
|Adding property after the class creation - small class|149,814|79|
|Adding property in the class creation - small class|151,609|76|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,390,633|91|
|Using replaceAll()|2,268,089|98|
|Using replaceAll(//g)|2,079,556|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|169,940|93|
|Sort using first char|764,516|94|
|Sort using localeCompare|726,469|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,310|95|
|{...smallObject} - Total keys: 2|67,207,993|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,332|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,604|98|
|{ ...bigObject, ...anotherBigObject }|790|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,274,267|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,036,339|97|
|{ ...smallObject, ...anotherSmallObject }|11,853,719|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,517 ops/sec ±16.65% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 400 ops/sec ±0.61% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,114 ops/sec ±0.56% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,021 ops/sec ±17.23% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,376,596|97|
|Using backtick (`)|714,045,665|97|
|Using array.join|7,252,363|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,650,584|96|
|Using this|144,703,311|93|
