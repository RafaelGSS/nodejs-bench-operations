## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,800|81|
|new Blob (1024)|379|66|
|text (128)|3,010|79|
|text (1024)|389|78|
|arrayBuffer (128)|3,039|82|
|arrayBuffer (1024)|387|81|
|slice (0, 64)|37,360|64|
|slice (0, 512)|10,812|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2800.177702631949,"samples":3},{"name":"new Blob (1024)","opsSec":378.7273947485891,"samples":2},{"name":"text (128)","opsSec":3010.072479340216,"samples":4},{"name":"text (1024)","opsSec":388.81848918816985,"samples":2},{"name":"arrayBuffer (128)","opsSec":3039.1856191172606,"samples":4},{"name":"arrayBuffer (1024)","opsSec":386.98008929393563,"samples":2},{"name":"slice (0, 64)","opsSec":37359.90329147215,"samples":4},{"name":"slice (0, 512)","opsSec":10811.981482266869,"samples":3}]}-->
