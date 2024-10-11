## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,641,346|1320675|
|fromUnixToISOString(new Date())|2,095,394|1051163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:52:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2641346.5662494637,"samples":1320675},{"name":"fromUnixToISOString(new Date())","opsSec":2095394.59811023,"samples":1051163}]}-->
