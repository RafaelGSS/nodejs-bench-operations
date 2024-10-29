## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,836,232|4918390|
|Date.now()|19,263,162|9632930|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":9836232.43661272,"samples":4918390},{"name":"Date.now()","opsSec":19263162.194134712,"samples":9632930}]}-->
