## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,296|2149|
|new Blob (1024)|571|289|
|text (128)|48,218|24110|
|text (1024)|33,423|16716|
|arrayBuffer (128)|50,444|25223|
|arrayBuffer (1024)|30,535|15268|
|slice (0, 64)|76,395|38596|
|slice (0, 512)|30,884|15443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:02:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4296.595348455492,"samples":2149},{"name":"new Blob (1024)","opsSec":571.9597470246184,"samples":289},{"name":"text (128)","opsSec":48218.76839621762,"samples":24110},{"name":"text (1024)","opsSec":33423.897779786996,"samples":16716},{"name":"arrayBuffer (128)","opsSec":50444.01825629878,"samples":25223},{"name":"arrayBuffer (1024)","opsSec":30535.564196427786,"samples":15268},{"name":"slice (0, 64)","opsSec":76395.06849445542,"samples":38596},{"name":"slice (0, 512)","opsSec":30884.76547415447,"samples":15443}]}-->
