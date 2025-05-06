## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,460,971|731207|
|fromUnixToISOString(new Date())|2,109,836|1055032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":731207,"opsSec":1460971.5506466723},{"name":"fromUnixToISOString(new Date())","samples":1055032,"opsSec":2109836.7199491803}]}-->
