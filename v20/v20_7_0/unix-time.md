## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,255,936|93|
|Date.now()|14,221,796|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7255936.017007365,"samples":5},{"name":"Date.now()","opsSec":14221796.394888004,"samples":5}]}-->
