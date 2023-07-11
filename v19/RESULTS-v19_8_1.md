# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v19.8.1`
* __Run:__ Tue Jul 11 2023 19:51:23 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|777,854,309|91|
|Using dot notation|775,109,786|96|
|Using define property (writable)|3,126,545|95|
|Using define property initialized (writable)|3,941,976|93|
|Using define property (getter)|1,732,240|88|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.03ms
new Array(length)|100|0.012ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.517ms
new Array(length)|10,000|0.401ms
array.push|1,000,000|40.045ms
new Array(length)|1,000,000|8.679ms
array.push|100,000,000|2,498.556ms
new Array(length)|100,000,000|5,753.249ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.03ms
new Array(length)|100|0.013ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.381ms
new Array(length)|10,000|0.194ms
array.push|1,000,000|28.065ms
new Array(length)|1,000,000|12.748ms
array.push|100,000,000|2,933.024ms
new Array(length)|100,000,000|5,914.955ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|197|81|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,533|54|
|[True conditional] Using constructor name|141,719|93|
|[True conditional] Check if property is valid then instanceof |143,232|95|
|[False conditional] Using instanceof only|776,885,614|91|
|[False conditional] Using constructor name|777,538,549|92|
|[False conditional] Check if property is valid then instanceof |778,263,170|93|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,063|88|
|crypto.verify('RSA-SHA256')|4,131|92|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|666,027|86|
|fromUnixToISOString(new Date())|867,068|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,045|87|
|Intl.DateTimeFormat().format(new Date())|7,699|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,162|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,484|92|
|Reusing Intl.DateTimeFormat()|336,526|82|
|Date.toLocaleDateString()|404,843|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,089|82|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|541,388|91|
|Using brackets {}|541,445|94|
|Using '' + |538,488|92|
|Using date.toString()|575,439|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,549,345|95|
|Using undefined assignment|772,883,133|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|177,394|54|
|NodeError|140,336|91|
|NodeError Range|141,190|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,481,903|94|
|Function returning explicitly undefined|1,462,449|93|
|Function returning implicitly undefined|1,507,724|95|
|Function returning string|1,487,163|96|
|Function returning integer|1,444,066|94|
|Function returning float|1,443,413|91|
|Function returning functions|1,420,130|94|
|Function returning arrow functions|1,402,027|95|
|Function returning empty object|1,480,441|93|
|Function returning empty array|1,478,521|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|775,541,799|93|
|using Array.includes (first item)|777,307,463|91|
|Using raw comparison|778,482,919|90|
|Using raw comparison (first item)|776,631,182|90|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|56,771,931|94|
|Using Object.getOwnPropertyNames()|51,963,190|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|771,716,247|97|
|Length = 10_000 - Array.at|772,438,549|95|
|Length = 1_000_000 - Array.at|771,659,139|91|
|Length = 100 - Array[length - 1]|776,112,547|90|
|Length = 10_000 - Array[length - 1]|774,818,320|91|
|Length = 1_000_000 - Array[length - 1]|774,239,567|91|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,135,402|93|
|Object.create({})|1,687,282|84|
|Cached Empty.prototype|776,532,459|94|
|Empty.prototype|1,592,675|81|
|Empty class|1,068,485|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|774,508,400|92|
|Using optional chain (obj.field?.field2) (undefined)|775,178,004|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|776,252,332|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|774,807,045|93|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|193,974,911|93|
|Using parseInt(x, 10) - big number (10 len)|9,683,522|88|
|Using + - small number (2 len)|777,673,630|94|
|Using + - big number (10 len)|777,782,804|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|894,764|78|
|Using ? operator to avoid rejection|921,866|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|769,755,834|92|
|Raw usage underscore usage|770,308,044|93|
|Manipulating private properties using #|759,617,660|93|
|Manipulating private properties using underscore(_)|761,802,653|94|
|Manipulating private properties using Symbol|761,666,826|97|
|Manipulating private properties using PrivateSymbol|35,847,347|90|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,689,498|94|
|Adding property in the object creation - small object|2,686,603|97|
|Adding property after the function creation - small class|189,079|84|
|Adding property in the function creation - small class|192,478|86|
|Adding property after the class creation - small class|160,862|79|
|Adding property in the class creation - small class|159,493|78|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|775,875,532|91|
|Getter|60,026,678|92|
|Method|778,617,626|94|
|DefineProperty (getter)|777,003,687|91|
|DefineProperty (getter & enumerable=false)|64,386,148|93|
|DefineProperty (getter & configurable=false)|777,469,325|93|
|DefineProperty (getter & enumerable=false & configurable=false)|64,717,048|94|
|DefineProperty (writable)|775,142,487|93|
|DefineProperty (writable & enumerable=false)|778,236,257|94|
|DefineProperty (writable & enumerable=false & configurable=false)|774,402,245|92|
|DefineProperties (getter)|52,795,644|87|
|DefineProperties (getter & enumerable=false)|64,465,266|97|
|DefineProperties (getter & enumerable=false & configurable=false)|45,174,492|70|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|772,486,335|90|
|Setter|8,041,025|96|
|Method|773,584,163|96|
|DefineProperty (setter)|773,576,207|97|
|DefineProperty (setter & enumerable=false)|8,106,864|94|
|DefineProperty (setter & configurable=false)|8,119,096|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,084,085|93|
|DefineProperty (writable)|773,613,885|93|
|DefineProperty (writable & enumerable=false)|775,438,859|94|
|DefineProperty (writable & enumerable=false & configurable=false)|774,726,899|94|
|DefineProperties (setter)|775,396,526|94|
|DefineProperties (setter & enumerable=false)|7,666,487|93|
|DefineProperties (setter & enumerable=false & configurable=false)|7,345,962|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,374,316|89|
|Using replaceAll()|2,220,471|93|
|Using replaceAll(//g)|2,148,105|91|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,167,570|91|
|{ ...object, __proto__: null }|15,605,009|90|
|{ ...object, newProp: true }|554,127|84|
|structuredClone|182,223|96|
|JSON.parse + JSON.stringify|144,582|94|
|loop + object.keys starting with {}|956,596|94|
|loop + object.keys starting with { __proto__: null }|479,125|88|
|loop + object.keys starting with { randomProp: true }|357,734|92|
|object.keys + reduce(FN, {})|339,450|91|
|object.keys + reduce(FN, { __proto__: null })|475,927|92|
|object.keys + reduce(FN, { newProp: true })|357,509|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|181,763|95|
|Sort using first char|886,898|92|
|Sort using localeCompare|795,440|94|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,322|93|
|{...smallObject} - Total keys: 2|69,706,918|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,390|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,830|96|
|{ ...bigObject, ...anotherBigObject }|835|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,506,349|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,922,692|96|
|{ ...smallObject, ...anotherSmallObject }|16,204,260|92|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,646 ops/sec ±0.98% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 433 ops/sec ±0.49% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 4,324 ops/sec ±0.71% (91 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 985 ops/sec ±24.26% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|776,331,916|93|
|Using backtick (`)|778,725,818|90|
|Using array.join|7,299,545|90|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|777,626,953|90|
|Using indexof|776,511,034|92|
|Using RegExp.test|12,456,641|93|
|Using RegExp.text with cached regex pattern|13,411,465|94|
|Using new RegExp.test|3,392,222|93|
|Using new RegExp.test with cached regex pattern|3,819,185|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|166,418,661|93|
|Using this|209,222,067|91|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,646,809|94|
|Date.now()|1,868,564|97|
