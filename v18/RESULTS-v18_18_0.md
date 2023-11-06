## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,846,897|98|
|Using dot notation|844,071,067|94|
|Using define property (writable)|4,301,101|99|
|Using define property initialized (writable)|5,948,449|98|
|Using define property (getter)|2,186,211|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":844846896.9336392,"samples":6},{"name":"Using dot notation","opsSec":844071066.6024603,"samples":5},{"name":"Using define property (writable)","opsSec":4301101.154174546,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5948449.293722699,"samples":6},{"name":"Using define property (getter)","opsSec":2186211.328306995,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.27ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|32.493ms
new Array(length)|1,000,000|6.032ms
array.push|100,000,000|1,846.19ms
new Array(length)|100,000,000|4,096.915ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.013ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.465ms
new Array(length)|10,000|3.262ms
array.push|1,000,000|289.307ms
new Array(length)|1,000,000|4.609ms
array.push|100,000,000|2,240.148ms
new Array(length)|100,000,000|4,426.29ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|274|84|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:08:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":274.27712880967783,"samples":2},{"name":"Array.from","opsSec":21.287207080624395,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,913,258|98|
|[async] async function|17,300,010|84|
|[async] function|350,030|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:16:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":845913258.0648053,"samples":6},{"name":"[async] async function","opsSec":17300010.272144042,"samples":7},{"name":"[async] function","opsSec":350029.57607912517,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,512|85|
|new Blob (1024)|583|77|
|text (128)|49,548|91|
|text (1024)|32,199|80|
|arrayBuffer (128)|50,060|87|
|arrayBuffer (1024)|32,658|77|
|slice (0, 64)|90,128|83|
|slice (0, 512)|56,530|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:27:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4512.0344327527655,"samples":4},{"name":"new Blob (1024)","opsSec":582.918346835998,"samples":2},{"name":"text (128)","opsSec":49547.88566164959,"samples":4},{"name":"text (1024)","opsSec":32198.96416329293,"samples":3},{"name":"arrayBuffer (128)","opsSec":50060.24164356149,"samples":3},{"name":"arrayBuffer (1024)","opsSec":32657.765502333714,"samples":4},{"name":"slice (0, 64)","opsSec":90127.60359269318,"samples":4},{"name":"slice (0, 512)","opsSec":56529.941679304735,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|233,552|52|
|[True conditional] Using constructor name|175,762|94|
|[True conditional] Check if property is valid then instanceof |180,088|99|
|[False conditional] Using instanceof only|846,036,579|96|
|[False conditional] Using constructor name|845,422,141|96|
|[False conditional] Check if property is valid then instanceof |845,131,336|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:41:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":233552.34208175793,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":175762.40984743758,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":180088.04806120496,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846036579.1676095,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":845422140.9071147,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845131336.3567692,"samples":8}]}-->
