## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,342,406|98|
|Date.now()|15,921,103|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":9342406.344604969,"samples":5},{"name":"Date.now()","opsSec":15921102.524693666,"samples":5}]}-->
