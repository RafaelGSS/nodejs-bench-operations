## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,361|2194|
|new Blob (1024)|538|273|
|text (128)|4,582|2297|
|text (1024)|575|289|
|arrayBuffer (128)|4,575|2297|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|56,456|29234|
|slice (0, 512)|24,793|12399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2194,"opsSec":4361.873381674646},{"name":"new Blob (1024)","samples":273,"opsSec":538.7344451800592},{"name":"text (128)","samples":2297,"opsSec":4582.218355958583},{"name":"text (1024)","samples":289,"opsSec":575.2387321351401},{"name":"arrayBuffer (128)","samples":2297,"opsSec":4575.103213292769},{"name":"arrayBuffer (1024)","samples":284,"opsSec":567.276679121093},{"name":"slice (0, 64)","samples":29234,"opsSec":56456.478044055606},{"name":"slice (0, 512)","samples":12399,"opsSec":24793.415598282216}]}-->
