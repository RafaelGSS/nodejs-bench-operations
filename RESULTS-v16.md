# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sat Dec 24 2022 18:48:55 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.133ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.051ms 
    new Array(length): 0.023ms (faster)

 10,000 numbers:
           array.push: 0.402ms 
    new Array(length): 0.22ms (faster)

 1,000,000 numbers:
           array.push: 40.358ms 
    new Array(length): 8.721ms (faster)

 100,000,000 numbers:
           array.push: 1,520.374ms (faster)
    new Array(length): 4,309.04ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.05ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.524ms 
    new Array(length): 0.244ms (faster)

 1,000,000 strings:
           array.push: 310.162ms 
    new Array(length): 9.004ms (faster)

 100,000,000 strings:
           array.push: 2,142.439ms (faster)
    new Array(length): 4,699.656ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|380|83|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,190|54|
|[True conditional] Using constructor name|131,558|94|
|[True conditional] Check if property is valid then instanceof |132,797|93|
|[False conditional] Using instanceof only|595,827,270|98|
|[False conditional] Using constructor name|595,427,286|93|
|[False conditional] Check if property is valid then instanceof |596,594,192|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,991|82|
|Intl.DateTimeFormat().format(new Date())|9,063|80|
|Reusing Intl.DateTimeFormat()|405,348|89|
|Format using date.get*|3,722,772|96|
|new Date() (Baseline)|7,616,089|94|
|Date.now() (Baseline)|14,127,221|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|717,585|97|
|Using brackets {}|730,426|99|
|Using '' + |733,814|97|
|Using date.toString()|803,157|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,417,817|95|
|Using undefined assignment|594,722,717|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|169,548|52|
|NodeError|131,561|93|
|NodeError Range|133,201|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,148,679|95|
|Function returning explicitly undefined|1,191,837|96|
|Function returning implicitly undefined|1,149,014|94|
|Function returning string|1,202,342|98|
|Function returning integer|1,178,547|96|
|Function returning float|1,210,496|98|
|Function returning functions|1,093,206|97|
|Function returning arrow functions|1,187,842|97|
|Function returning empty object|1,207,822|99|
|Function returning empty array|1,188,475|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,035,412|98|
|using Array.includes (first item)|595,081,578|91|
|Using raw comparison|595,737,126|95|
|Using raw comparison (first item)|594,832,333|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,838,523|93|
|Using Object.getOwnPropertyNames()|52,297,364|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,721,625|97|
|Length = 10_000 - Array.at|18,639,869|98|
|Length = 1_000_000 - Array.at|18,359,205|97|
|Length = 100 - Array[length - 1]|593,661,268|96|
|Length = 10_000 - Array[length - 1]|593,227,919|93|
|Length = 1_000_000 - Array[length - 1]|579,677,904|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,201,512|93|
|Object.create({})|1,470,308|82|
|Cached Empty.prototype|595,488,207|95|
|Empty.prototype|1,465,233|77|
|Empty class|905,361|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,526,684|95|
|Using optional chain (obj.field?.field2) (undefined)|596,163,839|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|595,882,046|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,475,029|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|219,259,351|92|
|Using parseInt(x, 10) - big number (10 len)|15,257,029|96|
|Using + - small number (2 len)|589,909,422|98|
|Using + - big number (10 len)|595,398,484|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|786,626|74|
|Using ? operator to avoid rejection|851,729|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,319,530|96|
|Raw usage underscore usage|7,634,569|96|
|Manipulating private properties using #|2,789,541|94|
|Manipulating private properties using underscore(_)|589,384,848|97|
|Manipulating private properties using Symbol|587,993,583|99|
|Manipulating private properties using PrivateSymbol|33,283,302|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,640,047|99|
|Adding property in the object creation - small object|2,639,594|99|
|Adding property after the function creation - small class|166,841|89|
|Adding property in the function creation - small class|169,337|88|
|Adding property after the class creation - small class|141,355|82|
|Adding property in the class creation - small class|142,594|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,393,841|97|
|Using replaceAll()|2,210,003|95|
|Using replaceAll(//g)|2,145,647|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,744|95|
|Sort using first char|780,799|98|
|Sort using localeCompare|434,337|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,375|97|
|{...smallObject} - Total keys: 2|65,917,020|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,597|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,641|96|
|{ ...bigObject, ...anotherBigObject }|839|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,993,800|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,359,504|95|
|{ ...smallObject, ...anotherSmallObject }|15,920,594|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,627 ops/sec ±14.78% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 362 ops/sec ±0.62% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,997 ops/sec ±0.43% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 866 ops/sec ±15.80% (58 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|596,029,584|97|
|Using backtick (`)|595,129,598|96|
|Using array.join|8,545,128|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|109,225,862|94|
|Using this|110,987,153|96|
