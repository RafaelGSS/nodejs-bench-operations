## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,008|91|
|new Blob (1024)|761|77|
|text (128)|6,548|89|
|text (1024)|828|90|
|arrayBuffer (128)|6,533|89|
|arrayBuffer (1024)|823|89|
|slice (0, 64)|196,494|58|
|slice (0, 512)|29,747|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6008.360594286962,"samples":4},{"name":"new Blob (1024)","opsSec":760.6641523729096,"samples":2},{"name":"text (128)","opsSec":6548.485805680427,"samples":6},{"name":"text (1024)","opsSec":827.7579112801415,"samples":2},{"name":"arrayBuffer (128)","opsSec":6533.005150848201,"samples":5},{"name":"arrayBuffer (1024)","opsSec":823.1575392027016,"samples":2},{"name":"slice (0, 64)","opsSec":196494.40736468078,"samples":4},{"name":"slice (0, 512)","opsSec":29747.38618908927,"samples":3}]}-->
