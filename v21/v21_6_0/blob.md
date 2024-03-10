## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,573|93|
|new Blob (1024)|699|77|
|text (128)|5,874|88|
|text (1024)|744|89|
|arrayBuffer (128)|5,845|87|
|arrayBuffer (1024)|749|89|
|slice (0, 64)|197,053|58|
|slice (0, 512)|30,079|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5573.04332025319,"samples":7},{"name":"new Blob (1024)","opsSec":699.3468510897019,"samples":2},{"name":"text (128)","opsSec":5873.502290047546,"samples":6},{"name":"text (1024)","opsSec":744.4357347965031,"samples":2},{"name":"arrayBuffer (128)","opsSec":5844.631103883418,"samples":6},{"name":"arrayBuffer (1024)","opsSec":748.5117203317021,"samples":4},{"name":"slice (0, 64)","opsSec":197053.04080328834,"samples":3},{"name":"slice (0, 512)","opsSec":30079.48107779887,"samples":5}]}-->
