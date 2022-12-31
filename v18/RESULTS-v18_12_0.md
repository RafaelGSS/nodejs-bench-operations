# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Sat Dec 31 2022 20:04:42 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.027ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.056ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.824ms 
    new Array(length): 0.201ms (faster)

 1,000,000 numbers:
           array.push: 29.39ms 
    new Array(length): 16.68ms (faster)

 100,000,000 numbers:
           array.push: 1,678.561ms (faster)
    new Array(length): 4,185.025ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.107ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.62ms 
    new Array(length): 0.267ms (faster)

 1,000,000 strings:
           array.push: 302.115ms 
    new Array(length): 8.398ms (faster)

 100,000,000 strings:
           array.push: 2,130.639ms (faster)
    new Array(length): 4,724.656ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|414|83|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,170|54|
|[True conditional] Using constructor name|129,748|95|
|[True conditional] Check if property is valid then instanceof |130,540|93|
|[False conditional] Using instanceof only|591,584,361|96|
|[False conditional] Using constructor name|591,456,733|98|
|[False conditional] Check if property is valid then instanceof |586,930,168|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,306|90|
|Intl.DateTimeFormat().format(new Date())|8,987|79|
|Reusing Intl.DateTimeFormat()|446,821|98|
|Format using date.get*|3,228,140|94|
|new Date() (Baseline)|7,984,643|95|
|Date.now() (Baseline)|15,545,999|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|707,093|95|
|Using brackets {}|723,221|98|
|Using '' + |720,280|98|
|Using date.toString()|796,410|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,455,048|95|
|Using undefined assignment|591,365,995|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,583|54|
|NodeError|127,679|92|
|NodeError Range|127,840|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,274,784|94|
|Function returning explicitly undefined|1,232,058|96|
|Function returning implicitly undefined|1,289,974|89|
|Function returning string|1,268,351|94|
|Function returning integer|1,291,050|94|
|Function returning float|1,176,483|96|
|Function returning functions|1,243,370|96|
|Function returning arrow functions|1,247,372|97|
|Function returning empty object|1,275,245|94|
|Function returning empty array|1,285,823|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,897,622|98|
|using Array.includes (first item)|590,862,389|97|
|Using raw comparison|591,750,046|98|
|Using raw comparison (first item)|591,634,951|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|68,245,794|95|
|Using Object.getOwnPropertyNames()|68,857,353|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,188,234|96|
|Length = 10_000 - Array.at|18,906,314|98|
|Length = 1_000_000 - Array.at|19,289,186|92|
|Length = 100 - Array[length - 1]|589,453,137|92|
|Length = 10_000 - Array[length - 1]|590,163,310|90|
|Length = 1_000_000 - Array[length - 1]|589,424,758|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,569,413|94|
|Object.create({})|1,030,854|82|
|Cached Empty.prototype|590,622,431|97|
|Empty.prototype|1,126,948|81|
|Empty class|671,479|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,029,200|95|
|Using optional chain (obj.field?.field2) (undefined)|591,270,496|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,269,878|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,334,772|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,678,152|95|
|Using parseInt(x, 10) - big number (10 len)|14,957,169|96|
|Using + - small number (2 len)|591,553,713|95|
|Using + - big number (10 len)|591,998,155|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|546,393|81|
|Using ? operator to avoid rejection|574,002|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|254,334,644|91|
|Raw usage underscore usage|263,983,914|94|
|Manipulating private properties using #|191,785,254|97|
|Manipulating private properties using underscore(_)|182,343,589|91|
|Manipulating private properties using Symbol|180,780,187|95|
|Manipulating private properties using PrivateSymbol|36,435,674|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,798,131|98|
|Adding property in the object creation - small object|1,802,440|100|
|Adding property after the function creation - small class|135,592|89|
|Adding property in the function creation - small class|135,637|92|
|Adding property after the class creation - small class|114,259|86|
|Adding property in the class creation - small class|114,887|88|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,495,292|94|
|Using replaceAll()|2,153,890|97|
|Using replaceAll(//g)|2,197,780|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|196,929|98|
|Sort using first char|886,317|97|
|Sort using localeCompare|791,540|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,416|93|
|{...smallObject} - Total keys: 2|78,513,116|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,604|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,540|97|
|{ ...bigObject, ...anotherBigObject }|838|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,272,295|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,064,417|97|
|{ ...smallObject, ...anotherSmallObject }|16,781,518|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,659 ops/sec ±17.04% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 373 ops/sec ±0.17% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,832 ops/sec ±0.43% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,006 ops/sec ±29.55% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|587,043,418|97|
|Using backtick (`)|591,538,477|96|
|Using array.join|8,638,452|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,968,669|93|
|Using this|113,808,204|96|
