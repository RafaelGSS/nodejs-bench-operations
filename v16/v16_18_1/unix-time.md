## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,576,479|96|
|Date.now()|14,326,424|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7576479.405840729,"samples":8},{"name":"Date.now()","opsSec":14326423.660767758,"samples":4}]}-->
