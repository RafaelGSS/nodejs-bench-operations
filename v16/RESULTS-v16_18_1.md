# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sun Feb 26 2023 14:47:56 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|774,487,911|97|
|Using dot notation|771,903,690|96|
|Using define property (writable)|3,447,155|94|
|Using define property initialized (writable)|4,155,035|91|
|Using define property (getter)|1,722,448|88|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.098ms
new Array(length)|100|0.01ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.378ms
new Array(length)|10,000|0.218ms
array.push|1,000,000|28.185ms
new Array(length)|1,000,000|16.897ms
array.push|100,000,000|2,264.997ms
new Array(length)|100,000,000|5,235.061ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.017ms
array.push|100|0.016ms
new Array(length)|100|0.01ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.475ms
new Array(length)|10,000|4.258ms
array.push|1,000,000|285.714ms
new Array(length)|1,000,000|5.395ms
array.push|100,000,000|2,867.364ms
new Array(length)|100,000,000|5,560.918ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|75|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|198,998|56|
|[True conditional] Using constructor name|154,475|92|
|[True conditional] Check if property is valid then instanceof |157,163|92|
|[False conditional] Using instanceof only|775,154,238|95|
|[False conditional] Using constructor name|774,604,251|93|
|[False conditional] Check if property is valid then instanceof |774,829,990|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,037,608|91|
|fromUnixToISOString(new Date())|1,521,859|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,756|84|
|Intl.DateTimeFormat().format(new Date())|8,840|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,598|62|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,106|78|
|Reusing Intl.DateTimeFormat()|421,947|69|
|Date.toLocaleDateString()|577,994|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,733|86|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|642,146|93|
|Using brackets {}|632,727|91|
|Using '' + |648,434|93|
|Using date.toString()|702,854|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,342,604|90|
|Using undefined assignment|772,672,958|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|199,211|53|
|NodeError|154,046|95|
|NodeError Range|153,404|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,182,946|94|
|Function returning explicitly undefined|1,190,464|92|
|Function returning implicitly undefined|1,200,860|95|
|Function returning string|1,172,453|95|
|Function returning integer|1,168,423|91|
|Function returning float|1,160,321|92|
|Function returning functions|1,148,777|91|
|Function returning arrow functions|1,166,127|91|
|Function returning empty object|1,178,511|91|
|Function returning empty array|1,177,230|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|773,633,946|96|
|using Array.includes (first item)|772,719,080|94|
|Using raw comparison|773,452,236|93|
|Using raw comparison (first item)|772,767,352|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,824,044|88|
|Using Object.getOwnPropertyNames()|58,848,621|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,185,761|96|
|Length = 10_000 - Array.at|18,126,720|97|
|Length = 1_000_000 - Array.at|18,117,943|94|
|Length = 100 - Array[length - 1]|770,661,316|96|
|Length = 10_000 - Array[length - 1]|772,072,028|91|
|Length = 1_000_000 - Array[length - 1]|770,215,171|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,389,337|90|
|Object.create({})|1,353,566|84|
|Cached Empty.prototype|774,611,945|98|
|Empty.prototype|1,386,328|80|
|Empty class|959,989|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|775,759,278|96|
|Using optional chain (obj.field?.field2) (undefined)|774,435,810|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,435,806|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|771,145,127|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|211,209,955|95|
|Using parseInt(x, 10) - big number (10 len)|14,057,126|88|
|Using + - small number (2 len)|773,751,027|97|
|Using + - big number (10 len)|773,843,813|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|760,849|79|
|Using ? operator to avoid rejection|781,798|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,534,444|88|
|Raw usage underscore usage|7,142,519|94|
|Manipulating private properties using #|2,682,417|92|
|Manipulating private properties using underscore(_)|760,656,510|97|
|Manipulating private properties using Symbol|759,984,395|95|
|Manipulating private properties using PrivateSymbol|21,262,503|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,926,387|95|
|Adding property in the object creation - small object|2,926,356|95|
|Adding property after the function creation - small class|189,562|84|
|Adding property in the function creation - small class|194,990|88|
|Adding property after the class creation - small class|159,875|82|
|Adding property in the class creation - small class|159,179|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|775,288,249|97|
|Getter|75,702,399|95|
|Method|773,268,766|92|
|DefineProperty (getter)|773,245,903|95|
|DefineProperty (getter & enumerable=false)|75,669,855|95|
|DefineProperty (getter & configurable=false)|774,351,627|94|
|DefineProperty (getter & enumerable=false & configurable=false)|75,623,713|95|
|DefineProperty (writable)|773,469,605|92|
|DefineProperty (writable & enumerable=false)|118,609,678|19|
|DefineProperty (writable & enumerable=false & configurable=false)|111,575,397|83|
|DefineProperties (getter)|47,106,210|87|
|DefineProperties (getter & enumerable=false)|75,661,347|96|
|DefineProperties (getter & enumerable=false & configurable=false)|75,591,725|91|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|737,187,270|95|
|Setter|8,120,561|95|
|Method|737,219,072|93|
|DefineProperty (setter)|735,562,849|96|
|DefineProperty (setter & enumerable=false)|8,145,546|96|
|DefineProperty (setter & configurable=false)|8,125,066|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,174,057|94|
|DefineProperty (writable)|772,292,161|96|
|DefineProperty (writable & enumerable=false)|117,912,763|20|
|DefineProperty (writable & enumerable=false & configurable=false)|113,938,974|85|
|DefineProperties (setter)|86,759,937|92|
|DefineProperties (setter & enumerable=false)|7,716,938|95|
|DefineProperties (setter & enumerable=false & configurable=false)|8,109,084|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,573,463|90|
|Using replaceAll()|2,523,585|88|
|Using replaceAll(//g)|2,338,952|89|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,514|92|
|Sort using first char|796,108|94|
|Sort using localeCompare|496,861|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,557|92|
|{...smallObject} - Total keys: 2|55,750,709|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,515|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,075|93|
|{ ...bigObject, ...anotherBigObject }|927|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,065,961|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,892,541|92|
|{ ...smallObject, ...anotherSmallObject }|14,798,992|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,603 ops/sec ±17.51% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 440 ops/sec ±0.76% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,396 ops/sec ±0.60% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 924 ops/sec ±10.13% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|774,077,454|95|
|Using backtick (`)|774,415,343|94|
|Using array.join|7,331,706|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|143,573,149|93|
|Using this|149,656,250|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,313,252|90|
|Date.now()|14,933,114|93|
