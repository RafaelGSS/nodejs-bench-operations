## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,497,816|748920|
|fromUnixToISOString(new Date())|1,964,603|982447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":748920,"opsSec":1497816.804808961},{"name":"fromUnixToISOString(new Date())","samples":982447,"opsSec":1964603.4390805669}]}-->
