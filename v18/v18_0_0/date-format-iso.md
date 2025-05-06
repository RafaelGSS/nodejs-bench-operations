## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,423,467|1211867|
|fromUnixToISOString(new Date())|1,941,801|971064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":1211867,"opsSec":2423467.093875083},{"name":"fromUnixToISOString(new Date())","samples":971064,"opsSec":1941801.994746706}]}-->
