## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,690,857|3345429|
|Date.now()|9,558,549|4779275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:48:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6690857.571785287,"samples":3345429},{"name":"Date.now()","opsSec":9558549.751475476,"samples":4779275}]}-->
