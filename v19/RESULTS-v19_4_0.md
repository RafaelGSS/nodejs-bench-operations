# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Sun Feb 26 2023 15:26:40 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|778,360,849|95|
|Using dot notation|774,618,033|91|
|Using define property (writable)|3,430,423|93|
|Using define property initialized (writable)|4,747,492|95|
|Using define property (getter)|1,770,529|86|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.039ms
new Array(length)|100|0.012ms
array.push|1,000|0.09ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.443ms
new Array(length)|10,000|0.342ms
array.push|1,000,000|33.916ms
new Array(length)|1,000,000|8.445ms
array.push|100,000,000|2,508.64ms
new Array(length)|100,000,000|5,350.396ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.018ms
new Array(length)|100|0.011ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.03ms
array.push|10,000|1.163ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|79.216ms
new Array(length)|1,000,000|9.792ms
array.push|100,000,000|2,616.61ms
new Array(length)|100,000,000|5,682.349ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|288|85|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,046|56|
|[True conditional] Using constructor name|148,738|90|
|[True conditional] Check if property is valid then instanceof |151,401|93|
|[False conditional] Using instanceof only|778,153,373|95|
|[False conditional] Using constructor name|778,379,351|97|
|[False conditional] Check if property is valid then instanceof |778,850,695|96|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,071,634|95|
|fromUnixToISOString(new Date())|1,749,456|91|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,884|78|
|Intl.DateTimeFormat().format(new Date())|8,035|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|3,805|42|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,227|88|
|Reusing Intl.DateTimeFormat()|482,461|90|
|Date.toLocaleDateString()|616,459|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,080|74|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|671,436|93|
|Using brackets {}|667,602|90|
|Using '' + |672,989|88|
|Using date.toString()|730,108|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,473,920|93|
|Using undefined assignment|775,445,647|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|186,384|52|
|NodeError|149,189|94|
|NodeError Range|150,225|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,358,566|94|
|Function returning explicitly undefined|1,344,253|95|
|Function returning implicitly undefined|1,344,076|92|
|Function returning string|1,330,427|92|
|Function returning integer|1,344,750|95|
|Function returning float|1,372,489|93|
|Function returning functions|1,323,619|92|
|Function returning arrow functions|1,348,724|92|
|Function returning empty object|1,342,060|95|
|Function returning empty array|1,375,734|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|774,782,773|95|
|using Array.includes (first item)|777,925,225|94|
|Using raw comparison|778,515,799|96|
|Using raw comparison (first item)|775,936,217|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,808,201|91|
|Using Object.getOwnPropertyNames()|57,005,292|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|848,509,166|96|
|Length = 10_000 - Array.at|851,342,354|95|
|Length = 1_000_000 - Array.at|851,633,942|94|
|Length = 100 - Array[length - 1]|774,635,562|95|
|Length = 10_000 - Array[length - 1]|775,376,099|96|
|Length = 1_000_000 - Array[length - 1]|773,347,159|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,362,242|90|
|Object.create({})|1,568,962|80|
|Cached Empty.prototype|774,912,740|97|
|Empty.prototype|1,461,622|77|
|Empty class|1,070,233|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|777,027,346|97|
|Using optional chain (obj.field?.field2) (undefined)|778,469,859|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,637,496|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,763,120|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|228,262,755|90|
|Using parseInt(x, 10) - big number (10 len)|12,785,637|91|
|Using + - small number (2 len)|778,890,336|90|
|Using + - big number (10 len)|777,468,981|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|891,677|84|
|Using ? operator to avoid rejection|906,424|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|775,094,733|96|
|Raw usage underscore usage|773,572,542|97|
|Manipulating private properties using #|761,375,730|95|
|Manipulating private properties using underscore(_)|764,601,294|93|
|Manipulating private properties using Symbol|762,811,062|96|
|Manipulating private properties using PrivateSymbol|22,061,841|86|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,122,833|95|
|Adding property in the object creation - small object|3,116,607|93|
|Adding property after the function creation - small class|195,072|81|
|Adding property in the function creation - small class|191,954|84|
|Adding property after the class creation - small class|167,921|82|
|Adding property in the class creation - small class|169,234|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|777,535,861|97|
|Getter|79,821,749|95|
|Method|776,770,973|98|
|DefineProperty (getter)|777,559,414|95|
|DefineProperty (getter & enumerable=false)|80,042,077|94|
|DefineProperty (getter & configurable=false)|778,362,463|95|
|DefineProperty (getter & enumerable=false & configurable=false)|80,014,757|97|
|DefineProperty (writable)|776,811,238|95|
|DefineProperty (writable & enumerable=false)|390,832,364|52|
|DefineProperty (writable & enumerable=false & configurable=false)|120,986,557|83|
|DefineProperties (getter)|47,280,677|90|
|DefineProperties (getter & enumerable=false)|80,148,224|95|
|DefineProperties (getter & enumerable=false & configurable=false)|79,786,783|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|743,297,146|96|
|Setter|8,866,021|91|
|Method|740,765,934|95|
|DefineProperty (setter)|739,831,513|95|
|DefineProperty (setter & enumerable=false)|8,825,526|93|
|DefineProperty (setter & configurable=false)|8,843,548|92|
|DefineProperty (setter & enumerable=false & configurable=false)|8,608,236|92|
|DefineProperty (writable)|775,329,789|90|
|DefineProperty (writable & enumerable=false)|776,457,747|97|
|DefineProperty (writable & enumerable=false & configurable=false)|776,447,416|97|
|DefineProperties (setter)|774,419,405|96|
|DefineProperties (setter & enumerable=false)|8,658,252|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,381,700|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,780,291|93|
|Using replaceAll()|2,733,167|93|
|Using replaceAll(//g)|2,514,736|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|193,955|96|
|Sort using first char|879,928|85|
|Sort using localeCompare|872,561|92|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,553|90|
|{...smallObject} - Total keys: 2|57,765,586|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,541|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,376|91|
|{ ...bigObject, ...anotherBigObject }|946|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,425,100|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,724,683|97|
|{ ...smallObject, ...anotherSmallObject }|16,253,079|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,765 ops/sec ±0.78% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 464 ops/sec ±0.55% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,999 ops/sec ±0.51% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 896 ops/sec ±10.64% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|778,005,020|95|
|Using backtick (`)|776,015,122|96|
|Using array.join|7,586,934|88|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,406,473|89|
|Using this|160,992,549|98|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,466,074|94|
|Date.now()|15,617,640|90|
