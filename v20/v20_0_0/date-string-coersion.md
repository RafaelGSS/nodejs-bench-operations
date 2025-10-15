## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,074,907|537490|
|Using brackets {}|1,094,977|547489|
|Using '' + |1,104,258|552184|
|Using date.toString()|1,220,247|610124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":537490,"opsSec":1074907.1427938615},{"name":"Using brackets {}","samples":547489,"opsSec":1094977.2466556542},{"name":"Using '' + ","samples":552184,"opsSec":1104258.360395913},{"name":"Using date.toString()","samples":610124,"opsSec":1220247.914582646}]}-->
