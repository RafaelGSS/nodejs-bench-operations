## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,275,750|93|
|Date.now()|22,010,492|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:06:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":12275750.41978907,"samples":6},{"name":"Date.now()","opsSec":22010491.92258819,"samples":5}]}-->
