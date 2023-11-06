## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,769|86|
|new Blob (1024)|588|74|
|text (128)|5,349|84|
|text (1024)|687|87|
|arrayBuffer (128)|5,426|86|
|arrayBuffer (1024)|683|89|
|slice (0, 64)|165,347|58|
|slice (0, 512)|28,199|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:32:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4768.563377687193,"samples":5},{"name":"new Blob (1024)","opsSec":588.2626260010278,"samples":3},{"name":"text (128)","opsSec":5348.872898026944,"samples":5},{"name":"text (1024)","opsSec":686.9398788450866,"samples":3},{"name":"arrayBuffer (128)","opsSec":5426.2447103986215,"samples":3},{"name":"arrayBuffer (1024)","opsSec":683.0229602978029,"samples":3},{"name":"slice (0, 64)","opsSec":165346.6564774814,"samples":3},{"name":"slice (0, 512)","opsSec":28199.155405234065,"samples":4}]}-->
