## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,311,584|3155793|
|Date.now()|7,940,276|3970139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:31:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6311584.914408829,"samples":3155793},{"name":"Date.now()","opsSec":7940276.983646397,"samples":3970139}]}-->
