## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|701,664,605|84|
|Using dot notation|589,107,824|84|
|Using define property (writable)|2,394,709|90|
|Using define property initialized (writable)|3,035,620|86|
|Using define property (getter)|1,213,715|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:41 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.005ms
array.push|100|0.028ms
new Array(length)|100|0.012ms
array.push|1,000|0.116ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|37.798ms
new Array(length)|1,000,000|6.235ms
array.push|100,000,000|1,572.66ms
new Array(length)|100,000,000|4,315.433ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.075ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.583ms
new Array(length)|10,000|4.342ms
array.push|1,000,000|322.767ms
new Array(length)|1,000,000|4.359ms
array.push|100,000,000|2,153.436ms
new Array(length)|100,000,000|4,702.79ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|362|83|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:42 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,201|90|
|new Blob (1024)|395|68|
|text (128)|26,265|72|
|text (1024)|17,689|85|
|arrayBuffer (128)|32,214|87|
|arrayBuffer (1024)|20,869|87|
|slice (0, 64)|62,772|82|
|slice (0, 512)|27,599|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:57 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|198,442|59|
|[True conditional] Using constructor name|155,958|94|
|[True conditional] Check if property is valid then instanceof |158,640|91|
|[False conditional] Using instanceof only|716,507,123|98|
|[False conditional] Using constructor name|717,539,742|96|
|[False conditional] Check if property is valid then instanceof |717,715,400|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:31 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,010|93|
|crypto.verify('RSA-SHA256')|20,356|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:20 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,532,645|93|
|fromUnixToISOString(new Date())|1,319,442|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,675|82|
|Intl.DateTimeFormat().format(new Date())|8,819|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,598|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,567|79|
|Reusing Intl.DateTimeFormat()|360,376|95|
|Date.toLocaleDateString()|428,370|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,935|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:07 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|647,651|95|
|Using brackets {}|649,796|94|
|Using '' + |648,633|94|
|Using date.toString()|689,497|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:49 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,346,004|93|
|Using undefined assignment|587,634,124|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:25 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|157,326|55|
|NodeError|128,255|90|
|NodeError Range|131,363|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:38 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,227,941|94|
|Function returning explicitly undefined|1,236,766|96|
|Function returning implicitly undefined|1,259,050|95|
|Function returning string|1,252,783|93|
|Function returning integer|1,274,512|97|
|Function returning float|1,242,717|98|
|Function returning functions|1,228,843|97|
|Function returning arrow functions|1,252,419|98|
|Function returning empty object|1,266,174|96|
|Function returning empty array|1,252,875|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:44 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,017,904|98|
|using Array.includes (first item)|593,044,768|97|
|Using raw comparison|594,908,305|99|
|Using raw comparison (first item)|594,336,752|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:37 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,640,650|82|
|Using Object.getOwnPropertyNames()|47,525,491|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:35 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,578,486|97|
|Length = 10_000 - Array.at|19,014,029|96|
|Length = 1_000_000 - Array.at|18,793,410|97|
|Length = 100 - Array[length - 1]|594,859,981|98|
|Length = 10_000 - Array[length - 1]|592,970,424|98|
|Length = 1_000_000 - Array[length - 1]|593,743,721|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:24 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|32,276,009|82|
|Object.create({})|991,783|77|
|Cached Empty.prototype|688,284,572|89|
|Empty.prototype|1,013,870|78|
|Empty class|674,260|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:06 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,175,912|97|
|Using optional chain (obj.field?.field2) (undefined)|594,414,139|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|595,013,556|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,223,354|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:44 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|216,793,135|90|
|Using parseInt(x, 10) - big number (10 len)|15,300,395|95|
|Using + - small number (2 len)|594,511,101|98|
|Using + - big number (10 len)|594,677,594|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:08 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|695,469|78|
|Using ? operator to avoid rejection|733,501|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:46 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,036,854|96|
|Raw usage underscore usage|6,597,910|98|
|Manipulating private properties using #|2,436,130|96|
|Manipulating private properties using underscore(_)|700,091,148|96|
|Manipulating private properties using Symbol|698,120,725|94|
|Manipulating private properties using PrivateSymbol|24,278,988|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:33 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,594,826|94|
|Adding property in the object creation - small object|1,592,298|93|
|Adding property after the function creation - small class|144,434|84|
|Adding property in the function creation - small class|146,621|84|
|Adding property after the class creation - small class|122,339|81|
|Adding property in the class creation - small class|122,861|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:38 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|594,258,515|96|
|Getter|66,934,879|95|
|Method|595,793,772|98|
|DefineProperty (getter)|594,798,251|96|
|DefineProperty (getter & enumerable=false)|66,622,866|94|
|DefineProperty (getter & configurable=false)|595,828,290|96|
|DefineProperty (getter & enumerable=false & configurable=false)|66,620,815|96|
|DefineProperty (writable)|595,881,173|95|
|DefineProperty (writable & enumerable=false)|248,521,564|44|
|DefineProperty (writable & enumerable=false & configurable=false)|105,932,134|84|
|DefineProperties (getter)|41,303,674|93|
|DefineProperties (getter & enumerable=false)|66,203,695|93|
|DefineProperties (getter & enumerable=false & configurable=false)|67,336,053|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:06 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|580,195,384|88|
|Setter|5,582,902|89|
|Method|570,680,737|85|
|DefineProperty (setter)|578,639,805|84|
|DefineProperty (setter & enumerable=false)|5,809,939|89|
|DefineProperty (setter & configurable=false)|5,752,378|89|
|DefineProperty (setter & enumerable=false & configurable=false)|5,868,651|87|
|DefineProperty (writable)|710,104,842|88|
|DefineProperty (writable & enumerable=false)|713,342,134|90|
|DefineProperty (writable & enumerable=false & configurable=false)|704,015,901|89|
|DefineProperties (setter)|321,055,422|45|
|DefineProperties (setter & enumerable=false)|5,108,483|86|
|DefineProperties (setter & enumerable=false & configurable=false)|5,572,974|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:44 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,999,791|93|
|Using replaceAll()|1,875,489|97|
|Using replaceAll(//g)|1,789,253|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:19 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,458,050|94|
|{ ...object, __proto__: null }|13,557,547|94|
|{ ...object, newProp: true }|502,326|80|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|141,191|97|
|loop + object.keys starting with {}|324,792|94|
|loop + object.keys starting with { __proto__: null }|422,290|94|
|loop + object.keys starting with { randomProp: true }|337,052|97|
|object.keys + reduce(FN, {})|326,023|95|
|object.keys + reduce(FN, { __proto__: null })|425,439|96|
|object.keys + reduce(FN, { newProp: true })|337,928|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:07 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,302|96|
|Sort using first char|884,280|96|
|Sort using localeCompare|444,130|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:25 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,099|91|
|{...smallObject} - Total keys: 2|47,940,986|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,117|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,975|92|
|{ ...bigObject, ...anotherBigObject }|677|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,703,427|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,663,758|92|
|{ ...smallObject, ...anotherSmallObject }|10,463,930|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:42 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,056 ops/sec ±21.12% (82 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 308 ops/sec ±1.26% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:30 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>

