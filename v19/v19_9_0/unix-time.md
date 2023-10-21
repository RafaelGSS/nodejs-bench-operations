## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,939,053|94|
|Date.now()|15,447,903|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8939053.076184077,"samples":5},{"name":"Date.now()","opsSec":15447903.117778068,"samples":8}]}-->
