## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,971|2486|
|new Blob (1024)|609|313|
|text (128)|4,722|2362|
|text (1024)|585|293|
|arrayBuffer (128)|4,689|2345|
|arrayBuffer (1024)|578|290|
|slice (0, 64)|221,271|110636|
|slice (0, 512)|38,240|19121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:40:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4971.802162047773,"samples":2486},{"name":"new Blob (1024)","opsSec":609.8496707312576,"samples":313},{"name":"text (128)","opsSec":4722.669775049511,"samples":2362},{"name":"text (1024)","opsSec":585.8483742388672,"samples":293},{"name":"arrayBuffer (128)","opsSec":4689.594293817849,"samples":2345},{"name":"arrayBuffer (1024)","opsSec":578.5471258444128,"samples":290},{"name":"slice (0, 64)","opsSec":221271.20740654122,"samples":110636},{"name":"slice (0, 512)","opsSec":38240.87984813861,"samples":19121}]}-->
