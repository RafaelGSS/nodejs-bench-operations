## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,905|86|
|new Blob (1024)|353|70|
|text (128)|21,239|70|
|text (1024)|8,527|84|
|arrayBuffer (128)|23,770|84|
|arrayBuffer (1024)|9,444|85|
|slice (0, 64)|45,778|76|
|slice (0, 512)|13,378|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2904.5358990448394,"samples":4},{"name":"new Blob (1024)","opsSec":352.7275018803132,"samples":2},{"name":"text (128)","opsSec":21239.189300105267,"samples":4},{"name":"text (1024)","opsSec":8527.357308017494,"samples":3},{"name":"arrayBuffer (128)","opsSec":23770.468109742826,"samples":6},{"name":"arrayBuffer (1024)","opsSec":9443.577479299109,"samples":5},{"name":"slice (0, 64)","opsSec":45778.24544353137,"samples":3},{"name":"slice (0, 512)","opsSec":13377.826815824785,"samples":4}]}-->
