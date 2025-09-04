## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,468,691|1234347|
|fromUnixToISOString(new Date())|2,049,148|1024607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1234347,"opsSec":2468691.4473730433},{"name":"fromUnixToISOString(new Date())","samples":1024607,"opsSec":2049148.9600120091}]}-->
