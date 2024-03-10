## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,361|88|
|new Blob (1024)|695|80|
|text (128)|28,689|74|
|text (1024)|14,376|81|
|arrayBuffer (128)|31,789|79|
|arrayBuffer (1024)|15,895|85|
|slice (0, 64)|86,706|81|
|slice (0, 512)|25,446|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5360.802506208578,"samples":3},{"name":"new Blob (1024)","opsSec":695.0597449049833,"samples":2},{"name":"text (128)","opsSec":28689.302605589786,"samples":4},{"name":"text (1024)","opsSec":14375.685499536075,"samples":3},{"name":"arrayBuffer (128)","opsSec":31789.18773578854,"samples":4},{"name":"arrayBuffer (1024)","opsSec":15894.810247575926,"samples":3},{"name":"slice (0, 64)","opsSec":86705.52154139224,"samples":3},{"name":"slice (0, 512)","opsSec":25446.4529853938,"samples":4}]}-->
