# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.1`
* __Run:__ Sat Oct 29 2022 18:14:27 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.03ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.06ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.543ms 
    new Array(length): 0.236ms (faster)

 1,000,000 numbers:
           array.push: 46.078ms 
    new Array(length): 8.617ms (faster)

 100,000,000 numbers:
           array.push: 2,117.622ms (faster)
    new Array(length): 4,974.982ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.095ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.058ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.648ms 
    new Array(length): 0.297ms (faster)

 1,000,000 strings:
           array.push: 387.74ms 
    new Array(length): 9.662ms (faster)

 100,000,000 strings:
           array.push: 2,755.719ms (faster)
    new Array(length): 5,525.462ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|362|84|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|196,957|58|
|[True conditional] Using constructor name|154,540|92|
|[True conditional] Check if property is valid then instanceof |156,912|91|
|[False conditional] Using instanceof only|711,940,053|95|
|[False conditional] Using constructor name|711,998,089|96|
|[False conditional] Check if property is valid then instanceof |713,125,188|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,118|85|
|Intl.DateTimeFormat().format(new Date())|7,673|78|
|Reusing Intl.DateTimeFormat()|430,885|89|
|Format using date.get*|3,113,032|97|
|new Date() (Baseline)|7,478,670|96|
|Date.now() (Baseline)|14,404,931|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|698,310|94|
|Using brackets {}|722,176|94|
|Using '' + |705,828|98|
|Using date.toString()|779,708|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,496,667|96|
|Using undefined assignment|710,252,341|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|196,999|54|
|NodeError|155,366|95|
|NodeError Range|155,629|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,316,080|96|
|Function returning explicitly undefined|1,290,249|99|
|Function returning implicitly undefined|1,323,055|90|
|Function returning string|1,311,041|96|
|Function returning integer|1,307,611|98|
|Function returning float|1,318,515|97|
|Function returning functions|1,288,578|97|
|Function returning arrow functions|1,304,881|95|
|Function returning empty object|1,306,465|95|
|Function returning empty array|1,317,743|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,316,608|93|
|using Array.includes (first item)|708,178,088|96|
|Using raw comparison|710,950,674|98|
|Using raw comparison (first item)|708,923,960|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,842,239|93|
|Using Object.getOwnPropertyNames()|50,589,738|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,852,253|96|
|Length = 10_000 - Array.at|15,834,599|97|
|Length = 1_000_000 - Array.at|15,713,503|97|
|Length = 100 - Array[length - 1]|708,637,340|97|
|Length = 10_000 - Array[length - 1]|707,598,883|96|
|Length = 1_000_000 - Array[length - 1]|707,988,723|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,907,372|94|
|Object.create({})|1,314,406|80|
|Cached Empty.prototype|709,808,398|97|
|Empty.prototype|1,295,146|75|
|Empty class|895,717|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,161,871|96|
|Using optional chain (obj.field?.field2) (undefined)|710,856,142|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,147,943|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,038,095|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|176,313,641|92|
|Using parseInt(x, 10) - big number (10 len)|13,267,664|97|
|Using + - small number (2 len)|711,760,317|96|
|Using + - big number (10 len)|711,137,391|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|771,459|74|
|Using ? operator to avoid rejection|822,666|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,034,513|96|
|Raw usage underscore usage|7,410,301|97|
|Manipulating private properties using #|2,706,646|96|
|Manipulating private properties using underscore(_)|703,234,417|96|
|Manipulating private properties using Symbol|700,555,641|98|
|Manipulating private properties using PrivateSymbol|26,646,628|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,121,957|94|
|Using replaceAll()|1,958,543|96|
|Using replaceAll(//g)|1,882,400|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,654|97|
|Sort using first char|747,707|93|
|Sort using localeCompare|424,008|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,140|92|
|{...smallObject} - Total keys: 2|58,989,815|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,331|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,598|98|
|{ ...bigObject, ...anotherBigObject }|736|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,837,303|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,711,789|93|
|{ ...smallObject, ...anotherSmallObject }|13,904,234|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,661 ops/sec ±0.66% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 399 ops/sec ±0.33% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,847 ops/sec ±0.59% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 718 ops/sec ±16.89% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|711,316,232|95|
|Using backtick (`)|710,531,322|95|
|Using array.join|6,407,672|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|134,478,418|95|
|Using this|127,558,001|94|
