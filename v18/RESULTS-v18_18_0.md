## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,111,875|98|
|Using dot notation|848,165,697|98|
|Using define property (writable)|4,356,678|96|
|Using define property initialized (writable)|6,044,127|96|
|Using define property (getter)|2,245,220|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848111875.0478922,"samples":6},{"name":"Using dot notation","opsSec":848165696.608328,"samples":7},{"name":"Using define property (writable)","opsSec":4356677.940564595,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6044127.367365343,"samples":5},{"name":"Using define property (getter)","opsSec":2245219.8856632523,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.141ms
array.push|1,000,000|24.756ms
new Array(length)|1,000,000|13.801ms
array.push|100,000,000|1,816.884ms
new Array(length)|100,000,000|3,912.213ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.456ms
new Array(length)|10,000|3.222ms
array.push|1,000,000|279.254ms
new Array(length)|1,000,000|4.482ms
array.push|100,000,000|2,206.501ms
new Array(length)|100,000,000|4,190.618ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|87|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":308.5829923498582,"samples":3},{"name":"Array.from","opsSec":21.801472111593124,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,055,183|99|
|[async] async function|17,464,715|86|
|[async] function|295,442|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:16:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848055182.5511692,"samples":6},{"name":"[async] async function","opsSec":17464714.84648007,"samples":6},{"name":"[async] function","opsSec":295441.80535852385,"samples":3}]}-->

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
