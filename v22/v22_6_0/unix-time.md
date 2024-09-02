## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,179,296|3089649|
|Date.now()|8,993,691|4496846|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:44:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6179296.047344509,"samples":3089649},{"name":"Date.now()","opsSec":8993691.5683156,"samples":4496846}]}-->
