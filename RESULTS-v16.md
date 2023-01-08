# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sun Jan 08 2023 17:45:50 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.103ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.466ms 
    new Array(length): 0.241ms (faster)

 1,000,000 numbers:
           array.push: 31.296ms 
    new Array(length): 21.075ms (faster)

 100,000,000 numbers:
           array.push: 2,061.574ms (faster)
    new Array(length): 4,760.477ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.028ms (faster)

 10,000 strings:
           array.push: 0.565ms 
    new Array(length): 0.286ms (faster)

 1,000,000 strings:
           array.push: 316.997ms 
    new Array(length): 9.318ms (faster)

 100,000,000 strings:
           array.push: 2,670.67ms (faster)
    new Array(length): 5,264.788ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|381|87|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|200,947|59|
|[True conditional] Using constructor name|158,350|96|
|[True conditional] Check if property is valid then instanceof |160,151|98|
|[False conditional] Using instanceof only|712,234,748|95|
|[False conditional] Using constructor name|712,488,125|97|
|[False conditional] Check if property is valid then instanceof |713,536,732|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,463|83|
|Intl.DateTimeFormat().format(new Date())|8,442|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,090|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,403|82|
|Reusing Intl.DateTimeFormat()|489,429|76|
|Reusing dfWithOptions.format(Date.now())|296,189|98|
|Reusing dfWithOptions.format(new Date())|263,735|94|
|Date.toLocaleDateString()|475,575|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,995|86|
|Format using date.get*|3,359,252|93|
|new Date() (Baseline)|7,402,078|95|
|Date.now() (Baseline)|14,335,415|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|666,463|92|
|Using brackets {}|663,441|96|
|Using '' + |670,145|94|
|Using date.toString()|716,438|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,487,845|93|
|Using undefined assignment|711,875,043|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|193,849|60|
|NodeError|156,301|96|
|NodeError Range|154,699|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,326,775|97|
|Function returning explicitly undefined|1,319,155|93|
|Function returning implicitly undefined|1,354,122|96|
|Function returning string|1,334,760|97|
|Function returning integer|1,358,359|94|
|Function returning float|1,351,082|98|
|Function returning functions|1,316,576|96|
|Function returning arrow functions|1,336,064|97|
|Function returning empty object|1,353,235|96|
|Function returning empty array|1,358,227|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,613,357|99|
|using Array.includes (first item)|711,770,524|97|
|Using raw comparison|713,881,562|99|
|Using raw comparison (first item)|712,664,610|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,400,794|91|
|Using Object.getOwnPropertyNames()|54,924,837|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,027,298|95|
|Length = 10_000 - Array.at|16,002,231|96|
|Length = 1_000_000 - Array.at|16,033,408|94|
|Length = 100 - Array[length - 1]|711,576,328|95|
|Length = 10_000 - Array[length - 1]|710,805,280|98|
|Length = 1_000_000 - Array[length - 1]|708,791,825|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,689,876|93|
|Object.create({})|1,393,309|83|
|Cached Empty.prototype|712,077,786|97|
|Empty.prototype|1,367,427|74|
|Empty class|926,052|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,751,546|98|
|Using optional chain (obj.field?.field2) (undefined)|713,083,208|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,924,081|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,493,245|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,133,364|95|
|Using parseInt(x, 10) - big number (10 len)|12,484,601|97|
|Using + - small number (2 len)|713,669,837|96|
|Using + - big number (10 len)|711,809,110|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|769,332|80|
|Using ? operator to avoid rejection|837,799|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,652,615|96|
|Raw usage underscore usage|7,037,248|97|
|Manipulating private properties using #|2,572,261|99|
|Manipulating private properties using underscore(_)|704,000,361|91|
|Manipulating private properties using Symbol|702,772,553|94|
|Manipulating private properties using PrivateSymbol|27,414,276|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,981,887|98|
|Adding property in the object creation - small object|1,988,129|97|
|Adding property after the function creation - small class|174,305|87|
|Adding property in the function creation - small class|173,917|87|
|Adding property after the class creation - small class|143,735|81|
|Adding property in the class creation - small class|141,003|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,139,241|94|
|Using replaceAll()|2,016,916|98|
|Using replaceAll(//g)|1,920,894|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|185,456|98|
|Sort using first char|786,483|95|
|Sort using localeCompare|442,298|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,346|93|
|{...smallObject} - Total keys: 2|60,326,944|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,591|97|
|{ ...bigObject, ...anotherBigObject }|821|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,034,899|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,714,306|94|
|{ ...smallObject, ...anotherSmallObject }|13,806,003|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,617 ops/sec ±14.36% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 413 ops/sec ±0.31% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,850 ops/sec ±0.57% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 928 ops/sec ±17.45% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,735,142|97|
|Using backtick (`)|712,927,618|95|
|Using array.join|6,895,689|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,140,171|92|
|Using this|135,695,630|90|
