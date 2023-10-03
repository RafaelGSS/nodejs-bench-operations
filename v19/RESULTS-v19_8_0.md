## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|596,717,732|95|
|Using dot notation|593,283,768|94|
|Using define property (writable)|3,002,955|94|
|Using define property initialized (writable)|4,133,444|96|
|Using define property (getter)|1,650,457|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.006ms
array.push|100|0.043ms
new Array(length)|100|0.017ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.046ms
array.push|10,000|0.553ms
new Array(length)|10,000|3.688ms
array.push|1,000,000|44.396ms
new Array(length)|1,000,000|11.844ms
array.push|100,000,000|2,322.873ms
new Array(length)|100,000,000|5,640.65ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.022ms
array.push|100|0.114ms
new Array(length)|100|0.014ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.765ms
new Array(length)|10,000|0.339ms
array.push|1,000,000|442.888ms
new Array(length)|1,000,000|10.886ms
array.push|100,000,000|2,974.684ms
new Array(length)|100,000,000|7,029.463ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:00 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|84|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:44 GMT+0000 (Coordinated Universal Time)
</details>



## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,487|49|
|[True conditional] Using constructor name|125,674|90|
|[True conditional] Check if property is valid then instanceof |128,045|95|
|[False conditional] Using instanceof only|597,024,692|95|
|[False conditional] Using constructor name|595,601,379|96|
|[False conditional] Check if property is valid then instanceof |596,369,804|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,557|91|
|crypto.verify('RSA-SHA256')|4,565|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:21 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|987,543|92|
|fromUnixToISOString(new Date())|1,496,696|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,614|80|
|Intl.DateTimeFormat().format(new Date())|7,934|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,565|60|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,065|90|
|Reusing Intl.DateTimeFormat()|474,568|95|
|Date.toLocaleDateString()|501,134|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|657,603|95|
|Using brackets {}|673,879|93|
|Using '' + |671,336|96|
|Using date.toString()|744,973|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:49 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,481,120|96|
|Using undefined assignment|714,613,443|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:27 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,053|61|
|NodeError|133,315|88|
|NodeError Range|127,793|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:39 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,534,160|89|
|Function returning explicitly undefined|1,516,616|93|
|Function returning implicitly undefined|1,557,184|89|
|Function returning string|1,525,470|90|
|Function returning integer|1,489,568|89|
|Function returning float|1,452,131|87|
|Function returning functions|1,288,256|82|
|Function returning arrow functions|1,373,888|86|
|Function returning empty object|1,478,352|90|
|Function returning empty array|1,399,999|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:48 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|597,331,231|96|
|using Array.includes (first item)|595,953,006|96|
|Using raw comparison|597,967,665|98|
|Using raw comparison (first item)|597,580,160|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:38 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,914,994|90|
|Using Object.getOwnPropertyNames()|39,558,831|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:36 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|601,045,835|98|
|Length = 10_000 - Array.at|595,408,925|95|
|Length = 1_000_000 - Array.at|601,961,469|97|
|Length = 100 - Array[length - 1]|595,167,644|96|
|Length = 10_000 - Array[length - 1]|594,850,430|97|
|Length = 1_000_000 - Array[length - 1]|594,042,925|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:18 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,546,589|92|
|Object.create({})|1,400,345|76|
|Cached Empty.prototype|715,624,414|98|
|Empty.prototype|1,332,787|74|
|Empty class|973,149|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:01 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|699,577,693|92|
|Using optional chain (obj.field?.field2) (undefined)|715,940,479|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,936,908|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,318,735|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|151,097,028|88|
|Using parseInt(x, 10) - big number (10 len)|11,756,339|85|
|Using + - small number (2 len)|729,797,702|87|
|Using + - big number (10 len)|744,579,592|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:17 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|792,958|70|
|Using ? operator to avoid rejection|833,459|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:48 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|708,933,060|97|
|Raw usage underscore usage|710,306,663|97|
|Manipulating private properties using #|701,066,959|97|
|Manipulating private properties using underscore(_)|703,351,333|97|
|Manipulating private properties using Symbol|700,942,786|92|
|Manipulating private properties using PrivateSymbol|27,026,632|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:38 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,736,944|88|
|Adding property in the object creation - small object|1,689,222|85|
|Adding property after the function creation - small class|135,720|73|
|Adding property in the function creation - small class|145,577|77|
|Adding property after the class creation - small class|114,242|71|
|Adding property in the class creation - small class|116,115|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:39 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|718,061,133|86|
|Getter|48,850,062|90|
|Method|739,067,956|87|
|DefineProperty (getter)|745,565,279|88|
|DefineProperty (getter & enumerable=false)|50,213,473|85|
|DefineProperty (getter & configurable=false)|730,014,201|87|
|DefineProperty (getter & enumerable=false & configurable=false)|51,158,260|91|
|DefineProperty (writable)|730,881,430|87|
|DefineProperty (writable & enumerable=false)|741,263,479|91|
|DefineProperty (writable & enumerable=false & configurable=false)|728,895,105|88|
|DefineProperties (getter)|50,897,342|92|
|DefineProperties (getter & enumerable=false)|50,529,841|91|
|DefineProperties (getter & enumerable=false & configurable=false)|50,433,412|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:13 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,496,928|97|
|Setter|7,528,592|98|
|Method|473,052,160|92|
|DefineProperty (setter)|478,408,979|96|
|DefineProperty (setter & enumerable=false)|7,691,141|98|
|DefineProperty (setter & configurable=false)|7,702,397|98|
|DefineProperty (setter & enumerable=false & configurable=false)|7,658,968|98|
|DefineProperty (writable)|711,967,074|95|
|DefineProperty (writable & enumerable=false)|713,396,571|95|
|DefineProperty (writable & enumerable=false & configurable=false)|711,483,648|96|
|DefineProperties (setter)|713,187,266|98|
|DefineProperties (setter & enumerable=false)|6,688,686|97|
|DefineProperties (setter & enumerable=false & configurable=false)|6,738,151|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,593,439|94|
|Using replaceAll()|2,348,158|94|
|Using replaceAll(//g)|2,324,733|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:19 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,436,568|95|
|{ ...object, __proto__: null }|12,883,934|91|
|{ ...object, newProp: true }|468,206|78|
|structuredClone|172,568|98|
|JSON.parse + JSON.stringify|142,217|96|
|loop + object.keys starting with {}|689,040|94|
|loop + object.keys starting with { __proto__: null }|405,111|97|
|loop + object.keys starting with { randomProp: true }|307,298|96|
|object.keys + reduce(FN, {})|293,743|98|
|object.keys + reduce(FN, { __proto__: null })|402,095|96|
|object.keys + reduce(FN, { newProp: true })|306,243|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:14 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,078|90|
|Sort using first char|781,025|92|
|Sort using localeCompare|710,635|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:29 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,354|95|
|{...smallObject} - Total keys: 2|69,718,653|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,552|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,507|97|
|{ ...bigObject, ...anotherBigObject }|824|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,884,523|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,175,547|99|
|{ ...smallObject, ...anotherSmallObject }|17,513,427|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:39 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,508 ops/sec ±1.22% (89 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 415 ops/sec ±0.34% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:26 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Writable

```
streams.Writable writing 1e3 * "some data" x 4,459 ops/sec ±0.99% (90 runs sampled)
streams.web.WritableStream writing 1e3 * "some data" x 1,000 ops/sec ±17.19% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:56:31 GMT+0000 (Coordinated Universal Time)
</details>


## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|700,747,575|95|
|Using backtick (`)|714,975,531|95|
|Using array.join|6,692,626|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:59:37 GMT+0000 (Coordinated Universal Time)
</details>


## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|594,928,009|97|
|Using indexof|594,484,221|97|
|Using RegExp.test|11,746,412|98|
|Using RegExp.text with cached regex pattern|12,192,337|97|
|Using new RegExp.test|3,210,672|98|
|Using new RegExp.test with cached regex pattern|3,685,809|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:10 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,333|94|
|Sort using first char|749,921|95|
|Sort using localeCompare|695,771|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>

