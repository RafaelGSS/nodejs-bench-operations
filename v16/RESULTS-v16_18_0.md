# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sat Dec 31 2022 20:19:44 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.136ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.06ms 
    new Array(length): 0.029ms (faster)

 10,000 numbers:
           array.push: 0.552ms 
    new Array(length): 0.281ms (faster)

 1,000,000 numbers:
           array.push: 35.418ms 
    new Array(length): 12.082ms (faster)

 100,000,000 numbers:
           array.push: 2,157.545ms (faster)
    new Array(length): 5,330.632ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.021ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.064ms 
    new Array(length): 0.033ms (faster)

 10,000 strings:
           array.push: 0.715ms 
    new Array(length): 0.31ms (faster)

 1,000,000 strings:
           array.push: 364.044ms 
    new Array(length): 10.104ms (faster)

 100,000,000 strings:
           array.push: 2,945.559ms (faster)
    new Array(length): 6,128.227ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|305|76|
|Array.from|13|37|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,714|58|
|[True conditional] Using constructor name|149,786|90|
|[True conditional] Check if property is valid then instanceof |150,285|89|
|[False conditional] Using instanceof only|665,931,443|88|
|[False conditional] Using constructor name|670,994,200|90|
|[False conditional] Check if property is valid then instanceof |670,902,209|85|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,579|77|
|Intl.DateTimeFormat().format(new Date())|7,319|76|
|Reusing Intl.DateTimeFormat()|423,315|90|
|Format using date.get*|2,474,350|81|
|new Date() (Baseline)|6,729,865|86|
|Date.now() (Baseline)|13,497,902|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|630,035|88|
|Using brackets {}|647,595|91|
|Using '' + |625,553|86|
|Using date.toString()|672,902|87|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,291,391|88|
|Using undefined assignment|668,258,818|87|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|175,230|50|
|NodeError|127,122|89|
|NodeError Range|134,717|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,196,762|84|
|Function returning explicitly undefined|1,214,698|87|
|Function returning implicitly undefined|1,224,634|89|
|Function returning string|1,183,878|88|
|Function returning integer|1,205,009|86|
|Function returning float|1,211,754|91|
|Function returning functions|1,130,649|88|
|Function returning arrow functions|1,169,011|89|
|Function returning empty object|1,177,483|88|
|Function returning empty array|1,110,221|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|603,942,426|85|
|using Array.includes (first item)|641,981,163|84|
|Using raw comparison|678,514,677|91|
|Using raw comparison (first item)|668,259,557|88|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,672,635|85|
|Using Object.getOwnPropertyNames()|48,696,113|80|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,573,519|88|
|Length = 10_000 - Array.at|15,151,708|87|
|Length = 1_000_000 - Array.at|15,048,529|91|
|Length = 100 - Array[length - 1]|651,751,914|89|
|Length = 10_000 - Array[length - 1]|581,164,559|89|
|Length = 1_000_000 - Array[length - 1]|638,222,773|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,073,057|88|
|Object.create({})|1,266,678|83|
|Cached Empty.prototype|637,704,167|87|
|Empty.prototype|1,195,202|74|
|Empty class|819,768|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|648,868,569|83|
|Using optional chain (obj.field?.field2) (undefined)|634,999,394|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|623,022,969|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|601,830,445|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|144,939,845|89|
|Using parseInt(x, 10) - big number (10 len)|9,908,569|86|
|Using + - small number (2 len)|598,737,066|88|
|Using + - big number (10 len)|612,076,465|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|710,742|71|
|Using ? operator to avoid rejection|820,475|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,055,009|89|
|Raw usage underscore usage|6,474,314|89|
|Manipulating private properties using #|2,409,141|88|
|Manipulating private properties using underscore(_)|658,322,165|89|
|Manipulating private properties using Symbol|616,615,085|86|
|Manipulating private properties using PrivateSymbol|22,900,827|84|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,343,234|88|
|Adding property in the object creation - small object|2,360,666|86|
|Adding property after the function creation - small class|159,542|79|
|Adding property in the function creation - small class|163,987|77|
|Adding property after the class creation - small class|127,455|75|
|Adding property in the class creation - small class|132,102|76|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,961,339|85|
|Using replaceAll()|1,859,239|87|
|Using replaceAll(//g)|1,804,711|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|158,676|83|
|Sort using first char|681,258|85|
|Sort using localeCompare|398,830|89|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,209|86|
|{...smallObject} - Total keys: 2|57,121,855|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,252|88|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,408|88|
|{ ...bigObject, ...anotherBigObject }|761|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,399,440|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,706,729|89|
|{ ...smallObject, ...anotherSmallObject }|12,821,845|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,411 ops/sec ±14.10% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 353 ops/sec ±1.52% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,462 ops/sec ±1.05% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 673 ops/sec ±15.44% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|677,302,962|90|
|Using backtick (`)|667,064,961|90|
|Using array.join|6,383,357|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|123,818,287|88|
|Using this|125,056,933|88|
