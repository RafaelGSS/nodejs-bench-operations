## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,479|2247|
|new Blob (1024)|633|317|
|text (128)|4,394|2201|
|text (1024)|554|279|
|arrayBuffer (128)|4,385|2194|
|arrayBuffer (1024)|552|277|
|slice (0, 64)|223,546|113791|
|slice (0, 512)|37,795|18899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2247,"opsSec":4479.308825624042},{"name":"new Blob (1024)","samples":317,"opsSec":633.2018528636764},{"name":"text (128)","samples":2201,"opsSec":4394.740337226416},{"name":"text (1024)","samples":279,"opsSec":554.5922866203543},{"name":"arrayBuffer (128)","samples":2194,"opsSec":4385.61728535763},{"name":"arrayBuffer (1024)","samples":277,"opsSec":552.4174102966161},{"name":"slice (0, 64)","samples":113791,"opsSec":223546.08599772412},{"name":"slice (0, 512)","samples":18899,"opsSec":37795.83233342401}]}-->
