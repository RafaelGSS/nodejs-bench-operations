# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sat Jan 07 2023 17:12:08 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.019ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.032ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.066ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 1.366ms (faster)
    new Array(length): 3.938ms

 1,000,000 numbers:
           array.push: 24.205ms 
    new Array(length): 12.93ms (faster)

 100,000,000 numbers:
           array.push: 1,593.261ms (faster)
    new Array(length): 4,246.331ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.019ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.049ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.458ms 
    new Array(length): 0.266ms (faster)

 1,000,000 strings:
           array.push: 354.922ms 
    new Array(length): 4.214ms (faster)

 100,000,000 strings:
           array.push: 1,991.454ms (faster)
    new Array(length): 4,972.202ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|447|85|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,047|49|
|[True conditional] Using constructor name|128,462|91|
|[True conditional] Check if property is valid then instanceof |131,077|98|
|[False conditional] Using instanceof only|597,832,553|97|
|[False conditional] Using constructor name|596,830,286|96|
|[False conditional] Check if property is valid then instanceof |596,437,978|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,949|91|
|Intl.DateTimeFormat().format(new Date())|8,222|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,611|98|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,171|76|
|Reusing Intl.DateTimeFormat()|469,699|99|
|Reusing dfWithOptions.format(Date.now())|278,214|96|
|Reusing dfWithOptions.format(new Date())|226,441|86|
|Date.toLocaleDateString()|477,479|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,555|88|
|Format using date.get*|4,023,820|94|
|new Date() (Baseline)|9,312,217|99|
|Date.now() (Baseline)|16,165,162|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|729,166|98|
|Using brackets {}|733,227|99|
|Using '' + |732,799|97|
|Using date.toString()|804,467|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,663,118|95|
|Using undefined assignment|597,173,498|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,037|51|
|NodeError|129,302|96|
|NodeError Range|129,436|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,345,966|94|
|Function returning explicitly undefined|1,325,992|95|
|Function returning implicitly undefined|1,384,495|96|
|Function returning string|1,308,222|95|
|Function returning integer|1,352,103|94|
|Function returning float|1,373,138|93|
|Function returning functions|1,205,474|93|
|Function returning arrow functions|1,344,639|98|
|Function returning empty object|1,378,394|95|
|Function returning empty array|1,314,784|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,668,338|98|
|using Array.includes (first item)|596,334,158|97|
|Using raw comparison|596,894,989|96|
|Using raw comparison (first item)|597,223,827|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|66,533,910|96|
|Using Object.getOwnPropertyNames()|68,929,497|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|601,503,040|98|
|Length = 10_000 - Array.at|602,425,654|98|
|Length = 1_000_000 - Array.at|602,283,512|98|
|Length = 100 - Array[length - 1]|595,782,424|97|
|Length = 10_000 - Array[length - 1]|595,810,852|97|
|Length = 1_000_000 - Array[length - 1]|592,935,450|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,995,792|97|
|Object.create({})|1,702,345|82|
|Cached Empty.prototype|596,175,982|97|
|Empty.prototype|1,615,119|81|
|Empty class|1,055,984|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,289,149|94|
|Using optional chain (obj.field?.field2) (undefined)|596,691,606|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,430,725|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,828,618|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,609,856|93|
|Using parseInt(x, 10) - big number (10 len)|14,925,729|98|
|Using + - small number (2 len)|597,375,917|95|
|Using + - big number (10 len)|597,261,567|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|886,118|81|
|Using ? operator to avoid rejection|949,121|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|601,673,296|100|
|Raw usage underscore usage|602,823,059|97|
|Manipulating private properties using #|595,514,018|99|
|Manipulating private properties using underscore(_)|597,106,136|99|
|Manipulating private properties using Symbol|595,561,347|92|
|Manipulating private properties using PrivateSymbol|40,029,712|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,780,780|99|
|Adding property in the object creation - small object|2,788,942|98|
|Adding property after the function creation - small class|169,350|85|
|Adding property in the function creation - small class|170,912|87|
|Adding property after the class creation - small class|149,657|83|
|Adding property in the class creation - small class|148,247|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,670,138|94|
|Using replaceAll()|2,375,503|93|
|Using replaceAll(//g)|2,335,770|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|191,291|97|
|Sort using first char|945,153|98|
|Sort using localeCompare|838,234|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,407|93|
|{...smallObject} - Total keys: 2|71,771,057|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,461|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,120|97|
|{ ...bigObject, ...anotherBigObject }|836|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,963,813|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,314,973|97|
|{ ...smallObject, ...anotherSmallObject }|17,851,922|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,654 ops/sec ±16.69% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±0.38% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,542 ops/sec ±0.47% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 947 ops/sec ±13.78% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|594,480,201|96|
|Using backtick (`)|596,401,676|96|
|Using array.join|9,289,785|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|117,058,083|93|
|Using this|120,717,603|94|
