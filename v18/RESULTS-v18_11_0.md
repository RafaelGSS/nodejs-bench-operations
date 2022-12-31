# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.11.0`
* __Run:__ Sat Dec 31 2022 20:04:42 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.059ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.492ms 
    new Array(length): 0.225ms (faster)

 1,000,000 numbers:
           array.push: 30.334ms 
    new Array(length): 16.557ms (faster)

 100,000,000 numbers:
           array.push: 1,512.19ms (faster)
    new Array(length): 4,463.124ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.05ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.588ms 
    new Array(length): 0.257ms (faster)

 1,000,000 strings:
           array.push: 334.699ms 
    new Array(length): 8.505ms (faster)

 100,000,000 strings:
           array.push: 2,207.153ms (faster)
    new Array(length): 4,679.603ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|404|82|
|Array.from|17|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|168,755|53|
|[True conditional] Using constructor name|128,867|94|
|[True conditional] Check if property is valid then instanceof |129,676|94|
|[False conditional] Using instanceof only|592,934,537|93|
|[False conditional] Using constructor name|592,483,196|94|
|[False conditional] Check if property is valid then instanceof |593,100,929|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,233|89|
|Intl.DateTimeFormat().format(new Date())|8,991|79|
|Reusing Intl.DateTimeFormat()|388,293|84|
|Format using date.get*|3,232,578|96|
|new Date() (Baseline)|7,129,542|99|
|Date.now() (Baseline)|15,308,380|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|727,704|98|
|Using brackets {}|740,167|97|
|Using '' + |736,025|97|
|Using date.toString()|802,299|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,456,564|95|
|Using undefined assignment|591,294,853|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,385|56|
|NodeError|125,343|92|
|NodeError Range|123,755|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,250,690|94|
|Function returning explicitly undefined|1,209,518|89|
|Function returning implicitly undefined|1,262,871|93|
|Function returning string|1,247,072|93|
|Function returning integer|1,241,766|95|
|Function returning float|1,254,429|95|
|Function returning functions|1,195,722|94|
|Function returning arrow functions|1,216,900|93|
|Function returning empty object|1,223,691|95|
|Function returning empty array|1,249,776|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,507,350|98|
|using Array.includes (first item)|592,341,668|97|
|Using raw comparison|594,220,823|96|
|Using raw comparison (first item)|593,163,573|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|66,418,375|92|
|Using Object.getOwnPropertyNames()|68,313,612|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,386,183|96|
|Length = 10_000 - Array.at|19,262,947|92|
|Length = 1_000_000 - Array.at|19,339,276|96|
|Length = 100 - Array[length - 1]|591,691,448|99|
|Length = 10_000 - Array[length - 1]|591,225,188|97|
|Length = 1_000_000 - Array[length - 1]|590,748,265|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,467,489|95|
|Object.create({})|1,040,632|83|
|Cached Empty.prototype|592,061,012|98|
|Empty.prototype|1,085,512|82|
|Empty class|679,014|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,360,714|98|
|Using optional chain (obj.field?.field2) (undefined)|592,633,439|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,375,536|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,136,786|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,521,671|94|
|Using parseInt(x, 10) - big number (10 len)|14,822,624|91|
|Using + - small number (2 len)|594,303,415|98|
|Using + - big number (10 len)|593,256,551|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|541,462|78|
|Using ? operator to avoid rejection|569,069|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|247,001,034|90|
|Raw usage underscore usage|250,243,987|92|
|Manipulating private properties using #|175,014,384|90|
|Manipulating private properties using underscore(_)|155,380,868|90|
|Manipulating private properties using Symbol|156,062,273|91|
|Manipulating private properties using PrivateSymbol|36,111,356|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,721,884|95|
|Adding property in the object creation - small object|2,731,353|99|
|Adding property after the function creation - small class|141,298|87|
|Adding property in the function creation - small class|141,356|89|
|Adding property after the class creation - small class|117,230|86|
|Adding property in the class creation - small class|118,627|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,446,811|96|
|Using replaceAll()|2,130,704|97|
|Using replaceAll(//g)|2,153,497|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,425|98|
|Sort using first char|863,133|93|
|Sort using localeCompare|796,244|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,412|97|
|{...smallObject} - Total keys: 2|77,361,015|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,592|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,653|96|
|{ ...bigObject, ...anotherBigObject }|849|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,053,916|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,961,296|98|
|{ ...smallObject, ...anotherSmallObject }|16,494,309|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,823 ops/sec ±0.69% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 377 ops/sec ±0.13% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,849 ops/sec ±0.41% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 980 ops/sec ±36.17% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,660,140|97|
|Using backtick (`)|592,560,726|96|
|Using array.join|8,876,141|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,332,379|92|
|Using this|111,545,861|95|
