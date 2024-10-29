## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,061,280|5031677|
|Date.now()|19,452,330|9728224|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:13:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10061280.873076102,"samples":5031677},{"name":"Date.now()","opsSec":19452330.330715593,"samples":9728224}]}-->
