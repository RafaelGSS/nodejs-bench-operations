## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,552,070|776048|
|fromUnixToISOString(new Date())|2,703,936|1351969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:21:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":776048,"opsSec":1552070.2076972884},{"name":"fromUnixToISOString(new Date())","samples":1351969,"opsSec":2703936.188362754}]}-->
