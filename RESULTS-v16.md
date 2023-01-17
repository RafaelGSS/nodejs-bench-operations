# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Tue Jan 17 2023 20:43:22 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.132ms
new Array(length)|100|0.011ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.477ms
new Array(length)|10,000|0.235ms
array.push|1,000,000|29.02ms
new Array(length)|1,000,000|20.724ms
array.push|100,000,000|1,824.528ms
new Array(length)|100,000,000|4,865.324ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.63ms
new Array(length)|10,000|4.279ms
array.push|1,000,000|322.855ms
new Array(length)|1,000,000|5.203ms
array.push|100,000,000|2,697.778ms
new Array(length)|100,000,000|5,423.634ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|199,112|59|
|[True conditional] Using constructor name|156,385|93|
|[True conditional] Check if property is valid then instanceof |159,652|91|
|[False conditional] Using instanceof only|712,207,921|97|
|[False conditional] Using constructor name|711,339,029|97|
|[False conditional] Check if property is valid then instanceof |713,285,215|97|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,701,015|95|
|fromUnixToISOString(new Date())|1,513,899|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,355|80|
|Intl.DateTimeFormat().format(new Date())|8,225|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,987|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,893|85|
|Reusing Intl.DateTimeFormat()|395,324|98|
|Date.toLocaleDateString()|468,655|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,963|84|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|677,512|95|
|Using brackets {}|688,701|96|
|Using '' + |685,708|95|
|Using date.toString()|736,870|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,392,802|96|
|Using undefined assignment|711,928,589|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,213|55|
|NodeError|154,042|95|
|NodeError Range|154,534|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,302,650|96|
|Function returning explicitly undefined|1,310,013|93|
|Function returning implicitly undefined|1,337,793|85|
|Function returning string|1,327,978|98|
|Function returning integer|1,359,470|97|
|Function returning float|1,341,741|97|
|Function returning functions|1,296,808|99|
|Function returning arrow functions|1,324,193|97|
|Function returning empty object|1,324,760|99|
|Function returning empty array|1,345,214|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,120,854|96|
|using Array.includes (first item)|711,103,963|94|
|Using raw comparison|711,372,128|96|
|Using raw comparison (first item)|711,025,775|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,836,297|87|
|Using Object.getOwnPropertyNames()|43,648,423|86|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,002,954|93|
|Length = 10_000 - Array.at|16,042,105|93|
|Length = 1_000_000 - Array.at|15,956,543|95|
|Length = 100 - Array[length - 1]|709,245,026|97|
|Length = 10_000 - Array[length - 1]|708,583,339|97|
|Length = 1_000_000 - Array[length - 1]|707,396,653|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,312,575|91|
|Object.create({})|1,337,602|79|
|Cached Empty.prototype|711,121,001|95|
|Empty.prototype|1,310,851|75|
|Empty class|879,973|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,793,639|97|
|Using optional chain (obj.field?.field2) (undefined)|711,661,140|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,606,752|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,424,672|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,856,069|94|
|Using parseInt(x, 10) - big number (10 len)|12,375,353|96|
|Using + - small number (2 len)|713,204,462|98|
|Using + - big number (10 len)|707,640,873|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|732,133|72|
|Using ? operator to avoid rejection|808,547|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,535,439|96|
|Raw usage underscore usage|6,963,229|95|
|Manipulating private properties using #|2,553,399|94|
|Manipulating private properties using underscore(_)|701,545,182|96|
|Manipulating private properties using Symbol|699,264,815|98|
|Manipulating private properties using PrivateSymbol|27,096,261|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,969,375|98|
|Adding property in the object creation - small object|1,976,966|97|
|Adding property after the function creation - small class|171,101|85|
|Adding property in the function creation - small class|172,820|85|
|Adding property after the class creation - small class|140,877|81|
|Adding property in the class creation - small class|141,219|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,078,669|93|
|Using replaceAll()|1,968,285|98|
|Using replaceAll(//g)|1,881,315|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,076|94|
|Sort using first char|731,462|92|
|Sort using localeCompare|432,299|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,276|95|
|{...smallObject} - Total keys: 2|59,330,160|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,324|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,593|98|
|{ ...bigObject, ...anotherBigObject }|797|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,918,391|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,931,364|95|
|{ ...smallObject, ...anotherSmallObject }|13,544,478|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,574 ops/sec ±13.68% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 391 ops/sec ±0.65% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,816 ops/sec ±0.59% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 734 ops/sec ±17.52% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,543,978|97|
|Using backtick (`)|712,050,879|94|
|Using array.join|6,764,317|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,587,961|92|
|Using this|128,619,187|91|
