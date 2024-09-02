## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,388|2195|
|new Blob (1024)|534|268|
|text (128)|47,737|23869|
|text (1024)|29,674|14838|
|arrayBuffer (128)|50,162|25082|
|arrayBuffer (1024)|35,332|17667|
|slice (0, 64)|91,717|45859|
|slice (0, 512)|48,405|24371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:36:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4388.805490006513,"samples":2195},{"name":"new Blob (1024)","opsSec":534.869221212033,"samples":268},{"name":"text (128)","opsSec":47737.06635857147,"samples":23869},{"name":"text (1024)","opsSec":29674.127088056244,"samples":14838},{"name":"arrayBuffer (128)","opsSec":50162.48298641103,"samples":25082},{"name":"arrayBuffer (1024)","opsSec":35332.398525067234,"samples":17667},{"name":"slice (0, 64)","opsSec":91717.23471551748,"samples":45859},{"name":"slice (0, 512)","opsSec":48405.36864002685,"samples":24371}]}-->
