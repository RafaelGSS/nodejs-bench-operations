## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,428,177|97|
|Using dot notation|848,756,204|98|
|Using define property (writable)|4,603,486|97|
|Using define property initialized (writable)|5,913,252|94|
|Using define property (getter)|2,274,922|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:50:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849428177.4301213,"samples":6},{"name":"Using dot notation","opsSec":848756203.9423821,"samples":8},{"name":"Using define property (writable)","opsSec":4603486.043842479,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5913252.225284116,"samples":4},{"name":"Using define property (getter)","opsSec":2274922.4888364654,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.066ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.155ms
array.push|1,000,000|30.745ms
new Array(length)|1,000,000|5.993ms
array.push|100,000,000|1,788.759ms
new Array(length)|100,000,000|3,920.251ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.052ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.42ms
new Array(length)|10,000|3.212ms
array.push|1,000,000|250.062ms
new Array(length)|1,000,000|4.712ms
array.push|100,000,000|2,170.546ms
new Array(length)|100,000,000|4,172.922ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|86|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":300.45530656138504,"samples":4},{"name":"Array.from","opsSec":20.978021216633298,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,990,879|98|
|[async] async function|16,832,739|86|
|[async] function|353,126|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:14:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849990879.1732303,"samples":6},{"name":"[async] async function","opsSec":16832739.269487873,"samples":6},{"name":"[async] function","opsSec":353126.1980019028,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,425|83|
|new Blob (1024)|581|75|
|text (128)|42,697|85|
|text (1024)|26,548|74|
|arrayBuffer (128)|50,092|87|
|arrayBuffer (1024)|29,764|70|
|slice (0, 64)|94,326|82|
|slice (0, 512)|44,778|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:22:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4425.27966613247,"samples":4},{"name":"new Blob (1024)","opsSec":581.0274959524711,"samples":2},{"name":"text (128)","opsSec":42696.64245428106,"samples":4},{"name":"text (1024)","opsSec":26547.55533992964,"samples":6},{"name":"arrayBuffer (128)","opsSec":50091.61108733965,"samples":4},{"name":"arrayBuffer (1024)","opsSec":29764.055426172028,"samples":3},{"name":"slice (0, 64)","opsSec":94326.11192084792,"samples":3},{"name":"slice (0, 512)","opsSec":44778.025155977295,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|240,032|53|
|[True conditional] Using constructor name|187,269|99|
|[True conditional] Check if property is valid then instanceof |189,396|98|
|[False conditional] Using instanceof only|850,261,865|98|
|[False conditional] Using constructor name|850,072,858|89|
|[False conditional] Check if property is valid then instanceof |851,545,352|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":240031.82531861117,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":187269.48962319206,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":189396.2863907056,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850261864.8954334,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":850072857.8457361,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":851545351.9906434,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|29,897|93|
|crypto.verify('RSA-SHA256')|28,613|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":29897.126201656123,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":28613.443428922194,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,590,637|96|
|fromUnixToISOString(new Date())|2,077,897|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:57:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2590637.444046439,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2077896.8786674319,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,705|80|
|Intl.DateTimeFormat().format(new Date())|13,963|92|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,359|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,480|87|
|Reusing Intl.DateTimeFormat()|626,808|96|
|Date.toLocaleDateString()|627,307|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,910|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:07:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11705.340019647907,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13962.646797172014,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15359.032911634986,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14479.758278227595,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":626807.5692898304,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":627307.419236547,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13909.591519880092,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
