# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.6.0`
* __Run:__ Sun Feb 26 2023 15:52:15 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|778,964,906|97|
|Using dot notation|775,713,263|95|
|Using define property (writable)|3,588,135|92|
|Using define property initialized (writable)|4,763,352|93|
|Using define property (getter)|1,793,214|86|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.043ms
new Array(length)|100|0.01ms
array.push|1,000|0.091ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.455ms
new Array(length)|10,000|2.851ms
array.push|1,000,000|35.907ms
new Array(length)|1,000,000|7.696ms
array.push|100,000,000|2,594.907ms
new Array(length)|100,000,000|5,351.527ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.019ms
new Array(length)|100|0.01ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.033ms
array.push|10,000|1.651ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|77.386ms
new Array(length)|1,000,000|9.469ms
array.push|100,000,000|3,350.703ms
new Array(length)|100,000,000|5,182.782ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|290|80|
|Array.from|16|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,221|52|
|[True conditional] Using constructor name|147,389|92|
|[True conditional] Check if property is valid then instanceof |149,198|94|
|[False conditional] Using instanceof only|777,598,340|96|
|[False conditional] Using constructor name|777,237,019|96|
|[False conditional] Check if property is valid then instanceof |776,206,875|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,056,151|93|
|fromUnixToISOString(new Date())|1,723,769|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,694|77|
|Intl.DateTimeFormat().format(new Date())|8,153|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,731|58|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,263|73|
|Reusing Intl.DateTimeFormat()|592,409|94|
|Date.toLocaleDateString()|625,060|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,404|78|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|680,670|92|
|Using brackets {}|692,263|94|
|Using '' + |686,112|95|
|Using date.toString()|729,029|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,504,274|94|
|Using undefined assignment|776,941,138|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,766|51|
|NodeError|146,040|90|
|NodeError Range|146,986|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,403,267|90|
|Function returning explicitly undefined|1,396,516|91|
|Function returning implicitly undefined|1,401,057|95|
|Function returning string|1,409,774|91|
|Function returning integer|1,407,857|92|
|Function returning float|1,413,680|94|
|Function returning functions|1,350,745|94|
|Function returning arrow functions|1,367,937|89|
|Function returning empty object|1,394,313|92|
|Function returning empty array|1,389,958|91|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|776,622,341|97|
|using Array.includes (first item)|777,044,906|95|
|Using raw comparison|779,459,609|97|
|Using raw comparison (first item)|777,236,225|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,112,947|89|
|Using Object.getOwnPropertyNames()|58,718,376|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|850,384,709|94|
|Length = 10_000 - Array.at|850,691,749|97|
|Length = 1_000_000 - Array.at|851,939,174|94|
|Length = 100 - Array[length - 1]|776,843,269|95|
|Length = 10_000 - Array[length - 1]|775,384,508|95|
|Length = 1_000_000 - Array[length - 1]|775,294,419|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,500,969|92|
|Object.create({})|1,584,144|81|
|Cached Empty.prototype|778,331,667|98|
|Empty.prototype|1,510,765|80|
|Empty class|1,095,776|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|777,520,757|97|
|Using optional chain (obj.field?.field2) (undefined)|776,208,047|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|778,271,127|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|777,546,593|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|228,591,682|96|
|Using parseInt(x, 10) - big number (10 len)|12,709,811|92|
|Using + - small number (2 len)|777,875,831|94|
|Using + - big number (10 len)|777,609,112|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|880,222|81|
|Using ? operator to avoid rejection|909,577|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|775,258,095|95|
|Raw usage underscore usage|774,956,800|92|
|Manipulating private properties using #|762,106,089|93|
|Manipulating private properties using underscore(_)|764,971,311|93|
|Manipulating private properties using Symbol|763,933,830|92|
|Manipulating private properties using PrivateSymbol|22,165,270|91|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,115,557|93|
|Adding property in the object creation - small object|3,132,234|94|
|Adding property after the function creation - small class|199,924|84|
|Adding property in the function creation - small class|202,800|85|
|Adding property after the class creation - small class|172,349|80|
|Adding property in the class creation - small class|170,845|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|777,965,824|93|
|Getter|79,915,561|97|
|Method|777,841,068|96|
|DefineProperty (getter)|776,133,891|92|
|DefineProperty (getter & enumerable=false)|79,866,652|93|
|DefineProperty (getter & configurable=false)|775,838,625|96|
|DefineProperty (getter & enumerable=false & configurable=false)|79,795,050|91|
|DefineProperty (writable)|778,265,794|93|
|DefineProperty (writable & enumerable=false)|779,331,912|95|
|DefineProperty (writable & enumerable=false & configurable=false)|777,477,473|97|
|DefineProperties (getter)|80,040,032|97|
|DefineProperties (getter & enumerable=false)|49,777,052|64|
|DefineProperties (getter & enumerable=false & configurable=false)|48,793,870|89|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|741,003,279|93|
|Setter|8,932,351|98|
|Method|742,172,424|92|
|DefineProperty (setter)|741,280,147|97|
|DefineProperty (setter & enumerable=false)|8,863,815|98|
|DefineProperty (setter & configurable=false)|8,915,647|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,914,510|98|
|DefineProperty (writable)|777,947,295|97|
|DefineProperty (writable & enumerable=false)|776,286,980|94|
|DefineProperty (writable & enumerable=false & configurable=false)|775,871,777|95|
|DefineProperties (setter)|775,032,907|96|
|DefineProperties (setter & enumerable=false)|8,397,070|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,300,663|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,736,830|92|
|Using replaceAll()|2,644,616|93|
|Using replaceAll(//g)|2,464,791|88|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|192,847|90|
|Sort using first char|929,448|92|
|Sort using localeCompare|887,859|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,584|91|
|{...smallObject} - Total keys: 2|57,873,343|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,573|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,411|94|
|{ ...bigObject, ...anotherBigObject }|957|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,346,639|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,912,901|98|
|{ ...smallObject, ...anotherSmallObject }|16,326,185|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,808 ops/sec ±0.89% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 468 ops/sec ±0.60% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,161 ops/sec ±0.45% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,017 ops/sec ±24.31% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|778,705,701|96|
|Using backtick (`)|777,313,106|93|
|Using array.join|7,751,571|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,147,513|92|
|Using this|161,508,654|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,321,708|93|
|Date.now()|15,563,378|93|
