# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.1`
* __Run:__ Sat Oct 29 2022 18:14:25 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|375|76|
|Array.from|14|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|289,707|90|
|[True conditional] Using constructor name|288,574|91|
|[True conditional] Check if property is valid then instanceof |286,630|89|
|[False conditional] Using instanceof only|710,180,022|95|
|[False conditional] Using constructor name|714,039,965|95|
|[False conditional] Check if property is valid then instanceof |713,679,464|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,721|82|
|Intl.DateTimeFormat().format(new Date())|7,684|80|
|Reusing Intl.DateTimeFormat()|388,830|84|
|Format using date.get*|3,077,932|96|
|new Date() (Baseline)|7,245,719|98|
|Date.now() (Baseline)|14,378,112|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|698,412|96|
|Using brackets {}|730,117|97|
|Using '' + |718,576|97|
|Using date.toString()|760,156|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,411,168|92|
|Using undefined assignment|711,857,941|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|277,339|87|
|NodeError|279,151|87|
|NodeError Range|273,954|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,364,130|95|
|Function returning explicitly undefined|1,329,290|94|
|Function returning implicitly undefined|1,380,747|97|
|Function returning string|1,341,422|97|
|Function returning integer|1,352,388|95|
|Function returning float|1,352,083|92|
|Function returning functions|1,332,514|94|
|Function returning arrow functions|1,314,012|98|
|Function returning empty object|1,354,104|96|
|Function returning empty array|1,358,287|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|713,521,176|97|
|using Array.includes (first item)|713,285,575|99|
|Using raw comparison|713,035,244|98|
|Using raw comparison (first item)|712,444,859|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,980,507|90|
|Using Object.getOwnPropertyNames()|52,522,460|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|710,082,052|97|
|Length = 10_000 - Array[length - 1]|709,206,279|99|
|Length = 1_000_000 - Array[length - 1]|709,634,921|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,786,723|94|
|Object.create({})|1,284,568|79|
|Cached Empty.prototype|712,649,100|99|
|Empty.prototype|1,317,319|74|
|Empty class|837,033|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,026,696|97|
|Using optional chain (obj.field?.field2) (undefined)|713,542,749|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|713,763,361|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,182,793|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|174,394,834|94|
|Using parseInt(x, 10) - big number (10 len)|11,957,832|94|
|Using + - small number (2 len)|713,328,385|96|
|Using + - big number (10 len)|713,355,168|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|714,593|75|
|Using ? operator to avoid rejection|773,321|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,483,424|92|
|Raw usage underscore usage|7,220,315|94|
|Manipulating private properties using #|2,557,597|99|
|Manipulating private properties using underscore(_)|702,857,637|97|
|Manipulating private properties using Symbol|701,787,300|92|
|Manipulating private properties using PrivateSymbol|30,295,038|93|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|179,018|97|
|Sort using first char|804,113|94|
|Sort using localeCompare|426,542|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,173|92|
|{...smallObject} - Total keys: 2|55,695,548|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,374|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,673|98|
|{ ...bigObject, ...anotherBigObject }|751|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,946,445|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,432,832|94|
|{ ...smallObject, ...anotherSmallObject }|13,484,453|95|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|713,370,569|95|
|Using backtick (`)|714,544,446|98|
|Using array.join|6,946,267|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,523,482|94|
|Using this|131,127,406|97|
