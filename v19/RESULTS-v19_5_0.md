# Node.js Benchmark Operations

* __Machine:__ linux x64 | 6 vCPUs | 15.6GB Mem
* __Node:__ `v19.5.0`
* __Run:__ Thu Apr 13 2023 02:01:51 GMT-0300 (Brasilia Standard Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|1,288,257,183|99|
|Using dot notation|1,286,756,975|94|
|Using define property (writable)|3,984,024|94|
|Using define property initialized (writable)|5,073,729|95|
|Using define property (getter)|2,236,514|96|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.005ms
array.push|100|0.02ms
new Array(length)|100|0.009ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.399ms
new Array(length)|10,000|0.33ms
array.push|1,000,000|26.806ms
new Array(length)|1,000,000|5.172ms
array.push|100,000,000|1,550.124ms
new Array(length)|100,000,000|3,866.777ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.014ms
array.push|100|0.013ms
new Array(length)|100|0.008ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.363ms
new Array(length)|10,000|0.196ms
array.push|1,000,000|191.944ms
new Array(length)|1,000,000|8.334ms
array.push|100,000,000|1,720.175ms
new Array(length)|100,000,000|3,997.632ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|347|88|
|Array.from|18|49|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,379|62|
|[True conditional] Using constructor name|199,268|97|
|[True conditional] Check if property is valid then instanceof |200,898|98|
|[False conditional] Using instanceof only|1,290,110,109|99|
|[False conditional] Using constructor name|1,291,127,740|98|
|[False conditional] Check if property is valid then instanceof |1,291,911,531|99|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,802|95|
|crypto.verify('RSA-SHA256')|6,789|100|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,217,168|96|
|fromUnixToISOString(new Date())|1,949,625|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,515|86|
|Intl.DateTimeFormat().format(new Date())|10,396|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,403|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,590|81|
|Reusing Intl.DateTimeFormat()|548,767|96|
|Date.toLocaleDateString()|555,478|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,289|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|919,591|98|
|Using brackets {}|943,475|95|
|Using '' + |940,352|98|
|Using date.toString()|1,017,459|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,321,579|97|
|Using undefined assignment|1,289,468,809|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|231,668|60|
|NodeError|193,978|95|
|NodeError Range|193,645|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,462,645|96|
|Function returning explicitly undefined|1,453,723|95|
|Function returning implicitly undefined|1,473,995|98|
|Function returning string|1,450,964|97|
|Function returning integer|1,477,947|95|
|Function returning float|1,460,914|97|
|Function returning functions|1,429,156|96|
|Function returning arrow functions|1,458,700|99|
|Function returning empty object|1,466,600|97|
|Function returning empty array|1,470,469|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|1,285,292,407|100|
|using Array.includes (first item)|1,282,108,141|98|
|Using raw comparison|1,284,077,218|95|
|Using raw comparison (first item)|1,283,834,303|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,559,140|96|
|Using Object.getOwnPropertyNames()|88,055,637|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,280,778,324|98|
|Length = 10_000 - Array.at|1,280,802,148|98|
|Length = 1_000_000 - Array.at|1,284,882,713|98|
|Length = 100 - Array[length - 1]|1,282,232,287|100|
|Length = 10_000 - Array[length - 1]|1,281,820,183|98|
|Length = 1_000_000 - Array[length - 1]|1,286,376,193|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,516,944|95|
|Object.create({})|2,374,858|85|
|Cached Empty.prototype|1,291,042,808|99|
|Empty.prototype|2,184,566|86|
|Empty class|1,337,045|90|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|1,290,737,197|99|
|Using optional chain (obj.field?.field2) (undefined)|1,290,485,216|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|1,290,427,627|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|1,290,431,694|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|348,641,681|98|
|Using parseInt(x, 10) - big number (10 len)|20,035,604|97|
|Using + - small number (2 len)|1,291,089,861|101|
|Using + - big number (10 len)|1,291,309,266|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,067,184|78|
|Using ? operator to avoid rejection|1,090,833|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|1,279,404,194|98|
|Raw usage underscore usage|1,279,469,460|98|
|Manipulating private properties using #|1,267,939,743|99|
|Manipulating private properties using underscore(_)|1,267,553,518|97|
|Manipulating private properties using Symbol|1,272,610,959|96|
|Manipulating private properties using PrivateSymbol|53,095,594|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,012,586|98|
|Adding property in the object creation - small object|3,014,799|99|
|Adding property after the function creation - small class|216,664|89|
|Adding property in the function creation - small class|218,218|93|
|Adding property after the class creation - small class|192,877|90|
|Adding property in the class creation - small class|193,030|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|1,290,805,673|100|
|Getter|99,129,265|100|
|Method|1,290,439,877|95|
|DefineProperty (getter)|1,290,508,122|99|
|DefineProperty (getter & enumerable=false)|99,525,358|97|
|DefineProperty (getter & configurable=false)|1,290,868,513|97|
|DefineProperty (getter & enumerable=false & configurable=false)|98,912,730|97|
|DefineProperty (writable)|1,288,488,222|101|
|DefineProperty (writable & enumerable=false)|1,284,233,972|99|
|DefineProperty (writable & enumerable=false & configurable=false)|459,123,664|38|
|DefineProperties (getter)|58,826,155|92|
|DefineProperties (getter & enumerable=false)|98,284,763|98|
|DefineProperties (getter & enumerable=false & configurable=false)|99,370,475|99|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|966,967,564|101|
|Setter|8,291,699|95|
|Method|966,630,252|99|
|DefineProperty (setter)|966,950,977|98|
|DefineProperty (setter & enumerable=false)|8,196,653|94|
|DefineProperty (setter & configurable=false)|8,219,290|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,145,884|93|
|DefineProperty (writable)|1,282,224,720|100|
|DefineProperty (writable & enumerable=false)|843,842,115|67|
|DefineProperty (writable & enumerable=false & configurable=false)|153,770,864|84|
|DefineProperties (setter)|119,192,282|90|
|DefineProperties (setter & enumerable=false)|8,235,510|93|
|DefineProperties (setter & enumerable=false & configurable=false)|8,241,223|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,203,800|98|
|Using replaceAll()|2,562,151|100|
|Using replaceAll(//g)|2,793,939|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|239,925|96|
|Sort using first char|1,070,001|100|
|Sort using localeCompare|1,034,598|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,817|95|
|{...smallObject} - Total keys: 2|104,922,360|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,923|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,524|98|
|{ ...bigObject, ...anotherBigObject }|1,129|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,909,549|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,495,836|90|
|{ ...smallObject, ...anotherSmallObject }|21,369,080|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,275 ops/sec ±0.49% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 503 ops/sec ±0.11% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,920 ops/sec ±0.30% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,681 ops/sec ±7.76% (75 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|1,290,141,453|99|
|Using backtick (`)|1,290,494,071|98|
|Using array.join|10,358,352|95|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|1,290,655,132|98|
|Using indexof|1,290,622,627|100|
|Using RegExp.test|18,225,518|93|
|Using RegExp.text with cached regex pattern|19,003,765|95|
|Using new RegExp.test|3,889,710|97|
|Using new RegExp.test with cached regex pattern|4,156,085|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|189,548,996|98|
|Using this|215,076,704|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,458,429|98|
|Date.now()|21,694,526|99|
