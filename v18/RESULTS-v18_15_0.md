# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v18.15.0`
* __Run:__ Sun Apr 23 2023 14:12:59 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,471,120|100|
|Using dot notation|848,166,476|99|
|Using define property (writable)|4,287,346|98|
|Using define property initialized (writable)|5,898,712|96|
|Using define property (getter)|2,291,439|93|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.009ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.367ms
new Array(length)|10,000|0.142ms
array.push|1,000,000|23.558ms
new Array(length)|1,000,000|12.866ms
array.push|100,000,000|1,766.967ms
new Array(length)|100,000,000|3,833.838ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.015ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.443ms
new Array(length)|10,000|3.167ms
array.push|1,000,000|269.753ms
new Array(length)|1,000,000|4.353ms
array.push|100,000,000|2,172.055ms
new Array(length)|100,000,000|4,166.804ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|315|88|
|Array.from|22|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|240,462|53|
|[True conditional] Using constructor name|179,765|98|
|[True conditional] Check if property is valid then instanceof |183,574|96|
|[False conditional] Using instanceof only|848,490,163|95|
|[False conditional] Using constructor name|848,817,179|101|
|[False conditional] Check if property is valid then instanceof |849,888,986|94|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,902|95|
|crypto.verify('RSA-SHA256')|6,910|99|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,674,894|98|
|fromUnixToISOString(new Date())|2,132,926|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,813|85|
|Intl.DateTimeFormat().format(new Date())|10,611|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,956|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,787|94|
|Reusing Intl.DateTimeFormat()|472,699|79|
|Date.toLocaleDateString()|613,927|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,450|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,008,580|99|
|Using brackets {}|1,030,873|95|
|Using '' + |1,020,066|95|
|Using date.toString()|1,103,755|100|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,469,088|96|
|Using undefined assignment|847,629,143|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|236,313|53|
|NodeError|180,991|95|
|NodeError Range|181,113|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,892,021|95|
|Function returning explicitly undefined|1,882,267|97|
|Function returning implicitly undefined|1,940,198|95|
|Function returning string|1,907,893|99|
|Function returning integer|1,773,342|94|
|Function returning float|1,909,222|99|
|Function returning functions|1,859,787|100|
|Function returning arrow functions|1,883,850|98|
|Function returning empty object|1,872,458|99|
|Function returning empty array|1,896,983|99|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,348,495|99|
|using Array.includes (first item)|848,869,323|101|
|Using raw comparison|849,852,077|96|
|Using raw comparison (first item)|849,019,667|101|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,689,762|95|
|Using Object.getOwnPropertyNames()|96,193,805|100|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,461,053|99|
|Length = 10_000 - Array.at|27,510,542|99|
|Length = 1_000_000 - Array.at|27,036,277|97|
|Length = 100 - Array[length - 1]|847,952,294|94|
|Length = 10_000 - Array[length - 1]|847,648,885|100|
|Length = 1_000_000 - Array[length - 1]|847,520,642|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|76,973,486|96|
|Object.create({})|1,454,924|85|
|Cached Empty.prototype|848,698,075|99|
|Empty.prototype|1,611,535|85|
|Empty class|975,325|93|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,884,643|100|
|Using optional chain (obj.field?.field2) (undefined)|848,925,096|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,516,966|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|847,721,448|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,220,413|93|
|Using parseInt(x, 10) - big number (10 len)|21,108,097|99|
|Using + - small number (2 len)|849,934,754|99|
|Using + - big number (10 len)|849,410,804|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|780,853|83|
|Using ? operator to avoid rejection|814,955|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|349,012,048|89|
|Raw usage underscore usage|362,950,844|94|
|Manipulating private properties using #|265,246,199|98|
|Manipulating private properties using underscore(_)|262,337,060|96|
|Manipulating private properties using Symbol|261,543,981|96|
|Manipulating private properties using PrivateSymbol|51,605,136|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,869,971|96|
|Adding property in the object creation - small object|3,884,018|95|
|Adding property after the function creation - small class|198,325|90|
|Adding property in the function creation - small class|199,296|89|
|Adding property after the class creation - small class|168,597|87|
|Adding property in the class creation - small class|168,112|87|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,477,905|100|
|Getter|98,623,792|95|
|Method|848,669,650|99|
|DefineProperty (getter)|848,665,386|100|
|DefineProperty (getter & enumerable=false)|98,153,089|96|
|DefineProperty (getter & configurable=false)|849,198,647|101|
|DefineProperty (getter & enumerable=false & configurable=false)|98,507,274|97|
|DefineProperty (writable)|848,615,476|94|
|DefineProperty (writable & enumerable=false)|442,280,291|53|
|DefineProperty (writable & enumerable=false & configurable=false)|164,078,645|80|
|DefineProperties (getter)|66,376,340|89|
|DefineProperties (getter & enumerable=false)|97,846,184|95|
|DefineProperties (getter & enumerable=false & configurable=false)|98,186,665|99|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|839,491,981|100|
|Setter|11,881,602|98|
|Method|840,029,264|100|
|DefineProperty (setter)|837,278,908|96|
|DefineProperty (setter & enumerable=false)|11,609,690|98|
|DefineProperty (setter & configurable=false)|12,052,683|97|
|DefineProperty (setter & enumerable=false & configurable=false)|11,900,400|97|
|DefineProperty (writable)|848,067,464|97|
|DefineProperty (writable & enumerable=false)|848,069,566|100|
|DefineProperty (writable & enumerable=false & configurable=false)|848,189,680|100|
|DefineProperties (setter)|847,828,326|101|
|DefineProperties (setter & enumerable=false)|11,951,776|98|
|DefineProperties (setter & enumerable=false & configurable=false)|11,065,607|98|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,431,462|92|
|Using replaceAll()|3,090,187|99|
|Using replaceAll(//g)|3,074,652|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|279,883|91|
|Sort using first char|1,258,036|99|
|Sort using localeCompare|1,194,111|99|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,054|99|
|{...smallObject} - Total keys: 2|110,594,613|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,156|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,424|100|
|{ ...bigObject, ...anotherBigObject }|1,229|99|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,047,096|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,819,284|99|
|{ ...smallObject, ...anotherSmallObject }|23,824,831|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,463 ops/sec ±0.87% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 522 ops/sec ±0.39% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 5,379 ops/sec ±0.56% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 947 ops/sec ±34.57% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,168,086|100|
|Using backtick (`)|848,903,031|98|
|Using array.join|12,469,610|96|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|849,411,881|100|
|Using indexof|848,986,367|101|
|Using RegExp.test|15,050,479|98|
|Using RegExp.text with cached regex pattern|15,761,691|97|
|Using new RegExp.test|4,332,374|96|
|Using new RegExp.test with cached regex pattern|4,961,467|100|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,540,331|94|
|Using this|159,249,887|95|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,363,294|96|
|Date.now()|21,985,340|97|
