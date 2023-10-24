## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,992,222|82|
|Date.now()|13,977,735|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6992221.776542255,"samples":4},{"name":"Date.now()","opsSec":13977735.24283353,"samples":4}]}-->
