## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,402,904|98|
|Date.now()|14,294,212|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":6402903.95183397,"samples":6},{"name":"Date.now()","opsSec":14294211.756282976,"samples":5}]}-->
