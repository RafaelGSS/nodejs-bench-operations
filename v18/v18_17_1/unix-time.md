## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,359,214|93|
|Date.now()|15,231,443|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7359214.147970316,"samples":6},{"name":"Date.now()","opsSec":15231443.150928186,"samples":6}]}-->
