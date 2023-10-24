## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,088,156|88|
|Date.now()|13,217,877|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7088156.051832256,"samples":6},{"name":"Date.now()","opsSec":13217877.283795146,"samples":6}]}-->
