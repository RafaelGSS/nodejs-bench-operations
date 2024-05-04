## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,174,046|95|
|Date.now()|21,977,462|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:06:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":12174045.667185495,"samples":6},{"name":"Date.now()","opsSec":21977462.341337234,"samples":6}]}-->
