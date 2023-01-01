# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.11.0`
* __Run:__ Sun Jan 01 2023 15:29:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.04ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.066ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.588ms 
    new Array(length): 0.236ms (faster)

 1,000,000 numbers:
           array.push: 33.615ms 
    new Array(length): 19.123ms (faster)

 100,000,000 numbers:
           array.push: 2,070.198ms (faster)
    new Array(length): 4,825.125ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.1ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.664ms 
    new Array(length): 0.298ms (faster)

 1,000,000 strings:
           array.push: 360.546ms 
    new Array(length): 9.201ms (faster)

 100,000,000 strings:
           array.push: 2,675.53ms (faster)
    new Array(length): 5,477.971ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|80|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,104|55|
|[True conditional] Using constructor name|145,992|93|
|[True conditional] Check if property is valid then instanceof |149,372|92|
|[False conditional] Using instanceof only|710,503,160|99|
|[False conditional] Using constructor name|709,654,711|97|
|[False conditional] Check if property is valid then instanceof |710,878,382|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,705|83|
|Intl.DateTimeFormat().format(new Date())|8,591|78|
|Reusing Intl.DateTimeFormat()|421,860|76|
|Format using date.get*|3,703,757|98|
|new Date() (Baseline)|7,419,591|94|
|Date.now() (Baseline)|15,097,582|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|722,110|95|
|Using brackets {}|733,916|97|
|Using '' + |735,150|95|
|Using date.toString()|794,040|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,403,455|93|
|Using undefined assignment|708,466,597|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,185|60|
|NodeError|142,350|91|
|NodeError Range|143,338|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,344,377|97|
|Function returning explicitly undefined|1,334,867|98|
|Function returning implicitly undefined|1,364,621|91|
|Function returning string|1,332,946|95|
|Function returning integer|1,356,946|97|
|Function returning float|1,347,033|97|
|Function returning functions|1,332,347|94|
|Function returning arrow functions|1,331,424|94|
|Function returning empty object|1,359,610|92|
|Function returning empty array|1,337,454|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|708,753,542|95|
|using Array.includes (first item)|708,864,756|99|
|Using raw comparison|709,801,122|97|
|Using raw comparison (first item)|708,104,670|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,829,120|94|
|Using Object.getOwnPropertyNames()|41,707,462|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,111,632|95|
|Length = 10_000 - Array.at|16,079,914|96|
|Length = 1_000_000 - Array.at|16,057,914|97|
|Length = 100 - Array[length - 1]|707,972,720|95|
|Length = 10_000 - Array[length - 1]|706,863,304|96|
|Length = 1_000_000 - Array[length - 1]|705,939,406|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,762,609|90|
|Object.create({})|992,091|79|
|Cached Empty.prototype|709,417,388|98|
|Empty.prototype|1,029,345|81|
|Empty class|716,392|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,541,588|98|
|Using optional chain (obj.field?.field2) (undefined)|709,694,340|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,809,161|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,627,920|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,695,882|99|
|Using parseInt(x, 10) - big number (10 len)|13,474,077|98|
|Using + - small number (2 len)|710,153,984|99|
|Using + - big number (10 len)|709,186,957|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|591,005|76|
|Using ? operator to avoid rejection|628,262|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|223,278,871|88|
|Raw usage underscore usage|194,935,505|93|
|Manipulating private properties using #|131,647,999|91|
|Manipulating private properties using underscore(_)|122,533,167|93|
|Manipulating private properties using Symbol|122,385,991|94|
|Manipulating private properties using PrivateSymbol|29,373,831|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,642,918|98|
|Adding property in the object creation - small object|2,649,000|98|
|Adding property after the function creation - small class|150,418|87|
|Adding property in the function creation - small class|150,918|88|
|Adding property after the class creation - small class|122,489|83|
|Adding property in the class creation - small class|122,397|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,273,348|94|
|Using replaceAll()|2,082,731|97|
|Using replaceAll(//g)|2,018,464|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,454|92|
|Sort using first char|717,853|97|
|Sort using localeCompare|688,547|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,275|96|
|{...smallObject} - Total keys: 2|63,208,363|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,364|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,696|98|
|{ ...bigObject, ...anotherBigObject }|808|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,056,261|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,270,316|97|
|{ ...smallObject, ...anotherSmallObject }|10,933,593|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,561 ops/sec ±16.00% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 428 ops/sec ±0.16% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,517 ops/sec ±0.45% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 749 ops/sec ±18.22% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,671,344|97|
|Using backtick (`)|711,217,887|99|
|Using array.join|6,584,931|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|125,517,344|91|
|Using this|124,966,233|92|
