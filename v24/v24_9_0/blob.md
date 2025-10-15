## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,998|2500|
|new Blob (1024)|672|343|
|text (128)|4,705|2358|
|text (1024)|581|291|
|arrayBuffer (128)|4,692|2347|
|arrayBuffer (1024)|580|292|
|slice (0, 64)|153,435|85077|
|slice (0, 512)|31,069|15539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2500,"opsSec":4998.84487692353},{"name":"new Blob (1024)","samples":343,"opsSec":672.9868833482992},{"name":"text (128)","samples":2358,"opsSec":4705.883517496495},{"name":"text (1024)","samples":291,"opsSec":581.6219992097376},{"name":"arrayBuffer (128)","samples":2347,"opsSec":4692.677443945264},{"name":"arrayBuffer (1024)","samples":292,"opsSec":580.9798691072251},{"name":"slice (0, 64)","samples":85077,"opsSec":153435.5149983608},{"name":"slice (0, 512)","samples":15539,"opsSec":31069.20902944354}]}-->
