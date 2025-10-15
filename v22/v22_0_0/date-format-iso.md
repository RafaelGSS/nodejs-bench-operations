## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,215,643|607844|
|fromUnixToISOString(new Date())|1,856,675|928484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:19:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":607844,"opsSec":1215643.0844193168},{"name":"fromUnixToISOString(new Date())","samples":928484,"opsSec":1856675.68126739}]}-->
