## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,262,984|93|
|Date.now()|19,377,277|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11262984.447530711,"samples":5},{"name":"Date.now()","opsSec":19377276.889552742,"samples":6}]}-->
