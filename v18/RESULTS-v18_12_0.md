# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Fri Jan 27 2023 19:26:21 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.01ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.459ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|26.088ms
new Array(length)|1,000,000|18.351ms
array.push|100,000,000|1,925.265ms
new Array(length)|100,000,000|5,059.326ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.015ms
array.push|100|0.11ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.591ms
new Array(length)|10,000|4.077ms
array.push|1,000,000|293.553ms
new Array(length)|1,000,000|4.665ms
array.push|100,000,000|2,519.269ms
new Array(length)|100,000,000|5,474.129ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|83|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,918|55|
|[True conditional] Using constructor name|142,088|91|
|[True conditional] Check if property is valid then instanceof |143,708|90|
|[False conditional] Using instanceof only|774,787,507|95|
|[False conditional] Using constructor name|775,852,932|94|
|[False conditional] Check if property is valid then instanceof |775,596,449|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,990,851|92|
|fromUnixToISOString(new Date())|1,503,389|86|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,580|80|
|Intl.DateTimeFormat().format(new Date())|8,809|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,655|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,830|75|
|Reusing Intl.DateTimeFormat()|567,859|94|
|Date.toLocaleDateString()|540,890|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,678|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|622,208|89|
|Using brackets {}|624,484|93|
|Using '' + |628,379|88|
|Using date.toString()|641,787|89|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,193,011|90|
|Using undefined assignment|773,407,564|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|177,815|59|
|NodeError|137,337|88|
|NodeError Range|139,119|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,288,364|90|
|Function returning explicitly undefined|1,276,684|85|
|Function returning implicitly undefined|1,294,830|89|
|Function returning string|1,274,026|84|
|Function returning integer|1,300,174|88|
|Function returning float|1,309,851|93|
|Function returning functions|1,287,401|86|
|Function returning arrow functions|1,283,654|93|
|Function returning empty object|1,327,127|92|
|Function returning empty array|1,276,456|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,624,274|95|
|using Array.includes (first item)|774,554,728|97|
|Using raw comparison|772,706,585|96|
|Using raw comparison (first item)|775,962,349|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,572,499|90|
|Using Object.getOwnPropertyNames()|56,548,008|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,767,451|98|
|Length = 10_000 - Array.at|18,687,869|95|
|Length = 1_000_000 - Array.at|18,507,989|97|
|Length = 100 - Array[length - 1]|773,371,096|96|
|Length = 10_000 - Array[length - 1]|773,895,933|94|
|Length = 1_000_000 - Array[length - 1]|772,299,802|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,155,962|92|
|Object.create({})|1,094,140|86|
|Cached Empty.prototype|771,157,345|95|
|Empty.prototype|1,154,801|83|
|Empty class|824,216|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|774,810,440|95|
|Using optional chain (obj.field?.field2) (undefined)|773,697,100|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,918,052|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,464,913|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,820,852|96|
|Using parseInt(x, 10) - big number (10 len)|12,743,846|93|
|Using + - small number (2 len)|778,064,159|96|
|Using + - big number (10 len)|775,648,203|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|653,822|84|
|Using ? operator to avoid rejection|667,606|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|226,616,072|88|
|Raw usage underscore usage|226,504,564|86|
|Manipulating private properties using #|197,258,305|89|
|Manipulating private properties using underscore(_)|190,667,284|93|
|Manipulating private properties using Symbol|193,250,703|86|
|Manipulating private properties using PrivateSymbol|21,006,624|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,013,880|96|
|Adding property in the object creation - small object|2,023,484|96|
|Adding property after the function creation - small class|160,790|85|
|Adding property in the function creation - small class|160,822|82|
|Adding property after the class creation - small class|136,802|81|
|Adding property in the class creation - small class|134,578|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,608,984|88|
|Using replaceAll()|2,051,951|90|
|Using replaceAll(//g)|2,384,058|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,846|92|
|Sort using first char|847,742|93|
|Sort using localeCompare|817,404|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,578|89|
|{...smallObject} - Total keys: 2|54,960,289|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,490|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,042|92|
|{ ...bigObject, ...anotherBigObject }|921|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,498,277|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,688,838|95|
|{ ...smallObject, ...anotherSmallObject }|15,204,173|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,730 ops/sec ±0.82% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 420 ops/sec ±1.03% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,766 ops/sec ±0.69% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,002 ops/sec ±40.28% (47 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|775,803,844|97|
|Using backtick (`)|774,302,896|96|
|Using array.join|7,463,534|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,743,979|88|
|Using this|144,885,137|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,374,493|92|
|Date.now()|15,090,187|93|
