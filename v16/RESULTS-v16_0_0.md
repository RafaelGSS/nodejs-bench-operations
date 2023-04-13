# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.0.0`
* __Run:__ Wed Apr 12 2023 23:49:06 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,279,062,929|95|
|Using dot notation|1,241,935,820|98|
|Using define property (writable)|3,626,339|95|
|Using define property initialized (writable)|4,644,572|92|
|Using define property (getter)|2,053,854|91|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.017ms
new Array(length)|100|0.006ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.454ms
new Array(length)|10,000|0.236ms
array.push|1,000,000|21.001ms
new Array(length)|1,000,000|6.443ms
array.push|100,000,000|1,453.777ms
new Array(length)|100,000,000|3,867.426ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.034ms
array.push|10,000|9.896ms
new Array(length)|10,000|6.242ms
array.push|1,000,000|183.112ms
new Array(length)|1,000,000|4.203ms
array.push|100,000,000|1,629.047ms
new Array(length)|100,000,000|4,603.996ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|307|88|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|339,307|88|
|[True conditional] Using constructor name|334,020|89|
|[True conditional] Check if property is valid then instanceof |335,504|88|
|[False conditional] Using instanceof only|1,280,993,160|97|
|[False conditional] Using constructor name|1,281,172,379|98|
|[False conditional] Check if property is valid then instanceof |1,282,480,884|97|


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,987,722|94|
|fromUnixToISOString(new Date())|1,857,911|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,748|82|
|Intl.DateTimeFormat().format(new Date())|10,947|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,710|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,191|80|
|Reusing Intl.DateTimeFormat()|527,232|95|
|Date.toLocaleDateString()|527,529|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,141|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|860,513|99|
|Using brackets {}|874,947|97|
|Using '' + |871,762|97|
|Using date.toString()|954,606|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,118,744|96|
|Using undefined assignment|1,279,528,924|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|325,010|88|
|NodeError|324,823|88|
|NodeError Range|324,051|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,291,297|95|
|Function returning explicitly undefined|1,268,846|95|
|Function returning implicitly undefined|1,297,740|98|
|Function returning string|1,281,407|97|
|Function returning integer|1,297,234|96|
|Function returning float|1,286,290|97|
|Function returning functions|1,269,491|96|
|Function returning arrow functions|1,280,609|97|
|Function returning empty object|1,291,621|97|
|Function returning empty array|1,241,304|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,278,845,302|94|
|using Array.includes (first item)|1,278,279,827|93|
|Using raw comparison|1,281,126,871|101|
|Using raw comparison (first item)|1,280,499,211|99|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,575,454|96|
|Using Object.getOwnPropertyNames()|87,125,352|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|1,274,107,930|96|
|Length = 10_000 - Array[length - 1]|1,270,847,894|96|
|Length = 1_000_000 - Array[length - 1]|1,271,489,446|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,146,422|96|
|Object.create({})|1,664,110|86|
|Cached Empty.prototype|1,280,037,181|96|
|Empty.prototype|1,894,977|86|
|Empty class|1,081,327|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,280,625,303|98|
|Using optional chain (obj.field?.field2) (undefined)|1,273,260,894|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,273,564,240|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,273,711,274|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|315,526,705|100|
|Using parseInt(x, 10) - big number (10 len)|14,625,911|96|
|Using + - small number (2 len)|1,281,746,245|96|
|Using + - big number (10 len)|1,279,886,272|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|834,675|82|
|Using ? operator to avoid rejection|868,111|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,084,011|96|
|Raw usage underscore usage|7,282,304|94|
|Manipulating private properties using #|2,722,986|92|
|Manipulating private properties using underscore(_)|1,264,253,075|98|
|Manipulating private properties using Symbol|1,261,284,989|100|
|Manipulating private properties using PrivateSymbol|47,351,433|98|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,296,770|96|
|Adding property in the object creation - small object|2,301,136|95|
|Adding property after the function creation - small class|191,399|92|
|Adding property in the function creation - small class|192,652|94|
|Adding property after the class creation - small class|167,439|88|
|Adding property in the class creation - small class|168,327|89|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,273,694,778|92|
|Getter|95,059,798|98|
|Method|1,280,454,731|101|
|DefineProperty (getter)|1,280,589,261|101|
|DefineProperty (getter & enumerable=false)|94,090,233|99|
|DefineProperty (getter & configurable=false)|1,280,996,551|97|
|DefineProperty (getter & enumerable=false & configurable=false)|94,955,464|97|
|DefineProperty (writable)|809,425,171|66|
|DefineProperty (writable & enumerable=false)|137,925,277|90|
|DefineProperty (writable & enumerable=false & configurable=false)|135,643,864|89|
|DefineProperties (getter)|57,842,887|93|
|DefineProperties (getter & enumerable=false)|94,876,096|98|
|DefineProperties (getter & enumerable=false & configurable=false)|94,861,036|91|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|935,319,739|99|
|Setter|6,314,563|93|
|Method|763,019,039|100|
|DefineProperty (setter)|933,548,882|99|
|DefineProperty (setter & enumerable=false)|6,358,904|95|
|DefineProperty (setter & configurable=false)|6,348,435|96|
|DefineProperty (setter & enumerable=false & configurable=false)|6,374,536|95|
|DefineProperty (writable)|724,338,613|61|
|DefineProperty (writable & enumerable=false)|135,854,917|77|
|DefineProperty (writable & enumerable=false & configurable=false)|141,944,241|84|
|DefineProperties (setter)|112,335,100|89|
|DefineProperties (setter & enumerable=false)|6,256,381|97|
|DefineProperties (setter & enumerable=false & configurable=false)|6,308,136|98|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,815,509|95|
|Using replaceAll()|2,593,681|96|
|Using replaceAll(//g)|2,482,975|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|228,046|96|
|Sort using first char|1,065,857|93|
|Sort using localeCompare|551,005|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,806|92|
|{...smallObject} - Total keys: 2|97,062,757|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,015|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,502|98|
|{ ...bigObject, ...anotherBigObject }|1,134|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,797,910|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|30,040,694|95|
|{ ...smallObject, ...anotherSmallObject }|20,307,801|92|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,276,744,723|95|
|Using backtick (`)|1,273,116,747|95|
|Using array.join|10,181,304|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|189,826,173|95|
|Using this|194,321,704|100|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,784,818|93|
|Date.now()|19,318,555|100|
