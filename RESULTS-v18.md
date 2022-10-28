# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Fri Oct 28 2022 14:45:45 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.035ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.079ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.575ms 
    new Array(length): 0.234ms (faster)

 1,000,000 numbers:
           array.push: 35.013ms 
    new Array(length): 19.411ms (faster)

 100,000,000 numbers:
           array.push: 2,128.549ms (faster)
    new Array(length): 4,947.97ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.103ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.028ms (faster)

 10,000 strings:
           array.push: 0.708ms 
    new Array(length): 0.316ms (faster)

 1,000,000 strings:
           array.push: 367.463ms 
    new Array(length): 9.184ms (faster)

 100,000,000 strings:
           array.push: 2,897.971ms (faster)
    new Array(length): 5,734.009ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|364|86|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,477|55|
|[True conditional] Using constructor name|144,867|93|
|[True conditional] Check if property is valid then instanceof |146,523|92|
|[False conditional] Using instanceof only|709,319,090|95|
|[False conditional] Using constructor name|708,749,458|94|
|[False conditional] Check if property is valid then instanceof |709,045,232|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,080|91|
|Intl.DateTimeFormat().format(new Date())|8,484|80|
|Reusing Intl.DateTimeFormat()|386,244|78|
|Format using date.get*|3,435,347|95|
|new Date() (Baseline)|7,506,643|94|
|Date.now() (Baseline)|15,396,103|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|677,748|96|
|Using brackets {}|688,661|96|
|Using '' + |685,185|96|
|Using date.toString()|732,134|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,401,421|95|
|Using undefined assignment|707,808,235|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|185,728|58|
|NodeError|145,827|95|
|NodeError Range|146,011|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,373,173|94|
|Function returning explicitly undefined|1,324,110|96|
|Function returning implicitly undefined|1,391,190|94|
|Function returning string|1,356,099|97|
|Function returning integer|1,380,694|96|
|Function returning float|1,372,238|95|
|Function returning functions|1,348,836|98|
|Function returning arrow functions|1,343,233|98|
|Function returning empty object|1,378,390|96|
|Function returning empty array|1,386,101|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,175,112|96|
|using Array.includes (first item)|708,544,601|97|
|Using raw comparison|709,903,435|96|
|Using raw comparison (first item)|708,696,831|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,606,333|93|
|Using Object.getOwnPropertyNames()|50,883,456|94|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,810,948|97|
|Length = 10_000 - Array.at|16,772,173|95|
|Length = 1_000_000 - Array.at|16,782,578|93|
|Length = 100 - Array[length - 1]|707,164,803|98|
|Length = 10_000 - Array[length - 1]|704,664,277|98|
|Length = 1_000_000 - Array[length - 1]|702,090,343|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,213,846|94|
|Object.create({})|954,054|78|
|Cached Empty.prototype|708,471,453|96|
|Empty.prototype|1,011,176|77|
|Empty class|682,877|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|707,811,693|98|
|Using optional chain (obj.field?.field2) (undefined)|708,185,390|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,043,506|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|706,509,588|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|178,632,734|96|
|Using parseInt(x, 10) - big number (10 len)|13,929,829|97|
|Using + - small number (2 len)|709,512,986|96|
|Using + - big number (10 len)|707,285,127|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|581,317|75|
|Using ? operator to avoid rejection|620,732|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|213,533,250|87|
|Raw usage underscore usage|186,093,239|87|
|Manipulating private properties using #|128,666,983|82|
|Manipulating private properties using underscore(_)|94,224,562|91|
|Manipulating private properties using Symbol|93,605,529|93|
|Manipulating private properties using PrivateSymbol|29,056,633|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,222,927|95|
|Using replaceAll()|2,030,390|98|
|Using replaceAll(//g)|1,966,068|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,764|95|
|Sort using first char|689,141|96|
|Sort using localeCompare|655,209|95|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,110|93|
|{...smallObject} - Total keys: 2|58,994,701|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,324|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,616|97|
|{ ...bigObject, ...anotherBigObject }|724|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,039,303|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,198,462|96|
|{ ...smallObject, ...anotherSmallObject }|10,877,421|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,603 ops/sec ±0.57% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 412 ops/sec ±0.34% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,515 ops/sec ±0.47% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 767 ops/sec ±16.45% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|709,290,147|95|
|Using backtick (`)|709,300,609|98|
|Using array.join|6,497,227|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|124,741,920|94|
|Using this|122,636,960|93|
