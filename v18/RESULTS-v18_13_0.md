# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.13.0`
* __Run:__ Sun Jan 08 2023 17:45:49 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.012ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.026ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.059ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.511ms 
    new Array(length): 0.203ms (faster)

 1,000,000 numbers:
           array.push: 29.571ms 
    new Array(length): 8.91ms (faster)

 100,000,000 numbers:
           array.push: 1,571.789ms (faster)
    new Array(length): 4,432.751ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.043ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.582ms 
    new Array(length): 0.276ms (faster)

 1,000,000 strings:
           array.push: 342.233ms 
    new Array(length): 8.448ms (faster)

 100,000,000 strings:
           array.push: 2,075.765ms (faster)
    new Array(length): 4,630.555ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|410|82|
|Array.from|16|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,390|53|
|[True conditional] Using constructor name|127,539|92|
|[True conditional] Check if property is valid then instanceof |128,939|94|
|[False conditional] Using instanceof only|593,200,042|96|
|[False conditional] Using constructor name|592,895,863|93|
|[False conditional] Check if property is valid then instanceof |593,398,400|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,236|89|
|Intl.DateTimeFormat().format(new Date())|9,048|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,568|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,797|85|
|Reusing Intl.DateTimeFormat()|465,534|97|
|Reusing dfWithOptions.format(Date.now())|281,060|96|
|Reusing dfWithOptions.format(new Date())|234,576|92|
|Date.toLocaleDateString()|475,654|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,914|89|
|Format using date.get*|3,559,913|96|
|new Date() (Baseline)|7,919,056|99|
|Date.now() (Baseline)|15,476,622|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|707,347|95|
|Using brackets {}|716,988|97|
|Using '' + |688,437|97|
|Using date.toString()|786,377|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,466,190|97|
|Using undefined assignment|592,844,036|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|159,172|53|
|NodeError|122,030|89|
|NodeError Range|122,044|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,358,990|96|
|Function returning explicitly undefined|1,340,086|92|
|Function returning implicitly undefined|1,371,215|93|
|Function returning string|1,277,209|93|
|Function returning integer|1,377,433|97|
|Function returning float|1,287,483|96|
|Function returning functions|1,320,675|98|
|Function returning arrow functions|1,234,045|94|
|Function returning empty object|1,373,404|97|
|Function returning empty array|1,225,909|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,022,254|99|
|using Array.includes (first item)|592,985,526|99|
|Using raw comparison|593,770,981|95|
|Using raw comparison (first item)|593,057,388|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,061,952|94|
|Using Object.getOwnPropertyNames()|57,484,280|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,673,966|97|
|Length = 10_000 - Array.at|18,693,025|97|
|Length = 1_000_000 - Array.at|18,060,657|97|
|Length = 100 - Array[length - 1]|591,547,735|96|
|Length = 10_000 - Array[length - 1]|590,916,774|97|
|Length = 1_000_000 - Array[length - 1]|590,461,171|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|51,576,345|93|
|Object.create({})|967,924|80|
|Cached Empty.prototype|592,582,896|99|
|Empty.prototype|1,107,151|78|
|Empty class|662,953|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,075,736|95|
|Using optional chain (obj.field?.field2) (undefined)|593,013,590|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,579,274|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|589,910,553|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|200,861,426|92|
|Using parseInt(x, 10) - big number (10 len)|14,774,768|95|
|Using + - small number (2 len)|593,347,688|96|
|Using + - big number (10 len)|592,571,678|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|523,196|79|
|Using ? operator to avoid rejection|549,473|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|230,965,902|93|
|Raw usage underscore usage|231,121,686|91|
|Manipulating private properties using #|168,927,926|87|
|Manipulating private properties using underscore(_)|149,588,940|85|
|Manipulating private properties using Symbol|152,571,802|88|
|Manipulating private properties using PrivateSymbol|36,042,089|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,752,096|97|
|Adding property in the object creation - small object|2,748,865|91|
|Adding property after the function creation - small class|135,005|90|
|Adding property in the function creation - small class|135,425|90|
|Adding property after the class creation - small class|112,380|84|
|Adding property in the class creation - small class|113,071|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,443,011|97|
|Using replaceAll()|1,927,202|96|
|Using replaceAll(//g)|2,150,906|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,421|92|
|Sort using first char|897,342|92|
|Sort using localeCompare|830,072|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,452|95|
|{...smallObject} - Total keys: 2|79,889,837|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,597|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,466|97|
|{ ...bigObject, ...anotherBigObject }|859|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,387,262|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,553,918|97|
|{ ...smallObject, ...anotherSmallObject }|16,609,604|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,861 ops/sec ±0.63% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 383 ops/sec ±0.20% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,850 ops/sec ±0.39% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,010 ops/sec ±30.66% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,370,946|98|
|Using backtick (`)|591,509,004|97|
|Using array.join|8,835,108|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,416,153|91|
|Using this|112,820,871|95|
