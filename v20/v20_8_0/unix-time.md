## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,549,745|90|
|Date.now()|14,840,368|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7549744.985777698,"samples":5},{"name":"Date.now()","opsSec":14840368.096049698,"samples":6}]}-->
