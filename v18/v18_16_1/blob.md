## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,880|87|
|new Blob (1024)|363|69|
|text (128)|26,893|65|
|text (1024)|18,281|83|
|arrayBuffer (128)|26,513|80|
|arrayBuffer (1024)|18,721|83|
|slice (0, 64)|55,914|77|
|slice (0, 512)|34,356|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2879.754507296435,"samples":4},{"name":"new Blob (1024)","opsSec":362.93789739156887,"samples":2},{"name":"text (128)","opsSec":26892.54864639577,"samples":3},{"name":"text (1024)","opsSec":18280.59022978663,"samples":4},{"name":"arrayBuffer (128)","opsSec":26512.739555712447,"samples":3},{"name":"arrayBuffer (1024)","opsSec":18721.44371026026,"samples":3},{"name":"slice (0, 64)","opsSec":55913.94785695802,"samples":3},{"name":"slice (0, 512)","opsSec":34356.33201675555,"samples":4}]}-->
