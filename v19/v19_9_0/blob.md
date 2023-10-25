## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,048|82|
|new Blob (1024)|396|67|
|text (128)|3,576|84|
|text (1024)|440|89|
|arrayBuffer (128)|3,487|85|
|arrayBuffer (1024)|434|87|
|slice (0, 64)|58,436|67|
|slice (0, 512)|21,509|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3048.0860929948803,"samples":4},{"name":"new Blob (1024)","opsSec":396.13694482724617,"samples":2},{"name":"text (128)","opsSec":3575.8894938793296,"samples":4},{"name":"text (1024)","opsSec":440.47467522056,"samples":3},{"name":"arrayBuffer (128)","opsSec":3486.609387266867,"samples":4},{"name":"arrayBuffer (1024)","opsSec":434.4433488704228,"samples":2},{"name":"slice (0, 64)","opsSec":58436.12691889784,"samples":4},{"name":"slice (0, 512)","opsSec":21508.901780861568,"samples":5}]}-->
