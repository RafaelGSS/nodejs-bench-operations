## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,658|89|
|new Blob (1024)|735|78|
|text (128)|42,894|77|
|text (1024)|25,550|76|
|arrayBuffer (128)|40,436|74|
|arrayBuffer (1024)|26,779|75|
|slice (0, 64)|94,515|78|
|slice (0, 512)|44,131|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5658.4301100432185,"samples":3},{"name":"new Blob (1024)","opsSec":734.5668723397673,"samples":2},{"name":"text (128)","opsSec":42894.01160969626,"samples":4},{"name":"text (1024)","opsSec":25550.421263792647,"samples":4},{"name":"arrayBuffer (128)","opsSec":40436.220937867234,"samples":3},{"name":"arrayBuffer (1024)","opsSec":26779.41989213329,"samples":5},{"name":"slice (0, 64)","opsSec":94515.40936049458,"samples":3},{"name":"slice (0, 512)","opsSec":44130.94454830563,"samples":3}]}-->
