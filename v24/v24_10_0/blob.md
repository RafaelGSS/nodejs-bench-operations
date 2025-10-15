## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,573|2303|
|new Blob (1024)|614|310|
|text (128)|4,445|2227|
|text (1024)|555|279|
|arrayBuffer (128)|4,428|2215|
|arrayBuffer (1024)|554|279|
|slice (0, 64)|161,239|93207|
|slice (0, 512)|31,098|15550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:04:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2303,"opsSec":4573.157739644327},{"name":"new Blob (1024)","samples":310,"opsSec":614.5838824318162},{"name":"text (128)","samples":2227,"opsSec":4445.271469425124},{"name":"text (1024)","samples":279,"opsSec":555.8729000957311},{"name":"arrayBuffer (128)","samples":2215,"opsSec":4428.384100355317},{"name":"arrayBuffer (1024)","samples":279,"opsSec":554.5767595994066},{"name":"slice (0, 64)","samples":93207,"opsSec":161239.73972746846},{"name":"slice (0, 512)","samples":15550,"opsSec":31098.94226277576}]}-->
