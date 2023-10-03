## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|558,977,860|92|
|Using dot notation|565,307,941|93|
|Using define property (writable)|2,377,952|89|
|Using define property initialized (writable)|3,041,505|89|
|Using define property (getter)|1,315,047|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:42 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.004ms
array.push|100|0.059ms
new Array(length)|100|0.017ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.516ms
new Array(length)|10,000|1.676ms
array.push|1,000,000|47.172ms
new Array(length)|1,000,000|14.998ms
array.push|100,000,000|2,216.616ms
new Array(length)|100,000,000|6,878.959ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.025ms
array.push|100|0.037ms
new Array(length)|100|0.03ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.497ms
new Array(length)|10,000|0.371ms
array.push|1,000,000|38.013ms
new Array(length)|1,000,000|11.717ms
array.push|100,000,000|3,114.909ms
new Array(length)|100,000,000|6,896.814ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:23 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|382|78|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:46 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,319|89|
|new Blob (1024)|411|73|
|text (128)|28,302|63|
|text (1024)|19,530|86|
|arrayBuffer (128)|31,665|84|
|arrayBuffer (1024)|20,958|86|
|slice (0, 64)|62,838|78|
|slice (0, 512)|27,961|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,449|50|
|[True conditional] Using constructor name|127,758|90|
|[True conditional] Check if property is valid then instanceof |128,501|93|
|[False conditional] Using instanceof only|598,110,072|94|
|[False conditional] Using constructor name|599,303,437|97|
|[False conditional] Check if property is valid then instanceof |596,832,428|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,891|87|
|crypto.verify('RSA-SHA256')|3,861|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:21 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|760,819|92|
|fromUnixToISOString(new Date())|1,213,500|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:41 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,425|87|
|Intl.DateTimeFormat().format(new Date())|8,759|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,796|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,072|81|
|Reusing Intl.DateTimeFormat()|461,494|97|
|Date.toLocaleDateString()|459,135|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,345|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|671,675|95|
|Using brackets {}|686,610|96|
|Using '' + |682,068|93|
|Using date.toString()|741,929|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:50 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,579,706|93|
|Using undefined assignment|715,898,347|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:25 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|138,810|58|
|NodeError|109,331|86|
|NodeError Range|111,939|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:42 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,060,678|87|
|Function returning explicitly undefined|1,000,177|87|
|Function returning implicitly undefined|1,065,690|89|
|Function returning string|1,042,009|87|
|Function returning integer|1,078,312|91|
|Function returning float|1,040,948|87|
|Function returning functions|1,048,283|90|
|Function returning arrow functions|1,048,202|83|
|Function returning empty object|1,085,847|88|
|Function returning empty array|1,095,567|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:49 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,993,143|96|
|using Array.includes (first item)|597,923,274|96|
|Using raw comparison|599,344,855|97|
|Using raw comparison (first item)|597,774,157|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:39 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,818,178|89|
|Using Object.getOwnPropertyNames()|50,336,097|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:33 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|601,005,729|97|
|Length = 10_000 - Array.at|597,447,827|96|
|Length = 1_000_000 - Array.at|600,456,575|99|
|Length = 100 - Array[length - 1]|596,561,137|99|
|Length = 10_000 - Array[length - 1]|594,246,200|98|
|Length = 1_000_000 - Array[length - 1]|593,235,361|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:19 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,047,634|94|
|Object.create({})|1,604,456|81|
|Cached Empty.prototype|598,233,790|95|
|Empty.prototype|1,514,721|79|
|Empty class|997,366|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:02 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|591,212,624|93|
|Using optional chain (obj.field?.field2) (undefined)|579,267,420|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|589,327,517|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|588,945,724|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|124,694,282|88|
|Using parseInt(x, 10) - big number (10 len)|11,378,466|92|
|Using + - small number (2 len)|571,694,757|95|
|Using + - big number (10 len)|583,807,582|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:16 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|655,396|72|
|Using ? operator to avoid rejection|763,522|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:52 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|594,691,123|97|
|Raw usage underscore usage|597,888,148|97|
|Manipulating private properties using #|593,244,388|94|
|Manipulating private properties using underscore(_)|594,641,935|95|
|Manipulating private properties using Symbol|590,070,397|93|
|Manipulating private properties using PrivateSymbol|38,875,046|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:39 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,066,711|97|
|Adding property in the object creation - small object|2,074,186|94|
|Adding property after the function creation - small class|174,624|85|
|Adding property in the function creation - small class|176,709|89|
|Adding property after the class creation - small class|142,584|81|
|Adding property in the class creation - small class|141,457|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:33 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|573,587,098|88|
|Getter|42,757,512|93|
|Method|584,608,277|93|
|DefineProperty (getter)|592,735,720|96|
|DefineProperty (getter & enumerable=false)|43,465,537|94|
|DefineProperty (getter & configurable=false)|601,853,321|92|
|DefineProperty (getter & enumerable=false & configurable=false)|43,262,753|94|
|DefineProperty (writable)|602,657,221|89|
|DefineProperty (writable & enumerable=false)|602,308,724|94|
|DefineProperty (writable & enumerable=false & configurable=false)|598,387,304|94|
|DefineProperties (getter)|43,972,007|89|
|DefineProperties (getter & enumerable=false)|43,652,005|94|
|DefineProperties (getter & enumerable=false & configurable=false)|30,490,252|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:11 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,324,002|97|
|Setter|7,490,038|96|
|Method|477,920,252|96|
|DefineProperty (setter)|478,516,674|97|
|DefineProperty (setter & enumerable=false)|7,500,063|96|
|DefineProperty (setter & configurable=false)|7,566,380|94|
|DefineProperty (setter & enumerable=false & configurable=false)|7,469,531|94|
|DefineProperty (writable)|713,767,388|96|
|DefineProperty (writable & enumerable=false)|715,736,810|97|
|DefineProperty (writable & enumerable=false & configurable=false)|715,686,901|98|
|DefineProperties (setter)|713,669,788|96|
|DefineProperties (setter & enumerable=false)|7,204,482|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,970,064|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:41 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,954,386|94|
|Using replaceAll()|1,786,035|91|
|Using replaceAll(//g)|1,690,034|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:22 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,949,995|86|
|{ ...object, __proto__: null }|10,409,010|89|
|{ ...object, newProp: true }|389,091|80|
|structuredClone|136,239|91|
|JSON.parse + JSON.stringify|113,256|89|
|loop + object.keys starting with {}|586,176|87|
|loop + object.keys starting with { __proto__: null }|375,482|94|
|loop + object.keys starting with { randomProp: true }|272,470|97|
|object.keys + reduce(FN, {})|615,463|91|
|object.keys + reduce(FN, { __proto__: null })|373,216|95|
|object.keys + reduce(FN, { newProp: true })|275,760|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:17 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|135,838|84|
|Sort using first char|631,787|84|
|Sort using localeCompare|596,721|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:34 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,212|94|
|{...smallObject} - Total keys: 2|62,971,703|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,329|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,642|98|
|{ ...bigObject, ...anotherBigObject }|766|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,072,081|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,099,651|95|
|{ ...smallObject, ...anotherSmallObject }|12,014,950|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:42 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,476 ops/sec ±21.65% (86 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 375 ops/sec ±10.03% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:23 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Writable

```
streams.Writable writing 1e3 * "some data" x 2,817 ops/sec ±2.14% (86 runs sampled)
streams.web.WritableStream writing 1e3 * "some data" x 656 ops/sec ±13.12% (58 runs sampled)
Fastest is streams.Writable writing 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:56:36 GMT+0000 (Coordinated Universal Time)
</details>


## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|640,028,311|89|
|Using backtick (`)|655,405,886|89|
|Using array.join|6,079,105|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:59:37 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>

