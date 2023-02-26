# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.8GB Mem
* __Node:__ `v19.0.0`
* __Run:__ Sun Feb 26 2023 15:13:48 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|777,839,889|96|
|Using dot notation|777,177,426|94|
|Using define property (writable)|3,557,995|93|
|Using define property initialized (writable)|4,735,269|93|
|Using define property (getter)|1,880,399|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.037ms
new Array(length)|100|0.011ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.423ms
new Array(length)|10,000|2.253ms
array.push|1,000,000|35.738ms
new Array(length)|1,000,000|7.12ms
array.push|100,000,000|2,296.837ms
new Array(length)|100,000,000|5,792.084ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.016ms
array.push|100|0.101ms
new Array(length)|100|0.01ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.361ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|20.322ms
new Array(length)|1,000,000|8.945ms
array.push|100,000,000|2,666.563ms
new Array(length)|100,000,000|5,894.108ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|286|84|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,694|51|
|[True conditional] Using constructor name|149,722|92|
|[True conditional] Check if property is valid then instanceof |149,817|93|
|[False conditional] Using instanceof only|778,657,709|94|
|[False conditional] Using constructor name|779,953,333|92|
|[False conditional] Check if property is valid then instanceof |780,042,564|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,070,045|94|
|fromUnixToISOString(new Date())|1,760,467|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,653|81|
|Intl.DateTimeFormat().format(new Date())|7,389|66|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|4,086|42|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,504|88|
|Reusing Intl.DateTimeFormat()|493,840|95|
|Date.toLocaleDateString()|621,325|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,075|79|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|669,677|88|
|Using brackets {}|689,550|94|
|Using '' + |683,758|92|
|Using date.toString()|721,463|91|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,459,534|91|
|Using undefined assignment|775,086,764|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|183,095|55|
|NodeError|146,618|93|
|NodeError Range|146,555|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,388,331|92|
|Function returning explicitly undefined|1,400,215|95|
|Function returning implicitly undefined|1,430,150|92|
|Function returning string|1,388,318|94|
|Function returning integer|1,410,254|92|
|Function returning float|1,385,810|93|
|Function returning functions|1,369,250|90|
|Function returning arrow functions|1,375,786|94|
|Function returning empty object|1,399,349|95|
|Function returning empty array|1,418,030|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|775,731,468|95|
|using Array.includes (first item)|775,027,844|96|
|Using raw comparison|776,791,618|93|
|Using raw comparison (first item)|777,963,153|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,135,783|84|
|Using Object.getOwnPropertyNames()|58,822,501|93|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|741,872,129|96|
|Length = 10_000 - Array.at|744,365,350|96|
|Length = 1_000_000 - Array.at|743,351,578|96|
|Length = 100 - Array[length - 1]|774,925,325|94|
|Length = 10_000 - Array[length - 1]|774,846,201|96|
|Length = 1_000_000 - Array[length - 1]|775,836,456|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,874,389|91|
|Object.create({})|1,570,137|82|
|Cached Empty.prototype|775,814,598|96|
|Empty.prototype|1,451,954|78|
|Empty class|1,102,711|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|776,135,484|96|
|Using optional chain (obj.field?.field2) (undefined)|779,289,011|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|777,580,392|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|778,475,350|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|228,768,885|96|
|Using parseInt(x, 10) - big number (10 len)|13,011,411|95|
|Using + - small number (2 len)|778,352,153|94|
|Using + - big number (10 len)|777,740,054|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|860,536|82|
|Using ? operator to avoid rejection|900,685|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|769,940,545|96|
|Raw usage underscore usage|773,901,443|95|
|Manipulating private properties using #|762,865,769|94|
|Manipulating private properties using underscore(_)|765,599,560|98|
|Manipulating private properties using Symbol|763,271,478|97|
|Manipulating private properties using PrivateSymbol|22,314,811|92|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,095,501|94|
|Adding property in the object creation - small object|2,096,292|93|
|Adding property after the function creation - small class|186,526|89|
|Adding property in the function creation - small class|186,484|87|
|Adding property after the class creation - small class|156,373|82|
|Adding property in the class creation - small class|156,404|85|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|778,258,315|92|
|Getter|79,878,495|89|
|Method|775,459,337|95|
|DefineProperty (getter)|778,649,452|94|
|DefineProperty (getter & enumerable=false)|74,746,515|88|
|DefineProperty (getter & configurable=false)|775,066,190|94|
|DefineProperty (getter & enumerable=false & configurable=false)|66,778,006|78|
|DefineProperty (writable)|773,752,246|93|
|DefineProperty (writable & enumerable=false)|776,097,995|93|
|DefineProperty (writable & enumerable=false & configurable=false)|775,583,314|91|
|DefineProperties (getter)|72,677,584|84|
|DefineProperties (getter & enumerable=false)|68,126,239|79|
|DefineProperties (getter & enumerable=false & configurable=false)|49,241,075|84|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|711,709,648|91|
|Setter|8,646,379|94|
|Method|740,535,119|95|
|DefineProperty (setter)|739,766,070|96|
|DefineProperty (setter & enumerable=false)|8,699,595|91|
|DefineProperty (setter & configurable=false)|8,795,864|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,809,918|92|
|DefineProperty (writable)|776,112,628|93|
|DefineProperty (writable & enumerable=false)|778,298,471|92|
|DefineProperty (writable & enumerable=false & configurable=false)|431,925,094|57|
|DefineProperties (setter)|108,163,082|84|
|DefineProperties (setter & enumerable=false)|8,657,508|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,667,867|95|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,797,029|90|
|Using replaceAll()|2,690,325|92|
|Using replaceAll(//g)|2,525,801|90|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|199,666|92|
|Sort using first char|903,192|92|
|Sort using localeCompare|889,060|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,564|93|
|{...smallObject} - Total keys: 2|58,060,233|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,555|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,389|96|
|{ ...bigObject, ...anotherBigObject }|934|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,538,233|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,725,312|96|
|{ ...smallObject, ...anotherSmallObject }|16,829,994|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,855 ops/sec ±1.00% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 463 ops/sec ±0.74% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,234 ops/sec ±0.61% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 985 ops/sec ±22.18% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|771,377,299|93|
|Using backtick (`)|772,360,096|92|
|Using array.join|7,912,142|91|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,105,705|90|
|Using this|161,208,904|97|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,552,176|93|
|Date.now()|15,861,249|94|
