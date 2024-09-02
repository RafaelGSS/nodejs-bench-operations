## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,927|1964|
|new Blob (1024)|583|296|
|text (128)|5,239|2620|
|text (1024)|641|321|
|arrayBuffer (128)|4,961|2482|
|arrayBuffer (1024)|638|320|
|slice (0, 64)|229,854|115042|
|slice (0, 512)|36,345|18173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:39:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":3927.7488440194825,"samples":1964},{"name":"new Blob (1024)","opsSec":583.3834900239217,"samples":296},{"name":"text (128)","opsSec":5239.917838138565,"samples":2620},{"name":"text (1024)","opsSec":641.4894475288686,"samples":321},{"name":"arrayBuffer (128)","opsSec":4961.954225931778,"samples":2482},{"name":"arrayBuffer (1024)","opsSec":638.5690727087068,"samples":320},{"name":"slice (0, 64)","opsSec":229854.25792080205,"samples":115042},{"name":"slice (0, 512)","opsSec":36345.268150592885,"samples":18173}]}-->
