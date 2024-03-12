## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,983,225|93|
|Date.now()|21,380,138|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().getTime()","opsSec":11983224.779789722,"samples":5},{"name":"Date.now()","opsSec":21380138.492199305,"samples":5}]}-->
