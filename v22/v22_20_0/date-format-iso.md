## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,517,437|758923|
|fromUnixToISOString(new Date())|2,138,746|1069548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":758923,"opsSec":1517437.712139421},{"name":"fromUnixToISOString(new Date())","samples":1069548,"opsSec":2138746.190950501}]}-->
