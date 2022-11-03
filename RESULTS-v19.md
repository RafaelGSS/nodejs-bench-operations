# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Thu Nov 03 2022 16:12:53 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.048ms 
    new Array(length): 0.019ms (faster)

 1,000 numbers:
           array.push: 0.081ms 
    new Array(length): 0.044ms (faster)

 10,000 numbers:
           array.push: 0.658ms 
    new Array(length): 0.522ms (faster)

 1,000,000 numbers:
           array.push: 50.407ms 
    new Array(length): 12.42ms (faster)

 100,000,000 numbers:
           array.push: 2,215.429ms (faster)
    new Array(length): 6,208.78ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.122ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.448ms 
    new Array(length): 0.306ms (faster)

 1,000,000 strings:
           array.push: 40.558ms 
    new Array(length): 5.346ms (faster)

 100,000,000 strings:
           array.push: 2,998.629ms (faster)
    new Array(length): 6,470.821ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|81|
|Array.from|13|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,085|57|
|[True conditional] Using constructor name|122,133|89|
|[True conditional] Check if property is valid then instanceof |124,172|93|
|[False conditional] Using instanceof only|591,299,605|93|
|[False conditional] Using constructor name|590,665,022|97|
|[False conditional] Check if property is valid then instanceof |583,985,498|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,218|82|
|Intl.DateTimeFormat().format(new Date())|7,278|79|
|Reusing Intl.DateTimeFormat()|353,023|75|
|Format using date.get*|3,339,900|97|
|new Date() (Baseline)|7,270,723|93|
|Date.now() (Baseline)|12,957,969|92|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|558,555|89|
|Using brackets {}|590,802|96|
|Using '' + |593,419|92|
|Using date.toString()|645,653|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,204,872|94|
|Using undefined assignment|592,541,698|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|151,664|59|
|NodeError|121,688|93|
|NodeError Range|122,001|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,150,369|96|
|Function returning explicitly undefined|1,133,003|95|
|Function returning implicitly undefined|1,183,244|91|
|Function returning string|1,159,542|94|
|Function returning integer|1,169,697|91|
|Function returning float|1,166,086|93|
|Function returning functions|1,147,959|95|
|Function returning arrow functions|1,127,284|93|
|Function returning empty object|1,168,710|96|
|Function returning empty array|1,170,895|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,572,704|96|
|using Array.includes (first item)|587,649,168|94|
|Using raw comparison|591,351,289|91|
|Using raw comparison (first item)|589,715,013|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,308,068|93|
|Using Object.getOwnPropertyNames()|39,571,568|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|473,636,889|97|
|Length = 10_000 - Array.at|476,433,243|93|
|Length = 1_000_000 - Array.at|466,920,174|94|
|Length = 100 - Array[length - 1]|590,281,635|92|
|Length = 10_000 - Array[length - 1]|593,533,620|94|
|Length = 1_000_000 - Array[length - 1]|589,016,086|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,438,063|93|
|Object.create({})|1,154,130|77|
|Cached Empty.prototype|591,007,800|94|
|Empty.prototype|1,093,391|75|
|Empty class|824,936|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,035,956|94|
|Using optional chain (obj.field?.field2) (undefined)|591,558,716|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,712,016|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|588,095,280|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|148,562,313|92|
|Using parseInt(x, 10) - big number (10 len)|12,425,935|95|
|Using + - small number (2 len)|592,193,762|89|
|Using + - big number (10 len)|590,466,470|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|656,060|73|
|Using ? operator to avoid rejection|712,445|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|588,569,792|92|
|Raw usage underscore usage|587,955,953|90|
|Manipulating private properties using #|577,270,726|94|
|Manipulating private properties using underscore(_)|584,353,637|92|
|Manipulating private properties using Symbol|567,150,716|93|
|Manipulating private properties using PrivateSymbol|25,786,260|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,997,924|88|
|Using replaceAll()|1,793,337|95|
|Using replaceAll(//g)|1,755,626|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|143,744|95|
|Sort using first char|634,788|95|
|Sort using localeCompare|603,094|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|995|93|
|{...smallObject} - Total keys: 2|56,704,423|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,132|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,108|93|
|{ ...bigObject, ...anotherBigObject }|642|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,112,316|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,230,831|93|
|{ ...smallObject, ...anotherSmallObject }|10,616,975|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,267 ops/sec ±17.44% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 336 ops/sec ±0.72% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,341 ops/sec ±0.90% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 825 ops/sec ±17.02% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|582,078,342|89|
|Using backtick (`)|586,032,268|94|
|Using array.join|5,838,235|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|108,358,304|92|
|Using this|120,401,635|96|
