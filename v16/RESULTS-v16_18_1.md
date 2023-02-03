# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Fri Feb 03 2023 17:21:19 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.137ms
new Array(length)|100|0.014ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.553ms
new Array(length)|10,000|0.282ms
array.push|1,000,000|28.53ms
new Array(length)|1,000,000|17.237ms
array.push|100,000,000|2,239.015ms
new Array(length)|100,000,000|5,916.053ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.518ms
new Array(length)|10,000|4.718ms
array.push|1,000,000|303.47ms
new Array(length)|1,000,000|5.197ms
array.push|100,000,000|2,782.448ms
new Array(length)|100,000,000|6,412.831ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|281|77|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|200,117|55|
|[True conditional] Using constructor name|152,583|92|
|[True conditional] Check if property is valid then instanceof |153,166|91|
|[False conditional] Using instanceof only|773,954,573|95|
|[False conditional] Using constructor name|773,555,207|93|
|[False conditional] Check if property is valid then instanceof |771,167,874|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,001,897|92|
|fromUnixToISOString(new Date())|1,518,460|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,588|78|
|Intl.DateTimeFormat().format(new Date())|7,956|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,119|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,652|88|
|Reusing Intl.DateTimeFormat()|377,765|64|
|Date.toLocaleDateString()|566,868|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,315|73|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|632,519|91|
|Using brackets {}|645,075|87|
|Using '' + |646,921|91|
|Using date.toString()|683,994|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,273,553|92|
|Using undefined assignment|772,159,560|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,696|54|
|NodeError|150,977|90|
|NodeError Range|152,632|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,158,129|89|
|Function returning explicitly undefined|1,156,497|92|
|Function returning implicitly undefined|1,186,345|89|
|Function returning string|1,184,127|90|
|Function returning integer|1,155,464|92|
|Function returning float|1,159,987|90|
|Function returning functions|1,121,716|91|
|Function returning arrow functions|1,195,047|95|
|Function returning empty object|1,210,490|95|
|Function returning empty array|1,187,307|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,640,284|95|
|using Array.includes (first item)|762,226,194|93|
|Using raw comparison|771,384,571|94|
|Using raw comparison (first item)|772,439,955|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,366,084|91|
|Using Object.getOwnPropertyNames()|59,707,863|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,137,966|96|
|Length = 10_000 - Array.at|18,128,907|96|
|Length = 1_000_000 - Array.at|17,974,614|93|
|Length = 100 - Array[length - 1]|766,891,431|91|
|Length = 10_000 - Array[length - 1]|770,277,057|93|
|Length = 1_000_000 - Array[length - 1]|767,648,532|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,175,216|93|
|Object.create({})|1,359,092|80|
|Cached Empty.prototype|770,307,767|97|
|Empty.prototype|1,363,495|80|
|Empty class|957,095|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|773,052,290|95|
|Using optional chain (obj.field?.field2) (undefined)|770,295,416|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|770,853,819|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|770,281,073|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,540,681|97|
|Using parseInt(x, 10) - big number (10 len)|14,250,429|94|
|Using + - small number (2 len)|771,102,814|98|
|Using + - big number (10 len)|771,454,795|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|738,907|79|
|Using ? operator to avoid rejection|775,864|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,356,952|88|
|Raw usage underscore usage|7,029,851|91|
|Manipulating private properties using #|2,600,959|93|
|Manipulating private properties using underscore(_)|758,730,264|90|
|Manipulating private properties using Symbol|753,132,165|94|
|Manipulating private properties using PrivateSymbol|21,296,208|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,778,724|91|
|Adding property in the object creation - small object|2,785,136|94|
|Adding property after the function creation - small class|187,856|86|
|Adding property in the function creation - small class|188,791|87|
|Adding property after the class creation - small class|156,499|83|
|Adding property in the class creation - small class|157,204|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,622,087|89|
|Using replaceAll()|2,583,306|92|
|Using replaceAll(//g)|2,406,275|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|189,542|93|
|Sort using first char|831,458|95|
|Sort using localeCompare|506,235|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,498|91|
|{...smallObject} - Total keys: 2|56,272,475|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,570|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,235|96|
|{ ...bigObject, ...anotherBigObject }|923|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,408,375|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,821,872|95|
|{ ...smallObject, ...anotherSmallObject }|14,570,342|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,651 ops/sec ±17.04% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 440 ops/sec ±0.80% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,557 ops/sec ±1.16% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 965 ops/sec ±12.24% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|772,973,459|94|
|Using backtick (`)|773,149,287|96|
|Using array.join|7,614,966|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|146,647,011|89|
|Using this|153,546,669|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,448,388|95|
|Date.now()|15,217,672|94|
