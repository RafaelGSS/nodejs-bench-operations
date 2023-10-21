## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,180|82|
|new Blob (1024)|388|66|
|text (128)|4,034|83|
|text (1024)|490|88|
|arrayBuffer (128)|3,984|85|
|arrayBuffer (1024)|487|87|
|slice (0, 64)|50,008|66|
|slice (0, 512)|16,504|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3180.2739807739886,"samples":4},{"name":"new Blob (1024)","opsSec":388.4510061931157,"samples":2},{"name":"text (128)","opsSec":4033.614187348395,"samples":4},{"name":"text (1024)","opsSec":490.26089794441464,"samples":3},{"name":"arrayBuffer (128)","opsSec":3983.516173697305,"samples":6},{"name":"arrayBuffer (1024)","opsSec":487.481419183441,"samples":2},{"name":"slice (0, 64)","opsSec":50008.41172049519,"samples":3},{"name":"slice (0, 512)","opsSec":16503.821635413802,"samples":3}]}-->
