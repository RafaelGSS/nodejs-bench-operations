## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,574|83|
|new Blob (1024)|579|75|
|text (128)|5,053|87|
|text (1024)|630|86|
|arrayBuffer (128)|5,037|88|
|arrayBuffer (1024)|631|87|
|slice (0, 64)|69,950|68|
|slice (0, 512)|18,842|65|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:32:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4573.898288650968,"samples":4},{"name":"new Blob (1024)","opsSec":578.5793106400315,"samples":2},{"name":"text (128)","opsSec":5052.862407092705,"samples":5},{"name":"text (1024)","opsSec":630.1119951637128,"samples":3},{"name":"arrayBuffer (128)","opsSec":5037.017703634407,"samples":3},{"name":"arrayBuffer (1024)","opsSec":631.1047445476887,"samples":3},{"name":"slice (0, 64)","opsSec":69950.3737489206,"samples":3},{"name":"slice (0, 512)","opsSec":18841.79032695052,"samples":3}]}-->
