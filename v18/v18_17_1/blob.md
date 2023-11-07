## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,636|83|
|new Blob (1024)|599|79|
|text (128)|49,702|88|
|text (1024)|32,494|82|
|arrayBuffer (128)|50,131|87|
|arrayBuffer (1024)|32,528|77|
|slice (0, 64)|93,307|85|
|slice (0, 512)|55,999|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:24:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4635.916555044053,"samples":3},{"name":"new Blob (1024)","opsSec":599.4580205385046,"samples":2},{"name":"text (128)","opsSec":49702.08472059349,"samples":5},{"name":"text (1024)","opsSec":32493.964446013968,"samples":3},{"name":"arrayBuffer (128)","opsSec":50130.658069387486,"samples":4},{"name":"arrayBuffer (1024)","opsSec":32528.270411855374,"samples":3},{"name":"slice (0, 64)","opsSec":93306.50410282041,"samples":3},{"name":"slice (0, 512)","opsSec":55998.88455612108,"samples":4}]}-->
