## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,212|82|
|new Blob (1024)|384|66|
|text (128)|3,732|83|
|text (1024)|472|86|
|arrayBuffer (128)|3,752|82|
|arrayBuffer (1024)|470|87|
|slice (0, 64)|47,434|61|
|slice (0, 512)|12,773|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3211.647928928569,"samples":3},{"name":"new Blob (1024)","opsSec":383.8977430042747,"samples":2},{"name":"text (128)","opsSec":3731.8518875094906,"samples":4},{"name":"text (1024)","opsSec":472.3680861224588,"samples":3},{"name":"arrayBuffer (128)","opsSec":3751.73774989339,"samples":3},{"name":"arrayBuffer (1024)","opsSec":469.94642432975235,"samples":2},{"name":"slice (0, 64)","opsSec":47434.04361033607,"samples":3},{"name":"slice (0, 512)","opsSec":12773.429012038345,"samples":4}]}-->
