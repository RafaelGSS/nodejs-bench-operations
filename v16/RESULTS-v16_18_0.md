# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sat Jan 07 2023 17:12:07 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.127ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.055ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.478ms 
    new Array(length): 0.238ms (faster)

 1,000,000 numbers:
           array.push: 32.518ms 
    new Array(length): 19.457ms (faster)

 100,000,000 numbers:
           array.push: 2,105.02ms (faster)
    new Array(length): 5,102.333ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.058ms 
    new Array(length): 0.029ms (faster)

 10,000 strings:
           array.push: 0.581ms 
    new Array(length): 0.291ms (faster)

 1,000,000 strings:
           array.push: 365.873ms 
    new Array(length): 9.653ms (faster)

 100,000,000 strings:
           array.push: 2,768.926ms (faster)
    new Array(length): 5,613.632ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|360|82|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|195,881|58|
|[True conditional] Using constructor name|153,640|91|
|[True conditional] Check if property is valid then instanceof |156,368|90|
|[False conditional] Using instanceof only|712,363,278|97|
|[False conditional] Using constructor name|711,663,792|98|
|[False conditional] Check if property is valid then instanceof |713,092,072|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,852|84|
|Intl.DateTimeFormat().format(new Date())|8,078|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,797|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,765|87|
|Reusing Intl.DateTimeFormat()|375,018|77|
|Reusing dfWithOptions.format(Date.now())|299,445|95|
|Reusing dfWithOptions.format(new Date())|266,496|98|
|Date.toLocaleDateString()|485,239|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,715|84|
|Format using date.get*|3,420,974|98|
|new Date() (Baseline)|7,084,682|95|
|Date.now() (Baseline)|14,253,112|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|687,242|97|
|Using brackets {}|693,107|94|
|Using '' + |683,492|97|
|Using date.toString()|744,092|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,456,328|94|
|Using undefined assignment|710,831,370|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|190,355|55|
|NodeError|152,911|93|
|NodeError Range|152,835|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,284,628|95|
|Function returning explicitly undefined|1,272,625|97|
|Function returning implicitly undefined|1,284,849|96|
|Function returning string|1,283,812|97|
|Function returning integer|1,250,826|94|
|Function returning float|1,299,621|98|
|Function returning functions|1,245,143|99|
|Function returning arrow functions|1,281,492|94|
|Function returning empty object|1,288,677|97|
|Function returning empty array|1,287,015|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,592,505|97|
|using Array.includes (first item)|710,542,270|95|
|Using raw comparison|711,469,287|98|
|Using raw comparison (first item)|710,135,254|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,643,423|93|
|Using Object.getOwnPropertyNames()|50,647,655|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,036,115|95|
|Length = 10_000 - Array.at|16,013,823|90|
|Length = 1_000_000 - Array.at|16,060,571|95|
|Length = 100 - Array[length - 1]|706,884,339|96|
|Length = 10_000 - Array[length - 1]|708,336,161|98|
|Length = 1_000_000 - Array[length - 1]|707,881,774|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,383,455|92|
|Object.create({})|1,254,399|78|
|Cached Empty.prototype|711,565,255|95|
|Empty.prototype|1,274,396|75|
|Empty class|874,011|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,848,262|96|
|Using optional chain (obj.field?.field2) (undefined)|712,547,337|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,729,810|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|709,748,387|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,501,029|93|
|Using parseInt(x, 10) - big number (10 len)|12,499,989|95|
|Using + - small number (2 len)|712,316,030|95|
|Using + - big number (10 len)|710,103,237|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|759,487|70|
|Using ? operator to avoid rejection|827,153|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,513,015|95|
|Raw usage underscore usage|6,950,075|90|
|Manipulating private properties using #|2,547,776|96|
|Manipulating private properties using underscore(_)|701,133,472|96|
|Manipulating private properties using Symbol|699,353,856|98|
|Manipulating private properties using PrivateSymbol|26,732,391|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,648,356|97|
|Adding property in the object creation - small object|2,654,485|97|
|Adding property after the function creation - small class|172,890|84|
|Adding property in the function creation - small class|175,044|85|
|Adding property after the class creation - small class|143,086|82|
|Adding property in the class creation - small class|143,096|79|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,120,904|96|
|Using replaceAll()|2,018,389|94|
|Using replaceAll(//g)|1,899,268|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,194|96|
|Sort using first char|740,318|92|
|Sort using localeCompare|424,814|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,219|94|
|{...smallObject} - Total keys: 2|57,338,791|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,323|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,596|98|
|{ ...bigObject, ...anotherBigObject }|778|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,948,804|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,748,854|94|
|{ ...smallObject, ...anotherSmallObject }|13,576,495|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,523 ops/sec ±13.49% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 402 ops/sec ±0.10% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,825 ops/sec ±0.50% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 719 ops/sec ±17.41% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,017,726|96|
|Using backtick (`)|712,150,732|98|
|Using array.join|6,758,067|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,916,966|95|
|Using this|122,469,579|92|
