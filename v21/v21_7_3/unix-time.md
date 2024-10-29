## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,672,894|5836835|
|Date.now()|19,354,623|9677314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11672894.803056128,"samples":5836835},{"name":"Date.now()","opsSec":19354623.006507263,"samples":9677314}]}-->
