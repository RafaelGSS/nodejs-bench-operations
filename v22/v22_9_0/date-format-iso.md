## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,458,187|729095|
|fromUnixToISOString(new Date())|2,146,081|1073041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:52:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1458187.2440261086,"samples":729095},{"name":"fromUnixToISOString(new Date())","opsSec":2146081.188781311,"samples":1073041}]}-->
