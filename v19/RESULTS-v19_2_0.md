# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Mon Jan 02 2023 17:43:55 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.014ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.042ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.085ms 
    new Array(length): 0.035ms (faster)

 10,000 numbers:
           array.push: 0.6ms 
    new Array(length): 0.508ms (faster)

 1,000,000 numbers:
           array.push: 54.194ms 
    new Array(length): 11.473ms (faster)

 100,000,000 numbers:
           array.push: 2,310.071ms (faster)
    new Array(length): 5,662.723ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.103ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.043ms 
    new Array(length): 0.02ms (faster)

 10,000 strings:
           array.push: 0.306ms 
    new Array(length): 0.275ms (faster)

 1,000,000 strings:
           array.push: 30.797ms 
    new Array(length): 4.83ms (faster)

 100,000,000 strings:
           array.push: 2,602.899ms (faster)
    new Array(length): 6,025.181ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|339|77|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,001|51|
|[True conditional] Using constructor name|131,248|84|
|[True conditional] Check if property is valid then instanceof |139,312|85|
|[False conditional] Using instanceof only|861,410,015|87|
|[False conditional] Using constructor name|815,567,477|85|
|[False conditional] Check if property is valid then instanceof |832,255,994|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,266|79|
|Intl.DateTimeFormat().format(new Date())|6,181|75|
|Reusing Intl.DateTimeFormat()|452,502|81|
|Format using date.get*|3,140,618|73|
|new Date() (Baseline)|8,028,593|82|
|Date.now() (Baseline)|14,674,058|83|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|631,028|82|
|Using brackets {}|656,700|88|
|Using '' + |668,607|83|
|Using date.toString()|722,927|85|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,372,248|87|
|Using undefined assignment|870,480,710|89|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|172,561|55|
|NodeError|134,927|85|
|NodeError Range|135,310|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,345,205|85|
|Function returning explicitly undefined|1,338,896|86|
|Function returning implicitly undefined|1,392,115|87|
|Function returning string|1,336,915|87|
|Function returning integer|1,345,176|86|
|Function returning float|1,299,657|83|
|Function returning functions|1,299,446|86|
|Function returning arrow functions|1,329,034|86|
|Function returning empty object|1,288,751|88|
|Function returning empty array|1,320,212|88|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|841,525,863|83|
|using Array.includes (first item)|876,136,668|88|
|Using raw comparison|880,701,770|90|
|Using raw comparison (first item)|879,997,303|85|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,981,803|85|
|Using Object.getOwnPropertyNames()|54,546,083|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|709,236,055|86|
|Length = 10_000 - Array.at|723,962,273|90|
|Length = 1_000_000 - Array.at|729,211,615|89|
|Length = 100 - Array[length - 1]|879,401,228|88|
|Length = 10_000 - Array[length - 1]|866,798,287|87|
|Length = 1_000_000 - Array[length - 1]|837,424,352|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,184,661|86|
|Object.create({})|1,292,219|72|
|Cached Empty.prototype|864,472,130|85|
|Empty.prototype|1,132,728|62|
|Empty class|929,192|79|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|845,208,571|84|
|Using optional chain (obj.field?.field2) (undefined)|879,746,386|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|877,299,937|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|874,272,611|86|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,068,827|85|
|Using parseInt(x, 10) - big number (10 len)|12,490,738|84|
|Using + - small number (2 len)|876,188,539|86|
|Using + - big number (10 len)|866,163,021|85|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|787,232|71|
|Using ? operator to avoid rejection|820,383|72|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|723,141,074|88|
|Raw usage underscore usage|720,757,638|86|
|Manipulating private properties using #|712,073,920|84|
|Manipulating private properties using underscore(_)|698,654,008|84|
|Manipulating private properties using Symbol|709,148,890|85|
|Manipulating private properties using PrivateSymbol|33,408,776|83|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,449,188|88|
|Adding property in the object creation - small object|2,419,752|85|
|Adding property after the function creation - small class|159,490|77|
|Adding property in the function creation - small class|160,722|75|
|Adding property after the class creation - small class|133,612|72|
|Adding property in the class creation - small class|129,217|73|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,119,472|83|
|Using replaceAll()|2,014,400|86|
|Using replaceAll(//g)|1,921,724|84|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,255|85|
|Sort using first char|831,371|89|
|Sort using localeCompare|744,089|84|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,255|73|
|{...smallObject} - Total keys: 2|64,938,704|83|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,302|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,462|87|
|{ ...bigObject, ...anotherBigObject }|741|79|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,343,970|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,763,634|84|
|{ ...smallObject, ...anotherSmallObject }|13,202,186|84|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,200 ops/sec ±24.64% (78 runs sampled)
streams.web.Readable reading 1e3 * some data x 351 ops/sec ±5.49% (79 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,101 ops/sec ±1.20% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 877 ops/sec ±18.49% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|863,474,208|88|
|Using backtick (`)|860,825,407|87|
|Using array.join|6,797,893|87|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|162,200,517|87|
|Using this|196,846,477|85|
