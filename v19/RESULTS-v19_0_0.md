# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Sun Apr 23 2023 13:06:37 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,393,139|100|
|Using dot notation|854,294,835|100|
|Using define property (writable)|4,474,428|95|
|Using define property initialized (writable)|6,180,675|96|
|Using define property (getter)|2,411,306|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.007ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.33ms
new Array(length)|10,000|0.264ms
array.push|1,000,000|32.203ms
new Array(length)|1,000,000|6.041ms
array.push|100,000,000|1,751.165ms
new Array(length)|100,000,000|4,318.924ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.015ms
array.push|100|0.07ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.268ms
new Array(length)|10,000|0.126ms
array.push|1,000,000|19.763ms
new Array(length)|1,000,000|7.411ms
array.push|100,000,000|2,056.505ms
new Array(length)|100,000,000|4,295.408ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|88|
|Array.from|21|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|230,484|50|
|[True conditional] Using constructor name|180,352|95|
|[True conditional] Check if property is valid then instanceof |180,725|94|
|[False conditional] Using instanceof only|855,416,219|98|
|[False conditional] Using constructor name|855,714,877|98|
|[False conditional] Check if property is valid then instanceof |855,837,672|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,818|97|
|crypto.verify('RSA-SHA256')|6,843|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,462,384|100|
|fromUnixToISOString(new Date())|2,283,294|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,967|85|
|Intl.DateTimeFormat().format(new Date())|10,633|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,269|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,847|92|
|Reusing Intl.DateTimeFormat()|648,149|96|
|Date.toLocaleDateString()|668,234|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,169|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,067,493|93|
|Using brackets {}|1,069,788|95|
|Using '' + |1,065,660|98|
|Using date.toString()|1,166,458|100|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,885,582|96|
|Using undefined assignment|854,014,091|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|224,125|51|
|NodeError|177,485|96|
|NodeError Range|176,208|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,661,556|95|
|Function returning explicitly undefined|1,642,744|94|
|Function returning implicitly undefined|1,675,845|97|
|Function returning string|1,665,693|100|
|Function returning integer|1,691,701|98|
|Function returning float|1,672,623|99|
|Function returning functions|1,631,024|99|
|Function returning arrow functions|1,652,589|95|
|Function returning empty object|1,682,403|99|
|Function returning empty array|1,682,502|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|853,331,020|99|
|using Array.includes (first item)|854,429,375|98|
|Using raw comparison|855,696,517|96|
|Using raw comparison (first item)|855,155,689|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,336,397|95|
|Using Object.getOwnPropertyNames()|95,724,030|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|851,298,831|101|
|Length = 10_000 - Array.at|851,149,387|98|
|Length = 1_000_000 - Array.at|850,850,408|99|
|Length = 100 - Array[length - 1]|854,249,487|98|
|Length = 10_000 - Array[length - 1]|853,665,425|99|
|Length = 1_000_000 - Array[length - 1]|853,365,062|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,621,695|93|
|Object.create({})|2,442,251|92|
|Cached Empty.prototype|854,641,816|96|
|Empty.prototype|2,319,650|87|
|Empty class|1,479,446|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|854,439,368|100|
|Using optional chain (obj.field?.field2) (undefined)|855,192,584|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|854,279,765|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|854,576,314|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|285,284,588|95|
|Using parseInt(x, 10) - big number (10 len)|21,594,211|99|
|Using + - small number (2 len)|855,819,076|101|
|Using + - big number (10 len)|855,319,580|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,213,677|82|
|Using ? operator to avoid rejection|1,300,733|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|851,352,140|101|
|Raw usage underscore usage|851,773,522|99|
|Manipulating private properties using #|842,812,973|97|
|Manipulating private properties using underscore(_)|844,550,194|100|
|Manipulating private properties using Symbol|842,633,812|95|
|Manipulating private properties using PrivateSymbol|55,296,886|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,609,853|100|
|Adding property in the object creation - small object|2,613,864|97|
|Adding property after the function creation - small class|231,408|87|
|Adding property in the function creation - small class|240,062|92|
|Adding property after the class creation - small class|208,978|89|
|Adding property in the class creation - small class|207,189|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|855,405,738|100|
|Getter|96,877,409|96|
|Method|855,263,769|97|
|DefineProperty (getter)|854,820,459|100|
|DefineProperty (getter & enumerable=false)|97,280,850|98|
|DefineProperty (getter & configurable=false)|855,293,407|98|
|DefineProperty (getter & enumerable=false & configurable=false)|97,478,043|97|
|DefineProperty (writable)|854,226,454|99|
|DefineProperty (writable & enumerable=false)|855,509,862|98|
|DefineProperty (writable & enumerable=false & configurable=false)|854,866,930|99|
|DefineProperties (getter)|96,848,779|95|
|DefineProperties (getter & enumerable=false)|68,249,212|69|
|DefineProperties (getter & enumerable=false & configurable=false)|65,610,928|92|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|845,664,092|100|
|Setter|12,043,520|99|
|Method|847,193,374|98|
|DefineProperty (setter)|847,213,736|100|
|DefineProperty (setter & enumerable=false)|12,088,181|99|
|DefineProperty (setter & configurable=false)|11,949,763|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,179,441|98|
|DefineProperty (writable)|853,588,130|96|
|DefineProperty (writable & enumerable=false)|853,950,799|98|
|DefineProperty (writable & enumerable=false & configurable=false)|615,772,384|74|
|DefineProperties (setter)|126,007,713|90|
|DefineProperties (setter & enumerable=false)|12,067,922|97|
|DefineProperties (setter & enumerable=false & configurable=false)|11,990,122|100|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,664,224|97|
|Using replaceAll()|3,236,767|100|
|Using replaceAll(//g)|3,265,524|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|265,642|99|
|Sort using first char|1,283,111|100|
|Sort using localeCompare|1,212,225|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,031|99|
|{...smallObject} - Total keys: 2|102,160,416|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,154|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,594|98|
|{ ...bigObject, ...anotherBigObject }|1,216|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,589,696|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,590,928|98|
|{ ...smallObject, ...anotherSmallObject }|25,180,112|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,593 ops/sec ±0.60% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 498 ops/sec ±0.48% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 6,317 ops/sec ±0.48% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,063 ops/sec ±31.44% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,631,176|98|
|Using backtick (`)|850,967,172|101|
|Using array.join|12,781,118|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,486,501|100|
|Using indexof|855,341,639|100|
|Using RegExp.test|15,992,430|98|
|Using RegExp.text with cached regex pattern|16,087,566|98|
|Using new RegExp.test|4,525,262|97|
|Using new RegExp.test with cached regex pattern|5,119,085|100|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|160,843,204|95|
|Using this|170,164,096|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,002,254|93|
|Date.now()|22,171,974|99|
