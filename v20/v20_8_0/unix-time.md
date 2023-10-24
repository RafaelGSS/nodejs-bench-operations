## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,126,587|91|
|Date.now()|16,983,780|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":8126587.285750888,"samples":4},{"name":"Date.now()","opsSec":16983779.699043665,"samples":5}]}-->
