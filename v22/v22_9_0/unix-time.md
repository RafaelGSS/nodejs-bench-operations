## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,328,447|3665418|
|Date.now()|15,048,480|7536167|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:46:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7328447.702864323,"samples":3665418},{"name":"Date.now()","opsSec":15048480.262675148,"samples":7536167}]}-->
