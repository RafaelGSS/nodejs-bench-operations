## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,889,509|3444755|
|Date.now()|9,986,267|4993134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:01:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6889509.363086878,"samples":3444755},{"name":"Date.now()","opsSec":9986267.06750109,"samples":4993134}]}-->
