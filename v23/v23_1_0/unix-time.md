## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,868,024|6434016|
|Date.now()|20,085,855|10044133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:16:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":12868024.382129567,"samples":6434016},{"name":"Date.now()","opsSec":20085855.05464608,"samples":10044133}]}-->
