## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,317,228|3158615|
|Date.now()|9,091,016|4545509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6317228.603192022,"samples":3158615},{"name":"Date.now()","opsSec":9091016.138823051,"samples":4545509}]}-->
