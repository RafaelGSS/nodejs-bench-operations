## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,588,230|90|
|Date.now()|12,315,744|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6588230.298115629,"samples":5},{"name":"Date.now()","opsSec":12315744.079805996,"samples":6}]}-->
