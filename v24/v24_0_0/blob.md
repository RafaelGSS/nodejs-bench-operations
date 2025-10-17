## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,510|2262|
|new Blob (1024)|591|298|
|text (128)|4,309|2160|
|text (1024)|546|274|
|arrayBuffer (128)|4,368|2185|
|arrayBuffer (1024)|546|274|
|slice (0, 64)|155,170|77586|
|slice (0, 512)|20,341|14563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:49:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2262,"opsSec":4510.11984459132},{"name":"new Blob (1024)","samples":298,"opsSec":591.3201844400678},{"name":"text (128)","samples":2160,"opsSec":4309.509412950169},{"name":"text (1024)","samples":274,"opsSec":546.9749874706296},{"name":"arrayBuffer (128)","samples":2185,"opsSec":4368.383907636602},{"name":"arrayBuffer (1024)","samples":274,"opsSec":546.350603586911},{"name":"slice (0, 64)","samples":77586,"opsSec":155170.63387773934},{"name":"slice (0, 512)","samples":14563,"opsSec":20341.63032718147}]}-->
