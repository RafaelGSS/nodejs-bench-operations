## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,763|85|
|new Blob (1024)|365|66|
|text (128)|24,302|78|
|text (1024)|11,278|78|
|arrayBuffer (128)|24,870|79|
|arrayBuffer (1024)|11,482|79|
|slice (0, 64)|47,436|74|
|slice (0, 512)|27,264|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2763.003755723908,"samples":3},{"name":"new Blob (1024)","opsSec":365.1543842921994,"samples":2},{"name":"text (128)","opsSec":24301.869461150065,"samples":4},{"name":"text (1024)","opsSec":11278.102525301358,"samples":4},{"name":"arrayBuffer (128)","opsSec":24869.53869958962,"samples":4},{"name":"arrayBuffer (1024)","opsSec":11481.801017349087,"samples":3},{"name":"slice (0, 64)","opsSec":47436.26676423013,"samples":4},{"name":"slice (0, 512)","opsSec":27264.405397647384,"samples":5}]}-->
