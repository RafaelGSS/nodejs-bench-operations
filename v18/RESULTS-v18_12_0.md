# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sat Jan 07 2023 17:35:07 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.027ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.492ms 
    new Array(length): 0.201ms (faster)

 1,000,000 numbers:
           array.push: 30.238ms 
    new Array(length): 17.395ms (faster)

 100,000,000 numbers:
           array.push: 1,689.964ms (faster)
    new Array(length): 4,158.822ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.611ms 
    new Array(length): 0.268ms (faster)

 1,000,000 strings:
           array.push: 307.366ms 
    new Array(length): 8.421ms (faster)

 100,000,000 strings:
           array.push: 2,118.861ms (faster)
    new Array(length): 4,631.246ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|428|83|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,666|53|
|[True conditional] Using constructor name|129,144|92|
|[True conditional] Check if property is valid then instanceof |130,113|93|
|[False conditional] Using instanceof only|592,047,119|97|
|[False conditional] Using constructor name|591,639,985|95|
|[False conditional] Check if property is valid then instanceof |591,738,131|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,316|90|
|Intl.DateTimeFormat().format(new Date())|8,980|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,185|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,772|82|
|Reusing Intl.DateTimeFormat()|459,569|97|
|Reusing dfWithOptions.format(Date.now())|278,889|99|
|Reusing dfWithOptions.format(new Date())|249,757|95|
|Date.toLocaleDateString()|449,099|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,427|89|
|Format using date.get*|3,768,433|94|
|new Date() (Baseline)|8,040,810|97|
|Date.now() (Baseline)|15,554,964|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|728,344|96|
|Using brackets {}|734,601|96|
|Using '' + |736,230|97|
|Using date.toString()|808,295|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,488,017|96|
|Using undefined assignment|590,634,588|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,716|57|
|NodeError|126,952|92|
|NodeError Range|127,437|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,279,817|95|
|Function returning explicitly undefined|1,262,309|93|
|Function returning implicitly undefined|1,286,596|94|
|Function returning string|1,275,463|91|
|Function returning integer|1,286,380|94|
|Function returning float|1,275,577|98|
|Function returning functions|1,235,838|94|
|Function returning arrow functions|1,218,872|98|
|Function returning empty object|1,271,983|98|
|Function returning empty array|1,152,365|89|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,770,307|98|
|using Array.includes (first item)|592,937,412|97|
|Using raw comparison|593,755,466|96|
|Using raw comparison (first item)|591,128,307|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,879,941|94|
|Using Object.getOwnPropertyNames()|67,184,204|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,334,085|97|
|Length = 10_000 - Array.at|19,284,501|96|
|Length = 1_000_000 - Array.at|18,785,615|97|
|Length = 100 - Array[length - 1]|589,687,493|98|
|Length = 10_000 - Array[length - 1]|589,879,797|97|
|Length = 1_000_000 - Array[length - 1]|588,732,116|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,134,473|92|
|Object.create({})|1,040,178|84|
|Cached Empty.prototype|590,774,538|96|
|Empty.prototype|1,112,963|80|
|Empty class|665,203|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,383,728|98|
|Using optional chain (obj.field?.field2) (undefined)|593,530,852|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,894,268|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,778,964|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|201,619,564|94|
|Using parseInt(x, 10) - big number (10 len)|14,423,680|97|
|Using + - small number (2 len)|594,226,960|96|
|Using + - big number (10 len)|593,507,362|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|538,450|78|
|Using ? operator to avoid rejection|571,736|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|255,464,409|91|
|Raw usage underscore usage|264,399,671|96|
|Manipulating private properties using #|188,908,385|95|
|Manipulating private properties using underscore(_)|147,410,969|91|
|Manipulating private properties using Symbol|143,396,081|95|
|Manipulating private properties using PrivateSymbol|35,856,511|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,807,356|97|
|Adding property in the object creation - small object|1,811,227|98|
|Adding property after the function creation - small class|135,250|88|
|Adding property in the function creation - small class|136,968|88|
|Adding property after the class creation - small class|113,702|86|
|Adding property in the class creation - small class|114,175|88|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,480,183|95|
|Using replaceAll()|2,151,553|98|
|Using replaceAll(//g)|2,193,646|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,494|98|
|Sort using first char|918,569|98|
|Sort using localeCompare|826,086|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,470|93|
|{...smallObject} - Total keys: 2|79,459,515|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,573|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,496|97|
|{ ...bigObject, ...anotherBigObject }|862|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,081,227|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,472,050|96|
|{ ...smallObject, ...anotherSmallObject }|16,852,228|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,687 ops/sec ±17.38% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 390 ops/sec ±0.21% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,685 ops/sec ±0.37% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 996 ops/sec ±31.54% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,264,791|96|
|Using backtick (`)|591,326,239|96|
|Using array.join|8,678,615|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,495,361|95|
|Using this|114,315,246|98|
