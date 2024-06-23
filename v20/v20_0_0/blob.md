## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,670|2836|
|new Blob (1024)|703|352|
|text (128)|6,071|3036|
|text (1024)|774|388|
|arrayBuffer (128)|6,087|3044|
|arrayBuffer (1024)|774|388|
|slice (0, 64)|79,767|39884|
|slice (0, 512)|25,412|12707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5670.6490697708705,"samples":2836},{"name":"new Blob (1024)","opsSec":703.4885216358247,"samples":352},{"name":"text (128)","opsSec":6071.276558789721,"samples":3036},{"name":"text (1024)","opsSec":774.2791985460547,"samples":388},{"name":"arrayBuffer (128)","opsSec":6087.780925086025,"samples":3044},{"name":"arrayBuffer (1024)","opsSec":774.2646916571953,"samples":388},{"name":"slice (0, 64)","opsSec":79767.78685981633,"samples":39884},{"name":"slice (0, 512)","opsSec":25412.644793519692,"samples":12707}]}-->
