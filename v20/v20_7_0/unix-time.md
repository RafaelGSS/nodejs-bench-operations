## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,495,724|93|
|Date.now()|25,346,901|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:17:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":13495724.326157097,"samples":5},{"name":"Date.now()","opsSec":25346900.98159747,"samples":5}]}-->
