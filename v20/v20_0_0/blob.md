## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,978|2028|
|new Blob (1024)|517|263|
|text (128)|4,506|2260|
|text (1024)|574|288|
|arrayBuffer (128)|4,579|2290|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|73,741|36888|
|slice (0, 512)|21,282|13730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2028,"opsSec":3978.957741096719},{"name":"new Blob (1024)","samples":263,"opsSec":517.394460436928},{"name":"text (128)","samples":2260,"opsSec":4506.32736116614},{"name":"text (1024)","samples":288,"opsSec":574.0537591339353},{"name":"arrayBuffer (128)","samples":2290,"opsSec":4579.630936702072},{"name":"arrayBuffer (1024)","samples":284,"opsSec":567.1199840414034},{"name":"slice (0, 64)","samples":36888,"opsSec":73741.80592459276},{"name":"slice (0, 512)","samples":13730,"opsSec":21282.310944368568}]}-->
