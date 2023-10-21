## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,739,795|97|
|Date.now()|15,227,450|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7739795.4510508785,"samples":6},{"name":"Date.now()","opsSec":15227450.136804735,"samples":6}]}-->
