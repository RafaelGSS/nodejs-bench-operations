## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|592,164,196|95|
|Using dot notation|597,534,311|92|
|Using define property (writable)|3,258,678|97|
|Using define property initialized (writable)|4,122,233|95|
|Using define property (getter)|1,592,521|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:34 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.108ms
new Array(length)|100|0.01ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.489ms
new Array(length)|10,000|0.264ms
array.push|1,000,000|29.107ms
new Array(length)|1,000,000|20.14ms
array.push|100,000,000|1,898.367ms
new Array(length)|100,000,000|4,862.458ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.071ms
new Array(length)|100|0.03ms
array.push|1,000|0.055ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.646ms
new Array(length)|10,000|4.339ms
array.push|1,000,000|330.707ms
new Array(length)|1,000,000|5.849ms
array.push|100,000,000|2,636.736ms
new Array(length)|100,000,000|5,473.416ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|281|68|
|Array.from|12|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:45 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,835|88|
|new Blob (1024)|348|66|
|text (128)|20,148|73|
|text (1024)|13,627|81|
|arrayBuffer (128)|25,524|78|
|arrayBuffer (1024)|15,328|82|
|slice (0, 64)|52,035|75|
|slice (0, 512)|23,169|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:57 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|157,107|55|
|[True conditional] Using constructor name|124,530|88|
|[True conditional] Check if property is valid then instanceof |126,564|93|
|[False conditional] Using instanceof only|780,188,462|93|
|[False conditional] Using constructor name|774,171,316|88|
|[False conditional] Check if property is valid then instanceof |783,333,715|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|22,278|91|
|crypto.verify('RSA-SHA256')|21,634|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:21 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,571,710|92|
|fromUnixToISOString(new Date())|1,307,168|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,047|80|
|Intl.DateTimeFormat().format(new Date())|5,904|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,448|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,905|68|
|Reusing Intl.DateTimeFormat()|399,921|93|
|Date.toLocaleDateString()|408,041|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,130|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:08 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|623,884|93|
|Using brackets {}|644,173|95|
|Using '' + |649,999|98|
|Using date.toString()|694,084|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:49 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,408,453|96|
|Using undefined assignment|715,570,940|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:25 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|170,455|52|
|NodeError|129,352|92|
|NodeError Range|133,563|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:38 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,108,697|92|
|Function returning explicitly undefined|1,081,859|90|
|Function returning implicitly undefined|1,073,747|90|
|Function returning string|1,117,093|86|
|Function returning integer|1,117,441|88|
|Function returning float|1,097,084|87|
|Function returning functions|1,082,223|90|
|Function returning arrow functions|1,101,297|86|
|Function returning empty object|1,122,954|91|
|Function returning empty array|1,087,502|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:51 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,822,924|97|
|using Array.includes (first item)|707,159,708|91|
|Using raw comparison|714,184,397|98|
|Using raw comparison (first item)|712,101,095|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:34 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,035,845|91|
|Using Object.getOwnPropertyNames()|65,078,953|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:28 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,874,685|96|
|Length = 10_000 - Array.at|15,557,937|92|
|Length = 1_000_000 - Array.at|15,865,790|97|
|Length = 100 - Array[length - 1]|713,758,580|98|
|Length = 10_000 - Array[length - 1]|711,880,309|96|
|Length = 1_000_000 - Array[length - 1]|712,193,566|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:17 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,253,628|92|
|Object.create({})|1,241,502|77|
|Cached Empty.prototype|713,316,529|97|
|Empty.prototype|1,267,964|74|
|Empty class|864,390|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:19:58 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,148,848|87|
|Using optional chain (obj.field?.field2) (undefined)|838,871,807|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|861,125,532|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|851,140,614|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:46 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|160,966,151|92|
|Using parseInt(x, 10) - big number (10 len)|12,098,176|94|
|Using + - small number (2 len)|715,252,943|95|
|Using + - big number (10 len)|713,946,660|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:10 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|746,632|73|
|Using ? operator to avoid rejection|828,332|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:46 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,084,570|85|
|Raw usage underscore usage|5,771,483|84|
|Manipulating private properties using #|2,114,944|83|
|Manipulating private properties using underscore(_)|609,917,719|86|
|Manipulating private properties using Symbol|612,243,754|84|
|Manipulating private properties using PrivateSymbol|26,004,316|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:39 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,012,731|90|
|Adding property in the object creation - small object|1,967,037|86|
|Adding property after the function creation - small class|138,589|80|
|Adding property in the function creation - small class|142,045|85|
|Adding property after the class creation - small class|116,127|79|
|Adding property in the class creation - small class|117,684|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:36 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|711,863,501|97|
|Getter|58,704,731|90|
|Method|713,481,650|93|
|DefineProperty (getter)|711,914,227|97|
|DefineProperty (getter & enumerable=false)|59,252,492|94|
|DefineProperty (getter & configurable=false)|712,428,758|96|
|DefineProperty (getter & enumerable=false & configurable=false)|59,395,416|92|
|DefineProperty (writable)|712,892,247|97|
|DefineProperty (writable & enumerable=false)|712,930,512|96|
|DefineProperty (writable & enumerable=false & configurable=false)|408,767,841|60|
|DefineProperties (getter)|37,359,095|90|
|DefineProperties (getter & enumerable=false)|58,718,103|95|
|DefineProperties (getter & enumerable=false & configurable=false)|59,253,865|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:07 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|589,213,667|97|
|Setter|7,371,680|96|
|Method|587,586,206|96|
|DefineProperty (setter)|591,944,692|93|
|DefineProperty (setter & enumerable=false)|7,389,749|96|
|DefineProperty (setter & configurable=false)|7,309,057|93|
|DefineProperty (setter & enumerable=false & configurable=false)|7,497,593|95|
|DefineProperty (writable)|591,116,852|94|
|DefineProperty (writable & enumerable=false)|509,861,107|87|
|DefineProperty (writable & enumerable=false & configurable=false)|101,085,846|81|
|DefineProperties (setter)|80,764,325|84|
|DefineProperties (setter & enumerable=false)|7,326,797|92|
|DefineProperties (setter & enumerable=false & configurable=false)|7,362,168|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:42 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,402,336|96|
|Using replaceAll()|2,193,989|88|
|Using replaceAll(//g)|2,165,020|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:15 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,112,032|93|
|{ ...object, __proto__: null }|12,860,316|95|
|{ ...object, newProp: true }|482,433|76|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|140,207|94|
|loop + object.keys starting with {}|321,922|95|
|loop + object.keys starting with { __proto__: null }|406,134|97|
|loop + object.keys starting with { randomProp: true }|333,005|98|
|object.keys + reduce(FN, {})|322,057|99|
|object.keys + reduce(FN, { __proto__: null })|401,172|94|
|object.keys + reduce(FN, { newProp: true })|335,893|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:08 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|180,073|98|
|Sort using first char|890,113|95|
|Sort using localeCompare|444,358|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:27 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,503|83|
|{...smallObject} - Total keys: 2|71,764,077|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,466|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,865|89|
|{ ...bigObject, ...anotherBigObject }|900|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,156,429|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,213,686|93|
|{ ...smallObject, ...anotherSmallObject }|17,350,853|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:41 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,062 ops/sec ±25.36% (78 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 316 ops/sec ±4.75% (80 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:23 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Writable

```
streams.Writable writing 1e3 * "some data" x 2,687 ops/sec ±1.10% (93 runs sampled)
streams.web.WritableStream writing 1e3 * "some data" x 670 ops/sec ±17.91% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:56:22 GMT+0000 (Coordinated Universal Time)
</details>


## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,101,170|95|
|Using backtick (`)|592,267,010|96|
|Using array.join|8,734,434|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:59:29 GMT+0000 (Coordinated Universal Time)
</details>


## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,344,894|94|
|Using indexof|715,162,732|99|
|Using RegExp.test|12,151,596|93|
|Using RegExp.text with cached regex pattern|12,992,900|96|
|Using new RegExp.test|3,338,541|89|
|Using new RegExp.test with cached regex pattern|3,917,515|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:26 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|243|77|
|Array.from|11|32|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|243|77|
|Array.from|11|32|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:50 GMT+0000 (Coordinated Universal Time)
</details>

