# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sun Jan 08 2023 17:45:50 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.501ms 
    new Array(length): 0.21ms (faster)

 1,000,000 numbers:
           array.push: 35.198ms 
    new Array(length): 17.39ms (faster)

 100,000,000 numbers:
           array.push: 1,530.06ms (faster)
    new Array(length): 4,169.2ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.101ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.043ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.576ms 
    new Array(length): 0.256ms (faster)

 1,000,000 strings:
           array.push: 306.039ms 
    new Array(length): 8.366ms (faster)

 100,000,000 strings:
           array.push: 2,139.659ms (faster)
    new Array(length): 4,630.864ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|413|83|
|Array.from|17|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,752|53|
|[True conditional] Using constructor name|126,827|92|
|[True conditional] Check if property is valid then instanceof |128,019|92|
|[False conditional] Using instanceof only|592,203,286|95|
|[False conditional] Using constructor name|591,188,464|95|
|[False conditional] Check if property is valid then instanceof |592,654,711|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,176|90|
|Intl.DateTimeFormat().format(new Date())|8,982|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,529|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,718|83|
|Reusing Intl.DateTimeFormat()|454,054|98|
|Reusing dfWithOptions.format(Date.now())|276,631|96|
|Reusing dfWithOptions.format(new Date())|248,771|97|
|Date.toLocaleDateString()|444,265|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,980|91|
|Format using date.get*|3,698,535|98|
|new Date() (Baseline)|7,911,000|96|
|Date.now() (Baseline)|15,488,274|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|721,327|97|
|Using brackets {}|726,258|96|
|Using '' + |723,248|97|
|Using date.toString()|805,722|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,471,883|98|
|Using undefined assignment|590,974,833|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,778|55|
|NodeError|127,021|92|
|NodeError Range|127,671|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,278,425|95|
|Function returning explicitly undefined|1,253,761|92|
|Function returning implicitly undefined|1,249,954|91|
|Function returning string|1,270,021|92|
|Function returning integer|1,281,870|92|
|Function returning float|1,278,367|96|
|Function returning functions|1,233,723|98|
|Function returning arrow functions|1,235,641|94|
|Function returning empty object|1,230,364|95|
|Function returning empty array|1,265,894|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,122,472|97|
|using Array.includes (first item)|590,489,859|97|
|Using raw comparison|592,521,055|98|
|Using raw comparison (first item)|592,362,097|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,909,296|91|
|Using Object.getOwnPropertyNames()|68,345,305|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,361,179|97|
|Length = 10_000 - Array.at|19,254,151|93|
|Length = 1_000_000 - Array.at|19,326,928|98|
|Length = 100 - Array[length - 1]|590,121,081|97|
|Length = 10_000 - Array[length - 1]|589,689,366|98|
|Length = 1_000_000 - Array[length - 1]|589,799,211|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,993,208|92|
|Object.create({})|1,043,583|81|
|Cached Empty.prototype|591,001,250|93|
|Empty.prototype|1,167,840|80|
|Empty class|671,407|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|591,684,874|96|
|Using optional chain (obj.field?.field2) (undefined)|591,462,534|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|589,008,090|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,111,952|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,466,571|94|
|Using parseInt(x, 10) - big number (10 len)|14,750,792|98|
|Using + - small number (2 len)|592,176,515|90|
|Using + - big number (10 len)|590,903,739|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|548,028|80|
|Using ? operator to avoid rejection|580,793|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|253,699,365|91|
|Raw usage underscore usage|264,506,057|92|
|Manipulating private properties using #|191,279,272|94|
|Manipulating private properties using underscore(_)|185,371,050|95|
|Manipulating private properties using Symbol|187,186,375|93|
|Manipulating private properties using PrivateSymbol|36,648,988|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,809,612|99|
|Adding property in the object creation - small object|1,815,271|96|
|Adding property after the function creation - small class|135,138|88|
|Adding property in the function creation - small class|135,640|89|
|Adding property after the class creation - small class|114,558|87|
|Adding property in the class creation - small class|114,147|87|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,466,771|96|
|Using replaceAll()|2,153,155|94|
|Using replaceAll(//g)|2,182,649|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|198,113|98|
|Sort using first char|880,444|98|
|Sort using localeCompare|821,071|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,433|94|
|{...smallObject} - Total keys: 2|79,074,425|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,569|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,425|96|
|{ ...bigObject, ...anotherBigObject }|855|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,329,446|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,579,981|94|
|{ ...smallObject, ...anotherSmallObject }|16,531,397|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,836 ops/sec ±0.64% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 379 ops/sec ±0.27% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,710 ops/sec ±0.48% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 989 ops/sec ±28.35% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,405,418|93|
|Using backtick (`)|591,277,053|97|
|Using array.join|8,671,073|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,877,544|92|
|Using this|113,972,180|96|
