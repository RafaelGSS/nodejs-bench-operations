## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,225,196|92|
|Date.now()|12,672,491|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6225196.177922035,"samples":5},{"name":"Date.now()","opsSec":12672491.095340414,"samples":6}]}-->
