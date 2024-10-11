## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,496|2255|
|new Blob (1024)|588|295|
|text (128)|4,036|2019|
|text (1024)|530|267|
|arrayBuffer (128)|4,214|2108|
|arrayBuffer (1024)|534|268|
|slice (0, 64)|147,945|81565|
|slice (0, 512)|35,482|17775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:46:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":4496.093385331062,"samples":2255},{"name":"new Blob (1024)","opsSec":588.8255544574037,"samples":295},{"name":"text (128)","opsSec":4036.434307496465,"samples":2019},{"name":"text (1024)","opsSec":530.6638437735184,"samples":267},{"name":"arrayBuffer (128)","opsSec":4214.912232310734,"samples":2108},{"name":"arrayBuffer (1024)","opsSec":534.4912786399922,"samples":268},{"name":"slice (0, 64)","opsSec":147945.41116331518,"samples":81565},{"name":"slice (0, 512)","opsSec":35482.892695326824,"samples":17775}]}-->
