## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|671|336|
|new Blob (1024)|523|262|
|text (128)|4,411|2206|
|text (1024)|550|276|
|arrayBuffer (128)|4,389|2195|
|arrayBuffer (1024)|551|276|
|slice (0, 64)|70,406|35204|
|slice (0, 512)|28,637|14319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:12:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":671.8520944488353,"samples":336},{"name":"new Blob (1024)","opsSec":523.5462675801184,"samples":262},{"name":"text (128)","opsSec":4411.760326708791,"samples":2206},{"name":"text (1024)","opsSec":550.9879937400176,"samples":276},{"name":"arrayBuffer (128)","opsSec":4389.314590969425,"samples":2195},{"name":"arrayBuffer (1024)","opsSec":551.3897824416673,"samples":276},{"name":"slice (0, 64)","opsSec":70406.96994606289,"samples":35204},{"name":"slice (0, 512)","opsSec":28637.339393862818,"samples":14319}]}-->
