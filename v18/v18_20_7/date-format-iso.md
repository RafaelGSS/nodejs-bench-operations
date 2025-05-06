## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,448,991|1227420|
|fromUnixToISOString(new Date())|2,038,687|1019345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:28:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":1227420,"opsSec":2448991.729382499},{"name":"fromUnixToISOString(new Date())","samples":1019345,"opsSec":2038687.667741308}]}-->
