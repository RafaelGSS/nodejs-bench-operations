## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,334|84|
|new Blob (1024)|798|75|
|text (128)|6,482|89|
|text (1024)|828|89|
|arrayBuffer (128)|6,497|91|
|arrayBuffer (1024)|825|91|
|slice (0, 64)|203,608|57|
|slice (0, 512)|36,125|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:54:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6334.468492398966,"samples":2},{"name":"new Blob (1024)","opsSec":798.170749045239,"samples":2},{"name":"text (128)","opsSec":6481.878126620119,"samples":6},{"name":"text (1024)","opsSec":827.6999183060182,"samples":3},{"name":"arrayBuffer (128)","opsSec":6496.892331436602,"samples":4},{"name":"arrayBuffer (1024)","opsSec":825.1620181981906,"samples":3},{"name":"slice (0, 64)","opsSec":203607.919681793,"samples":3},{"name":"slice (0, 512)","opsSec":36124.58903672448,"samples":6}]}-->
