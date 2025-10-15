## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|93,944,109|46972078|
|Using backtick (`)|93,340,213|46704150|
|Using array.join|10,558,421|5280670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:53:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":46972078,"opsSec":93944109.96738613},{"name":"Using backtick (`)","samples":46704150,"opsSec":93340213.72781797},{"name":"Using array.join","samples":5280670,"opsSec":10558421.567811284}]}-->
