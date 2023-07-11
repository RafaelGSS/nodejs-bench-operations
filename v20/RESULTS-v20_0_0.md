# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v20.0.0`
* __Run:__ Tue Jul 11 2023 22:30:52 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|777,185,324|94|
|Using dot notation|773,779,597|92|
|Using define property (writable)|3,232,824|94|
|Using define property initialized (writable)|4,222,242|92|
|Using define property (getter)|1,768,300|92|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.07ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.611ms
new Array(length)|10,000|0.432ms
array.push|1,000,000|40.953ms
new Array(length)|1,000,000|8.826ms
array.push|100,000,000|2,434.562ms
new Array(length)|100,000,000|5,682.805ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.018ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.426ms
new Array(length)|10,000|0.246ms
array.push|1,000,000|33.133ms
new Array(length)|1,000,000|5.955ms
array.push|100,000,000|3,444.446ms
new Array(length)|100,000,000|5,314.833ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|197|82|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,875|54|
|[True conditional] Using constructor name|143,893|90|
|[True conditional] Check if property is valid then instanceof |145,317|94|
|[False conditional] Using instanceof only|777,518,383|93|
|[False conditional] Using constructor name|779,107,185|87|
|[False conditional] Check if property is valid then instanceof |779,463,083|91|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,130|90|
|crypto.verify('RSA-SHA256')|4,148|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|685,688|93|
|fromUnixToISOString(new Date())|923,259|92|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,637|89|
|Intl.DateTimeFormat().format(new Date())|7,418|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,185|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,361|90|
|Reusing Intl.DateTimeFormat()|360,495|94|
|Date.toLocaleDateString()|409,838|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,795|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|550,067|92|
|Using brackets {}|555,680|93|
|Using '' + |556,120|96|
|Using date.toString()|585,415|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,764,586|91|
|Using undefined assignment|775,838,442|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|179,119|55|
|NodeError|142,092|90|
|NodeError Range|143,212|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,325,869|94|
|Function returning explicitly undefined|1,318,159|91|
|Function returning implicitly undefined|1,353,198|95|
|Function returning string|1,322,563|93|
|Function returning integer|1,344,966|87|
|Function returning float|1,321,793|94|
|Function returning functions|1,317,029|92|
|Function returning arrow functions|1,325,592|96|
|Function returning empty object|1,325,631|97|
|Function returning empty array|1,361,347|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|773,582,652|92|
|using Array.includes (first item)|775,221,870|92|
|Using raw comparison|777,811,718|93|
|Using raw comparison (first item)|778,868,177|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|59,807,097|91|
|Using Object.getOwnPropertyNames()|59,695,317|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|774,551,851|94|
|Length = 10_000 - Array.at|774,174,493|97|
|Length = 1_000_000 - Array.at|774,259,383|96|
|Length = 100 - Array[length - 1]|776,713,245|93|
|Length = 10_000 - Array[length - 1]|775,238,381|97|
|Length = 1_000_000 - Array[length - 1]|776,172,895|93|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,688,089|91|
|Object.create({})|1,820,403|86|
|Cached Empty.prototype|778,850,216|94|
|Empty.prototype|1,668,774|82|
|Empty class|1,118,198|82|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|778,293,670|92|
|Using optional chain (obj.field?.field2) (undefined)|778,695,481|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|778,192,342|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|777,978,763|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|775,277,639|93|
|Using parseInt(x, 10) - big number (10 len)|778,915,733|92|
|Using + - small number (2 len)|777,274,140|92|
|Using + - big number (10 len)|777,040,885|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|909,783|79|
|Using ? operator to avoid rejection|976,431|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|773,142,455|91|
|Raw usage underscore usage|774,117,852|95|
|Manipulating private properties using #|764,020,237|91|
|Manipulating private properties using underscore(_)|765,191,107|90|
|Manipulating private properties using Symbol|764,483,245|95|
|Manipulating private properties using PrivateSymbol|37,674,177|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,518,461|91|
|Adding property in the object creation - small object|3,530,389|94|
|Adding property after the function creation - small class|194,756|83|
|Adding property in the function creation - small class|201,701|87|
|Adding property after the class creation - small class|169,982|81|
|Adding property in the class creation - small class|170,148|80|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|776,884,607|91|
|Getter|67,851,951|96|
|Method|778,548,634|93|
|DefineProperty (getter)|778,274,487|94|
|DefineProperty (getter & enumerable=false)|67,652,873|93|
|DefineProperty (getter & configurable=false)|777,931,899|93|
|DefineProperty (getter & enumerable=false & configurable=false)|67,743,922|98|
|DefineProperty (writable)|777,671,465|95|
|DefineProperty (writable & enumerable=false)|778,842,676|97|
|DefineProperty (writable & enumerable=false & configurable=false)|779,108,699|93|
|DefineProperties (getter)|47,191,794|70|
|DefineProperties (getter & enumerable=false)|41,051,579|91|
|DefineProperties (getter & enumerable=false & configurable=false)|67,845,383|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|773,595,579|94|
|Setter|8,756,014|95|
|Method|733,949,071|87|
|DefineProperty (setter)|774,318,658|96|
|DefineProperty (setter & enumerable=false)|8,659,185|92|
|DefineProperty (setter & configurable=false)|8,690,954|93|
|DefineProperty (setter & enumerable=false & configurable=false)|8,644,224|94|
|DefineProperty (writable)|775,872,723|93|
|DefineProperty (writable & enumerable=false)|776,258,316|95|
|DefineProperty (writable & enumerable=false & configurable=false)|170,952,876|23|
|DefineProperties (setter)|79,519,837|84|
|DefineProperties (setter & enumerable=false)|8,612,534|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,539,105|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,445,386|87|
|Using replaceAll()|2,271,693|93|
|Using replaceAll(//g)|2,184,619|94|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,887,689|90|
|{ ...object, __proto__: null }|19,809,050|90|
|{ ...object, newProp: true }|678,808|85|
|structuredClone|201,918|94|
|JSON.parse + JSON.stringify|149,056|92|
|loop + object.keys starting with {}|385,693|93|
|loop + object.keys starting with { __proto__: null }|507,597|94|
|loop + object.keys starting with { randomProp: true }|390,329|96|
|object.keys + reduce(FN, {})|371,882|89|
|object.keys + reduce(FN, { __proto__: null })|487,608|90|
|object.keys + reduce(FN, { newProp: true })|385,397|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,429|90|
|Sort using first char|957,540|89|
|Sort using localeCompare|868,241|87|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,385|94|
|{...smallObject} - Total keys: 2|70,426,818|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|841|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,979|97|
|{ ...bigObject, ...anotherBigObject }|873|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,877,100|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,964,726|95|
|{ ...smallObject, ...anotherSmallObject }|17,935,467|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,670 ops/sec ±0.89% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 466 ops/sec ±0.30% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,278 ops/sec ±0.57% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 950 ops/sec ±13.51% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|778,112,469|91|
|Using backtick (`)|775,893,151|95|
|Using array.join|7,036,078|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|775,608,950|94|
|Using indexof|776,844,503|94|
|Using RegExp.test|12,340,770|91|
|Using RegExp.text with cached regex pattern|13,390,995|94|
|Using new RegExp.test|3,480,463|97|
|Using new RegExp.test with cached regex pattern|4,106,467|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|771,889,429|94|
|Using this|773,551,681|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,656,513|93|
|Date.now()|1,859,268|97|
