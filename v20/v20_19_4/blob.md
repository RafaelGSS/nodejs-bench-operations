## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,071|2039|
|new Blob (1024)|516|259|
|text (128)|4,194|2109|
|text (1024)|531|266|
|arrayBuffer (128)|4,217|2109|
|arrayBuffer (1024)|529|267|
|slice (0, 64)|58,609|29846|
|slice (0, 512)|24,784|12393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2039,"opsSec":4071.8254513110282},{"name":"new Blob (1024)","samples":259,"opsSec":516.5189521512837},{"name":"text (128)","samples":2109,"opsSec":4194.51539486792},{"name":"text (1024)","samples":266,"opsSec":531.0316998055602},{"name":"arrayBuffer (128)","samples":2109,"opsSec":4217.945858446961},{"name":"arrayBuffer (1024)","samples":267,"opsSec":529.3692062907168},{"name":"slice (0, 64)","samples":29846,"opsSec":58609.160247280386},{"name":"slice (0, 512)","samples":12393,"opsSec":24784.70187645452}]}-->
