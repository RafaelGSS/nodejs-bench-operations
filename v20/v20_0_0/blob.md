## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,023|79|
|new Blob (1024)|386|64|
|text (128)|2,985|82|
|text (1024)|392|80|
|arrayBuffer (128)|2,945|82|
|arrayBuffer (1024)|392|82|
|slice (0, 64)|37,788|64|
|slice (0, 512)|13,719|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3022.696298846174,"samples":3},{"name":"new Blob (1024)","opsSec":385.97523344677325,"samples":3},{"name":"text (128)","opsSec":2984.805175593328,"samples":4},{"name":"text (1024)","opsSec":391.9509868895917,"samples":2},{"name":"arrayBuffer (128)","opsSec":2945.4226779285123,"samples":3},{"name":"arrayBuffer (1024)","opsSec":392.09387057455024,"samples":4},{"name":"slice (0, 64)","opsSec":37787.86376204858,"samples":5},{"name":"slice (0, 512)","opsSec":13718.6948745658,"samples":5}]}-->
