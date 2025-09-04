## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2302|
|new Blob (1024)|585|293|
|text (128)|4,365|2184|
|text (1024)|541|272|
|arrayBuffer (128)|4,336|2181|
|arrayBuffer (1024)|538|270|
|slice (0, 64)|148,461|83179|
|slice (0, 512)|31,813|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2302,"opsSec":4567.894095197004},{"name":"new Blob (1024)","samples":293,"opsSec":585.2618396752333},{"name":"text (128)","samples":2184,"opsSec":4365.373590440806},{"name":"text (1024)","samples":272,"opsSec":541.8718093063853},{"name":"arrayBuffer (128)","samples":2181,"opsSec":4336.1007132613295},{"name":"arrayBuffer (1024)","samples":270,"opsSec":538.0870467401342},{"name":"slice (0, 64)","samples":83179,"opsSec":148461.90360444758},{"name":"slice (0, 512)","samples":15910,"opsSec":31813.983275854902}]}-->
