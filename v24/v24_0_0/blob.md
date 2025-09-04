## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,515|2265|
|new Blob (1024)|599|300|
|text (128)|4,220|2111|
|text (1024)|536|270|
|arrayBuffer (128)|4,258|2130|
|arrayBuffer (1024)|533|267|
|slice (0, 64)|163,731|81868|
|slice (0, 512)|21,609|10807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2265,"opsSec":4515.007880213687},{"name":"new Blob (1024)","samples":300,"opsSec":599.1964081099412},{"name":"text (128)","samples":2111,"opsSec":4220.897628166452},{"name":"text (1024)","samples":270,"opsSec":536.7964054935712},{"name":"arrayBuffer (128)","samples":2130,"opsSec":4258.739872941515},{"name":"arrayBuffer (1024)","samples":267,"opsSec":533.459931566801},{"name":"slice (0, 64)","samples":81868,"opsSec":163731.81075788994},{"name":"slice (0, 512)","samples":10807,"opsSec":21609.75597358532}]}-->
