## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,124,256|93|
|Date.now()|17,527,035|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":9124255.758472113,"samples":5},{"name":"Date.now()","opsSec":17527035.25197094,"samples":5}]}-->
