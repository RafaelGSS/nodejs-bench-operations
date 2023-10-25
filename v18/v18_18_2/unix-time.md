## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,692,493|89|
|Date.now()|12,170,568|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:18:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":5692493.214582549,"samples":8},{"name":"Date.now()","opsSec":12170567.973666528,"samples":5}]}-->
