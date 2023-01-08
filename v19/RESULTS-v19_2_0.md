# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Sun Jan 08 2023 17:45:48 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.034ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.068ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 0.542ms 
    new Array(length): 0.421ms (faster)

 1,000,000 numbers:
           array.push: 41.722ms 
    new Array(length): 10.605ms (faster)

 100,000,000 numbers:
           array.push: 2,009.984ms (faster)
    new Array(length): 4,604.036ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.112ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.052ms 
    new Array(length): 0.028ms (faster)

 10,000 strings:
           array.push: 0.555ms 
    new Array(length): 0.344ms (faster)

 1,000,000 strings:
           array.push: 340.298ms 
    new Array(length): 4.549ms (faster)

 100,000,000 strings:
           array.push: 2,445.166ms (faster)
    new Array(length): 5,609.183ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|358|82|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,123|60|
|[True conditional] Using constructor name|145,904|95|
|[True conditional] Check if property is valid then instanceof |147,471|95|
|[False conditional] Using instanceof only|715,622,189|99|
|[False conditional] Using constructor name|716,030,650|98|
|[False conditional] Check if property is valid then instanceof |714,281,276|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,373|88|
|Intl.DateTimeFormat().format(new Date())|8,420|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,633|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,640|93|
|Reusing Intl.DateTimeFormat()|505,949|97|
|Reusing dfWithOptions.format(Date.now())|292,360|97|
|Reusing dfWithOptions.format(new Date())|251,950|91|
|Date.toLocaleDateString()|522,560|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,600|83|
|Format using date.get*|3,918,145|99|
|new Date() (Baseline)|8,622,982|98|
|Date.now() (Baseline)|15,657,227|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|739,148|92|
|Using brackets {}|733,495|97|
|Using '' + |730,166|95|
|Using date.toString()|820,357|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,629,768|93|
|Using undefined assignment|713,297,823|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,744|60|
|NodeError|143,401|93|
|NodeError Range|143,666|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,343,221|95|
|Function returning explicitly undefined|1,355,074|97|
|Function returning implicitly undefined|1,374,791|95|
|Function returning string|1,342,857|95|
|Function returning integer|1,370,980|96|
|Function returning float|1,350,981|96|
|Function returning functions|1,332,800|96|
|Function returning arrow functions|1,358,234|97|
|Function returning empty object|1,375,585|96|
|Function returning empty array|1,365,320|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,816,435|95|
|using Array.includes (first item)|711,703,819|94|
|Using raw comparison|715,188,648|97|
|Using raw comparison (first item)|713,857,237|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,741,170|94|
|Using Object.getOwnPropertyNames()|49,723,643|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|712,075,081|99|
|Length = 10_000 - Array.at|712,493,182|97|
|Length = 1_000_000 - Array.at|712,077,854|94|
|Length = 100 - Array[length - 1]|711,078,026|96|
|Length = 10_000 - Array[length - 1]|712,144,223|97|
|Length = 1_000_000 - Array[length - 1]|710,842,809|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,941,956|94|
|Object.create({})|1,369,436|72|
|Cached Empty.prototype|709,773,040|96|
|Empty.prototype|1,240,831|74|
|Empty class|977,650|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,366,117|95|
|Using optional chain (obj.field?.field2) (undefined)|714,080,076|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|715,454,292|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,983,160|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|180,230,499|95|
|Using parseInt(x, 10) - big number (10 len)|13,869,181|98|
|Using + - small number (2 len)|715,966,328|96|
|Using + - big number (10 len)|714,576,193|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|823,950|74|
|Using ? operator to avoid rejection|878,731|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|711,507,434|97|
|Raw usage underscore usage|712,183,729|95|
|Manipulating private properties using #|701,848,676|97|
|Manipulating private properties using underscore(_)|703,700,402|96|
|Manipulating private properties using Symbol|701,640,723|92|
|Manipulating private properties using PrivateSymbol|28,866,948|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,763,296|97|
|Adding property in the object creation - small object|2,767,755|98|
|Adding property after the function creation - small class|178,410|81|
|Adding property in the function creation - small class|183,943|84|
|Adding property after the class creation - small class|156,094|80|
|Adding property in the class creation - small class|156,373|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,359,828|95|
|Using replaceAll()|2,247,332|95|
|Using replaceAll(//g)|2,064,680|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|170,564|96|
|Sort using first char|748,748|93|
|Sort using localeCompare|707,986|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,251|95|
|{...smallObject} - Total keys: 2|66,182,100|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,549|97|
|{ ...bigObject, ...anotherBigObject }|781|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,297,322|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,038,470|94|
|{ ...smallObject, ...anotherSmallObject }|11,867,862|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,641 ops/sec ±0.79% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 409 ops/sec ±4.74% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,960 ops/sec ±0.58% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,029 ops/sec ±17.38% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|713,870,320|96|
|Using backtick (`)|713,668,036|95|
|Using array.join|7,152,058|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,184,155|93|
|Using this|144,824,735|95|
