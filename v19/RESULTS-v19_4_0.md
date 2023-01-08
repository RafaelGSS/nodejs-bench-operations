# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Sun Jan 08 2023 17:45:54 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.068ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.155ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 0.469ms (faster)
    new Array(length): 5.119ms

 1,000,000 numbers:
           array.push: 52.38ms 
    new Array(length): 12.02ms (faster)

 100,000,000 numbers:
           array.push: 2,270.693ms (faster)
    new Array(length): 5,328.083ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.046ms

 100 strings:
           array.push: 0.022ms (faster)
    new Array(length): 0.038ms

 1,000 strings:
           array.push: 0.077ms 
    new Array(length): 0.044ms (faster)

 10,000 strings:
           array.push: 0.738ms 
    new Array(length): 0.403ms (faster)

 1,000,000 strings:
           array.push: 445.653ms 
    new Array(length): 5.457ms (faster)

 100,000,000 strings:
           array.push: 2,859.068ms (faster)
    new Array(length): 6,362.427ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|79|
|Array.from|14|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|150,320|55|
|[True conditional] Using constructor name|118,982|86|
|[True conditional] Check if property is valid then instanceof |117,698|85|
|[False conditional] Using instanceof only|761,213,125|90|
|[False conditional] Using constructor name|764,495,870|89|
|[False conditional] Check if property is valid then instanceof |771,069,699|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,220|85|
|Intl.DateTimeFormat().format(new Date())|6,184|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,208|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,121|85|
|Reusing Intl.DateTimeFormat()|447,223|80|
|Reusing dfWithOptions.format(Date.now())|255,052|88|
|Reusing dfWithOptions.format(new Date())|220,062|90|
|Date.toLocaleDateString()|456,879|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,145|83|
|Format using date.get*|3,120,994|90|
|new Date() (Baseline)|7,163,932|88|
|Date.now() (Baseline)|14,307,483|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|583,836|87|
|Using brackets {}|596,680|90|
|Using '' + |601,584|90|
|Using date.toString()|645,910|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,011,342|90|
|Using undefined assignment|743,270,630|90|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|146,822|54|
|NodeError|114,728|88|
|NodeError Range|116,170|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,199,918|89|
|Function returning explicitly undefined|1,163,413|88|
|Function returning implicitly undefined|1,213,240|88|
|Function returning string|1,178,546|89|
|Function returning integer|1,206,878|88|
|Function returning float|1,188,615|88|
|Function returning functions|1,098,346|86|
|Function returning arrow functions|1,121,115|88|
|Function returning empty object|1,174,532|89|
|Function returning empty array|1,186,850|89|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,415,326|87|
|using Array.includes (first item)|701,159,790|91|
|Using raw comparison|707,671,027|89|
|Using raw comparison (first item)|717,263,035|90|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,524,070|89|
|Using Object.getOwnPropertyNames()|42,428,541|85|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,123,490|89|
|Length = 10_000 - Array.at|578,660,558|87|
|Length = 1_000_000 - Array.at|588,203,161|90|
|Length = 100 - Array[length - 1]|702,439,889|87|
|Length = 10_000 - Array[length - 1]|705,284,051|86|
|Length = 1_000_000 - Array[length - 1]|747,567,572|88|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,947,459|89|
|Object.create({})|1,199,386|63|
|Cached Empty.prototype|745,069,697|92|
|Empty.prototype|1,124,831|58|
|Empty class|789,032|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|738,130,611|90|
|Using optional chain (obj.field?.field2) (undefined)|736,930,331|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|724,574,570|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|737,334,220|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|151,535,998|88|
|Using parseInt(x, 10) - big number (10 len)|12,339,388|85|
|Using + - small number (2 len)|734,653,979|91|
|Using + - big number (10 len)|712,221,701|83|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|648,704|73|
|Using ? operator to avoid rejection|691,857|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|612,991,232|91|
|Raw usage underscore usage|598,845,061|91|
|Manipulating private properties using #|591,668,606|90|
|Manipulating private properties using underscore(_)|592,284,667|88|
|Manipulating private properties using Symbol|603,872,919|90|
|Manipulating private properties using PrivateSymbol|28,326,427|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,162,606|89|
|Adding property in the object creation - small object|2,132,667|85|
|Adding property after the function creation - small class|140,960|80|
|Adding property in the function creation - small class|141,942|78|
|Adding property after the class creation - small class|114,131|75|
|Adding property in the class creation - small class|112,395|75|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,855,586|89|
|Using replaceAll()|1,641,250|88|
|Using replaceAll(//g)|1,643,013|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|150,926|86|
|Sort using first char|684,600|89|
|Sort using localeCompare|638,468|86|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,012|84|
|{...smallObject} - Total keys: 2|56,043,251|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,108|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,055|90|
|{ ...bigObject, ...anotherBigObject }|663|80|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,803,586|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,472,477|89|
|{ ...smallObject, ...anotherSmallObject }|12,956,089|81|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,198 ops/sec ±16.05% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 328 ops/sec ±0.96% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,120 ops/sec ±0.85% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 856 ops/sec ±17.39% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|753,763,724|89|
|Using backtick (`)|748,512,673|89|
|Using array.join|5,849,336|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|140,806,334|87|
|Using this|169,682,544|91|
