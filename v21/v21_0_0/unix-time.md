## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,613,129|93|
|Date.now()|25,589,481|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:17:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":13613128.682507634,"samples":5},{"name":"Date.now()","opsSec":25589480.77956875,"samples":5}]}-->
