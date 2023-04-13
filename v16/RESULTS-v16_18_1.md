# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Thu Apr 13 2023 10:17:21 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,279,142,392|98|
|Using dot notation|1,278,145,034|95|
|Using define property (writable)|4,044,585|98|
|Using define property initialized (writable)|4,642,657|99|
|Using define property (getter)|2,252,429|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.058ms
new Array(length)|100|0.006ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.375ms
new Array(length)|10,000|0.187ms
array.push|1,000,000|20.364ms
new Array(length)|1,000,000|15.106ms
array.push|100,000,000|1,421.101ms
new Array(length)|100,000,000|3,926.435ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.014ms
new Array(length)|100|0.007ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.346ms
new Array(length)|10,000|3.071ms
array.push|1,000,000|63.303ms
new Array(length)|1,000,000|3.648ms
array.push|100,000,000|2,195.344ms
new Array(length)|100,000,000|3,777.433ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|87|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,000|64|
|[True conditional] Using constructor name|203,412|98|
|[True conditional] Check if property is valid then instanceof |205,403|98|
|[False conditional] Using instanceof only|1,283,131,289|94|
|[False conditional] Using constructor name|1,282,076,287|99|
|[False conditional] Check if property is valid then instanceof |1,284,353,217|99|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|31,375|92|
|crypto.verify('RSA-SHA256')|30,125|94|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,083,524|98|
|fromUnixToISOString(new Date())|1,793,579|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,583|79|
|Intl.DateTimeFormat().format(new Date())|10,991|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,313|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,634|88|
|Reusing Intl.DateTimeFormat()|514,782|97|
|Date.toLocaleDateString()|518,800|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,102|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|911,067|98|
|Using brackets {}|923,449|97|
|Using '' + |898,473|98|
|Using date.toString()|988,255|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,234,385|97|
|Using undefined assignment|1,281,630,009|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|242,522|63|
|NodeError|201,404|92|
|NodeError Range|201,618|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,191,069|98|
|Function returning explicitly undefined|1,191,715|99|
|Function returning implicitly undefined|1,194,022|98|
|Function returning string|1,181,499|96|
|Function returning integer|1,202,548|99|
|Function returning float|1,190,642|97|
|Function returning functions|1,177,306|99|
|Function returning arrow functions|1,183,414|96|
|Function returning empty object|1,181,583|96|
|Function returning empty array|1,177,898|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,281,486,950|100|
|using Array.includes (first item)|1,281,796,013|99|
|Using raw comparison|1,284,069,307|99|
|Using raw comparison (first item)|1,278,041,448|101|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,294,153|97|
|Using Object.getOwnPropertyNames()|86,559,999|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,794,810|98|
|Length = 10_000 - Array.at|19,818,265|94|
|Length = 1_000_000 - Array.at|19,868,371|95|
|Length = 100 - Array[length - 1]|1,281,296,532|100|
|Length = 10_000 - Array[length - 1]|1,281,940,027|94|
|Length = 1_000_000 - Array[length - 1]|1,281,451,499|101|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,483,787|98|
|Object.create({})|1,888,220|91|
|Cached Empty.prototype|1,281,746,143|97|
|Empty.prototype|1,988,279|89|
|Empty class|1,156,264|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,274,884,000|99|
|Using optional chain (obj.field?.field2) (undefined)|1,277,024,763|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,263,026,653|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,259,779,684|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|313,230,816|97|
|Using parseInt(x, 10) - big number (10 len)|15,868,552|95|
|Using + - small number (2 len)|1,277,714,150|91|
|Using + - big number (10 len)|1,282,654,634|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|886,716|84|
|Using ? operator to avoid rejection|926,679|89|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,965,511|98|
|Raw usage underscore usage|7,852,455|93|
|Manipulating private properties using #|3,015,820|94|
|Manipulating private properties using underscore(_)|1,268,504,100|97|
|Manipulating private properties using Symbol|1,266,618,678|100|
|Manipulating private properties using PrivateSymbol|45,555,411|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,827,746|99|
|Adding property in the object creation - small object|2,813,819|97|
|Adding property after the function creation - small class|201,823|91|
|Adding property in the function creation - small class|202,430|92|
|Adding property after the class creation - small class|174,474|86|
|Adding property in the class creation - small class|176,206|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,274,623,316|89|
|Getter|96,245,772|90|
|Method|1,282,598,245|98|
|DefineProperty (getter)|1,283,002,533|100|
|DefineProperty (getter & enumerable=false)|96,823,882|98|
|DefineProperty (getter & configurable=false)|1,276,364,399|96|
|DefineProperty (getter & enumerable=false & configurable=false)|95,453,625|98|
|DefineProperty (writable)|1,274,268,313|98|
|DefineProperty (writable & enumerable=false)|1,279,372,719|98|
|DefineProperty (writable & enumerable=false & configurable=false)|220,470,506|18|
|DefineProperties (getter)|50,134,150|83|
|DefineProperties (getter & enumerable=false)|96,005,678|98|
|DefineProperties (getter & enumerable=false & configurable=false)|97,308,497|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|952,911,398|100|
|Setter|7,184,459|98|
|Method|954,223,572|97|
|DefineProperty (setter)|953,944,471|98|
|DefineProperty (setter & enumerable=false)|7,155,991|94|
|DefineProperty (setter & configurable=false)|7,181,573|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,204,205|97|
|DefineProperty (writable)|1,050,496,350|83|
|DefineProperty (writable & enumerable=false)|145,357,091|84|
|DefineProperty (writable & enumerable=false & configurable=false)|142,765,151|84|
|DefineProperties (setter)|120,614,158|81|
|DefineProperties (setter & enumerable=false)|7,239,792|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,078,075|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,899,083|94|
|Using replaceAll()|2,602,299|96|
|Using replaceAll(//g)|2,590,442|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|239,126|98|
|Sort using first char|1,080,801|97|
|Sort using localeCompare|559,724|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,821|93|
|{...smallObject} - Total keys: 2|100,359,038|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,927|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,315|98|
|{ ...bigObject, ...anotherBigObject }|1,127|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,449,220|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,486,556|92|
|{ ...smallObject, ...anotherSmallObject }|20,927,838|89|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,508 ops/sec ±0.83% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 491 ops/sec ±0.30% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,854 ops/sec ±0.44% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,650 ops/sec ±9.38% (72 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,282,713,832|100|
|Using backtick (`)|1,281,442,354|99|
|Using array.join|9,062,302|95|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,265,545|97|
|Using indexof|1,277,181,480|97|
|Using RegExp.test|17,913,382|96|
|Using RegExp.text with cached regex pattern|18,355,414|98|
|Using new RegExp.test|4,401,746|97|
|Using new RegExp.test with cached regex pattern|4,943,820|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|194,578,549|92|
|Using this|194,455,287|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,647,123|99|
|Date.now()|20,146,390|99|
