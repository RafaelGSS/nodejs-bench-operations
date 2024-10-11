## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,806,547|4904309|
|Date.now()|17,054,559|8527281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:09:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9806547.79853354,"samples":4904309},{"name":"Date.now()","opsSec":17054559.407706972,"samples":8527281}]}-->
