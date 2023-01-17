# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Tue Jan 17 2023 20:43:22 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.013ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.652ms
new Array(length)|10,000|0.388ms
array.push|1,000,000|36.078ms
new Array(length)|1,000,000|6.724ms
array.push|100,000,000|1,519.568ms
new Array(length)|100,000,000|5,017.157ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.029ms
array.push|10,000|8.19ms
new Array(length)|10,000|0.02ms
array.push|1,000,000|17.062ms
new Array(length)|1,000,000|9.363ms
array.push|100,000,000|2,040.006ms
new Array(length)|100,000,000|5,041.847ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|426|85|
|Array.from|17|46|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,856|53|
|[True conditional] Using constructor name|127,196|92|
|[True conditional] Check if property is valid then instanceof |130,157|98|
|[False conditional] Using instanceof only|599,383,411|95|
|[False conditional] Using constructor name|597,368,596|98|
|[False conditional] Check if property is valid then instanceof |598,788,823|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,031,096|97|
|fromUnixToISOString(new Date())|1,644,173|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,060|88|
|Intl.DateTimeFormat().format(new Date())|9,132|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,683|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,992|83|
|Reusing Intl.DateTimeFormat()|473,295|95|
|Date.toLocaleDateString()|440,713|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,070|88|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|757,561|95|
|Using brackets {}|766,378|96|
|Using '' + |764,437|98|
|Using date.toString()|838,936|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,671,959|94|
|Using undefined assignment|595,998,427|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|161,638|51|
|NodeError|126,195|97|
|NodeError Range|126,453|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,345,938|95|
|Function returning explicitly undefined|1,341,233|98|
|Function returning implicitly undefined|1,377,395|98|
|Function returning string|1,326,555|94|
|Function returning integer|1,365,523|99|
|Function returning float|1,348,062|96|
|Function returning functions|1,311,539|98|
|Function returning arrow functions|1,337,902|97|
|Function returning empty object|1,333,546|95|
|Function returning empty array|1,248,659|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,593,673|97|
|using Array.includes (first item)|597,390,710|96|
|Using raw comparison|599,686,719|99|
|Using raw comparison (first item)|599,644,569|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,929,922|95|
|Using Object.getOwnPropertyNames()|66,886,396|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,194,990|96|
|Length = 10_000 - Array.at|599,913,970|97|
|Length = 1_000_000 - Array.at|600,815,313|98|
|Length = 100 - Array[length - 1]|598,274,950|99|
|Length = 10_000 - Array[length - 1]|596,338,713|95|
|Length = 1_000_000 - Array[length - 1]|597,453,635|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,120,856|94|
|Object.create({})|1,686,888|81|
|Cached Empty.prototype|599,208,920|97|
|Empty.prototype|1,590,225|81|
|Empty class|992,871|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|597,331,361|94|
|Using optional chain (obj.field?.field2) (undefined)|599,601,997|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|599,394,191|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,142,663|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,462,772|90|
|Using parseInt(x, 10) - big number (10 len)|15,148,721|99|
|Using + - small number (2 len)|599,977,849|96|
|Using + - big number (10 len)|599,717,561|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|836,401|80|
|Using ? operator to avoid rejection|890,147|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,634,903|98|
|Raw usage underscore usage|600,928,588|96|
|Manipulating private properties using #|593,607,301|95|
|Manipulating private properties using underscore(_)|594,520,317|92|
|Manipulating private properties using Symbol|593,711,123|99|
|Manipulating private properties using PrivateSymbol|39,444,940|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,729,325|96|
|Adding property in the object creation - small object|2,711,229|93|
|Adding property after the function creation - small class|165,924|85|
|Adding property in the function creation - small class|168,673|88|
|Adding property after the class creation - small class|145,827|84|
|Adding property in the class creation - small class|144,908|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,637,863|91|
|Using replaceAll()|2,346,913|95|
|Using replaceAll(//g)|2,333,348|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,626|98|
|Sort using first char|914,166|94|
|Sort using localeCompare|826,270|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,414|93|
|{...smallObject} - Total keys: 2|70,984,337|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,499|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,101|99|
|{ ...bigObject, ...anotherBigObject }|843|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,034,225|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,150,738|95|
|{ ...smallObject, ...anotherSmallObject }|17,792,238|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,824 ops/sec ±0.60% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 374 ops/sec ±0.33% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,533 ops/sec ±0.41% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 982 ops/sec ±35.82% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|597,021,428|96|
|Using backtick (`)|598,681,362|97|
|Using array.join|8,918,576|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|117,066,700|93|
|Using this|120,018,453|93|
