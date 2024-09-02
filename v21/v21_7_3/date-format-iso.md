## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,128,254|564128|
|fromUnixToISOString(new Date())|1,781,535|890768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:00:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1128254.5874258794,"samples":564128},{"name":"fromUnixToISOString(new Date())","opsSec":1781535.8824168532,"samples":890768}]}-->
