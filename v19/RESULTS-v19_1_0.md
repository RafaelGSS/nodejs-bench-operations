# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.1.0`
* __Run:__ Sat Dec 31 2022 20:19:45 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.016ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.065ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.075ms 
    new Array(length): 0.039ms (faster)

 10,000 numbers:
           array.push: 0.591ms 
    new Array(length): 0.472ms (faster)

 1,000,000 numbers:
           array.push: 42.868ms 
    new Array(length): 10.766ms (faster)

 100,000,000 numbers:
           array.push: 1,900.304ms (faster)
    new Array(length): 5,919.032ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.132ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.048ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.397ms 
    new Array(length): 0.292ms (faster)

 1,000,000 strings:
           array.push: 33.538ms 
    new Array(length): 4.65ms (faster)

 100,000,000 strings:
           array.push: 2,478.426ms (faster)
    new Array(length): 5,960.474ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|373|80|
|Array.from|14|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|158,342|56|
|[True conditional] Using constructor name|124,255|89|
|[True conditional] Check if property is valid then instanceof |125,150|88|
|[False conditional] Using instanceof only|687,116,815|87|
|[False conditional] Using constructor name|713,569,382|92|
|[False conditional] Check if property is valid then instanceof |714,590,386|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,101|83|
|Intl.DateTimeFormat().format(new Date())|6,259|81|
|Reusing Intl.DateTimeFormat()|455,321|92|
|Format using date.get*|2,306,723|84|
|new Date() (Baseline)|7,913,441|90|
|Date.now() (Baseline)|15,271,630|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|628,057|87|
|Using brackets {}|625,791|87|
|Using '' + |635,836|88|
|Using date.toString()|693,008|88|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,231,135|89|
|Using undefined assignment|706,165,539|89|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|159,265|53|
|NodeError|124,514|90|
|NodeError Range|123,978|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,290,042|91|
|Function returning explicitly undefined|1,264,915|88|
|Function returning implicitly undefined|1,279,462|90|
|Function returning string|1,261,052|89|
|Function returning integer|1,208,445|88|
|Function returning float|1,277,377|90|
|Function returning functions|1,245,040|89|
|Function returning arrow functions|1,234,415|91|
|Function returning empty object|1,247,581|87|
|Function returning empty array|1,301,937|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|714,318,016|90|
|using Array.includes (first item)|715,013,616|91|
|Using raw comparison|705,123,375|89|
|Using raw comparison (first item)|664,452,970|83|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,026,120|87|
|Using Object.getOwnPropertyNames()|51,902,161|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|672,229,859|90|
|Length = 10_000 - Array.at|662,411,895|87|
|Length = 1_000_000 - Array.at|662,667,388|89|
|Length = 100 - Array[length - 1]|707,438,621|89|
|Length = 10_000 - Array[length - 1]|703,981,261|87|
|Length = 1_000_000 - Array[length - 1]|687,368,485|86|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,856,766|88|
|Object.create({})|1,239,641|75|
|Cached Empty.prototype|685,579,314|88|
|Empty.prototype|1,079,846|71|
|Empty class|845,317|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,885,818|91|
|Using optional chain (obj.field?.field2) (undefined)|718,554,025|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|696,484,595|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|700,150,397|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|167,894,133|89|
|Using parseInt(x, 10) - big number (10 len)|13,785,181|87|
|Using + - small number (2 len)|695,893,099|87|
|Using + - big number (10 len)|710,064,794|91|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|722,413|73|
|Using ? operator to avoid rejection|773,477|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|680,113,797|91|
|Raw usage underscore usage|681,089,842|92|
|Manipulating private properties using #|670,572,474|90|
|Manipulating private properties using underscore(_)|667,444,694|91|
|Manipulating private properties using Symbol|666,350,890|88|
|Manipulating private properties using PrivateSymbol|31,273,448|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,387,182|92|
|Adding property in the object creation - small object|2,429,530|92|
|Adding property after the function creation - small class|151,686|80|
|Adding property in the function creation - small class|153,372|83|
|Adding property after the class creation - small class|119,740|76|
|Adding property in the class creation - small class|119,901|75|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,075,053|88|
|Using replaceAll()|1,868,231|89|
|Using replaceAll(//g)|1,825,629|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|165,884|86|
|Sort using first char|727,146|87|
|Sort using localeCompare|701,441|87|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,163|90|
|{...smallObject} - Total keys: 2|61,096,718|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,237|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,387|91|
|{ ...bigObject, ...anotherBigObject }|704|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,408,574|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,442,650|88|
|{ ...smallObject, ...anotherSmallObject }|14,020,913|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,334 ops/sec ±16.38% (78 runs sampled)
streams.web.Readable reading 1e3 * some data x 344 ops/sec ±4.78% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,336 ops/sec ±1.56% (85 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 739 ops/sec ±13.16% (64 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|690,906,991|85|
|Using backtick (`)|704,096,050|87|
|Using array.join|6,387,316|88|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,659,363|86|
|Using this|181,062,822|88|
