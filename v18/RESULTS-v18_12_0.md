# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sat Jan 07 2023 17:12:08 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.029ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.497ms 
    new Array(length): 0.486ms (faster)

 1,000,000 numbers:
           array.push: 31.017ms 
    new Array(length): 17.75ms (faster)

 100,000,000 numbers:
           array.push: 1,726.098ms (faster)
    new Array(length): 4,323.747ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.105ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.046ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.643ms 
    new Array(length): 0.264ms (faster)

 1,000,000 strings:
           array.push: 307.944ms 
    new Array(length): 9.333ms (faster)

 100,000,000 strings:
           array.push: 2,140.812ms (faster)
    new Array(length): 4,779.062ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|410|83|
|Array.from|16|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,014|54|
|[True conditional] Using constructor name|127,942|93|
|[True conditional] Check if property is valid then instanceof |129,769|93|
|[False conditional] Using instanceof only|593,069,243|98|
|[False conditional] Using constructor name|593,448,575|94|
|[False conditional] Check if property is valid then instanceof |593,497,664|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,128|89|
|Intl.DateTimeFormat().format(new Date())|9,050|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,487|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,699|82|
|Reusing Intl.DateTimeFormat()|457,871|98|
|Reusing dfWithOptions.format(Date.now())|279,118|98|
|Reusing dfWithOptions.format(new Date())|248,418|95|
|Date.toLocaleDateString()|453,064|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,052|85|
|Format using date.get*|3,902,572|97|
|new Date() (Baseline)|7,916,690|97|
|Date.now() (Baseline)|15,490,625|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|686,277|93|
|Using brackets {}|698,551|93|
|Using '' + |695,625|95|
|Using date.toString()|798,983|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,455,827|97|
|Using undefined assignment|592,458,428|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,186|56|
|NodeError|126,125|93|
|NodeError Range|126,757|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,270,758|94|
|Function returning explicitly undefined|1,235,873|96|
|Function returning implicitly undefined|1,278,676|96|
|Function returning string|1,263,379|91|
|Function returning integer|1,283,049|96|
|Function returning float|1,250,979|94|
|Function returning functions|1,227,078|98|
|Function returning arrow functions|1,249,603|93|
|Function returning empty object|1,276,245|93|
|Function returning empty array|1,257,676|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,195,550|97|
|using Array.includes (first item)|592,485,442|99|
|Using raw comparison|593,608,936|92|
|Using raw comparison (first item)|592,829,982|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,339,876|94|
|Using Object.getOwnPropertyNames()|57,900,412|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,315,397|96|
|Length = 10_000 - Array.at|19,337,839|97|
|Length = 1_000_000 - Array.at|19,284,725|97|
|Length = 100 - Array[length - 1]|591,132,204|97|
|Length = 10_000 - Array[length - 1]|590,521,447|96|
|Length = 1_000_000 - Array[length - 1]|590,586,397|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,596,615|96|
|Object.create({})|1,002,273|80|
|Cached Empty.prototype|592,921,064|97|
|Empty.prototype|1,105,506|82|
|Empty class|652,696|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,880,391|98|
|Using optional chain (obj.field?.field2) (undefined)|593,706,405|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,175,767|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,844,575|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,422,140|94|
|Using parseInt(x, 10) - big number (10 len)|13,757,961|94|
|Using + - small number (2 len)|593,579,812|97|
|Using + - big number (10 len)|592,207,656|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|540,594|81|
|Using ? operator to avoid rejection|561,803|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|244,725,305|93|
|Raw usage underscore usage|248,397,938|95|
|Manipulating private properties using #|172,563,395|89|
|Manipulating private properties using underscore(_)|149,655,168|89|
|Manipulating private properties using Symbol|145,586,004|87|
|Manipulating private properties using PrivateSymbol|35,785,871|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,803,486|97|
|Adding property in the object creation - small object|1,807,926|96|
|Adding property after the function creation - small class|135,010|88|
|Adding property in the function creation - small class|133,809|85|
|Adding property after the class creation - small class|111,650|84|
|Adding property in the class creation - small class|113,621|89|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,452,163|97|
|Using replaceAll()|2,130,861|95|
|Using replaceAll(//g)|2,161,888|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,669|96|
|Sort using first char|841,557|97|
|Sort using localeCompare|794,268|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,383|95|
|{...smallObject} - Total keys: 2|77,359,937|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,555|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,360|95|
|{ ...bigObject, ...anotherBigObject }|837|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,059,776|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,340,210|93|
|{ ...smallObject, ...anotherSmallObject }|16,413,799|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,762 ops/sec ±0.56% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±0.20% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,893 ops/sec ±0.43% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 943 ops/sec ±31.55% (47 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,384,342|96|
|Using backtick (`)|593,091,212|96|
|Using array.join|8,601,193|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,283,972|92|
|Using this|112,174,715|94|
