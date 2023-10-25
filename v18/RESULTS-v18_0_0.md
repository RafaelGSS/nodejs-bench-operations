## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|584,769,095|97|
|Using dot notation|587,385,319|95|
|Using define property (writable)|2,480,600|94|
|Using define property initialized (writable)|3,068,573|91|
|Using define property (getter)|1,247,552|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":584769095.4796222,"samples":6},{"name":"Using dot notation","opsSec":587385319.2876967,"samples":7},{"name":"Using define property (writable)","opsSec":2480600.361643891,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3068573.0179144167,"samples":5},{"name":"Using define property (getter)","opsSec":1247552.0367843828,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.033ms
new Array(length)|100|0.015ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|46.204ms
new Array(length)|1,000,000|8.202ms
array.push|100,000,000|1,995.529ms
new Array(length)|100,000,000|4,837.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.603ms
new Array(length)|10,000|4.27ms
array.push|1,000,000|332.792ms
new Array(length)|1,000,000|4.542ms
array.push|100,000,000|2,706.794ms
new Array(length)|100,000,000|5,415.823ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|76|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":315.55210601864786,"samples":3},{"name":"Array.from","opsSec":14.73454319546673,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,905|86|
|new Blob (1024)|353|70|
|text (128)|21,239|70|
|text (1024)|8,527|84|
|arrayBuffer (128)|23,770|84|
|arrayBuffer (1024)|9,444|85|
|slice (0, 64)|45,778|76|
|slice (0, 512)|13,378|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2904.5358990448394,"samples":4},{"name":"new Blob (1024)","opsSec":352.7275018803132,"samples":2},{"name":"text (128)","opsSec":21239.189300105267,"samples":4},{"name":"text (1024)","opsSec":8527.357308017494,"samples":3},{"name":"arrayBuffer (128)","opsSec":23770.468109742826,"samples":6},{"name":"arrayBuffer (1024)","opsSec":9443.577479299109,"samples":5},{"name":"slice (0, 64)","opsSec":45778.24544353137,"samples":3},{"name":"slice (0, 512)","opsSec":13377.826815824785,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,499|54|
|[True conditional] Using constructor name|123,753|89|
|[True conditional] Check if property is valid then instanceof |124,972|84|
|[False conditional] Using instanceof only|719,953,814|89|
|[False conditional] Using constructor name|730,197,749|89|
|[False conditional] Check if property is valid then instanceof |742,985,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":151499.38728375162,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":123753.0101309557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":124971.66809030065,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":719953814.0725436,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":730197748.7382903,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":742985756.3524308,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,246|93|
|crypto.verify('RSA-SHA256')|1,264|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":1246.2679722715664,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":1264.218080480397,"samples":2}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,554,390|96|
|fromUnixToISOString(new Date())|1,362,522|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1554390.020361357,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1362521.730559692,"samples":8}]}-->
