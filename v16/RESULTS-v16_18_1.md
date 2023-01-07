# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sat Jan 07 2023 17:12:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.11ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.061ms 
    new Array(length): 0.023ms (faster)

 10,000 numbers:
           array.push: 0.405ms 
    new Array(length): 0.2ms (faster)

 1,000,000 numbers:
           array.push: 30.317ms 
    new Array(length): 10.16ms (faster)

 100,000,000 numbers:
           array.push: 2,004.385ms (faster)
    new Array(length): 4,831.64ms


----


 10 strings:
           array.push: 0.013ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.019ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.079ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.777ms 
    new Array(length): 0.364ms (faster)

 1,000,000 strings:
           array.push: 397.745ms 
    new Array(length): 10.049ms (faster)

 100,000,000 strings:
           array.push: 2,591.006ms (faster)
    new Array(length): 5,219.976ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|376|81|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,385|56|
|[True conditional] Using constructor name|153,409|93|
|[True conditional] Check if property is valid then instanceof |148,125|85|
|[False conditional] Using instanceof only|942,004,273|91|
|[False conditional] Using constructor name|945,411,484|92|
|[False conditional] Check if property is valid then instanceof |965,015,533|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,059|86|
|Intl.DateTimeFormat().format(new Date())|6,896|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,326|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,007|83|
|Reusing Intl.DateTimeFormat()|426,276|75|
|Reusing dfWithOptions.format(Date.now())|320,253|89|
|Reusing dfWithOptions.format(new Date())|278,485|91|
|Date.toLocaleDateString()|548,656|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,993|81|
|Format using date.get*|3,525,714|90|
|new Date() (Baseline)|7,868,509|91|
|Date.now() (Baseline)|16,892,483|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|694,465|90|
|Using brackets {}|710,594|94|
|Using '' + |711,437|91|
|Using date.toString()|758,484|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,420,397|91|
|Using undefined assignment|951,457,495|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|196,436|57|
|NodeError|146,393|90|
|NodeError Range|139,650|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,398,755|91|
|Function returning explicitly undefined|1,388,256|89|
|Function returning implicitly undefined|1,423,372|91|
|Function returning string|1,400,618|92|
|Function returning integer|1,411,832|91|
|Function returning float|1,407,000|92|
|Function returning functions|1,371,700|91|
|Function returning arrow functions|1,346,809|91|
|Function returning empty object|1,380,150|87|
|Function returning empty array|1,366,375|88|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|957,644,360|91|
|using Array.includes (first item)|930,423,042|90|
|Using raw comparison|970,587,164|90|
|Using raw comparison (first item)|941,374,415|92|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,422,092|86|
|Using Object.getOwnPropertyNames()|59,351,733|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,255,266|89|
|Length = 10_000 - Array.at|18,186,124|91|
|Length = 1_000_000 - Array.at|19,210,855|89|
|Length = 100 - Array[length - 1]|970,233,396|93|
|Length = 10_000 - Array[length - 1]|961,991,732|93|
|Length = 1_000_000 - Array[length - 1]|968,288,716|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,571,655|89|
|Object.create({})|1,272,505|77|
|Cached Empty.prototype|948,358,750|92|
|Empty.prototype|1,389,418|71|
|Empty class|941,244|79|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|957,558,599|92|
|Using optional chain (obj.field?.field2) (undefined)|959,519,035|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|954,234,733|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|970,427,198|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|198,860,468|93|
|Using parseInt(x, 10) - big number (10 len)|14,790,156|92|
|Using + - small number (2 len)|941,019,199|91|
|Using + - big number (10 len)|947,824,547|89|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|735,904|75|
|Using ? operator to avoid rejection|856,345|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,970,367|92|
|Raw usage underscore usage|7,358,934|92|
|Manipulating private properties using #|2,660,996|92|
|Manipulating private properties using underscore(_)|769,062,425|87|
|Manipulating private properties using Symbol|786,830,389|94|
|Manipulating private properties using PrivateSymbol|32,336,113|85|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,683,601|92|
|Adding property in the object creation - small object|2,696,781|92|
|Adding property after the function creation - small class|177,622|83|
|Adding property in the function creation - small class|167,864|80|
|Adding property after the class creation - small class|145,809|79|
|Adding property in the class creation - small class|147,144|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,473,889|90|
|Using replaceAll()|2,192,210|93|
|Using replaceAll(//g)|2,207,995|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|192,451|89|
|Sort using first char|875,790|89|
|Sort using localeCompare|402,595|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,458|89|
|{...smallObject} - Total keys: 2|69,681,555|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,433|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,568|85|
|{ ...bigObject, ...anotherBigObject }|870|88|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,392,132|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,240,582|89|
|{ ...smallObject, ...anotherSmallObject }|17,326,765|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,697 ops/sec ±15.05% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 415 ops/sec ±2.12% (80 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,731 ops/sec ±2.20% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 967 ops/sec ±17.25% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|956,470,771|91|
|Using backtick (`)|959,757,795|94|
|Using array.join|7,041,176|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|188,545,674|88|
|Using this|195,631,596|91|
