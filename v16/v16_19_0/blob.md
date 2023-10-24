## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,529|79|
|new Blob (1024)|332|66|
|text (128)|16,275|63|
|text (1024)|8,345|66|
|arrayBuffer (128)|22,559|62|
|arrayBuffer (1024)|11,780|75|
|slice (0, 64)|42,000|73|
|slice (0, 512)|20,363|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2529.014475767379,"samples":3},{"name":"new Blob (1024)","opsSec":332.02296717311253,"samples":2},{"name":"text (128)","opsSec":16275.169614324152,"samples":3},{"name":"text (1024)","opsSec":8344.897662970317,"samples":3},{"name":"arrayBuffer (128)","opsSec":22559.332924575632,"samples":3},{"name":"arrayBuffer (1024)","opsSec":11780.314760022567,"samples":4},{"name":"slice (0, 64)","opsSec":42000.044137658886,"samples":3},{"name":"slice (0, 512)","opsSec":20362.691718742546,"samples":4}]}-->
