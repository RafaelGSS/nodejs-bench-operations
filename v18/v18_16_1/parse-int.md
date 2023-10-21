## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,586,009|95|
|Using parseInt(x, 10) - big number (10 len)|12,877,832|99|
|Using + - small number (2 len)|710,802,848|95|
|Using + - big number (10 len)|709,125,775|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157586008.743279,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12877832.127714409,"samples":6},{"name":"Using + - small number (2 len)","opsSec":710802847.9479543,"samples":6},{"name":"Using + - big number (10 len)","opsSec":709125774.8360568,"samples":6}]}-->
