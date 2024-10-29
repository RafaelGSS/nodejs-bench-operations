## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,270,834|5635728|
|Date.now()|19,638,669|9823918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11270834.819209773,"samples":5635728},{"name":"Date.now()","opsSec":19638669.76871747,"samples":9823918}]}-->
