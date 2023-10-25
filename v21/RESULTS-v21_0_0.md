## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|656,431,741|86|
|Using dot notation|656,346,861|89|
|Using define property (writable)|2,701,164|87|
|Using define property initialized (writable)|3,600,623|84|
|Using define property (getter)|1,466,816|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":656431741.1529161,"samples":6},{"name":"Using dot notation","opsSec":656346861.0132911,"samples":8},{"name":"Using define property (writable)","opsSec":2701164.2349922196,"samples":3},{"name":"Using define property initialized (writable)","opsSec":3600622.7051899326,"samples":5},{"name":"Using define property (getter)","opsSec":1466815.6521034078,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.003ms
array.push|100|0.091ms
new Array(length)|100|0.014ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.561ms
new Array(length)|10,000|0.279ms
array.push|1,000,000|38.211ms
new Array(length)|1,000,000|8.92ms
array.push|100,000,000|2,276.052ms
new Array(length)|100,000,000|5,668.853ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.004ms
array.push|100|0.025ms
new Array(length)|100|0.016ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.594ms
new Array(length)|10,000|0.381ms
array.push|1,000,000|25.761ms
new Array(length)|1,000,000|11.7ms
array.push|100,000,000|2,258.819ms
new Array(length)|100,000,000|5,550.143ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|267|70|
|Array.from|14|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":266.65093296363835,"samples":3},{"name":"Array.from","opsSec":14.206489465886424,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,162|80|
|new Blob (1024)|405|66|
|text (128)|3,040|83|
|text (1024)|399|84|
|arrayBuffer (128)|3,031|83|
|arrayBuffer (1024)|397|83|
|slice (0, 64)|102,424|47|
|slice (0, 512)|15,155|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3162.2462030464294,"samples":5},{"name":"new Blob (1024)","opsSec":404.72615829113164,"samples":2},{"name":"text (128)","opsSec":3040.054570621493,"samples":4},{"name":"text (1024)","opsSec":399.3013875205176,"samples":3},{"name":"arrayBuffer (128)","opsSec":3030.6571952450768,"samples":3},{"name":"arrayBuffer (1024)","opsSec":397.0467390444342,"samples":3},{"name":"slice (0, 64)","opsSec":102423.80338072422,"samples":4},{"name":"slice (0, 512)","opsSec":15155.401978842616,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,632|51|
|[True conditional] Using constructor name|149,369|89|
|[True conditional] Check if property is valid then instanceof |151,897|95|
|[False conditional] Using instanceof only|713,937,667|96|
|[False conditional] Using constructor name|711,929,813|92|
|[False conditional] Check if property is valid then instanceof |713,203,433|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":185632.31600670173,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":149368.95813736125,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":151897.37872726395,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":713937667.4616102,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":711929812.9790542,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713203433.4026605,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,221|85|
|crypto.verify('RSA-SHA256')|3,277|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3221.438889009544,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3277.2765417832443,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|742,223|83|
|fromUnixToISOString(new Date())|1,313,643|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":742223.13196516,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1313642.6560793107,"samples":6}]}-->
