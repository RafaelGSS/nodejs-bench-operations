## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,421,907|3210954|
|Date.now()|10,021,762|5010882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6421907.41263098,"samples":3210954},{"name":"Date.now()","opsSec":10021762.828683842,"samples":5010882}]}-->
