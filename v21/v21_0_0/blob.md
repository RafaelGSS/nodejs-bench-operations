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
