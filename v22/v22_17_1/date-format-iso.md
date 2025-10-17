## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,521,720|760861|
|fromUnixToISOString(new Date())|2,096,102|1048052|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":760861,"opsSec":1521720.3169773293},{"name":"fromUnixToISOString(new Date())","samples":1048052,"opsSec":2096102.666878704}]}-->
