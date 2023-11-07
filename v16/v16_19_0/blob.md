## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,376|82|
|new Blob (1024)|564|73|
|text (128)|41,817|88|
|text (1024)|26,212|75|
|arrayBuffer (128)|51,871|79|
|arrayBuffer (1024)|30,100|72|
|slice (0, 64)|92,984|81|
|slice (0, 512)|46,490|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:21:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4376.1027339449565,"samples":3},{"name":"new Blob (1024)","opsSec":564.2125917421217,"samples":2},{"name":"text (128)","opsSec":41817.18349144265,"samples":5},{"name":"text (1024)","opsSec":26211.855852439207,"samples":3},{"name":"arrayBuffer (128)","opsSec":51870.66517924242,"samples":4},{"name":"arrayBuffer (1024)","opsSec":30100.05187949594,"samples":4},{"name":"slice (0, 64)","opsSec":92983.67423104268,"samples":4},{"name":"slice (0, 512)","opsSec":46489.510135585835,"samples":3}]}-->
