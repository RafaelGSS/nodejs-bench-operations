## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,625,263|5314255|
|Date.now()|20,640,026|10320820|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5314255,"opsSec":10625263.556972802},{"name":"Date.now()","samples":10320820,"opsSec":20640026.11507801}]}-->
