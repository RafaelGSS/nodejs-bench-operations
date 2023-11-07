## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|854,448,034|96|
|Using parseInt(x, 10) - big number (10 len)|854,444,268|97|
|Using + - small number (2 len)|855,138,709|98|
|Using + - big number (10 len)|855,600,852|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:09:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":854448034.316125,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":854444267.7405443,"samples":7},{"name":"Using + - small number (2 len)","opsSec":855138709.3596416,"samples":6},{"name":"Using + - big number (10 len)","opsSec":855600852.413198,"samples":7}]}-->
