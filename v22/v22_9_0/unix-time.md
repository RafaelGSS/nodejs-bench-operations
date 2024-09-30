## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,374,990|4687619|
|Date.now()|18,316,650|9159097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:54:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9374990.762743605,"samples":4687619},{"name":"Date.now()","opsSec":18316650.272715013,"samples":9159097}]}-->
