## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,639,434|3319718|
|Date.now()|9,371,898|4685950|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:03:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6639434.531948786,"samples":3319718},{"name":"Date.now()","opsSec":9371898.416449143,"samples":4685950}]}-->
