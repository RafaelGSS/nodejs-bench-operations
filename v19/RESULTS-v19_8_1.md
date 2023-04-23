# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v19.8.1`
* __Run:__ Sun Apr 23 2023 13:33:09 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,746,534|101|
|Using dot notation|853,393,296|99|
|Using define property (writable)|4,292,730|94|
|Using define property initialized (writable)|5,852,668|99|
|Using define property (getter)|2,382,417|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.008ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.326ms
new Array(length)|10,000|0.262ms
array.push|1,000,000|28.526ms
new Array(length)|1,000,000|6.507ms
array.push|100,000,000|1,774.537ms
new Array(length)|100,000,000|4,319.379ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.015ms
array.push|100|0.017ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.125ms
array.push|1,000,000|20.728ms
new Array(length)|1,000,000|7.52ms
array.push|100,000,000|2,036.865ms
new Array(length)|100,000,000|4,360.506ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|88|
|Array.from|22|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|232,537|50|
|[True conditional] Using constructor name|183,915|97|
|[True conditional] Check if property is valid then instanceof |184,524|95|
|[False conditional] Using instanceof only|855,758,941|100|
|[False conditional] Using constructor name|855,228,144|101|
|[False conditional] Check if property is valid then instanceof |856,105,974|101|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,924|96|
|crypto.verify('RSA-SHA256')|6,925|100|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,426,476|100|
|fromUnixToISOString(new Date())|2,242,472|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,949|85|
|Intl.DateTimeFormat().format(new Date())|11,360|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,323|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,283|79|
|Reusing Intl.DateTimeFormat()|638,320|99|
|Date.toLocaleDateString()|652,379|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,091|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|988,708|96|
|Using brackets {}|1,004,119|95|
|Using '' + |1,006,702|98|
|Using date.toString()|1,170,175|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,727,042|94|
|Using undefined assignment|853,977,756|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|225,834|53|
|NodeError|176,739|88|
|NodeError Range|180,408|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,875,084|96|
|Function returning explicitly undefined|1,868,570|95|
|Function returning implicitly undefined|1,929,729|95|
|Function returning string|1,905,025|97|
|Function returning integer|1,815,166|93|
|Function returning float|1,907,498|96|
|Function returning functions|1,862,550|99|
|Function returning arrow functions|1,885,118|98|
|Function returning empty object|1,914,724|97|
|Function returning empty array|1,886,403|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|852,690,586|100|
|using Array.includes (first item)|854,148,847|96|
|Using raw comparison|855,703,649|98|
|Using raw comparison (first item)|855,429,591|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,857,649|90|
|Using Object.getOwnPropertyNames()|95,135,687|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|851,970,632|96|
|Length = 10_000 - Array.at|851,540,885|100|
|Length = 1_000_000 - Array.at|852,146,601|98|
|Length = 100 - Array[length - 1]|853,860,747|101|
|Length = 10_000 - Array[length - 1]|853,461,624|95|
|Length = 1_000_000 - Array[length - 1]|853,148,899|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|74,541,394|93|
|Object.create({})|2,551,943|80|
|Cached Empty.prototype|854,434,708|100|
|Empty.prototype|2,304,752|90|
|Empty class|1,460,772|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|854,035,036|99|
|Using optional chain (obj.field?.field2) (undefined)|854,566,009|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|855,150,356|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|855,124,358|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|285,692,998|96|
|Using parseInt(x, 10) - big number (10 len)|21,719,702|101|
|Using + - small number (2 len)|856,263,782|101|
|Using + - big number (10 len)|855,090,235|100|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,269,126|82|
|Using ? operator to avoid rejection|1,308,384|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|851,214,930|100|
|Raw usage underscore usage|851,637,508|94|
|Manipulating private properties using #|842,595,513|99|
|Manipulating private properties using underscore(_)|844,426,693|99|
|Manipulating private properties using Symbol|843,174,742|99|
|Manipulating private properties using PrivateSymbol|56,205,183|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,614,256|95|
|Adding property in the object creation - small object|2,621,749|98|
|Adding property after the function creation - small class|236,201|87|
|Adding property in the function creation - small class|239,885|91|
|Adding property after the class creation - small class|201,603|88|
|Adding property in the class creation - small class|201,515|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,846,297|95|
|Getter|97,959,921|98|
|Method|854,729,887|96|
|DefineProperty (getter)|855,105,853|98|
|DefineProperty (getter & enumerable=false)|97,748,834|98|
|DefineProperty (getter & configurable=false)|854,597,543|99|
|DefineProperty (getter & enumerable=false & configurable=false)|98,220,670|96|
|DefineProperty (writable)|855,534,786|99|
|DefineProperty (writable & enumerable=false)|855,664,092|96|
|DefineProperty (writable & enumerable=false & configurable=false)|855,350,360|95|
|DefineProperties (getter)|97,875,441|96|
|DefineProperties (getter & enumerable=false)|98,009,075|97|
|DefineProperties (getter & enumerable=false & configurable=false)|70,171,846|71|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|847,114,038|100|
|Setter|12,212,119|97|
|Method|841,494,960|99|
|DefineProperty (setter)|842,648,548|97|
|DefineProperty (setter & enumerable=false)|12,194,350|96|
|DefineProperty (setter & configurable=false)|12,167,749|98|
|DefineProperty (setter & enumerable=false & configurable=false)|12,116,050|99|
|DefineProperty (writable)|854,661,017|98|
|DefineProperty (writable & enumerable=false)|854,270,778|97|
|DefineProperty (writable & enumerable=false & configurable=false)|853,898,969|98|
|DefineProperties (setter)|795,199,563|92|
|DefineProperties (setter & enumerable=false)|10,818,627|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,867,264|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,679,865|94|
|Using replaceAll()|3,297,355|98|
|Using replaceAll(//g)|3,259,156|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|270,218|98|
|Sort using first char|1,282,762|98|
|Sort using localeCompare|1,206,695|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,013|98|
|{...smallObject} - Total keys: 2|100,371,511|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,140|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,406|98|
|{ ...bigObject, ...anotherBigObject }|1,209|99|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,264,119|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,595,658|97|
|{ ...smallObject, ...anotherSmallObject }|25,075,923|99|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,564 ops/sec ±0.62% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 546 ops/sec ±0.33% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 6,702 ops/sec ±0.54% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,065 ops/sec ±48.66% (38 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|854,116,404|95|
|Using backtick (`)|855,049,507|95|
|Using array.join|12,927,637|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,422,369|99|
|Using indexof|854,935,851|95|
|Using RegExp.test|16,217,502|99|
|Using RegExp.text with cached regex pattern|16,811,233|99|
|Using new RegExp.test|4,598,616|98|
|Using new RegExp.test with cached regex pattern|5,073,053|100|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|158,761,330|94|
|Using this|171,801,610|96|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,011,009|94|
|Date.now()|22,414,773|100|
