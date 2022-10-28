# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.1`
* __Run:__ Fri Oct 28 2022 14:46:05 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.046ms 
    new Array(length): 0.015ms (faster)

 1,000 numbers:
           array.push: 0.07ms 
    new Array(length): 0.045ms (faster)

 10,000 numbers:
           array.push: 0.659ms 
    new Array(length): 0.284ms (faster)

 1,000,000 numbers:
           array.push: 32.665ms 
    new Array(length): 11.554ms (faster)

 100,000,000 numbers:
           array.push: 1,902.434ms (faster)
    new Array(length): 4,885.968ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.088ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.581ms 
    new Array(length): 0.296ms (faster)

 1,000,000 strings:
           array.push: 345.033ms 
    new Array(length): 9.624ms (faster)

 100,000,000 strings:
           array.push: 2,656.083ms (faster)
    new Array(length): 5,356.598ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|308|73|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|199,766|60|
|[True conditional] Using constructor name|159,606|96|
|[True conditional] Check if property is valid then instanceof |159,807|90|
|[False conditional] Using instanceof only|711,812,907|95|
|[False conditional] Using constructor name|711,507,999|96|
|[False conditional] Check if property is valid then instanceof |713,345,488|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,176|80|
|Intl.DateTimeFormat().format(new Date())|8,013|81|
|Reusing Intl.DateTimeFormat()|417,682|86|
|Format using date.get*|3,270,111|95|
|new Date() (Baseline)|7,332,784|95|
|Date.now() (Baseline)|14,184,225|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|707,259|98|
|Using brackets {}|715,615|97|
|Using '' + |713,720|97|
|Using date.toString()|771,700|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,437,808|92|
|Using undefined assignment|710,711,826|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|190,591|59|
|NodeError|152,764|93|
|NodeError Range|153,711|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,298,090|92|
|Function returning explicitly undefined|1,280,431|94|
|Function returning implicitly undefined|1,322,228|90|
|Function returning string|1,312,460|97|
|Function returning integer|1,330,448|97|
|Function returning float|1,317,874|95|
|Function returning functions|1,285,800|99|
|Function returning arrow functions|1,304,895|96|
|Function returning empty object|1,310,706|98|
|Function returning empty array|1,305,444|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,425,252|97|
|using Array.includes (first item)|711,081,850|92|
|Using raw comparison|712,927,334|96|
|Using raw comparison (first item)|711,839,110|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,548,944|89|
|Using Object.getOwnPropertyNames()|39,854,792|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,809,697|97|
|Length = 10_000 - Array.at|15,864,726|98|
|Length = 1_000_000 - Array.at|15,807,566|94|
|Length = 100 - Array[length - 1]|707,441,404|97|
|Length = 10_000 - Array[length - 1]|704,512,078|92|
|Length = 1_000_000 - Array[length - 1]|706,849,256|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,406,414|81|
|Object.create({})|1,313,203|80|
|Cached Empty.prototype|710,835,243|99|
|Empty.prototype|1,341,710|77|
|Empty class|897,244|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,645,903|99|
|Using optional chain (obj.field?.field2) (undefined)|711,551,154|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|710,898,090|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,086,374|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|175,723,876|87|
|Using parseInt(x, 10) - big number (10 len)|13,325,265|97|
|Using + - small number (2 len)|712,130,589|91|
|Using + - big number (10 len)|710,867,083|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|772,764|77|
|Using ? operator to avoid rejection|828,188|77|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,107,042|91|
|Raw usage underscore usage|7,396,863|97|
|Manipulating private properties using #|2,681,404|96|
|Manipulating private properties using underscore(_)|699,339,886|91|
|Manipulating private properties using Symbol|697,347,772|97|
|Manipulating private properties using PrivateSymbol|26,466,871|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,094,997|86|
|Using replaceAll()|1,956,869|91|
|Using replaceAll(//g)|1,865,581|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|171,125|95|
|Sort using first char|745,908|90|
|Sort using localeCompare|422,343|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,118|94|
|{...smallObject} - Total keys: 2|60,197,096|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,337|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,623|98|
|{ ...bigObject, ...anotherBigObject }|738|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,701,589|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,902,056|97|
|{ ...smallObject, ...anotherSmallObject }|13,768,695|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,535 ops/sec ±15.81% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 389 ops/sec ±4.25% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,763 ops/sec ±0.70% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 737 ops/sec ±18.30% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|711,860,374|96|
|Using backtick (`)|712,585,323|95|
|Using array.join|6,281,220|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|124,284,964|90|
|Using this|129,190,693|92|
