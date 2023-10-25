## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,052,982|86|
|Date.now()|15,871,351|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:18:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8052981.901177147,"samples":7},{"name":"Date.now()","opsSec":15871351.07214695,"samples":7}]}-->
