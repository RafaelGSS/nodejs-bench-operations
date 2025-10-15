## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,465,668|732835|
|fromUnixToISOString(new Date())|2,602,386|1301320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":732835,"opsSec":1465668.1034254741},{"name":"fromUnixToISOString(new Date())","samples":1301320,"opsSec":2602386.0331470254}]}-->
