# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v20.0.0`
* __Run:__ Sun Apr 23 2023 13:59:44 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|855,559,457|97|
|Using dot notation|855,241,285|99|
|Using define property (writable)|4,898,744|96|
|Using define property initialized (writable)|6,456,700|97|
|Using define property (getter)|2,528,184|95|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.008ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.393ms
new Array(length)|10,000|0.277ms
array.push|1,000,000|28.01ms
new Array(length)|1,000,000|7.087ms
array.push|100,000,000|1,703.487ms
new Array(length)|100,000,000|4,150.379ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.015ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.246ms
new Array(length)|10,000|0.149ms
array.push|1,000,000|24.142ms
new Array(length)|1,000,000|4.285ms
array.push|100,000,000|2,429.433ms
new Array(length)|100,000,000|3,832.385ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|318|89|
|Array.from|23|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|232,212|52|
|[True conditional] Using constructor name|182,173|99|
|[True conditional] Check if property is valid then instanceof |182,370|97|
|[False conditional] Using instanceof only|857,101,010|100|
|[False conditional] Using constructor name|857,586,204|93|
|[False conditional] Check if property is valid then instanceof |857,715,641|97|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,954|96|
|crypto.verify('RSA-SHA256')|6,967|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,550,376|93|
|fromUnixToISOString(new Date())|2,306,022|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,884|84|
|Intl.DateTimeFormat().format(new Date())|11,808|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,450|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,492|78|
|Reusing Intl.DateTimeFormat()|629,623|100|
|Date.toLocaleDateString()|621,943|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,923|85|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,104,145|96|
|Using brackets {}|1,135,860|101|
|Using '' + |1,128,082|95|
|Using date.toString()|1,252,923|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,018,774|94|
|Using undefined assignment|855,268,462|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|226,860|53|
|NodeError|180,076|97|
|NodeError Range|180,792|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,653,505|96|
|Function returning explicitly undefined|1,664,221|101|
|Function returning implicitly undefined|1,687,368|94|
|Function returning string|1,634,917|100|
|Function returning integer|1,678,157|93|
|Function returning float|1,692,857|100|
|Function returning functions|1,619,587|101|
|Function returning arrow functions|1,665,947|99|
|Function returning empty object|1,682,219|97|
|Function returning empty array|1,683,975|101|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|855,070,328|100|
|using Array.includes (first item)|855,734,156|98|
|Using raw comparison|857,043,109|100|
|Using raw comparison (first item)|856,442,676|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,458,413|96|
|Using Object.getOwnPropertyNames()|95,842,337|100|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|852,980,778|99|
|Length = 10_000 - Array.at|854,299,272|99|
|Length = 1_000_000 - Array.at|853,374,694|98|
|Length = 100 - Array[length - 1]|854,589,197|95|
|Length = 10_000 - Array[length - 1]|856,122,244|95|
|Length = 1_000_000 - Array[length - 1]|856,557,974|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,510,256|94|
|Object.create({})|2,635,537|84|
|Cached Empty.prototype|855,555,445|94|
|Empty.prototype|2,442,768|78|
|Empty class|1,545,172|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|855,511,107|99|
|Using optional chain (obj.field?.field2) (undefined)|856,870,199|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|856,943,349|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|856,153,227|101|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|856,413,575|98|
|Using parseInt(x, 10) - big number (10 len)|856,754,259|96|
|Using + - small number (2 len)|857,364,191|98|
|Using + - big number (10 len)|857,511,971|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,184,149|84|
|Using ? operator to avoid rejection|1,225,743|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|852,644,927|99|
|Raw usage underscore usage|853,752,597|100|
|Manipulating private properties using #|845,879,821|98|
|Manipulating private properties using underscore(_)|847,233,724|97|
|Manipulating private properties using Symbol|846,506,800|99|
|Manipulating private properties using PrivateSymbol|58,070,926|98|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,485,568|99|
|Adding property in the object creation - small object|8,552,333|99|
|Adding property after the function creation - small class|264,669|91|
|Adding property in the function creation - small class|271,214|92|
|Adding property after the class creation - small class|228,063|89|
|Adding property in the class creation - small class|228,121|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|855,910,209|100|
|Getter|94,312,806|99|
|Method|856,702,808|98|
|DefineProperty (getter)|856,544,445|98|
|DefineProperty (getter & enumerable=false)|94,499,783|93|
|DefineProperty (getter & configurable=false)|856,257,359|101|
|DefineProperty (getter & enumerable=false & configurable=false)|94,495,787|97|
|DefineProperty (writable)|856,517,427|99|
|DefineProperty (writable & enumerable=false)|856,897,586|101|
|DefineProperty (writable & enumerable=false & configurable=false)|857,316,403|97|
|DefineProperties (getter)|94,612,212|95|
|DefineProperties (getter & enumerable=false)|90,352,584|93|
|DefineProperties (getter & enumerable=false & configurable=false)|58,273,082|92|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|847,545,473|97|
|Setter|12,649,192|95|
|Method|847,422,237|99|
|DefineProperty (setter)|848,430,847|98|
|DefineProperty (setter & enumerable=false)|12,483,470|100|
|DefineProperty (setter & configurable=false)|12,532,360|100|
|DefineProperty (setter & enumerable=false & configurable=false)|12,736,028|97|
|DefineProperty (writable)|849,135,448|95|
|DefineProperty (writable & enumerable=false)|850,403,348|101|
|DefineProperty (writable & enumerable=false & configurable=false)|850,314,780|96|
|DefineProperties (setter)|792,473,349|94|
|DefineProperties (setter & enumerable=false)|11,617,123|97|
|DefineProperties (setter & enumerable=false & configurable=false)|12,899,467|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,761,525|95|
|Using replaceAll()|3,270,402|99|
|Using replaceAll(//g)|3,352,069|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|269,669|93|
|Sort using first char|1,380,961|97|
|Sort using localeCompare|1,327,662|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,074|98|
|{...smallObject} - Total keys: 2|113,208,166|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,177|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,729|99|
|{ ...bigObject, ...anotherBigObject }|1,236|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,765,000|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,243,635|97|
|{ ...smallObject, ...anotherSmallObject }|26,397,503|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,661 ops/sec ±0.63% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 589 ops/sec ±0.32% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 7,004 ops/sec ±0.54% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 918 ops/sec ±37.54% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|855,878,844|100|
|Using backtick (`)|855,691,849|98|
|Using array.join|13,007,077|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|856,127,951|101|
|Using indexof|856,709,023|98|
|Using RegExp.test|16,623,756|98|
|Using RegExp.text with cached regex pattern|16,952,701|99|
|Using new RegExp.test|4,704,351|95|
|Using new RegExp.test with cached regex pattern|5,660,755|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|850,760,436|97|
|Using this|853,619,840|99|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,420,548|98|
|Date.now()|24,474,720|99|
