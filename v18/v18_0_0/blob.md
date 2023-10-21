## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,293|90|
|new Blob (1024)|416|73|
|text (128)|24,046|75|
|text (1024)|10,878|85|
|arrayBuffer (128)|26,689|84|
|arrayBuffer (1024)|11,983|88|
|slice (0, 64)|54,715|84|
|slice (0, 512)|15,991|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3292.859719928048,"samples":6},{"name":"new Blob (1024)","opsSec":416.0905447000114,"samples":2},{"name":"text (128)","opsSec":24045.569646284242,"samples":5},{"name":"text (1024)","opsSec":10878.014706198635,"samples":4},{"name":"arrayBuffer (128)","opsSec":26689.15471519903,"samples":3},{"name":"arrayBuffer (1024)","opsSec":11983.366258947482,"samples":4},{"name":"slice (0, 64)","opsSec":54714.79296732744,"samples":3},{"name":"slice (0, 512)","opsSec":15991.215520317302,"samples":3}]}-->
