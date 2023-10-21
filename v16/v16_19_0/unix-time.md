## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,581,031|83|
|Date.now()|11,891,787|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":5581031.189157882,"samples":5},{"name":"Date.now()","opsSec":11891787.45235896,"samples":5}]}-->
