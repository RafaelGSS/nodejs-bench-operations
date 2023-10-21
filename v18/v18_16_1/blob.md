## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,271|88|
|new Blob (1024)|412|73|
|text (128)|31,361|63|
|text (1024)|21,020|87|
|arrayBuffer (128)|31,664|87|
|arrayBuffer (1024)|21,369|81|
|slice (0, 64)|66,013|82|
|slice (0, 512)|40,409|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3271.0525121326286,"samples":4},{"name":"new Blob (1024)","opsSec":412.36702349193297,"samples":2},{"name":"text (128)","opsSec":31361.13303942419,"samples":4},{"name":"text (1024)","opsSec":21020.17012780898,"samples":3},{"name":"arrayBuffer (128)","opsSec":31663.705209927833,"samples":3},{"name":"arrayBuffer (1024)","opsSec":21369.331575105818,"samples":3},{"name":"slice (0, 64)","opsSec":66013.08370593889,"samples":3},{"name":"slice (0, 512)","opsSec":40408.955241322255,"samples":3}]}-->
