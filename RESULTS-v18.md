# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.9.0`
* __Run:__ Fri Sep 09 2022 02:02:50 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.009ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.126ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.049ms 
    new Array(length): 0.021ms (faster)

 10,000 numbers:
           array.push: 0.39ms 
    new Array(length): 0.198ms (faster)

 1,000,000 numbers:
           array.push: 29.142ms 
    new Array(length): 17.121ms (faster)

 100,000,000 numbers:
           array.push: 1,753.971ms (faster)
    new Array(length): 4,114.634ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.109ms 
    new Array(length): 0.024ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.576ms 
    new Array(length): 0.264ms (faster)

 1,000,000 strings:
           array.push: 307.509ms 
    new Array(length): 8.417ms (faster)

 100,000,000 strings:
           array.push: 2,107.895ms (faster)
    new Array(length): 4,669.865ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|437|84|
|Array.from|15|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,541|53|
|[True conditional] Using constructor name|130,393|92|
|[True conditional] Check if property is valid then instanceof |131,266|93|
|[False conditional] Using instanceof only|590,715,048|94|
|[False conditional] Using constructor name|590,720,377|98|
|[False conditional] Check if property is valid then instanceof |591,964,170|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,263|86|
|Intl.DateTimeFormat().format(new Date())|9,081|81|
|Reusing Intl.DateTimeFormat()|386,855|86|
|Format using date.get*|3,957,741|97|
|new Date() (Baseline)|8,241,906|97|
|Date.now() (Baseline)|16,015,145|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|655,834|94|
|Using brackets {}|670,121|94|
|Using '' + |663,290|92|
|Using date.toString()|769,189|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,480,303|96|
|Using undefined assignment|592,013,332|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|167,230|54|
|NodeError|129,985|93|
|NodeError Range|129,909|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,284,930|95|
|Function returning explicitly undefined|1,233,378|96|
|Function returning implicitly undefined|1,183,867|96|
|Function returning string|1,270,210|95|
|Function returning integer|1,286,190|95|
|Function returning float|1,286,736|95|
|Function returning functions|1,240,726|93|
|Function returning arrow functions|1,257,538|96|
|Function returning empty object|1,291,934|98|
|Function returning empty array|1,261,289|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|589,728,562|98|
|using Array.includes (first item)|589,345,770|98|
|Using raw comparison|590,779,969|96|
|Using raw comparison (first item)|590,476,751|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|69,355,659|91|
|Using Object.getOwnPropertyNames()|70,307,385|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,954,302|97|
|Length = 10_000 - Array.at|19,246,459|95|
|Length = 1_000_000 - Array.at|19,292,772|96|
|Length = 100 - Array[length - 1]|591,117,205|98|
|Length = 10_000 - Array[length - 1]|590,943,132|92|
|Length = 1_000_000 - Array[length - 1]|591,426,461|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,277,407|92|
|Object.create({})|1,039,868|81|
|Cached Empty.prototype|590,875,372|95|
|Empty.prototype|1,195,452|82|
|Empty class|697,856|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,292,088|95|
|Using optional chain (obj.field?.field2) (undefined)|592,243,721|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,411,499|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,713,495|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|551,386|82|
|Using ? operator to avoid rejection|567,831|89|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|255,820,955|92|
|Raw usage underscore usage|265,042,015|95|
|Manipulating private properties using #|194,637,347|95|
|Manipulating private properties using underscore(_)|192,931,174|92|
|Manipulating private properties using Symbol|191,660,396|93|
|Manipulating private properties using PrivateSymbol|37,193,766|97|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,434,345|93|
|Using replaceAll()|2,098,029|98|
|Using replaceAll(//g)|2,169,843|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|192,100|92|
|Sort using first char|896,052|97|
|Sort using localeCompare|814,946|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,719 ops/sec ±18.26% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 383 ops/sec ±0.21% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,942 ops/sec ±0.42% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,002 ops/sec ±27.59% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,988,587|95|
|Using backtick (`)|584,588,855|98|
|Using array.join|8,472,320|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,051,871|94|
|Using this|113,842,898|95|
