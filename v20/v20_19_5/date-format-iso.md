## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,490,771|746188|
|fromUnixToISOString(new Date())|2,190,376|1095189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":746188,"opsSec":1490771.601786725},{"name":"fromUnixToISOString(new Date())","samples":1095189,"opsSec":2190376.2214145083}]}-->
