## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,487,548|87|
|Date.now()|13,481,596|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6487548.371883318,"samples":5},{"name":"Date.now()","opsSec":13481596.06945632,"samples":4}]}-->
