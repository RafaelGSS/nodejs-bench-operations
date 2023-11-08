## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,144,728|96|
|Date.now()|22,412,990|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:15:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11144727.986459576,"samples":6},{"name":"Date.now()","opsSec":22412989.832018808,"samples":5}]}-->
