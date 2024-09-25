## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,279|2140|
|new Blob (1024)|593|297|
|text (128)|4,481|2241|
|text (1024)|576|289|
|arrayBuffer (128)|4,614|2308|
|arrayBuffer (1024)|565|283|
|slice (0, 64)|183,257|91629|
|slice (0, 512)|37,718|18860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:15:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4279.611068946148,"samples":2140},{"name":"new Blob (1024)","opsSec":593.81229830777,"samples":297},{"name":"text (128)","opsSec":4481.411787814181,"samples":2241},{"name":"text (1024)","opsSec":576.9789227084136,"samples":289},{"name":"arrayBuffer (128)","opsSec":4614.238698946286,"samples":2308},{"name":"arrayBuffer (1024)","opsSec":565.0752633726709,"samples":283},{"name":"slice (0, 64)","opsSec":183257.37252671938,"samples":91629},{"name":"slice (0, 512)","opsSec":37718.894383765815,"samples":18860}]}-->
