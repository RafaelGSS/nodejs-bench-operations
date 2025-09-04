## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,048|751123|
|fromUnixToISOString(new Date())|2,108,032|1054132|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":751123,"opsSec":1502048.729932103},{"name":"fromUnixToISOString(new Date())","samples":1054132,"opsSec":2108032.1206827895}]}-->
