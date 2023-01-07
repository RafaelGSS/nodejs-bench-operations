# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sat Jan 07 2023 17:35:13 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.018ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.057ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.086ms 
    new Array(length): 0.042ms (faster)

 10,000 numbers:
           array.push: 1.769ms (faster)
    new Array(length): 5.322ms

 1,000,000 numbers:
           array.push: 54.836ms 
    new Array(length): 9.444ms (faster)

 100,000,000 numbers:
           array.push: 2,160.237ms (faster)
    new Array(length): 6,496.68ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.021ms

 100 strings:
           array.push: 0.02ms (faster)
    new Array(length): 0.03ms

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.419ms 
    new Array(length): 0.398ms (faster)

 1,000,000 strings:
           array.push: 43.649ms 
    new Array(length): 4.913ms (faster)

 100,000,000 strings:
           array.push: 2,797.901ms (faster)
    new Array(length): 6,647.241ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|329|80|
|Array.from|12|34|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|139,764|53|
|[True conditional] Using constructor name|109,923|89|
|[True conditional] Check if property is valid then instanceof |108,852|85|
|[False conditional] Using instanceof only|634,505,924|90|
|[False conditional] Using constructor name|637,891,875|90|
|[False conditional] Check if property is valid then instanceof |635,572,984|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,435|89|
|Intl.DateTimeFormat().format(new Date())|5,842|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|4,940|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,424|69|
|Reusing Intl.DateTimeFormat()|373,752|85|
|Reusing dfWithOptions.format(Date.now())|204,791|78|
|Reusing dfWithOptions.format(new Date())|189,479|78|
|Date.toLocaleDateString()|413,606|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,537|79|
|Format using date.get*|2,953,597|88|
|new Date() (Baseline)|6,932,683|89|
|Date.now() (Baseline)|11,594,994|82|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|603,880|86|
|Using brackets {}|615,551|87|
|Using '' + |603,548|88|
|Using date.toString()|655,563|88|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,058,018|89|
|Using undefined assignment|669,194,643|87|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|143,849|56|
|NodeError|115,875|84|
|NodeError Range|113,359|89|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,143,659|88|
|Function returning explicitly undefined|1,134,157|87|
|Function returning implicitly undefined|1,152,867|88|
|Function returning string|1,148,586|90|
|Function returning integer|1,121,089|91|
|Function returning float|1,159,311|88|
|Function returning functions|1,126,980|91|
|Function returning arrow functions|1,142,254|91|
|Function returning empty object|1,162,270|90|
|Function returning empty array|1,123,867|87|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|647,132,896|90|
|using Array.includes (first item)|652,585,606|86|
|Using raw comparison|651,629,908|89|
|Using raw comparison (first item)|649,063,413|86|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,391,418|85|
|Using Object.getOwnPropertyNames()|41,782,485|84|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|604,649,419|89|
|Length = 10_000 - Array.at|609,718,805|92|
|Length = 1_000_000 - Array.at|607,653,169|91|
|Length = 100 - Array[length - 1]|637,015,925|91|
|Length = 10_000 - Array[length - 1]|636,229,017|90|
|Length = 1_000_000 - Array[length - 1]|635,838,582|87|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,340,586|87|
|Object.create({})|1,184,578|71|
|Cached Empty.prototype|649,005,593|88|
|Empty.prototype|1,118,329|70|
|Empty class|772,676|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|650,425,530|90|
|Using optional chain (obj.field?.field2) (undefined)|644,821,257|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|648,094,586|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|642,924,185|89|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|153,097,113|93|
|Using parseInt(x, 10) - big number (10 len)|12,253,060|88|
|Using + - small number (2 len)|635,341,219|93|
|Using + - big number (10 len)|637,755,846|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|637,359|70|
|Using ? operator to avoid rejection|707,059|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|598,751,212|85|
|Raw usage underscore usage|607,951,092|92|
|Manipulating private properties using #|601,564,226|84|
|Manipulating private properties using underscore(_)|604,338,361|91|
|Manipulating private properties using Symbol|599,613,678|89|
|Manipulating private properties using PrivateSymbol|27,321,440|86|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,124,902|88|
|Adding property in the object creation - small object|2,130,424|90|
|Adding property after the function creation - small class|132,677|76|
|Adding property in the function creation - small class|135,615|75|
|Adding property after the class creation - small class|113,075|75|
|Adding property in the class creation - small class|111,457|73|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,873,314|91|
|Using replaceAll()|1,704,917|88|
|Using replaceAll(//g)|1,700,248|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|147,983|88|
|Sort using first char|662,538|91|
|Sort using localeCompare|624,300|87|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,034|90|
|{...smallObject} - Total keys: 2|55,581,586|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,119|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,011|85|
|{ ...bigObject, ...anotherBigObject }|649|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,333,064|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,512,454|91|
|{ ...smallObject, ...anotherSmallObject }|12,535,375|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,208 ops/sec ±19.46% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 313 ops/sec ±3.47% (76 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,178 ops/sec ±1.40% (84 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 816 ops/sec ±17.74% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|662,161,283|89|
|Using backtick (`)|668,178,759|86|
|Using array.join|6,071,088|83|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,934,632|91|
|Using this|172,595,349|83|
