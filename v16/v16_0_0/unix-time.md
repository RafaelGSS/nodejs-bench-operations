## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,783,602|89|
|Date.now()|20,973,403|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10783601.896675928,"samples":5},{"name":"Date.now()","opsSec":20973402.680272274,"samples":5}]}-->
