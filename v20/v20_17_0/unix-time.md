## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,885,411|5442709|
|Date.now()|19,622,850|9812290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:52:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":10885411.904169334,"samples":5442709},{"name":"Date.now()","opsSec":19622850.128024116,"samples":9812290}]}-->
