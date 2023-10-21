## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,912|83|
|new Blob (1024)|352|67|
|text (128)|3,430|82|
|text (1024)|424|85|
|arrayBuffer (128)|3,428|83|
|arrayBuffer (1024)|426|82|
|slice (0, 64)|43,105|64|
|slice (0, 512)|12,776|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2911.658774610719,"samples":4},{"name":"new Blob (1024)","opsSec":352.1933195930236,"samples":2},{"name":"text (128)","opsSec":3429.679092337315,"samples":4},{"name":"text (1024)","opsSec":424.28466901974,"samples":2},{"name":"arrayBuffer (128)","opsSec":3427.71113732267,"samples":4},{"name":"arrayBuffer (1024)","opsSec":425.7806231370435,"samples":2},{"name":"slice (0, 64)","opsSec":43105.14147472552,"samples":3},{"name":"slice (0, 512)","opsSec":12775.629227151767,"samples":4}]}-->
