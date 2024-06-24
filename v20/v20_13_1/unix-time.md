## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,987,545|3493773|
|Date.now()|10,248,116|5124059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6987545.147523997,"samples":3493773},{"name":"Date.now()","opsSec":10248116.544761961,"samples":5124059}]}-->
