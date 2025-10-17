## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,376|2189|
|new Blob (1024)|546|278|
|text (128)|4,418|2219|
|text (1024)|560|281|
|arrayBuffer (128)|4,426|2220|
|arrayBuffer (1024)|554|278|
|slice (0, 64)|61,221|31011|
|slice (0, 512)|24,901|12451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2189,"opsSec":4376.669842501467},{"name":"new Blob (1024)","samples":278,"opsSec":546.5884938686415},{"name":"text (128)","samples":2219,"opsSec":4418.352056748956},{"name":"text (1024)","samples":281,"opsSec":560.6263007390569},{"name":"arrayBuffer (128)","samples":2220,"opsSec":4426.937285635408},{"name":"arrayBuffer (1024)","samples":278,"opsSec":554.7624226732025},{"name":"slice (0, 64)","samples":31011,"opsSec":61221.32087312536},{"name":"slice (0, 512)","samples":12451,"opsSec":24901.556005256425}]}-->
