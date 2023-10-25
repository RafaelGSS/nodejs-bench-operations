## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|676,510,527|88|
|Using dot notation|569,137,610|88|
|Using define property (writable)|2,212,049|87|
|Using define property initialized (writable)|2,958,175|90|
|Using define property (getter)|1,147,178|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":676510526.9449942,"samples":6},{"name":"Using dot notation","opsSec":569137609.851336,"samples":7},{"name":"Using define property (writable)","opsSec":2212049.0427864045,"samples":8},{"name":"Using define property initialized (writable)","opsSec":2958174.7331113685,"samples":7},{"name":"Using define property (getter)","opsSec":1147178.0353662486,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.385ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|38.318ms
new Array(length)|1,000,000|6.077ms
array.push|100,000,000|1,562.501ms
new Array(length)|100,000,000|4,233.373ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.658ms
new Array(length)|10,000|4.344ms
array.push|1,000,000|336.173ms
new Array(length)|1,000,000|4.329ms
array.push|100,000,000|2,123.57ms
new Array(length)|100,000,000|4,794.247ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|82|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":305.75675616523284,"samples":3},{"name":"Array.from","opsSec":14.648591962893354,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,763|85|
|new Blob (1024)|365|66|
|text (128)|24,302|78|
|text (1024)|11,278|78|
|arrayBuffer (128)|24,870|79|
|arrayBuffer (1024)|11,482|79|
|slice (0, 64)|47,436|74|
|slice (0, 512)|27,264|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2763.003755723908,"samples":3},{"name":"new Blob (1024)","opsSec":365.1543842921994,"samples":2},{"name":"text (128)","opsSec":24301.869461150065,"samples":4},{"name":"text (1024)","opsSec":11278.102525301358,"samples":4},{"name":"arrayBuffer (128)","opsSec":24869.53869958962,"samples":4},{"name":"arrayBuffer (1024)","opsSec":11481.801017349087,"samples":3},{"name":"slice (0, 64)","opsSec":47436.26676423013,"samples":4},{"name":"slice (0, 512)","opsSec":27264.405397647384,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,341|54|
|[True conditional] Using constructor name|121,512|92|
|[True conditional] Check if property is valid then instanceof |122,278|91|
|[False conditional] Using instanceof only|581,791,027|93|
|[False conditional] Using constructor name|588,232,063|94|
|[False conditional] Check if property is valid then instanceof |589,557,365|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":151340.6610135677,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":121511.52822205538,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":122277.65420209369,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":581791027.4259527,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":588232063.4145262,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":589557365.344524,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,455|87|
|crypto.verify('RSA-SHA256')|4,493|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4455.227572790839,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4493.366328010938,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,298,541|94|
|fromUnixToISOString(new Date())|1,103,039|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1298541.440511099,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1103039.1009930912,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,686|89|
|Intl.DateTimeFormat().format(new Date())|9,762|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,615|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,455|77|
|Reusing Intl.DateTimeFormat()|475,250|90|
|Date.toLocaleDateString()|499,943|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,703|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10685.574335868647,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9761.769974798895,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11614.50577784418,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9454.64677365822,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":475249.5293657673,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":499943.42694623687,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11703.047863825377,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|715,598|97|
|Using brackets {}|742,736|96|
|Using '' + |736,370|99|
|Using date.toString()|807,869|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":715597.7242742995,"samples":6},{"name":"Using brackets {}","opsSec":742736.4336766147,"samples":3},{"name":"Using '' + ","opsSec":736370.2634832282,"samples":5},{"name":"Using date.toString()","opsSec":807868.9910217893,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,337,987|89|
|Using delete property (proto: null)|11,185,177|91|
|Using delete property (cached proto: null)|2,343,700|92|
|Using undefined assignment|728,173,268|91|
|Using undefined assignment (proto: null)|14,115,529|90|
|Using undefined property (cached proto: null)|718,614,998|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2337986.909457394,"samples":5},{"name":"Using delete property (proto: null)","opsSec":11185176.574860435,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2343700.101390656,"samples":7},{"name":"Using undefined assignment","opsSec":728173268.38945,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14115529.487218637,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":718614998.1528685,"samples":7}]}-->
