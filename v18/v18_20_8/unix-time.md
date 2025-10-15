## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,939,173|4469589|
|Date.now()|16,850,283|8436574|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:13:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4469589,"opsSec":8939173.423143208},{"name":"Date.now()","samples":8436574,"opsSec":16850283.34502064}]}-->
