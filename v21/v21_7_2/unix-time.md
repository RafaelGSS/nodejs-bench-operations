## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,343,969|93|
|Date.now()|23,922,276|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:05:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13343968.585740784,"samples":5},{"name":"Date.now()","opsSec":23922275.90199401,"samples":6}]}-->
