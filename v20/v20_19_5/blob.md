## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,023|2050|
|new Blob (1024)|507|254|
|text (128)|4,488|2245|
|text (1024)|567|284|
|arrayBuffer (128)|4,486|2249|
|arrayBuffer (1024)|557|281|
|slice (0, 64)|61,647|30824|
|slice (0, 512)|24,985|12498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:49:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2050,"opsSec":4023.490701004463},{"name":"new Blob (1024)","samples":254,"opsSec":507.0510873553862},{"name":"text (128)","samples":2245,"opsSec":4488.893344146081},{"name":"text (1024)","samples":284,"opsSec":567.4184392235971},{"name":"arrayBuffer (128)","samples":2249,"opsSec":4486.840026381262},{"name":"arrayBuffer (1024)","samples":281,"opsSec":557.384446547633},{"name":"slice (0, 64)","samples":30824,"opsSec":61647.91652872103},{"name":"slice (0, 512)","samples":12498,"opsSec":24985.586357404445}]}-->
