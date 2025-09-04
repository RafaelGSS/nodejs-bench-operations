## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,434,183|1217093|
|fromUnixToISOString(new Date())|1,932,742|966372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1217093,"opsSec":2434183.478185917},{"name":"fromUnixToISOString(new Date())","samples":966372,"opsSec":1932742.9911081588}]}-->
