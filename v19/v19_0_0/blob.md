## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,797|82|
|new Blob (1024)|375|68|
|text (128)|20,925|80|
|text (1024)|9,220|75|
|arrayBuffer (128)|23,393|76|
|arrayBuffer (1024)|10,406|78|
|slice (0, 64)|47,041|74|
|slice (0, 512)|24,893|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2797.301077793883,"samples":2},{"name":"new Blob (1024)","opsSec":375.0177841613785,"samples":2},{"name":"text (128)","opsSec":20925.054548082215,"samples":4},{"name":"text (1024)","opsSec":9220.212394604243,"samples":3},{"name":"arrayBuffer (128)","opsSec":23393.249252267193,"samples":4},{"name":"arrayBuffer (1024)","opsSec":10406.43559953082,"samples":3},{"name":"slice (0, 64)","opsSec":47040.90644855691,"samples":4},{"name":"slice (0, 512)","opsSec":24893.345004783547,"samples":4}]}-->
