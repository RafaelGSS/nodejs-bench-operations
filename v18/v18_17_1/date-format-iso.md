## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,298,541|94|
|fromUnixToISOString(new Date())|1,103,039|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1298541.440511099,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1103039.1009930912,"samples":6}]}-->
