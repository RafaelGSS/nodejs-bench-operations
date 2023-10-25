## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,292,441|79|
|Using parseInt(x, 10) - big number (10 len)|11,603,862|87|
|Using + - small number (2 len)|701,114,233|86|
|Using + - big number (10 len)|701,052,382|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142292440.63735244,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11603862.094019089,"samples":6},{"name":"Using + - small number (2 len)","opsSec":701114233.2855191,"samples":6},{"name":"Using + - big number (10 len)","opsSec":701052381.8984606,"samples":8}]}-->
