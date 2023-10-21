## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,534,548|96|
|Date.now()|15,152,903|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7534547.607374597,"samples":6},{"name":"Date.now()","opsSec":15152902.72955485,"samples":5}]}-->
