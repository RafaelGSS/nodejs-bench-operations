# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Fri Jan 20 2023 20:00:13 GMT+0000 (Coordinated Universal Time)

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.035ms
new Array(length)|100|0.011ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.571ms
new Array(length)|10,000|0.234ms
array.push|1,000,000|31.57ms
new Array(length)|1,000,000|9.656ms
array.push|100,000,000|1,911.605ms
new Array(length)|100,000,000|4,721.263ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.016ms
array.push|100|0.099ms
new Array(length)|100|0.011ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.596ms
new Array(length)|10,000|4.257ms
array.push|1,000,000|336.072ms
new Array(length)|1,000,000|4.642ms
array.push|100,000,000|2,756.752ms
new Array(length)|100,000,000|5,552.601ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|354|85|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,049|56|
|[True conditional] Using constructor name|145,042|96|
|[True conditional] Check if property is valid then instanceof |146,563|92|
|[False conditional] Using instanceof only|710,170,188|96|
|[False conditional] Using constructor name|709,855,402|95|
|[False conditional] Check if property is valid then instanceof |710,395,294|95|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,718,015|97|
|fromUnixToISOString(new Date())|1,461,791|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,835|87|
|Intl.DateTimeFormat().format(new Date())|8,465|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,598|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,125|80|
|Reusing Intl.DateTimeFormat()|496,957|95|
|Date.toLocaleDateString()|506,356|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,607|84|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|669,696|97|
|Using brackets {}|689,256|98|
|Using '' + |687,013|97|
|Using date.toString()|748,363|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,394,076|97|
|Using undefined assignment|708,740,860|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,919|61|
|NodeError|141,567|93|
|NodeError Range|142,855|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,375,661|97|
|Function returning explicitly undefined|1,365,487|95|
|Function returning implicitly undefined|1,391,251|94|
|Function returning string|1,378,593|97|
|Function returning integer|1,400,641|96|
|Function returning float|1,397,818|97|
|Function returning functions|1,292,097|97|
|Function returning arrow functions|1,323,621|92|
|Function returning empty object|1,392,480|98|
|Function returning empty array|1,381,097|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,493,064|98|
|using Array.includes (first item)|708,180,257|96|
|Using raw comparison|709,538,241|96|
|Using raw comparison (first item)|708,022,342|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,718,793|93|
|Using Object.getOwnPropertyNames()|46,991,199|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,798,099|98|
|Length = 10_000 - Array.at|16,819,571|98|
|Length = 1_000_000 - Array.at|16,652,166|97|
|Length = 100 - Array[length - 1]|707,666,526|95|
|Length = 10_000 - Array[length - 1]|706,496,655|98|
|Length = 1_000_000 - Array[length - 1]|705,531,923|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,799,046|93|
|Object.create({})|988,527|80|
|Cached Empty.prototype|709,072,286|97|
|Empty.prototype|1,035,076|79|
|Empty class|719,961|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,593,505|97|
|Using optional chain (obj.field?.field2) (undefined)|708,805,409|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,339,227|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,084,271|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,820,409|98|
|Using parseInt(x, 10) - big number (10 len)|13,081,272|95|
|Using + - small number (2 len)|710,329,247|97|
|Using + - big number (10 len)|708,091,917|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|599,979|79|
|Using ? operator to avoid rejection|633,369|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|230,739,873|93|
|Raw usage underscore usage|210,586,808|89|
|Manipulating private properties using #|143,843,456|88|
|Manipulating private properties using underscore(_)|124,740,909|93|
|Manipulating private properties using Symbol|124,330,131|96|
|Manipulating private properties using PrivateSymbol|29,378,916|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,005,699|98|
|Adding property in the object creation - small object|2,012,519|97|
|Adding property after the function creation - small class|146,712|84|
|Adding property in the function creation - small class|147,341|87|
|Adding property after the class creation - small class|118,841|81|
|Adding property in the class creation - small class|120,702|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,195,999|94|
|Using replaceAll()|2,078,751|98|
|Using replaceAll(//g)|1,948,637|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|175,375|97|
|Sort using first char|703,890|99|
|Sort using localeCompare|686,286|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,251|96|
|{...smallObject} - Total keys: 2|62,694,966|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,326|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,503|95|
|{ ...bigObject, ...anotherBigObject }|778|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,029,746|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,264,082|95|
|{ ...smallObject, ...anotherSmallObject }|10,900,049|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,706 ops/sec ±0.71% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 424 ops/sec ±0.08% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,403 ops/sec ±0.55% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 990 ops/sec ±18.02% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,660,288|97|
|Using backtick (`)|710,032,111|98|
|Using array.join|6,571,856|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|126,360,428|95|
|Using this|126,088,289|94|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,334,458|96|
|Date.now()|15,110,927|97|
