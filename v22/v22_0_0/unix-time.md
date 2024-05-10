## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,572,076|3286039|
|Date.now()|9,558,583|4779292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:47:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6572076.067809933,"samples":3286039},{"name":"Date.now()","opsSec":9558583.522075452,"samples":4779292}]}-->
