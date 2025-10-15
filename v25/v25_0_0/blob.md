## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,650|2347|
|new Blob (1024)|636|322|
|text (128)|4,559|2280|
|text (1024)|568|285|
|arrayBuffer (128)|4,561|2281|
|arrayBuffer (1024)|571|287|
|slice (0, 64)|188,843|104424|
|slice (0, 512)|22,645|11939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:03:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2347,"opsSec":4650.3571791338345},{"name":"new Blob (1024)","samples":322,"opsSec":636.3515255628633},{"name":"text (128)","samples":2280,"opsSec":4559.063030484101},{"name":"text (1024)","samples":285,"opsSec":568.3826501176108},{"name":"arrayBuffer (128)","samples":2281,"opsSec":4561.765625605688},{"name":"arrayBuffer (1024)","samples":287,"opsSec":571.0947223596543},{"name":"slice (0, 64)","samples":104424,"opsSec":188843.6200782333},{"name":"slice (0, 512)","samples":11939,"opsSec":22645.417747327505}]}-->
