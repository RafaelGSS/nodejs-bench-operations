# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.11.0`
* __Run:__ Sat Dec 31 2022 20:19:42 GMT+0000 (Coordinated Universal Time)

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
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.487ms 
    new Array(length): 0.223ms (faster)

 1,000,000 numbers:
           array.push: 29.934ms 
    new Array(length): 17.145ms (faster)

 100,000,000 numbers:
           array.push: 1,501.023ms (faster)
    new Array(length): 4,208.648ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.103ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.048ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.661ms 
    new Array(length): 0.264ms (faster)

 1,000,000 strings:
           array.push: 326.144ms 
    new Array(length): 8.388ms (faster)

 100,000,000 strings:
           array.push: 2,147.227ms (faster)
    new Array(length): 4,593.866ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|430|86|
|Array.from|17|46|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,543|53|
|[True conditional] Using constructor name|129,836|95|
|[True conditional] Check if property is valid then instanceof |130,712|92|
|[False conditional] Using instanceof only|591,520,212|92|
|[False conditional] Using constructor name|592,016,072|97|
|[False conditional] Check if property is valid then instanceof |591,925,924|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,226|90|
|Intl.DateTimeFormat().format(new Date())|8,997|79|
|Reusing Intl.DateTimeFormat()|386,778|85|
|Format using date.get*|3,193,939|96|
|new Date() (Baseline)|7,904,582|87|
|Date.now() (Baseline)|15,514,295|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|742,033|98|
|Using brackets {}|748,067|97|
|Using '' + |742,042|97|
|Using date.toString()|811,583|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,508,556|98|
|Using undefined assignment|591,042,843|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,728|54|
|NodeError|127,702|92|
|NodeError Range|127,640|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,253,521|94|
|Function returning explicitly undefined|1,234,688|97|
|Function returning implicitly undefined|1,158,342|96|
|Function returning string|1,250,653|94|
|Function returning integer|1,236,204|95|
|Function returning float|1,142,500|97|
|Function returning functions|1,206,121|95|
|Function returning arrow functions|1,237,081|95|
|Function returning empty object|1,236,515|94|
|Function returning empty array|1,180,634|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,489,175|97|
|using Array.includes (first item)|590,531,463|97|
|Using raw comparison|591,944,348|94|
|Using raw comparison (first item)|591,731,073|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,377,496|95|
|Using Object.getOwnPropertyNames()|68,988,984|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,159,110|98|
|Length = 10_000 - Array.at|19,149,533|97|
|Length = 1_000_000 - Array.at|19,141,999|97|
|Length = 100 - Array[length - 1]|590,244,954|96|
|Length = 10_000 - Array[length - 1]|590,414,920|98|
|Length = 1_000_000 - Array[length - 1]|590,082,994|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,288,771|97|
|Object.create({})|1,037,946|81|
|Cached Empty.prototype|590,420,053|97|
|Empty.prototype|1,138,656|80|
|Empty class|687,427|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,359,641|98|
|Using optional chain (obj.field?.field2) (undefined)|592,010,886|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,200,046|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,744,704|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,862,550|92|
|Using parseInt(x, 10) - big number (10 len)|15,143,538|99|
|Using + - small number (2 len)|592,352,478|96|
|Using + - big number (10 len)|591,265,376|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|555,458|84|
|Using ? operator to avoid rejection|578,806|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|251,680,589|93|
|Raw usage underscore usage|261,896,050|96|
|Manipulating private properties using #|195,147,302|98|
|Manipulating private properties using underscore(_)|193,815,993|94|
|Manipulating private properties using Symbol|193,801,332|95|
|Manipulating private properties using PrivateSymbol|36,659,527|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,656,909|97|
|Adding property in the object creation - small object|2,687,647|98|
|Adding property after the function creation - small class|139,296|86|
|Adding property in the function creation - small class|141,667|91|
|Adding property after the class creation - small class|116,422|85|
|Adding property in the class creation - small class|119,609|86|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,471,480|96|
|Using replaceAll()|2,155,492|96|
|Using replaceAll(//g)|2,178,774|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|197,104|98|
|Sort using first char|890,304|99|
|Sort using localeCompare|843,446|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,520|96|
|{...smallObject} - Total keys: 2|79,058,308|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,608|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,729|97|
|{ ...bigObject, ...anotherBigObject }|877|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,577,133|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,514,423|94|
|{ ...smallObject, ...anotherSmallObject }|16,854,002|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,880 ops/sec ±0.53% (90 runs sampled)
streams.web.Readable reading 1e3 * some data x 383 ops/sec ±0.20% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,774 ops/sec ±0.41% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,047 ops/sec ±27.28% (47 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,064,899|98|
|Using backtick (`)|591,280,108|94|
|Using array.join|8,935,731|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,752,288|93|
|Using this|113,811,857|96|
