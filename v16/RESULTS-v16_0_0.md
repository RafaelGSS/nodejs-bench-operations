## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|573,532,906|92|
|Using dot notation|581,497,840|95|
|Using define property (writable)|2,506,260|91|
|Using define property initialized (writable)|3,120,721|91|
|Using define property (getter)|1,282,189|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.011ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.583ms
new Array(length)|10,000|0.306ms
array.push|1,000,000|31.49ms
new Array(length)|1,000,000|9.819ms
array.push|100,000,000|1,468.686ms
new Array(length)|100,000,000|4,378.732ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.014ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.453ms
new Array(length)|10,000|4.202ms
array.push|1,000,000|25.75ms
new Array(length)|1,000,000|9.21ms
array.push|100,000,000|2,200.581ms
new Array(length)|100,000,000|4,508.701ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:00 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|337|74|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:46 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,671|84|
|new Blob (1024)|704|74|
|text (128)|24,673|70|
|text (1024)|9,889|86|
|arrayBuffer (128)|28,974|87|
|arrayBuffer (1024)|10,887|88|
|slice (0, 64)|132,084|82|
|slice (0, 512)|21,047|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:55 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|258,386|84|
|[True conditional] Using constructor name|256,464|90|
|[True conditional] Check if property is valid then instanceof |260,555|78|
|[False conditional] Using instanceof only|611,160,541|91|
|[False conditional] Using constructor name|609,850,117|92|
|[False conditional] Check if property is valid then instanceof |598,711,230|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,042|94|
|crypto.verify('RSA-SHA256')|20,455|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:19 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,549,758|91|
|fromUnixToISOString(new Date())|1,239,886|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:40 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,032|86|
|Intl.DateTimeFormat().format(new Date())|9,037|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,040|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,735|94|
|Reusing Intl.DateTimeFormat()|370,335|97|
|Date.toLocaleDateString()|431,944|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,403|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:05 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|600,696|95|
|Using brackets {}|620,141|96|
|Using '' + |629,750|94|
|Using date.toString()|714,043|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:47 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,246,314|95|
|Using undefined assignment|707,243,805|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:26 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|244,516|84|
|NodeError|245,552|84|
|NodeError Range|247,793|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:38 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|991,500|89|
|Function returning explicitly undefined|1,029,421|91|
|Function returning implicitly undefined|1,070,879|98|
|Function returning string|1,062,959|90|
|Function returning integer|1,083,468|93|
|Function returning float|1,072,311|95|
|Function returning functions|1,040,704|94|
|Function returning arrow functions|1,059,101|94|
|Function returning empty object|1,070,759|97|
|Function returning empty array|1,072,316|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:49 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|703,251,314|96|
|using Array.includes (first item)|698,957,928|92|
|Using raw comparison|707,859,518|97|
|Using raw comparison (first item)|708,773,298|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:35 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,914,026|91|
|Using Object.getOwnPropertyNames()|46,803,632|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:30 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|705,237,239|97|
|Length = 10_000 - Array[length - 1]|705,713,457|96|
|Length = 1_000_000 - Array[length - 1]|706,165,041|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:02 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,851,638|92|
|Object.create({})|1,232,711|81|
|Cached Empty.prototype|596,826,912|98|
|Empty.prototype|1,422,291|76|
|Empty class|851,897|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:00 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|579,025,012|87|
|Using optional chain (obj.field?.field2) (undefined)|559,882,624|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|585,185,596|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|582,673,936|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:48 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|107,782,760|89|
|Using parseInt(x, 10) - big number (10 len)|9,112,224|92|
|Using + - small number (2 len)|587,539,404|96|
|Using + - big number (10 len)|585,506,569|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:15 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|681,656|69|
|Using ? operator to avoid rejection|726,070|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:47 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,888,067|95|
|Raw usage underscore usage|6,476,840|93|
|Manipulating private properties using #|2,315,174|95|
|Manipulating private properties using underscore(_)|702,262,130|99|
|Manipulating private properties using Symbol|698,671,068|95|
|Manipulating private properties using PrivateSymbol|27,318,117|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:36 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,915,494|96|
|Adding property in the object creation - small object|1,887,085|89|
|Adding property after the function creation - small class|161,992|85|
|Adding property in the function creation - small class|162,200|84|
|Adding property after the class creation - small class|133,883|81|
|Adding property in the class creation - small class|133,939|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:31 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>

