## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,037|2019|
|new Blob (1024)|556|279|
|text (128)|46,597|23300|
|text (1024)|30,773|15500|
|arrayBuffer (128)|50,027|25020|
|arrayBuffer (1024)|33,562|16782|
|slice (0, 64)|90,064|45133|
|slice (0, 512)|53,977|27201|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:00:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2019,"opsSec":4037.8628741767925},{"name":"new Blob (1024)","samples":279,"opsSec":556.9584642795418},{"name":"text (128)","samples":23300,"opsSec":46597.73618878047},{"name":"text (1024)","samples":15500,"opsSec":30773.86679499197},{"name":"arrayBuffer (128)","samples":25020,"opsSec":50027.99808314786},{"name":"arrayBuffer (1024)","samples":16782,"opsSec":33562.790866896226},{"name":"slice (0, 64)","samples":45133,"opsSec":90064.83874163314},{"name":"slice (0, 512)","samples":27201,"opsSec":53977.011246274305}]}-->
