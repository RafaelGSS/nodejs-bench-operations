# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.3.0`
* __Run:__ Sat Dec 31 2022 20:04:40 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.032ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.07ms 
    new Array(length): 0.036ms (faster)

 10,000 numbers:
           array.push: 1.217ms 
    new Array(length): 0.428ms (faster)

 1,000,000 numbers:
           array.push: 34.758ms 
    new Array(length): 14.021ms (faster)

 100,000,000 numbers:
           array.push: 1,836.006ms (faster)
    new Array(length): 5,328.257ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.023ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.358ms 
    new Array(length): 0.257ms (faster)

 1,000,000 strings:
           array.push: 33.081ms 
    new Array(length): 5.114ms (faster)

 100,000,000 strings:
           array.push: 2,434.007ms (faster)
    new Array(length): 5,581.619ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|391|88|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,499|55|
|[True conditional] Using constructor name|147,300|91|
|[True conditional] Check if property is valid then instanceof |149,899|95|
|[False conditional] Using instanceof only|715,538,223|95|
|[False conditional] Using constructor name|715,066,907|95|
|[False conditional] Check if property is valid then instanceof |713,801,125|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,905|87|
|Intl.DateTimeFormat().format(new Date())|8,597|79|
|Reusing Intl.DateTimeFormat()|420,955|83|
|Format using date.get*|3,454,922|99|
|new Date() (Baseline)|8,559,149|96|
|Date.now() (Baseline)|15,585,200|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|708,558|97|
|Using brackets {}|713,625|99|
|Using '' + |708,008|96|
|Using date.toString()|770,689|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,618,763|97|
|Using undefined assignment|712,959,905|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,726|55|
|NodeError|144,577|94|
|NodeError Range|144,860|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,385,616|96|
|Function returning explicitly undefined|1,368,911|95|
|Function returning implicitly undefined|1,393,187|95|
|Function returning string|1,354,239|95|
|Function returning integer|1,374,476|94|
|Function returning float|1,387,828|95|
|Function returning functions|1,356,448|97|
|Function returning arrow functions|1,345,661|96|
|Function returning empty object|1,378,706|96|
|Function returning empty array|1,382,112|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,411,428|97|
|using Array.includes (first item)|712,445,141|96|
|Using raw comparison|715,252,850|97|
|Using raw comparison (first item)|713,789,075|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,836,015|92|
|Using Object.getOwnPropertyNames()|52,352,296|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|713,329,746|98|
|Length = 10_000 - Array.at|713,575,419|98|
|Length = 1_000_000 - Array.at|714,000,997|94|
|Length = 100 - Array[length - 1]|712,290,535|98|
|Length = 10_000 - Array[length - 1]|711,450,708|97|
|Length = 1_000_000 - Array[length - 1]|706,321,996|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,920,289|93|
|Object.create({})|1,462,326|79|
|Cached Empty.prototype|714,320,282|98|
|Empty.prototype|1,367,661|73|
|Empty class|987,144|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,620,667|95|
|Using optional chain (obj.field?.field2) (undefined)|714,130,300|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,436,617|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,779,229|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,962,583|98|
|Using parseInt(x, 10) - big number (10 len)|13,864,719|93|
|Using + - small number (2 len)|715,778,692|98|
|Using + - big number (10 len)|714,386,707|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,112|75|
|Using ? operator to avoid rejection|857,195|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|712,798,776|96|
|Raw usage underscore usage|713,785,886|96|
|Manipulating private properties using #|703,860,303|96|
|Manipulating private properties using underscore(_)|705,870,697|98|
|Manipulating private properties using Symbol|703,380,699|97|
|Manipulating private properties using PrivateSymbol|29,297,404|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,099,731|98|
|Adding property in the object creation - small object|2,098,714|92|
|Adding property after the function creation - small class|178,430|78|
|Adding property in the function creation - small class|181,673|83|
|Adding property after the class creation - small class|152,394|80|
|Adding property in the class creation - small class|151,309|77|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,392,914|96|
|Using replaceAll()|2,271,579|95|
|Using replaceAll(//g)|2,080,668|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|169,409|95|
|Sort using first char|769,381|96|
|Sort using localeCompare|728,433|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,299|96|
|{...smallObject} - Total keys: 2|67,304,208|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,325|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,604|98|
|{ ...bigObject, ...anotherBigObject }|798|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,283,068|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,934,892|96|
|{ ...smallObject, ...anotherSmallObject }|11,911,714|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,730 ops/sec ±0.62% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 417 ops/sec ±4.01% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,138 ops/sec ±0.50% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,031 ops/sec ±16.48% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,361,924|97|
|Using backtick (`)|714,615,412|97|
|Using array.join|7,260,452|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,533,332|94|
|Using this|145,037,944|97|
