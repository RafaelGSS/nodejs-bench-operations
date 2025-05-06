## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,170|2095|
|new Blob (1024)|537|272|
|text (128)|4,416|2209|
|text (1024)|552|278|
|arrayBuffer (128)|4,462|2234|
|arrayBuffer (1024)|546|275|
|slice (0, 64)|58,316|29753|
|slice (0, 512)|24,695|12350|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2095,"opsSec":4170.476390213525},{"name":"new Blob (1024)","samples":272,"opsSec":537.9264797566884},{"name":"text (128)","samples":2209,"opsSec":4416.43505390439},{"name":"text (1024)","samples":278,"opsSec":552.8890514338505},{"name":"arrayBuffer (128)","samples":2234,"opsSec":4462.32641969694},{"name":"arrayBuffer (1024)","samples":275,"opsSec":546.6623421368367},{"name":"slice (0, 64)","samples":29753,"opsSec":58316.47089047497},{"name":"slice (0, 512)","samples":12350,"opsSec":24695.357618502727}]}-->
