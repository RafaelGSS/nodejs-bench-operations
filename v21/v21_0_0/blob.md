## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,545|92|
|new Blob (1024)|707|82|
|text (128)|5,899|87|
|text (1024)|750|89|
|arrayBuffer (128)|5,827|87|
|arrayBuffer (1024)|744|89|
|slice (0, 64)|193,572|58|
|slice (0, 512)|38,769|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5545.411171899344,"samples":5},{"name":"new Blob (1024)","opsSec":706.5889478300968,"samples":2},{"name":"text (128)","opsSec":5898.524951994253,"samples":6},{"name":"text (1024)","opsSec":749.6069197693243,"samples":3},{"name":"arrayBuffer (128)","opsSec":5827.136819250665,"samples":5},{"name":"arrayBuffer (1024)","opsSec":744.3593794557218,"samples":3},{"name":"slice (0, 64)","opsSec":193572.0765257397,"samples":5},{"name":"slice (0, 512)","opsSec":38769.2266797144,"samples":3}]}-->
