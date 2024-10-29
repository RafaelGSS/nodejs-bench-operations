## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,234,803|5617414|
|Date.now()|19,358,941|9679473|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:14:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11234803.126145879,"samples":5617414},{"name":"Date.now()","opsSec":19358941.04411109,"samples":9679473}]}-->
