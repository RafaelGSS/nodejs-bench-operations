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
