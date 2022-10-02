# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.10.0`
* __Run:__ Sun Oct 02 2022 21:25:53 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.029ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.057ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.524ms 
    new Array(length): 0.199ms (faster)

 1,000,000 numbers:
           array.push: 31.516ms 
    new Array(length): 18.057ms (faster)

 100,000,000 numbers:
           array.push: 1,637.42ms (faster)
    new Array(length): 4,186.993ms


----


 10 strings:
           array.push: 0.007ms (faster)
    new Array(length): 0.028ms

 100 strings:
           array.push: 0.101ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.048ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.577ms 
    new Array(length): 0.261ms (faster)

 1,000,000 strings:
           array.push: 195.766ms 
    new Array(length): 10.295ms (faster)

 100,000,000 strings:
           array.push: 1,998.58ms (faster)
    new Array(length): 4,665.012ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|427|84|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,594|53|
|[True conditional] Using constructor name|128,219|93|
|[True conditional] Check if property is valid then instanceof |129,713|94|
|[False conditional] Using instanceof only|592,119,051|96|
|[False conditional] Using constructor name|591,871,875|95|
|[False conditional] Check if property is valid then instanceof |592,629,997|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,279|86|
|Intl.DateTimeFormat().format(new Date())|9,126|80|
|Reusing Intl.DateTimeFormat()|456,074|84|
|Format using date.get*|3,803,003|93|
|new Date() (Baseline)|7,850,911|98|
|Date.now() (Baseline)|15,798,892|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|695,214|97|
|Using brackets {}|671,883|95|
|Using '' + |702,417|98|
|Using date.toString()|769,080|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,474,104|97|
|Using undefined assignment|591,266,740|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,084|54|
|NodeError|127,418|93|
|NodeError Range|127,412|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,284,340|93|
|Function returning explicitly undefined|1,202,156|91|
|Function returning implicitly undefined|1,186,094|96|
|Function returning string|1,272,959|93|
|Function returning integer|1,286,960|93|
|Function returning float|1,288,233|92|
|Function returning functions|1,235,297|95|
|Function returning arrow functions|1,266,588|96|
|Function returning empty object|1,280,445|95|
|Function returning empty array|1,256,676|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,971,459|98|
|using Array.includes (first item)|592,169,866|96|
|Using raw comparison|593,060,983|94|
|Using raw comparison (first item)|592,434,137|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|69,207,895|91|
|Using Object.getOwnPropertyNames()|68,748,879|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,341,079|97|
|Length = 10_000 - Array.at|19,272,801|96|
|Length = 1_000_000 - Array.at|19,292,922|96|
|Length = 100 - Array[length - 1]|591,006,162|93|
|Length = 10_000 - Array[length - 1]|590,501,359|96|
|Length = 1_000_000 - Array[length - 1]|589,081,121|96|

## Object shallow close

|name|ops/sec|samples|
|-|-|-|
|Object.assign (small obj)|16,671,864|96|
|Spread operator (small obj)|78,953,353|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,086,810|91|
|Object.create({})|1,005,690|78|
|Cached Empty.prototype|592,389,277|99|
|Empty.prototype|1,123,485|81|
|Empty class|666,166|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,086,726|95|
|Using optional chain (obj.field?.field2) (undefined)|592,714,775|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,938,404|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,738,257|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|545,656|82|
|Using ? operator to avoid rejection|574,323|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|251,105,642|94|
|Raw usage underscore usage|256,874,215|90|
|Manipulating private properties using #|181,523,769|93|
|Manipulating private properties using underscore(_)|159,690,203|88|
|Manipulating private properties using Symbol|159,805,113|83|
|Manipulating private properties using PrivateSymbol|36,200,449|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,419,316|96|
|Using replaceAll()|2,092,924|98|
|Using replaceAll(//g)|2,139,361|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,408|94|
|Sort using first char|827,927|95|
|Sort using localeCompare|774,427|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,774 ops/sec ±0.58% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 385 ops/sec ±0.37% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,956 ops/sec ±0.40% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 898 ops/sec ±14.14% (64 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,737,258|98|
|Using backtick (`)|593,181,838|96|
|Using array.join|8,480,154|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,557,997|90|
|Using this|113,491,177|95|
