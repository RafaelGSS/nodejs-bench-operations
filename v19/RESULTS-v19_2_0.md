# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Sat Jan 07 2023 17:35:10 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.04ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.082ms 
    new Array(length): 0.046ms (faster)

 10,000 numbers:
           array.push: 0.65ms 
    new Array(length): 0.513ms (faster)

 1,000,000 numbers:
           array.push: 58.803ms 
    new Array(length): 9.947ms (faster)

 100,000,000 numbers:
           array.push: 2,765.03ms (faster)
    new Array(length): 6,306.691ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.133ms 
    new Array(length): 0.043ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.46ms 
    new Array(length): 0.312ms (faster)

 1,000,000 strings:
           array.push: 130.346ms 
    new Array(length): 5.27ms (faster)

 100,000,000 strings:
           array.push: 3,176.973ms (faster)
    new Array(length): 6,786.98ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|315|82|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|149,062|59|
|[True conditional] Using constructor name|116,083|93|
|[True conditional] Check if property is valid then instanceof |118,594|96|
|[False conditional] Using instanceof only|565,981,817|98|
|[False conditional] Using constructor name|564,716,400|94|
|[False conditional] Check if property is valid then instanceof |564,830,449|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,957|87|
|Intl.DateTimeFormat().format(new Date())|7,277|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|4,890|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,397|92|
|Reusing Intl.DateTimeFormat()|317,324|78|
|Reusing dfWithOptions.format(Date.now())|219,945|92|
|Reusing dfWithOptions.format(new Date())|193,889|94|
|Date.toLocaleDateString()|374,165|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,825|84|
|Format using date.get*|2,855,700|91|
|new Date() (Baseline)|6,467,316|93|
|Date.now() (Baseline)|12,002,107|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|582,689|88|
|Using brackets {}|604,180|91|
|Using '' + |604,886|94|
|Using date.toString()|653,606|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,097,943|95|
|Using undefined assignment|561,937,007|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|143,434|60|
|NodeError|117,777|94|
|NodeError Range|118,232|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,075,588|97|
|Function returning explicitly undefined|1,072,732|96|
|Function returning implicitly undefined|1,094,135|95|
|Function returning string|1,035,360|95|
|Function returning integer|1,089,973|94|
|Function returning float|1,085,619|93|
|Function returning functions|1,060,771|92|
|Function returning arrow functions|1,058,796|96|
|Function returning empty object|1,086,504|94|
|Function returning empty array|1,078,274|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|547,010,574|95|
|using Array.includes (first item)|548,277,771|88|
|Using raw comparison|565,693,393|96|
|Using raw comparison (first item)|565,509,032|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,756,496|85|
|Using Object.getOwnPropertyNames()|41,454,305|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|559,818,016|97|
|Length = 10_000 - Array.at|561,100,389|92|
|Length = 1_000_000 - Array.at|562,229,164|94|
|Length = 100 - Array[length - 1]|563,223,853|95|
|Length = 10_000 - Array[length - 1]|562,652,003|94|
|Length = 1_000_000 - Array[length - 1]|561,599,892|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,875,674|89|
|Object.create({})|1,132,507|76|
|Cached Empty.prototype|551,510,879|90|
|Empty.prototype|1,078,190|81|
|Empty class|813,551|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|542,013,165|91|
|Using optional chain (obj.field?.field2) (undefined)|542,296,838|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|536,652,949|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|557,953,778|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,643,035|95|
|Using parseInt(x, 10) - big number (10 len)|11,086,148|96|
|Using + - small number (2 len)|563,814,917|94|
|Using + - big number (10 len)|564,827,686|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|655,255|73|
|Using ? operator to avoid rejection|698,112|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|553,526,629|94|
|Raw usage underscore usage|558,147,954|95|
|Manipulating private properties using #|529,711,204|92|
|Manipulating private properties using underscore(_)|526,359,708|87|
|Manipulating private properties using Symbol|515,047,013|88|
|Manipulating private properties using PrivateSymbol|22,021,160|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,162,461|92|
|Adding property in the object creation - small object|2,219,208|93|
|Adding property after the function creation - small class|142,712|78|
|Adding property in the function creation - small class|140,722|78|
|Adding property after the class creation - small class|121,785|77|
|Adding property in the class creation - small class|121,930|79|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,799,696|88|
|Using replaceAll()|1,712,207|93|
|Using replaceAll(//g)|1,553,128|87|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|135,987|88|
|Sort using first char|621,882|97|
|Sort using localeCompare|587,884|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,078|93|
|{...smallObject} - Total keys: 2|53,944,581|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,092|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,924|96|
|{ ...bigObject, ...anotherBigObject }|658|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,469,348|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,839,708|94|
|{ ...smallObject, ...anotherSmallObject }|9,528,818|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,158 ops/sec ±21.83% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 332 ops/sec ±0.83% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,171 ops/sec ±1.04% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 717 ops/sec ±14.19% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|560,239,321|96|
|Using backtick (`)|564,595,112|94|
|Using array.join|5,730,388|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|98,630,654|89|
|Using this|114,640,665|94|
