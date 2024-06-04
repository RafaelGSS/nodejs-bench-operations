## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,460|3231|
|new Blob (1024)|793|397|
|text (128)|6,379|3190|
|text (1024)|812|407|
|arrayBuffer (128)|6,508|3255|
|arrayBuffer (1024)|809|405|
|slice (0, 64)|233,246|116624|
|slice (0, 512)|42,180|21091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:13:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":6460.842346268459,"samples":3231},{"name":"new Blob (1024)","opsSec":793.8009940907792,"samples":397},{"name":"text (128)","opsSec":6379.490049083555,"samples":3190},{"name":"text (1024)","opsSec":812.3722140503185,"samples":407},{"name":"arrayBuffer (128)","opsSec":6508.30916731152,"samples":3255},{"name":"arrayBuffer (1024)","opsSec":809.2990094769671,"samples":405},{"name":"slice (0, 64)","opsSec":233246.955520094,"samples":116624},{"name":"slice (0, 512)","opsSec":42180.55599085148,"samples":21091}]}-->
