# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Fri Feb 03 2023 17:11:01 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.135ms
new Array(length)|100|0.011ms
array.push|1,000|0.109ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.554ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|39.044ms
new Array(length)|1,000,000|6.351ms
array.push|100,000,000|2,231.96ms
new Array(length)|100,000,000|5,820.064ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.514ms
new Array(length)|10,000|4.313ms
array.push|1,000,000|315.529ms
new Array(length)|1,000,000|5.291ms
array.push|100,000,000|2,835.816ms
new Array(length)|100,000,000|6,250.195ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|276|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|207,984|56|
|[True conditional] Using constructor name|156,161|91|
|[True conditional] Check if property is valid then instanceof |156,992|91|
|[False conditional] Using instanceof only|773,343,484|92|
|[False conditional] Using constructor name|773,036,233|91|
|[False conditional] Check if property is valid then instanceof |773,549,463|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,984,738|91|
|fromUnixToISOString(new Date())|1,546,813|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,795|84|
|Intl.DateTimeFormat().format(new Date())|9,266|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,100|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,345|82|
|Reusing Intl.DateTimeFormat()|390,496|66|
|Date.toLocaleDateString()|568,697|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,418|77|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|632,624|92|
|Using brackets {}|637,032|92|
|Using '' + |659,226|94|
|Using date.toString()|685,758|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,294,010|91|
|Using undefined assignment|770,996,099|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|196,475|54|
|NodeError|154,147|90|
|NodeError Range|151,366|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,171,606|90|
|Function returning explicitly undefined|1,187,138|94|
|Function returning implicitly undefined|1,172,231|92|
|Function returning string|1,138,843|92|
|Function returning integer|1,155,622|91|
|Function returning float|1,152,395|92|
|Function returning functions|1,172,599|91|
|Function returning arrow functions|1,190,408|97|
|Function returning empty object|1,196,375|93|
|Function returning empty array|1,165,809|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|771,143,697|92|
|using Array.includes (first item)|766,585,356|91|
|Using raw comparison|771,246,456|98|
|Using raw comparison (first item)|772,591,382|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,044,771|89|
|Using Object.getOwnPropertyNames()|59,106,245|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,066,936|96|
|Length = 10_000 - Array.at|18,123,196|95|
|Length = 1_000_000 - Array.at|18,094,222|96|
|Length = 100 - Array[length - 1]|762,184,581|93|
|Length = 10_000 - Array[length - 1]|769,057,544|95|
|Length = 1_000_000 - Array[length - 1]|768,655,490|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,206,042|91|
|Object.create({})|1,334,283|81|
|Cached Empty.prototype|772,113,175|96|
|Empty.prototype|1,369,255|81|
|Empty class|978,194|80|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|771,401,117|95|
|Using optional chain (obj.field?.field2) (undefined)|771,410,623|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|770,966,258|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|770,867,506|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,499,765|92|
|Using parseInt(x, 10) - big number (10 len)|13,446,626|93|
|Using + - small number (2 len)|772,546,773|97|
|Using + - big number (10 len)|771,693,907|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|729,641|82|
|Using ? operator to avoid rejection|774,376|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,054,758|87|
|Raw usage underscore usage|7,156,210|89|
|Manipulating private properties using #|2,539,804|89|
|Manipulating private properties using underscore(_)|758,040,553|98|
|Manipulating private properties using Symbol|755,386,389|95|
|Manipulating private properties using PrivateSymbol|20,701,153|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,918,011|94|
|Adding property in the object creation - small object|2,926,595|94|
|Adding property after the function creation - small class|184,588|84|
|Adding property in the function creation - small class|186,432|86|
|Adding property after the class creation - small class|152,191|80|
|Adding property in the class creation - small class|151,827|79|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,570,228|89|
|Using replaceAll()|2,518,913|91|
|Using replaceAll(//g)|2,298,617|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,774|92|
|Sort using first char|824,820|91|
|Sort using localeCompare|504,441|90|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,494|90|
|{...smallObject} - Total keys: 2|56,916,471|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,474|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,067|90|
|{ ...bigObject, ...anotherBigObject }|914|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,334,139|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,830,559|97|
|{ ...smallObject, ...anotherSmallObject }|15,032,904|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,667 ops/sec ±15.59% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 440 ops/sec ±1.09% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,620 ops/sec ±0.78% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 975 ops/sec ±37.14% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|772,402,347|92|
|Using backtick (`)|774,525,711|97|
|Using array.join|7,566,149|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,909,962|90|
|Using this|152,755,601|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,420,507|94|
|Date.now()|15,205,124|91|
