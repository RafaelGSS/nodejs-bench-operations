## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,905,601|97|
|Date.now()|22,499,760|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:14:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10905600.935648855,"samples":4},{"name":"Date.now()","opsSec":22499760.431089103,"samples":5}]}-->
