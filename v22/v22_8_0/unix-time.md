## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,991,341|5011159|
|Date.now()|19,237,094|9619419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:53:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9991341.245256856,"samples":5011159},{"name":"Date.now()","opsSec":19237094.00353183,"samples":9619419}]}-->
