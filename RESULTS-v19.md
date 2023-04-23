# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v19.9.0`
* __Run:__ Sun Apr 23 2023 13:46:27 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|853,806,434|99|
|Using dot notation|840,805,198|98|
|Using define property (writable)|3,460,309|79|
|Using define property initialized (writable)|5,582,951|96|
|Using define property (getter)|2,358,719|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.007ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.337ms
new Array(length)|10,000|0.277ms
array.push|1,000,000|28.272ms
new Array(length)|1,000,000|7.294ms
array.push|100,000,000|1,743.999ms
new Array(length)|100,000,000|4,286.493ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.016ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.227ms
array.push|1,000,000|22.089ms
new Array(length)|1,000,000|7.563ms
array.push|100,000,000|2,040.331ms
new Array(length)|100,000,000|4,331.561ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|322|90|
|Array.from|23|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|225,203|52|
|[True conditional] Using constructor name|174,023|97|
|[True conditional] Check if property is valid then instanceof |174,301|93|
|[False conditional] Using instanceof only|855,151,243|98|
|[False conditional] Using constructor name|855,116,888|94|
|[False conditional] Check if property is valid then instanceof |855,617,066|101|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,847|96|
|crypto.verify('RSA-SHA256')|6,872|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,441,618|95|
|fromUnixToISOString(new Date())|2,215,320|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,813|86|
|Intl.DateTimeFormat().format(new Date())|11,037|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,143|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,518|82|
|Reusing Intl.DateTimeFormat()|633,471|94|
|Date.toLocaleDateString()|642,430|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,548|80|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,087,379|94|
|Using brackets {}|1,095,922|97|
|Using '' + |1,092,022|98|
|Using date.toString()|1,197,037|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,670,093|94|
|Using undefined assignment|853,859,516|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|226,284|48|
|NodeError|180,138|96|
|NodeError Range|182,178|99|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,903,519|91|
|Function returning explicitly undefined|1,900,413|99|
|Function returning implicitly undefined|1,953,012|97|
|Function returning string|1,902,585|100|
|Function returning integer|1,951,276|99|
|Function returning float|1,926,178|98|
|Function returning functions|1,848,980|95|
|Function returning arrow functions|1,894,493|99|
|Function returning empty object|1,934,061|97|
|Function returning empty array|1,901,808|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|853,991,808|100|
|using Array.includes (first item)|853,968,017|97|
|Using raw comparison|855,705,509|100|
|Using raw comparison (first item)|855,404,482|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,719,171|96|
|Using Object.getOwnPropertyNames()|94,721,520|100|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|851,769,598|100|
|Length = 10_000 - Array.at|851,730,631|100|
|Length = 1_000_000 - Array.at|852,410,763|99|
|Length = 100 - Array[length - 1]|854,468,790|97|
|Length = 10_000 - Array[length - 1]|854,059,190|98|
|Length = 1_000_000 - Array[length - 1]|853,945,490|100|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|74,930,474|98|
|Object.create({})|2,565,554|85|
|Cached Empty.prototype|853,594,255|100|
|Empty.prototype|2,255,653|86|
|Empty class|1,460,154|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|854,517,996|100|
|Using optional chain (obj.field?.field2) (undefined)|854,848,087|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|855,353,486|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|854,603,989|99|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|285,326,707|94|
|Using parseInt(x, 10) - big number (10 len)|21,717,373|99|
|Using + - small number (2 len)|855,643,401|99|
|Using + - big number (10 len)|854,210,297|101|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,195,986|82|
|Using ? operator to avoid rejection|1,219,459|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|851,357,024|100|
|Raw usage underscore usage|850,973,383|99|
|Manipulating private properties using #|843,134,946|100|
|Manipulating private properties using underscore(_)|843,525,490|98|
|Manipulating private properties using Symbol|842,653,466|96|
|Manipulating private properties using PrivateSymbol|56,746,439|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,769,721|97|
|Adding property in the object creation - small object|3,778,501|98|
|Adding property after the function creation - small class|244,532|90|
|Adding property in the function creation - small class|246,563|92|
|Adding property after the class creation - small class|207,907|84|
|Adding property in the class creation - small class|208,668|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,490,539|100|
|Getter|98,193,809|97|
|Method|854,681,875|98|
|DefineProperty (getter)|854,467,599|100|
|DefineProperty (getter & enumerable=false)|98,077,854|97|
|DefineProperty (getter & configurable=false)|855,843,319|96|
|DefineProperty (getter & enumerable=false & configurable=false)|97,309,579|97|
|DefineProperty (writable)|855,936,325|99|
|DefineProperty (writable & enumerable=false)|855,664,440|97|
|DefineProperty (writable & enumerable=false & configurable=false)|378,289,444|47|
|DefineProperties (getter)|64,461,866|92|
|DefineProperties (getter & enumerable=false)|98,364,517|96|
|DefineProperties (getter & enumerable=false & configurable=false)|98,134,554|99|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|845,683,601|100|
|Setter|12,088,285|96|
|Method|843,331,256|98|
|DefineProperty (setter)|841,414,423|97|
|DefineProperty (setter & enumerable=false)|11,420,139|100|
|DefineProperty (setter & configurable=false)|11,590,481|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,406,090|96|
|DefineProperty (writable)|854,312,777|98|
|DefineProperty (writable & enumerable=false)|419,102,171|52|
|DefineProperty (writable & enumerable=false & configurable=false)|146,259,262|85|
|DefineProperties (setter)|113,606,282|88|
|DefineProperties (setter & enumerable=false)|11,587,036|97|
|DefineProperties (setter & enumerable=false & configurable=false)|11,492,640|99|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,702,748|93|
|Using replaceAll()|3,374,887|99|
|Using replaceAll(//g)|3,246,976|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|265,836|98|
|Sort using first char|1,294,052|99|
|Sort using localeCompare|1,196,558|100|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,019|99|
|{...smallObject} - Total keys: 2|101,072,351|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,142|100|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,851|100|
|{ ...bigObject, ...anotherBigObject }|1,191|99|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,450,065|100|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,489,338|97|
|{ ...smallObject, ...anotherSmallObject }|25,018,265|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,610 ops/sec ±0.73% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 534 ops/sec ±0.37% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 7,080 ops/sec ±0.46% (97 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,067 ops/sec ±46.80% (44 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|853,565,084|100|
|Using backtick (`)|854,997,628|96|
|Using array.join|13,035,291|98|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,194,939|99|
|Using indexof|855,171,555|99|
|Using RegExp.test|16,028,554|99|
|Using RegExp.text with cached regex pattern|16,725,407|98|
|Using new RegExp.test|4,514,736|100|
|Using new RegExp.test with cached regex pattern|5,090,710|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,780,193|96|
|Using this|170,131,922|98|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,570,824|95|
|Date.now()|22,227,076|99|
