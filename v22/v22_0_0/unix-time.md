## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,021,257|2510629|
|Date.now()|8,876,591|4438296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5021257.206631804,"samples":2510629},{"name":"Date.now()","opsSec":8876591.769213703,"samples":4438296}]}-->
