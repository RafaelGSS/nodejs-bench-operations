## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,271,940|635971|
|fromUnixToISOString(new Date())|1,846,435|923218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1271940.957008171,"samples":635971},{"name":"fromUnixToISOString(new Date())","opsSec":1846435.852284029,"samples":923218}]}-->
