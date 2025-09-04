## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,893|1947|
|new Blob (1024)|493|253|
|text (128)|32,329|16165|
|text (1024)|13,175|6608|
|arrayBuffer (128)|40,736|20641|
|arrayBuffer (1024)|15,577|7789|
|slice (0, 64)|74,222|37419|
|slice (0, 512)|25,629|12815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":1947,"opsSec":3893.3234104710814},{"name":"new Blob (1024)","samples":253,"opsSec":493.57932408619166},{"name":"text (128)","samples":16165,"opsSec":32329.03071100122},{"name":"text (1024)","samples":6608,"opsSec":13175.776094785067},{"name":"arrayBuffer (128)","samples":20641,"opsSec":40736.288370782175},{"name":"arrayBuffer (1024)","samples":7789,"opsSec":15577.905037090895},{"name":"slice (0, 64)","samples":37419,"opsSec":74222.18270652618},{"name":"slice (0, 512)","samples":12815,"opsSec":25629.428104941268}]}-->
