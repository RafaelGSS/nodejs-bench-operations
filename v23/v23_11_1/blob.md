## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,377|2208|
|new Blob (1024)|579|294|
|text (128)|4,156|2084|
|text (1024)|514|258|
|arrayBuffer (128)|4,078|2041|
|arrayBuffer (1024)|512|257|
|slice (0, 64)|148,771|81994|
|slice (0, 512)|31,803|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2208,"opsSec":4377.806336443236},{"name":"new Blob (1024)","samples":294,"opsSec":579.9863632185904},{"name":"text (128)","samples":2084,"opsSec":4156.7828466661795},{"name":"text (1024)","samples":258,"opsSec":514.1884247109574},{"name":"arrayBuffer (128)","samples":2041,"opsSec":4078.4595952653},{"name":"arrayBuffer (1024)","samples":257,"opsSec":512.8189369626601},{"name":"slice (0, 64)","samples":81994,"opsSec":148771.88935972087},{"name":"slice (0, 512)","samples":15910,"opsSec":31803.61299758132}]}-->
