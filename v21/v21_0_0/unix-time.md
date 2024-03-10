## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,008,897|93|
|Date.now()|21,639,901|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":12008897.43687197,"samples":5},{"name":"Date.now()","opsSec":21639901.39610351,"samples":6}]}-->
