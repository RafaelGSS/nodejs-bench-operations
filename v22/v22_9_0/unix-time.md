## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,030,334|5015678|
|Date.now()|19,246,996|9623501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:52:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":10030334.249971291,"samples":5015678},{"name":"Date.now()","opsSec":19246996.803310864,"samples":9623501}]}-->
