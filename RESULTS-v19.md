# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Tue Jan 10 2023 02:06:36 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.037ms
new Array(length)|100|0.011ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.039ms
array.push|10,000|0.535ms
new Array(length)|10,000|0.414ms
array.push|1,000,000|40.173ms
new Array(length)|1,000,000|8.039ms
array.push|100,000,000|2,077.503ms
new Array(length)|100,000,000|5,470.997ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.428ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|24.497ms
new Array(length)|1,000,000|10.009ms
array.push|100,000,000|2,704.663ms
new Array(length)|100,000,000|5,750.732ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|395|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,237|56|
|[True conditional] Using constructor name|145,292|92|
|[True conditional] Check if property is valid then instanceof |149,004|97|
|[False conditional] Using instanceof only|714,186,159|92|
|[False conditional] Using constructor name|713,703,950|96|
|[False conditional] Check if property is valid then instanceof |713,197,901|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,727|87|
|Intl.DateTimeFormat().format(new Date())|8,689|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,726|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,621|77|
|Reusing Intl.DateTimeFormat()|504,326|98|
|Reusing dfWithOptions.format(Date.now())|291,584|99|
|Reusing dfWithOptions.format(new Date())|239,327|95|
|Date.toLocaleDateString()|525,258|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,569|84|
|Format using date.get*|3,832,794|97|
|new Date() (Baseline)|8,659,011|91|
|Date.now() (Baseline)|15,672,630|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|747,896|99|
|Using brackets {}|753,488|95|
|Using '' + |755,677|95|
|Using date.toString()|823,677|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,601,179|98|
|Using undefined assignment|712,904,447|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,058|55|
|NodeError|143,550|93|
|NodeError Range|144,622|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,405,514|98|
|Function returning explicitly undefined|1,380,586|94|
|Function returning implicitly undefined|1,394,631|96|
|Function returning string|1,395,541|99|
|Function returning integer|1,405,289|93|
|Function returning float|1,403,117|99|
|Function returning functions|1,369,741|94|
|Function returning arrow functions|1,388,391|97|
|Function returning empty object|1,411,228|99|
|Function returning empty array|1,404,571|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,791,981|96|
|using Array.includes (first item)|712,151,015|94|
|Using raw comparison|715,887,937|97|
|Using raw comparison (first item)|715,250,212|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,702,975|94|
|Using Object.getOwnPropertyNames()|53,085,609|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|712,781,497|97|
|Length = 10_000 - Array.at|716,320,533|99|
|Length = 1_000_000 - Array.at|715,771,403|95|
|Length = 100 - Array[length - 1]|713,374,817|96|
|Length = 10_000 - Array[length - 1]|711,353,598|98|
|Length = 1_000_000 - Array[length - 1]|711,027,394|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,835,938|97|
|Object.create({})|1,468,628|76|
|Cached Empty.prototype|714,207,775|94|
|Empty.prototype|1,346,066|71|
|Empty class|952,245|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,126,307|96|
|Using optional chain (obj.field?.field2) (undefined)|712,480,318|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,309,752|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,889,878|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,718,305|96|
|Using parseInt(x, 10) - big number (10 len)|14,266,108|95|
|Using + - small number (2 len)|715,451,398|96|
|Using + - big number (10 len)|715,714,068|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|819,287|76|
|Using ? operator to avoid rejection|867,499|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|713,649,626|96|
|Raw usage underscore usage|714,644,797|98|
|Manipulating private properties using #|704,170,277|96|
|Manipulating private properties using underscore(_)|707,060,875|97|
|Manipulating private properties using Symbol|705,201,913|98|
|Manipulating private properties using PrivateSymbol|29,036,648|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,740,600|98|
|Adding property in the object creation - small object|2,741,686|100|
|Adding property after the function creation - small class|178,304|83|
|Adding property in the function creation - small class|173,610|82|
|Adding property after the class creation - small class|147,233|77|
|Adding property in the class creation - small class|147,770|78|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,394,256|96|
|Using replaceAll()|2,254,995|98|
|Using replaceAll(//g)|2,092,071|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,025|97|
|Sort using first char|751,257|96|
|Sort using localeCompare|702,306|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,252|93|
|{...smallObject} - Total keys: 2|64,638,863|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,327|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,591|98|
|{ ...bigObject, ...anotherBigObject }|775|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,302,761|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,918,722|96|
|{ ...smallObject, ...anotherSmallObject }|11,885,685|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,526 ops/sec ±15.27% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 402 ops/sec ±5.40% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,879 ops/sec ±0.46% (97 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,028 ops/sec ±15.67% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,617,277|98|
|Using backtick (`)|713,172,501|95|
|Using array.join|7,231,600|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,697,790|90|
|Using this|145,342,420|95|
