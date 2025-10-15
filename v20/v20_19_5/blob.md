## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,295|2152|
|new Blob (1024)|537|276|
|text (128)|4,531|2273|
|text (1024)|578|290|
|arrayBuffer (128)|4,507|2254|
|arrayBuffer (1024)|570|288|
|slice (0, 64)|63,142|31572|
|slice (0, 512)|24,572|12289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2152,"opsSec":4295.53867369379},{"name":"new Blob (1024)","samples":276,"opsSec":537.3010906009052},{"name":"text (128)","samples":2273,"opsSec":4531.984583883205},{"name":"text (1024)","samples":290,"opsSec":578.5077519809357},{"name":"arrayBuffer (128)","samples":2254,"opsSec":4507.931533535868},{"name":"arrayBuffer (1024)","samples":288,"opsSec":570.5819150388908},{"name":"slice (0, 64)","samples":31572,"opsSec":63142.886664622325},{"name":"slice (0, 512)","samples":12289,"opsSec":24572.920040240082}]}-->
