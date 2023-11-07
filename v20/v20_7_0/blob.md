## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,590|85|
|new Blob (1024)|587|74|
|text (128)|4,946|85|
|text (1024)|624|89|
|arrayBuffer (128)|4,962|88|
|arrayBuffer (1024)|625|89|
|slice (0, 64)|70,993|72|
|slice (0, 512)|18,712|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:31:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4589.885041229884,"samples":3},{"name":"new Blob (1024)","opsSec":587.1863564063412,"samples":3},{"name":"text (128)","opsSec":4946.28556961351,"samples":5},{"name":"text (1024)","opsSec":624.4400371887767,"samples":2},{"name":"arrayBuffer (128)","opsSec":4962.145159563841,"samples":3},{"name":"arrayBuffer (1024)","opsSec":625.3830271416936,"samples":2},{"name":"slice (0, 64)","opsSec":70993.47675863247,"samples":3},{"name":"slice (0, 512)","opsSec":18711.621356796953,"samples":4}]}-->
