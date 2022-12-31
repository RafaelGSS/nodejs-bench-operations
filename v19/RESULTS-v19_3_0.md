# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sat Dec 31 2022 20:19:44 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.038ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.065ms 
    new Array(length): 0.037ms (faster)

 10,000 numbers:
           array.push: 1.159ms 
    new Array(length): 0.425ms (faster)

 1,000,000 numbers:
           array.push: 30.382ms 
    new Array(length): 13.229ms (faster)

 100,000,000 numbers:
           array.push: 1,637.48ms (faster)
    new Array(length): 4,975.116ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.041ms 
    new Array(length): 0.018ms (faster)

 10,000 strings:
           array.push: 0.307ms 
    new Array(length): 0.22ms (faster)

 1,000,000 strings:
           array.push: 30.329ms 
    new Array(length): 3.94ms (faster)

 100,000,000 strings:
           array.push: 2,030.983ms (faster)
    new Array(length): 5,062.131ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|421|87|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,482|51|
|[True conditional] Using constructor name|129,532|95|
|[True conditional] Check if property is valid then instanceof |130,660|96|
|[False conditional] Using instanceof only|599,559,047|99|
|[False conditional] Using constructor name|599,832,096|97|
|[False conditional] Check if property is valid then instanceof |599,389,210|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,715|87|
|Intl.DateTimeFormat().format(new Date())|9,195|80|
|Reusing Intl.DateTimeFormat()|396,053|96|
|Format using date.get*|3,370,227|98|
|new Date() (Baseline)|8,828,242|96|
|Date.now() (Baseline)|16,102,702|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|723,171|97|
|Using brackets {}|734,076|96|
|Using '' + |729,514|97|
|Using date.toString()|791,387|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,606,701|94|
|Using undefined assignment|598,511,981|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,771|52|
|NodeError|128,744|97|
|NodeError Range|128,817|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,327,797|96|
|Function returning explicitly undefined|1,286,951|96|
|Function returning implicitly undefined|1,358,342|93|
|Function returning string|1,336,021|94|
|Function returning integer|1,368,941|96|
|Function returning float|1,353,241|96|
|Function returning functions|1,305,044|94|
|Function returning arrow functions|1,338,335|96|
|Function returning empty object|1,329,111|96|
|Function returning empty array|1,351,338|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,875,132|90|
|using Array.includes (first item)|597,548,940|95|
|Using raw comparison|599,592,001|97|
|Using raw comparison (first item)|599,559,520|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,093,348|94|
|Using Object.getOwnPropertyNames()|56,170,739|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|599,020,005|98|
|Length = 10_000 - Array.at|599,896,476|99|
|Length = 1_000_000 - Array.at|599,977,402|98|
|Length = 100 - Array[length - 1]|598,598,539|97|
|Length = 10_000 - Array[length - 1]|597,133,451|96|
|Length = 1_000_000 - Array[length - 1]|596,373,805|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,744,939|94|
|Object.create({})|1,672,716|81|
|Cached Empty.prototype|599,189,630|99|
|Empty.prototype|1,544,854|78|
|Empty class|1,027,996|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|598,157,549|97|
|Using optional chain (obj.field?.field2) (undefined)|599,214,652|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|600,030,416|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|598,338,849|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,001,213|94|
|Using parseInt(x, 10) - big number (10 len)|14,812,458|99|
|Using + - small number (2 len)|600,326,912|98|
|Using + - big number (10 len)|598,306,058|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|889,082|81|
|Using ? operator to avoid rejection|926,056|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|598,670,818|98|
|Raw usage underscore usage|600,094,042|95|
|Manipulating private properties using #|593,164,107|99|
|Manipulating private properties using underscore(_)|594,112,757|95|
|Manipulating private properties using Symbol|593,077,125|94|
|Manipulating private properties using PrivateSymbol|39,315,297|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,772,471|98|
|Adding property in the object creation - small object|2,768,144|99|
|Adding property after the function creation - small class|167,098|86|
|Adding property in the function creation - small class|171,344|89|
|Adding property after the class creation - small class|147,246|86|
|Adding property in the class creation - small class|144,218|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,625,612|95|
|Using replaceAll()|2,331,950|97|
|Using replaceAll(//g)|2,289,417|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,164|95|
|Sort using first char|833,966|97|
|Sort using localeCompare|791,438|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,328|97|
|{...smallObject} - Total keys: 2|69,092,400|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,459|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,117|96|
|{ ...bigObject, ...anotherBigObject }|807|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,734,065|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,256,799|96|
|{ ...smallObject, ...anotherSmallObject }|17,343,339|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,579 ops/sec ±16.04% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 371 ops/sec ±5.50% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,490 ops/sec ±0.47% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 977 ops/sec ±29.77% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|597,954,587|97|
|Using backtick (`)|599,865,765|98|
|Using array.join|9,069,387|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,137,092|96|
|Using this|119,726,007|90|
