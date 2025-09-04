## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,534|2279|
|new Blob (1024)|617|314|
|text (128)|4,411|2206|
|text (1024)|553|277|
|arrayBuffer (128)|4,414|2208|
|arrayBuffer (1024)|561|281|
|slice (0, 64)|209,766|110265|
|slice (0, 512)|36,606|22427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2279,"opsSec":4534.2509267156365},{"name":"new Blob (1024)","samples":314,"opsSec":617.3020323194967},{"name":"text (128)","samples":2206,"opsSec":4411.249875781124},{"name":"text (1024)","samples":277,"opsSec":553.0350511698775},{"name":"arrayBuffer (128)","samples":2208,"opsSec":4414.09940356341},{"name":"arrayBuffer (1024)","samples":281,"opsSec":561.1139360058302},{"name":"slice (0, 64)","samples":110265,"opsSec":209766.6372271102},{"name":"slice (0, 512)","samples":22427,"opsSec":36606.77926310425}]}-->
