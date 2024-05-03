## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,767|89|
|new Blob (1024)|754|76|
|text (128)|6,350|87|
|text (1024)|803|91|
|arrayBuffer (128)|6,335|89|
|arrayBuffer (1024)|802|89|
|slice (0, 64)|80,761|68|
|slice (0, 512)|24,185|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5766.68793217532,"samples":3},{"name":"new Blob (1024)","opsSec":754.1939267481355,"samples":3},{"name":"text (128)","opsSec":6349.846101924805,"samples":5},{"name":"text (1024)","opsSec":802.8388388226545,"samples":3},{"name":"arrayBuffer (128)","opsSec":6335.116542370262,"samples":4},{"name":"arrayBuffer (1024)","opsSec":801.5290520561615,"samples":2},{"name":"slice (0, 64)","opsSec":80761.14768290326,"samples":3},{"name":"slice (0, 512)","opsSec":24184.733647292254,"samples":4}]}-->
