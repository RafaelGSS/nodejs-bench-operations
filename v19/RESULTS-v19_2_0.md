# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Sat Dec 31 2022 20:19:47 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.016ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.06ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.075ms 
    new Array(length): 0.04ms (faster)

 10,000 numbers:
           array.push: 0.719ms (faster)
    new Array(length): 5.31ms

 1,000,000 numbers:
           array.push: 53.868ms 
    new Array(length): 13.121ms (faster)

 100,000,000 numbers:
           array.push: 2,568.011ms (faster)
    new Array(length): 6,596.741ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.037ms

 100 strings:
           array.push: 0.141ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.049ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.397ms 
    new Array(length): 0.316ms (faster)

 1,000,000 strings:
           array.push: 38.773ms 
    new Array(length): 5.765ms (faster)

 100,000,000 strings:
           array.push: 3,153.052ms (faster)
    new Array(length): 6,880.994ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|305|82|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|146,148|57|
|[True conditional] Using constructor name|113,716|88|
|[True conditional] Check if property is valid then instanceof |115,215|87|
|[False conditional] Using instanceof only|724,624,521|93|
|[False conditional] Using constructor name|710,821,405|89|
|[False conditional] Check if property is valid then instanceof |701,171,705|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,410|83|
|Intl.DateTimeFormat().format(new Date())|5,911|86|
|Reusing Intl.DateTimeFormat()|370,187|89|
|Format using date.get*|2,213,654|77|
|new Date() (Baseline)|6,661,450|87|
|Date.now() (Baseline)|13,481,012|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|500,402|90|
|Using brackets {}|507,569|92|
|Using '' + |513,699|90|
|Using date.toString()|568,442|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,986,504|84|
|Using undefined assignment|713,587,670|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|144,561|56|
|NodeError|109,764|85|
|NodeError Range|110,591|81|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,084,666|90|
|Function returning explicitly undefined|1,082,429|88|
|Function returning implicitly undefined|1,120,162|87|
|Function returning string|1,098,037|91|
|Function returning integer|1,129,400|86|
|Function returning float|1,122,414|88|
|Function returning functions|1,082,628|91|
|Function returning arrow functions|1,072,576|90|
|Function returning empty object|1,092,799|89|
|Function returning empty array|1,072,437|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|705,639,193|91|
|using Array.includes (first item)|711,099,223|92|
|Using raw comparison|718,073,586|89|
|Using raw comparison (first item)|721,763,385|84|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,093,944|89|
|Using Object.getOwnPropertyNames()|43,507,641|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,706,581|88|
|Length = 10_000 - Array.at|591,211,387|92|
|Length = 1_000_000 - Array.at|576,162,291|87|
|Length = 100 - Array[length - 1]|715,714,640|86|
|Length = 10_000 - Array[length - 1]|713,102,917|90|
|Length = 1_000_000 - Array[length - 1]|711,128,966|90|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,251,800|89|
|Object.create({})|1,096,457|72|
|Cached Empty.prototype|720,188,791|92|
|Empty.prototype|1,024,353|70|
|Empty class|763,717|75|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,630,454|88|
|Using optional chain (obj.field?.field2) (undefined)|702,183,341|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|695,642,125|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|689,975,726|91|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|147,012,445|91|
|Using parseInt(x, 10) - big number (10 len)|10,255,073|89|
|Using + - small number (2 len)|710,412,935|89|
|Using + - big number (10 len)|702,954,202|91|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|633,721|69|
|Using ? operator to avoid rejection|647,708|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|588,453,061|89|
|Raw usage underscore usage|577,894,258|88|
|Manipulating private properties using #|571,081,249|87|
|Manipulating private properties using underscore(_)|571,323,220|91|
|Manipulating private properties using Symbol|575,099,161|87|
|Manipulating private properties using PrivateSymbol|25,883,185|87|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,074,704|88|
|Adding property in the object creation - small object|2,086,731|90|
|Adding property after the function creation - small class|135,114|76|
|Adding property in the function creation - small class|137,666|79|
|Adding property after the class creation - small class|112,227|74|
|Adding property in the class creation - small class|113,950|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,757,484|89|
|Using replaceAll()|1,594,439|88|
|Using replaceAll(//g)|1,517,016|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|140,746|88|
|Sort using first char|591,453|91|
|Sort using localeCompare|560,707|86|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|967|90|
|{...smallObject} - Total keys: 2|51,502,044|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|83|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,933|91|
|{ ...bigObject, ...anotherBigObject }|615|88|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,775,479|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,349,292|91|
|{ ...smallObject, ...anotherSmallObject }|11,838,122|86|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,123 ops/sec ±17.40% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 307 ops/sec ±0.74% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,391 ops/sec ±1.28% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 678 ops/sec ±13.28% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|699,909,881|90|
|Using backtick (`)|702,761,089|87|
|Using array.join|5,306,192|89|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,200,028|90|
|Using this|156,356,868|93|
