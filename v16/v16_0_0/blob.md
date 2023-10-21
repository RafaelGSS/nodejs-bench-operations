## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,589|85|
|new Blob (1024)|577|69|
|text (128)|19,940|72|
|text (1024)|7,529|79|
|arrayBuffer (128)|23,439|83|
|arrayBuffer (1024)|8,419|82|
|slice (0, 64)|125,931|75|
|slice (0, 512)|22,579|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":4588.798009934294,"samples":5},{"name":"new Blob (1024)","opsSec":576.5008785154254,"samples":2},{"name":"text (128)","opsSec":19940.082977753616,"samples":3},{"name":"text (1024)","opsSec":7529.420434286333,"samples":3},{"name":"arrayBuffer (128)","opsSec":23438.629608711224,"samples":4},{"name":"arrayBuffer (1024)","opsSec":8418.809001570993,"samples":4},{"name":"slice (0, 64)","opsSec":125930.83600368876,"samples":4},{"name":"slice (0, 512)","opsSec":22578.688496121085,"samples":4}]}-->
