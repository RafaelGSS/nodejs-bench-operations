## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,839|2428|
|new Blob (1024)|631|321|
|text (128)|4,226|2114|
|text (1024)|534|269|
|arrayBuffer (128)|4,231|2116|
|arrayBuffer (1024)|530|266|
|slice (0, 64)|204,221|111367|
|slice (0, 512)|35,220|22933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2428,"opsSec":4839.7775303369535},{"name":"new Blob (1024)","samples":321,"opsSec":631.5917680910406},{"name":"text (128)","samples":2114,"opsSec":4226.398389424734},{"name":"text (1024)","samples":269,"opsSec":534.1758945982712},{"name":"arrayBuffer (128)","samples":2116,"opsSec":4231.466885949973},{"name":"arrayBuffer (1024)","samples":266,"opsSec":530.1477919108291},{"name":"slice (0, 64)","samples":111367,"opsSec":204221.01233767997},{"name":"slice (0, 512)","samples":22933,"opsSec":35220.24288474151}]}-->
