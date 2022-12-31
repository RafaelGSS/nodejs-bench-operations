# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sat Dec 31 2022 20:04:40 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.146ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.066ms 
    new Array(length): 0.031ms (faster)

 10,000 numbers:
           array.push: 0.39ms 
    new Array(length): 0.245ms (faster)

 1,000,000 numbers:
           array.push: 35.585ms 
    new Array(length): 21.056ms (faster)

 100,000,000 numbers:
           array.push: 2,107.368ms (faster)
    new Array(length): 5,134.702ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.051ms

 100 strings:
           array.push: 0.019ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.025ms (faster)

 10,000 strings:
           array.push: 0.85ms 
    new Array(length): 0.329ms (faster)

 1,000,000 strings:
           array.push: 424.801ms 
    new Array(length): 8.644ms (faster)

 100,000,000 strings:
           array.push: 2,765.091ms (faster)
    new Array(length): 5,650.927ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|345|78|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,818|53|
|[True conditional] Using constructor name|132,989|82|
|[True conditional] Check if property is valid then instanceof |127,651|81|
|[False conditional] Using instanceof only|876,542,869|87|
|[False conditional] Using constructor name|904,141,377|91|
|[False conditional] Check if property is valid then instanceof |890,402,388|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,217|78|
|Intl.DateTimeFormat().format(new Date())|5,890|76|
|Reusing Intl.DateTimeFormat()|460,828|90|
|Format using date.get*|2,749,256|82|
|new Date() (Baseline)|7,106,245|86|
|Date.now() (Baseline)|15,370,707|86|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|661,395|89|
|Using brackets {}|658,457|90|
|Using '' + |673,126|87|
|Using date.toString()|736,553|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,366,881|85|
|Using undefined assignment|902,970,570|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|183,347|54|
|NodeError|140,232|87|
|NodeError Range|138,332|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,290,024|87|
|Function returning explicitly undefined|1,248,847|89|
|Function returning implicitly undefined|1,343,822|90|
|Function returning string|1,293,931|88|
|Function returning integer|1,321,070|89|
|Function returning float|1,316,652|86|
|Function returning functions|1,239,938|86|
|Function returning arrow functions|1,229,011|87|
|Function returning empty object|1,284,507|88|
|Function returning empty array|1,292,318|89|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|870,853,354|89|
|using Array.includes (first item)|860,552,127|86|
|Using raw comparison|870,693,564|88|
|Using raw comparison (first item)|889,564,847|87|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,317,813|86|
|Using Object.getOwnPropertyNames()|57,370,983|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,240,966|89|
|Length = 10_000 - Array.at|18,633,323|90|
|Length = 1_000_000 - Array.at|18,150,507|87|
|Length = 100 - Array[length - 1]|915,371,030|91|
|Length = 10_000 - Array[length - 1]|917,316,011|90|
|Length = 1_000_000 - Array[length - 1]|866,919,883|89|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,811,642|86|
|Object.create({})|1,297,767|74|
|Cached Empty.prototype|899,701,222|89|
|Empty.prototype|1,281,160|73|
|Empty class|898,169|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|906,064,903|89|
|Using optional chain (obj.field?.field2) (undefined)|893,743,847|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|895,870,458|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|907,184,752|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|182,686,202|88|
|Using parseInt(x, 10) - big number (10 len)|12,986,857|85|
|Using + - small number (2 len)|851,014,677|85|
|Using + - big number (10 len)|879,143,679|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|722,406|70|
|Using ? operator to avoid rejection|798,986|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,220,396|84|
|Raw usage underscore usage|6,841,464|87|
|Manipulating private properties using #|2,483,892|87|
|Manipulating private properties using underscore(_)|721,101,275|86|
|Manipulating private properties using Symbol|739,505,066|89|
|Manipulating private properties using PrivateSymbol|29,335,903|84|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,363,456|87|
|Adding property in the object creation - small object|2,388,655|87|
|Adding property after the function creation - small class|159,214|81|
|Adding property in the function creation - small class|161,895|78|
|Adding property after the class creation - small class|129,902|77|
|Adding property in the class creation - small class|131,218|73|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,282,217|85|
|Using replaceAll()|2,042,673|88|
|Using replaceAll(//g)|1,999,004|84|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,681|85|
|Sort using first char|812,582|85|
|Sort using localeCompare|385,682|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,312|77|
|{...smallObject} - Total keys: 2|64,472,710|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,325|83|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,558|88|
|{ ...bigObject, ...anotherBigObject }|804|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,785,953|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,489,956|85|
|{ ...smallObject, ...anotherSmallObject }|16,021,947|88|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,559 ops/sec ±16.06% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 380 ops/sec ±1.78% (81 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,642 ops/sec ±1.33% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 705 ops/sec ±17.00% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|880,333,032|86|
|Using backtick (`)|891,919,491|86|
|Using array.join|6,628,201|86|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|180,605,696|87|
|Using this|180,691,311|85|
