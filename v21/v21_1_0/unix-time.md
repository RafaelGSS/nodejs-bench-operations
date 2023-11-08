## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,658,160|93|
|Date.now()|25,400,678|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:18:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":13658160.158269206,"samples":5},{"name":"Date.now()","opsSec":25400678.40132081,"samples":6}]}-->
