## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,220,053|4610042|
|Date.now()|20,641,140|10320603|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:29:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":4610042,"opsSec":9220053.629143344},{"name":"Date.now()","samples":10320603,"opsSec":20641140.4024558}]}-->
