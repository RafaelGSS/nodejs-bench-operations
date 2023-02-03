# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.0.0`
* __Run:__ Fri Feb 03 2023 17:01:52 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.033ms
new Array(length)|100|0.011ms
array.push|1,000|0.082ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.608ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|26.951ms
new Array(length)|1,000,000|8.107ms
array.push|100,000,000|2,144.145ms
new Array(length)|100,000,000|6,433.023ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.013ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.634ms
new Array(length)|10,000|4.227ms
array.push|1,000,000|85.458ms
new Array(length)|1,000,000|5.325ms
array.push|100,000,000|2,630.665ms
new Array(length)|100,000,000|6,145.401ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|274|70|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|345,068|86|
|[True conditional] Using constructor name|337,213|79|
|[True conditional] Check if property is valid then instanceof |337,231|82|
|[False conditional] Using instanceof only|843,748,888|97|
|[False conditional] Using constructor name|842,337,351|97|
|[False conditional] Check if property is valid then instanceof |843,872,422|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,895,032|89|
|fromUnixToISOString(new Date())|1,434,100|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,621|78|
|Intl.DateTimeFormat().format(new Date())|7,396|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,679|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,519|64|
|Reusing Intl.DateTimeFormat()|549,842|86|
|Date.toLocaleDateString()|481,205|80|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,904|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|621,712|90|
|Using brackets {}|629,112|93|
|Using '' + |625,413|91|
|Using date.toString()|658,522|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,242,637|90|
|Using undefined assignment|843,531,562|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|324,119|84|
|NodeError|324,631|83|
|NodeError Range|323,576|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,149,064|92|
|Function returning explicitly undefined|1,130,281|91|
|Function returning implicitly undefined|1,161,194|87|
|Function returning string|1,168,558|90|
|Function returning integer|1,193,842|92|
|Function returning float|1,195,857|92|
|Function returning functions|1,147,630|92|
|Function returning arrow functions|1,174,871|95|
|Function returning empty object|1,157,420|92|
|Function returning empty array|1,168,525|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|842,721,703|92|
|using Array.includes (first item)|841,370,602|89|
|Using raw comparison|843,646,052|97|
|Using raw comparison (first item)|841,641,737|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,218,449|89|
|Using Object.getOwnPropertyNames()|58,220,290|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|841,325,537|95|
|Length = 10_000 - Array[length - 1]|842,823,589|98|
|Length = 1_000_000 - Array[length - 1]|842,198,164|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,353,663|93|
|Object.create({})|1,223,996|86|
|Cached Empty.prototype|844,191,412|94|
|Empty.prototype|1,256,866|78|
|Empty class|891,704|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|842,605,463|96|
|Using optional chain (obj.field?.field2) (undefined)|842,478,524|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|840,766,480|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|839,519,305|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|208,438,679|93|
|Using parseInt(x, 10) - big number (10 len)|12,666,016|92|
|Using + - small number (2 len)|845,296,427|93|
|Using + - big number (10 len)|842,360,504|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|698,024|77|
|Using ? operator to avoid rejection|732,812|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,662,085|89|
|Raw usage underscore usage|6,864,566|87|
|Manipulating private properties using #|2,485,522|87|
|Manipulating private properties using underscore(_)|791,004,735|97|
|Manipulating private properties using Symbol|791,381,440|94|
|Manipulating private properties using PrivateSymbol|20,357,433|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,939,044|96|
|Adding property in the object creation - small object|1,956,330|94|
|Adding property after the function creation - small class|172,524|84|
|Adding property in the function creation - small class|173,927|87|
|Adding property after the class creation - small class|143,963|80|
|Adding property in the class creation - small class|142,471|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,492,737|89|
|Using replaceAll()|2,376,248|94|
|Using replaceAll(//g)|2,259,850|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,491|89|
|Sort using first char|825,334|91|
|Sort using localeCompare|498,528|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,461|91|
|{...smallObject} - Total keys: 2|58,744,949|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,448|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,807|93|
|{ ...bigObject, ...anotherBigObject }|891|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,032,075|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,487,618|97|
|{ ...smallObject, ...anotherSmallObject }|15,161,754|92|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|839,502,811|91|
|Using backtick (`)|844,537,382|94|
|Using array.join|7,407,052|92|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|144,948,490|87|
|Using this|151,185,468|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,709,820|91|
|Date.now()|12,784,572|91|
