## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,484,442|4746628|
|Date.now()|18,890,563|9446634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":4746628,"opsSec":9484442.354315637},{"name":"Date.now()","samples":9446634,"opsSec":18890563.21137827}]}-->
