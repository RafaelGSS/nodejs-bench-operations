# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Tue Jul 11 2023 22:01:53 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|772,301,350|91|
|Using dot notation|768,427,708|97|
|Using define property (writable)|3,171,687|93|
|Using define property initialized (writable)|3,916,355|93|
|Using define property (getter)|1,660,004|88|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.096ms
new Array(length)|100|0.008ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.425ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|31.783ms
new Array(length)|1,000,000|20.412ms
array.push|100,000,000|2,485.688ms
new Array(length)|100,000,000|5,208.838ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.577ms
new Array(length)|10,000|4.085ms
array.push|1,000,000|330.846ms
new Array(length)|1,000,000|6.317ms
array.push|100,000,000|3,106.984ms
new Array(length)|100,000,000|5,700.325ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|201|83|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|192,716|56|
|[True conditional] Using constructor name|147,215|92|
|[True conditional] Check if property is valid then instanceof |148,716|91|
|[False conditional] Using instanceof only|772,648,946|94|
|[False conditional] Using constructor name|770,858,246|93|
|[False conditional] Check if property is valid then instanceof |771,811,955|92|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,237|88|
|crypto.verify('RSA-SHA256')|17,622|91|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|912,971|90|
|fromUnixToISOString(new Date())|784,809|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,775|88|
|Intl.DateTimeFormat().format(new Date())|6,554|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,979|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,716|87|
|Reusing Intl.DateTimeFormat()|400,855|95|
|Date.toLocaleDateString()|362,429|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,349|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|502,791|95|
|Using brackets {}|505,789|94|
|Using '' + |513,019|96|
|Using date.toString()|532,949|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,478,912|90|
|Using undefined assignment|773,155,840|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|186,923|54|
|NodeError|144,394|91|
|NodeError Range|145,436|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,357,940|93|
|Function returning explicitly undefined|1,339,580|94|
|Function returning implicitly undefined|1,354,735|85|
|Function returning string|1,350,272|91|
|Function returning integer|1,361,147|93|
|Function returning float|1,355,530|94|
|Function returning functions|1,324,493|92|
|Function returning arrow functions|1,323,966|95|
|Function returning empty object|1,372,125|94|
|Function returning empty array|1,346,582|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|770,922,644|93|
|using Array.includes (first item)|771,240,447|93|
|Using raw comparison|772,368,266|88|
|Using raw comparison (first item)|772,952,800|92|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,460,991|88|
|Using Object.getOwnPropertyNames()|56,568,446|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,777,658|95|
|Length = 10_000 - Array.at|18,834,858|89|
|Length = 1_000_000 - Array.at|18,669,750|92|
|Length = 100 - Array[length - 1]|768,919,344|91|
|Length = 10_000 - Array[length - 1]|769,604,444|95|
|Length = 1_000_000 - Array[length - 1]|768,471,838|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,310,741|90|
|Object.create({})|1,543,296|76|
|Cached Empty.prototype|773,316,360|94|
|Empty.prototype|1,557,571|80|
|Empty class|998,655|88|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|773,540,677|89|
|Using optional chain (obj.field?.field2) (undefined)|773,810,106|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|773,967,328|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|772,213,333|92|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,266,457|91|
|Using parseInt(x, 10) - big number (10 len)|14,269,368|93|
|Using + - small number (2 len)|772,510,812|95|
|Using + - big number (10 len)|772,749,281|95|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|822,941|77|
|Using ? operator to avoid rejection|885,724|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,657,912|93|
|Raw usage underscore usage|7,055,417|92|
|Manipulating private properties using #|2,574,742|88|
|Manipulating private properties using underscore(_)|759,975,866|98|
|Manipulating private properties using Symbol|755,799,336|97|
|Manipulating private properties using PrivateSymbol|30,580,402|89|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,534,937|96|
|Adding property in the object creation - small object|2,546,562|97|
|Adding property after the function creation - small class|177,911|86|
|Adding property in the function creation - small class|178,030|86|
|Adding property after the class creation - small class|145,334|81|
|Adding property in the class creation - small class|146,311|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|772,860,939|93|
|Getter|64,759,151|92|
|Method|772,459,953|92|
|DefineProperty (getter)|768,393,179|90|
|DefineProperty (getter & enumerable=false)|64,555,791|94|
|DefineProperty (getter & configurable=false)|770,428,620|87|
|DefineProperty (getter & enumerable=false & configurable=false)|57,181,037|94|
|DefineProperty (writable)|772,442,759|92|
|DefineProperty (writable & enumerable=false)|390,045,314|54|
|DefineProperty (writable & enumerable=false & configurable=false)|90,791,661|78|
|DefineProperties (getter)|39,844,763|85|
|DefineProperties (getter & enumerable=false)|39,591,684|84|
|DefineProperties (getter & enumerable=false & configurable=false)|64,653,106|95|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|768,464,522|96|
|Setter|7,178,888|91|
|Method|767,620,090|92|
|DefineProperty (setter)|767,486,508|95|
|DefineProperty (setter & enumerable=false)|7,409,963|92|
|DefineProperty (setter & configurable=false)|7,405,011|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,336,795|95|
|DefineProperty (writable)|769,576,880|90|
|DefineProperty (writable & enumerable=false)|770,011,979|90|
|DefineProperty (writable & enumerable=false & configurable=false)|160,701,068|23|
|DefineProperties (setter)|70,889,246|79|
|DefineProperties (setter & enumerable=false)|6,691,116|90|
|DefineProperties (setter & enumerable=false & configurable=false)|7,361,660|92|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,389,621|94|
|Using replaceAll()|2,173,799|97|
|Using replaceAll(//g)|2,107,207|90|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,397,371|90|
|{ ...object, __proto__: null }|13,717,160|91|
|{ ...object, newProp: true }|565,507|90|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|146,221|94|
|loop + object.keys starting with {}|349,582|96|
|loop + object.keys starting with { __proto__: null }|474,698|96|
|loop + object.keys starting with { randomProp: true }|368,396|94|
|object.keys + reduce(FN, {})|351,489|96|
|object.keys + reduce(FN, { __proto__: null })|471,464|92|
|object.keys + reduce(FN, { newProp: true })|379,179|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,755|95|
|Sort using first char|869,827|91|
|Sort using localeCompare|413,925|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,368|94|
|{...smallObject} - Total keys: 2|67,769,038|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,412|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,813|96|
|{ ...bigObject, ...anotherBigObject }|855|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,914,071|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,875,889|93|
|{ ...smallObject, ...anotherSmallObject }|16,402,936|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,758 ops/sec ±1.14% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 418 ops/sec ±0.81% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,887 ops/sec ±0.55% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 960 ops/sec ±14.03% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|772,588,705|93|
|Using backtick (`)|771,708,628|89|
|Using array.join|6,899,608|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,413,013|96|
|Using indexof|772,826,717|92|
|Using RegExp.test|12,183,856|92|
|Using RegExp.text with cached regex pattern|12,765,867|96|
|Using new RegExp.test|3,735,883|93|
|Using new RegExp.test with cached regex pattern|4,347,379|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|183,925,519|91|
|Using this|180,138,680|84|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,579,838|93|
|Date.now()|1,803,190|93|
