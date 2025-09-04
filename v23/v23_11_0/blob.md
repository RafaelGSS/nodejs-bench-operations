## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,401|2201|
|new Blob (1024)|578|294|
|text (128)|4,087|2044|
|text (1024)|513|257|
|arrayBuffer (128)|4,097|2049|
|arrayBuffer (1024)|508|255|
|slice (0, 64)|154,546|81404|
|slice (0, 512)|31,544|15783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2201,"opsSec":4401.478169551174},{"name":"new Blob (1024)","samples":294,"opsSec":578.4967310664838},{"name":"text (128)","samples":2044,"opsSec":4087.1088467870463},{"name":"text (1024)","samples":257,"opsSec":513.5538490665158},{"name":"arrayBuffer (128)","samples":2049,"opsSec":4097.702982097046},{"name":"arrayBuffer (1024)","samples":255,"opsSec":508.6528857320388},{"name":"slice (0, 64)","samples":81404,"opsSec":154546.70613276638},{"name":"slice (0, 512)","samples":15783,"opsSec":31544.92508790817}]}-->
