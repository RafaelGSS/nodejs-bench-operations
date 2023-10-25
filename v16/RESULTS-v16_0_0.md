## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,189,594|88|
|Using dot notation|598,185,021|88|
|Using define property (writable)|2,433,001|86|
|Using define property initialized (writable)|2,989,161|87|
|Using define property (getter)|1,185,578|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":587189593.6648036,"samples":8},{"name":"Using dot notation","opsSec":598185021.4888043,"samples":6},{"name":"Using define property (writable)","opsSec":2433000.686322029,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2989161.4318045694,"samples":5},{"name":"Using define property (getter)","opsSec":1185577.810211867,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.013ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.567ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|33.942ms
new Array(length)|1,000,000|11.034ms
array.push|100,000,000|1,865.566ms
new Array(length)|100,000,000|5,077.103ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.016ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.496ms
new Array(length)|10,000|4.273ms
array.push|1,000,000|27.18ms
new Array(length)|1,000,000|10.47ms
array.push|100,000,000|2,844.735ms
new Array(length)|100,000,000|5,170.804ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|278|79|
|Array.from|13|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":277.6289633392329,"samples":3},{"name":"Array.from","opsSec":12.64800518139481,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,314|84|
|new Blob (1024)|699|74|
|text (128)|20,731|69|
|text (1024)|7,346|80|
|arrayBuffer (128)|24,375|76|
|arrayBuffer (1024)|8,194|80|
|slice (0, 64)|134,338|78|
|slice (0, 512)|19,045|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":5314.200614788885,"samples":4},{"name":"new Blob (1024)","opsSec":699.4846922854346,"samples":2},{"name":"text (128)","opsSec":20731.236905487138,"samples":4},{"name":"text (1024)","opsSec":7345.922379043271,"samples":3},{"name":"arrayBuffer (128)","opsSec":24375.2132661492,"samples":3},{"name":"arrayBuffer (1024)","opsSec":8193.627211977077,"samples":3},{"name":"slice (0, 64)","opsSec":134338.32941512758,"samples":4},{"name":"slice (0, 512)","opsSec":19044.560854965643,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,550|85|
|[True conditional] Using constructor name|254,579|84|
|[True conditional] Check if property is valid then instanceof |255,270|84|
|[False conditional] Using instanceof only|590,636,256|96|
|[False conditional] Using constructor name|589,147,870|93|
|[False conditional] Check if property is valid then instanceof |587,849,055|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":254549.5448576256,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":254579.28932162066,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":255269.77407926583,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":590636256.3784001,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":589147869.9516019,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":587849054.9755732,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,711|85|
|crypto.verify('RSA-SHA256')|18,284|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":18711.070962132133,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":18283.839027042002,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,547,706|91|
|fromUnixToISOString(new Date())|1,304,655|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1547705.5252787154,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1304654.9993029616,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,462|80|
|Intl.DateTimeFormat().format(new Date())|6,699|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,143|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,641|85|
|Reusing Intl.DateTimeFormat()|375,408|75|
|Date.toLocaleDateString()|469,992|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,528|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7461.508680166917,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6699.351997848606,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8142.811670478267,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10640.997367712687,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":375408.1042860747,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":469992.3769740235,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9528.24627829317,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|486,788|85|
|Using brackets {}|511,469|88|
|Using '' + |514,367|87|
|Using date.toString()|551,078|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":486787.66894347506,"samples":7},{"name":"Using brackets {}","opsSec":511468.99826294504,"samples":3},{"name":"Using '' + ","opsSec":514366.7791661602,"samples":3},{"name":"Using date.toString()","opsSec":551077.5703787683,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,337,840|96|
|Using delete property (proto: null)|14,120,506|95|
|Using delete property (cached proto: null)|2,331,219|96|
|Using undefined assignment|596,346,540|99|
|Using undefined assignment (proto: null)|16,097,251|97|
|Using undefined property (cached proto: null)|593,776,355|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2337840.048281484,"samples":10},{"name":"Using delete property (proto: null)","opsSec":14120506.015389506,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2331219.104710678,"samples":7},{"name":"Using undefined assignment","opsSec":596346540.2550994,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":16097250.940053742,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":593776354.5069432,"samples":9}]}-->
