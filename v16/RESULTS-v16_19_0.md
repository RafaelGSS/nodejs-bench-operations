# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.19.0`
* __Run:__ Tue Jan 10 2023 02:06:35 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.004ms
array.push|100|0.109ms
new Array(length)|100|0.015ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.485ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|29.445ms
new Array(length)|1,000,000|20.709ms
array.push|100,000,000|2,129.838ms
new Array(length)|100,000,000|5,115.612ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.023ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.599ms
new Array(length)|10,000|4.378ms
array.push|1,000,000|359.116ms
new Array(length)|1,000,000|5.184ms
array.push|100,000,000|2,774.443ms
new Array(length)|100,000,000|5,565.051ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|345|82|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|201,105|59|
|[True conditional] Using constructor name|158,205|95|
|[True conditional] Check if property is valid then instanceof |160,190|90|
|[False conditional] Using instanceof only|712,648,598|99|
|[False conditional] Using constructor name|710,864,564|96|
|[False conditional] Check if property is valid then instanceof |712,847,674|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,251|84|
|Intl.DateTimeFormat().format(new Date())|7,964|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,891|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,428|84|
|Reusing Intl.DateTimeFormat()|356,452|75|
|Reusing dfWithOptions.format(Date.now())|296,638|96|
|Reusing dfWithOptions.format(new Date())|262,707|96|
|Date.toLocaleDateString()|463,619|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,988|87|
|Format using date.get*|3,220,508|97|
|new Date() (Baseline)|6,706,671|96|
|Date.now() (Baseline)|14,162,107|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|660,537|96|
|Using brackets {}|667,980|98|
|Using '' + |673,421|93|
|Using date.toString()|715,404|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,427,784|95|
|Using undefined assignment|711,109,478|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|189,261|58|
|NodeError|153,463|97|
|NodeError Range|152,467|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,308,057|96|
|Function returning explicitly undefined|1,314,889|93|
|Function returning implicitly undefined|1,333,237|97|
|Function returning string|1,324,896|97|
|Function returning integer|1,299,318|96|
|Function returning float|1,341,423|99|
|Function returning functions|1,292,687|95|
|Function returning arrow functions|1,321,373|95|
|Function returning empty object|1,347,112|96|
|Function returning empty array|1,336,438|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,380,407|98|
|using Array.includes (first item)|711,050,570|93|
|Using raw comparison|712,816,303|97|
|Using raw comparison (first item)|711,041,707|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,862,221|88|
|Using Object.getOwnPropertyNames()|42,514,687|83|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,975,590|96|
|Length = 10_000 - Array.at|16,068,219|97|
|Length = 1_000_000 - Array.at|16,030,505|94|
|Length = 100 - Array[length - 1]|707,438,307|95|
|Length = 10_000 - Array[length - 1]|708,180,147|94|
|Length = 1_000_000 - Array[length - 1]|708,139,916|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,562,317|92|
|Object.create({})|1,249,762|77|
|Cached Empty.prototype|711,503,066|95|
|Empty.prototype|1,289,937|74|
|Empty class|854,082|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,949,043|98|
|Using optional chain (obj.field?.field2) (undefined)|710,449,031|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,633,935|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,083,421|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|177,652,608|95|
|Using parseInt(x, 10) - big number (10 len)|12,336,389|96|
|Using + - small number (2 len)|712,073,262|98|
|Using + - big number (10 len)|709,845,343|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|712,544|72|
|Using ? operator to avoid rejection|791,334|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,396,465|97|
|Raw usage underscore usage|6,947,015|96|
|Manipulating private properties using #|2,542,855|94|
|Manipulating private properties using underscore(_)|700,337,606|96|
|Manipulating private properties using Symbol|699,030,628|98|
|Manipulating private properties using PrivateSymbol|26,406,692|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,965,768|98|
|Adding property in the object creation - small object|1,966,752|95|
|Adding property after the function creation - small class|165,502|83|
|Adding property in the function creation - small class|170,236|86|
|Adding property after the class creation - small class|136,447|76|
|Adding property in the class creation - small class|138,671|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,098,587|95|
|Using replaceAll()|1,996,504|95|
|Using replaceAll(//g)|1,889,313|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|178,097|97|
|Sort using first char|712,826|93|
|Sort using localeCompare|411,150|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,199|95|
|{...smallObject} - Total keys: 2|56,368,448|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,325|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,585|98|
|{ ...bigObject, ...anotherBigObject }|760|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,139,438|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,942,278|95|
|{ ...smallObject, ...anotherSmallObject }|13,516,174|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,479 ops/sec ±13.75% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 402 ops/sec ±0.54% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,830 ops/sec ±0.53% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 709 ops/sec ±16.34% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|711,469,843|95|
|Using backtick (`)|711,631,422|95|
|Using array.join|6,794,499|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,517,316|93|
|Using this|124,442,844|92|
