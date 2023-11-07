## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,550|83|
|new Blob (1024)|585|76|
|text (128)|4,961|85|
|text (1024)|627|87|
|arrayBuffer (128)|5,009|86|
|arrayBuffer (1024)|627|87|
|slice (0, 64)|70,370|69|
|slice (0, 512)|20,974|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:30:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4549.537132052786,"samples":4},{"name":"new Blob (1024)","opsSec":584.6879144015662,"samples":2},{"name":"text (128)","opsSec":4960.855318794562,"samples":5},{"name":"text (1024)","opsSec":627.2874948708021,"samples":3},{"name":"arrayBuffer (128)","opsSec":5009.469243547625,"samples":4},{"name":"arrayBuffer (1024)","opsSec":626.7600184341482,"samples":2},{"name":"slice (0, 64)","opsSec":70370.39851800003,"samples":4},{"name":"slice (0, 512)","opsSec":20973.903710032257,"samples":5}]}-->
