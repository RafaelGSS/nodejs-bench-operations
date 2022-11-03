# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Thu Nov 03 2022 16:12:54 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.048ms 
    new Array(length): 0.019ms (faster)

 1,000 numbers:
           array.push: 0.074ms 
    new Array(length): 0.037ms (faster)

 10,000 numbers:
           array.push: 0.665ms 
    new Array(length): 0.259ms (faster)

 1,000,000 numbers:
           array.push: 44.366ms 
    new Array(length): 8.022ms (faster)

 100,000,000 numbers:
           array.push: 1,985.095ms (faster)
    new Array(length): 4,677.809ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.658ms 
    new Array(length): 0.307ms (faster)

 1,000,000 strings:
           array.push: 217.305ms 
    new Array(length): 11.677ms (faster)

 100,000,000 strings:
           array.push: 2,577.756ms (faster)
    new Array(length): 5,485.225ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|78|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|187,492|56|
|[True conditional] Using constructor name|147,352|95|
|[True conditional] Check if property is valid then instanceof |148,543|91|
|[False conditional] Using instanceof only|709,931,156|96|
|[False conditional] Using constructor name|710,872,878|98|
|[False conditional] Check if property is valid then instanceof |708,881,436|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,962|81|
|Intl.DateTimeFormat().format(new Date())|8,579|78|
|Reusing Intl.DateTimeFormat()|401,911|79|
|Format using date.get*|3,652,136|97|
|new Date() (Baseline)|7,372,486|98|
|Date.now() (Baseline)|15,350,484|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|677,902|98|
|Using brackets {}|682,367|94|
|Using '' + |676,850|99|
|Using date.toString()|738,020|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,374,379|97|
|Using undefined assignment|708,850,389|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|183,179|57|
|NodeError|144,854|94|
|NodeError Range|144,005|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,384,218|97|
|Function returning explicitly undefined|1,357,226|94|
|Function returning implicitly undefined|1,400,878|94|
|Function returning string|1,372,851|95|
|Function returning integer|1,404,945|95|
|Function returning float|1,396,236|97|
|Function returning functions|1,358,266|94|
|Function returning arrow functions|1,372,655|96|
|Function returning empty object|1,396,218|98|
|Function returning empty array|1,376,821|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,727,800|97|
|using Array.includes (first item)|708,494,143|97|
|Using raw comparison|710,290,071|93|
|Using raw comparison (first item)|708,924,070|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,255,453|90|
|Using Object.getOwnPropertyNames()|50,026,542|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,854,522|98|
|Length = 10_000 - Array.at|16,819,333|96|
|Length = 1_000_000 - Array.at|16,796,712|96|
|Length = 100 - Array[length - 1]|707,618,780|96|
|Length = 10_000 - Array[length - 1]|707,356,578|97|
|Length = 1_000_000 - Array[length - 1]|705,872,244|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,203,661|97|
|Object.create({})|1,009,045|83|
|Cached Empty.prototype|710,970,755|95|
|Empty.prototype|1,060,418|83|
|Empty class|723,729|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,813,860|96|
|Using optional chain (obj.field?.field2) (undefined)|710,398,308|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,945,014|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,216,165|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,309,402|98|
|Using parseInt(x, 10) - big number (10 len)|14,342,655|99|
|Using + - small number (2 len)|709,274,710|96|
|Using + - big number (10 len)|709,192,934|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|604,671|79|
|Using ? operator to avoid rejection|635,393|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|241,658,029|91|
|Raw usage underscore usage|241,437,331|90|
|Manipulating private properties using #|159,559,718|90|
|Manipulating private properties using underscore(_)|142,414,197|81|
|Manipulating private properties using Symbol|141,086,949|92|
|Manipulating private properties using PrivateSymbol|29,768,556|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,257,848|92|
|Using replaceAll()|2,063,924|97|
|Using replaceAll(//g)|2,000,765|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,003|97|
|Sort using first char|723,920|93|
|Sort using localeCompare|684,891|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,146|94|
|{...smallObject} - Total keys: 2|62,914,191|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,322|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,596|98|
|{ ...bigObject, ...anotherBigObject }|743|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,141,262|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,117,768|95|
|{ ...smallObject, ...anotherSmallObject }|11,032,683|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,712 ops/sec ±1.01% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 424 ops/sec ±0.39% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,523 ops/sec ±0.55% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,024 ops/sec ±16.95% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,247,396|96|
|Using backtick (`)|709,802,774|95|
|Using array.join|6,582,800|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,872,591|92|
|Using this|130,448,478|91|
