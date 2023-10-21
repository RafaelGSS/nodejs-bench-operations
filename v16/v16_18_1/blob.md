## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,866|88|
|new Blob (1024)|353|65|
|text (128)|21,954|73|
|text (1024)|12,592|79|
|arrayBuffer (128)|27,612|84|
|arrayBuffer (1024)|15,665|84|
|slice (0, 64)|58,367|72|
|slice (0, 512)|28,456|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2866.2975868717726,"samples":2},{"name":"new Blob (1024)","opsSec":353.4347358360193,"samples":2},{"name":"text (128)","opsSec":21953.94400317611,"samples":4},{"name":"text (1024)","opsSec":12591.841315910966,"samples":3},{"name":"arrayBuffer (128)","opsSec":27611.867919954584,"samples":4},{"name":"arrayBuffer (1024)","opsSec":15664.614231871366,"samples":5},{"name":"slice (0, 64)","opsSec":58367.05589176802,"samples":3},{"name":"slice (0, 512)","opsSec":28455.557368323385,"samples":3}]}-->
