## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,577,851|94|
|Date.now()|20,863,131|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:13:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11577851.190370305,"samples":5},{"name":"Date.now()","opsSec":20863131.36974439,"samples":8}]}-->
