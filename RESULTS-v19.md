# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Fri Oct 28 2022 13:04:04 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.039ms 
    new Array(length): 0.016ms (faster)

 1,000 numbers:
           array.push: 0.062ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.503ms 
    new Array(length): 0.408ms (faster)

 1,000,000 numbers:
           array.push: 39.105ms 
    new Array(length): 8.65ms (faster)

 100,000,000 numbers:
           array.push: 1,957.785ms (faster)
    new Array(length): 4,595.106ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.101ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.037ms 
    new Array(length): 0.018ms (faster)

 10,000 strings:
           array.push: 0.314ms 
    new Array(length): 0.212ms (faster)

 1,000,000 strings:
           array.push: 30.962ms 
    new Array(length): 8.693ms (faster)

 100,000,000 strings:
           array.push: 2,831.732ms (faster)
    new Array(length): 4,487.56ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|425|86|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,068|51|
|[True conditional] Using constructor name|129,265|93|
|[True conditional] Check if property is valid then instanceof |130,782|95|
|[False conditional] Using instanceof only|599,883,322|97|
|[False conditional] Using constructor name|599,496,838|97|
|[False conditional] Check if property is valid then instanceof |597,918,831|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,350|88|
|Intl.DateTimeFormat().format(new Date())|9,170|80|
|Reusing Intl.DateTimeFormat()|465,877|84|
|Format using date.get*|4,137,440|94|
|new Date() (Baseline)|9,128,310|96|
|Date.now() (Baseline)|16,084,615|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|741,822|98|
|Using brackets {}|725,310|97|
|Using '' + |753,767|97|
|Using date.toString()|823,238|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,779,369|97|
|Using undefined assignment|599,032,330|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,785|53|
|NodeError|126,657|93|
|NodeError Range|128,598|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,183,260|92|
|Function returning explicitly undefined|1,169,302|93|
|Function returning implicitly undefined|1,198,640|92|
|Function returning string|1,177,271|97|
|Function returning integer|1,158,872|96|
|Function returning float|1,185,869|97|
|Function returning functions|1,149,865|95|
|Function returning arrow functions|1,172,032|93|
|Function returning empty object|1,195,111|95|
|Function returning empty array|1,194,873|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,082,257|96|
|using Array.includes (first item)|597,676,851|98|
|Using raw comparison|600,481,280|98|
|Using raw comparison (first item)|599,372,704|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,846,316|95|
|Using Object.getOwnPropertyNames()|64,466,715|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,015,415|99|
|Length = 10_000 - Array.at|599,192,435|98|
|Length = 1_000_000 - Array.at|600,050,031|97|
|Length = 100 - Array[length - 1]|598,373,094|96|
|Length = 10_000 - Array[length - 1]|598,052,274|99|
|Length = 1_000_000 - Array[length - 1]|597,501,442|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,728,013|94|
|Object.create({})|1,628,163|80|
|Cached Empty.prototype|599,923,824|95|
|Empty.prototype|1,577,854|78|
|Empty class|1,045,096|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|598,873,641|98|
|Using optional chain (obj.field?.field2) (undefined)|598,799,944|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|599,568,860|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,524,777|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,683,113|92|
|Using parseInt(x, 10) - big number (10 len)|14,821,511|97|
|Using + - small number (2 len)|599,792,833|97|
|Using + - big number (10 len)|600,359,903|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|765,168|79|
|Using ? operator to avoid rejection|785,843|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,192,181|95|
|Raw usage underscore usage|597,845,939|92|
|Manipulating private properties using #|593,610,609|93|
|Manipulating private properties using underscore(_)|592,930,217|95|
|Manipulating private properties using Symbol|593,009,521|96|
|Manipulating private properties using PrivateSymbol|38,608,439|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,513,380|93|
|Using replaceAll()|2,217,321|95|
|Using replaceAll(//g)|2,227,401|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,921|89|
|Sort using first char|798,572|92|
|Sort using localeCompare|787,412|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,625 ops/sec ±16.27% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 347 ops/sec ±0.45% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,563 ops/sec ±0.50% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 878 ops/sec ±15.19% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,515,563|97|
|Using backtick (`)|593,629,141|96|
|Using array.join|8,947,259|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,290,460|93|
|Using this|120,030,585|96|
