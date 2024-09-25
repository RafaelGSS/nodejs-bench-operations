## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,307|2154|
|new Blob (1024)|530|272|
|text (128)|4,587|2294|
|text (1024)|571|286|
|arrayBuffer (128)|4,513|2257|
|arrayBuffer (1024)|565|283|
|slice (0, 64)|68,169|34085|
|slice (0, 512)|32,117|16059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:12:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4307.447647359544,"samples":2154},{"name":"new Blob (1024)","opsSec":530.7547301627542,"samples":272},{"name":"text (128)","opsSec":4587.691303435493,"samples":2294},{"name":"text (1024)","opsSec":571.884924173284,"samples":286},{"name":"arrayBuffer (128)","opsSec":4513.444331723833,"samples":2257},{"name":"arrayBuffer (1024)","opsSec":565.1385434906433,"samples":283},{"name":"slice (0, 64)","opsSec":68169.77449219271,"samples":34085},{"name":"slice (0, 512)","opsSec":32117.070402717243,"samples":16059}]}-->
