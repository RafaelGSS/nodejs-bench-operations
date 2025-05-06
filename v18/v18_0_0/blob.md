## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,102|2094|
|new Blob (1024)|515|258|
|text (128)|34,088|17045|
|text (1024)|13,895|6949|
|arrayBuffer (128)|40,565|20288|
|arrayBuffer (1024)|15,335|7669|
|slice (0, 64)|74,078|37040|
|slice (0, 512)|24,677|12339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2094,"opsSec":4102.006913542825},{"name":"new Blob (1024)","samples":258,"opsSec":515.5984550168237},{"name":"text (128)","samples":17045,"opsSec":34088.83225296235},{"name":"text (1024)","samples":6949,"opsSec":13895.987999897494},{"name":"arrayBuffer (128)","samples":20288,"opsSec":40565.190755880045},{"name":"arrayBuffer (1024)","samples":7669,"opsSec":15335.996658756469},{"name":"slice (0, 64)","samples":37040,"opsSec":74078.12241590925},{"name":"slice (0, 512)","samples":12339,"opsSec":24677.6080208742}]}-->
