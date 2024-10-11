## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,956,203|5478105|
|Date.now()|19,202,235|9601119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10956203.426277945,"samples":5478105},{"name":"Date.now()","opsSec":19202235.65732725,"samples":9601119}]}-->
