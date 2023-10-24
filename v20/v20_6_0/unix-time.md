## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,218,265|84|
|Date.now()|15,095,351|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7218265.298132099,"samples":5},{"name":"Date.now()","opsSec":15095350.513327595,"samples":4}]}-->
