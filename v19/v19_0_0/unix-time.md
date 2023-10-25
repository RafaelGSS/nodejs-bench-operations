## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,898,678|96|
|Date.now()|15,979,626|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":8898678.049171567,"samples":5},{"name":"Date.now()","opsSec":15979626.003136432,"samples":6}]}-->
