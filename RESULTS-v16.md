# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.1`
* __Run:__ Mon Oct 10 2022 11:37:28 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.037ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.061ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 0.524ms 
    new Array(length): 0.238ms (faster)

 1,000,000 numbers:
           array.push: 31.284ms 
    new Array(length): 9.97ms (faster)

 100,000,000 numbers:
           array.push: 1,717.963ms (faster)
    new Array(length): 4,332.94ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.087ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.049ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.566ms 
    new Array(length): 0.259ms (faster)

 1,000,000 strings:
           array.push: 341.007ms 
    new Array(length): 8.713ms (faster)

 100,000,000 strings:
           array.push: 2,095.311ms (faster)
    new Array(length): 4,694.672ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|412|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|173,661|55|
|[True conditional] Using constructor name|134,319|96|
|[True conditional] Check if property is valid then instanceof |135,257|91|
|[False conditional] Using instanceof only|594,064,618|93|
|[False conditional] Using constructor name|592,407,672|94|
|[False conditional] Check if property is valid then instanceof |594,395,199|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,017|86|
|Intl.DateTimeFormat().format(new Date())|9,329|83|
|Reusing Intl.DateTimeFormat()|445,041|97|
|Format using date.get*|3,792,568|97|
|new Date() (Baseline)|7,765,657|97|
|Date.now() (Baseline)|14,642,223|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,372|92|
|Using brackets {}|709,628|97|
|Using '' + |703,471|99|
|Using date.toString()|767,614|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,477,306|96|
|Using undefined assignment|592,599,717|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|170,703|52|
|NodeError|131,696|93|
|NodeError Range|132,994|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,207,289|97|
|Function returning explicitly undefined|1,189,864|98|
|Function returning implicitly undefined|1,202,842|96|
|Function returning string|1,198,247|96|
|Function returning integer|1,219,223|95|
|Function returning float|1,209,879|97|
|Function returning functions|1,157,206|98|
|Function returning arrow functions|1,192,095|99|
|Function returning empty object|1,184,200|97|
|Function returning empty array|1,212,228|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,626,231|98|
|using Array.includes (first item)|592,794,945|97|
|Using raw comparison|593,329,175|96|
|Using raw comparison (first item)|593,401,713|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,569,450|90|
|Using Object.getOwnPropertyNames()|66,845,827|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,066,034|96|
|Length = 10_000 - Array.at|19,059,643|97|
|Length = 1_000_000 - Array.at|19,051,945|97|
|Length = 100 - Array[length - 1]|591,794,336|95|
|Length = 10_000 - Array[length - 1]|591,218,663|97|
|Length = 1_000_000 - Array[length - 1]|591,544,574|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,314,069|94|
|Object.create({})|1,512,526|81|
|Cached Empty.prototype|590,972,213|96|
|Empty.prototype|1,514,833|80|
|Empty class|936,950|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,471,351|96|
|Using optional chain (obj.field?.field2) (undefined)|592,529,591|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,726,315|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,515,863|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|232,012,078|95|
|Using parseInt(x, 10) - big number (10 len)|15,290,962|97|
|Using + - small number (2 len)|593,140,334|97|
|Using + - big number (10 len)|592,488,040|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|809,236|77|
|Using ? operator to avoid rejection|869,176|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,379,706|96|
|Raw usage underscore usage|7,680,182|98|
|Manipulating private properties using #|2,807,988|95|
|Manipulating private properties using underscore(_)|590,826,667|87|
|Manipulating private properties using Symbol|590,098,876|99|
|Manipulating private properties using PrivateSymbol|35,229,172|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,495,217|93|
|Using replaceAll()|2,203,390|97|
|Using replaceAll(//g)|2,237,376|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,403|93|
|Sort using first char|861,199|96|
|Sort using localeCompare|436,351|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,741 ops/sec ±15.54% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 372 ops/sec ±0.46% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,996 ops/sec ±0.44% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 924 ops/sec ±14.17% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,564,166|95|
|Using backtick (`)|593,201,243|95|
|Using array.join|8,547,115|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,859,383|91|
|Using this|112,857,883|94|
