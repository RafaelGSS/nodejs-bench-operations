## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,918|2010|
|new Blob (1024)|494|253|
|text (128)|42,190|21106|
|text (1024)|29,193|14597|
|arrayBuffer (128)|43,652|21842|
|arrayBuffer (1024)|27,760|13881|
|slice (0, 64)|76,417|38828|
|slice (0, 512)|41,982|21046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2010,"opsSec":3918.3726481401022},{"name":"new Blob (1024)","samples":253,"opsSec":494.0079134405192},{"name":"text (128)","samples":21106,"opsSec":42190.109914611465},{"name":"text (1024)","samples":14597,"opsSec":29193.109084696953},{"name":"arrayBuffer (128)","samples":21842,"opsSec":43652.50995237056},{"name":"arrayBuffer (1024)","samples":13881,"opsSec":27760.37851629086},{"name":"slice (0, 64)","samples":38828,"opsSec":76417.28076943345},{"name":"slice (0, 512)","samples":21046,"opsSec":41982.39178377743}]}-->
