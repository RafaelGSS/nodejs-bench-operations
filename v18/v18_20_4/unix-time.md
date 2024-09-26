## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,719,772|2859887|
|Date.now()|8,612,409|4306205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5719772.305347074,"samples":2859887},{"name":"Date.now()","opsSec":8612409.670692634,"samples":4306205}]}-->
