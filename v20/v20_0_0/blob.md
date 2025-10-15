## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,851|1926|
|new Blob (1024)|539|270|
|text (128)|4,594|2298|
|text (1024)|577|290|
|arrayBuffer (128)|4,658|2337|
|arrayBuffer (1024)|576|289|
|slice (0, 64)|84,608|43074|
|slice (0, 512)|27,197|13600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":1926,"opsSec":3851.276067934958},{"name":"new Blob (1024)","samples":270,"opsSec":539.3305893444726},{"name":"text (128)","samples":2298,"opsSec":4594.266968991025},{"name":"text (1024)","samples":290,"opsSec":577.0029061169197},{"name":"arrayBuffer (128)","samples":2337,"opsSec":4658.544310273452},{"name":"arrayBuffer (1024)","samples":289,"opsSec":576.7291830125237},{"name":"slice (0, 64)","samples":43074,"opsSec":84608.06003675115},{"name":"slice (0, 512)","samples":13600,"opsSec":27197.155231957047}]}-->
