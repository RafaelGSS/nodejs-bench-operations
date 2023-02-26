# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v16.0.0`
* __Run:__ Sun Feb 26 2023 14:23:02 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|843,101,970|95|
|Using dot notation|807,918,308|98|
|Using define property (writable)|3,358,280|89|
|Using define property initialized (writable)|4,389,166|91|
|Using define property (getter)|1,709,884|86|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.025ms
new Array(length)|100|0.009ms
array.push|1,000|0.062ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.573ms
new Array(length)|10,000|0.307ms
array.push|1,000,000|27.241ms
new Array(length)|1,000,000|7.999ms
array.push|100,000,000|10,300.205ms
new Array(length)|100,000,000|6,087.713ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.006ms
array.push|100|0.016ms
new Array(length)|100|0.013ms
array.push|1,000|0.072ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.527ms
new Array(length)|10,000|4.097ms
array.push|1,000,000|64.574ms
new Array(length)|1,000,000|5.026ms
array.push|100,000,000|2,897.404ms
new Array(length)|100,000,000|5,423.361ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|85|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|340,265|85|
|[True conditional] Using constructor name|331,695|89|
|[True conditional] Check if property is valid then instanceof |325,535|89|
|[False conditional] Using instanceof only|841,638,803|94|
|[False conditional] Using constructor name|843,099,624|92|
|[False conditional] Check if property is valid then instanceof |848,229,609|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,008,274|91|
|fromUnixToISOString(new Date())|1,517,561|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,776|74|
|Intl.DateTimeFormat().format(new Date())|4,847|46|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,159|59|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,044|51|
|Reusing Intl.DateTimeFormat()|406,101|77|
|Date.toLocaleDateString()|565,697|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,733|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|644,680|95|
|Using brackets {}|646,940|92|
|Using '' + |646,710|95|
|Using date.toString()|695,004|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,311,106|91|
|Using undefined assignment|845,080,630|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|330,676|88|
|NodeError|329,566|80|
|NodeError Range|326,800|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,174,669|92|
|Function returning explicitly undefined|1,167,817|94|
|Function returning implicitly undefined|1,175,226|94|
|Function returning string|1,144,822|92|
|Function returning integer|1,200,625|96|
|Function returning float|1,173,209|92|
|Function returning functions|1,149,028|92|
|Function returning arrow functions|1,170,654|94|
|Function returning empty object|1,163,142|94|
|Function returning empty array|1,194,318|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|844,854,641|97|
|using Array.includes (first item)|843,471,572|92|
|Using raw comparison|846,028,652|96|
|Using raw comparison (first item)|844,676,930|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,409,641|87|
|Using Object.getOwnPropertyNames()|58,953,034|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|844,257,508|96|
|Length = 10_000 - Array[length - 1]|842,549,412|94|
|Length = 1_000_000 - Array[length - 1]|842,514,931|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,644,263|91|
|Object.create({})|1,255,303|87|
|Cached Empty.prototype|846,351,026|95|
|Empty.prototype|1,286,127|76|
|Empty class|912,130|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|845,156,238|95|
|Using optional chain (obj.field?.field2) (undefined)|844,753,896|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|845,585,691|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,063,312|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|209,412,465|94|
|Using parseInt(x, 10) - big number (10 len)|13,051,946|91|
|Using + - small number (2 len)|847,431,863|94|
|Using + - big number (10 len)|844,245,049|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|709,788|79|
|Using ? operator to avoid rejection|723,882|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,846,752|91|
|Raw usage underscore usage|6,880,436|90|
|Manipulating private properties using #|2,527,719|91|
|Manipulating private properties using underscore(_)|794,494,130|93|
|Manipulating private properties using Symbol|794,059,940|94|
|Manipulating private properties using PrivateSymbol|20,780,621|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,901,536|94|
|Adding property in the object creation - small object|1,912,900|96|
|Adding property after the function creation - small class|174,226|83|
|Adding property in the function creation - small class|176,776|86|
|Adding property after the class creation - small class|145,057|80|
|Adding property in the class creation - small class|146,463|79|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|844,334,955|94|
|Getter|75,601,802|91|
|Method|841,683,157|95|
|DefineProperty (getter)|842,041,139|95|
|DefineProperty (getter & enumerable=false)|75,865,119|94|
|DefineProperty (getter & configurable=false)|843,667,644|97|
|DefineProperty (getter & enumerable=false & configurable=false)|75,820,720|95|
|DefineProperty (writable)|610,313,965|74|
|DefineProperty (writable & enumerable=false)|101,259,227|78|
|DefineProperty (writable & enumerable=false & configurable=false)|104,938,715|83|
|DefineProperties (getter)|45,569,325|89|
|DefineProperties (getter & enumerable=false)|75,861,854|94|
|DefineProperties (getter & enumerable=false & configurable=false)|75,771,392|95|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|733,066,856|96|
|Setter|7,489,314|93|
|Method|647,294,641|86|
|DefineProperty (setter)|732,215,125|90|
|DefineProperty (setter & enumerable=false)|7,459,313|85|
|DefineProperty (setter & configurable=false)|7,451,255|94|
|DefineProperty (setter & enumerable=false & configurable=false)|7,443,065|96|
|DefineProperty (writable)|844,687,482|94|
|DefineProperty (writable & enumerable=false)|236,554,442|28|
|DefineProperty (writable & enumerable=false & configurable=false)|111,491,214|89|
|DefineProperties (setter)|81,229,861|88|
|DefineProperties (setter & enumerable=false)|7,339,670|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,354,817|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,534,764|91|
|Using replaceAll()|2,435,602|93|
|Using replaceAll(//g)|2,318,729|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|187,801|92|
|Sort using first char|845,272|91|
|Sort using localeCompare|503,712|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,516|91|
|{...smallObject} - Total keys: 2|57,291,130|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,455|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,832|91|
|{ ...bigObject, ...anotherBigObject }|934|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,075,904|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,680,661|93|
|{ ...smallObject, ...anotherSmallObject }|14,803,935|94|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|843,243,547|96|
|Using backtick (`)|843,753,549|95|
|Using array.join|7,421,522|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,912,748|94|
|Using this|148,915,537|90|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,625,475|90|
|Date.now()|12,434,329|93|
