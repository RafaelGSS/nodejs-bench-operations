## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,518,536|759404|
|fromUnixToISOString(new Date())|2,020,839|1010876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":759404,"opsSec":1518536.482639831},{"name":"fromUnixToISOString(new Date())","samples":1010876,"opsSec":2020839.0172654237}]}-->
