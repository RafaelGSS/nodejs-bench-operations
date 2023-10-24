## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,888,849|96|
|Date.now()|17,222,264|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":8888849.21685578,"samples":6},{"name":"Date.now()","opsSec":17222263.755127717,"samples":6}]}-->
