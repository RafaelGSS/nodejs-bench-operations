# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Thu Apr 13 2023 10:03:38 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,262,786,112|98|
|Using dot notation|1,257,254,487|98|
|Using define property (writable)|3,828,278|95|
|Using define property initialized (writable)|4,625,565|97|
|Using define property (getter)|2,257,199|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.059ms
new Array(length)|100|0.006ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.382ms
new Array(length)|10,000|0.187ms
array.push|1,000,000|19.981ms
new Array(length)|1,000,000|13.994ms
array.push|100,000,000|1,449.747ms
new Array(length)|100,000,000|4,158.76ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.013ms
array.push|100|0.014ms
new Array(length)|100|0.008ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.349ms
new Array(length)|10,000|3.03ms
array.push|1,000,000|63.433ms
new Array(length)|1,000,000|3.66ms
array.push|100,000,000|2,225.98ms
new Array(length)|100,000,000|3,871.069ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|302|88|
|Array.from|19|51|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,094|64|
|[True conditional] Using constructor name|208,910|97|
|[True conditional] Check if property is valid then instanceof |211,359|99|
|[False conditional] Using instanceof only|1,281,514,339|100|
|[False conditional] Using constructor name|1,269,364,538|100|
|[False conditional] Check if property is valid then instanceof |1,274,098,034|85|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|31,394|93|
|crypto.verify('RSA-SHA256')|29,901|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,076,662|97|
|fromUnixToISOString(new Date())|1,822,803|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,747|84|
|Intl.DateTimeFormat().format(new Date())|12,584|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,156|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,848|87|
|Reusing Intl.DateTimeFormat()|512,817|93|
|Date.toLocaleDateString()|509,527|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,069|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|863,502|98|
|Using brackets {}|886,802|96|
|Using '' + |881,820|98|
|Using date.toString()|958,124|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,280,163|94|
|Using undefined assignment|1,280,285,149|101|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|243,931|61|
|NodeError|205,705|93|
|NodeError Range|205,287|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,240,763|97|
|Function returning explicitly undefined|1,233,033|98|
|Function returning implicitly undefined|1,238,957|99|
|Function returning string|1,220,478|96|
|Function returning integer|1,220,212|96|
|Function returning float|1,212,901|97|
|Function returning functions|1,203,493|95|
|Function returning arrow functions|1,227,928|98|
|Function returning empty object|1,243,242|97|
|Function returning empty array|1,228,061|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,280,796,904|100|
|using Array.includes (first item)|1,281,062,803|99|
|Using raw comparison|1,282,287,034|100|
|Using raw comparison (first item)|1,281,992,855|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,372,126|95|
|Using Object.getOwnPropertyNames()|83,581,864|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,871,355|95|
|Length = 10_000 - Array.at|18,864,634|94|
|Length = 1_000_000 - Array.at|18,740,566|88|
|Length = 100 - Array[length - 1]|1,281,832,298|101|
|Length = 10_000 - Array[length - 1]|1,281,938,524|99|
|Length = 1_000_000 - Array[length - 1]|1,280,891,807|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,286,273|97|
|Object.create({})|1,936,316|89|
|Cached Empty.prototype|1,281,807,594|98|
|Empty.prototype|1,998,906|89|
|Empty class|1,186,814|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,282,087,392|94|
|Using optional chain (obj.field?.field2) (undefined)|1,281,535,003|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,281,114,879|101|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,280,059,046|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|314,269,254|90|
|Using parseInt(x, 10) - big number (10 len)|15,003,056|96|
|Using + - small number (2 len)|1,276,590,970|100|
|Using + - big number (10 len)|1,280,374,105|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|896,501|83|
|Using ? operator to avoid rejection|926,857|88|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|10,165,156|94|
|Raw usage underscore usage|7,784,424|94|
|Manipulating private properties using #|3,068,089|96|
|Manipulating private properties using underscore(_)|1,261,315,609|96|
|Manipulating private properties using Symbol|1,261,972,436|93|
|Manipulating private properties using PrivateSymbol|45,184,752|100|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,885,908|98|
|Adding property in the object creation - small object|2,890,883|99|
|Adding property after the function creation - small class|199,875|89|
|Adding property in the function creation - small class|202,381|93|
|Adding property after the class creation - small class|177,633|86|
|Adding property in the class creation - small class|177,797|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,283,111,155|99|
|Getter|96,680,744|96|
|Method|1,283,339,601|98|
|DefineProperty (getter)|1,276,832,711|98|
|DefineProperty (getter & enumerable=false)|97,126,656|98|
|DefineProperty (getter & configurable=false)|1,272,267,339|98|
|DefineProperty (getter & enumerable=false & configurable=false)|96,450,914|97|
|DefineProperty (writable)|1,279,936,614|92|
|DefineProperty (writable & enumerable=false)|926,505,661|73|
|DefineProperty (writable & enumerable=false & configurable=false)|143,181,865|86|
|DefineProperties (getter)|52,944,045|89|
|DefineProperties (getter & enumerable=false)|96,622,333|93|
|DefineProperties (getter & enumerable=false & configurable=false)|96,778,265|98|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|961,353,875|100|
|Setter|7,372,167|97|
|Method|960,981,043|95|
|DefineProperty (setter)|955,233,191|96|
|DefineProperty (setter & enumerable=false)|7,295,442|98|
|DefineProperty (setter & configurable=false)|7,235,599|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,264,367|98|
|DefineProperty (writable)|1,275,464,433|91|
|DefineProperty (writable & enumerable=false)|1,279,320,638|94|
|DefineProperty (writable & enumerable=false & configurable=false)|631,030,632|53|
|DefineProperties (setter)|126,656,456|89|
|DefineProperties (setter & enumerable=false)|7,339,215|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,299,251|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,932,213|95|
|Using replaceAll()|2,638,795|98|
|Using replaceAll(//g)|2,572,310|99|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|242,971|97|
|Sort using first char|1,075,535|95|
|Sort using localeCompare|559,874|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,752|93|
|{...smallObject} - Total keys: 2|97,133,002|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,931|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,265|99|
|{ ...bigObject, ...anotherBigObject }|1,117|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,519,182|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,523,311|91|
|{ ...smallObject, ...anotherSmallObject }|21,287,698|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,504 ops/sec ±0.51% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 487 ops/sec ±0.18% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,791 ops/sec ±0.24% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,646 ops/sec ±9.78% (69 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,281,184,469|100|
|Using backtick (`)|1,282,128,270|99|
|Using array.join|9,300,536|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,806,155|95|
|Using indexof|1,280,204,396|99|
|Using RegExp.test|14,751,706|96|
|Using RegExp.text with cached regex pattern|15,052,939|93|
|Using new RegExp.test|4,130,111|98|
|Using new RegExp.test with cached regex pattern|4,627,491|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|188,106,091|93|
|Using this|190,033,185|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,847,824|95|
|Date.now()|19,438,615|99|
