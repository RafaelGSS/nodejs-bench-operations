## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,632,742|4817081|
|Date.now()|19,215,625|9610550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":4817081,"opsSec":9632742.056758897},{"name":"Date.now()","samples":9610550,"opsSec":19215625.391463473}]}-->
