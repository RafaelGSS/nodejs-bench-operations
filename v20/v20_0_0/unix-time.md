## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,889,055|2944528|
|Date.now()|8,609,062|4304532|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:42:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5889055.042518741,"samples":2944528},{"name":"Date.now()","opsSec":8609062.884305062,"samples":4304532}]}-->
