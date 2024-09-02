## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,307|1154|
|new Blob (1024)|657|329|
|text (128)|4,437|2219|
|text (1024)|574|288|
|arrayBuffer (128)|4,571|2286|
|arrayBuffer (1024)|569|285|
|slice (0, 64)|177,363|88682|
|slice (0, 512)|39,507|19754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:41:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":2307.9769525423762,"samples":1154},{"name":"new Blob (1024)","opsSec":657.4141177975036,"samples":329},{"name":"text (128)","opsSec":4437.079155214597,"samples":2219},{"name":"text (1024)","opsSec":574.7310983359264,"samples":288},{"name":"arrayBuffer (128)","opsSec":4571.2634688874095,"samples":2286},{"name":"arrayBuffer (1024)","opsSec":569.2201615480334,"samples":285},{"name":"slice (0, 64)","opsSec":177363.0081860567,"samples":88682},{"name":"slice (0, 512)","opsSec":39507.642692867754,"samples":19754}]}-->
