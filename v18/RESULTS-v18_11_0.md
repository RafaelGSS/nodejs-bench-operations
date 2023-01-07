# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.11.0`
* __Run:__ Sat Jan 07 2023 17:35:14 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.015ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.046ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.076ms 
    new Array(length): 0.035ms (faster)

 10,000 numbers:
           array.push: 0.632ms 
    new Array(length): 0.295ms (faster)

 1,000,000 numbers:
           array.push: 65.221ms 
    new Array(length): 9.264ms (faster)

 100,000,000 numbers:
           array.push: 2,470.078ms (faster)
    new Array(length): 5,854.087ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.162ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.067ms 
    new Array(length): 0.058ms (faster)

 10,000 strings:
           array.push: 0.708ms 
    new Array(length): 0.39ms (faster)

 1,000,000 strings:
           array.push: 440.383ms 
    new Array(length): 11.212ms (faster)

 100,000,000 strings:
           array.push: 3,161.743ms (faster)
    new Array(length): 6,587.896ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|282|76|
|Array.from|13|36|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|145,982|51|
|[True conditional] Using constructor name|114,228|85|
|[True conditional] Check if property is valid then instanceof |115,273|84|
|[False conditional] Using instanceof only|729,842,651|84|
|[False conditional] Using constructor name|736,782,321|81|
|[False conditional] Check if property is valid then instanceof |730,250,963|84|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,918|78|
|Intl.DateTimeFormat().format(new Date())|5,875|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,014|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,034|66|
|Reusing Intl.DateTimeFormat()|442,397|86|
|Reusing dfWithOptions.format(Date.now())|226,574|78|
|Reusing dfWithOptions.format(new Date())|223,382|89|
|Date.toLocaleDateString()|444,002|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,778|83|
|Format using date.get*|2,584,256|85|
|new Date() (Baseline)|6,078,832|83|
|Date.now() (Baseline)|13,366,228|85|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|555,662|86|
|Using brackets {}|575,050|83|
|Using '' + |550,608|87|
|Using date.toString()|598,581|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,872,743|85|
|Using undefined assignment|705,803,840|84|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|123,898|58|
|NodeError|103,360|85|
|NodeError Range|105,935|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,164,909|85|
|Function returning explicitly undefined|1,085,393|83|
|Function returning implicitly undefined|1,138,117|84|
|Function returning string|1,158,751|84|
|Function returning integer|1,155,737|83|
|Function returning float|1,144,206|85|
|Function returning functions|1,117,422|88|
|Function returning arrow functions|1,108,296|84|
|Function returning empty object|1,121,578|87|
|Function returning empty array|1,110,167|82|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|735,368,250|85|
|using Array.includes (first item)|737,456,978|86|
|Using raw comparison|723,642,720|85|
|Using raw comparison (first item)|749,504,798|86|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,600,326|85|
|Using Object.getOwnPropertyNames()|45,999,144|80|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,470,728|83|
|Length = 10_000 - Array.at|15,305,533|85|
|Length = 1_000_000 - Array.at|14,617,050|87|
|Length = 100 - Array[length - 1]|729,981,043|86|
|Length = 10_000 - Array[length - 1]|736,465,585|84|
|Length = 1_000_000 - Array[length - 1]|712,215,858|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,603,679|85|
|Object.create({})|743,622|69|
|Cached Empty.prototype|722,823,841|85|
|Empty.prototype|762,803|69|
|Empty class|560,286|68|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|722,916,494|81|
|Using optional chain (obj.field?.field2) (undefined)|736,808,972|83|
|Using and operator (obj.field && obj.field.field2) (Valid)|737,077,538|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|724,805,633|87|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|154,170,633|85|
|Using parseInt(x, 10) - big number (10 len)|12,087,401|83|
|Using + - small number (2 len)|744,247,388|87|
|Using + - big number (10 len)|732,621,531|85|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|445,525|76|
|Using ? operator to avoid rejection|458,522|76|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|131,354,951|84|
|Raw usage underscore usage|133,696,411|83|
|Manipulating private properties using #|87,424,999|82|
|Manipulating private properties using underscore(_)|65,260,059|71|
|Manipulating private properties using Symbol|64,997,634|80|
|Manipulating private properties using PrivateSymbol|26,769,426|83|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,032,766|82|
|Adding property in the object creation - small object|1,979,381|86|
|Adding property after the function creation - small class|116,909|77|
|Adding property in the function creation - small class|117,131|78|
|Adding property after the class creation - small class|96,382|76|
|Adding property in the class creation - small class|94,803|74|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,714,125|84|
|Using replaceAll()|1,630,337|84|
|Using replaceAll(//g)|1,509,732|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,035|89|
|Sort using first char|642,386|85|
|Sort using localeCompare|609,508|83|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,014|83|
|{...smallObject} - Total keys: 2|51,255,101|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,093|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,942|86|
|{ ...bigObject, ...anotherBigObject }|636|82|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,670,391|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,838,238|87|
|{ ...smallObject, ...anotherSmallObject }|12,559,407|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,159 ops/sec ±20.36% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 337 ops/sec ±1.33% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,756 ops/sec ±1.27% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 704 ops/sec ±12.31% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|728,359,964|85|
|Using backtick (`)|740,160,897|86|
|Using array.join|5,702,361|86|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,428,289|85|
|Using this|140,826,785|82|
