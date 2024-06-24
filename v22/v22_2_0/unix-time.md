## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,800,289|3400145|
|Date.now()|9,586,928|4793465|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6800289.30637009,"samples":3400145},{"name":"Date.now()","opsSec":9586928.427757557,"samples":4793465}]}-->
