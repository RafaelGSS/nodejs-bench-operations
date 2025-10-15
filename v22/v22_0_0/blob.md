## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,844|2423|
|new Blob (1024)|589|295|
|text (128)|4,697|2349|
|text (1024)|590|297|
|arrayBuffer (128)|4,711|2356|
|arrayBuffer (1024)|592|297|
|slice (0, 64)|198,108|99179|
|slice (0, 512)|13,474|6740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2423,"opsSec":4844.3178978077085},{"name":"new Blob (1024)","samples":295,"opsSec":589.4724975671571},{"name":"text (128)","samples":2349,"opsSec":4697.1094937995085},{"name":"text (1024)","samples":297,"opsSec":590.6757642189887},{"name":"arrayBuffer (128)","samples":2356,"opsSec":4711.96775129271},{"name":"arrayBuffer (1024)","samples":297,"opsSec":592.9769416264274},{"name":"slice (0, 64)","samples":99179,"opsSec":198108.66360572446},{"name":"slice (0, 512)","samples":6740,"opsSec":13474.261554540628}]}-->
