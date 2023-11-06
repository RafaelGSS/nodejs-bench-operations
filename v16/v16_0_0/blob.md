## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|8,185|89|
|new Blob (1024)|1,054|76|
|text (128)|37,757|86|
|text (1024)|15,317|83|
|arrayBuffer (128)|44,811|86|
|arrayBuffer (1024)|17,362|81|
|slice (0, 64)|176,633|82|
|slice (0, 512)|34,183|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:21:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":8185.207727524576,"samples":5},{"name":"new Blob (1024)","opsSec":1053.7114463723306,"samples":2},{"name":"text (128)","opsSec":37756.645004293394,"samples":4},{"name":"text (1024)","opsSec":15317.380944031494,"samples":3},{"name":"arrayBuffer (128)","opsSec":44810.88774256232,"samples":4},{"name":"arrayBuffer (1024)","opsSec":17362.114186498246,"samples":4},{"name":"slice (0, 64)","opsSec":176633.02393846764,"samples":4},{"name":"slice (0, 512)","opsSec":34182.99881699875,"samples":3}]}-->
