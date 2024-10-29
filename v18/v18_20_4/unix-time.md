## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,167,927|5084042|
|Date.now()|18,443,864|9221936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:12:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10167927.779957589,"samples":5084042},{"name":"Date.now()","opsSec":18443864.69622958,"samples":9221936}]}-->
