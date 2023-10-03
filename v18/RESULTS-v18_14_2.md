## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|595,271,421|92|
|Using dot notation|606,545,042|93|
|Using define property (writable)|2,565,170|97|
|Using define property initialized (writable)|3,156,964|96|
|Using define property (getter)|1,310,978|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:38 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.012ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.468ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|46.929ms
new Array(length)|1,000,000|6.885ms
array.push|100,000,000|1,955.015ms
new Array(length)|100,000,000|4,715.513ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.668ms
new Array(length)|10,000|4.273ms
array.push|1,000,000|327.205ms
new Array(length)|1,000,000|4.981ms
array.push|100,000,000|2,775.915ms
new Array(length)|100,000,000|5,524.558ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:57 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|84|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:42 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,003|82|
|new Blob (1024)|390|67|
|text (128)|28,549|61|
|text (1024)|19,414|77|
|arrayBuffer (128)|28,518|74|
|arrayBuffer (1024)|20,050|79|
|slice (0, 64)|52,990|74|
|slice (0, 512)|23,950|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|144,343|54|
|[True conditional] Using constructor name|112,543|86|
|[True conditional] Check if property is valid then instanceof |112,750|89|
|[False conditional] Using instanceof only|640,615,896|89|
|[False conditional] Using constructor name|637,069,653|90|
|[False conditional] Check if property is valid then instanceof |637,711,766|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:34 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,516|92|
|crypto.verify('RSA-SHA256')|4,556|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:19 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,594,873|96|
|fromUnixToISOString(new Date())|1,350,283|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,948|85|
|Intl.DateTimeFormat().format(new Date())|8,163|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,971|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,101|81|
|Reusing Intl.DateTimeFormat()|483,192|98|
|Date.toLocaleDateString()|496,159|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,629|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:05 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|659,012|95|
|Using brackets {}|666,117|98|
|Using '' + |656,483|96|
|Using date.toString()|717,434|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:48 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,361,839|96|
|Using undefined assignment|592,807,216|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:28 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|152,164|56|
|NodeError|119,431|89|
|NodeError Range|115,252|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:40 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,365,070|97|
|Function returning explicitly undefined|1,355,232|92|
|Function returning implicitly undefined|1,398,499|94|
|Function returning string|1,368,728|94|
|Function returning integer|1,370,832|92|
|Function returning float|1,386,735|96|
|Function returning functions|1,350,721|96|
|Function returning arrow functions|1,338,430|94|
|Function returning empty object|1,381,714|92|
|Function returning empty array|1,362,081|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:46 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|562,943,869|96|
|using Array.includes (first item)|560,200,969|93|
|Using raw comparison|548,807,525|94|
|Using raw comparison (first item)|563,700,648|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:40 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,533,370|86|
|Using Object.getOwnPropertyNames()|51,176,841|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:39 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,271,318|95|
|Length = 10_000 - Array.at|16,301,775|96|
|Length = 1_000_000 - Array.at|16,282,453|94|
|Length = 100 - Array[length - 1]|708,336,528|98|
|Length = 10_000 - Array[length - 1]|705,572,738|97|
|Length = 1_000_000 - Array[length - 1]|706,455,593|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:23 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,837,656|89|
|Object.create({})|985,139|81|
|Cached Empty.prototype|593,453,034|98|
|Empty.prototype|1,088,203|85|
|Empty class|708,773|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:01 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,352,661|97|
|Using optional chain (obj.field?.field2) (undefined)|589,703,321|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,772,754|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,125,468|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|149,427,298|85|
|Using parseInt(x, 10) - big number (10 len)|10,561,665|84|
|Using + - small number (2 len)|753,779,238|83|
|Using + - big number (10 len)|743,256,157|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:18 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|579,700|75|
|Using ? operator to avoid rejection|597,561|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:47 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|241,221,922|91|
|Raw usage underscore usage|247,808,179|93|
|Manipulating private properties using #|179,024,499|84|
|Manipulating private properties using underscore(_)|160,730,654|84|
|Manipulating private properties using Symbol|160,593,932|89|
|Manipulating private properties using PrivateSymbol|36,210,787|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:37 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,048,121|86|
|Adding property in the object creation - small object|2,088,206|90|
|Adding property after the function creation - small class|119,615|80|
|Adding property in the function creation - small class|116,065|80|
|Adding property after the class creation - small class|94,531|76|
|Adding property in the class creation - small class|96,268|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:39 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|709,306,927|97|
|Getter|53,106,392|95|
|Method|710,215,235|97|
|DefineProperty (getter)|710,319,793|97|
|DefineProperty (getter & enumerable=false)|52,869,461|93|
|DefineProperty (getter & configurable=false)|711,115,317|96|
|DefineProperty (getter & enumerable=false & configurable=false)|52,608,884|97|
|DefineProperty (writable)|357,148,527|51|
|DefineProperty (writable & enumerable=false)|83,562,769|81|
|DefineProperty (writable & enumerable=false & configurable=false)|82,494,297|80|
|DefineProperties (getter)|33,133,134|93|
|DefineProperties (getter & enumerable=false)|53,084,792|96|
|DefineProperties (getter & enumerable=false & configurable=false)|52,248,357|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:10 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|577,222,196|97|
|Setter|8,125,934|97|
|Method|582,640,714|99|
|DefineProperty (setter)|583,052,628|95|
|DefineProperty (setter & enumerable=false)|8,483,697|93|
|DefineProperty (setter & configurable=false)|8,431,931|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,330,185|98|
|DefineProperty (writable)|589,817,700|93|
|DefineProperty (writable & enumerable=false)|590,596,532|98|
|DefineProperty (writable & enumerable=false & configurable=false)|590,176,654|96|
|DefineProperties (setter)|95,979,650|22|
|DefineProperties (setter & enumerable=false)|8,486,893|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,349,480|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,480,920|93|
|Using replaceAll()|2,178,722|95|
|Using replaceAll(//g)|2,183,731|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:18 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,193,442|90|
|{ ...object, __proto__: null }|15,183,730|87|
|{ ...object, newProp: true }|409,603|80|
|structuredClone|161,010|92|
|JSON.parse + JSON.stringify|124,982|89|
|loop + object.keys starting with {}|722,991|87|
|loop + object.keys starting with { __proto__: null }|382,756|83|
|loop + object.keys starting with { randomProp: true }|283,278|80|
|object.keys + reduce(FN, {})|265,274|87|
|object.keys + reduce(FN, { __proto__: null })|395,337|81|
|object.keys + reduce(FN, { newProp: true })|270,067|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:20 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|197,547|93|
|Sort using first char|889,524|93|
|Sort using localeCompare|787,449|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:29 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,126|82|
|{...smallObject} - Total keys: 2|60,133,475|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,262|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,381|85|
|{ ...bigObject, ...anotherBigObject }|663|79|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,657,190|84|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,224,763|83|
|{ ...smallObject, ...anotherSmallObject }|12,262,226|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:47 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,654 ops/sec ±1.18% (84 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 412 ops/sec ±0.29% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:23 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Writable

```
streams.Writable writing 1e3 * "some data" x 3,460 ops/sec ±0.50% (94 runs sampled)
streams.web.WritableStream writing 1e3 * "some data" x 697 ops/sec ±16.35% (46 runs sampled)
Fastest is streams.Writable writing 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:56:23 GMT+0000 (Coordinated Universal Time)
</details>


## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,286,571|94|
|Using backtick (`)|603,597,515|94|
|Using array.join|4,955,561|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:59:37 GMT+0000 (Coordinated Universal Time)
</details>


## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|587,756,228|97|
|Using indexof|591,593,719|96|
|Using RegExp.test|11,385,711|95|
|Using RegExp.text with cached regex pattern|11,893,985|95|
|Using new RegExp.test|3,090,022|96|
|Using new RegExp.test with cached regex pattern|3,625,030|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:25 GMT+0000 (Coordinated Universal Time)
</details>


## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|112,393,786|95|
|Using this|110,917,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:10:38 GMT+0000 (Coordinated Universal Time)
</details>


## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,010,207|94|
|Date.now()|15,802,914|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 23:19:11 GMT+0000 (Coordinated Universal Time)
</details>

