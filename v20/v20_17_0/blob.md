## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|759|384|
|new Blob (1024)|528|265|
|text (128)|4,517|2259|
|text (1024)|569|285|
|arrayBuffer (128)|4,608|2305|
|arrayBuffer (1024)|571|286|
|slice (0, 64)|65,873|32937|
|slice (0, 512)|26,234|13118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:38:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":759.2373396862507,"samples":384},{"name":"new Blob (1024)","opsSec":528.8338082823037,"samples":265},{"name":"text (128)","opsSec":4517.064407551928,"samples":2259},{"name":"text (1024)","opsSec":569.9236917770845,"samples":285},{"name":"arrayBuffer (128)","opsSec":4608.69119622137,"samples":2305},{"name":"arrayBuffer (1024)","opsSec":571.5109557890928,"samples":286},{"name":"slice (0, 64)","opsSec":65873.9250354659,"samples":32937},{"name":"slice (0, 512)","opsSec":26234.588893933884,"samples":13118}]}-->
