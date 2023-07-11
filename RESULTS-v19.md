# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v19.9.0`
* __Run:__ Tue Jul 11 2023 20:20:48 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|775,578,716|91|
|Using dot notation|774,465,340|94|
|Using define property (writable)|3,023,846|96|
|Using define property initialized (writable)|3,857,465|95|
|Using define property (getter)|1,701,124|90|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.003ms
array.push|100|0.039ms
new Array(length)|100|0.011ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.506ms
new Array(length)|10,000|0.397ms
array.push|1,000,000|42.614ms
new Array(length)|1,000,000|8.638ms
array.push|100,000,000|2,494.18ms
new Array(length)|100,000,000|5,827.221ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.02ms
new Array(length)|100|0.013ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.386ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|29.651ms
new Array(length)|1,000,000|10.339ms
array.push|100,000,000|2,934.502ms
new Array(length)|100,000,000|5,986.011ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|199|82|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,071|52|
|[True conditional] Using constructor name|142,640|92|
|[True conditional] Check if property is valid then instanceof |146,736|97|
|[False conditional] Using instanceof only|775,312,315|92|
|[False conditional] Using constructor name|775,977,153|93|
|[False conditional] Check if property is valid then instanceof |776,396,520|94|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,069|89|
|crypto.verify('RSA-SHA256')|4,136|93|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|680,301|93|
|fromUnixToISOString(new Date())|876,158|88|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,103|86|
|Intl.DateTimeFormat().format(new Date())|7,655|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,340|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,456|92|
|Reusing Intl.DateTimeFormat()|345,736|83|
|Date.toLocaleDateString()|408,986|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,713|81|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|541,885|92|
|Using brackets {}|547,953|92|
|Using '' + |546,371|94|
|Using date.toString()|580,009|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,506,831|95|
|Using undefined assignment|774,857,512|93|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,239|52|
|NodeError|142,833|92|
|NodeError Range|144,027|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,493,483|93|
|Function returning explicitly undefined|1,467,502|91|
|Function returning implicitly undefined|1,513,774|93|
|Function returning string|1,498,364|90|
|Function returning integer|1,527,833|94|
|Function returning float|1,489,001|92|
|Function returning functions|1,423,722|96|
|Function returning arrow functions|1,469,560|94|
|Function returning empty object|1,503,914|94|
|Function returning empty array|1,512,600|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|772,559,520|93|
|using Array.includes (first item)|773,253,896|94|
|Using raw comparison|775,442,671|97|
|Using raw comparison (first item)|776,649,085|92|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,891,770|89|
|Using Object.getOwnPropertyNames()|57,702,195|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|773,939,348|95|
|Length = 10_000 - Array.at|771,858,554|93|
|Length = 1_000_000 - Array.at|772,708,161|94|
|Length = 100 - Array[length - 1]|775,797,694|93|
|Length = 10_000 - Array[length - 1]|775,516,591|95|
|Length = 1_000_000 - Array[length - 1]|773,125,411|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,306,844|92|
|Object.create({})|1,670,313|82|
|Cached Empty.prototype|774,177,912|97|
|Empty.prototype|1,562,463|78|
|Empty class|1,058,627|87|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|776,076,526|94|
|Using optional chain (obj.field?.field2) (undefined)|777,690,373|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,325,049|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|776,510,645|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|193,592,613|94|
|Using parseInt(x, 10) - big number (10 len)|14,996,435|91|
|Using + - small number (2 len)|775,107,328|94|
|Using + - big number (10 len)|776,068,582|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|878,831|79|
|Using ? operator to avoid rejection|894,832|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|772,211,867|95|
|Raw usage underscore usage|772,494,801|96|
|Manipulating private properties using #|759,891,249|96|
|Manipulating private properties using underscore(_)|761,576,690|95|
|Manipulating private properties using Symbol|762,352,110|92|
|Manipulating private properties using PrivateSymbol|35,774,201|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,653,575|92|
|Adding property in the object creation - small object|2,648,360|96|
|Adding property after the function creation - small class|188,462|84|
|Adding property in the function creation - small class|191,735|86|
|Adding property after the class creation - small class|158,225|81|
|Adding property in the class creation - small class|158,136|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|777,000,025|93|
|Getter|64,635,757|94|
|Method|778,256,154|93|
|DefineProperty (getter)|777,297,390|91|
|DefineProperty (getter & enumerable=false)|64,564,249|95|
|DefineProperty (getter & configurable=false)|774,161,601|97|
|DefineProperty (getter & enumerable=false & configurable=false)|60,432,412|92|
|DefineProperty (writable)|775,832,506|93|
|DefineProperty (writable & enumerable=false)|776,934,341|92|
|DefineProperty (writable & enumerable=false & configurable=false)|778,137,342|93|
|DefineProperties (getter)|64,747,872|93|
|DefineProperties (getter & enumerable=false)|53,531,469|77|
|DefineProperties (getter & enumerable=false & configurable=false)|41,345,113|88|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|771,071,802|92|
|Setter|7,978,234|97|
|Method|770,053,642|96|
|DefineProperty (setter)|769,810,275|93|
|DefineProperty (setter & enumerable=false)|7,867,800|93|
|DefineProperty (setter & configurable=false)|7,856,126|93|
|DefineProperty (setter & enumerable=false & configurable=false)|7,960,803|97|
|DefineProperty (writable)|774,435,174|95|
|DefineProperty (writable & enumerable=false)|775,498,044|92|
|DefineProperty (writable & enumerable=false & configurable=false)|775,145,725|92|
|DefineProperties (setter)|774,068,074|90|
|DefineProperties (setter & enumerable=false)|7,684,963|93|
|DefineProperties (setter & enumerable=false & configurable=false)|7,193,308|92|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,396,218|92|
|Using replaceAll()|2,209,796|96|
|Using replaceAll(//g)|2,124,647|88|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,343,378|90|
|{ ...object, __proto__: null }|15,713,247|90|
|{ ...object, newProp: true }|546,430|84|
|structuredClone|184,868|94|
|JSON.parse + JSON.stringify|148,330|94|
|loop + object.keys starting with {}|959,129|88|
|loop + object.keys starting with { __proto__: null }|487,870|90|
|loop + object.keys starting with { randomProp: true }|353,336|93|
|object.keys + reduce(FN, {})|330,586|93|
|object.keys + reduce(FN, { __proto__: null })|477,677|94|
|object.keys + reduce(FN, { newProp: true })|353,325|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|185,761|95|
|Sort using first char|896,579|86|
|Sort using localeCompare|799,586|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,315|95|
|{...smallObject} - Total keys: 2|70,199,065|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,397|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,855|96|
|{ ...bigObject, ...anotherBigObject }|834|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,385,703|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,522,697|93|
|{ ...smallObject, ...anotherSmallObject }|16,274,643|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,543 ops/sec ±0.86% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 433 ops/sec ±0.47% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,367 ops/sec ±0.70% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 940 ops/sec ±14.35% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,748,583|92|
|Using backtick (`)|775,800,624|89|
|Using array.join|7,342,838|90|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|775,481,351|91|
|Using indexof|775,562,706|94|
|Using RegExp.test|12,670,351|90|
|Using RegExp.text with cached regex pattern|13,488,233|96|
|Using new RegExp.test|3,405,428|94|
|Using new RegExp.test with cached regex pattern|3,751,604|94|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|169,511,106|93|
|Using this|209,702,176|92|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,656,233|91|
|Date.now()|1,863,757|92|
