## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,041,530|96|
|Date.now()|23,975,517|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13041529.568679605,"samples":5},{"name":"Date.now()","opsSec":23975516.666572284,"samples":6}]}-->
