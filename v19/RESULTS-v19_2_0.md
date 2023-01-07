# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Sat Jan 07 2023 17:12:08 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms (faster)
    new Array(length): 0.016ms

 100 numbers:
           array.push: 0.035ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.061ms 
    new Array(length): 0.045ms (faster)

 10,000 numbers:
           array.push: 0.519ms 
    new Array(length): 0.42ms (faster)

 1,000,000 numbers:
           array.push: 51.83ms 
    new Array(length): 9.765ms (faster)

 100,000,000 numbers:
           array.push: 1,558.353ms (faster)
    new Array(length): 4,264.378ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.032ms

 100 strings:
           array.push: 0.107ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.503ms (faster)
    new Array(length): 4.956ms

 1,000,000 strings:
           array.push: 350.069ms 
    new Array(length): 4.078ms (faster)

 100,000,000 strings:
           array.push: 2,048.912ms (faster)
    new Array(length): 5,079.503ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|425|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|166,210|52|
|[True conditional] Using constructor name|126,731|89|
|[True conditional] Check if property is valid then instanceof |126,781|90|
|[False conditional] Using instanceof only|597,578,195|96|
|[False conditional] Using constructor name|598,653,968|94|
|[False conditional] Check if property is valid then instanceof |597,760,418|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,081|85|
|Intl.DateTimeFormat().format(new Date())|9,068|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,443|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,147|83|
|Reusing Intl.DateTimeFormat()|450,010|97|
|Reusing dfWithOptions.format(Date.now())|270,516|99|
|Reusing dfWithOptions.format(new Date())|237,752|97|
|Date.toLocaleDateString()|440,322|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,391|86|
|Format using date.get*|3,969,003|95|
|new Date() (Baseline)|8,987,403|96|
|Date.now() (Baseline)|15,815,255|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|742,773|96|
|Using brackets {}|759,505|95|
|Using '' + |754,417|95|
|Using date.toString()|829,439|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,668,255|97|
|Using undefined assignment|597,186,931|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,459|52|
|NodeError|128,552|96|
|NodeError Range|128,682|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,166,119|94|
|Function returning explicitly undefined|1,198,872|91|
|Function returning implicitly undefined|1,240,257|92|
|Function returning string|1,223,657|91|
|Function returning integer|1,256,482|90|
|Function returning float|1,240,474|91|
|Function returning functions|1,225,464|88|
|Function returning arrow functions|1,217,240|90|
|Function returning empty object|1,239,635|91|
|Function returning empty array|1,191,939|90|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,154,937|99|
|using Array.includes (first item)|597,084,754|96|
|Using raw comparison|599,665,103|98|
|Using raw comparison (first item)|598,554,932|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,166,037|91|
|Using Object.getOwnPropertyNames()|65,121,962|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|599,882,355|93|
|Length = 10_000 - Array.at|599,895,821|97|
|Length = 1_000_000 - Array.at|600,294,762|97|
|Length = 100 - Array[length - 1]|597,078,013|97|
|Length = 10_000 - Array[length - 1]|596,844,907|99|
|Length = 1_000_000 - Array[length - 1]|595,919,304|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,403,164|94|
|Object.create({})|1,577,541|76|
|Cached Empty.prototype|598,107,228|95|
|Empty.prototype|1,358,393|69|
|Empty class|1,031,986|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|596,456,718|94|
|Using optional chain (obj.field?.field2) (undefined)|597,508,696|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|598,047,180|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,184,908|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,619,970|93|
|Using parseInt(x, 10) - big number (10 len)|14,403,256|97|
|Using + - small number (2 len)|599,776,265|94|
|Using + - big number (10 len)|598,697,792|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|899,410|81|
|Using ? operator to avoid rejection|929,607|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,787,854|98|
|Raw usage underscore usage|600,663,624|99|
|Manipulating private properties using #|592,755,404|97|
|Manipulating private properties using underscore(_)|594,250,898|97|
|Manipulating private properties using Symbol|592,977,856|97|
|Manipulating private properties using PrivateSymbol|39,305,748|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,836,219|96|
|Adding property in the object creation - small object|2,838,692|95|
|Adding property after the function creation - small class|170,909|84|
|Adding property in the function creation - small class|172,462|85|
|Adding property after the class creation - small class|144,912|82|
|Adding property in the class creation - small class|148,157|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,636,226|94|
|Using replaceAll()|2,350,227|98|
|Using replaceAll(//g)|2,280,668|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,506|96|
|Sort using first char|859,858|94|
|Sort using localeCompare|813,771|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,332|95|
|{...smallObject} - Total keys: 2|69,084,808|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,457|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,092|96|
|{ ...bigObject, ...anotherBigObject }|817|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,874,053|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,249,575|98|
|{ ...smallObject, ...anotherSmallObject }|17,552,601|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,716 ops/sec ±0.48% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 374 ops/sec ±0.26% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,374 ops/sec ±0.46% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,005 ops/sec ±19.91% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|596,996,278|97|
|Using backtick (`)|598,147,151|94|
|Using array.join|8,959,593|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,284,757|89|
|Using this|120,163,058|94|
