## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|700,598,360|87|
|Using dot notation|596,423,645|89|
|Using define property (writable)|2,297,888|89|
|Using define property initialized (writable)|2,965,325|88|
|Using define property (getter)|1,211,444|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:44 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.007ms
array.push|100|0.039ms
new Array(length)|100|0.015ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.564ms
new Array(length)|10,000|3.786ms
array.push|1,000,000|46.073ms
new Array(length)|1,000,000|10.989ms
array.push|100,000,000|1,947.301ms
new Array(length)|100,000,000|5,980.522ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.106ms
new Array(length)|100|0.011ms
array.push|1,000|0.052ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.552ms
new Array(length)|10,000|0.304ms
array.push|1,000,000|114.687ms
new Array(length)|1,000,000|10.84ms
array.push|100,000,000|3,004.882ms
new Array(length)|100,000,000|6,421.813ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:59 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|72|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:43 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,018|88|
|new Blob (1024)|383|70|
|text (128)|3,195|87|
|text (1024)|401|89|
|arrayBuffer (128)|3,186|85|
|arrayBuffer (1024)|400|88|
|slice (0, 64)|53,573|71|
|slice (0, 512)|16,492|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,387|55|
|[True conditional] Using constructor name|146,417|93|
|[True conditional] Check if property is valid then instanceof |147,504|97|
|[False conditional] Using instanceof only|718,806,538|97|
|[False conditional] Using constructor name|716,777,297|96|
|[False conditional] Check if property is valid then instanceof |718,636,789|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,945|84|
|crypto.verify('RSA-SHA256')|3,029|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:26 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|930,505|94|
|fromUnixToISOString(new Date())|1,400,312|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,974|87|
|Intl.DateTimeFormat().format(new Date())|5,761|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,082|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,541|70|
|Reusing Intl.DateTimeFormat()|369,665|85|
|Date.toLocaleDateString()|341,920|78|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,351|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:13 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|741,973|97|
|Using brackets {}|747,953|97|
|Using '' + |749,638|98|
|Using date.toString()|820,579|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:55 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,522,452|95|
|Using undefined assignment|718,002,036|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:27 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,304|54|
|NodeError|129,242|97|
|NodeError Range|129,001|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:41 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,259,020|93|
|Function returning explicitly undefined|1,288,641|92|
|Function returning implicitly undefined|1,313,638|93|
|Function returning string|1,300,033|90|
|Function returning integer|1,292,024|89|
|Function returning float|1,286,864|92|
|Function returning functions|1,256,882|91|
|Function returning arrow functions|1,195,758|87|
|Function returning empty object|1,267,852|89|
|Function returning empty array|1,305,044|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:46 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,118,998|95|
|using Array.includes (first item)|702,194,795|97|
|Using raw comparison|713,539,361|97|
|Using raw comparison (first item)|715,784,418|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:35 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|62,313,588|90|
|Using Object.getOwnPropertyNames()|61,237,126|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:34 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|698,117,139|96|
|Length = 10_000 - Array.at|710,344,605|97|
|Length = 1_000_000 - Array.at|710,589,672|99|
|Length = 100 - Array[length - 1]|713,664,413|96|
|Length = 10_000 - Array[length - 1]|712,220,502|97|
|Length = 1_000_000 - Array[length - 1]|712,686,276|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:21 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,263,875|87|
|Using Object.getOwnPropertyNames()|51,165,553|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:25:08 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,263,875|87|
|Using Object.getOwnPropertyNames()|51,165,553|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:25:08 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,263,875|87|
|Using Object.getOwnPropertyNames()|51,165,553|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:25:08 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,263,875|87|
|Using Object.getOwnPropertyNames()|51,165,553|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:25:08 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,283,380|99|
|Raw usage underscore usage|597,207,510|99|
|Manipulating private properties using #|594,026,209|96|
|Manipulating private properties using underscore(_)|595,294,492|99|
|Manipulating private properties using Symbol|593,550,801|99|
|Manipulating private properties using PrivateSymbol|39,479,382|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:40:51 GMT+0000 (Coordinated Universal Time)
</details>

