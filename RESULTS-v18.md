# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.10.0`
* __Run:__ Sun Oct 02 2022 22:11:20 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.03ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.035ms (faster)

 10,000 numbers:
           array.push: 0.573ms 
    new Array(length): 0.225ms (faster)

 1,000,000 numbers:
           array.push: 34.935ms 
    new Array(length): 19.258ms (faster)

 100,000,000 numbers:
           array.push: 2,064.118ms (faster)
    new Array(length): 4,821.946ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.665ms 
    new Array(length): 0.297ms (faster)

 1,000,000 strings:
           array.push: 224.162ms 
    new Array(length): 11.503ms (faster)

 100,000,000 strings:
           array.push: 2,549.794ms (faster)
    new Array(length): 5,500.412ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|360|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,464|57|
|[True conditional] Using constructor name|149,172|94|
|[True conditional] Check if property is valid then instanceof |149,966|93|
|[False conditional] Using instanceof only|710,361,056|95|
|[False conditional] Using constructor name|710,417,765|96|
|[False conditional] Check if property is valid then instanceof |711,684,896|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,082|87|
|Intl.DateTimeFormat().format(new Date())|8,538|78|
|Reusing Intl.DateTimeFormat()|401,068|80|
|Format using date.get*|3,611,289|99|
|new Date() (Baseline)|7,554,283|94|
|Date.now() (Baseline)|15,452,588|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|646,912|96|
|Using brackets {}|685,096|98|
|Using '' + |674,059|98|
|Using date.toString()|747,082|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,397,439|96|
|Using undefined assignment|709,630,737|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|182,404|57|
|NodeError|143,133|96|
|NodeError Range|143,095|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,340,829|97|
|Function returning explicitly undefined|1,325,769|95|
|Function returning implicitly undefined|1,350,241|96|
|Function returning string|1,338,212|93|
|Function returning integer|1,338,449|93|
|Function returning float|1,357,744|97|
|Function returning functions|1,322,353|91|
|Function returning arrow functions|1,336,750|95|
|Function returning empty object|1,354,427|97|
|Function returning empty array|1,329,282|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,768,751|95|
|using Array.includes (first item)|709,218,306|96|
|Using raw comparison|710,164,250|97|
|Using raw comparison (first item)|707,489,072|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,764,234|95|
|Using Object.getOwnPropertyNames()|51,577,976|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,784,446|94|
|Length = 10_000 - Array.at|16,781,475|96|
|Length = 1_000_000 - Array.at|16,700,612|95|
|Length = 100 - Array[length - 1]|708,668,030|96|
|Length = 10_000 - Array[length - 1]|706,651,625|96|
|Length = 1_000_000 - Array[length - 1]|706,900,427|99|

## Object shallow clone

|name|ops/sec|samples|
|-|-|-|
|Object.assign (small obj)|13,206,555|91|
|Spread operator (small obj)|63,989,155|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,925,531|94|
|Object.create({})|1,012,380|82|
|Cached Empty.prototype|703,834,993|97|
|Empty.prototype|1,060,099|78|
|Empty class|722,433|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,706,649|98|
|Using optional chain (obj.field?.field2) (undefined)|710,280,287|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,429,229|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,356,975|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|584,138|73|
|Using ? operator to avoid rejection|625,533|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|234,021,807|95|
|Raw usage underscore usage|222,202,090|90|
|Manipulating private properties using #|145,473,786|80|
|Manipulating private properties using underscore(_)|129,167,190|90|
|Manipulating private properties using Symbol|129,442,792|93|
|Manipulating private properties using PrivateSymbol|29,549,807|98|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,252,111|95|
|Using replaceAll()|2,044,392|96|
|Using replaceAll(//g)|1,985,317|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,325|93|
|Sort using first char|721,003|97|
|Sort using localeCompare|685,738|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,587 ops/sec ±14.05% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 424 ops/sec ±0.23% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,539 ops/sec ±0.51% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,026 ops/sec ±15.77% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,679,077|98|
|Using backtick (`)|710,526,762|97|
|Using array.join|6,546,337|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,630,474|95|
|Using this|129,478,052|94|
