# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.1.0`
* __Run:__ Sat Jan 07 2023 17:12:11 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.013ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.049ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.082ms 
    new Array(length): 0.044ms (faster)

 10,000 numbers:
           array.push: 0.671ms 
    new Array(length): 0.524ms (faster)

 1,000,000 numbers:
           array.push: 53.82ms 
    new Array(length): 12.243ms (faster)

 100,000,000 numbers:
           array.push: 2,237.09ms (faster)
    new Array(length): 6,405.647ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.133ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.057ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.452ms 
    new Array(length): 0.302ms (faster)

 1,000,000 strings:
           array.push: 37.154ms 
    new Array(length): 5.144ms (faster)

 100,000,000 strings:
           array.push: 2,858.208ms (faster)
    new Array(length): 6,513.721ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|313|78|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|150,117|61|
|[True conditional] Using constructor name|119,729|90|
|[True conditional] Check if property is valid then instanceof |120,485|91|
|[False conditional] Using instanceof only|593,422,684|98|
|[False conditional] Using constructor name|592,618,201|93|
|[False conditional] Check if property is valid then instanceof |593,607,190|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,263|82|
|Intl.DateTimeFormat().format(new Date())|7,491|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,635|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,098|94|
|Reusing Intl.DateTimeFormat()|348,106|79|
|Reusing dfWithOptions.format(Date.now())|245,742|93|
|Reusing dfWithOptions.format(new Date())|219,545|95|
|Date.toLocaleDateString()|423,281|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,434|84|
|Format using date.get*|3,068,606|95|
|new Date() (Baseline)|7,188,668|95|
|Date.now() (Baseline)|13,033,388|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|604,621|95|
|Using brackets {}|611,282|97|
|Using '' + |608,246|95|
|Using date.toString()|659,031|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,172,770|93|
|Using undefined assignment|591,108,092|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|151,337|59|
|NodeError|121,464|93|
|NodeError Range|120,591|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,126,856|95|
|Function returning explicitly undefined|1,126,948|94|
|Function returning implicitly undefined|1,144,901|95|
|Function returning string|1,133,638|96|
|Function returning integer|1,131,525|97|
|Function returning float|1,141,848|95|
|Function returning functions|1,101,909|94|
|Function returning arrow functions|1,109,789|96|
|Function returning empty object|1,133,178|93|
|Function returning empty array|1,144,134|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,178,023|91|
|using Array.includes (first item)|589,626,970|95|
|Using raw comparison|592,368,289|94|
|Using raw comparison (first item)|591,883,694|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,313,807|94|
|Using Object.getOwnPropertyNames()|39,638,089|92|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|472,224,385|93|
|Length = 10_000 - Array.at|473,442,089|96|
|Length = 1_000_000 - Array.at|473,615,789|91|
|Length = 100 - Array[length - 1]|590,617,356|92|
|Length = 10_000 - Array[length - 1]|590,042,181|96|
|Length = 1_000_000 - Array[length - 1]|587,846,624|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|32,710,428|93|
|Object.create({})|1,163,977|75|
|Cached Empty.prototype|591,319,082|94|
|Empty.prototype|1,119,355|76|
|Empty class|810,723|79|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,983,774|95|
|Using optional chain (obj.field?.field2) (undefined)|591,462,629|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,216,194|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,608,920|95|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|149,173,988|93|
|Using parseInt(x, 10) - big number (10 len)|12,246,304|98|
|Using + - small number (2 len)|592,900,068|96|
|Using + - big number (10 len)|590,983,065|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|676,113|68|
|Using ? operator to avoid rejection|747,606|79|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|580,052,824|93|
|Raw usage underscore usage|584,294,958|95|
|Manipulating private properties using #|577,953,349|97|
|Manipulating private properties using underscore(_)|579,808,962|92|
|Manipulating private properties using Symbol|574,312,037|94|
|Manipulating private properties using PrivateSymbol|26,578,013|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,753,021|95|
|Adding property in the object creation - small object|1,756,193|97|
|Adding property after the function creation - small class|147,217|85|
|Adding property in the function creation - small class|146,934|83|
|Adding property after the class creation - small class|124,885|85|
|Adding property in the class creation - small class|123,791|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,019,021|89|
|Using replaceAll()|1,815,110|94|
|Using replaceAll(//g)|1,756,616|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|145,393|97|
|Sort using first char|640,983|96|
|Sort using localeCompare|611,182|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,088|95|
|{...smallObject} - Total keys: 2|56,087,379|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,114|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,049|96|
|{ ...bigObject, ...anotherBigObject }|673|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,127,197|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,194,267|95|
|{ ...smallObject, ...anotherSmallObject }|10,417,716|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,238 ops/sec ±16.13% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 320 ops/sec ±4.60% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,250 ops/sec ±0.59% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 796 ops/sec ±18.13% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|582,583,396|91|
|Using backtick (`)|585,484,825|96|
|Using array.join|5,856,042|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|106,879,825|93|
|Using this|119,722,114|96|
