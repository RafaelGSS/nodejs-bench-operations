## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,583,773|3291887|
|Date.now()|9,553,465|4776733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 20:00:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6583773.446963625,"samples":3291887},{"name":"Date.now()","opsSec":9553465.465004476,"samples":4776733}]}-->
