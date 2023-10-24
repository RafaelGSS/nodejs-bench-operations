## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,909,349|84|
|Using replaceAll()|1,483,554|83|
|Using replaceAll(//g)|1,573,026|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1909348.8959436321,"samples":5},{"name":"Using replaceAll()","opsSec":1483553.892831439,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1573026.3825185162,"samples":4}]}-->
