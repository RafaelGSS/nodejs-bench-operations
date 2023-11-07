## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|8,432|92|
|new Blob (1024)|1,085|80|
|text (128)|38,672|82|
|text (1024)|16,053|79|
|arrayBuffer (128)|44,702|89|
|arrayBuffer (1024)|17,295|80|
|slice (0, 64)|185,103|83|
|slice (0, 512)|33,302|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:10:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":8432.155403390228,"samples":4},{"name":"new Blob (1024)","opsSec":1084.7525706200636,"samples":2},{"name":"text (128)","opsSec":38671.60079852136,"samples":4},{"name":"text (1024)","opsSec":16053.460661202484,"samples":5},{"name":"arrayBuffer (128)","opsSec":44701.57881841425,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17294.95972694274,"samples":4},{"name":"slice (0, 64)","opsSec":185103.20998081198,"samples":4},{"name":"slice (0, 512)","opsSec":33302.21722980631,"samples":4}]}-->
