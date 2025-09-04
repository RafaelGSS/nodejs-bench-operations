## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,223,166|611585|
|fromUnixToISOString(new Date())|2,763,650|1381956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:47:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":611585,"opsSec":1223166.3647495639},{"name":"fromUnixToISOString(new Date())","samples":1381956,"opsSec":2763650.2104701633}]}-->
