# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sat Jan 07 2023 17:35:08 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.11ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.054ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.469ms 
    new Array(length): 0.24ms (faster)

 1,000,000 numbers:
           array.push: 44.555ms 
    new Array(length): 9.316ms (faster)

 100,000,000 numbers:
           array.push: 2,052.094ms (faster)
    new Array(length): 5,029.647ms


----


 10 strings:
           array.push: 0.014ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.621ms 
    new Array(length): 0.302ms (faster)

 1,000,000 strings:
           array.push: 376.323ms 
    new Array(length): 9.584ms (faster)

 100,000,000 strings:
           array.push: 2,763.898ms (faster)
    new Array(length): 5,517.802ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|370|84|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|194,509|59|
|[True conditional] Using constructor name|155,724|94|
|[True conditional] Check if property is valid then instanceof |157,609|91|
|[False conditional] Using instanceof only|712,223,949|97|
|[False conditional] Using constructor name|713,090,424|97|
|[False conditional] Check if property is valid then instanceof |713,608,272|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,671|83|
|Intl.DateTimeFormat().format(new Date())|9,206|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,734|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,710|88|
|Reusing Intl.DateTimeFormat()|372,996|73|
|Reusing dfWithOptions.format(Date.now())|298,906|94|
|Reusing dfWithOptions.format(new Date())|263,981|94|
|Date.toLocaleDateString()|487,316|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,530|85|
|Format using date.get*|3,276,981|92|
|new Date() (Baseline)|7,187,242|95|
|Date.now() (Baseline)|14,217,074|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,322|97|
|Using brackets {}|696,879|97|
|Using '' + |686,956|97|
|Using date.toString()|746,519|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,474,981|97|
|Using undefined assignment|710,810,069|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|189,002|54|
|NodeError|150,438|93|
|NodeError Range|150,827|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,289,338|94|
|Function returning explicitly undefined|1,286,012|97|
|Function returning implicitly undefined|1,293,332|91|
|Function returning string|1,287,059|96|
|Function returning integer|1,296,370|96|
|Function returning float|1,306,720|95|
|Function returning functions|1,268,985|94|
|Function returning arrow functions|1,171,978|94|
|Function returning empty object|1,209,351|95|
|Function returning empty array|1,293,176|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,895,117|96|
|using Array.includes (first item)|711,187,282|97|
|Using raw comparison|712,596,766|99|
|Using raw comparison (first item)|711,388,655|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,987,219|91|
|Using Object.getOwnPropertyNames()|52,307,679|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,934,324|93|
|Length = 10_000 - Array.at|15,964,837|94|
|Length = 1_000_000 - Array.at|15,970,921|93|
|Length = 100 - Array[length - 1]|709,920,814|93|
|Length = 10_000 - Array[length - 1]|709,225,104|97|
|Length = 1_000_000 - Array[length - 1]|707,907,972|90|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,658,184|96|
|Object.create({})|1,280,565|77|
|Cached Empty.prototype|711,264,982|93|
|Empty.prototype|1,335,416|78|
|Empty class|900,309|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,211,934|97|
|Using optional chain (obj.field?.field2) (undefined)|712,773,363|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,763,812|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,449,239|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,424,410|94|
|Using parseInt(x, 10) - big number (10 len)|12,507,999|99|
|Using + - small number (2 len)|713,452,858|94|
|Using + - big number (10 len)|711,938,028|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|760,703|70|
|Using ? operator to avoid rejection|844,817|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,558,846|96|
|Raw usage underscore usage|7,008,241|93|
|Manipulating private properties using #|2,562,156|96|
|Manipulating private properties using underscore(_)|703,501,084|98|
|Manipulating private properties using Symbol|701,740,847|98|
|Manipulating private properties using PrivateSymbol|26,820,521|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,566,733|98|
|Adding property in the object creation - small object|2,573,068|98|
|Adding property after the function creation - small class|171,232|81|
|Adding property in the function creation - small class|175,225|83|
|Adding property after the class creation - small class|143,098|81|
|Adding property in the class creation - small class|141,030|79|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,121,781|95|
|Using replaceAll()|2,013,183|95|
|Using replaceAll(//g)|1,900,721|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|182,075|97|
|Sort using first char|755,208|92|
|Sort using localeCompare|429,279|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,218|95|
|{...smallObject} - Total keys: 2|58,044,244|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,316|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,591|97|
|{ ...bigObject, ...anotherBigObject }|775|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,061,430|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,782,191|95|
|{ ...smallObject, ...anotherSmallObject }|13,671,456|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,547 ops/sec ±13.46% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 405 ops/sec ±0.34% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,804 ops/sec ±0.51% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 716 ops/sec ±16.16% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|711,212,417|96|
|Using backtick (`)|711,520,522|96|
|Using array.join|6,853,282|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|132,736,300|93|
|Using this|132,987,185|94|
