## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,279,325|3139663|
|Date.now()|9,142,550|4571276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6279325.637489358,"samples":3139663},{"name":"Date.now()","opsSec":9142550.253812822,"samples":4571276}]}-->
