# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.16.0`
* __Run:__ Fri Aug 12 2022 19:23:52 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.097ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.049ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.412ms 
    new Array(length): 0.246ms (faster)

 1,000,000 numbers:
           array.push: 30.653ms 
    new Array(length): 9.686ms (faster)

 100,000,000 numbers:
           array.push: 1,598.216ms (faster)
    new Array(length): 4,352.128ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.107ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.048ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.528ms 
    new Array(length): 0.247ms (faster)

 1,000,000 strings:
           array.push: 309.228ms 
    new Array(length): 9.053ms (faster)

 100,000,000 strings:
           array.push: 2,125.849ms (faster)
    new Array(length): 4,697.011ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|411|82|
|Array.from|16|43|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|174,137|54|
|[True conditional] Using constructor name|133,351|94|
|[True conditional] Check if property is valid then instanceof |135,084|93|
|[False conditional] Using instanceof only|595,172,199|95|
|[False conditional] Using constructor name|595,108,498|93|
|[False conditional] Check if property is valid then instanceof |596,027,151|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,950|84|
|Intl.DateTimeFormat().format(new Date())|9,106|82|
|Reusing Intl.DateTimeFormat()|414,140|91|
|Format using date.get*|3,688,341|98|
|new Date() (Baseline)|7,670,533|97|
|Date.now() (Baseline)|12,152,070|84|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|692,958|98|
|Using brackets {}|705,995|98|
|Using '' + |703,197|95|
|Using date.toString()|720,858|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,454,566|95|
|Using undefined assignment|593,656,079|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|171,019|52|
|NodeError|131,066|94|
|NodeError Range|132,289|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,247,553|97|
|Function returning explicitly undefined|1,231,054|98|
|Function returning implicitly undefined|1,259,061|93|
|Function returning string|1,232,287|94|
|Function returning integer|1,267,484|95|
|Function returning float|1,258,744|95|
|Function returning functions|1,222,838|96|
|Function returning arrow functions|1,197,305|96|
|Function returning empty object|1,238,768|96|
|Function returning empty array|1,262,156|95|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,745,547|97|
|using Array.includes (first item)|594,076,410|96|
|Using raw comparisson|595,447,422|95|
|Using raw comparisson (first item)|593,716,238|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,043,184|97|
|Length = 10_000 - Array.at|18,123,202|98|
|Length = 1_000_000 - Array.at|17,902,042|97|
|Length = 100 - Array[length - 1]|593,578,201|98|
|Length = 10_000 - Array[length - 1]|593,166,242|95|
|Length = 1_000_000 - Array[length - 1]|592,292,171|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,519,182|97|
|Using optional chain (obj.field?.field2) (undefined)|594,276,729|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,123,046|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|595,124,774|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|708,605|78|
|Using ? operator to avoid rejection|768,592|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,314,943|94|
|Raw usage underscore usage|7,735,645|93|
|Manipulating private properties using #|2,830,097|95|
|Manipulating private properties using underscore(_)|590,943,827|97|
|Manipulating private properties using Symbol|589,211,788|95|
|Manipulating private properties using PrivateSymbol|35,110,845|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|184,513|96|
|Sort using first char|819,155|95|
|Sort using localeCompare|437,969|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,681 ops/sec ±16.82% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 379 ops/sec ±0.54% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,866 ops/sec ±0.50% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 943 ops/sec ±32.37% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,359,192|92|
|Using this|112,527,732|94|
