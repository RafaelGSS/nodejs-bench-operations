# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Fri Jan 27 2023 19:16:19 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.012ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.488ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|26.266ms
new Array(length)|1,000,000|16.707ms
array.push|100,000,000|1,912.906ms
new Array(length)|100,000,000|5,007.019ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.092ms
new Array(length)|100|0.011ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.619ms
new Array(length)|10,000|4.262ms
array.push|1,000,000|288.28ms
new Array(length)|1,000,000|4.355ms
array.push|100,000,000|2,542.083ms
new Array(length)|100,000,000|5,445.734ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|308|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,647|54|
|[True conditional] Using constructor name|145,327|91|
|[True conditional] Check if property is valid then instanceof |148,217|91|
|[False conditional] Using instanceof only|776,115,989|96|
|[False conditional] Using constructor name|776,540,871|97|
|[False conditional] Check if property is valid then instanceof |775,885,644|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,992,089|92|
|fromUnixToISOString(new Date())|1,584,572|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,652|78|
|Intl.DateTimeFormat().format(new Date())|8,795|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,065|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,919|89|
|Reusing Intl.DateTimeFormat()|539,472|92|
|Date.toLocaleDateString()|554,882|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,924|74|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|631,099|91|
|Using brackets {}|637,560|89|
|Using '' + |638,069|92|
|Using date.toString()|694,261|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,241,540|90|
|Using undefined assignment|773,925,521|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|184,296|57|
|NodeError|144,919|94|
|NodeError Range|144,988|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,210,064|91|
|Function returning explicitly undefined|1,214,847|89|
|Function returning implicitly undefined|1,248,193|89|
|Function returning string|1,207,352|92|
|Function returning integer|1,241,409|91|
|Function returning float|1,204,281|91|
|Function returning functions|1,235,113|93|
|Function returning arrow functions|1,219,515|90|
|Function returning empty object|1,229,981|91|
|Function returning empty array|1,196,421|88|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,551,146|96|
|using Array.includes (first item)|772,730,124|97|
|Using raw comparison|773,830,498|94|
|Using raw comparison (first item)|774,795,381|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,310,524|92|
|Using Object.getOwnPropertyNames()|56,667,728|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,740,658|96|
|Length = 10_000 - Array.at|18,746,980|95|
|Length = 1_000_000 - Array.at|18,743,242|95|
|Length = 100 - Array[length - 1]|773,723,725|98|
|Length = 10_000 - Array[length - 1]|771,702,737|95|
|Length = 1_000_000 - Array[length - 1]|772,936,769|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,334,454|87|
|Object.create({})|1,100,865|84|
|Cached Empty.prototype|773,440,392|97|
|Empty.prototype|1,122,793|81|
|Empty class|815,040|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|774,488,854|96|
|Using optional chain (obj.field?.field2) (undefined)|775,293,875|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|775,896,198|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|775,153,510|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|227,605,170|97|
|Using parseInt(x, 10) - big number (10 len)|12,357,786|88|
|Using + - small number (2 len)|775,800,371|97|
|Using + - big number (10 len)|776,097,374|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|628,365|79|
|Using ? operator to avoid rejection|672,860|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|234,992,999|90|
|Raw usage underscore usage|234,098,531|90|
|Manipulating private properties using #|190,605,943|91|
|Manipulating private properties using underscore(_)|204,205,363|88|
|Manipulating private properties using Symbol|193,380,624|91|
|Manipulating private properties using PrivateSymbol|21,263,948|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,016,639|92|
|Adding property in the object creation - small object|2,025,737|93|
|Adding property after the function creation - small class|162,173|85|
|Adding property in the function creation - small class|161,714|87|
|Adding property after the class creation - small class|137,456|82|
|Adding property in the class creation - small class|137,104|81|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,534,155|93|
|Using replaceAll()|2,062,968|91|
|Using replaceAll(//g)|2,290,528|85|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,482|94|
|Sort using first char|846,814|91|
|Sort using localeCompare|797,835|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,557|86|
|{...smallObject} - Total keys: 2|56,107,715|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,486|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,078|88|
|{ ...bigObject, ...anotherBigObject }|927|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,729,292|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,526,588|94|
|{ ...smallObject, ...anotherSmallObject }|15,339,351|91|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,592 ops/sec ±16.53% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 409 ops/sec ±0.78% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,746 ops/sec ±0.76% (85 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,000 ops/sec ±37.60% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|775,163,231|96|
|Using backtick (`)|774,638,286|97|
|Using array.join|7,449,157|86|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,162,150|90|
|Using this|144,451,598|87|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,316,486|88|
|Date.now()|14,770,786|91|
