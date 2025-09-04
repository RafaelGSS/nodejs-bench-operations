## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,127|2075|
|new Blob (1024)|533|267|
|text (128)|4,344|2173|
|text (1024)|545|273|
|arrayBuffer (128)|4,358|2184|
|arrayBuffer (1024)|539|272|
|slice (0, 64)|57,641|29544|
|slice (0, 512)|24,764|12383|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2075,"opsSec":4127.857651447572},{"name":"new Blob (1024)","samples":267,"opsSec":533.530898292985},{"name":"text (128)","samples":2173,"opsSec":4344.790992389711},{"name":"text (1024)","samples":273,"opsSec":545.3486453942168},{"name":"arrayBuffer (128)","samples":2184,"opsSec":4358.767033014782},{"name":"arrayBuffer (1024)","samples":272,"opsSec":539.3434724195453},{"name":"slice (0, 64)","samples":29544,"opsSec":57641.60755724086},{"name":"slice (0, 512)","samples":12383,"opsSec":24764.576185456794}]}-->
