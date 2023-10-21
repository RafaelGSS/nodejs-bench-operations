## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,565,996|86|
|Date.now()|11,600,851|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":5565995.727853332,"samples":7},{"name":"Date.now()","opsSec":11600850.74724363,"samples":4}]}-->
