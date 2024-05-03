## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,230|89|
|new Blob (1024)|794|77|
|text (128)|6,509|88|
|text (1024)|824|89|
|arrayBuffer (128)|6,574|89|
|arrayBuffer (1024)|831|88|
|slice (0, 64)|191,793|55|
|slice (0, 512)|32,756|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6230.264611648926,"samples":6},{"name":"new Blob (1024)","opsSec":794.1658850876366,"samples":2},{"name":"text (128)","opsSec":6508.677014024432,"samples":6},{"name":"text (1024)","opsSec":823.6898507825849,"samples":2},{"name":"arrayBuffer (128)","opsSec":6574.214785337679,"samples":5},{"name":"arrayBuffer (1024)","opsSec":831.0773081224233,"samples":2},{"name":"slice (0, 64)","opsSec":191793.4658782101,"samples":4},{"name":"slice (0, 512)","opsSec":32756.192472145278,"samples":3}]}-->
