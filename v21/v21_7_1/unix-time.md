## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,662,448|94|
|Date.now()|21,810,293|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().getTime()","opsSec":11662448.295922719,"samples":6},{"name":"Date.now()","opsSec":21810292.824113082,"samples":5}]}-->
