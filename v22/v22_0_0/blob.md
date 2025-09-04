## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,781|2397|
|new Blob (1024)|562|284|
|text (128)|4,484|2248|
|text (1024)|568|286|
|arrayBuffer (128)|4,539|2270|
|arrayBuffer (1024)|564|283|
|slice (0, 64)|147,602|94617|
|slice (0, 512)|34,193|17098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2397,"opsSec":4781.083444091775},{"name":"new Blob (1024)","samples":284,"opsSec":562.0715369740494},{"name":"text (128)","samples":2248,"opsSec":4484.490805479223},{"name":"text (1024)","samples":286,"opsSec":568.4322802674835},{"name":"arrayBuffer (128)","samples":2270,"opsSec":4539.4384805388345},{"name":"arrayBuffer (1024)","samples":283,"opsSec":564.344610212243},{"name":"slice (0, 64)","samples":94617,"opsSec":147602.97730354426},{"name":"slice (0, 512)","samples":17098,"opsSec":34193.587779156536}]}-->
