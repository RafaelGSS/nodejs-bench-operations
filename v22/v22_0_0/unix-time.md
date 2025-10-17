## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,049,847|4552396|
|Date.now()|20,531,693|10265851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:29:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":4552396,"opsSec":9049847.102197906},{"name":"Date.now()","samples":10265851,"opsSec":20531693.540942263}]}-->
