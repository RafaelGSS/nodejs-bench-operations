# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v18.16.0`
* __Run:__ Tue Jul 11 2023 21:19:14 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|770,804,574|93|
|Using dot notation|768,161,494|90|
|Using define property (writable)|3,080,309|94|
|Using define property initialized (writable)|3,918,893|93|
|Using define property (getter)|1,626,094|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.037ms
new Array(length)|100|0.015ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.561ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|32.595ms
new Array(length)|1,000,000|18.711ms
array.push|100,000,000|2,497.794ms
new Array(length)|100,000,000|5,107.927ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.017ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.604ms
new Array(length)|10,000|4.101ms
array.push|1,000,000|332.736ms
new Array(length)|1,000,000|5.97ms
array.push|100,000,000|3,122.932ms
new Array(length)|100,000,000|5,605.227ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|198|82|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|187,426|53|
|[True conditional] Using constructor name|143,892|93|
|[True conditional] Check if property is valid then instanceof |145,654|90|
|[False conditional] Using instanceof only|771,563,768|92|
|[False conditional] Using constructor name|771,882,494|93|
|[False conditional] Check if property is valid then instanceof |770,874,861|94|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,095|91|
|crypto.verify('RSA-SHA256')|3,994|91|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|924,945|92|
|fromUnixToISOString(new Date())|802,514|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,964|89|
|Intl.DateTimeFormat().format(new Date())|7,552|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,067|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,375|90|
|Reusing Intl.DateTimeFormat()|392,707|91|
|Date.toLocaleDateString()|398,926|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,114|90|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|538,982|93|
|Using brackets {}|544,174|92|
|Using '' + |529,162|92|
|Using date.toString()|555,794|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,403,928|95|
|Using undefined assignment|768,743,014|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,985|53|
|NodeError|136,427|91|
|NodeError Range|141,096|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,440,777|95|
|Function returning explicitly undefined|1,413,471|93|
|Function returning implicitly undefined|1,447,781|90|
|Function returning string|1,428,733|94|
|Function returning integer|1,448,701|94|
|Function returning float|1,449,998|90|
|Function returning functions|1,388,019|94|
|Function returning arrow functions|1,384,858|95|
|Function returning empty object|1,452,038|95|
|Function returning empty array|1,429,000|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|769,306,668|94|
|using Array.includes (first item)|770,408,883|93|
|Using raw comparison|772,216,520|90|
|Using raw comparison (first item)|771,456,203|93|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,538,572|94|
|Using Object.getOwnPropertyNames()|54,573,786|89|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,213,194|96|
|Length = 10_000 - Array.at|19,167,684|92|
|Length = 1_000_000 - Array.at|18,607,565|95|
|Length = 100 - Array[length - 1]|767,728,623|95|
|Length = 10_000 - Array[length - 1]|767,967,269|95|
|Length = 1_000_000 - Array[length - 1]|767,969,931|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,297,925|92|
|Object.create({})|1,087,500|88|
|Cached Empty.prototype|769,457,984|95|
|Empty.prototype|1,162,911|82|
|Empty class|783,977|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|767,708,143|91|
|Using optional chain (obj.field?.field2) (undefined)|770,391,660|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|769,102,465|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|767,929,676|94|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|192,204,394|96|
|Using parseInt(x, 10) - big number (10 len)|15,173,499|91|
|Using + - small number (2 len)|771,852,216|92|
|Using + - big number (10 len)|770,659,816|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|615,972|77|
|Using ? operator to avoid rejection|641,530|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|160,401,023|92|
|Raw usage underscore usage|153,118,490|85|
|Manipulating private properties using #|114,318,219|87|
|Manipulating private properties using underscore(_)|88,153,648|91|
|Manipulating private properties using Symbol|88,920,089|89|
|Manipulating private properties using PrivateSymbol|34,861,851|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,590,113|96|
|Adding property in the object creation - small object|2,601,045|92|
|Adding property after the function creation - small class|152,165|87|
|Adding property in the function creation - small class|152,487|89|
|Adding property after the class creation - small class|119,009|82|
|Adding property in the class creation - small class|121,752|82|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|770,532,356|94|
|Getter|66,534,992|91|
|Method|769,390,265|92|
|DefineProperty (getter)|770,059,529|91|
|DefineProperty (getter & enumerable=false)|66,105,517|97|
|DefineProperty (getter & configurable=false)|771,322,807|94|
|DefineProperty (getter & enumerable=false & configurable=false)|66,722,849|97|
|DefineProperty (writable)|769,335,846|93|
|DefineProperty (writable & enumerable=false)|723,707,629|92|
|DefineProperty (writable & enumerable=false & configurable=false)|103,164,091|83|
|DefineProperties (getter)|43,013,274|85|
|DefineProperties (getter & enumerable=false)|66,568,367|95|
|DefineProperties (getter & enumerable=false & configurable=false)|66,517,542|96|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|766,465,255|96|
|Setter|7,937,414|94|
|Method|766,309,091|95|
|DefineProperty (setter)|767,228,651|95|
|DefineProperty (setter & enumerable=false)|7,898,224|94|
|DefineProperty (setter & configurable=false)|7,780,566|93|
|DefineProperty (setter & enumerable=false & configurable=false)|7,976,900|93|
|DefineProperty (writable)|766,512,552|87|
|DefineProperty (writable & enumerable=false)|767,475,127|94|
|DefineProperty (writable & enumerable=false & configurable=false)|188,837,835|26|
|DefineProperties (setter)|80,149,584|85|
|DefineProperties (setter & enumerable=false)|7,316,500|93|
|DefineProperties (setter & enumerable=false & configurable=false)|7,988,508|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,118,986|89|
|Using replaceAll()|2,053,164|94|
|Using replaceAll(//g)|1,960,059|94|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,424,055|90|
|{ ...object, __proto__: null }|18,891,539|90|
|{ ...object, newProp: true }|511,542|82|
|structuredClone|188,537|94|
|JSON.parse + JSON.stringify|146,581|95|
|loop + object.keys starting with {}|885,951|92|
|loop + object.keys starting with { __proto__: null }|475,901|96|
|loop + object.keys starting with { randomProp: true }|340,828|89|
|object.keys + reduce(FN, {})|887,208|95|
|object.keys + reduce(FN, { __proto__: null })|478,713|95|
|object.keys + reduce(FN, { newProp: true })|344,352|91|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,000|91|
|Sort using first char|855,511|88|
|Sort using localeCompare|777,056|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,359|95|
|{...smallObject} - Total keys: 2|68,648,851|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,409|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,825|95|
|{ ...bigObject, ...anotherBigObject }|850|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,933,298|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,867,277|93|
|{ ...smallObject, ...anotherSmallObject }|16,753,467|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,751 ops/sec ±1.00% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 422 ops/sec ±0.49% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,512 ops/sec ±0.50% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 935 ops/sec ±12.93% (64 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|770,898,967|93|
|Using backtick (`)|769,843,648|95|
|Using array.join|7,112,650|94|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|770,897,047|93|
|Using indexof|771,163,975|91|
|Using RegExp.test|12,553,183|93|
|Using RegExp.text with cached regex pattern|13,383,073|96|
|Using new RegExp.test|3,330,042|94|
|Using new RegExp.test with cached regex pattern|3,734,146|90|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|166,169,312|93|
|Using this|176,763,496|93|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,591,461|95|
|Date.now()|1,819,582|95|
