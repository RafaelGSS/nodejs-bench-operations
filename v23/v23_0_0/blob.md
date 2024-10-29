## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,927|2464|
|new Blob (1024)|629|317|
|text (128)|4,320|2161|
|text (1024)|550|276|
|arrayBuffer (128)|4,387|2194|
|arrayBuffer (1024)|549|275|
|slice (0, 64)|150,159|86444|
|slice (0, 512)|32,651|16326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4927.344111370647,"samples":2464},{"name":"new Blob (1024)","opsSec":629.9450437533596,"samples":317},{"name":"text (128)","opsSec":4320.142649710895,"samples":2161},{"name":"text (1024)","opsSec":550.8769239099632,"samples":276},{"name":"arrayBuffer (128)","opsSec":4387.990987066512,"samples":2194},{"name":"arrayBuffer (1024)","opsSec":549.8473063033449,"samples":275},{"name":"slice (0, 64)","opsSec":150159.64198261534,"samples":86444},{"name":"slice (0, 512)","opsSec":32651.176406726314,"samples":16326}]}-->
