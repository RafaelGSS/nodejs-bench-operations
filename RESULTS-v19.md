# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Sat Oct 29 2022 18:14:39 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.016ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.044ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.074ms 
    new Array(length): 0.039ms (faster)

 10,000 numbers:
           array.push: 0.633ms 
    new Array(length): 0.538ms (faster)

 1,000,000 numbers:
           array.push: 30.278ms 
    new Array(length): 7.049ms (faster)

 100,000,000 numbers:
           array.push: 2,141.613ms (faster)
    new Array(length): 6,145.716ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.119ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.05ms 
    new Array(length): 0.047ms (faster)

 10,000 strings:
           array.push: 0.44ms 
    new Array(length): 0.306ms (faster)

 1,000,000 strings:
           array.push: 35.161ms 
    new Array(length): 4.879ms (faster)

 100,000,000 strings:
           array.push: 2,694.214ms (faster)
    new Array(length): 6,248.517ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|362|81|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|163,259|51|
|[True conditional] Using constructor name|127,927|88|
|[True conditional] Check if property is valid then instanceof |126,397|87|
|[False conditional] Using instanceof only|733,628,744|91|
|[False conditional] Using constructor name|744,442,503|94|
|[False conditional] Check if property is valid then instanceof |739,006,354|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,322|81|
|Intl.DateTimeFormat().format(new Date())|6,561|86|
|Reusing Intl.DateTimeFormat()|481,834|94|
|Format using date.get*|2,574,357|93|
|new Date() (Baseline)|7,970,569|90|
|Date.now() (Baseline)|15,457,648|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|663,106|92|
|Using brackets {}|676,047|92|
|Using '' + |666,070|93|
|Using date.toString()|726,005|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,384,439|91|
|Using undefined assignment|733,155,892|91|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,000|52|
|NodeError|123,927|91|
|NodeError Range|124,327|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,236,424|90|
|Function returning explicitly undefined|1,230,683|86|
|Function returning implicitly undefined|1,261,528|90|
|Function returning string|1,236,537|93|
|Function returning integer|1,263,448|89|
|Function returning float|1,265,174|93|
|Function returning functions|1,234,617|91|
|Function returning arrow functions|1,248,815|94|
|Function returning empty object|1,216,020|86|
|Function returning empty array|1,169,243|85|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|746,152,706|92|
|using Array.includes (first item)|756,021,642|93|
|Using raw comparison|759,687,748|92|
|Using raw comparison (first item)|761,299,712|92|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,613,561|91|
|Using Object.getOwnPropertyNames()|54,931,524|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|661,922,669|87|
|Length = 10_000 - Array.at|679,338,422|91|
|Length = 1_000_000 - Array.at|704,258,930|94|
|Length = 100 - Array[length - 1]|705,958,500|89|
|Length = 10_000 - Array[length - 1]|701,554,536|89|
|Length = 1_000_000 - Array[length - 1]|640,912,821|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,745,120|86|
|Object.create({})|1,147,498|74|
|Cached Empty.prototype|649,801,160|90|
|Empty.prototype|1,100,769|74|
|Empty class|812,703|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|705,850,846|87|
|Using optional chain (obj.field?.field2) (undefined)|701,072,314|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|720,877,403|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|721,062,887|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|173,729,405|93|
|Using parseInt(x, 10) - big number (10 len)|13,329,074|88|
|Using + - small number (2 len)|717,765,920|87|
|Using + - big number (10 len)|709,907,725|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|649,851|71|
|Using ? operator to avoid rejection|656,512|70|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|669,166,788|89|
|Raw usage underscore usage|639,850,407|88|
|Manipulating private properties using #|631,762,503|88|
|Manipulating private properties using underscore(_)|634,264,724|83|
|Manipulating private properties using Symbol|655,078,613|88|
|Manipulating private properties using PrivateSymbol|29,181,697|88|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,046,661|90|
|Using replaceAll()|1,790,570|90|
|Using replaceAll(//g)|1,857,083|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|153,052|85|
|Sort using first char|729,286|89|
|Sort using localeCompare|684,089|84|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|994|83|
|{...smallObject} - Total keys: 2|57,760,070|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,162|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,164|84|
|{ ...bigObject, ...anotherBigObject }|679|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,097,001|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,240,492|86|
|{ ...smallObject, ...anotherSmallObject }|14,494,950|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,420 ops/sec ±1.37% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 340 ops/sec ±1.51% (78 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,228 ops/sec ±1.16% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 908 ops/sec ±17.63% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|671,859,389|86|
|Using backtick (`)|703,045,283|86|
|Using array.join|6,272,053|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|137,236,487|85|
|Using this|174,566,688|89|
