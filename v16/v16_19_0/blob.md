## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,117|87|
|new Blob (1024)|394|67|
|text (128)|25,555|77|
|text (1024)|15,269|83|
|arrayBuffer (128)|31,405|83|
|arrayBuffer (1024)|18,089|86|
|slice (0, 64)|63,566|75|
|slice (0, 512)|32,631|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3116.6138141718616,"samples":5},{"name":"new Blob (1024)","opsSec":394.1786131149274,"samples":2},{"name":"text (128)","opsSec":25554.865086276626,"samples":4},{"name":"text (1024)","opsSec":15269.099026750997,"samples":3},{"name":"arrayBuffer (128)","opsSec":31405.070221125527,"samples":4},{"name":"arrayBuffer (1024)","opsSec":18088.732663964063,"samples":4},{"name":"slice (0, 64)","opsSec":63566.11480110062,"samples":3},{"name":"slice (0, 512)","opsSec":32630.947495834418,"samples":3}]}-->
