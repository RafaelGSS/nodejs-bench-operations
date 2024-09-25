## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,131,123|6565562|
|Using Object.getOwnPropertyNames()|13,200,562|6600282|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:34:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":13131123.94743997,"samples":6565562},{"name":"Using Object.getOwnPropertyNames()","opsSec":13200562.917537434,"samples":6600282}]}-->
