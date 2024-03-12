## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,730,136|92|
|Date.now()|21,373,007|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11730135.811108222,"samples":5},{"name":"Date.now()","opsSec":21373006.58321159,"samples":5}]}-->
