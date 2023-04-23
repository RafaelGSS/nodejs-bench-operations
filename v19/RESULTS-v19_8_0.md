# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v19.8.0`
* __Run:__ Sun Apr 23 2023 13:19:52 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,327,627|99|
|Using dot notation|853,889,391|98|
|Using define property (writable)|4,298,481|97|
|Using define property initialized (writable)|5,844,097|97|
|Using define property (getter)|2,368,553|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.008ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.328ms
new Array(length)|10,000|0.29ms
array.push|1,000,000|31.136ms
new Array(length)|1,000,000|6.382ms
array.push|100,000,000|1,753.216ms
new Array(length)|100,000,000|4,295.823ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.226ms
array.push|1,000,000|21.467ms
new Array(length)|1,000,000|7.512ms
array.push|100,000,000|2,021.066ms
new Array(length)|100,000,000|4,335.971ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|323|91|
|Array.from|23|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,386|52|
|[True conditional] Using constructor name|181,140|94|
|[True conditional] Check if property is valid then instanceof |184,101|96|
|[False conditional] Using instanceof only|855,546,843|100|
|[False conditional] Using constructor name|854,899,761|98|
|[False conditional] Check if property is valid then instanceof |855,989,483|99|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,764|95|
|crypto.verify('RSA-SHA256')|6,868|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,442,526|96|
|fromUnixToISOString(new Date())|2,267,380|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,848|83|
|Intl.DateTimeFormat().format(new Date())|11,017|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,064|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,659|84|
|Reusing Intl.DateTimeFormat()|629,595|97|
|Date.toLocaleDateString()|652,991|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,266|83|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,044,214|100|
|Using brackets {}|1,061,963|99|
|Using '' + |1,063,864|100|
|Using date.toString()|1,171,519|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,776,775|96|
|Using undefined assignment|853,775,242|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|220,895|48|
|NodeError|175,871|95|
|NodeError Range|175,568|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,902,643|99|
|Function returning explicitly undefined|1,894,005|101|
|Function returning implicitly undefined|1,937,930|96|
|Function returning string|1,908,582|97|
|Function returning integer|1,898,489|94|
|Function returning float|1,926,470|97|
|Function returning functions|1,860,880|97|
|Function returning arrow functions|1,889,780|96|
|Function returning empty object|1,931,891|100|
|Function returning empty array|1,899,621|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|852,938,573|99|
|using Array.includes (first item)|853,966,420|100|
|Using raw comparison|855,341,534|95|
|Using raw comparison (first item)|855,339,443|101|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,454,105|92|
|Using Object.getOwnPropertyNames()|94,839,258|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|851,471,445|100|
|Length = 10_000 - Array.at|851,978,862|99|
|Length = 1_000_000 - Array.at|851,897,851|97|
|Length = 100 - Array[length - 1]|853,831,738|99|
|Length = 10_000 - Array[length - 1]|853,627,378|96|
|Length = 1_000_000 - Array[length - 1]|853,863,510|100|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|75,117,279|96|
|Object.create({})|2,569,423|82|
|Cached Empty.prototype|854,247,884|97|
|Empty.prototype|2,276,748|82|
|Empty class|1,484,081|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|854,570,214|99|
|Using optional chain (obj.field?.field2) (undefined)|854,564,317|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|854,231,811|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|854,236,037|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|285,534,903|96|
|Using parseInt(x, 10) - big number (10 len)|21,310,576|98|
|Using + - small number (2 len)|855,747,293|95|
|Using + - big number (10 len)|854,554,912|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,251,664|85|
|Using ? operator to avoid rejection|1,290,470|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|850,663,623|99|
|Raw usage underscore usage|851,705,303|97|
|Manipulating private properties using #|842,715,997|97|
|Manipulating private properties using underscore(_)|843,580,230|100|
|Manipulating private properties using Symbol|842,549,359|98|
|Manipulating private properties using PrivateSymbol|56,300,635|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,610,618|98|
|Adding property in the object creation - small object|2,613,366|100|
|Adding property after the function creation - small class|232,452|89|
|Adding property in the function creation - small class|236,481|90|
|Adding property after the class creation - small class|199,082|88|
|Adding property in the class creation - small class|202,032|89|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,649,755|99|
|Getter|98,223,895|96|
|Method|854,845,620|98|
|DefineProperty (getter)|854,490,823|100|
|DefineProperty (getter & enumerable=false)|97,612,847|98|
|DefineProperty (getter & configurable=false)|854,730,110|97|
|DefineProperty (getter & enumerable=false & configurable=false)|96,473,726|95|
|DefineProperty (writable)|855,347,225|98|
|DefineProperty (writable & enumerable=false)|854,951,764|101|
|DefineProperty (writable & enumerable=false & configurable=false)|172,010,996|22|
|DefineProperties (getter)|63,403,812|90|
|DefineProperties (getter & enumerable=false)|97,947,077|97|
|DefineProperties (getter & enumerable=false & configurable=false)|98,097,172|98|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|846,063,805|95|
|Setter|12,054,159|100|
|Method|847,531,123|97|
|DefineProperty (setter)|847,808,052|101|
|DefineProperty (setter & enumerable=false)|12,307,901|100|
|DefineProperty (setter & configurable=false)|11,716,887|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,138,620|96|
|DefineProperty (writable)|854,824,614|95|
|DefineProperty (writable & enumerable=false)|854,408,131|98|
|DefineProperty (writable & enumerable=false & configurable=false)|854,050,902|96|
|DefineProperties (setter)|702,703,490|83|
|DefineProperties (setter & enumerable=false)|11,341,571|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,354,294|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,713,563|90|
|Using replaceAll()|3,309,939|98|
|Using replaceAll(//g)|3,255,080|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,197|96|
|Sort using first char|1,288,054|94|
|Sort using localeCompare|1,193,845|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,001|99|
|{...smallObject} - Total keys: 2|101,190,275|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,139|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,350|98|
|{ ...bigObject, ...anotherBigObject }|1,202|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,674,580|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,674,067|99|
|{ ...smallObject, ...anotherSmallObject }|25,111,886|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,606 ops/sec ±0.85% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 531 ops/sec ±0.31% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 6,977 ops/sec ±0.47% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,061 ops/sec ±47.29% (40 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|854,086,084|101|
|Using backtick (`)|854,194,646|98|
|Using array.join|12,875,113|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,691,801|99|
|Using indexof|854,879,735|100|
|Using RegExp.test|16,190,846|99|
|Using RegExp.text with cached regex pattern|16,739,996|100|
|Using new RegExp.test|4,558,933|100|
|Using new RegExp.test with cached regex pattern|5,118,533|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,584,055|93|
|Using this|170,135,474|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,172,062|95|
|Date.now()|22,446,638|100|
