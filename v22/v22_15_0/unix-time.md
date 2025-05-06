## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,602,016|5303642|
|Date.now()|19,597,164|9798850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:31:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5303642,"opsSec":10602016.02786801},{"name":"Date.now()","samples":9798850,"opsSec":19597164.370303433}]}-->
