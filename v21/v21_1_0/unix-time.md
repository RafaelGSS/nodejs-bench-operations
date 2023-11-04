## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,721,777|89|
|Date.now()|16,953,563|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:58:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7721777.355119308,"samples":6},{"name":"Date.now()","opsSec":16953563.098794278,"samples":5}]}-->
