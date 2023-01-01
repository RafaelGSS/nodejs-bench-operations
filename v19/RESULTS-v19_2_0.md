# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Sun Jan 01 2023 15:29:04 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.012ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.032ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.061ms 
    new Array(length): 0.039ms (faster)

 10,000 numbers:
           array.push: 0.486ms 
    new Array(length): 0.394ms (faster)

 1,000,000 numbers:
           array.push: 40.172ms 
    new Array(length): 9.648ms (faster)

 100,000,000 numbers:
           array.push: 1,514.585ms (faster)
    new Array(length): 4,258.476ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.105ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.047ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.512ms (faster)
    new Array(length): 5.048ms

 1,000,000 strings:
           array.push: 347.61ms 
    new Array(length): 3.716ms (faster)

 100,000,000 strings:
           array.push: 1,997.881ms (faster)
    new Array(length): 5,032.244ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|433|87|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,310|51|
|[True conditional] Using constructor name|128,764|95|
|[True conditional] Check if property is valid then instanceof |130,655|98|
|[False conditional] Using instanceof only|597,530,401|97|
|[False conditional] Using constructor name|598,228,195|95|
|[False conditional] Check if property is valid then instanceof |596,577,830|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,205|88|
|Intl.DateTimeFormat().format(new Date())|8,919|79|
|Reusing Intl.DateTimeFormat()|374,081|80|
|Format using date.get*|4,112,844|92|
|new Date() (Baseline)|9,326,059|98|
|Date.now() (Baseline)|15,987,024|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|675,823|89|
|Using brackets {}|691,091|92|
|Using '' + |688,452|91|
|Using date.toString()|809,445|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,661,645|96|
|Using undefined assignment|596,327,240|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,391|53|
|NodeError|128,477|97|
|NodeError Range|127,028|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,207,361|92|
|Function returning explicitly undefined|1,201,193|93|
|Function returning implicitly undefined|1,253,265|93|
|Function returning string|1,205,039|92|
|Function returning integer|1,223,867|93|
|Function returning float|1,228,370|92|
|Function returning functions|1,218,593|93|
|Function returning arrow functions|1,215,618|93|
|Function returning empty object|1,228,206|93|
|Function returning empty array|1,235,461|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,092,192|99|
|using Array.includes (first item)|594,487,876|98|
|Using raw comparison|597,961,128|96|
|Using raw comparison (first item)|597,495,711|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,504,697|90|
|Using Object.getOwnPropertyNames()|66,475,326|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,599,250|99|
|Length = 10_000 - Array.at|600,370,413|95|
|Length = 1_000_000 - Array.at|600,975,011|99|
|Length = 100 - Array[length - 1]|595,781,621|93|
|Length = 10_000 - Array[length - 1]|594,660,791|98|
|Length = 1_000_000 - Array[length - 1]|595,488,627|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,342,772|94|
|Object.create({})|1,596,871|79|
|Cached Empty.prototype|596,717,695|94|
|Empty.prototype|1,383,705|70|
|Empty class|1,058,591|92|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|596,631,568|98|
|Using optional chain (obj.field?.field2) (undefined)|595,887,659|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,899,373|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,210,402|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,298,661|92|
|Using parseInt(x, 10) - big number (10 len)|14,717,112|99|
|Using + - small number (2 len)|597,412,262|96|
|Using + - big number (10 len)|597,171,940|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|902,374|80|
|Using ? operator to avoid rejection|931,446|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,547,953|97|
|Raw usage underscore usage|600,744,264|96|
|Manipulating private properties using #|594,146,175|95|
|Manipulating private properties using underscore(_)|594,886,973|92|
|Manipulating private properties using Symbol|594,337,858|99|
|Manipulating private properties using PrivateSymbol|39,387,916|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,814,642|99|
|Adding property in the object creation - small object|2,823,371|97|
|Adding property after the function creation - small class|170,482|85|
|Adding property in the function creation - small class|174,484|89|
|Adding property after the class creation - small class|149,023|84|
|Adding property in the class creation - small class|148,617|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,641,890|91|
|Using replaceAll()|2,366,621|95|
|Using replaceAll(//g)|2,336,049|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,701|99|
|Sort using first char|891,433|94|
|Sort using localeCompare|813,291|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,371|95|
|{...smallObject} - Total keys: 2|69,198,978|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,445|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,105|97|
|{ ...bigObject, ...anotherBigObject }|817|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,812,842|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,989,954|97|
|{ ...smallObject, ...anotherSmallObject }|17,500,986|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,518 ops/sec ±26.04% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 376 ops/sec ±0.36% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,415 ops/sec ±0.45% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 932 ops/sec ±37.79% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|595,665,801|95|
|Using backtick (`)|597,396,997|98|
|Using array.join|8,900,842|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,547,517|94|
|Using this|120,382,259|96|
