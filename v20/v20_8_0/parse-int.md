## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|853,033,140|95|
|Using parseInt(x, 10) - big number (10 len)|855,061,589|97|
|Using + - small number (2 len)|855,268,702|93|
|Using + - big number (10 len)|854,848,382|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:12:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":853033140.1025367,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":855061588.6188734,"samples":6},{"name":"Using + - small number (2 len)","opsSec":855268701.5088553,"samples":9},{"name":"Using + - big number (10 len)","opsSec":854848382.4355406,"samples":7}]}-->
