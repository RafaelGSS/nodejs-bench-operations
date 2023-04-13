# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.0.0`
* __Run:__ Thu Apr 13 2023 09:51:12 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,277,707,107|95|
|Using dot notation|1,274,187,761|92|
|Using define property (writable)|3,662,070|97|
|Using define property initialized (writable)|4,627,885|96|
|Using define property (getter)|2,072,958|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.017ms
new Array(length)|100|0.006ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.451ms
new Array(length)|10,000|0.227ms
array.push|1,000,000|21.435ms
new Array(length)|1,000,000|6.375ms
array.push|100,000,000|1,424.568ms
new Array(length)|100,000,000|3,897.683ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.035ms
array.push|10,000|9.612ms
new Array(length)|10,000|6.001ms
array.push|1,000,000|170.135ms
new Array(length)|1,000,000|3.931ms
array.push|100,000,000|1,673.875ms
new Array(length)|100,000,000|4,635.903ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|81|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|330,057|86|
|[True conditional] Using constructor name|329,357|89|
|[True conditional] Check if property is valid then instanceof |333,729|88|
|[False conditional] Using instanceof only|1,279,653,863|100|
|[False conditional] Using constructor name|1,277,428,056|99|
|[False conditional] Check if property is valid then instanceof |1,278,735,407|99|


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,010,485|92|
|fromUnixToISOString(new Date())|1,906,914|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,830|82|
|Intl.DateTimeFormat().format(new Date())|12,150|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,962|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,168|68|
|Reusing Intl.DateTimeFormat()|448,691|82|
|Date.toLocaleDateString()|521,852|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,882|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|851,608|95|
|Using brackets {}|865,988|100|
|Using '' + |861,038|95|
|Using date.toString()|942,201|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,085,578|97|
|Using undefined assignment|1,269,133,840|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|325,455|88|
|NodeError|324,524|87|
|NodeError Range|324,166|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,274,701|97|
|Function returning explicitly undefined|1,289,510|94|
|Function returning implicitly undefined|1,310,425|97|
|Function returning string|1,291,504|97|
|Function returning integer|1,306,657|95|
|Function returning float|1,298,237|99|
|Function returning functions|1,271,260|93|
|Function returning arrow functions|1,271,602|94|
|Function returning empty object|1,299,590|98|
|Function returning empty array|1,294,293|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,274,745,345|94|
|using Array.includes (first item)|1,270,256,789|96|
|Using raw comparison|1,271,307,679|94|
|Using raw comparison (first item)|1,271,456,609|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,560,199|96|
|Using Object.getOwnPropertyNames()|84,498,348|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|1,277,446,066|93|
|Length = 10_000 - Array[length - 1]|1,275,521,838|97|
|Length = 1_000_000 - Array[length - 1]|1,275,614,000|98|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|63,993,967|93|
|Object.create({})|1,665,667|79|
|Cached Empty.prototype|1,276,839,384|100|
|Empty.prototype|1,879,214|85|
|Empty class|1,089,902|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,275,972,353|95|
|Using optional chain (obj.field?.field2) (undefined)|1,277,601,795|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,278,801,374|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,279,172,621|101|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|313,852,397|96|
|Using parseInt(x, 10) - big number (10 len)|14,660,118|97|
|Using + - small number (2 len)|1,277,540,238|92|
|Using + - big number (10 len)|1,277,378,726|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|824,707|79|
|Using ? operator to avoid rejection|866,227|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,045,938|98|
|Raw usage underscore usage|7,302,142|94|
|Manipulating private properties using #|2,717,921|94|
|Manipulating private properties using underscore(_)|1,258,815,271|93|
|Manipulating private properties using Symbol|1,256,314,701|101|
|Manipulating private properties using PrivateSymbol|47,034,883|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,303,953|98|
|Adding property in the object creation - small object|2,311,016|95|
|Adding property after the function creation - small class|191,142|89|
|Adding property in the function creation - small class|192,511|89|
|Adding property after the class creation - small class|167,243|86|
|Adding property in the class creation - small class|167,672|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,276,381,086|99|
|Getter|95,002,165|98|
|Method|1,278,390,885|100|
|DefineProperty (getter)|1,275,759,754|97|
|DefineProperty (getter & enumerable=false)|94,948,465|98|
|DefineProperty (getter & configurable=false)|1,268,046,418|93|
|DefineProperty (getter & enumerable=false & configurable=false)|94,849,307|93|
|DefineProperty (writable)|1,276,783,417|99|
|DefineProperty (writable & enumerable=false)|1,277,743,740|96|
|DefineProperty (writable & enumerable=false & configurable=false)|1,275,441,590|99|
|DefineProperties (getter)|94,579,853|99|
|DefineProperties (getter & enumerable=false)|93,519,727|98|
|DefineProperties (getter & enumerable=false & configurable=false)|92,993,186|94|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|930,475,846|97|
|Setter|6,320,427|97|
|Method|766,485,094|99|
|DefineProperty (setter)|928,599,910|96|
|DefineProperty (setter & enumerable=false)|6,353,837|95|
|DefineProperty (setter & configurable=false)|6,357,714|95|
|DefineProperty (setter & enumerable=false & configurable=false)|6,377,311|94|
|DefineProperty (writable)|1,276,446,173|98|
|DefineProperty (writable & enumerable=false)|195,635,577|16|
|DefineProperty (writable & enumerable=false & configurable=false)|143,557,397|86|
|DefineProperties (setter)|112,506,916|87|
|DefineProperties (setter & enumerable=false)|6,404,856|97|
|DefineProperties (setter & enumerable=false & configurable=false)|6,297,782|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,786,939|94|
|Using replaceAll()|2,587,887|97|
|Using replaceAll(//g)|2,493,264|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|232,303|99|
|Sort using first char|1,065,550|98|
|Sort using localeCompare|549,492|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,820|98|
|{...smallObject} - Total keys: 2|97,889,480|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,039|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,598|99|
|{ ...bigObject, ...anotherBigObject }|1,142|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,136,361|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|30,435,430|94|
|{ ...smallObject, ...anotherSmallObject }|20,360,662|92|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,278,337,677|94|
|Using backtick (`)|1,279,614,330|96|
|Using array.join|10,265,577|95|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,309,852|97|
|Using indexof|1,279,260,905|95|
|Using RegExp.test|18,247,607|98|
|Using RegExp.text with cached regex pattern|18,654,325|96|
|Using new RegExp.test|4,149,728|95|
|Using new RegExp.test with cached regex pattern|4,992,034|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|186,265,030|92|
|Using this|195,104,139|99|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,791,666|98|
|Date.now()|19,460,095|94|
