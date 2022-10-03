# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.10.0`
* __Run:__ Mon Oct 03 2022 12:56:31 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.056ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.508ms 
    new Array(length): 0.199ms (faster)

 1,000,000 numbers:
           array.push: 32.081ms 
    new Array(length): 17.143ms (faster)

 100,000,000 numbers:
           array.push: 1,549.41ms (faster)
    new Array(length): 4,121.237ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.047ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.602ms 
    new Array(length): 0.266ms (faster)

 1,000,000 strings:
           array.push: 299.759ms 
    new Array(length): 9.017ms (faster)

 100,000,000 strings:
           array.push: 2,127.715ms (faster)
    new Array(length): 4,627.875ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|435|87|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,339|53|
|[True conditional] Using constructor name|128,784|92|
|[True conditional] Check if property is valid then instanceof |130,328|94|
|[False conditional] Using instanceof only|591,301,146|96|
|[False conditional] Using constructor name|590,789,161|96|
|[False conditional] Check if property is valid then instanceof |591,405,849|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,404|89|
|Intl.DateTimeFormat().format(new Date())|9,163|79|
|Reusing Intl.DateTimeFormat()|390,547|83|
|Format using date.get*|3,909,489|96|
|new Date() (Baseline)|7,937,062|99|
|Date.now() (Baseline)|15,825,437|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|693,879|98|
|Using brackets {}|704,052|96|
|Using '' + |699,213|96|
|Using date.toString()|771,436|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,458,263|97|
|Using undefined assignment|590,305,696|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,026|54|
|NodeError|125,311|92|
|NodeError Range|125,349|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,278,062|95|
|Function returning explicitly undefined|1,230,055|94|
|Function returning implicitly undefined|1,292,810|97|
|Function returning string|1,265,325|95|
|Function returning integer|1,288,944|94|
|Function returning float|1,281,044|96|
|Function returning functions|1,231,091|94|
|Function returning arrow functions|1,231,177|98|
|Function returning empty object|1,286,663|95|
|Function returning empty array|1,222,850|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,040,516|96|
|using Array.includes (first item)|590,788,469|97|
|Using raw comparison|591,746,806|96|
|Using raw comparison (first item)|591,721,735|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|68,804,838|93|
|Using Object.getOwnPropertyNames()|69,941,636|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,219,380|98|
|Length = 10_000 - Array.at|19,199,204|99|
|Length = 1_000_000 - Array.at|19,188,206|98|
|Length = 100 - Array[length - 1]|589,047,316|98|
|Length = 10_000 - Array[length - 1]|589,407,622|97|
|Length = 1_000_000 - Array[length - 1]|589,441,591|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,279,497|95|
|Object.create({})|1,033,139|79|
|Cached Empty.prototype|590,876,751|98|
|Empty.prototype|1,156,548|78|
|Empty class|668,526|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,404,368|95|
|Using optional chain (obj.field?.field2) (undefined)|591,312,113|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,370,936|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|589,341,484|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|555,899|82|
|Using ? operator to avoid rejection|584,179|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|256,291,350|94|
|Raw usage underscore usage|263,570,787|92|
|Manipulating private properties using #|193,774,950|90|
|Manipulating private properties using underscore(_)|187,095,039|96|
|Manipulating private properties using Symbol|185,774,179|93|
|Manipulating private properties using PrivateSymbol|36,679,143|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,429,205|94|
|Using replaceAll()|2,094,484|93|
|Using replaceAll(//g)|2,143,494|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|195,090|99|
|Sort using first char|889,639|99|
|Sort using localeCompare|808,604|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,661 ops/sec ±16.98% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 379 ops/sec ±0.19% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,855 ops/sec ±0.36% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 988 ops/sec ±24.83% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,218,143|97|
|Using backtick (`)|591,036,337|97|
|Using array.join|8,548,190|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,990,583|92|
|Using this|113,988,483|95|
