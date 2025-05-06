## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,475,261|737772|
|fromUnixToISOString(new Date())|2,095,701|1047921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":737772,"opsSec":1475261.5877237387},{"name":"fromUnixToISOString(new Date())","samples":1047921,"opsSec":2095701.571229115}]}-->
