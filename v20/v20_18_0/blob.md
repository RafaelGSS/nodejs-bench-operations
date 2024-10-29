## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,413|2207|
|new Blob (1024)|576|289|
|text (128)|4,489|2245|
|text (1024)|564|284|
|arrayBuffer (128)|4,541|2275|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|63,916|36623|
|slice (0, 512)|24,690|12346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4413.217033513217,"samples":2207},{"name":"new Blob (1024)","opsSec":576.642355544675,"samples":289},{"name":"text (128)","opsSec":4489.486232174562,"samples":2245},{"name":"text (1024)","opsSec":564.3592081339233,"samples":284},{"name":"arrayBuffer (128)","opsSec":4541.335903123943,"samples":2275},{"name":"arrayBuffer (1024)","opsSec":567.0394906726706,"samples":284},{"name":"slice (0, 64)","opsSec":63916.070685914005,"samples":36623},{"name":"slice (0, 512)","opsSec":24690.84970269405,"samples":12346}]}-->
