## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,299,295|96|
|Date.now()|14,736,393|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7299295.432304326,"samples":6},{"name":"Date.now()","opsSec":14736393.051506799,"samples":7}]}-->
