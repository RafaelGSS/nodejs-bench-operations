## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,154,543|3577272|
|Date.now()|10,240,664|5120333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:46:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":7154543.62796334,"samples":3577272},{"name":"Date.now()","opsSec":10240664.99641191,"samples":5120333}]}-->
