# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Sat Jan 07 2023 17:12:07 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.116ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.058ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.479ms 
    new Array(length): 0.238ms (faster)

 1,000,000 numbers:
           array.push: 32.641ms 
    new Array(length): 21.853ms (faster)

 100,000,000 numbers:
           array.push: 2,094.609ms (faster)
    new Array(length): 4,859.496ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.054ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.632ms 
    new Array(length): 0.284ms (faster)

 1,000,000 strings:
           array.push: 341.356ms 
    new Array(length): 9.631ms (faster)

 100,000,000 strings:
           array.push: 2,703.953ms (faster)
    new Array(length): 5,385.832ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|82|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|197,588|59|
|[True conditional] Using constructor name|155,737|93|
|[True conditional] Check if property is valid then instanceof |158,653|90|
|[False conditional] Using instanceof only|713,275,971|95|
|[False conditional] Using constructor name|712,299,805|97|
|[False conditional] Check if property is valid then instanceof |714,359,136|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,677|79|
|Intl.DateTimeFormat().format(new Date())|8,230|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,684|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,007|88|
|Reusing Intl.DateTimeFormat()|385,142|75|
|Reusing dfWithOptions.format(Date.now())|295,199|91|
|Reusing dfWithOptions.format(new Date())|261,781|97|
|Date.toLocaleDateString()|472,947|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,213|83|
|Format using date.get*|3,412,888|96|
|new Date() (Baseline)|7,479,160|97|
|Date.now() (Baseline)|14,269,727|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|633,439|95|
|Using brackets {}|642,841|96|
|Using '' + |641,462|98|
|Using date.toString()|682,532|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,446,228|94|
|Using undefined assignment|711,422,106|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|193,652|59|
|NodeError|154,932|93|
|NodeError Range|155,171|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,309,358|94|
|Function returning explicitly undefined|1,314,631|97|
|Function returning implicitly undefined|1,354,818|94|
|Function returning string|1,325,512|99|
|Function returning integer|1,318,802|97|
|Function returning float|1,351,341|95|
|Function returning functions|1,310,288|99|
|Function returning arrow functions|1,329,253|95|
|Function returning empty object|1,344,146|97|
|Function returning empty array|1,336,858|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,249,368|98|
|using Array.includes (first item)|712,046,574|93|
|Using raw comparison|697,666,206|97|
|Using raw comparison (first item)|710,845,227|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,155,151|92|
|Using Object.getOwnPropertyNames()|48,411,527|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,115,894|96|
|Length = 10_000 - Array.at|16,008,412|95|
|Length = 1_000_000 - Array.at|15,856,101|94|
|Length = 100 - Array[length - 1]|709,590,863|95|
|Length = 10_000 - Array[length - 1]|708,748,960|98|
|Length = 1_000_000 - Array[length - 1]|707,178,276|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,722,196|92|
|Object.create({})|1,329,450|82|
|Cached Empty.prototype|712,836,411|97|
|Empty.prototype|1,360,779|77|
|Empty class|886,122|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,055,537|99|
|Using optional chain (obj.field?.field2) (undefined)|712,639,674|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,072,333|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,752,143|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,688,395|95|
|Using parseInt(x, 10) - big number (10 len)|12,406,578|98|
|Using + - small number (2 len)|713,373,071|96|
|Using + - big number (10 len)|711,562,943|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|737,535|69|
|Using ? operator to avoid rejection|815,162|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,553,788|94|
|Raw usage underscore usage|6,970,546|93|
|Manipulating private properties using #|2,554,477|96|
|Manipulating private properties using underscore(_)|701,620,417|94|
|Manipulating private properties using Symbol|700,398,339|97|
|Manipulating private properties using PrivateSymbol|27,092,543|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,967,417|98|
|Adding property in the object creation - small object|1,973,001|97|
|Adding property after the function creation - small class|168,961|84|
|Adding property in the function creation - small class|173,023|86|
|Adding property after the class creation - small class|142,984|83|
|Adding property in the class creation - small class|142,349|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,119,424|96|
|Using replaceAll()|1,996,041|97|
|Using replaceAll(//g)|1,901,160|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,566|95|
|Sort using first char|748,482|96|
|Sort using localeCompare|435,308|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,272|95|
|{...smallObject} - Total keys: 2|58,764,451|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,320|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,596|97|
|{ ...bigObject, ...anotherBigObject }|805|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,191,342|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,641,718|93|
|{ ...smallObject, ...anotherSmallObject }|13,658,719|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,580 ops/sec ±13.23% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 398 ops/sec ±0.50% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,832 ops/sec ±0.52% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 732 ops/sec ±16.82% (58 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|713,086,882|96|
|Using backtick (`)|712,985,008|96|
|Using array.join|6,863,691|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|130,613,559|93|
|Using this|131,634,942|94|
