## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,811|2478|
|new Blob (1024)|609|305|
|text (128)|4,502|2256|
|text (1024)|576|289|
|arrayBuffer (128)|4,595|2301|
|arrayBuffer (1024)|576|290|
|slice (0, 64)|149,389|81730|
|slice (0, 512)|31,777|15892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4811.855778825577,"samples":2478},{"name":"new Blob (1024)","opsSec":609.2005668089959,"samples":305},{"name":"text (128)","opsSec":4502.817233708244,"samples":2256},{"name":"text (1024)","opsSec":576.7245690018558,"samples":289},{"name":"arrayBuffer (128)","opsSec":4595.186698301681,"samples":2301},{"name":"arrayBuffer (1024)","opsSec":576.1932994524917,"samples":290},{"name":"slice (0, 64)","opsSec":149389.67927701026,"samples":81730},{"name":"slice (0, 512)","opsSec":31777.616067597715,"samples":15892}]}-->
