## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,812|87|
|new Blob (1024)|587|73|
|text (128)|4,936|85|
|text (1024)|617|87|
|arrayBuffer (128)|4,923|87|
|arrayBuffer (1024)|615|87|
|slice (0, 64)|168,177|57|
|slice (0, 512)|29,925|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4812.253534016254,"samples":8},{"name":"new Blob (1024)","opsSec":587.1688912737525,"samples":2},{"name":"text (128)","opsSec":4935.913853951404,"samples":5},{"name":"text (1024)","opsSec":617.148106964497,"samples":3},{"name":"arrayBuffer (128)","opsSec":4923.386108099483,"samples":4},{"name":"arrayBuffer (1024)","opsSec":615.0943467541347,"samples":2},{"name":"slice (0, 64)","opsSec":168177.28475880792,"samples":4},{"name":"slice (0, 512)","opsSec":29925.30912774519,"samples":3}]}-->
