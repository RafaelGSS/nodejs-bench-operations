## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,838|87|
|new Blob (1024)|351|69|
|text (128)|25,753|74|
|text (1024)|17,467|85|
|arrayBuffer (128)|26,440|83|
|arrayBuffer (1024)|18,063|86|
|slice (0, 64)|50,662|75|
|slice (0, 512)|25,539|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2837.578447195655,"samples":4},{"name":"new Blob (1024)","opsSec":350.9625971411583,"samples":2},{"name":"text (128)","opsSec":25752.55768834366,"samples":4},{"name":"text (1024)","opsSec":17466.546639818942,"samples":5},{"name":"arrayBuffer (128)","opsSec":26439.816479232537,"samples":6},{"name":"arrayBuffer (1024)","opsSec":18063.085818747033,"samples":3},{"name":"slice (0, 64)","opsSec":50662.28109395993,"samples":4},{"name":"slice (0, 512)","opsSec":25539.07158859113,"samples":4}]}-->
