## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,629,860|93|
|Date.now()|21,639,142|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":12629860.447526755,"samples":6},{"name":"Date.now()","opsSec":21639142.049575195,"samples":5}]}-->
