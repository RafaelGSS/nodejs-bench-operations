# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Node:__ `v20.0.0`
* __Run:__ Sat Apr 22 2023 00:27:53 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|855,018,871|98|
|Using dot notation|855,920,129|97|
|Using define property (writable)|4,856,015|99|
|Using define property initialized (writable)|6,459,571|99|
|Using define property (getter)|2,500,987|94|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.007ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.371ms
new Array(length)|10,000|0.262ms
array.push|1,000,000|29.809ms
new Array(length)|1,000,000|6.993ms
array.push|100,000,000|1,742.574ms
new Array(length)|100,000,000|4,169.575ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.015ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.289ms
new Array(length)|10,000|0.15ms
array.push|1,000,000|22.927ms
new Array(length)|1,000,000|4.36ms
array.push|100,000,000|2,473.196ms
new Array(length)|100,000,000|3,850.515ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|331|93|
|Array.from|24|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|233,072|52|
|[True conditional] Using constructor name|183,195|95|
|[True conditional] Check if property is valid then instanceof |184,201|97|
|[False conditional] Using instanceof only|857,467,735|100|
|[False conditional] Using constructor name|857,177,325|95|
|[False conditional] Check if property is valid then instanceof |857,281,564|98|

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,939|97|
|crypto.verify('RSA-SHA256')|6,980|98|

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,523,137|99|
|fromUnixToISOString(new Date())|2,265,200|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,011|89|
|Intl.DateTimeFormat().format(new Date())|11,817|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,523|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,425|82|
|Reusing Intl.DateTimeFormat()|645,038|98|
|Date.toLocaleDateString()|603,581|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,934|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,101,106|92|
|Using brackets {}|1,119,448|100|
|Using '' + |1,110,105|100|
|Using date.toString()|1,232,415|100|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,018,858|95|
|Using undefined assignment|855,056,817|100|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|223,057|53|
|NodeError|177,131|99|
|NodeError Range|176,287|96|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,656,389|99|
|Function returning explicitly undefined|1,666,752|97|
|Function returning implicitly undefined|1,700,582|98|
|Function returning string|1,643,897|99|
|Function returning integer|1,681,966|97|
|Function returning float|1,688,293|96|
|Function returning functions|1,628,614|99|
|Function returning arrow functions|1,657,441|100|
|Function returning empty object|1,686,840|94|
|Function returning empty array|1,685,347|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|855,077,902|100|
|using Array.includes (first item)|855,719,438|99|
|Using raw comparison|857,404,291|97|
|Using raw comparison (first item)|856,860,624|101|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,972,292|97|
|Using Object.getOwnPropertyNames()|94,145,289|100|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|853,451,011|100|
|Length = 10_000 - Array.at|854,202,674|96|
|Length = 1_000_000 - Array.at|853,367,714|98|
|Length = 100 - Array[length - 1]|854,951,236|99|
|Length = 10_000 - Array[length - 1]|856,536,769|99|
|Length = 1_000_000 - Array[length - 1]|855,346,798|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,199,225|98|
|Object.create({})|2,605,074|81|
|Cached Empty.prototype|855,882,487|95|
|Empty.prototype|2,456,128|88|
|Empty class|1,545,719|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|855,701,747|98|
|Using optional chain (obj.field?.field2) (undefined)|856,493,569|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|856,163,581|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|856,241,214|100|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|856,263,230|100|
|Using parseInt(x, 10) - big number (10 len)|856,795,791|97|
|Using + - small number (2 len)|857,070,404|94|
|Using + - big number (10 len)|856,541,981|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,180,785|84|
|Using ? operator to avoid rejection|1,217,700|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|852,463,238|101|
|Raw usage underscore usage|853,378,210|95|
|Manipulating private properties using #|845,686,819|97|
|Manipulating private properties using underscore(_)|846,338,339|97|
|Manipulating private properties using Symbol|845,957,354|100|
|Manipulating private properties using PrivateSymbol|57,810,929|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,582,449|97|
|Adding property in the object creation - small object|8,658,736|99|
|Adding property after the function creation - small class|267,316|92|
|Adding property in the function creation - small class|269,044|91|
|Adding property after the class creation - small class|227,918|88|
|Adding property in the class creation - small class|226,288|88|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|855,971,103|98|
|Getter|63,079,834|70|
|Method|856,003,149|99|
|DefineProperty (getter)|856,816,782|98|
|DefineProperty (getter & enumerable=false)|94,544,066|97|
|DefineProperty (getter & configurable=false)|857,052,577|99|
|DefineProperty (getter & enumerable=false & configurable=false)|94,756,766|96|
|DefineProperty (writable)|856,620,523|98|
|DefineProperty (writable & enumerable=false)|857,592,204|101|
|DefineProperty (writable & enumerable=false & configurable=false)|857,057,225|98|
|DefineProperties (getter)|74,603,965|76|
|DefineProperties (getter & enumerable=false)|57,835,876|90|
|DefineProperties (getter & enumerable=false & configurable=false)|94,550,733|98|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|847,160,517|98|
|Setter|12,626,726|98|
|Method|848,755,561|97|
|DefineProperty (setter)|849,109,043|96|
|DefineProperty (setter & enumerable=false)|12,961,959|98|
|DefineProperty (setter & configurable=false)|12,926,533|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,935,826|99|
|DefineProperty (writable)|802,813,823|96|
|DefineProperty (writable & enumerable=false)|110,315,532|84|
|DefineProperty (writable & enumerable=false & configurable=false)|104,616,885|79|
|DefineProperties (setter)|847,613,187|97|
|DefineProperties (setter & enumerable=false)|12,753,059|98|
|DefineProperties (setter & enumerable=false & configurable=false)|12,805,133|98|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,797,136|94|
|Using replaceAll()|3,270,914|99|
|Using replaceAll(//g)|3,393,510|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|275,333|100|
|Sort using first char|1,391,259|101|
|Sort using localeCompare|1,324,536|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,091|97|
|{...smallObject} - Total keys: 2|113,438,816|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,193|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,760|100|
|{ ...bigObject, ...anotherBigObject }|1,241|99|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,733,713|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,384,608|98|
|{ ...smallObject, ...anotherSmallObject }|25,734,905|97|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 2,636 ops/sec ±0.67% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 585 ops/sec ±0.18% (92 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 6,762 ops/sec ±0.45% (96 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 889 ops/sec ±41.55% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|855,873,893|100|
|Using backtick (`)|856,019,785|96|
|Using array.join|12,947,670|93|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|855,199,291|98|
|Using indexof|856,278,735|100|
|Using RegExp.test|16,631,832|96|
|Using RegExp.text with cached regex pattern|17,018,945|97|
|Using new RegExp.test|4,902,702|96|
|Using new RegExp.test with cached regex pattern|5,726,364|99|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|851,389,038|98|
|Using this|853,402,232|100|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,371,764|95|
|Date.now()|24,760,132|99|
