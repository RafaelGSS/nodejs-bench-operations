# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sat Dec 31 2022 20:04:32 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.034ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.517ms 
    new Array(length): 0.213ms (faster)

 1,000,000 numbers:
           array.push: 30.363ms 
    new Array(length): 18.219ms (faster)

 100,000,000 numbers:
           array.push: 1,640.183ms (faster)
    new Array(length): 4,252.676ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.603ms 
    new Array(length): 0.257ms (faster)

 1,000,000 strings:
           array.push: 193.054ms 
    new Array(length): 10.441ms (faster)

 100,000,000 strings:
           array.push: 1,967.664ms (faster)
    new Array(length): 4,829.865ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|401|84|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,604|54|
|[True conditional] Using constructor name|127,717|94|
|[True conditional] Check if property is valid then instanceof |129,331|94|
|[False conditional] Using instanceof only|593,726,781|96|
|[False conditional] Using constructor name|593,862,828|96|
|[False conditional] Check if property is valid then instanceof |594,510,852|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,227|89|
|Intl.DateTimeFormat().format(new Date())|9,176|78|
|Reusing Intl.DateTimeFormat()|382,024|81|
|Format using date.get*|3,236,533|95|
|new Date() (Baseline)|7,889,405|98|
|Date.now() (Baseline)|15,533,479|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|708,429|97|
|Using brackets {}|724,147|95|
|Using '' + |716,679|92|
|Using date.toString()|792,968|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,463,448|95|
|Using undefined assignment|592,157,488|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,673|55|
|NodeError|128,600|92|
|NodeError Range|128,681|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,273,711|94|
|Function returning explicitly undefined|1,250,226|96|
|Function returning implicitly undefined|1,284,288|93|
|Function returning string|1,260,248|92|
|Function returning integer|1,275,252|95|
|Function returning float|1,278,876|95|
|Function returning functions|1,231,626|96|
|Function returning arrow functions|1,249,894|95|
|Function returning empty object|1,280,536|95|
|Function returning empty array|1,248,453|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,433,857|98|
|using Array.includes (first item)|591,159,326|98|
|Using raw comparison|592,818,922|97|
|Using raw comparison (first item)|591,441,472|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,096,100|87|
|Using Object.getOwnPropertyNames()|57,906,979|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,324,988|95|
|Length = 10_000 - Array.at|19,252,624|94|
|Length = 1_000_000 - Array.at|18,435,741|94|
|Length = 100 - Array[length - 1]|591,839,278|97|
|Length = 10_000 - Array[length - 1]|590,937,102|95|
|Length = 1_000_000 - Array[length - 1]|590,012,376|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,868,229|92|
|Object.create({})|977,313|81|
|Cached Empty.prototype|592,093,897|93|
|Empty.prototype|1,110,022|80|
|Empty class|661,560|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,193,634|97|
|Using optional chain (obj.field?.field2) (undefined)|592,779,126|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,914,215|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,158,746|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,412,935|93|
|Using parseInt(x, 10) - big number (10 len)|14,719,358|98|
|Using + - small number (2 len)|594,508,251|96|
|Using + - big number (10 len)|593,155,710|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|552,128|83|
|Using ? operator to avoid rejection|577,057|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|247,420,063|95|
|Raw usage underscore usage|251,023,832|92|
|Manipulating private properties using #|178,023,340|90|
|Manipulating private properties using underscore(_)|155,638,582|91|
|Manipulating private properties using Symbol|153,646,212|94|
|Manipulating private properties using PrivateSymbol|35,969,270|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,808,022|98|
|Adding property in the object creation - small object|1,818,124|96|
|Adding property after the function creation - small class|134,135|89|
|Adding property in the function creation - small class|135,026|90|
|Adding property after the class creation - small class|113,342|86|
|Adding property in the class creation - small class|112,876|85|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,467,383|90|
|Using replaceAll()|2,135,363|96|
|Using replaceAll(//g)|2,180,674|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|199,030|94|
|Sort using first char|847,630|91|
|Sort using localeCompare|794,925|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,406|95|
|{...smallObject} - Total keys: 2|77,457,297|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,580|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,561|96|
|{ ...bigObject, ...anotherBigObject }|847|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,297,355|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,782,533|98|
|{ ...smallObject, ...anotherSmallObject }|16,616,290|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,796 ops/sec ±0.50% (90 runs sampled)
streams.web.Readable reading 1e3 * some data x 378 ops/sec ±0.40% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,832 ops/sec ±0.43% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 896 ops/sec ±14.21% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,141,008|97|
|Using backtick (`)|592,684,683|97|
|Using array.join|8,517,504|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,370,144|93|
|Using this|112,615,357|93|
