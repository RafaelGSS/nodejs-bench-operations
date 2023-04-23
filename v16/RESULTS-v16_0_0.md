# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v16.0.0`
* __Run:__ Sun Apr 23 2023 12:14:28 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,411,122|97|
|Using dot notation|845,933,630|97|
|Using define property (writable)|4,606,616|99|
|Using define property initialized (writable)|5,824,120|100|
|Using define property (getter)|2,324,784|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.019ms
new Array(length)|100|0.008ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.349ms
new Array(length)|10,000|0.207ms
array.push|1,000,000|23.286ms
new Array(length)|1,000,000|6.874ms
array.push|100,000,000|1,602.39ms
new Array(length)|100,000,000|3,883.146ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.013ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.33ms
new Array(length)|10,000|3.138ms
array.push|1,000,000|64.378ms
new Array(length)|1,000,000|7.591ms
array.push|100,000,000|2,127.016ms
new Array(length)|100,000,000|3,793.969ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|318|89|
|Array.from|21|39|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|402,669|81|
|[True conditional] Using constructor name|401,244|81|
|[True conditional] Check if property is valid then instanceof |398,921|81|
|[False conditional] Using instanceof only|848,383,670|99|
|[False conditional] Using constructor name|848,107,662|93|
|[False conditional] Check if property is valid then instanceof |848,925,097|98|


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,486,533|94|
|fromUnixToISOString(new Date())|2,025,585|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,309|85|
|Intl.DateTimeFormat().format(new Date())|11,495|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,438|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,824|94|
|Reusing Intl.DateTimeFormat()|538,254|99|
|Date.toLocaleDateString()|633,025|101|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,232|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|972,681|99|
|Using brackets {}|1,005,866|98|
|Using '' + |1,007,772|97|
|Using date.toString()|1,093,133|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,354,243|92|
|Using undefined assignment|847,724,205|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|389,346|81|
|NodeError|392,033|83|
|NodeError Range|383,869|81|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,761,345|95|
|Function returning explicitly undefined|1,753,558|99|
|Function returning implicitly undefined|1,794,782|88|
|Function returning string|1,699,966|97|
|Function returning integer|1,801,022|97|
|Function returning float|1,784,421|97|
|Function returning functions|1,716,114|98|
|Function returning arrow functions|1,744,322|98|
|Function returning empty object|1,772,804|99|
|Function returning empty array|1,758,952|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,181,380|100|
|using Array.includes (first item)|846,813,014|99|
|Using raw comparison|848,782,765|101|
|Using raw comparison (first item)|848,003,103|100|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,331,805|91|
|Using Object.getOwnPropertyNames()|89,469,158|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|847,656,615|92|
|Length = 10_000 - Array[length - 1]|847,366,665|94|
|Length = 1_000_000 - Array[length - 1]|846,763,224|99|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|66,101,723|93|
|Object.create({})|1,871,166|80|
|Cached Empty.prototype|847,658,007|100|
|Empty.prototype|2,143,604|88|
|Empty class|1,204,742|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,496,107|97|
|Using optional chain (obj.field?.field2) (undefined)|848,062,501|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,273,933|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|847,479,525|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,129,100|97|
|Using parseInt(x, 10) - big number (10 len)|19,704,517|97|
|Using + - small number (2 len)|848,900,553|101|
|Using + - big number (10 len)|847,413,506|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,043,987|77|
|Using ? operator to avoid rejection|1,113,412|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|12,338,291|97|
|Raw usage underscore usage|10,063,821|100|
|Manipulating private properties using #|3,691,896|100|
|Manipulating private properties using underscore(_)|837,631,175|99|
|Manipulating private properties using Symbol|836,460,397|101|
|Manipulating private properties using PrivateSymbol|48,821,920|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,471,416|98|
|Adding property in the object creation - small object|2,480,322|97|
|Adding property after the function creation - small class|218,033|89|
|Adding property in the function creation - small class|220,716|91|
|Adding property after the class creation - small class|189,342|87|
|Adding property in the class creation - small class|187,811|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,027,374|101|
|Getter|96,658,844|95|
|Method|848,346,980|100|
|DefineProperty (getter)|847,824,287|98|
|DefineProperty (getter & enumerable=false)|96,609,163|97|
|DefineProperty (getter & configurable=false)|848,463,242|98|
|DefineProperty (getter & enumerable=false & configurable=false)|94,902,292|98|
|DefineProperty (writable)|484,917,499|60|
|DefineProperty (writable & enumerable=false)|132,086,487|83|
|DefineProperty (writable & enumerable=false & configurable=false)|134,412,307|80|
|DefineProperties (getter)|56,834,219|87|
|DefineProperties (getter & enumerable=false)|96,862,606|95|
|DefineProperties (getter & enumerable=false & configurable=false)|96,997,325|97|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|846,024,211|99|
|Setter|10,183,395|95|
|Method|750,311,872|89|
|DefineProperty (setter)|845,440,575|99|
|DefineProperty (setter & enumerable=false)|10,309,381|98|
|DefineProperty (setter & configurable=false)|10,435,112|91|
|DefineProperty (setter & enumerable=false & configurable=false)|10,034,062|98|
|DefineProperty (writable)|847,725,700|99|
|DefineProperty (writable & enumerable=false)|222,283,459|28|
|DefineProperty (writable & enumerable=false & configurable=false)|135,548,980|81|
|DefineProperties (setter)|111,757,778|82|
|DefineProperties (setter & enumerable=false)|10,092,056|98|
|DefineProperties (setter & enumerable=false & configurable=false)|10,470,501|99|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,414,455|89|
|Using replaceAll()|3,067,318|99|
|Using replaceAll(//g)|3,001,300|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,752|86|
|Sort using first char|1,236,392|98|
|Sort using localeCompare|602,320|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,027|95|
|{...smallObject} - Total keys: 2|100,778,313|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,202|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,364|99|
|{ ...bigObject, ...anotherBigObject }|1,216|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,809,365|100|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,473,111|99|
|{ ...smallObject, ...anotherSmallObject }|24,294,262|96|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|847,471,622|101|
|Using backtick (`)|847,269,739|97|
|Using array.join|11,487,502|95|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,526,521|98|
|Using indexof|847,896,835|100|
|Using RegExp.test|15,880,077|98|
|Using RegExp.text with cached regex pattern|16,540,451|99|
|Using new RegExp.test|4,901,515|100|
|Using new RegExp.test with cached regex pattern|5,914,157|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,538,788|96|
|Using this|163,611,965|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,464,358|98|
|Date.now()|20,492,435|100|
