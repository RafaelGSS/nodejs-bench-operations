## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,377|2195|
|new Blob (1024)|567|287|
|text (128)|4,505|2253|
|text (1024)|568|285|
|arrayBuffer (128)|4,444|2237|
|arrayBuffer (1024)|565|285|
|slice (0, 64)|62,439|31220|
|slice (0, 512)|24,349|12178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2195,"opsSec":4377.401802592924},{"name":"new Blob (1024)","samples":287,"opsSec":567.6690594609802},{"name":"text (128)","samples":2253,"opsSec":4505.9546160251075},{"name":"text (1024)","samples":285,"opsSec":568.9723085609418},{"name":"arrayBuffer (128)","samples":2237,"opsSec":4444.301329685687},{"name":"arrayBuffer (1024)","samples":285,"opsSec":565.395060772232},{"name":"slice (0, 64)","samples":31220,"opsSec":62439.208021085455},{"name":"slice (0, 512)","samples":12178,"opsSec":24349.500679977504}]}-->
