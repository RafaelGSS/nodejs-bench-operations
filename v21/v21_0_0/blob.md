## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,756|2379|
|new Blob (1024)|614|308|
|text (128)|4,841|2426|
|text (1024)|592|297|
|arrayBuffer (128)|4,879|2440|
|arrayBuffer (1024)|606|304|
|slice (0, 64)|156,997|94538|
|slice (0, 512)|33,703|16852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4756.706622928986,"samples":2379},{"name":"new Blob (1024)","opsSec":614.8796192374726,"samples":308},{"name":"text (128)","opsSec":4841.321062413738,"samples":2426},{"name":"text (1024)","opsSec":592.2876171323297,"samples":297},{"name":"arrayBuffer (128)","opsSec":4879.702660198103,"samples":2440},{"name":"arrayBuffer (1024)","opsSec":606.5585584711266,"samples":304},{"name":"slice (0, 64)","opsSec":156997.2076823192,"samples":94538},{"name":"slice (0, 512)","opsSec":33703.87913788941,"samples":16852}]}-->
